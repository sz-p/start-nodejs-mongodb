export default {
  success: function (msg) {
    return {
      success: true,
      status: 0,
      api: msg.api,
      information: msg.infor,
      data: msg.data
    }
  },
  error: function (msg) {
    return {
      success: false,
      status: -1,
      api: msg.api,
      information: msg.infor,
      data: msg.data
    }
  }
}
