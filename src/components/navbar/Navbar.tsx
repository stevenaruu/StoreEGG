import Logo from '../../assets/img/egg-full.png'
import AccountImage from '../../assets/img/account-image.jpg'
import { INavbarProps } from './Navbar.interfaces'
import { useHistory } from 'react-router-dom'

const Navbar = (props: INavbarProps) => {
    const { balance, searchBar } = props
    const history = useHistory();

    const goToHomePage = () => {
        history.push('/')
    }
    
    return (
        <nav className='bg-slate-500 shadow-md'>
            <div className='container mx-auto h-16 flex justify-between items-center'>
                <div className='h-16 flex items-center gap-x-2 font-extrabold font-sans cursor-pointer' onClick={goToHomePage}>
                    <img src={Logo} alt="" className='max-w-full max-h-full block' />
                    <p className='text-2xl'>Storegg</p>
                </div>
                {searchBar}
                <div className='h-12 flex items-center gap-x-4 font-bold font-sans'>
                    <div className='bg-slate-900 px-4 py-1 drop-shadow-xl'>
                        <span className='text-white'>{balance} </span>
                        <span className='text-white'>Coin</span>
                    </div>
                    <img src={AccountImage} alt="" className='max-w-full max-h-full block rounded-full' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar