import AddUser from "@/components/AddUser/AddUser"
import Popup from "@/components/Popup"
import { PlusCircleOutlined, SearchOutlined, WifiOutlined } from "@ant-design/icons"
import { Button, ConfigProvider, Input, Space, Table, Tag, Typography } from "antd"
import { TinyColor } from '@ctrl/tinycolor';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const colors1 = ['#000', '#ccc'];
const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

const UserManagement = () => {
    return (
        <div>
            <div className='bg-primary w-full flex items-center p-4 mt-1'>
                <Typography.Title level={3} type="secondary">
                    USER MANAGEMENT
                </Typography.Title>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 w-96 flex-col">
                        <div className="flex gap-3">
                            <Input
                                prefix={<SearchOutlined />}
                                placeholder="Search by..."
                            />
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Button: {
                                            colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                            lineWidth: 0,
                                        },
                                    },
                                }}
                            >
                                <Button type="primary" icon={<WifiOutlined />}>
                                    Filter
                                </Button>
                            </ConfigProvider>

                        </div>
                    </div>
                    <div className="flex">
                        <Popup title='Create a new User' content={<AddUser />}>
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Button: {
                                            colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                            lineWidth: 0,
                                        },
                                    },
                                }}
                            >
                                <Button type="primary" icon={<PlusCircleOutlined />}>
                                    Add new
                                </Button>
                            </ConfigProvider>
                        </Popup>
                    </div>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default UserManagement