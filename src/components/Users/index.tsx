// hooks
import {useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useUserQueryString} from 'hooks/users';

// components
import {Row, Col, Layout, Pagination} from 'antd';
import Loader from 'components/Loader';
import AddUserButton from 'components/AddUserButton';
import UserModal from 'components/UserModal';
import UserItem from './UserItem';

// selectors
import {getUsersData, getUsersIsLoading} from 'selectors/users';

// actions
import {setModalStatus, setFormData, fetchUsers} from 'actions/users';

// utils
import {omit} from 'lodash';

// styles
import './users.scss';

// declarations
import {UserModalStatuses} from 'declarations';

const {Header, Footer, Content} = Layout;

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersData);
  const isLoading = useSelector(getUsersIsLoading);
  const {queryString, params} = useUserQueryString();
  const navigate = useNavigate();

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
          <h1 className="users_header">Users</h1>
        </Header>
        <Content>
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
                            'gender',
                            'createdAt',
                            'updatedAt',
                            'birthdate',
                            'avatar',
                            'about'
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
        </Content>
        <Footer>
          <div className="users_pagination">
            <Pagination
              current={params.page}
              total={120}
              pageSize={params.pageSize}
              disabled={isLoading}
              hideOnSinglePage
              onChange={(page) => {
                navigate(`/users?page=${page}`);
              }}
            />
          </div>
        </Footer>
      </Layout>
    </>
  );
};

export default Users;
