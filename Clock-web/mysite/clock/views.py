from django.shortcuts import render
from django.utils import timezone

def index(request):
    now = timezone.now()
    return render(request, 'index.html', {'current_time': now})
