import RP from '../../responseformat';
import { newModel } from '../../actions/mongondb/collections';

/**
 * set to mongodb
 *
 */
export default function(requestData) {
	return new Promise((resolve, reject) => {
		newModel.find({}, (err, data) => {
			if (err) {
				reject(RP.error({ api: 'getalldata', data }));
			} else {
				resolve(RP.success({ api: 'getalldata', data }));
			}
		});
	});
}
