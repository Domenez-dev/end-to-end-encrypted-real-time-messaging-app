// Set up WebSocket connection
const roomName = "someRoom";  // Change this dynamically based on the room
const socket = new WebSocket(`ws://${window.location.host}/ws/chat/${roomName}/`);

// Public and private keys, these should be loaded from storage or generated
let publicKeyBase64;  // Set this to the recipient’s public key
let privateKeyBase64 = localStorage.getItem("privateKey");  // User's private key stored securely

// Message form submission
document.getElementById("message-form").onsubmit = async function(event) {
    event.preventDefault();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    if (!publicKeyBase64) {
        console.error("Recipient public key not found!");
        return;
    }

    // Encrypt the message using the recipient's public key
    const encryptedMessage = await encryptMessage(publicKeyBase64, message);

    // Send encrypted message over WebSocket
    socket.send(JSON.stringify({
        'message': encryptedMessage,
        'sender': 'User1',  // Replace with dynamic sender info
    }));

    // Clear input
    messageInput.value = '';
};

// Handle receiving messages
socket.onmessage = async function(event) {
    const data = JSON.parse(event.data);
    const decryptedMessage = await decryptMessage(data.message);

    const messageElement = document.createElement("div");
    messageElement.innerText = `${data.sender}: ${decryptedMessage}`;
    document.getElementById("messages").appendChild(messageElement);
};

// Encrypt message function
async function encryptMessage(publicKeyBase64, message) {
    const publicKeyBuffer = Uint8Array.from(atob(publicKeyBase64), c => c.charCodeAt(0)).buffer;
    const publicKey = await window.crypto.subtle.importKey(
        "spki",
        publicKeyBuffer,
        { name: "RSA-OAEP", hash: "SHA-256" },
        true,
        ["encrypt"]
    );

    const encodedMessage = new TextEncoder().encode(message);
    const encryptedMessage = await window.crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        publicKey,
        encodedMessage
    );

    return btoa(String.fromCharCode(...new Uint8Array(encryptedMessage)));
}

// Decrypt message function
async function decryptMessage(encryptedMessageBase64) {
    if (!privateKeyBase64) {
        console.error("Private key not found for decryption!");
        return null;
    }

    const privateKeyBuffer = Uint8Array.from(atob(privateKeyBase64), c => c.charCodeAt(0)).buffer;
    const privateKey = await window.crypto.subtle.importKey(
        "pkcs8",
        privateKeyBuffer,
        { name: "RSA-OAEP", hash: "SHA-256" },
        true,
        ["decrypt"]
    );

    const encryptedMessageBuffer = Uint8Array.from(atob(encryptedMessageBase64), c => c.charCodeAt(0)).buffer;
    const decryptedMessage = await window.crypto.subtle.decrypt(
        { name: "RSA-OAEP" },
        privateKey,
        encryptedMessageBuffer
    );

    return new TextDecoder().decode(decryptedMessage);
}

