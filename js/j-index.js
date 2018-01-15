$(document).ready(function(){
	// 点击回到顶部事件
	$(".gongnue").toggle(function(){
		$(this).children("img").addClass("btn");
	},function(){
		$(this).children("img").removeClass("btn");
	});
	
	
	// 返回上一页事件
	$('.back').click(function(){
	 				window.history.go(-1);
	 			})
	// $('#contrast a').click(function(){
	// 	$(this).addClass('active').siblings().removeClass('active');
	// });
	
	// 首页的购物车点击事件
	var timer = "";
		$('.shop-car').click(function(){
			 var msg = "<div class='addmsg'>"+ '已加入购物车' + "</div>";
			 $(this).append(msg);
			 $(".addmsg").css({
			 	  "width":"1rem",
			 	  "height":"0.25rem",
			 	  "position":"absolute",
			 	  "top":"0.25rem",
			 	  "left":"-0.44rem",
			 	  "font-size":"0.12rem",
			 	  "color":"#fff",
			 	  "background":"#a3a3a3",
			 	  "text-align":"center",
			 	  "line-height":"0.25rem",
			 	  "border-radius":"0.2rem",
			 	  "display":"none"
			 }).show("fast");	
			  var timer = setTimeout(function(){
		 	      $(".addmsg").fadeOut(200).remove()},1500)

		 })
	

	$("#top").click(function(){
	         $('html,body').animate({scrollTop:0},200);
	    });
	    
	    // 文章页面点击展开事件
	    var $length = $(".artical-cont").height();
	    if ($length > 244) {
	    	$('.artical-cont').addClass("limit");
	    	 $("#limit-mask").show();
	    }
	    else{
	    	$('.artical-cont').removeClass("limit");
	    	$("#limit-mask").hide();
	    }
	    $("#limit-mask").click(function(){
	    	 $('.artical-cont').removeClass("limit");
	    	 $(this).hide(400);
	    })	

	  // 搜索页面的商品排列方式 点击事件
	  $('.sort-change').toggle(function(){
	  	$(this).css({"background":"url(img/sort-change1.png) center center no-repeat",
	  				"background-size":"100%",
	  				
	  });
	  	$('#p1').removeClass('product-container').addClass('product-container1');
	  },function(){
	  	 $(this).css({"background":"url(img/sort-change.png) center center no-repeat",
	  	"background-size":"100%",
	  		
	  });
	  	 $('#p1').removeClass('product-container1').addClass('product-container');
	  })

	//搜索页面的遮罩层的点击事件
	 $('.cancle-btn').click(function(){
	 	 $('#mask').fadeOut(400);
	 	  $("html,body").removeClass("overfw");
	 });
	 $('.sort-choose').click(function(){
	 	$('#mask').fadeIn(400);
	 	 $("html,body").addClass("overfw");
	 });

	 $('.sort-l  a').click(function(){
	 	 $(this).addClass("zs-pciked").siblings().removeClass("zs-pciked");
	 });
	 
	 $('#nav-tab > a').click(function(){
	 	 $(this).addClass("default").siblings().removeClass("default");
	 });
	 $('.brand-kinds > li').click(function(){
	 	$(this).addClass('ppicked').siblings().removeClass('ppicked');
	 });
	 $('.hope-tab > li').click(function(){
	 	$(this).addClass('hope-picked').siblings().removeClass('hope-picked');
	 });

	 $('#hezuo-tab > a').click(function(){
	 	$(this).addClass('default').siblings().removeClass('default');
	 });

	 $('.fnclear .fnleft').click(function(){
	 	$(this).addClass('zcurr').siblings().removeClass('zcurr');
	 });
	 // var inputValue = $('.input').val();
	 $(".canc-logo").click(function(){
	 	$('.input').val("");
	 })
	 $(".cancle").click(function(){
	 	$('.input').val("");
	 })
	 // 最新-热门-折扣页面点击弹出遮罩层事件
	 
	
	 // 品牌首页遮罩层点击事件
	  // 首页的回到顶部事件
	 $(window).scroll(function(){
	 	var $top = $(window).scrollTop(); 
	 	
	 	 if ($top > 1268) {
            $("#top").fadeIn(200);
        }
        else {
            $("#top").fadeOut(200);
        }
	 	
 		//商品首页的滚动条下滑后触发事件
 		// var icontop = $('.icon-list').offset().top;
		 if ($top >500){
	 			$('.foot-wrap').fadeIn(200);
	 		}else{
	 			$('.foot-wrap').fadeOut(200);
	 		}

	 	//品牌首页的滚动条触发事件 
	 	if ($top > 20) {
	 		  // alert(icontop)
	 		    // alert(222);
	 		    $('.brd-up').hide();
				$('.brd-down').hide();
			  $('#brand-mask').animate({top:"5.5rem"},200);
			
		}else {
				 $('#brand-mask').stop(true,true).animate({top:"4.4rem"},100,function(){
					$('.brd-up').stop(true,true).fadeIn(200);
					$('.brand-art-wrap').height("0.55rem");
				});
		    }
	 });
	

		
	 $('.brd-up').click(function(){
	 	  $('#brand-mask').animate({top:"0.9rem"},400);
	 	  $(this).hide();
	 	  $('.brand-art-wrap').height("100%");
	 	  $('.brd-down').fadeIn(300);

	 });
		 $('.brd-down').click(function(){
		 	$('#brand-mask').animate({top:"4.4rem"},200,function(){
		 		$('.brand-art-wrap').height("0.55rem");
		 	});
		 	$(this).hide();
		 	$('.brd-up').fadeIn(300);
		    
		 });


		// 购物车点击选中事件
		$('.icon-normal').click(function(){
			$(this).hide().siblings('.icon-picked').fadeIn(200);
			// $(".icon-picked").fadeIn(200);
		})
		$(".icon-picked").click(function(){
			$(this).hide().siblings('.icon-normal').fadeIn(200);
			// $(".icon-normal").fadeIn(200);
		})

		$('.total-normal').click(function(){
			 $(this).hide().siblings('.total-picked').fadeIn(200);
			 $('.icon-picked').fadeIn(200).siblings('.icon-normal').hide();
		})
		$('.total-picked').click(function(){
			 $(this).hide().siblings('.total-normal').fadeIn(200);
			 $('.icon-normal').fadeIn(200).siblings('.icon-picked').hide();
		})

		$('.vol-down span').click(function(){
			$(this).addClass('piked').siblings().removeClass('piked');
		})
		 
		 // 商品首页的遮罩层点击事件
		 $('.right-arrow').click(function(){
		 	$("#my-pro-topup").fadeIn(400);
			  $("#mask").fadeIn(200);
			  $("html,body").addClass("overfw");
		 });
		 $('.cancle-btn').click(function(){
		 	 $("#my-pro-topup").hide();
			  $("#mask").hide();
			 $("html,body").removeClass("overfw")
		 });


		 // 分类页面的所有点击事件
		   $('#brand').click(function(){
	 	   	   $('.pinpai-wrap').show();
	 	   	   $('#p1').hide();
	 	   	   $('.sort-change').fadeOut(200);
	 	   }).siblings('.swiper-slide').click(function(){
	 	   	   $('.sort-change').fadeIn(200);
	 	   	   $('.pinpai-wrap').hide();
	 	   	   $('#p1').show();
	 	   })
	 	   $('#brand1').click(function(){
	 	   	   $('.pinpai-wrap').show();
	 	   	   $('#p1').hide();
	 	   	   $('.sort-change').fadeOut(200);
	 	   }).siblings('li').click(function(){
	 	   	   $('.sort-change').fadeIn(200);
	 	   	   $('.pinpai-wrap').hide();
	 	   	   $('#p1').show();
	 	   })

		 $('#brand-btn .swiper-slide').click(function(){
		 	$(this).addClass('fl-picked').siblings().removeClass('fl-picked');
		 })

		 $('.aks-list').click(function(){
		 	$(this).addClass('aks-picked').siblings().removeClass('aks-picked');
		 	$('#brand-btn .swiper-slide').eq($(this).index()+1).addClass('fl-picked').siblings().removeClass('fl-picked');
		 })

		 $('.all-down').click(function(){
		 	$('.all-kinds-wrap').slideDown(200); 
		 })
		 $('.all-up').click(function(){
		 	$('.all-kinds-wrap').slideUp(200); 
		 	$('.all-kinds-wrap .aks-list').removeClass('aks-picked');
		 })


		 //收藏按钮的点击事件
		 $('.collect').toggle(function(){
		 		$(this).css({
		 			"background":" url(img/collect-p.png)center center no-repeat",
		 			"background-size":"100%"
		 		})
		 },function(){
		 	$(this).css({
		 			"background":" url(img/collect.png)center center no-repeat",
		 			"background-size":"100%"
		 		})
		 }) 

		 $('.right-collect').toggle(function(){
		 		$(this).css({
		 			"background":" url(img/collect-p.png)center center  no-repeat",
		 			"background-size":"100%"
		 		})
		 },function(){
		 	$(this).css({
		 			"background":" url(img/collect.png)center center no-repeat",
		 			"background-size":"100%"
		 		})
		 }) 
		 // 消息中心页面的向左滑动出现删除事件
		$('.delete').click(function(){
			$(this).parent('.news-banner').remove();
			return false;
		})

		//购物车的数量加减点击事件 
 			$('.vol-add ').click(function(){
 				$(this).siblings('.vol-input').val(parseInt($(this).siblings('.vol-input').val())+1)  ;
 				
 			})
 			$('.vol-reduce ').click(function(){
 				$(this).siblings('.vol-input').val(parseInt($(this).siblings('.vol-input').val())-1)  ;
 				if ( parseInt($(this).siblings('.vol-input').val())<0 ) {$(this).siblings('.vol-input').val(0)};
    		 
 			})


 		// 分类页面的遮罩层的筛选事件
 		$('.pro-brand-filter li ').click(function(){
 			$(this).addClass('brand-picked').siblings().removeClass('brand-picked');
 		})

})
		