import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export function BottomSection8() {
    return (
        <Card color="transparent" shadow={false} className="flex w-full lg:w-3/5">
            <Typography variant="h4" color="white">
                I would like to discuss:
            </Typography>
            <form className="mt-8 mb-2 max-w-screen-lg flex flex-col">
                <div className="mb-1 flex gap-6 justify-between w-full">
                    <Input
                        size="lg"
                        label="Your name"
                        className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900 w-11/12 lg:w-full"
                    />
                    <Input
                        size="lg"
                        label="Phone number"
                        className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900 w-11/12 lg:w-full"
                    />
                </div>
                <div className="flex gap-6 items-center justify-center w-full">
                    <Input
                        size="lg"
                        label="Subject"
                        className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900 w-11/12 lg:w-full"
                    />
                    <div className="relative w-full min-w-[200px] h-11">
                        <Button className="peer bg-yellow-500 h-full text-blue-gray-700 font-sans font-normal text-sm w-11/12 lg:w-full" fullWidth color="yellow">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </Card>
    );
}