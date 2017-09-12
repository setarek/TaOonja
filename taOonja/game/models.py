import os

from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=250)
    local_name = models.CharField(max_length=250)
    visited = models.BooleanField(default=False)
    coordinates = models.CharField(max_length=250)
    detail = models.CharField(max_length=500)
    img = models.ImageField(upload_to = "media/", blank=True, null=True)

    def __str__(self):
        return self.name
