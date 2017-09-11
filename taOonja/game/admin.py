from django.contrib import admin
from game.models import *

class LocationAdmin(admin.ModelAdmin):
    model = Location

admin.site.register(Location, LocationAdmin)

class DetailAdmin(admin.ModelAdmin):

    model = Detail

admin.site.register(Detail, DetailAdmin)
