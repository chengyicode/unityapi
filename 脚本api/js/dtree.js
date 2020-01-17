$(function () {
$(".dtree > div a img").last().attr("src","./img/plusbottom.gif");
$(".dtree > div li>h2").before(" <i><a href='javascript:void(0)'><img src='./img/plus.gif'></a></i><img src='./img/folder.gif'>");
$(".publicMenu>ul li>a").before("<img src='./img/join.gif'><img src='./img/page.gif'>");
$(".dtree ul>li:last-child").each(function(){
	$(this).children("img:eq(0)").attr("src","./img/joinbottom.gif");
});
$(".publicMenu>ul li i").next("img").attr("src","./img/folder.gif");
$(".publicMenu>ul li i>a").before(" <img src='./img/join.gif'>");

 
$(".dtree > div:eq(1) li").each(function(){
	$("img:eq(0)",this).attr("src","./img/empty.gif");
});

$(".publicMenu i >a").toggle(function(){
		var index =$(".publicMenu > ul> li").index(this);
		if(index > 0){
			$("img",this).attr("src","./img/minusbottom.gif");
		}else{
			$("img",this).attr("src","./img/minusbottom.gif");
		};
		$(this).parent("i").siblings("img").attr("src","./img/folderopen.gif");
		$(this).parent("i").siblings("ul").show();
	},function(){
		var index =$(".publicMenu > ul> li").index(this);//判断-1
		if(index > 0){
			$("img",this).attr("src","./img/plus.gif");
		}else{
			$("img",this).attr("src","./img/plusbottom.gif");
		};	
		$(this).parent("i").siblings("img").attr("src","./img/folder.gif");
		$(this).parent("i").siblings("ul").hide();
	});


$(".publicMenu ul li a").attr("target","body");
$("#openAll").click(function(){
	$(".publicMenu ul li a>img").attr("src","./img/minusbottom.gif");
	$(".publicMenu ul li i").next("img").attr("src","./img/folderopen.gif");
	$(".publicMenu ul ul").show();
});
$("#closeAll").click(function(){
	$(".publicMenu ul li a>img").attr("src","./img/plus.gif");
	$(".publicMenu ul li i").next("img").attr("src","./img/folder.gif");
	$(".publicMenu ul ul").hide();
});




function log(event, data ,formatted) {
	$("#query").val(data.name);
}


//objects为json数据源对象
$("#query").autocomplete(objects, {
	minChars: 0, //表示在自动完成激活之前填入的最小字符
	max:1000, //表示列表里的条目数
	autoFill: true, //表示自动填充
	mustMatch: false, //表示必须匹配条目,文本框里输入的内容,必须是data参数里的数据,如果不匹配,文本框就被清空
	matchContains: true, //表示包含匹配,相当于模糊匹配
	scrollHeight:550, //表示列表显示高度,默认高度为180

	formatItem: function (row) {
		return row.name;
	},
	formatMatch: function (row) {
		return row.name;
	},
	formatResult: function (row) {
		return row.value;
	}
});



$('#query').keydown(function(e){ 
	if(e.keyCode==13){ 
		var soval = $("#query").val();
		if(soval){
			var url = soval+".html";
			window.open(url,"body");
		};
	};
});
$("#butsoso").click(function(){
	var soval = $("#query").val();
	if(soval){
		var url = soval+".html";
		window.open(url,"body");
	};
});



	

});
