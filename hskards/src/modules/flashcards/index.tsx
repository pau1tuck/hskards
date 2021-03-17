import React, { useEffect, useState } from "react";
import {
    Wrapper,
    AppContainer,
    ControlPanel,
    ControlPanelButton,
    Flashcard,
    Flashcard_Inner,
    Flashcard_Front,
    Flashcard_Back,
} from "./styles";
import { data } from "./dummy-data";

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

export const FlashcardApp = ({ deck }: any) => {
    const [currentCardNumber, setCurrentCardNumber] = useState(0);
    const [cardContent, setCardContent] = useState(
        deck[currentCardNumber].simplified
    );
    const [font, setFont] = useState({
        fontFamily: "Noto Sans SC",
        fontSize: "3rem",
    });

    const modeSimplified = () => {
        setCardContent(deck[currentCardNumber].simplified);
        setFont({ fontFamily: "Noto Sans SC", fontSize: "3rem" });
    };
    const modePinyin = () => {
        setCardContent(deck[currentCardNumber].pinyin);
    };

    const modeEnglish = () => {
        setCardContent(deck[0].english);
        setFont({ fontFamily: "Ubuntu", fontSize: "2.4rem" });
    };

    const cardNext = () => {};
    const cardPrevious = () => {};

    return (
        <Wrapper>
            <AppContainer>
                <ControlPanel>
                    <ControlPanelButton onClick={modeSimplified}>
                        汉字
                    </ControlPanelButton>
                    <ControlPanelButton onClick={modePinyin}>
                        拼音
                    </ControlPanelButton>
                    <ControlPanelButton english onClick={modeEnglish}>
                        EN
                    </ControlPanelButton>
                </ControlPanel>
                <Flashcard>
                    <Flashcard_Inner>
                        <Flashcard_Front font={font}>
                            {cardContent}
                        </Flashcard_Front>
                        <Flashcard_Back font={font}>
                            {cardContent}
                        </Flashcard_Back>
                    </Flashcard_Inner>
                </Flashcard>
            </AppContainer>
        </Wrapper>
    );
};
