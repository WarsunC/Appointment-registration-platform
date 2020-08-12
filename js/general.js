$.fn.UiSearch = function(){
	var ui = $(this);
	$("span",ui).on("click",function(){
		$("ul",ui).show();
		return false;
	});
	$("li",ui).on("click",function(){
		$("span",ui).text($(this).text());
		$("ul",ui).hide();
		return false;
	});
	$("body").on("click",function(){
		$("ul",ui).hide();
	})
}

//页面完全载入后运行
$(function(){
	$("#chooseSearch").UiSearch();
})