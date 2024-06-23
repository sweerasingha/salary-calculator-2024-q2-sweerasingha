import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import dashboard from '../Assets/Dashboard.png';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

interface MenuItem {
    title: string;
    icon: StaticImageData;
    path: string;
    submenu: boolean;
    submenuitems: any[];
}

const SidebarNavigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems: MenuItem[] = [
        {
            title: 'Dashboard',
            icon: dashboard,
            path: '/',
            submenu: false,
            submenuitems: [],
        },
    ];

    return (
        <>
            <div className="hidden sm:flex w-[272px] h-[100vh] bg-[#33074F] flex-col">
                <div className="w-[272px] h-[80px] bg-bg-opacity bg-[#461D5F] justify-center items-center flex">
                    <h3 className="text-white font-semibold font-inter text-[24px]">Acmy Solutions</h3>
                </div>
                <ul className="flex flex-col mt-[60px] ml-[16px]">
                    {menuItems.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <div className="bg-bg-opacity bg-[#461D5F] rounded-3xl w-[240px] h-[40px] flex items-center flex-row gap-x-[8px] pl-[12px] hover:bg-purple-600 cursor-pointer mb-5">
                                <div className='w-[24px] h-[24px] mr-[10px]'>
                                    <Image src={item.icon} alt={item.title} width={24} height={24} />
                                </div>
                                <span className="text-lg text-white font-inter-regular">{item.title}</span>
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex sm:hidden w-full bg-[#33074F] flex-col">
                <div className="w-full h-[80px] bg-bg-opacity bg-[#EBE6ED] flex justify-between items-center px-4 relative">
                    <h3 className="text-white font-semibold font-inter text-[24px]">Acmy Solutions</h3>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon style={{ color: 'white' }} />
                    </button>
                    {isOpen && (
                        <ul className="absolute z-10 rounded-lg shadow-lg right-4 top-16 ">
                            {menuItems.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    <div className='bg-[#33074F] flex flex-col justify-center p-2 '>
                                        <li className="flex items-center flex-row gap-x-[8px] pl-[12px] pr-[12px] py-[8px] hover:bg-purple-600 cursor-pointer bg-bg-opacity bg-[#EBE6ED] hover:rounded-3xl rounded-3xl">
                                            <div className='w-[24px] h-[24px] mr-[10px]'>
                                                <Image src={item.icon} alt={item.title} width={24} height={24} />
                                            </div>
                                            <span className="text-lg text-[#33074F] font-inter-regular">{item.title}</span>
                                        </li>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default SidebarNavigation;
