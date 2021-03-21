import React, { useEffect, useState } from "react";
import { data } from "./dummy-data";
import { FlashcardApp } from "./flashcard-app";

export const Flashcards: React.FC = () => {
    let deck: any = [];
    let randomOrder: number[] = [];

    const newSequence = (n: number) => {
        while (randomOrder.length < n) {
            let rnd = Math.floor(Math.random() * n);
            if (randomOrder.indexOf(rnd) === -1) randomOrder.push(rnd);
        }
    };
    const shuffleCards = () => {
        newSequence(data.length);
        for (let i = 0; i < data.length; i++) {
            deck.push(data[randomOrder[i]]);
        }
    };

    shuffleCards();

    return <FlashcardApp deck={deck}></FlashcardApp>;
};
