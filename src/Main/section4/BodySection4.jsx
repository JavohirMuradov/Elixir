import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
    Button
} from "@material-tailwind/react";


export function BodySection4() {
    return (
        <div className="flex items-center flex-col gap-10 lg:gap-0">
            <Card className="overflow-hidden w-10/12 lg:w-full rounded-2xl lg:rounded-none lg:rounded-t-2xl flex flex-col lg:flex-row items-center">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none lg:w-1/2"
                >
                    <img
                        src="https://prium.github.io/elixir/v3.0.0/assets/img/6.jpg"
                        alt="ui/ux review check"
                        className=""
                    />
                </CardHeader>
                <CardBody className="flex flex-col gap-5 lg:w-1/2">
                    <Typography variant="h4" color="blue-gray">
                        Business Consulting
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal text-base">
                        As one of the world’s largest accountancy networks, elixir helps a diverse range of
                        clients with a diverse range of needs.This is especially true of our Advisory Practice,
                        which provides corporate finance and transaction services, business restructuring.
                    </Typography>
                    <a href="#" className="inline-block hover:underline">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                </CardBody>
            </Card>
            <Card className="overflow-hidden w-10/12 lg:w-full rounded-2xl lg:rounded-none flex flex-col lg:flex-row-reverse items-center">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none lg:w-1/2"
                >
                    <img
                        src="https://prium.github.io/elixir/v3.0.0/assets/img/7.jpg"
                        alt="ui/ux review check"
                        className=""
                    />
                </CardHeader>
                <CardBody className="flex flex-col gap-5 lg:w-1/2">
                    <Typography variant="h4" color="blue-gray">
                        Tax consulting
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal text-base">
                        Elixir serves clients across the country and around the world as they navigate
                        an increasingly complex tax landscape. Our tax professionals draw on deep experience
                        and industry-specific knowledge to deliver clients the insights and innovation they need.
                    </Typography>
                    <a href="#" className="inline-block hover:underline">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                </CardBody>
            </Card>
            <Card className="overflow-hidden w-10/12 lg:w-full rounded-2xl lg:rounded-none lg:rounded-b-2xl flex flex-col lg:flex-row items-center">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none lg:w-1/2"
                >
                    <img
                        src="https://prium.github.io/elixir/v3.0.0/assets/img/8.jpg"
                        alt="ui/ux review check"
                        className=""
                    />
                </CardHeader>
                <CardBody className="flex flex-col gap-5 lg:w-1/2">
                    <Typography variant="h4" color="blue-gray">
                        UI/UX Review Check
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal text-base">
                        Because it&apos;s about motivating the doers. Because I&apos;m here to
                        follow my dreams and inspire others.
                    </Typography>
                    <a href="#" className="inline-block hover:underline">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </div >
    );
}
