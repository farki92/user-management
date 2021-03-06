// hooks
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// utils
import {parse, stringify} from 'query-string';
import {defaults, omit, pick} from 'lodash';

// selectors
import {getUsersFilter, getUsersOrder} from 'selectors/users';

// actions
import {setFilter, setOrder} from 'actions/users';

// declarations
import {OrderTypes} from 'declarations';

export const useUserQueryString = () => {
  const {search} = useLocation();
  const params = defaults(pick(parse(search), ['page', 'pageSize']), {
    pageSize: '100',
    page: '1'
  });
  return {queryString: stringify(params), params};
};

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getUsersFilter);

  return {filter, setFilter: (filter: string) => dispatch(setFilter(filter))};
};

export const useOrder = () => {
  const dispatch = useDispatch();
  const order = useSelector(getUsersOrder);

  return {
    order,
    setOrder: ({key, value}: {key: string; value: OrderTypes}) => {
      if (order[key] === value) {
        dispatch(setOrder(omit(order, key)));
      } else {
        dispatch(setOrder({...order, [key]: value}));
      }
    }
  };
};
