import React, { useState } from "react";
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

export const Flashcards = () => {
    const [mode, setMode] = useState("simplified");
    const [font, setFont] = useState("Noto Sans SC");
    const [cardContent, setCardContent] = useState("汉字");

    return (
        <Wrapper>
            <AppContainer>
                <ControlPanel>
                    <ControlPanelButton>汉字</ControlPanelButton>
                    <ControlPanelButton>拼音</ControlPanelButton>
                    <ControlPanelButton english>EN</ControlPanelButton>
                </ControlPanel>
                <Flashcard>
                    <Flashcard_Inner>
                        <Flashcard_Front fontFamily={font}>
                            {cardContent}
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
