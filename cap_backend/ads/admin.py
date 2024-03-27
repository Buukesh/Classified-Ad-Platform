from django.contrib import admin

from .models import Ad, AdImage


# show ad images with the ad in admin page
class AdImageInline(admin.TabularInline):
    model = AdImage
    extra = 1


@admin.register(Ad)
class AdAdmin(admin.ModelAdmin):
    inlines = [AdImageInline]
