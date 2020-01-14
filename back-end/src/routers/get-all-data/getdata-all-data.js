import RP from '../../responseformat';
import { testCollectionModel } from '../../actions/mongondb/collections';

/**
 * set to mongodb
 *
 */
export default function (requestData) {
  return new Promise((resolve, reject) => {
    testCollectionModel.find({}, (err, data) => {
      if (err) {
        reject(RP.error({ api: 'getalldata', data }))
      } else {
        resolve(RP.success({ api: 'getalldata', data }));
      }
    })
  });
}
