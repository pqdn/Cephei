import request from 'superagent'
import { strings } from '../constants/strings';
import * as types from '../constants/types';

const dataServiceGenerator = next => (route, name, req, method, id, blockUI = true) => {
  route = id !== -1 ? route + "/" + id : route;
  let query;
  switch (method) {
    case strings.common.queryTypes.POST:
      query = request.post(route).set('Content-Type', 'application/json').send(req);
      break;
    case strings.common.queryTypes.DELETE:
      query = request.del(route).set('Content-Type', 'application/json').query(req);
      break;
    case strings.common.queryTypes.GET:
      query = request.get(route).set('Content-Type', 'application/json').query(req);
      break;
    case strings.common.queryTypes.PUT:
      query = request.put(route).set('Content-Type', 'application/json').send(req);
      break;
    default:
      query = request.get(route).set('Content-Type', 'application/json').query(req);
      break;
  }
  next({ type: types.LOAD_BEGIN, blockUI: blockUI });
  return query
    .end((err, resp) => {
      if (err) {
        return next({
          type: name + types.ERROR_POSTFIX,
          blockUI: blockUI,
          error: err
        })
      }

      const data = resp.text ? JSON.parse(resp.text) : {};

      return next({
        type: name + types.SUCCESS_POSTFIX,
        blockUI: blockUI,
        response: data
      })
    })
};

const dataService = store => next => action => {

  let rootUrl = '/rest';

  if (!!process.env.EFS_REST_URL) {
    rootUrl = process.env.EFS_REST_URL;
  }

  next(action);
  const getApi = dataServiceGenerator(next);
  switch (action.type) {

    case types.GET_USER_INFO:
      getApi(`${rootUrl}/userInfo`, action.type, action.request, strings.common.queryTypes.GET, action.id);
      break;


    default:
      break;
  }
};

export default dataService;