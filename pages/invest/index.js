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
  },{
    pluginName: 'requestIdsAd',
    pluginVersion: versionNun
  }
  ]
};
const URL = "https://mgw.pingan.com.cn/toa-mgw/rest/gateway";
Page({
  data:{
    text: 'init data'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    const appInstance = getApp();
    gp({operationType: 'emallInvestment', data: params, success: this.success});
    console.log(appInstance.globalData, this.data, '数据data');
  },
  onReady:function(){
    // 页面渲染完成
    console.log('页面渲染完成')
  },
  onShow:function(){
      console.log('页面显示')
    // 页面显示
  },
  onHide:function(){
      console.log('页面隐藏')
    // 页面隐藏
  },
  onUnload:function(){
      console.log('页面关闭')
    // 页面关闭
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log('onPullDownRefresh');
    gp({operationType: 'emallInvestment', data: params, success: this.success}); 
  },
  onReachBottom: function() {
    //页面上拉触底事件的处理函数
    console.log('onReachBottom');
  },
  success(res) {
    console.log('resres',res.result)
    const result = res.result;
    let 
    currentFinancing = [],
    selectFinancing = [],
    hotSaleProduct = [],
    investTool = [],
    hotFundList = [],
    hotFundTitle,
    currentFinancingTitle,
    selectFinancingTitle;

    if (result.flagShip_invest_currentFinancing && result.flagShip_invest_currentFinancing.data.length > 0) {
      currentFinancing = result.flagShip_invest_currentFinancing.data.slice(1);
      currentFinancingTitle = result.flagShip_invest_currentFinancing.data[0];
    }
    if (result.flagShip_invest_selectFinancing && result.flagShip_invest_selectFinancing.data.length > 0) {
      selectFinancing = result.flagShip_invest_selectFinancing.data.slice(1);
      selectFinancingTitle = result.flagShip_invest_selectFinancing.data[0];
    }
    if (result.flagShip_invest_hotSale.data && result.flagShip_invest_hotSale.data.length > 0) {
        hotSaleProduct = result.flagShip_invest_hotSale.data[1];
    }
    if (result.flagShip_invest_tool.data && result.flagShip_invest_tool.data.length > 0) {
      investTool = result.flagShip_invest_tool.data;
    }
    if (result.flagShip_invest_hotFund.data && result.flagShip_invest_hotFund.data.length > 0) {
      hotFundList = result.flagShip_invest_hotFund.data.slice(1);
      hotFundTitle = result.flagShip_invest_hotFund.data[0];
    }
    this.setData({
      investData: {
      currentFinancing,
      currentFinancingTitle,
      selectFinancing,
      selectFinancingTitle,
      hotSaleProduct,
      investTool,
      hotFundTitle,
      hotFundList,
    },
    });
  },
})