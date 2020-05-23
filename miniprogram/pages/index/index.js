Page({
  data: {
    appList:[{
      icon:'rank',
      name:'疫情地图小程序',
      url:'../../pages/mapApp/mapApp'
    },{
      icon:'close',
      name:'暂无',
      url:''
    },{
      icon:'close',
      name:'暂无',
      url:''
    }]
  },
  toApp(e){
    const url = e.currentTarget.dataset.url
    if(!url){
      return wx.showToast({title: '暂无应用',icon: 'none'});
    }
    wx.navigateTo({url: e.currentTarget.dataset.url});
  }
})
