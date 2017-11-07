import * as types from "../constants/types";

export const executeRest = (serviceName, request, id=-1) => {
  console.log(request);
  return{
    type: serviceName,
    request: request,
    id: id
  }
};

export const changeSelectedNodes = (nodes) => {
    return {
        type: types.CHANGE_SELECTED_NODES,
        nodes: nodes
    }
};