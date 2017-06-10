## viewImg v2.0
依赖photoswipe插件，目的是为了让公司的前端开发效率进一步提升，统一插件的使用

一款pc和移动端适用查看大图插件，有双击放大，手势放大，列表轮播，图片标题等功能，满足大多数项目使用场景

## 开始使用
#### 加载插件

```
//css
<link href="css/photoswipe.css" rel="stylesheet"> 
<link href="css/default-skin.css" rel="stylesheet"> 

//js
<script src="http://cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
<script src="js/photoswipe.min.js"></script> 
<script src="js/photoswipe-ui-default.min.js"></script> 
<script src="js/viewImg.js"></script>
```
#### html内容
```
//一个ul为一个相册列表，图片上的alt存放图片标题
<ul class="img-list clear">
    <li class="view-img"><img src="1.jpg" alt="标题1"></li>
    <li class="view-img"><img src="2.jpg" alt="标题2"></li>
    <li class="view-img"><img src="3.jpg" alt="标题4"></li>
</ul>

<ul class="img-list clear">
    <li class="view-img"><img src="1.jpg" alt="标题1"></li>
    <li class="view-img"><img src="2.jpg" alt="标题2"></li>
    <li class="view-img"><img src="3.jpg" alt="标题4"></li>
</ul>
```
#### 初始化autoLoadMore

```
<script type="text/javascript">
    var viewImg1 = new viewImg();
</script>
```

## 配置选项


| Option | 类型 | 默认值 | 说明 |
| ------------- |:-------------:|:-------------:| :-------------|
listItem | string | .view-img | 列表项的类名 |
captionEl | boolean | true | 是否显示图片标题 |
fullscreenEl | boolean | false | 是否显示全屏图标按钮 |
zoomEl | boolean | false | 是否显示缩放图标按钮 |
shareEl | boolean | false | 是否显示分享图标按钮 |
maxZoomWidth | number | 800 | 放大图片的最大宽度 |


