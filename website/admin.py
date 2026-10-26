
from django.contrib import admin
from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "category",
        "project_type",
        "is_active",
        "created_at",
    )

    list_filter = ("category", "is_active")

    search_fields = ("title", "description", "project_type")

    list_editable = ("is_active",)

    readonly_fields = ("created_at",)

    ordering = ("-created_at",)
