import './DetailProductSkeleton.css'

const DetailProductSkeleton = () => {
    return (
        <div className="container mx-auto w-full">
            <div className="heigh mt-5 bg-white rounded-md shadow-lg relative pl-10 pt-10">
                <div className='h-12 w-3/12 skeleton rounded mb-10' />
                <div className='h-full w-2/4 absolute left-3 flex flex-col items-center'>
                    <div className="h-4/6 w-11/12 skeleton rounded" />
                    <div className='h-12 w-36 skeleton rounded my-10' />
                </div>
                <div className="h-full w-2/4 absolute right-0 flex flex-col start">
                    <div className="h-10 w-11/12 skeleton rounded" />
                    <div className="h-5 w-2/12 skeleton mt-5 rounded" />
                    <div className="h-5 w-3/12 skeleton mt-5 rounded" />
                    {Array(10).fill(undefined).map((_, index) => (
                        <div className="h-5 w-11/12 skeleton mt-2 rounded" key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailProductSkeleton