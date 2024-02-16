export const Section13 = () => {
    return (
        <section className=" bg-[#fafafa] pb-16">
            <div className='container m-auto'>
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-3xl font-extrabold text-[#2a3855] text-center font-sans mt-16">Latest News</h1>
                    <div className="w-[67px] h-[3px] bg-[#2a3855] rounded-full"></div>
                </div>
                <div className='flex lg:flex-row flex-col gap-5 justify-around mt-8'>
                    <div className='flex flex-col gap-3 bg-white rounded-md lg:w-1/3 w-full pb-4'>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/9.jpg" alt="" className='rounded-t-md ' />
                        <h3 className='font-bold font-mont text-xl  text-[#2a3855] px-4 hover:underline cursor-pointer'>Tax impacts of lease mean accounting change</h3>
                        <span className='text-[#6a6a6a] px-4'>By Paul O'Sullivan</span>
                        <p className='text-[#6a6a6a] lg:w-4/5 w-full px-4'>HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...</p>
                        <div className='flex flex-row items-center  px-4 gap-2'>
                            <a href="" className='text-[#2a3855] text-sm hover:underline font-bold'>Learn more ⟶</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 bg-white rounded-md w-full lg:w-1/3 pb-4'>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/10.jpg" alt="" className='rounded-t-md ' />
                        <h3 className='font-bold font-mont text-xl text-[#2a3855] px-4 hover:underline cursor-pointer'>What brexit means for data protection law</h3>
                        <span className='text-[#6a6a6a] px-4'>By Enrico Ambrosi</span>
                        <p className='text-[#6a6a6a] w-full lg:w-4/5 px-4'>Assuming that the referendum is not ignored completely, there are two possible futures for the UK...</p>
                        <div className='flex flex-row items-center  px-4 gap-2'>
                            <a href="" className='text-[#2a3855] text-sm hover:underline font-bold'>Learn more ⟶</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 bg-white rounded-md w-full lg:w-1/3 pb-4'>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/11.jpg" alt="" className='rounded-t-md ' />
                        <h3 className='font-bold font-mont text-xl text-[#2a3855] px-4 hover:underline cursor-pointer'>The growing meanace of social engineering fraud</h3>
                        <span className='text-[#6a6a6a] px-4'>By Robson</span>
                        <p className='text-[#6a6a6a] w-full lg:w-4/5 px-4'>Social engineering involves the collection of information from various sources about a target...</p>
                        <div className='flex flex-row items-center  px-4 gap-2'>
                            <a href="" className='text-[#2a3855] text-sm hover:underline font-bold'>Learn more ⟶</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}