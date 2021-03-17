import styled from "styled-components";

interface FlashcardFontProps {
    readonly font: { fontFamily: string; fontSize: string };
}

interface ControlPanelButtonProps {
    readonly english?: boolean;
}

export const Wrapper = styled.section`
    display: flex;
    width: 100%;
    height: 200px;
    @media (min-width: 600px) {
        height: 260px;
    }
    justify-content: center;
    background-color: #f6f7fb;
`;

export const AppContainer = styled.section`
    display: flex;
    width: 100%;
    @media (min-width: 600px) {
        width: 460px;
    }
    margin: 10px;
    justify-content: center;
`;

export const ControlPanel = styled.section`
    width: 55px;
    height: 200px;
    @media (min-width: 600px) {
        height: 260px;
    }
    margin-right: 7px;
    padding-top: 5px;
`;

export const ControlPanelButton = styled.div<ControlPanelButtonProps>`
    display: flex;
    width: 100%;
    height: 50px;
    margin-top: 3px;
    padding-right: 1px;
    padding-bottom: ${(props) => (props.english ? "3px" : 0)};
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    background-color: #0095ff;
    color: #fff;
    font-family: ${(props) => (props.english ? "Ubuntu" : "Noto Sans SC")};
    font-weight: 700;
    cursor: pointer;
    &:hover {
        background-color: #007fd9;
    }
`;

export const Flashcard = styled.section`
    width: 100%;
    height: 200px;
    @media (min-width: 600px) {
        height: 260px;
    }
    background-color: transparent;
    perspective: 1000px;
`;

export const Flashcard_Inner = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    margin-right: 10px;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    &:hover {
        transform: rotateX(180deg);
    }
`;

export const Flashcard_Front = styled.section<FlashcardFontProps>`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
    border-radius: 10px;
    // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 0.25rem 1rem 0 rgb(0 0 0 / 16%);
    background-color: #fff;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.font.fontFamily || "sans-serif"};
    font-size: ${(props) => props.font.fontSize};
    font-weight: 400;
    color: #000066;
`;

export const Flashcard_Back = styled.section<FlashcardFontProps>`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: #fff;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    transform: rotateX(180deg);
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.font.fontFamily || "sans-serif"};
    font-size: 2rem;
    @media (min-width: 600px) {
        font-size: 3rem;
    }
`;

export const NavigationPanel = styled.section`
    width: 407px;
    height: 40px;
    margin-top: 18px;
    margin-left: 54px;
    background-color: lightblue;
`;
