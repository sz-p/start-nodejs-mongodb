import RP from '../../responseformat';
import { testCollectionModel } from '../../actions/mongondb/collections';

/**
 * set to mongodb
 *
 */
export default function (requestData) {
  return new Promise((resolve, reject) => {
    testCollectionModel.findByIdAndUpdata(requestData, (err, data) => {
      if (err) {
        reject(RP.error({ api: 'updatedata', data }))
      } else {
        resolve(RP.success({ api: 'updatedata', data }));
      }
    })
  });
}
