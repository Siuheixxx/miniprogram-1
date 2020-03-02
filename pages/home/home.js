// pages/home/home.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      arry: [
         "/images/banner/baner1.jpg",
         "/images/banner/baner2.jpg",
         "/images/banner/baner3.jpg",
         "/images/banner/baner4.jpg"
      ],
      indicatorDots: false,
      autoplay: true,
      circular: true,
      num: 0,
   },
   swiperFn(e) {
      this.setData({
         num: e.detail.current
      })
      console.log(e.detail.current)
   }
})