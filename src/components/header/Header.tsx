import { IHeaderProps } from './Header.interfaces';

const Header = (props: IHeaderProps) => {
    const { text, icon } = props
    
    return (
        <header className='container mx-auto mt-5'>
            <div className='flex justify-between'>
                <p className='text-base font-semibold'>{text}</p>
                {icon}
            </div>
        </header>
    )
}

export default Header