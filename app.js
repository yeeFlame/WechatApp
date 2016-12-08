App({
    onLaunch: function() {
        console.log('onLaunch');
    },
    onShow: function() {
        console.log('onShow');
    },
    onHide: function() {
        console.log("onHide");
    },
    globalData: 'I am global data'
})
 /*
 App() 必须在 app.js 中注册，且不能注册多个。

不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。

不要在 onLaunch 的时候调用 getCurrentPage()，此时 page 还没有生成。

通过 getApp() 获取实例之后，不要私自调用生命周期函数。
 */