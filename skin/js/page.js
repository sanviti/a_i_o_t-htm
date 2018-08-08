
$(document).ready(function(){

	winWidth = $(window).width();

	$(window).scroll(function(){
		if($(window).scrollTop() != 0){
			$(".header").addClass("fixed");
		}else{
			$(".header").removeClass("fixed");
		}
	})

	if(winWidth < 1025){
		$(".header .content .lang span").on("click",function(){
			$(this).next("ul").toggle();
		})
	}

	if(winWidth < 768){
		$(".menu").on("click",function(){
			$("ul.nav").addClass("offsetLeft");
			$(".menu-bg").show();
		})
		$("ul.nav .close").on("click",function(){
			$("ul.nav").removeClass("offsetLeft");
			$(".menu-bg").hide();
		})
	}

	$(".menu02").on("click",function(){
		$("html,body").animate({scrollTop:$(".index-item01").offset().top - $(".header").height()},600);
		$(".menu02").addClass("on").parent().siblings().find("a").removeClass("on");
		if(winWidth < 1025){
			$("ul.nav").removeClass("offsetLeft");
			$(".menu-bg").hide();
		}
	})
	$(".menu03").on("click",function(){
		$("html,body").animate({scrollTop:$(".index-item06").offset().top - $(".header").height()},600);
		$(".menu03").addClass("on").parent().siblings().find("a").removeClass("on");
		if(winWidth < 1025){
			$("ul.nav").removeClass("offsetLeft");
			$(".menu-bg").hide();
		}
	})
	$(".menu04").on("click",function(){
		$("html,body").animate({scrollTop:$(".index-item07").offset().top - $(".header").height()},600);
		$(".menu04").addClass("on").parent().siblings().find("a").removeClass("on");
		if(winWidth < 1025){
			$("ul.nav").removeClass("offsetLeft");
			$(".menu-bg").hide();
		}
	})
	$(".menu05").on("click",function(){
		$("html,body").animate({scrollTop:$(".index-item08").offset().top - $(".header").height()},600);
		$(".menu05").addClass("on").parent().siblings().find("a").removeClass("on");
		if(winWidth < 1025){
			$("ul.nav").removeClass("offsetLeft");
			$(".menu-bg").hide();
		}
	})

})
