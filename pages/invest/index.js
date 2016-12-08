// pages/index/index.js
import { gp } from '../base/request';
const versionNun = 0;
const params = {
  pluginList: [{
      pluginName: 'flagShip_invest_tool',
      pluginVersion: versionNun
  }, {
      pluginName: 'flagShip_invest_hotSale',
      pluginVersion: versionNun
  }, {
      pluginName: 'flagShip_invest_currentFinancing',
      pluginVersion: versionNun
  }, {
      pluginName: 'flagShip_invest_selectFinancing',
      pluginVersion: versionNun
  }, {
      pluginName: 'flagShip_invest_hotFund',
      pluginVersion: versionNun
  }, {
      pluginName: 'flagShip_invest_millionFinancing',
      pluginVersion: versionNun
  }]
};
const URL = "https://mgw.pingan.com.cn/toa-mgw/rest/gateway";
Page({
  data:{
    text: 'init data'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    const appInstance = getApp();
    console.log(appInstance.globalData);
    gp({operationType: 'emallInvestment', data: params});
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log('onPullDownRefresh');
  },
  onReachBottom: function() {
    //页面上拉触底事件的处理函数
    console.log('onReachBottom');
  }
})