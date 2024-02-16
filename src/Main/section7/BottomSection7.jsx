import {
    Card,
    CardBody,
    Typography,
    CardFooter
} from "@material-tailwind/react";
import mail from "./images/mail.png";
import money from "./images/money.png";
import sharing from "./images/sharing.png";
import target from "./images/target.png";
import worldglobe from "./images/world-globe.png";

export function BottomSection7() {
    return (
        <Card className="w-full flex-row flex mt-10 shadow-none">
            <CardBody className="flex flex-wrap items-center">
                <Card className="mt-6 shadow-none bg-transparent flex flex-col w-full lg:w-1/3 gap-2">
                    <CardBody className="text-[#2A3855] flex items-center flex-col gap-5 p-0">
                        <img src={sharing} alt="" className=" w-14" />
                        <Typography variant="h5" color="blue-gray" className="text-center">
                            Creative Support
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 text-center">
                        <Typography className=" text-sm w-full">
                            We transform brands, grow businesses, and tell brand and product stories in a most creative way.
                        </Typography>
                    </CardFooter>
                </Card>
                <Card className="mt-6 shadow-none bg-transparent flex flex-col w-full lg:w-1/3 gap-2">
                    <CardBody className="text-[#2A3855] flex items-center flex-col gap-5 p-0">
                        <img src={mail} alt="" className=" w-14" />
                        <Typography variant="h5" color="blue-gray" className="text-center">
                            Creating Experiences
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 text-center">
                        <Typography className=" text-sm w-full">
                            We cover a large range of creative platforms and digital projects with one purpose: to create experiences.
                        </Typography>
                    </CardFooter>
                </Card>
                <Card className="mt-6 shadow-none bg-transparent flex flex-col w-full lg:w-1/3 gap-2">
                    <CardBody className="text-[#2A3855] flex items-center flex-col gap-5 p-0">
                        <img src={target} alt="" className=" w-14" />
                        <Typography variant="h5" color="blue-gray" className="text-center">
                            Product Consulting
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 text-center">
                        <Typography className=" text-sm w-full">
                            We guide you through the pipelines that generate new products with higher potential and lower risk.
                        </Typography>
                    </CardFooter>
                </Card>
                <Card className="mt-6 shadow-none bg-transparent flex flex-col w-full lg:w-1/3 gap-2">
                    <CardBody className="text-[#2A3855] flex items-center flex-col gap-5 p-0">
                        <img src={worldglobe} alt="" className=" w-14" />
                        <Typography variant="h5" color="blue-gray" className="text-center">
                            Business Boosting
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 text-center">
                        <Typography className=" text-sm w-full">
                            We provide energy-efficient and environmentally conservative solutions to our clients to boost their business.
                        </Typography>
                    </CardFooter>
                </Card>
                <Card className="mt-6 shadow-none bg-transparent flex flex-col w-full lg:w-1/3 gap-2">
                    <CardBody className="text-[#2A3855] flex items-center flex-col gap-5 p-0">
                        <img src={money} alt="" className=" w-14" />
                        <Typography variant="h5" color="blue-gray" className="text-center">
                            Strategic Approach
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 text-center">
                        <Typography className=" text-sm w-full relative flex flex-col">
                            Based on solid strategic framework and real, relevant research, we create prototypes, not presentations.
                        </Typography>
                    </CardFooter>
                </Card>
                <Card className="mt-6 shadow-none bg-transparent flex flex-col w-full lg:w-1/3 gap-2">
                    <CardBody className="text-[#2A3855] flex items-center flex-col gap-5 p-0">
                        <img src={mail} alt="" className=" w-14" />
                        <Typography variant="h5" color="blue-gray" className="text-center">
                            Logistic Consulting
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 text-center">
                        <Typography className=" text-sm w-full">
                            We work buy side and sell side to give our clienrts hard hitting answers and focus hard on best opportunities.
                        </Typography>
                    </CardFooter>
                </Card>
            </CardBody >
        </Card >
    );
}