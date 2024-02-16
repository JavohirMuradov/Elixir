import { Carousel, IconButton } from "@material-tailwind/react";

export function Section11() {
    return (
        <Carousel className="rounded-xl" autoplay="true" prevArrow={({ handlePrev }) => (
            <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="text-blue-gray-900 overflow-visible !absolute top-2/4 left-4 -translate-y-2/4"
            >
                <svg class=" text-blue-gray-900 h-full w-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
            </IconButton>
        )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="text-blue-gray-900 overflow-visible !absolute top-2/4 !right-4 -translate-y-2/4"
                >
                    <svg class=" text-blue-gray-900 h-full w-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                </IconButton>
            )}
        >
            <section className='mt-16 mb-10 flex justify-center w-full'>
                <div className='container m-auto text-center lg:text-start gap-5 flex lg:flex-row flex-col justify-between items-center'>
                    <div>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/client2.png" alt="" className='lg:w-[400px] w-full rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2 w-2/3'>
                        <p className='font-medium font-sans text-[#6a6a6a] lg:w-2/3 w-full text-lg'>Writing case studies was a daunting task for us. We didn’t know where to begin or what questions to ask, and clients never seemed to follow through when we asked. Elixir team did everything – with almost no time or effort for me!</p>
                        <h3 className='text-[#2a3855] font-semibold font-sans w-max'>Maria Sharapova</h3>
                        <span className='text-[#6a6a6a] font-normal font-sans w-max'>Managing Director, Themewagon Inc.</span>
                    </div>
                </div>
            </section>
            <section className='mt-16 mb-10 flex justify-center w-full'>
                <div className='container m-auto text-center lg:text-start gap-5 flex lg:flex-row flex-col justify-between items-center'>
                    <div>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/client1.png" alt="" className='lg:w-[400px] w-full rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2 w-2/3'>
                        <p className='font-medium font-sans text-[#6a6a6a] lg:w-2/3 w-full text-lg'>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
                        <h3 className='text-[#2a3855] font-semibold font-sans w-max'> Michael Clarke</h3>
                        <span className='text-[#6a6a6a] font-normal font-sans w-max'> CEO, A.E.T Institute</span>
                    </div>
                </div>
            </section>
            <section className='mt-16 mb-10 flex justify-center w-full'>
                <div className='container m-auto text-center lg:text-start gap-5 flex lg:flex-row flex-col justify-between items-center'>
                    <div>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/client3.png" alt="" className='lg:w-[400px] w-full rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2 w-2/3'>
                        <p className='font-medium font-sans text-[#6a6a6a] lg:w-2/3 w-full text-lg'>As a sales gamification company, we were skeptical to work with a consultant to optimize our sales emails, but Elixir was highly recommended by many other Y-Combinator startups we knew. Elixir helped us run a ~6 week email campaign.</p>
                        <h3 className='text-[#2a3855] font-semibold font-sans w-max'>David Beckham</h3>
                        <span className='text-[#6a6a6a] font-normal font-sans w-max'> Chairman, Harmony Corporation</span>
                    </div>
                </div>
            </section>
        </Carousel>
    );
}