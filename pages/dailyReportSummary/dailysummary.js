// pages/dailyReportSummary/dailysummary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"9999-99-99",
    workerCounts:3,
    items:[
      { value: "XXXX1", name:"绿地保洁", hasDone:true},
      { value: "XXXX2", name: "简单修剪", hasDone:false },
      { value: "XXXX2", name: "切边和树穴整理", hasDone: false },
      { value: "XXXX2", name: "补植补种", hasDone: false },
      { value: "XXXX2", name: "松土除草", hasDone: true },
      { value: "XXXX2", name: "浇水", hasDone: false },
      { value: "XXXX2", name: "草坪修剪", hasDone: true },
      { value: "XXXX2", name: "绿篱色块修剪", hasDone: false },
      { value: "XXXX2", name: "造型植物修剪", hasDone: true },
      { value: "XXXX2", name: "树木修剪", hasDone: false },
      { value: "XXXX2", name: "施肥", hasDone: false },
      { value: "XXXX2", name: "病虫害防治", hasDone: false },
      { value: "XXXX2", name: "树叶粉碎", hasDone: false },
    ],
    detailContent:"今日养护内容主要做了以下3点\r\n1.XXXXXXXXXXXXXXXXXXXXX\n2.XXXXXXXXXXXXXXXX\r\n3.XXXXXXXXXXXXXXXXXXX\r\n4.XXXXXXXXXXXXXXXXXXXXXXXXXX\n5.XXXXXXXXXXXXX",
    images:[
      { value: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1513614572&di=fad38085f8352eae6079ea10edb8c16f&src=http://img4.focus.cn/upload/hz/22932/b_229311280.jpg" },
      { value: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1513614572&di=fad38085f8352eae6079ea10edb8c16f&src=http://img4.focus.cn/upload/hz/22932/b_229311280.jpg" },
      { value: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1513614572&di=fad38085f8352eae6079ea10edb8c16f&src=http://img4.focus.cn/upload/hz/22932/b_229311280.jpg" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
//    this.data.id = options.id
    this.setData({
      id: options.id
    });
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