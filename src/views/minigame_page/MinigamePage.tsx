import React, { Component } from "react";
import { IMinigamePageProps, IMinigamePageState, IMinigamePageReduxProps } from "./MinigamePage.interfaces";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import FullEgg from '../../assets/img/egg-full.png';
import CrackEgg from '../../assets/img/egg-broken.png';
import GoldCoin from '../../assets/img/gold-coin.png';
import SilverCoin from '../../assets/img/silver-coin.png';
import BronzeCoin from '../../assets/img/bronze-coin.png';
import MinigameSection from "../../components/minigame_section/MinigameSection";
import MinigameDescription from "../../components/minigame_description/MinigameDescription";
import { RootState } from "../../redux/redux";
import { ADD_BALANCE, selectBalance } from "../../features/BalanceSlice";
import { connect } from "react-redux";

class MinigamePage extends Component<IMinigamePageProps & IMinigamePageReduxProps, IMinigamePageState> {
    
    constructor(props: IMinigamePageProps & IMinigamePageReduxProps) {
        super(props);
        this.state = {
            title: "Click on the egg to collect coins !!!",
            textColor: "text-black",
            message: "You Got A",
            prize: "",
            egg: FullEgg,
            visibility: "invisible",
            click: false
        }
        
    }

    handleClick = () => {
        const { title, textColor, message, prize, egg, visibility, click } = this.state
        if(!click){
            const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1
            let prizeMessage = ""
            if(random === 1){
                prizeMessage = "Gold Coin"
                this.setState({
                    prize: GoldCoin
                })
                this.props.addBalance(20);
            }else if(random === 2){
                prizeMessage = "Silver Coin"
                this.setState({
                    prize: SilverCoin
                })
                this.props.addBalance(50);
            }else{
                prizeMessage = "Bronze Coin"
                this.setState({
                    prize: BronzeCoin
                })
                this.props.addBalance(100);
            }
            this.setState({
                title: "CONGRATULATIONS !!!",
                textColor: "text-green-600",
                message: `You Got A ${prizeMessage}`,
                egg: CrackEgg,
                visibility: "visible",
                click: true
            })
        }else{
            this.setState({
                title: "Click on the egg to collect coins !!!",
                textColor: "black",
                egg: FullEgg,
                prize: "",
                visibility: "invisible",
                click: false
            })
        }
    }
    render() {
        const { title, textColor, message, prize, egg, visibility } = this.state
        const { balance } = this.props

        return (
            <div className='h-full bg-slate-300'>
                <Navbar
                    searchBar={<></>}
                    balance={balance}
                />
                <Header
                    text='Collect Coins'
                    icon={<></>}
                />
                <MinigameDescription />
                <MinigameSection
                    title={title}
                    textColor={textColor}
                    visibility={visibility}
                    message={message}
                    egg={egg}
                    prize={prize}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: RootState): IMinigamePageReduxProps => {
    return {
        balance: selectBalance(state),
    };
};

const mapDispatchToProps = {
    addBalance: (amount: number) => ADD_BALANCE(amount),
};

export default connect(mapStateToProps, mapDispatchToProps)(MinigamePage);