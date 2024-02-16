import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import logo from "./Images/logo-dark.png";
import phone from "./Images/Снимок экрана 2024-02-11 234213.png";
import clock from "./Images/Снимок экрана 2024-02-11 234149.png";
import metka from "./Images/Снимок экрана 2024-02-11 234149.png";

export function MYHeader() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <Menu>
                    <MenuHandler>
                        <Button variant="text" className="px-[1px]">Home</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Slider Header</MenuItem>
                        <MenuItem>Slider Classic</MenuItem>
                        <MenuItem>Static Header</MenuItem>
                        <MenuItem>Static Classic</MenuItem>
                        <MenuItem>Youtube Background</MenuItem>
                        <MenuItem>Youtube Classic</MenuItem>
                        <MenuItem>Self-hosted Video</MenuItem>
                        <MenuItem>Self-hosted Classic</MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <Menu>
                    <MenuHandler>
                        <Button variant="text" className="px-[1px]">Pages</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Alumni</MenuItem>
                        <MenuItem>Blank Page</MenuItem>
                        <MenuItem>404 Page</MenuItem>
                        <MenuItem>Login</MenuItem>
                        <MenuItem>Registration</MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <Menu>
                    <MenuHandler>
                        <Button variant="text" className="px-[1px]">News</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Newsroom</MenuItem>
                        <MenuItem>Single room</MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <Menu>
                    <MenuHandler>
                        <Button variant="text" className="px-[1px]">Elements</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Menu Item 1</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                        <MenuItem>Menu Item 3</MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <Menu>
                    <MenuHandler>
                        <Button variant="text" className="px-[1px]">Contact</Button>
                    </MenuHandler>
                </Menu>
            </Typography>
        </ul>
    );

    return (
        <>
            <div className='text-white bg-[#2A3855]'>
                <div className="py-5 container flex justify-between items-center text-xs">
                    <div className='flex items-center gap-5'>
                        <div className='hidden lg:flex items-center gap-1'>
                            <img src={metka} alt="" />
                            <h1>1010 Avenue, New York, NY 10018 US.</h1>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={phone} alt="" />
                            <h1>212 386 5575, 212 386 5576</h1>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-1'>
                            <img src={clock} alt="" />
                            <h1>Mon-Sat, 8.00-18.00. Sunday CLOSED</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar className="container px-4 lg:px-8 py-0 shadow-none sticky top-0 backdrop-opacity-80 backdrop-brightness-100 bg-opacity-80 z-50 rounded-none">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <div className="flex gap-5 items-center">
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            <img src={logo} alt="" />
                        </Typography>
                        <div className="hidden lg:block">{navList}</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <Button
                            variant="outlined"
                            size="sm"
                            className="hidden lg:inline-block rounded-full"
                        >
                            <span>Purchase</span>
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <div className="flex items-center gap-x-1">
                            <Button fullWidth variant="gradient" size="sm" className="rounded-full">
                                <span>Purchase</span>
                            </Button>
                        </div>
                    </div>
                </MobileNav>
            </Navbar>
        </>
    );
}