import React from 'react';
import { Pie } from '@ant-design/charts';
import { Table, Row, Col } from 'antd';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 24px;
  background-color: #f0f2f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Dashboard = () => {
  // Data for Pie Chart
  const pieData = [
    { type: 'Category A', value: 27 },
    { type: 'Category B', value: 25 },
    { type: 'Category C', value: 18 },
    { type: 'Category D', value: 15 },
    { type: 'Category E', value: 10 },
    { type: 'Other', value: 5 },
  ];

  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [{ type: 'element-active' }],
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

  return (
    <DashboardContainer>
      <Header>Dashboard</Header>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Pie {...pieConfig} />
        </Col>
        <Col span={12}>
          <Heading>Top Customers</Heading>
          <Table
            dataSource={customerData}
            columns={customerColumns}
            rowKey="id"
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={12}>
          <Heading>Top Staff</Heading>
          <Table dataSource={staffData} columns={staffColumns} rowKey="id" />
        </Col>
        <Col span={12}>
          <Heading>Products</Heading>
          <Table
            dataSource={productsData}
            columns={productsColumns}
            rowKey="id"
          />
        </Col>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
