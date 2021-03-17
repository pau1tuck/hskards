import styled from "styled-components";

interface FlashcardFontProps {
    readonly style: { fontFamily: string; fontSize: string };
}

interface ControlPanelButtonProps {
    readonly english?: boolean;
    readonly settings?: boolean;
}

export const Container = styled.section`
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
        width: 500px;
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
    padding-bottom: 1px;
    padding-left: ${(props) => (props.english || props.settings ? "1px" : "0")};
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    background-color: ${(props) => (props.settings ? "#2F4F4F" : "#0095ff")};
    color: #fff;
    font-family: ${(props) => (props.english ? "Ubuntu" : "Noto Sans SC")};
    font-weight: 700;
    font-size: ${(props) => (props.settings ? "1.6rem" : "1rem")};
    cursor: pointer;
    &:hover {
        background-color: ${(props) =>
            props.settings ? "#253f3f" : "#007fd9"};
    }
`;

export const ButtonSimplified = styled.div<ControlPanelButtonProps>`
    display: flex;
    width: 100%;
    height: 50px;
    margin-top: 3px;
    padding-right: 1px;
    padding-bottom: 1px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    background-color: #005089;
    color: #fff;
    font-family: "Noto Sans SC";
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #007fd9;
    }
`;

export const ButtonPinyin = styled.div<ControlPanelButtonProps>`
    display: flex;
    width: 100%;
    height: 50px;
    margin-top: 3px;
    padding-right: 1px;
    padding-bottom: 1px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    background-color: #008b8b;
    color: #fff;
    font-family: "Noto Sans SC";
    font-weight: 700;
    font-size: 1rem;
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
    padding-bottom: 20px;
    border-radius: 10px;
    // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 0.25rem 1rem 0 rgb(0 0 0 / 16%);
    background-color: #fff;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.style.fontFamily || "sans-serif"};
    font-size: ${(props) => props.style.fontSize};
    font-weight: 400;
    color: #202020;
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
    font-family: ${(props) => props.style.fontFamily || "sans-serif"};
    font-size: 2rem;
    @media (min-width: 600px) {
        font-size: 3rem;
    }
`;

export const NavigationPanel = styled.section`
    display: flex;
    width: 445px;
    height: 40px;
    margin-top: 18px;
    margin-left: 55px;
`;

export const NavigationButton = styled.div`
    display: flex;
    width: 220px;
    height: 40px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
    font-family: "Noto Sans SC";
    font-weight: 700;
    font-size: 1.2rem;
    background-color: #0095ff;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #007fd9;
    }
`;

export const Spacer = styled.div`
    flex-grow: 1;
`;
