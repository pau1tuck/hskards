from django.db import models


class Vocabulary(models.Model):
    simplified_chinese = models.CharField(max_length=16)
    traditional_chinese = models.CharField(max_length=16, blank=True)
    pinyin = models.CharField(max_length=64)
    pin_num = models.CharField(max_length=64, blank=True)
    pin_plain = models.CharField(max_length=64, blank=True)
    english = models.CharField(max_length=128)

    def __str__(self):
        return '%s %s' % (self.simplified_chinese, self.english)

    class Meta:
        verbose_name = u'Vocabulary'
        verbose_name_plural = u'Vocabulary'


class Vocabulary_Group(models.Model):
    lesson_id = models.IntegerField()
    character = models.ManyToManyField(Vocabulary)
