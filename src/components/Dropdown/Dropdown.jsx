import { Dropdown as AntDropdown } from 'antd'
import { EllipsisOutlined } from "@ant-design/icons";

const Dropdown = ({ children, items }) => {
    return (
        <AntDropdown menu={{ items }} trigger={['click']}>
            {children ? children : <EllipsisOutlined />}
        </AntDropdown>
    )
}

export default Dropdown