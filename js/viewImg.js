/**
 * 
 * @cchen
 * @date    2017-06-05
 * @version 1.0
 * @plugin viewImg
 * 引用了photoswipe
 */
;(function(root,factory){
	root.viewImg = factory();

})(window,function(){
	var viewImg = function(options){
		this.opt = {};
		this.pswpElement = null;
		this.extend(options);
		this.init();
	};
	viewImg.prototype = {
		extend: function(options){
			var defaults = {
				listItem: '.view-img',
				captionEl: true,
				fullscreenEl: false,
				zoomEl: false,
				shareEl: false,
				maxZoomWidth: 800
			};
			var key;
			for(key in options){
				var defaultVal = defaults[key];
				var optionVal = options[key];
				if(optionVal == defaultVal){
					continue;
				}
				else if(optionVal !== undefined){
					defaults[key] = optionVal;
				}
				
			}
			this.opt = defaults;

		},
		init: function(){
			var _self = this;
			var pswpDom = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">';
			pswpDom += '<div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div>';
			pswpDom += '<div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close"title="Close (Esc)"></button><button class="pswp__button pswp__button--share"title="Share"></button><button class="pswp__button pswp__button--fs"title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom"title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left"title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right"title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div>';
			pswpDom += '</div></div>';
			$('body').append(pswpDom);
			_self.pswpElement = document.querySelectorAll('.pswp')[0];
			$(_self.opt.listItem).click(function(event) {
				var _this = $(this); 
				var curIndex = _this.index();
				var $parentList = _this.parent();
				var items = [];
				$parentList.find('li').each(function(index, el) {
					var $imgDom = $(el).find('img');
					var src = $imgDom.attr('src'); 
					var alt = $imgDom.attr('alt'); 
					var sizeW = $imgDom.width();
					var sizeH = $imgDom.height();
					var tmp = {
						src: src,
				        w: _self.opt.maxZoomWidth,
				        h: _self.opt.maxZoomWidth*(sizeH/sizeW),
				        title: alt
					}
					items.push(tmp);
				});
				$parentList.addClass('cur-viewimg-list');
				_self.openSwiper(curIndex,items);
			});
		},
		openSwiper: function(startIndex,items){
			var _self = this;
			var options = {
			    index: startIndex, 
			    history: false,
				captionEl: this.opt.captionEl,
				fullscreenEl: this.opt.fullscreenEl,
				zoomEl: this.opt.zoomEl,
				shareEl: this.opt.shareEl,
				getThumbBoundsFn: function(index) {
					var rect = $('.cur-viewimg-list').find('li').eq(index).get(0).getBoundingClientRect();
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                    return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
                }

			};

			// Initializes and opens PhotoSwipe
			var gallery = new PhotoSwipe( _self.pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		}
		
	};
	return viewImg;
});