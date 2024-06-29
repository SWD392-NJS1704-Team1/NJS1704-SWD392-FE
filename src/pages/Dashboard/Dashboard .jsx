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
import { Bar, Pie } from 'react-chartjs-2';
import { Col, Row, Table } from 'antd';
import { Layout, Card } from 'antd';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

const { Content } = Layout;

const barData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '8.000.000 of USD',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

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

// Data for Products Table
const productsData = [
  { id: 1, name: 'Product A', quantity: 100, barcode: '1234567890' },
  { id: 2, name: 'Product B', quantity: 200, barcode: '0987654321' },
  { id: 3, name: 'Product C', quantity: 150, barcode: '1122334455' },
];

const productsColumns = [
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
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Barcode',
    dataIndex: 'barcode',
    key: 'barcode',
  },
];

const Dashboard = () => {
  return (
    <Layout className="p-4 bg-gray-100 min-h-screen">
      <Content className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card title="Revenue" className="w-full h-full">
            <div className="h-96">
              <Bar data={barData} />
            </div>
          </Card>
          <Card title="Popular Product" className="w-full h-full">
            <div className="h-96">
              <Pie data={pieData} />
            </div>
          </Card>
        </div>
        <Card title="Top Staff" className="mt-4">
          <Table dataSource={staffData} columns={staffColumns} rowKey="id" />
        </Card>
        <Card title="Top Products" className="mt-4">
          <Table
            dataSource={productsData}
            columns={productsColumns}
            rowKey="id"
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default Dashboard;
