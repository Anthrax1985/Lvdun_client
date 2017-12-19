// index2.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo:false,
    userText:"现在还未登陆",
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userRegisted:false,
    register_msg:"您未在平台绑定帐号，绑定手机号登陆系统",
    isTestMode:true,
    items: [
      { value: 'CUS', name: '客户' },
      { value: 'EMP', name: '一线员工' },
      { value: 'LEA', name: '项目组长' },
      { value: 'SYS', name: '系统管理员' },
    ],
    selectedRole:"SYS"
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.data.selectedRole = e.detail.value;

    var items = this.data.items;
    for (var i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == e.detail.value
    }

    this.setData({
      items: items
    });
  },
  bindViewTap: function () {
    if (this.data.isTestMode) {
      switch (this.data.selectedRole) {
        case "CUS":
        case "EMP":
        case "LEA":
        case "SYS":
          wx.navigateTo({
            url: '../custumHome/custom'
          })
          break;
          // wx.showModal({
          //   content: "目前只完成了客户角色的页面设计，请使用客户角色进入程序",
          //   showCancel: false,
          //   confirmText: "确定"
          // })
          //break;
        default:
          console.error("未选中测试角色")
      }
    }else{
      wx.navigateTo({
        url: '../logs/logs'
      })
    }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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