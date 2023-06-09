export interface IMinigamePageProps {
    addBalance: (amount: number) => void;
}

export interface IMinigamePageState {
    title: string;
    textColor: string;
    message: string;
    prize: string;
    egg: string;
    visibility: string;
    click: boolean;
}

export interface IMinigamePageReduxProps {
    balance: number
}