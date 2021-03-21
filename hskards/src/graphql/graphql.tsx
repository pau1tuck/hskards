import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  vocabularyGroup?: Maybe<VocabularyGroupType>;
};


export type QueryVocabularyGroupArgs = {
  lessonId?: Maybe<Scalars['Int']>;
};

export type VocabularyGroupType = {
  __typename?: 'VocabularyGroupType';
  lessonId: Scalars['Int'];
  character: Array<VocabularyType>;
};

export type VocabularyType = {
  __typename?: 'VocabularyType';
  simplifiedChinese: Scalars['String'];
  traditionalChinese: Scalars['String'];
  pinyin: Scalars['String'];
  pinNum: Scalars['String'];
  pinPlain: Scalars['String'];
  english: Scalars['String'];
};

export type ListVocabularyByGroupQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ListVocabularyByGroupQuery = (
  { __typename?: 'Query' }
  & { vocabularyGroup?: Maybe<(
    { __typename?: 'VocabularyGroupType' }
    & Pick<VocabularyGroupType, 'lessonId'>
    & { character: Array<(
      { __typename?: 'VocabularyType' }
      & Pick<VocabularyType, 'simplifiedChinese' | 'pinyin' | 'english'>
    )> }
  )> }
);


export const ListVocabularyByGroupDocument = gql`
    query ListVocabularyByGroup($id: Int!) {
  vocabularyGroup(lessonId: $id) {
    lessonId
    character {
      simplifiedChinese
      pinyin
      english
    }
  }
}
    `;

/**
 * __useListVocabularyByGroupQuery__
 *
 * To run a query within a React component, call `useListVocabularyByGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useListVocabularyByGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListVocabularyByGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useListVocabularyByGroupQuery(baseOptions: Apollo.QueryHookOptions<ListVocabularyByGroupQuery, ListVocabularyByGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListVocabularyByGroupQuery, ListVocabularyByGroupQueryVariables>(ListVocabularyByGroupDocument, options);
      }
export function useListVocabularyByGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListVocabularyByGroupQuery, ListVocabularyByGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListVocabularyByGroupQuery, ListVocabularyByGroupQueryVariables>(ListVocabularyByGroupDocument, options);
        }
export type ListVocabularyByGroupQueryHookResult = ReturnType<typeof useListVocabularyByGroupQuery>;
export type ListVocabularyByGroupLazyQueryHookResult = ReturnType<typeof useListVocabularyByGroupLazyQuery>;
export type ListVocabularyByGroupQueryResult = Apollo.QueryResult<ListVocabularyByGroupQuery, ListVocabularyByGroupQueryVariables>;