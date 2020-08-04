import {
  user,
  inviteSendVip
} from '../../../api/index'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    config: null,
    records: [],
    link: '',
    role: null,
    inviteCount: 0
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
    user.info().then(res => {
      this.setData({
        user: res,
        link: '/pages/auth/login?isv=' + res.id
      });
    })


    inviteSendVip.user().then(res => {
      this.setData({
        config: res.config,
        records: res.records,
        role: res.role,
        inviteCount: res.invite_count
      });
    })
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
    return {
      title: app.globalData.AppName,
      path: `/pages/index/index?isv=${this.data.user.id}`,
      imageUrl: app.globalData.logo
    }
  }
})