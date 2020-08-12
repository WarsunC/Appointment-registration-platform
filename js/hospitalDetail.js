$.fn.UichooseDetail = function(){
	var ui = $(this);
	var alldiv = $("div",ui);

	for(var i=0; i<5; i++){
		alldiv.eq(i).on("click",function(){
			for(var i=0; i<5; i++){
				alldiv.eq(i).css({"background-color":"#fff","color":"#60c1f3"})
			};
			$(this).css({
				"background-color": "#60c1f3","color":"#fff"});
			// return false;
			if($(this).text()==="预约挂号"){
				for(var i=1; i<6; i++){
					$(".detail > div").eq(i).css({"display":"none"});
				}
				$(".register").css({"display":"block"});
			}
			if($(this).text()==="医院介绍"){
				for(var i=1; i<6; i++){
					$(".detail > div").eq(i).css({"display":"none"});
				}
				$(".introduce").css({"display":"block"});
			}
			if($(this).text()==="预约须知"){
				for(var i=1; i<6; i++){
					$(".detail > div").eq(i).css({"display":"none"});
				}
				$(".needToKnow").css({"display":"block"});
			}
			if($(this).text()==="停诊信息"){
				for(var i=1; i<6; i++){
					$(".detail > div").eq(i).css({"display":"none"});
				}
				$(".stopInfo").css({"display":"block"});
			}
			if($(this).text()==="查询取消"){
				for(var i=1; i<6; i++){
					$(".detail > div").eq(i).css({"display":"none"});
				}
				$(".findingCancel").css({"display":"block"});
			}
		});
	}
}
$(function(){
	$(".detail-choice").UichooseDetail();
})