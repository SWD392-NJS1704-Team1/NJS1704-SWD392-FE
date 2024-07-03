import { Button, Input } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '@/store/reducers/counterReducer';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import debounce from 'debounce';

export default function CounterSearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.counter.searchValue);

  const handleSearch = debounce((searchValue) => {
    dispatch(setSearchValue(searchValue));
  }, 250);

  return (
    <div className="flex items-center space-x-3 w-96">
      <Input
        prefix={<SearchOutlined />}
        placeholder="Search by counter name..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchValue}
      />
      <ConfigAntdButton type="primary">
        <Button type="primary" icon={<FilterOutlined />}>
          Filter
        </Button>
      </ConfigAntdButton>
    </div>
  );
}
