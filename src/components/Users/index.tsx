// hooks
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useFilter, useOrder, useUserQueryString} from 'hooks/users';

// components
import {Row, Col, Layout} from 'antd';
import Loader from 'components/Loader';
import AddUserButton from 'components/AddUserButton';
import UserModal from 'components/UserModal';
import Text from 'components/Input/Text';
import SingleSelect from 'components/Input/SingleSelect';
import UserItem from './UserItem';

// selectors
import {
  getFilteredAndOrderedUsersData,
  getUsersIsLoading
} from 'selectors/users';

// actions
import {setModalStatus, setFormData, fetchUsers} from 'actions/users';

// utils
import {omit} from 'lodash';

// constants
import {SORT_OPTIONS} from 'constants/users';

// declarations
import {UserModalStatuses} from 'declarations';

// styles
import './users.scss';

const {Header, Content} = Layout;

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(getFilteredAndOrderedUsersData);
  const isLoading = useSelector(getUsersIsLoading);
  const {filter, setFilter} = useFilter();
  const {order, setOrder} = useOrder();
  const {queryString} = useUserQueryString();

  useEffect(() => {
    dispatch(fetchUsers(queryString));
  }, [queryString]);

  if (isLoading) return <Loader />;

  return (
    <>
      <AddUserButton
        onClick={() => {
          dispatch(setModalStatus(UserModalStatuses.CREATE));
        }}
      />
      <UserModal />
      <Layout>
        <Header>
          <div className="users_header">
            <h1>Users</h1>
            <Text value={filter} onChange={setFilter} placeholder="Search" />
            {Object.keys(SORT_OPTIONS).map((key, index) => (
              <SingleSelect
                key={key + index}
                value={order[key]}
                options={SORT_OPTIONS[key]}
                onChange={(value) => setOrder({key, value})}
              />
            ))}
          </div>
        </Header>
        <Content className="users_content">
          <div className="users_content_wrapper">
            <Row>
              <Col xs={0} md={2} lg={5} />
              <Col xs={24} md={20} lg={14}>
                <ul className="users_list">
                  {users.map((user) => (
                    <UserItem
                      key={user.id}
                      user={user}
                      openEditUserModal={() => {
                        dispatch(
                          setFormData(
                            omit(user, [
                              'createdAt',
                              'updatedAt',
                              'gender',
                              'about',
                              'birthdate',
                              'avatar'
                            ])
                          )
                        );
                        dispatch(setModalStatus(UserModalStatuses.EDIT));
                      }}
                    />
                  ))}
                </ul>
              </Col>
              <Col xs={0} md={2} lg={5} />
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Users;
