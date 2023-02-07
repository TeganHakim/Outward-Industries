from django.shortcuts import render
from . import models

# Create your views here.
def index(request):
    products_obj = models.Product.objects.all()
    context = {
        "products": products_obj
    }
    return render(request, "index.html", context);

def terms_of_use(request):
    return render(request, "terms-of-use.html");
    
def privacy_policy(request):
    return render(request, "privacy-policy.html");