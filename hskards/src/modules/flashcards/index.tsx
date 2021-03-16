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
    const [mode, setMode] = useState("simplified");
    const [card, setcard] = useState<any[]>([]);

    let vocabulary: any = [];
    useEffect(() => {
        let randomOrder: number[] = [];
        const newSequence = (n: number) => {
            while (randomOrder.length < n) {
                let rnd = Math.floor(Math.random() * n);
                if (randomOrder.indexOf(rnd) === -1) randomOrder.push(rnd);
            }
        };
        const shufflecard = () => {
            newSequence(data.length);
            for (let i = 0; i < data.length; i++) {
                vocabulary.push(data[randomOrder[i]]);
            }
        };
        shufflecard();
        setcard(vocabulary[0]);
    }, []);

    console.log(card);
    const [currentCardNumber, setCurrentCardNumber] = useState(0);
    const [font, setFont] = useState("Noto Sans SC");

    const modeSimplified = () => {};
    const modePinyin = () => {};
    const modeEnglish = () => {};

    const cardNext = () => {};
    const cardPrevious = () => {};

    return (
        <Wrapper>
            <AppContainer>
                <ControlPanel>
                    <ControlPanelButton>汉字</ControlPanelButton>
                    <ControlPanelButton>拼音</ControlPanelButton>
                    <ControlPanelButton english onClick={}>
                        EN
                    </ControlPanelButton>
                </ControlPanel>
                <Flashcard>
                    <Flashcard_Inner>
                        <Flashcard_Front fontFamily={font}>
                            {card.simplified}
                        </Flashcard_Front>
                        <Flashcard_Back fontFamily={font}>
                            Chinese
                        </Flashcard_Back>
                    </Flashcard_Inner>
                </Flashcard>
            </AppContainer>
        </Wrapper>
    );
};
