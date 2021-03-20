import styled from "styled-components";

interface IFlashcardProps {
    readonly style: {
        paddingTop?: string;
        fontFamily: string;
        fontSize: string;
    };
}

interface IControlPanelButtonProps {
    readonly disabled?: boolean;
}

interface INavigationButtonProps {
    readonly disabled?: boolean;
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
    margin: 10px;
    justify-content: center;
    @media (min-width: 600px) {
        width: 500px;
    }
`;

export const ControlPanel = styled.section`
    width: 55px;
    height: 200px;
    margin-right: 7px;
    @media (min-width: 600px) {
        padding-top: 5px;
        height: 260px;
    }
`;

export const ControlPanelButton = styled.div<IControlPanelButtonProps>`
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
    color: #fff;
    font-family: "Noto Sans SC";
    font-weight: 700;
    cursor: pointer;
    &.disabled {
        opacity: 0.3;
        cursor: default;
        &:hover {
            background-color: none;
        }
    }
    ${(props) => {
        if (props.disabled) {
            return `
                opacity: 0.2;
                cursor: default;
                &:hover {
                    background-color: none;
                }
            `;
        }
    }};
`;

export const ButtonSimplified = styled(ControlPanelButton)`
    background-color: #005089;
    font-size: 1rem;
    &:hover {
        background-color: #004675;
    }
`;

export const ButtonPinyin = styled(ControlPanelButton)`
    background-color: #008b8b;
    font-size: 1rem;
    &:hover {
        background-color: #007c7c;
    }
`;

export const ButtonEnglish = styled(ControlPanelButton)`
    padding-left: 1px;
    background-color: #0095ff;
    font-family: "Ubuntu";
    font-size: 1rem;
    &:hover {
        background-color: #007fd9;
    }
`;

export const ButtonSettings = styled(ControlPanelButton)`
    padding-left: 1px;
    background-color: #2f4f4f;
    font-size: 1.5rem;
    &:hover {
        background-color: #284444;
    }
`;

export const Flashcard = styled.section`
    width: 100%;
    height: 215px;
    background-color: transparent;
    perspective: 1000px;
    &.swipe {
        overflow: hidden;
    }
    @media (min-width: 600px) {
        height: 260px;
    }
`;

export const Flashcard_Inner = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    margin-right: 10px;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    &.flip {
        transform: rotateX(180deg);
    }
`;

const Flashcard_Content = styled.section`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 0.25rem 1rem 0 rgb(0 0 0 / 16%);
    background-color: #fff;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    color: #202020;
    &.simplified {
        padding-top: 14px;
        font-family: "Noto Sans SC";
        font-size: 2.6rem;
        @media (min-width: 600px) {
            padding-top: 10px;
            font-family: "Noto Sans SC";
            font-size: 3.3rem;
        }
    }
    &.pinyin {
        padding-top: 15px;
        font-family: sans-serif;
        font-size: 1.7rem;
        @media (min-width: 600px) {
            padding-top: 10px;
            font-family: sans-serif;
            font-size: 2.4rem;
        }
    }
    &.english {
        padding-top: 12px;
        font-family: Ubuntu;
        font-size: 1.7rem;
        @media (min-width: 600px) {
            padding-top: 15px;
            font-family: Ubuntu;
            font-size: 2.4rem;
        }
    }
`;

export const Flashcard_Front = styled(Flashcard_Content)``;
export const Flashcard_Back = styled(Flashcard_Content)`
    transform: rotateX(180deg);
`;

export const FlashcardNumber = styled.section`
    padding-top: 17px;
    text-align: center;
    font-family: Ubuntu, sans-serif;
    font-size: 1/1rem;
    color: darkgray;
    @media (min-width: 600px) {
        padding-top: 11px;
    }
`;

export const NavigationPanel = styled.section`
    display: flex;
    margin-top: 33px;
    margin-left: 53px;
    height: 40px;
    @media (min-width: 600px) {
        width: 445px;
        margin-top: 18px;
        margin-left: 55px;
    }
`;

export const NavigationButton = styled.div<INavigationButtonProps>`
    display: flex;
    width: 145px;
    height: 40px;
    align-items: center;
    justify-content: center;
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
    ${(props) => {
        if (props.disabled) {
            return `
                opacity: 0.3;
                cursor: default;
                &:hover {
                    background-color: none;
                }
            `;
        }
    }};
    @media (min-width: 600px) {
        width: 220px;
    }
`;

export const Spacer = styled.div`
    flex-grow: 1;
    min-width: 5px;
`;

export const FlashcardText = styled.p`
    flex-grow: 1;
`;
