// hooks
import {useDispatch, useSelector} from 'react-redux';
import {useUserQueryString} from 'hooks/users';

// constants
import {USER_FORM_DATA_INPUTS} from 'constants/users';

// utils
import {isEmpty} from 'lodash';

// declarations
import {UserModalStatuses} from 'declarations';

// components
import {Modal, Space} from 'antd';
import Input from 'components/Input';

// selectors
import {
  getUsersErrors,
  getUsersFormData,
  getUsersModalStatus
} from 'selectors/users';

// actions
import {
  resetFormData,
  setModalStatus,
  createUser,
  udpateUser,
  removeError,
  setFormData,
  setErrors
} from 'actions/users';

const UserModal: React.FC = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(getUsersModalStatus);
  const formData = useSelector(getUsersFormData);
  const errors = useSelector(getUsersErrors);
  const isEditing = modalStatus === UserModalStatuses.EDIT;
  const {queryString} = useUserQueryString();

  return (
    <Modal
      visible={modalStatus !== UserModalStatuses.SLEEP}
      onCancel={() => {
        dispatch(setModalStatus(UserModalStatuses.SLEEP));
        dispatch(resetFormData());
        dispatch(setErrors([]));
      }}
      okButtonProps={{disabled: !isEmpty(errors)}}
      okText={isEditing ? 'Update' : 'Create'}
      onOk={() => {
        isEditing
          ? dispatch(udpateUser(queryString))
          : dispatch(createUser(queryString));
      }}
      title={isEditing ? 'Edit User' : 'Create User'}
    >
      <Space direction="vertical" style={{width: '100%'}}>
        {USER_FORM_DATA_INPUTS.map(({key, input, props}) => (
          <Input
            key={key}
            type={input}
            value={formData[key]}
            hasError={errors.includes(key)}
            onChange={(value) => {
              if (errors.includes(key)) {
                dispatch(removeError(key));
              }
              dispatch(setFormData({[key]: value}));
            }}
            {...props}
          />
        ))}
      </Space>
    </Modal>
  );
};

export default UserModal;
