import Dropdown from "@/components/Dropdown/Dropdown";
import { ViewUserOptionDropdown } from "./menu-data";

export const UsersColumn = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
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
        title: "Role ID",
        dataIndex: "role_id",
        key: "role_id",
    },
    {
        title: "Counter ID",
        dataIndex: "counter_id",
        key: "counter_id",
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