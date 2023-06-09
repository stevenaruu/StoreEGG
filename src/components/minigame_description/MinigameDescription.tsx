import { IMinigameDescriptionState } from "./MinigameDescription.interfaces"
import GoldCoin from '../../assets/img/gold-coin.png'
import SilverCoin from '../../assets/img/silver-coin.png'
import BronzeCoin from '../../assets/img/bronze-coin.png'

const MinigameDescription = () => {

    const coins: IMinigameDescriptionState[] = [
        {
            image: GoldCoin,
            description: "100 Coin"
        },
        {
            image: SilverCoin,
            description: "50 Coin"
        },
        {
            image: BronzeCoin,
            description: "20 Coin"
        },
    ]

    return (
        <div className="container mx-auto flex justify-center items-center gap-20 mt-5">
            {coins.map((coin: IMinigameDescriptionState, index: number) => (
                <div key={index}>
                    <div className="h-28 w-28 flex justify-center items-center">
                        <img src={coin.image} alt="" className="max-h-full max-w-full" />
                    </div>
                    <p className="text-center mt-5 font-sans font-bold text-xl">{coin.description}</p>
                </div>
            ))}
        </div>
    )
}

export default MinigameDescription