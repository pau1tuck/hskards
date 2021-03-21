import graphene
import server.core.schema


class Query(server.core.schema.VocabularyGroupQuery, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
