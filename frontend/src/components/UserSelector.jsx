import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
import { setUserName } from '../store/userSlice';

const { Option } = Select;

const users = ['Taras', 'Yury', 'Morteza'];

const UserPicker = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);

  const handleSelect = (value) => {
    dispatch(setUserName(value));
  };

  return (
    <div>
      <Select
        style={{ width: 200 }}
        placeholder="Select a user"
        onChange={handleSelect}
        value={userName}
      >
        {users.map((user) => (
          <Option key={user} value={user}>
            {user}
          </Option>
        ))}
      </Select>
      <p>Selected User: {userName}</p>
    </div>
  );
};

export default UserPicker;
