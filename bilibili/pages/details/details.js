
// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  // 视频详情
	videoInfo:[],
	// 推荐视频
	othersList:[],
	//评论信息
	commentData:null
  },
	
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	// console.log(options)
	let video_id=options.id;
	this.getVideoInfo(video_id);
	this.getOtherList(video_id);
	this.getCommentData(video_id);
  },
  
  //获取视频信息
  getVideoInfo(video_id){
  	let that = this;
  	wx.request({
  		url:"https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videoDetail?id="+video_id,
  		success(res){
  			// console.log(res)
  			if(res.data.code===0){
  				that.setData({
  					videoInfo:res.data.videoInfo.video
  				})
  			}
  		}
  	})
  },
  //获取视频推荐列表
  getOtherList(video_id){
	  let that = this;
	  wx.request({
		  url:'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/othersList?id='+video_id,
		  success(res){
			  // console.log(res)
			  if(res.data.code===0){
				  that.setData({
					  othersList:res.data.data.othersList
				  })
			  }
		  }
	  })
  },
  //获取评论信息
  getCommentData(video_id){
	  let that = this;
	  wx.request({
		  url:"https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/commentsList?id="+video_id,
		  success(res){
			  if(res.data.code===0){
				  that.setData({
					commentData:res.data.data.commentData
				  })
			  }
		  }
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