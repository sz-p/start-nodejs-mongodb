import helloWorldHandle from './helloworld/helloworld';
import getalldataHandle from './get-all-data/getdata-all-data';
import getdatabyuuidHandle from './getdata-by-uuid/getdata-by-uuid';
import removedatabyuuidHandle from './removedata-by-uuid/removedata-by-uuid';
import set2dbHandle from './set2db/set2db';
import updatedataHandle from './update-data/update-data';

export default [
  ['/helloworld', 'get', helloWorldHandle],
  ['/getalldata', 'get', getalldataHandle],
  ['/getdatabyuuid', 'get', getdatabyuuidHandle],
  ['/removedatabyuuid', 'get', removedatabyuuidHandle],
  ['/set2db', 'get', set2dbHandle],
  ['/updatedata', 'get', updatedataHandle],
];
