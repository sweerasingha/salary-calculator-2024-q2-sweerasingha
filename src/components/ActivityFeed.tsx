import React from 'react';
import Image from 'next/image';
import profilepic from '../Assets/Ellipse 9.svg';

interface FeedItem {
    name: string;
    action: string;
    target: string;
    time: string;
}

const ActivityFeed: React.FC = () => {
    // Array of feed items
    const feeds: FeedItem[] = [
        { name: 'Hailey Garza', action: 'added new tags to', target: 'Ease Design Systems', time: 'Account | Friday, 10:03 AM' },
        { name: 'John Doe', action: 'commented on', target: 'Project X', time: 'Account | Friday, 9:30 AM' },
        { name: 'Jane Smith', action: 'created a new project', target: 'Project Y', time: 'Account | Friday, 8:45 AM' },
        { name: 'Hailey Garza', action: 'added new tags to', target: 'Ease Design Systems', time: 'Account | Friday, 10:03 AM' },
        { name: 'John Doe', action: 'commented on', target: 'Project X', time: 'Account | Friday, 9:30 AM' },
    ]

    return (
        <div className='relative h-auto md:h-[363px] w-full md:w-[440px] bg-white shadow-md rounded-[8px] border'>
            <div className='sticky top-0 z-10 h-[60px] flex flex-col justify-center items-start bg-white'>
                <p className="text-black text-[16px] font-inter font-semibold ml-[12px]">Activity Feed</p>
            </div>
            <hr className="border-[#E4E7EC] mt-2 w-full" />

            <div className='overflow-y-auto max-h-[303px] md:max-h-[300px] p-4'>
                {feeds.map((feed, index) => (
                    <div key={index} className='flex flex-col p-2'>
                        <div className="flex items-center gap-2 my-[2px] h-[70px] p-5">
                            <Image
                                src={profilepic}
                                alt="profile image"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            <div className='flex flex-col justify-start'>
                                <p className="text-black font-inter text-[14px] gap-2">
                                    <span className="p-1 font-semibold">{feed.name}</span>
                                    <span className="text-black text-[14px] font-inter p-1">{feed.action}</span>
                                    <button className='text-pink-500 text-[14px] p-1'>{feed.target}</button>
                                </p>
                                <p className="text-[#757575] text-[12px] font-inter leading-4">{feed.time}</p>
                            </div>
                        </div>
                        <hr className="border-[#E4E7EC] mt-2 w-full" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActivityFeed;
