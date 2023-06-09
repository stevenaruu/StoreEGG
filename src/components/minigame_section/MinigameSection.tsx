import { IMinigameSectionProps } from "./IMinigameSection.interfaces"

const MinigameSection = (props: IMinigameSectionProps) => {
    const { title, textColor, message, visibility, egg, prize, handleClick} = props
    
    return (
        <div className="flex justify-center items-center flex-col mt-10">
            <p className={`text-4xl ${textColor}`}>{title}</p>
            <p className={`text-4xl mt-2 ${visibility}`}>{message}</p>
            <div className="relative h-96 flex justify-center cursor-pointer" onClick={handleClick}>
                <img src={egg} alt="" className="max-w-full max-h-full" />
                <img src={prize} alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32" />
            </div>
        </div>
    )
}

export default MinigameSection
