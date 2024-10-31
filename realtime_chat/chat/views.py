from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required  # Ensure the user is logged in
def chat_room(request, room_name):
    """
    Render the chat room template.
    """
    return render(
        request,
        "chat/chat.html",
        {
            "room_name": room_name  # Pass the room name to the template
        },
    )


# Create your views here.
