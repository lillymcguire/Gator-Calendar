from django.shortcuts import render

@require_http_methods(["GET", "POST"])
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
