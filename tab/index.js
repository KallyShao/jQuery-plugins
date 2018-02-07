/*
 * @Author: Administrator
 * @Date:   2018-02-07 10:01:07
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-02-07 13:41:13
 */

;
(function($) {
	//1. 假设不接受任何参数
	$.fn.tab = function(options) {
		var defaultOpts = {
			container: null,
			title: ['title1', 'title2', 'title3'],
			content: ['content1', 'content2', 'content3']
		};
		var opt = $.extend({}, defaultOpts, options);
		if (!opt.container) {
			return;
		}
		this.each(function() {
			var html = '<ul class="tab_nav"><li class="active"></li><li></li><li></li></ul><div class="tab_content"><div style="display:block;"></div><div></div><div></div></div>';
			opt.container.html(html);

			$('.tab_nav').find('li').each(function() {
				var index = $(this).index();
				$(this).text(opt.title[index]);
				$('.tab_content').find('div').eq(index).text(opt.content[index]);
			});
			$('.tab_nav').find('li').click(function() {
				var index = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				$('.tab_content').find('div').eq(index).show().siblings().hide();
			})
		});
		return this;
	}

})(jQuery)