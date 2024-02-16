import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter
} from "@material-tailwind/react";

export function BottomSection5() {
    return (
        <Card className="w-full flex-col lg:flex-row flex mt-10 shadow-none">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 shrink-0 rounded-2xl w-full lg:w-1/2"
            >
                <img
                    src="https://prium.github.io/elixir/v3.0.0/assets/img/why-choose-us.jpg"
                    alt="card-image"
                    className="w-full object-cover rounded-2xl"
                />
            </CardHeader>
            <CardBody>
                <Card className="mt-6 shadow-none bg-transparent">
                    <CardBody className="text-[#2A3855] flex items-center gap-5">
                        <svg className="w-10 h-10" data-fa-transform="flip-h" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-dots" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(-1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" transform="translate(-256 -256)"></path></g></g></svg>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            We Are Professional
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Typography className=" text-sm w-full">
                            We resource, train, speak, mentor and encourage; marketplace leaders, business owners and career professionals to be effective in the workplace.
                        </Typography>
                    </CardFooter>
                </Card>
                <Card className="mt-6 shadow-none bg-transparent">
                    <CardBody className="text-[#2A3855] flex items-center gap-5">
                        <svg className="w-10 h-10" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" transform="translate(-256 -256)"></path></g></g></svg>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            We Are Creative
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Typography className=" text-sm w-full relative flex flex-col">
                            With so many factors to consider when deciding how to characterize your company , wouldn’t it be great to have a group of forward-thinking, well-informed individuals on board who know what they’re doing?
                        </Typography>
                    </CardFooter>
                </Card>
                <Card className="mt-6 shadow-none bg-transparent">
                    <CardBody className="text-[#2A3855] flex items-center gap-5">
                        <svg className="w-10 h-10" data-fa-transform="grow-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="stopwatch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g transform="translate(224 256)"><g transform="translate(0, 0)  scale(1.0625, 1.0625)  rotate(0 0 0)"><path fill="currentColor" d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" transform="translate(-224 -256)"></path></g></g></svg>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            24/7 Great Support
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Typography className=" text-sm w-full">
                            Design clever and compelling marketing strategies, improve product positioning, and drive conversion rates, Elixir is all time available to guide you.
                        </Typography>
                    </CardFooter>
                </Card>
            </CardBody >
        </Card >
    );
}