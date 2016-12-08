/**
 * Created by lixiaoxi on 16/7/4.
 * @description 网络请求
 */

export function get(url, data = {}, opt = {}) {
    wx.request({
      url,
    //   header:{
    //     'content-type':'application/x-www-form-urlencoded',
    //   },
      data: data, 
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        // success
      },
      fail: function(err) {
        // fail

      },
      complete: function() {
        // complete
      }
    }) 
}

export function post({url, data = {}, success = () => {}, fail = () => {}, complete = () => {}}) {
     wx.request({
      url,
      header:{
        'content-type':'application/x-www-form-urlencoded',
      },
      data, 
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        // success
        success(res);
      },
      fail: function(err) {
        // fail
        fail(err);
      },
      complete: function() {
        // complete
        complete();
      }
    }) 
}

export function gp({url = 'https://mgw.pingan.com.cn/toa-mgw/rest/gateway', operationType = '', data = {}, success = () => {}, fail = () => {}, complete = () => {}}) {
    console.log(arguments,'arguments')
        wx.request({
      url,
      header:{
        'content-type':'application/x-www-form-urlencoded',
      },
      data: {
          operationType,
          requestData: JSON.stringify([
                 {
    "idfa" : "30B41C9F-8544-4F63-8BE6-5E493A20A86A",
    "longitude" : "-1.420000",
    "osVersion" : "10.1",
    "deviceId" : "D14791886430109301",
    "latitude" : "55.020000",
    "osType" : "1",
    "dpi" : "750x1334",
    "sessionId" : "Seecce1cf-57f5-476a-98e0-f24c3057f7ac",
    "idfv" : "6926093F-8228-4F74-96A7-B6CF140535EF",
    "tddId" : "h3e0bbb96a9b87cc8a7d4f03830bf8e0f",
    "appVersion" : "5.0.2",
    "reqTracer" : "D147918864301093016815FCB7-8C6D-4C8D-B7EE-D544C8D8E34D",
    "appClientId" : "C14791886430130793"
  },
            data
          ])
      }, 
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        // success
        //success(res ? res.data : res);
        console.log(res, 'success');
      },
      fail: function(err) {
        // fail
        //fail(err);
        console.log(err, 'error');
      },
      complete: function() {
        // complete
        complete();
      }
    })

}