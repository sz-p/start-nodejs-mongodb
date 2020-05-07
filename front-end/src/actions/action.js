/**
 * Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 *store.dispatch() 将 action 传到 store。
 */
import { createAction } from 'redux-actions';

import * as type from './actionType';

const returnMessage = (params) => {
	return params;
};

export const getAllData_AC = (params) => createAction(type.GET_ALLDATA, returnMessage)(params);
export const getStatus_AC = (params) => createAction(type.GET_STATUS, returnMessage)(params);
