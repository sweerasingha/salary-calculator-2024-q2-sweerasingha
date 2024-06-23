import { GetServerSideProps } from 'next';
import axios from 'axios';
import Dashboard from '@/components/Dashboard';
import SidebarNavigation from '@/components/SidebarNavigation';

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

const DashboardPage: React.FC<DashboardProps> = ({ tasks }) => {
  return (
      <div className="flex flex-col sm:flex-row">
          <SidebarNavigation />
          <div className="flex-grow">
              <Dashboard tasks={tasks} />
          </div>
      </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        const tasks: Task[] = response.data;
        return { props: { tasks } };
    } catch (error) {
        console.error('Failed to fetch tasks:', error);
        return { props: { tasks: [] } };
    }
};

export default DashboardPage;
