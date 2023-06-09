import './GridCardSkeleton.css'
import { IGridCardSkeletonProps } from './GridCardSkeleton.interfaces'

const GridCardSkeleton = (props: IGridCardSkeletonProps) => {
    return (
        <div className='height w-64 px-4 py-2 shadow-lg mt-5 bg-white rounded-md cursor-pointer'>
            <div className='mt-2 h-40 flex justify-center items-center skeleton rounded'>
                <img src="" alt="" className='max-w-full max-h-full' />
            </div>
            <div className='mt-5 skeleton w-full h-5 rounded' />
            <div className='mt-2 skeleton w-2/4 h-5 rounded' />
            <div className='mt-5 skeleton w-2/4 h-5 rounded' />
            <div className='mt-2 skeleton w-full h-32 rounded' />
        </div>
    )
}

export default GridCardSkeleton