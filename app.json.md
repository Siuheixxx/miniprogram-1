#### app.json

```
{
  "pages": [
    "pages/home/home",
    "pages/menu/menu",
    "pages/order/order",
    "pages/contact/contact"//底部toolbar(2-5个)
  ],
"window": {
    "backgroundTextStyle": "dark",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "luckincoffee",
    "navigationBarTextStyle": "black"//顶部标题
},
  "tabBar": {
    "color":"#000000",//底色
    "selectedColor":"#333999",//被选择的颜色
    "list": [
      {
      "pagePath": "pages/home/home",
      "text": "首页",
      "iconPath": "/images/bar/bar1_1.png",//两种图标，未激活
    "selectedIconPath":"/images/bar/bar1.png"//已激活
    },
    {
      "pagePath": "pages/menu/menu",
      "text": "菜单",
      "iconPath": "/images/bar/bar2_2.png",
      "selectedIconPath": "/images/bar/bar2.png"
    },
    {
      "pagePath": "pages/order/order",
      "text": "新品",
      "iconPath": "/images/bar/bar3_3.png",
      "selectedIconPath": "/images/bar/bar3.png"
    },
    {
      "pagePath": "pages/contact/contact",
      "text": "小二",
      "iconPath": "/images/bar/bar4_4.png",
      "selectedIconPath": "/images/bar/bar4.png"
    }
    ]
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

![image-20200303124748719](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200303124748719.png)

![image-20200303124820311](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200303124820311.png)