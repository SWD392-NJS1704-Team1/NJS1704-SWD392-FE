
import { Button, Input } from 'antd'
import { FilterOutlined, SearchOutlined } from '@ant-design/icons'
import ConfigAntdSearchBar from './ConfigAntdButton'

export default function SearchBar() {
  return (
    <div className="flex items-center space-x-3 w-96">
      <Input prefix={<SearchOutlined />} placeholder="Search by id or phone number" />
      <ConfigAntdSearchBar type="primary">
        <Button type="primary" icon={<FilterOutlined />}>
          Filter
        </Button>
      </ConfigAntdSearchBar>
    </div>
  )
}