from django.contrib import admin
from game.models import Location

class LocationAdmin(admin.ModelAdmin):
    model = Location

admin.site.register(Location, LocationAdmin)

