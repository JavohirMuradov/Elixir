import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export const TopSection2 = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <Card className="mt-6 w-2/5 flex items-center justify-center text-center shadow-none">
                <CardBody className='flex items-center justify-center flex-col gap-5'>
                    <Typography variant="h2" className='text-[#2A3855] font-black'>
                        Welcome to the Elixir
                    </Typography>
                    <Typography className=' text-gray-700'>
                        Get expert consultancy and support with Elixir, an advisory firm that stand by your side always.
                    </Typography>
                    <div className='w-10 h-[2px] bg-[#2A3855]'></div>
                </CardBody>
            </Card>
        </div>
    )
}

