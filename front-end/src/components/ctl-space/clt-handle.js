import { store } from '../../App';
import { getAllData_API, setData_API } from '../../api/api';
import { getAllData_AC, getStatus_AC } from '../../actions/action';

export const getAllData_Handle = function() {
	getAllData_API()
		.then((res) => {
			store.dispatch(
				getStatus_AC({
					status: res
				})
			);
			if (res.success) {
				store.dispatch(
					getAllData_AC({
						data: res.data
					})
				);
			}
		})
		.catch((err) => {
			store.dispatch(
				getStatus_AC({
					status: err
				})
			);
		});
};

export const setData_Handle = function() {
  const state = store.getState();
	setData_API(state.dataValue)
		.then((res) => {
			store.dispatch(
				getStatus_AC({
					status: res
				})
			);
		})
		.catch((err) => {
			store.dispatch(
				getStatus_AC({
					status: err
				})
			);
		});
};
