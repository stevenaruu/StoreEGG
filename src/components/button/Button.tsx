import { IButtonProps } from "./Button.interfaces"

const Button = (props: IButtonProps) => {
    const { text, color, container, onClick } = props
    
    return (
        <div className={`${container} mx-auto mt-5 cursor-pointer`} onClick={onClick}>
            <div className={`${color} px-4 py-2 w-36 rounded-lg border-2 border-black shadow-md transition ease-in-out delay-150 duration-150`}>
                <p className='text-center font-bold'>{text}</p>
            </div>
        </div>
    )
}

export default Button