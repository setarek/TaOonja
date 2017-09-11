import os

from django.db import models

#def get_image_path(filename):
#    return os.path.join('media')

class Location(models.Model):
    name = models.CharField(max_length=250)
    local_name = models.CharField(max_length=250)
    visited = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Detail(models.Model):
    coordinates = models.CharField(max_length=250)
    detail = models.CharField(max_length=500)
    img = models.ImageField(upload_to = "media/", blank=True, null=True)
    location = models.OneToOneField(Location, on_delete=models.CASCADE, primary_key=True)
    def __str__(self):
        return self.detail
