import RP from '../../responseformat';
import { testCollectionModel } from '../../actions/mongondb/collections';

/**
 * set to mongodb
 *
 */
export default function (requestData) {
  return new Promise((resolve, reject) => {

    testCollectionModel.save(requestData, (err, data) => {
      if (err) {
        reject(RP.error({ api: 'set2db', data }))
      } else {
        resolve(RP.success({ api: 'set2db', data }));
      }
    })
  });
}
