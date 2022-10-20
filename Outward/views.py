from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index.html");

def terms_of_use(request):
    return render(request, "terms-of-use.html");
    
def privacy_policy(request):
    return render(request, "privacy-policy.html");