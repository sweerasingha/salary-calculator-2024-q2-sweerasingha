import React, { useEffect, useRef, FC } from 'react';
import { Chart, LinearScale, BarController, CategoryScale, BarElement, ChartData, ChartOptions } from 'chart.js';

Chart.register(LinearScale, BarController, CategoryScale, BarElement);

interface Task {
    id: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
}

interface TasksPrioritiesProps {
    tasks: Task[];
}

const TasksPriorities: FC<TasksPrioritiesProps> = ({ tasks }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
  
      const priorities = tasks.reduce((acc, task) => {
        acc[task.priority] = (acc[task.priority] || 0) + 1;
        return acc;
      }, {} as Record<'HIGH' | 'MEDIUM' | 'LOW', number>);

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['High', 'Medium', 'Low'],
            datasets: [{
              data: [priorities['HIGH'] || 0, priorities['MEDIUM'] || 0, priorities['LOW'] || 0],
              backgroundColor: [
                '#EB5757', 
                '#F2C94C',
                '#2F80ED'
              ],
              borderColor: [
                '#EB5757', 
                '#F2C94C',
                '#2F80ED'
              ],
              borderWidth: 0.5
            }]
          },
          options: {
            scales: {
              y: {
                display: false,
                max: Math.max(...Object.values(priorities))
              },
              x: {
                display: true
              }
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true
                }
              }
            }
          }
        });
      }
    }
  }, [tasks]);

  return (
    <div className='w-full md:w-[440px] h-auto md:h-[253px] bg-white shadow-md rounded-[8px] flex flex-col border'>
        <div className='sticky top-0 z-10 h-[60px] flex flex-col justify-center items-start bg-white'>
            <p className="text-black text-[16px] font-inter font-semibold ml-[12px]">Tasks Priorities</p>
        </div>
        <hr className="border-[#E4E7EC] mt-2 w-full" />
        <div className="container mx-auto mt-10 h-[200px] md:h-[300px] w-full md:w-[250px] justify-center flex">
          <canvas ref={chartRef}></canvas>
        </div>
    </div>
  );
}

export default TasksPriorities;
