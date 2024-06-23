import React, { useState, FC } from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import Tasks from '@/components/Tasks';
import Image from 'next/image';
import rings from '../Assets/Rings.svg';
import closeicon from '../Assets/Close.png';

import TasksPriorities from '@/components/TaskPriorities';
import ActivityFeed from '@/components/ActivityFeed';

interface Task {
    id: string;
    name: string;
    todo: string;
    completed: boolean;
    createdBy: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    createdAt: string;
}

interface DashboardProps {
    tasks: Task[];
}

const Dashboard: FC<DashboardProps> = ({ tasks }) => {
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    const handleCloseClick = () => setShowWelcomeMessage(false);

    return (
        <div className='flex flex-col gap-y-4 overflow-auto h-full w-full p-4 lg:p-8'>
            <HeaderNavigation />
            {showWelcomeMessage && (
                <div className='relative flex flex-col lg:flex-row bg-white rounded-lg shadow-md border p-4 lg:px-8 lg:py-6 justify-between items-center'>
                    <div>
                        <h3 className='text-lg lg:text-2xl font-semibold'>Welcome back, John Doe</h3>
                        <p className='text-sm lg:text-base'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
                        <a href="your_url_here" className='text-primary underline'>Look here for more information</a>
                    </div>
                    <div className='hidden lg:block relative w-40 h-40'>
                        <Image 
                            src={rings}
                            alt='rings'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <div className='absolute top-1 right-1 lg:static w-6 h-6 cursor-pointer'>
                        <Image 
                            src={closeicon}
                            alt='close icon'
                            width={24}
                            height={24}
                            onClick={handleCloseClick}
                        />
                    </div>
                </div>
            )}

            <div className='flex flex-col lg:flex-row gap-4 flex-grow'>
                <Tasks tasks={tasks} className='flex-grow' />
                <div className='flex flex-col space-y-4 w-full lg:w-1/4'>
                    <TasksPriorities tasks={tasks} />
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
