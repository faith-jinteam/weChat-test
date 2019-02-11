//app.js  APP里面的生命周期函数是全局的，属于当前App的小程序的
App({
  //生命周期函数--监听页面显示
  onLaunch: function (o) {
    //小程序初始化；
    //可以接收一个参数，记录了页面信息，还有用户是通过哪种形式访问的小程序
    console.log(o);
    console.log("小程序初始化完成时触发，全局只触发一次");
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //生命周期函数--监听页面显示
  onShow:function(){
    console.log("app 内容显示了")
  },
  //生命周期函数--监听页面隐藏
  onHide:function(){
    console.log("用户离开了 app")
  },
  //生命周期函数--监听页面卸载
  onUnload:function(){
    console.log("页面卸载时触发。如redirectTo或navigateBack到其他页面时")
  },
  //日志功能；
  //监听小程序发生错误；
  onError:function(error){
    //分析错误
    console.log("小程序发生脚本错误，或者 api 调用失败时触发")
    console.log(error)
  },
  globalData: {
    userInfo: null
  }
})