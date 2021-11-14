// hooks
import {useLocation} from 'react-router-dom';

// utils
import {parse, stringify} from 'query-string';
import {defaults, pick} from 'lodash';

export const useUserQueryString = () => {
  const {search} = useLocation();
  const params = defaults(pick(parse(search), ['page', 'pageSize']), {
    pageSize: 20,
    page: 1
  });
  return {queryString: stringify(params), params};
};
