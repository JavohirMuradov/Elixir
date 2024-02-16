import { TopSection9 } from "./TopSection9";

export function Section9() {
    return (
        <section className='bg-[#f8f9fa] pb-28 '>
            <div className='container flex flex-col items-center justify-around gap-5  '>
                <TopSection9 />
                <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-8 mt-8 '>
                    <div className='flex flex-col text-center gap-3   bg-white rounded-md'>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/portrait-3.jpg" alt="" className='w-[800px] rounded-t-lg' />
                        <h1></h1>
                        <h3 className='font-mont font-bold text-lg text-[#2a3855] px-3'>
                            Reenal Scott
                        </h3>
                        <span className='text-[#2A3855] px-3'>Advertising Consultant</span>
                        <p className='text-[#2A3855] font-medium px-3 mb-4'>Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.</p>
                    </div>
                    <div className='flex flex-col text-center gap-3   bg-white rounded-md'>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/portrait-4.jpg" alt="" className='w-[800px] rounded-t-lg' />
                        <h3 className='font-mont font-bold text-lg text-[#2a3855] px-3'>
                            Lily Anderson
                        </h3>
                        <span className='text-[#2A3855] px-3'>
                            Activation Consultant
                        </span>
                        <p className='text-[#2A3855] font-medium px-3 mb-4'>
                            Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions ofr users.
                        </p>
                    </div>
                    <div className='flex flex-col text-center gap-3   bg-white rounded-md'>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/portrait-5.jpg" alt="" className='w-[800px] rounded-t-lg' />
                        <h3 className='font-mont font-bold text-lg text-[#2a3855] px-3'>
                            Thomas Anderson
                        </h3>
                        <span className='text-[#2A3855] px-3'>
                            Change Management Consultant
                        </span>
                        <p className='text-[#2A3855] font-medium px-3 mb-4'>
                            As the VP of People, Thomas’s focus lies in the development and optimization of talent retention.
                        </p>
                    </div>
                    <div className='flex flex-col text-center gap-3   bg-white rounded-md'>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/portrait-6.jpg" alt="" className='w-[800px] rounded-t-lg' />
                        <h3 className='font-mont font-bold text-lg text-[#2a3855] px-3'>
                            Legartha Mantana
                        </h3>
                        <span className='text-[#2A3855] px-3'>
                            Brand Management Consultant
                        </span>
                        <p className='text-[#2A3855] font-medium px-3 mb-4'>
                            As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.
                        </p>
                    </div>
                    <div className='flex flex-col text-center gap-3   bg-white rounded-md'>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/portrait-7.jpg" alt="" className='w-[800px] rounded-t-lg' />
                        <h3 className='font-mont font-bold text-lg text-[#2a3855] px-3'>
                            John Snow
                        </h3>
                        <span className='text-[#2A3855] px-3'>
                            Business Analyst
                        </span>
                        <p className='text-[#2A3855] font-medium px-3 mb-4'>
                            John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.
                        </p>
                    </div>
                    <div className='flex flex-col text-center gap-3   bg-white rounded-md'>
                        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/portrait-1.jpg" alt="" className='w-[800px] rounded-t-lg' />
                        <h3 className='font-mont font-bold text-lg text-[#2a3855] px-3'>
                            Ragner Lothbrok
                        </h3>
                        <span className='text-[#2A3855] px-3'>
                            Business Consultant
                        </span>
                        <p className='text-[#2A3855] font-medium px-3 mb-4'>
                            Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming.
                        </p>
                    </div>
                </div>
            </div >
        </section>
    );
}