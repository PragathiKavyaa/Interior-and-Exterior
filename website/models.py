
from django.db import models


class Project(models.Model):

    CATEGORY_CHOICES = [
        ("interior", "Interior"),
        ("exterior", "Exterior"),
        ("commercial", "Commercial"),
    ]

    title = models.CharField(max_length=200)

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default="interior"
    )

    description = models.TextField()

    project_type = models.CharField(
        max_length=100,
        default="Residential"
    )

    image = models.ImageField(
        upload_to="projects/"
    )

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
