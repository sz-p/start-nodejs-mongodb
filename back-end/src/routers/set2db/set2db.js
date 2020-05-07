import RP from '../../responseformat';
import { newModel } from '../../actions/mongondb/collections';

/**
 * set to mongodb
 *
 */
export default function(requestData) {
	return new Promise((resolve, reject) => {
		let saveData = new newModel({
			UUID: '1',
			testFunction: function() {
				console.log('fun');
			},
			testArrayFunction: () => {},
			testExp: /i/g,
			testdate: new Date(),
			testArray: [
				{
					name: 'testArray first',
					value: 1
				},
				{
					name: 'testArray second',
					value: 2
				}
			],
			nan: NaN,
			infinity: Infinity
		});
		saveData.save((err, data) => {
			if (err) {
				reject(RP.error({ api: 'set2db', data, errors: err.errors }));
			} else {
				resolve(RP.success({ api: 'set2db', data }));
			}
		});
	});
}
