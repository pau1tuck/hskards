from django.contrib import admin
from .models import Vocabulary, Vocabulary_Group


class VocabularyAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Chinese', {'fields':  ['simplified_chinese',
                                 'traditional_chinese']}),
        ('Pinyin', {'fields': ['pinyin', 'pin_num', 'pin_plain']}),
        ('English', {'fields':  ['english']}),
    ]
    list_display = ('simplified_chinese', 'pinyin', 'english')
    search_fields = (['simplified_chinese', 'english'])


class VocabularyGroupAdmin(admin.ModelAdmin):
    list_display = ('lesson_id', 'character')


admin.site.register(Vocabulary, VocabularyAdmin)
admin.site.register(Vocabulary_Group, VocabularyGroupAdmin)
