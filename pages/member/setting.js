const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    version: ''
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
    this.setData({
      version: app.globalData.version
    });
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

  },

  openUserProtocol() {
    wx.navigateTo({
      url: '/pages/common/web?url=' + app.globalData.user_protocol,
    })
  },

  openUserPrivateProtocol() {
    wx.navigateTo({
      url: '/pages/common/web?url=' + app.globalData.user_private_protocol,
    })
  },

  openAboutUs() {
    wx.navigateTo({
      url: '/pages/common/web?url=' + app.globalData.aboutus,
    })
  }
})