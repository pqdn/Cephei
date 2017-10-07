import * as types from '../constants/types';

const initialState = {
  example: {
    title: "",
    text: "",
    state: false
  }
};

export const efsApp = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_INFO + types.SUCCESS_POSTFIX:
      console.log(types.GET_USER_INFO + " выполнился успешно");
      return {...state, login: action.response.login, user: action.response.name, userRole: action.response.roles[0], branch: action.response.division};

    case types.GET_USER_INFO + types.ERROR_POSTFIX:
      console.log(types.GET_USER_INFO + " выполнился с ошибкой");
      console.log(action.error);
      return state;

    default:
      return state;
  }
};
