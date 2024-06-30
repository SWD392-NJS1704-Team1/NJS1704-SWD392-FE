import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import SearchBar from '@/components/SearchBar/Search-bar';
import { PromotionColumn } from '@/constant/table-column';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import React, { useState } from 'react';
import useGetPromotionList from './useGetPromotionList';
import AddPromotion from '@/components/AddPromotion/AddPromotion';

const PromotionPage = () => {
  const { data } = useGetPromotionList();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: data ? data.length : 0,
  });

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  return (
    <>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          Promotion Page
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4">
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
            ...pagination,
            position: ['bottomCenter'],
            showSizeChanger: false,
          }}
          onChange={handleTableChange}
        />
      </div>
    </>
  );
};

export default PromotionPage;
