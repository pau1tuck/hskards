import React, { useEffect, useState } from "react";
import {
    Container,
    AppContainer,
    ControlPanel,
    ControlPanelButton,
    ButtonSimplified,
    ButtonPinyin,
    Flashcard,
    Flashcard_Inner,
    Flashcard_Front,
    Flashcard_Back,
    NavigationPanel,
    NavigationButton,
    Spacer,
} from "./styles";
import { MdSettings } from "react-icons/md";
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
    const [style, setStyle] = useState({
        paddingTop: "10px",
        fontFamily: "Noto Sans SC",
        fontSize: "3.3rem",
    });

    const modeSimplified = () => {
        setCardContent(deck[currentCardNumber].simplified);
        setStyle({
            paddingTop: "10px",
            fontFamily: "Noto Sans SC",
            fontSize: "3.3rem",
        });
    };
    const modePinyin = () => {
        setCardContent(deck[currentCardNumber].pinyin);
        setStyle({
            paddingTop: "20px",
            fontFamily: "sans-serif",
            fontSize: "2.2rem",
        });
    };
    const modeEnglish = () => {
        setCardContent(deck[currentCardNumber].english);
        setStyle({
            paddingTop: "15px",
            fontFamily: "Ubuntu",
            fontSize: "2.4rem",
        });
    };

    const cardNext = () => {
        setCurrentCardNumber(currentCardNumber + 1);
    };

    const cardPrevious = () => {
        setCurrentCardNumber(currentCardNumber - 1);
    };

    useEffect(() => {
        modeSimplified();
    }, [currentCardNumber]);

    return (
        <div>
            <Container>
                <AppContainer>
                    <ControlPanel>
                        <ButtonSimplified onClick={modeSimplified}>
                            汉字
                        </ButtonSimplified>
                        <ButtonPinyin onClick={modePinyin}>拼音</ButtonPinyin>
                        <ControlPanelButton english onClick={modeEnglish}>
                            EN
                        </ControlPanelButton>
                        <ControlPanelButton settings>
                            <MdSettings></MdSettings>
                        </ControlPanelButton>
                    </ControlPanel>
                    <Flashcard>
                        <Flashcard_Inner>
                            <Flashcard_Front style={style}>
                                {cardContent}
                            </Flashcard_Front>
                            <Flashcard_Back style={style}>
                                {cardContent}
                            </Flashcard_Back>
                        </Flashcard_Inner>
                    </Flashcard>
                </AppContainer>
            </Container>
            <Container>
                <NavigationPanel>
                    <NavigationButton onClick={cardPrevious}>
                        上
                    </NavigationButton>
                    <Spacer></Spacer>
                    <NavigationButton onClick={cardNext}>下</NavigationButton>
                </NavigationPanel>
            </Container>
        </div>
    );
};
