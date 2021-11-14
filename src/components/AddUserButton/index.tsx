// components
import {Button, Tooltip} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

// styles
import './add-user-button.scss';

type TProps = {
  onClick: () => void;
};

const AddUserButton: React.FC<TProps> = ({onClick}) => (
  <div className="add-user-button">
    <Tooltip title="Create New User" placement="left" color="blue">
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        onClick={onClick}
      />
    </Tooltip>
  </div>
);

export default AddUserButton;
