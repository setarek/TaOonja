import os

from django.db import models

def get_image_path(filename):
    return os.path.join('photos',filename)

class Location(models.Model):
    name = models.CharField(max_length=250)
    local_name = models.CharField(max_length=250)
    visited = models.BooleanField(default=False)

class Detail(models.Model):
    coordinates = models.CharField(max_length=250)
    detail = models.CharField(max_length=500)
    img = ImageField(upload_to=get_image_path, blank=True, null=True)
    location = models.OneToOneField(Location, on_delete=models.CASCADE, primary_key=True)
