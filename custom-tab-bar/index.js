Component({
	data: {
		dpOrgType: '',
		active: 0,
		color: '#666',
		selectedColor: "#DAA520",
    backgroundColor: "#ffffff",
		list: [
			{
				iconPath: '/assets/icons/index.png',
				selectedIconPath: '/assets/icons/index_selected.png',
				text: '首页',
				pagePath: '/pages/home/home'
			},
			// {
			// 	iconPath: '/assets/icons/community.png',
			// 	selectedIconPath: '/assets/icons/community_selected.png',
			// 	text: '攻略',
			// 	pagePath: '/pages/community/community',
			// },
			{
				bulge: true,
				text: '立即预约'
      },
      // {
			// 	iconPath: '/assets/icons/focus.png',
			// 	selectedIconPath: '/assets/icons/focus_selected.png',
			// 	text: '消息',
      //   pagePath: '/pages/focus/focus'
      // },
      {
				iconPath: '/assets/icons/personal.png',
				selectedIconPath: '/assets/icons/personal_selected.png',
				text: '我的',
        pagePath: '/pages/personal/personal'
			}
		]
	},
  lifetimes: {
		attached: function() {
			this.setData({
				dpOrgType: wx.getStorageSync('userInfo').dpOrgType
			})
    }
	},
	methods: {
		switchTab(e) {
			const {path, index} = e.currentTarget.dataset;
			if (index == 2) {
				this.selectComponent('#reservationModal').openModal();
			} else {
				wx.switchTab({url: path})
			}
		}
	}
});
