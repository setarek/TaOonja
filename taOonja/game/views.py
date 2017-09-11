from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from game.models import *
class LocationListView(ListView):

    template_name = 'game/location_list.html'
    context_object_name = 'location_list'

    def get_queryset(self):
        return Detail.objects.all()

    def get_context_data(self, **kwargs):
        context = super(LocationListView, self).get_context_data(**kwargs)
        return context



#class DetailDetailView(DetailView):
##
#    context_object_name = 'location_detail'
#    def get_queryset(self):
#        return Detail.objects.get(location=)
