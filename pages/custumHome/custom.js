// pages/custumHome/custom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { value: '2017-12-15', name: '客户' },
      { value: '2017-12-14', name: '一线员工' },
      { value: '2017-12-13', name: '项目组长' },
      { value: '2017-12-12', name: '系统管理员' },
    ],
  },
  bindtapView:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../dailyReportSummary/dailysummary?id='+e.currentTarget.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})