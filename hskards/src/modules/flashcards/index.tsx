import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./dummy-data";
import { FlashcardApp } from "./flashcard-app";

export const Flashcards: React.FC = () => {
    // Create a new sequence of random numbers
    let randomOrder: number[] = [];
    const newSequence = (n: number) => {
        while (randomOrder.length < n) {
            let rnd = Math.floor(Math.random() * n);
            if (randomOrder.indexOf(rnd) === -1) randomOrder.push(rnd);
        }
    };
    // Shuffle the deck with the new sequence
    let deck: any = [];
    const shuffleCards = () => {
        newSequence(data.length);
        for (let i = 0; i < data.length; i++) {
            deck.push(data[randomOrder[i]]);
        }
    };
    shuffleCards();

    return <FlashcardApp deck={deck}></FlashcardApp>;
};
