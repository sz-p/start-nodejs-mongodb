import RP from '../../responseformat';
import { testCollectionModel } from '../../actions/mongondb/collections';

/**
 * set to mongodb
 *
 */
export default function (requestData) {
  return new Promise((resolve, reject) => {
    testCollectionModel.findOne(requestData, (err, data) => {
      if (err) {
        reject(RP.error({ api: 'getdatabyuuid', data }))
      } else {
        resolve(RP.success({ api: 'getdatabyuuid', data }));
      }
    })
  });
}
