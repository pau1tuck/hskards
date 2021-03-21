import React, { useEffect, useState } from "react";
import {
    Container,
    AppContainer,
    ControlPanel,
    ButtonSimplified,
    ButtonPinyin,
    ButtonEnglish,
    ButtonSettings,
    Flashcard,
    Flashcard_Inner,
    Flashcard_Front,
    Flashcard_Back,
    FlashcardNumber,
    NavigationPanel,
    NavigationButton,
    Spacer,
} from "./styles";
import { MdSettings } from "react-icons/md";
import { data } from "./dummy-data";

export const FlashcardApp = ({ deck }: any) => {
    const [currentMode, setCurrentMode] = useState("simplified");
    const [currentCardNumber, setCurrentCardNumber] = useState(0);
    const [cardContent, setCardContent] = useState(
        deck[currentCardNumber].simplified
    );
    const [flipCard, triggerFlipCard] = useState(false);

    let audioZH =
        "/static/core/audio/40101/" +
        deck[currentCardNumber].simplified +
        ".mp3";
    const [audioChinese, setAudioChinese] = useState("");

    // Get settings

    // Settings
    const [startMode, setStartMode] = useState("simplified");
    const [autoplay, setAutoplay] = useState(false);

    const [flashcardStyle, setFlashcardStyle] = useState("simplified");

    // Initialize button enabled/disabled states
    const [modeDisabled, setModeDisabled] = useState({
        simplified: true,
        pinyin: false,
        english: false,
    });
    const [navigationDisabled, setNavigationDisabled] = useState({
        buttonBack: true,
        buttonForward: false,
    });

    const setAudio = () => {
        audioZH =
            "/static/core/audio/40101/" +
            deck[currentCardNumber].simplified +
            ".mp3";
        setAudioChinese("");
    };

    // Handle mode buttons
    const modeSimplified = () => {
        if (!modeDisabled.simplified) {
            triggerFlipCard(!flipCard);
            setFlashcardStyle("simplified");
            setCardContent(deck[currentCardNumber].simplified);
            setAudio();
            setModeDisabled({
                simplified: true,
                pinyin: false,
                english: false,
            });
        }
    };
    const modePinyin = () => {
        if (!modeDisabled.pinyin) {
            triggerFlipCard(!flipCard);
            setFlashcardStyle("pinyin");
            setCardContent(deck[currentCardNumber].pinyin);
            setModeDisabled({
                simplified: false,
                pinyin: true,
                english: false,
            });
        }
    };
    const modeEnglish = () => {
        if (!modeDisabled.english) {
            triggerFlipCard(!flipCard);
            setFlashcardStyle("english");
            setCardContent(deck[currentCardNumber].english);
            setModeDisabled({
                simplified: false,
                pinyin: false,
                english: true,
            });
        }
    };

    // Handle navigation buttons
    const cardForward = () => {
        if (currentCardNumber < deck.length - 1) {
            setCurrentCardNumber(currentCardNumber + 1);
            setAudio();
        }
    };
    const cardBack = () => {
        if (currentCardNumber != 0) {
            setCurrentCardNumber(currentCardNumber - 1);
            setAudio();
        }
    };

    // Handle card change (re-render component)
    useEffect(() => {
        if (currentCardNumber === 0) {
            setNavigationDisabled({ buttonBack: true, buttonForward: false });
        } else if (currentCardNumber === deck.length - 1) {
            setNavigationDisabled({ buttonBack: false, buttonForward: true });
        } else {
            setNavigationDisabled({ buttonBack: false, buttonForward: false });
        }
        setFlashcardStyle("simplified");
        setCardContent(deck[currentCardNumber].simplified);
        setModeDisabled({
            simplified: true,
            pinyin: false,
            english: false,
        });
    }, [currentCardNumber]);

    useEffect(() => {
        setAudioChinese(audioZH);
    }, [audioChinese]);

    return (
        <div>
            <Container>
                <AppContainer>
                    <ControlPanel>
                        <ButtonSimplified
                            className={
                                modeDisabled.simplified ? "disabled" : ""
                            }
                            onClick={modeSimplified}
                        >
                            汉字
                        </ButtonSimplified>
                        <ButtonPinyin
                            disabled={modeDisabled.pinyin}
                            onClick={modePinyin}
                        >
                            拼音
                        </ButtonPinyin>
                        <ButtonEnglish
                            disabled={modeDisabled.english}
                            onClick={modeEnglish}
                        >
                            EN
                        </ButtonEnglish>
                        <ButtonSettings>
                            <MdSettings></MdSettings>
                        </ButtonSettings>
                        <FlashcardNumber>
                            {currentCardNumber + 1}/{data.length}
                        </FlashcardNumber>
                    </ControlPanel>
                    <Flashcard>
                        <Flashcard_Inner className={flipCard ? "flip" : ""}>
                            <Flashcard_Front className={flashcardStyle}>
                                {cardContent}
                            </Flashcard_Front>
                            <Flashcard_Back className={flashcardStyle}>
                                {cardContent}
                            </Flashcard_Back>
                        </Flashcard_Inner>
                    </Flashcard>
                </AppContainer>
            </Container>
            <Container>
                <NavigationPanel>
                    <NavigationButton
                        disabled={navigationDisabled.buttonBack}
                        onClick={cardBack}
                    >
                        上
                    </NavigationButton>
                    <Spacer></Spacer>
                    <NavigationButton
                        disabled={navigationDisabled.buttonForward}
                        onClick={cardForward}
                    >
                        下
                    </NavigationButton>
                </NavigationPanel>
            </Container>
            <audio autoPlay src={audioChinese} />
        </div>
    );
};
