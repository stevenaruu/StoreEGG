import { useHistory } from 'react-router-dom'
import Egg from '../../assets/img/egg-full.png'

const MinigameButton = () => {
    const history = useHistory()

    const goToMinigamePage = () => {
        history.push('/mini-games')
    }
    
    return (
        <div className='bg-slate-600 w-32 h-32 flex justify-center items-center rounded-full fixed right-10 bottom-10 shadow-lg cursor-pointer transition ease-in-out delay-150 duration-150 hover:bg-slate-700' onClick={goToMinigamePage}>
            <img src={Egg} alt="" className='max-h-20' />
        </div>
    )
}

export default MinigameButton