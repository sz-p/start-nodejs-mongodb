import axios from 'axios';

const baseURL = 'http://localhost:4000/';

export const base_Get_Rquest = async (url, params) => {
	try {
		const result = await axios.get(baseURL + url, { params: params });
		return result.data;
	} catch (err) {
		return err;
	}
};
export const base_Post_Rquest = async (url, params) => {
	try {
		const result = await axios.post(
			baseURL + url,
			{ params: params },
			// {
			// 	headers: {
			// 		Accept: 'application/javascript, text/plain, */*',
			// 		'Content-Type': 'application/javascript; charset=UTF-8'
			// 	}
			// }
		);
		return result.data;
	} catch (err) {
		return err;
	}
};

/**
 * 获取所有数据
 *
 * @param {any} success
 * @param {any} error
 */
export const getAllData_API = () => {
	return base_Get_Rquest('getalldata', null);
};

/**
 * 写入数据
 *
 * @param {any} success
 * @param {any} error
 */
export const setData_API = (params) => {
  console.log(params);

	return base_Post_Rquest('set2db', params);
};
