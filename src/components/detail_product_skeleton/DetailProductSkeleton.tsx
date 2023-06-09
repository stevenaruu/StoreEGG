import './DetailProductSkeleton.css'

const DetailProductSkeleton = () => {
    return (
        <div className="container mx-auto w-full">
            <div className="heigh mt-5 bg-white rounded-md shadow-lg relative">
                <div className="h-full w-2/4 absolute left-0 flex justify-center items-center">
                    <div className="h-5/6 w-11/12 skeleton rounded" />
                </div>
                <div className="h-full w-2/4 absolute right-0 flex justify-center flex-col">
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