from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('terms-of-use/', views.terms_of_use, name="terms-of-use"),
    path('privacy-policy/', views.privacy_policy, name="privacy-policy"),
] + static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)