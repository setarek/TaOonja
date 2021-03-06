from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.base import TemplateView
from game.models import Location
class LocationListView(ListView):

    template_name = 'game/location_list.html'
    context_object_name = 'location_list'

    def get_queryset(self):
        return Location.objects.all()

    def get_context_data(self, **kwargs):
        context = super(LocationListView, self).get_context_data(**kwargs)
        return context



class LocationDetailView(DetailView):

    model = Location

    context_object_name = 'location_detail'

    def get_context_data(self, **kwargs):
        l_pk = self.kwargs['pk']
        Location.objects.filter(pk=l_pk).update(visited = True)
        context = super(LocationDetailView, self).get_context_data(**kwargs)
        return context


class AboutView(TemplateView):

    template_name = 'game/about.html'

class ScannerView(TemplateView):

    template_name = 'game/scanner.html'
