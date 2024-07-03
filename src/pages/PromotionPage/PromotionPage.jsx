import { PromotionColumn } from '@/constant/table-column';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Spin, Table, Typography } from 'antd';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import SearchBar from '@/components/SearchBar/Search-bar';
import React from 'react';
import useGetPromotionList from './useGetPromotionList';
import AddPromotion from '@/components/AddPromotion/AddPromotion';

const PromotionPage = () => {
  const { data, isLoading } = useGetPromotionList();

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spin />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div className="bg-white w-full flex items-center p-4 mt-1 rounded-lg shadow-sm">
        <Typography.Title level={3} type="secondary">
          PROMOTION MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 w-96 flex-col">
            <SearchBar />
          </div>
          <div className="flex">
            <Popup title="Add Promotion" content={<AddPromotion />}>
              <ConfigAntdButton>
                <Button type="primary" icon={<PlusCircleOutlined />}>
                  Add Promotion
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table
          columns={PromotionColumn}
          dataSource={data}
          pagination={{
            pageSize: 5,
            position: ['bottomCenter'],
          }}
        />
      </div>
    </div>
  );
};

export default PromotionPage;
