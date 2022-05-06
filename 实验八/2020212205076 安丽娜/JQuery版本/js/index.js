var blur = 0; //控制毛玻璃效果
var time = 300; //定义毛玻璃渐变时间
$(document).ready(function() {
    //对于每一个方块随机产生颜色
    let i = $("div.m-item").length;
    while (i--)
        $("div.m-item").eq(i).css("background", randColor());

    //初始化页面，显示第一页
    $("div.m-page").eq(0).css("background", "#ccc");
    $("div.m-content").eq(0).show();
    for (var j = 1; j < $("div.m-content").length; j++) {
        $("div.m-page").eq(j).css("background", "white");
        $("div.m-content").eq(j).hide();
    }

    $("div.m-item").click(function() {
        //毛玻璃效果
        // $("div.m-all").css("filter", "blur(5px)");
        if (typeof interval !== "undefined" && interval !== null) clearInterval(interval);
        interval = setInterval(function() {
            blur += 0.5;
            $("div.m-switch").css("filter", "blur(" + blur + "px)");
            if (blur >= 5)
                clearInterval(interval);
        }, 25);
        blur = 0;

        //添加元素
        $("body").append("<div class=\"m-big\"><div class=\"m-item\"></div></div>");
        $("div.m-big").hide();
        $("div.m-big").fadeIn(time);
        $("div.m-big .m-item").css("background-color", $(this).css("background-color"));

        //绑定事件
        $("div.m-big").bind("click", function() {
            $("div.m-big").fadeOut(time, function() {
                $(this).remove();
                // $("div.m-all").css("filter", "");
                if (typeof interval !== "undefined" && interval !== null) clearInterval(interval);
                interval = setInterval(function() {
                    blur -= 0.5;
                    $("div.m-switch").css("filter", "blur(" + blur + "px)");
                    if (blur <= 0)
                        clearInterval(interval);
                }, 25);
            });
        });

    });
});
/************************第二部分************************/
$("span").click(function() {

    //获取点击的标签的索引
    var index = $(this).parent().index();
    //显示/隐藏元素
    let content = $("div.m-content");
    for (var i = 0; i < content.length; i++) {
        if (i == index) {
            $("div.m-page").eq(i).css("background", "#ccc");
            content.eq(i).show();
        } else {
            $("div.m-page").eq(i).css("background", "white");
            content.eq(i).hide();
        }
    }


});
/************************第三部分************************/
var num = 4;
$("button").click(function() {
    if ($("div.m-row").length >= 9)
        alert("最多显示9行！");
    else {
        $("div.m-top").append("<div class=\"m-row\"><div class=\"m-id\">" +
            (num++) + "</div><div class=\"m-delete\">delete</div></div>");
        $("div.m-row").last().children().last().bind("click", function() {
            if ($("div.m-row").length == 1)
                alert("至少保留1行数据！");
            else
                $(this).parent().remove();
        });
    }
});
$("div.m-delete").click(function() {
    if ($("div.m-row").length == 1)
        alert("至少保留1行数据！");
    else
        $(this).parent().remove();
});


//随机产生颜色
function randColor() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.a = 1;
    this.color = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + a + ')';
    return this.color;
}