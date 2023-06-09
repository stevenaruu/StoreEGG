import { IListCardSkeletonProps } from "./ListCardSkeleton.interfaces";

const ListCardSkeleton = (props: IListCardSkeletonProps) => {
    return (
        <div className="h-32 max-w-full rounded-lg shadow-lg flex justify-start p-3 bg-white cursor-pointer mt-5">
            <div className="flex justify-center items-center p-2 w-48 skeleton rounded">
                <img className='max-w-full max-h-full' src="" alt="" />
            </div>
            <div className='px-2 w-full'>
                <div className="skeleton h-5 w-1/4 rounded" />
                <div className="skeleton h-5 w-16 mt-2 rounded" />
                <div className="skeleton h-5 w-28 mt-2 rounded" />
                <div className="skeleton h-5 mt-2 rounded" />
            </div>
        </div>
    )
}

export default ListCardSkeleton