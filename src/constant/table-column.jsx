import Dropdown from "@/components/Dropdown/Dropdown";
import { ViewUserOptionDropdown } from "./menu-data";

export const UsersColumn = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        sorter: {
            compare: (a, b) => a.id - b.id
        },
        defaultSortOrder: 'ascend'
    },
    {
        title: "Full Name",
        dataIndex: "fullname",
        key: "fullname",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Phone",
        dataIndex: "phone_number",
        key: "phone_number",
    },
    {
        title: "DOB",
        dataIndex: "date_of_birth",
        key: "date_of_birth",
    },
    {
        title: "Role",
        dataIndex: "role_name",
        key: "role_name",
    },
    {
        title: "Counter",
        dataIndex: "counter_name",
        key: "counter_name",
    },
    {
        title: 'Action',
        key: 'operation',
        render: (record) => {
            const items = ViewUserOptionDropdown(record.id, record.fullname);
            return <Dropdown items={items} />;
        }
    },
];