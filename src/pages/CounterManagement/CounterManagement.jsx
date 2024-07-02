import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import { CounterColumn } from '@/constant/table-column';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import useGetCounterList from './useGetCounterList';
import AddCounter from '@/components/AddCounter/AddCounter';
import CounterSearchBar from '@/components/SearchBar/Counter-search-bar';

const CounterManagement = () => {
  const { data } = useGetCounterList();

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
          COUNTER MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <CounterSearchBar />
          <div className="flex">
            <Popup title="Create a new counter" content={<AddCounter />}>
              <ConfigAntdButton>
                <Button type="primary" icon={<PlusCircleOutlined />}>
                  Add new
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table
          columns={CounterColumn}
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

export default CounterManagement;
