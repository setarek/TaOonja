import os

from django.db import models
from django import forms

class Location(models.Model):
    name = models.CharField(max_length=250)
    local_name = models.CharField(max_length=250)
    visited = models.BooleanField(default=False)
    coordinates = models.CharField(max_length=250)
    detail = models.TextField()
    img = models.ImageField(upload_to = "media/", blank=True, null=True)

    def __str__(self):
        return self.name
