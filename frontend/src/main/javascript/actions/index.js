import * as types from "../constants/types";

export const changeTab = (tab) => {
  return {
    type: types.CHANGE_TAB,
    tab
  }
};

export const updateCurrentDT = () => {
  return {
    type: types.SET_CURRENT_DT,
    currentDT: new Date()
  }
};

export const findClient = (request) => {
  return {
    type: types.FIND_CLIENT,
    request: request
  }
};

export const findAgents = (clientID) => {
  return {
    type: types.FIND_AGENT,
    clientID: clientID
  }
};

export const chooseCurrentClientAccount = (accountNumber) => {
  return {
    type: types.CHOOSE_CURRENT_CLIENT_ACCOUNT,
    accountNumber: accountNumber
  }
};

export const findClientCheckbook = (response) => {
  return {
    type: types.FIND_CLIENT_CHECKBOOK,
    response: response
  }
};

export const findAgentsCheckbook = (clientID) => {
  return {
    type: types.FIND_AGENT_CHECKBOOK,
    clientID: clientID
  }
};

export const findTask = (responses) => {
  return {
    type: types.FIND_TASK,
    responses: responses
  }
};

export const chooseCurrentClientAccountCheckbook = (accountNumber) => {
  return {
    type: types.CHOOSE_CURRENT_CLIENT_ACCOUNT_CHECKBOOK,
    accountNumber: accountNumber
  }
};

export const registerStatement = () => {
  return {
    type: types.REGISTER_STATEMENT_CHECKBOOK,
    isRegister: true
  }
};

export const getCheckbook = () => {
  return {
    type: types.GET_CHECKBOOK,
    isGetCheckbook: true
  }
};

export const getComission = () => {
  return {
    type: types.GET_COMISSION,
    isGetComission: true
  }
};

export const giveCheckbook = () => {
  return {
    type: types.GIVE_CHECKBOOK,
    isGiveCheckbook: true
  }
};

export const executeRest = (serviceName, request, id=-1) => {
  console.log(request);
  return{
    type: serviceName,
    request: request,
    id: id
  }
}

export const identifyCardPos = () => {
  return {
    type: types.IDENTIFY_CARD_POS
  }
};

export const setHasCashingOutFeatures = (hasCashingOutFeatures) => {
  return {
    type: types.SET_HAS_CASHING_OUT_FEATURES,
    hasCashingOutFeatures: hasCashingOutFeatures
  }
};

export const setWithdrawalSum = (withdrawalSum) => {
  return {
    type: types.SET_WITHDRAWAL_SUM,
    withdrawalSum: withdrawalSum
  }
};

export const enterPIN = () => {
  return {
    type: types.ENTER_PIN
  }
};

export const sendComplienceWithdrawal = () => {
  return {
    type: types.WITHDRAWAL_SEND_COMPLIENCE
  }
};

export const setSelectedClient = (client) => {
  return {
    type: types.SET_SELECTED_CLIENT,
    client: client
  }
};

export const setSelectedAgent = (agent) => {
  return {
    type: types.SET_SELECTED_AGENT,
    agent: agent
  }
};

export const setSelectedAccount = (account) => {
  return {
    type: types.SET_SELECTED_ACCOUNT,
    account: account
  }
};

export const setSelectedOperation = (operation) => {
  return {
    type: types.SET_SELECTED_OPERATION,
    operation: operation
  }
};

export const updateCurrentOperation = (op) => {
  return {
    type: types.UPDATE_CURRENT_OPERATION,
    operation: op
  }
};

export const calculateCommissionOperation = (op) => {
  return {
    type: types.GET_COMMISSION,
    operation: op
  }
};

export const resetInflowState = () => {
  return {
    type: types.RESET_INFLOW_STATE
  }
};

export const resetClientsAgentsAndAccountsState = () => {
  return {
    type: types.RESET_CLIENTS_AGENTS_AND_ACCOUNTS_STATE
  }
};

export const setError1Message = (er) => {
  return {
    type: types.SET_ERROR_MESSAGE,
    error: er
  }
};

export const resetError1Message = () => {
  return {
    type: types.SET_ERROR_MESSAGE,
    error: {}
  }
};