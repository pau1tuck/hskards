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
    return <FlashcardApp></FlashcardApp>;
};

export const FlashcardApp: React.FC = () => {
    const [mode, setMode] = useState("simplified");
    const [card, setcard] = useState<any[]>([]);
    const [currentCardNumber, setCurrentCardNumber] = useState(0);
    const [name, setName] = useState("Cat");

    const [cardContent, setCardContent] = useState(
        data[currentCardNumber].simplified
    );

    let simplified: string[] = [];
    let pinyin: string[] = [];
    let english: string[] = [];

    let vocabulary: any = [];

    /*
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
            vocabulary.push(data[randomOrder[i]]);
        }
    };
    useEffect(() => {
        shuffleCards();
        vocabulary.map((x: any, y: number) => {
            simplified.push(x.simplified);
            pinyin.push(x.pinyin);
            english.push(x.english);
        });
        setCardContent(simplified[currentCardNumber]);
    }, []);
*/
    const [font, setFont] = useState("Noto Sans SC");

    const modeSimplified = () => {};
    const modePinyin = () => {};

    const modeEnglish = () => {
        setCardContent(data[currentCardNumber].english);
    };

    const cardNext = () => {};
    const cardPrevious = () => {};

    return (
        <Wrapper>
            <AppContainer>
                <ControlPanel>
                    <ControlPanelButton>汉字</ControlPanelButton>
                    <ControlPanelButton>拼音</ControlPanelButton>
                    <ControlPanelButton english onClick={modeEnglish}>
                        EN
                    </ControlPanelButton>
                </ControlPanel>
                <Flashcard>
                    <Flashcard_Inner>
                        <Flashcard_Front fontFamily={font}>
                            {cardContent}
                        </Flashcard_Front>
                        <Flashcard_Back fontFamily={font}>
                            {cardContent}
                        </Flashcard_Back>
                    </Flashcard_Inner>
                </Flashcard>
            </AppContainer>
        </Wrapper>
    );
};
