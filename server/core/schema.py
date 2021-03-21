import graphene
from graphene_django import DjangoObjectType

from .models import Vocabulary, Vocabulary_Group


class VocabularyType(DjangoObjectType):
    class Meta:
        model = Vocabulary
        fields = ("simplified_chinese", "traditional_chinese",
                  "pin_num", "pin_plain", "pinyin", "english")


class VocabularyGroupType(DjangoObjectType):
    class Meta:
        model = Vocabulary_Group
        fields = ("lesson_id", "character")


class VocabularyGroupQuery(graphene.ObjectType):
    vocabulary_group = graphene.Field(
        VocabularyGroupType, lesson_id=graphene.Int())

    def resolve_vocabulary_group(self, info, lesson_id):
        return Vocabulary_Group.objects.get(lesson_id=lesson_id)
