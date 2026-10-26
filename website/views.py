# from django.shortcuts import render

# # Create your views here.
# def home(request):
#     return render(request, 'website/index.html')

from django.shortcuts import render
from .models import Project


def home(request):
    projects = Project.objects.filter(is_active=True)

    return render(
        request,
        "website/index.html",
        {"projects": projects}
    )