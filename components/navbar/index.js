// components/navbar/index.js
const App = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  externalClasses: ['custom-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    pageName: String,
    showNav: {
      type: Boolean,
      value: true
    },
    isHome: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: '#865D46'
    },
    iconColor: {
      type: String,
      value: '#000'
    }
  },

  /**
  
page-name	当前页面名称	String	--
show-nav	是否显示左侧的导航	Boolean	true
bg-color	导航背景颜色	String	#fff
icon-color	左侧图标颜色	String	#000
custom-class	导航样式

   */

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {
      this.setData({
        navHeight: App.globalData.navHeight + 5,
        navTop: App.globalData.navTop
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //回退
    _navBack: function () {
      wx.navigateBack({
        delta: 1
      })
    },
    //回主页
    _toIndex: function () {
      wx.switchTab({
        url: '/pages/tabBar/index/index'
      })
    },
  }
})