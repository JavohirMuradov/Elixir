import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export const BottomSection4 = () => {
  return (
    <div className="container flex flex-col xl:flex-row items-center gap-10">
      <div className="flex items-center gap-10 flex-col md:flex-row">
        <Card className="mt-6 shadow-none bg-transparent">
          <CardBody className="text-[#2A3855] flex items-center gap-5">
            <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="credit-card" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"></path></svg>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Special financing
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography className=" text-sm w-80">
              Apply for special financial support and earn exclusive rewards.
            </Typography>
          </CardFooter>
        </Card>
        <Card className="mt-6 shadow-none bg-transparent">
          <CardBody className="text-[#2A3855] flex items-center gap-5">
            <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Chat with team
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography className=" text-sm w-80 relative flex flex-col">
              Have a question? Chat online with an expert. 
              <span className='text-[#2A3855] font-bold'>Start chatting.</span>
              <svg className="text-[#2A3855] w-4 h-4 absolute top-6 left-[6.4rem]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <Card className="mt-6 shadow-none bg-transparent">
        <CardBody className="text-[#2A3855] flex items-center gap-5">
          <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Call a specialist
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography className=" text-sm w-80">
            Our 24/7 support team is ready for you at 1-800-MY-Elixir.
          </Typography>
        </CardFooter>
      </Card>
    </div>
  )
}
