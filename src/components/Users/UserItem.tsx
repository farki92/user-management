// components
import {Avatar, Row, Col, Button, Tooltip} from 'antd';
import {EditOutlined} from '@ant-design/icons';

// declarations
import {TUser} from 'declarations';

type TProps = {
  user: TUser;
  openEditUserModal: () => void;
};

const UserItem: React.FC<TProps> = ({user, openEditUserModal}) => (
  <li className="users_list_item">
    <Row>
      <Col span={4}>
        <div className="users_list_item_avatar">
          <Avatar src={user.avatar} size="large" />
        </div>
      </Col>
      <Col span={10}>
        <div className="users_list_item_info">
          <h5>
            {user.firstName} {user.lastName}
          </h5>
          <p>{user.title}</p>
          <span>
            {user.country}
            <img
              src={`https://flagcdn.com/16x12/${user.country.toLowerCase()}.png`}
              width="16"
              height="12"
              alt={user.country}
            ></img>
          </span>
        </div>
      </Col>
      <Col span={6}>
        <div className="users_list_item_balance">
          <span>Balance:</span>
          <p>{user.balance}</p>
        </div>
      </Col>
      <Col span={4}>
        <div className="users_list_item_edit">
          <Tooltip overlay="Edit User" color="blue" placement="bottom">
            <Button icon={<EditOutlined />} onClick={openEditUserModal} />
          </Tooltip>
        </div>
      </Col>
    </Row>
  </li>
);

export default UserItem;
