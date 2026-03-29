

function ShowcaseSlideshow(){

    return(
        <>
            <div className="h-auto w-full">
                {/* Image Slideshow */}
                <div className="h-[425px] w-full bg-blue-300"></div>

                {/* Slideshow Preview */}
                <div className="h-20 w-full flex flex-col justify-center items-center">
                    <div className="h-full w-9/12 flex justify-between items-center">
                        <div className="h-8 w-8 flex justify-center items-center bg-red-600 rounded-full"><i className='bx bx-pause text-white text-4xl'></i></div>
                        {Array.from({length: 4}).map((_, index) => {
                            return <div key={index} className="h-12 w-12 bg-blue-300 rounded-lg"></div>
                        })}
                    </div>
                    <div className="border-b border-gray-300 h-auto w-11/12"></div>
                </div>

            </div>
        </>
    )
}

export default ShowcaseSlideshow;