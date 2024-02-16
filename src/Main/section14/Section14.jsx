export const Section14 = () => {
    return (
        <section className='bg-[#3d4c6f] mt-8 pb-14 '>
            <div className='container m-auto flex lg:flex-row flex-col gap-16 items-center '>
                <div className='flex flex-col bg-[#2a3855] md:px-10 gap-2 md:py-10 p-3 mt-10 rounded-lg '>
                    <h2 className='text-white text-2xl font-bold font-mont lg:text-start text-center'>Sign up for email alerts</h2>
                    <p className='text-white text-sm  font-mont  lg:text-start text-center'>Stay current with our latest insights</p>
                    <div className='flex lg:flex-row flex-col items-center gap-5 mt-3'>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-14 py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email Here" required />
                        <button class="bg-yellow-500 border-yellow-500  text-gray-900 text-sm rounded-lg lock w-full px-14 py-3 font-medium  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >Submit</button>

                    </div>
                </div>
                <div className='flex lg:gap-36 gap-10 items-center'>
                    <div className='flex flex-col gap-2 text-md pt-10'>
                        <p className='text-white font-bold font-sans'>Contact Us</p>
                        <p className='text-white font-bold font-sans'>FAQ</p>
                        <p className='text-white font-bold font-sans'>Privacy Policy</p>
                        <p className='text-white font-bold font-sans'>Terms of Use</p>
                        <p className='text-white font-bold font-sans'>Global Office</p>
                        <p className='text-white font-bold font-sans'>Local Office</p>
                    </div>
                    <div className='flex flex-col gap-2 text-md pt-8'>
                        <div className='flex flex-row gap-5 items-center'>
                            <div className="bg-[#2A3855] w-10 h-10 flex items-center justify-center rounded">
                                <svg className="w-5 text-white z-30" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="w-5 text-white p-3"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </div>
                            <p className='text-white font-bold font-sans'>Linkedin</p>
                        </div>
                        <div className='flex flex-row gap-5 items-center'>
                            <div className="bg-[#2A3855] w-10 h-10 flex items-center justify-center rounded">
                                <svg className="w-5 text-white z-30" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="w-5 text-white p-3"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                            </div>
                            <p className='text-white font-bold font-sans'>Twitter</p>
                        </div>
                        <div className='flex flex-row gap-5 items-center'>
                            <div className="bg-[#2A3855] w-10 h-10 flex items-center justify-center rounded">
                                <svg className="w-3 text-white z-30" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="w-5 text-white p-3"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                            </div>
                            <p className='text-white font-bold font-sans'>Facebook</p>
                        </div>
                        <div className='flex flex-row gap-5 items-center'>
                            <div className="bg-[#2A3855] w-10 h-10 flex items-center justify-center rounded">
                                <svg className="w-5 text-white z-30" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-plus-g" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="w-5 text-white p-3"><path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path></svg>
                            </div>
                            <p className='text-white font-bold font-sans'>Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
