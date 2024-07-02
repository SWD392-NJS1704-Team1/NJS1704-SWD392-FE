import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Table } from 'antd';
import { Layout, Card } from 'antd';
import PieChart from '@/components/PieChart/PieChart';
import BarChart from '@/components/BarChart/BarChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const { Content } = Layout;

// Data for Customer Table
const customerData = [
  { id: 1, name: 'John Doe', point: 100 },
  { id: 2, name: 'Jane Smith', point: 95 },
  { id: 3, name: 'Alice Johnson', point: 80 },
  { id: 4, name: 'Bob Brown', point: 75 },
];

const customerColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Point',
    dataIndex: 'point',
    key: 'point',
  },
];
// Data for Staff Table
const staffData = [
  { id: 1, name: 'Alice', counter: 'A', targets: 10 },
  { id: 2, name: 'Bob', counter: 'B', targets: 12 },
  { id: 3, name: 'Charlie', counter: 'C', targets: 8 },
];

const staffColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Counter',
    dataIndex: 'counter',
    key: 'counter',
  },
  {
    title: 'Targets',
    dataIndex: 'targets',
    key: 'targets',
  },
];

const Dashboard = () => {
  return (
    <Layout className="p-4 bg-gray-100 min-h-screen">
      <Content className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <BarChart />
          <PieChart />
        </div>
        <Card title="Top Customer" className="mt-4">
          <Table
            dataSource={customerData}
            columns={customerColumns}
            rowKey="id"
          />
        </Card>
        <Card title="Top Staff" className="mt-4">
          <Table dataSource={staffData} columns={staffColumns} rowKey="id" />
        </Card>
      </Content>
    </Layout>
  );
};

export default Dashboard;
