import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./dummy-data";
import { useListVocabularyByGroupQuery } from "../../graphql/graphql";
import { FlashcardApp } from "./flashcard-app";

export const Flashcards: React.FC = () => {
    const { id } = useParams();
    const { loading, error, data } = useListVocabularyByGroupQuery({
        variables: { id },
    });
    let deck: any = [];

    if (loading) {
        return null;
    }
    if (error || !data?.vocabularyGroup) {
        console.log(error?.message);
        return <div>Error...</div>;
    }
    if (data?.vocabularyGroup && data.vocabularyGroup.character.length) {
        const totalCards = data?.vocabularyGroup?.character?.length;
        // Create a new sequence of random numbers
        let randomOrder: number[] = [];
        const newSequence = (n: number) => {
            while (randomOrder.length < n) {
                let rnd = Math.floor(Math.random() * n);
                if (randomOrder.indexOf(rnd) === -1) randomOrder.push(rnd);
            }
        };
        // Shuffle the deck with the new sequence
        const shuffleCards = () => {
            newSequence(totalCards);
            for (let i = 0; i < totalCards; i++) {
                deck.push(data.vocabularyGroup?.character[randomOrder[i]]);
            }
        };
        shuffleCards();
    }
    return <FlashcardApp deck={deck}></FlashcardApp>;
};
