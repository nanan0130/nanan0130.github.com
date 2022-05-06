var blur = 0; //控制毛玻璃效果
var time = 300; //定义毛玻璃渐变时间
/************************函数部分************************/
//随机产生颜色
function randColor() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.a = 1;
    this.color = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + a + ')';
    return this.color;
}
//通过类选择元素组
function fbc(x) {
    return document.getElementsByClassName(x);
}
//淡出效果
function fadeIn(node) {
    node.style.opacity = 0;
    node.style.display = "flex";
    var value = 0;
    if (typeof animate !== "undefined" && animate !== null) clearInterval(animate);
    animate = setInterval(function() {
        value += 0.1;
        node.style.opacity = value;
        if (value >= 1)
            clearInterval(animate);
    }, 30);
}
//淡入效果
function fadeOut(node) {
    node.style.opacity = 1;
    node.style.display = "flex";
    var value = 1;
    if (typeof animate !== "undefined" && animate !== null) clearInterval(animate);
    animate = setInterval(function() {
        value -= 0.1;
        node.style.opacity = value;
        if (value <= 0) {
            clearInterval(animate);
            node.style.display = "none";
        }
    }, 25);
}
/************************主体部分************************/
window.onload = function() {
    console.log(fbc("m-switch"));

    //对于每一个方块随机产生颜色
    let i = fbc("m-item").length;
    while (i--)
        fbc("m-item")[i].style.background = randColor();

    //初始化页面，显示第一页
    fbc("m-big")[0].style.display = "none";
    fbc("m-page")[0].style.background = "#ccc";
    fbc("m-content")[0].style.display = "flex";
    for (var j = 1; j < fbc("m-content").length; j++) {
        fbc("m-page")[j].style.background = "white";
        fbc("m-content")[j].style.display = "none";
    }

    //色块添加事件监听
    var item = document.querySelector("div.m-all").querySelectorAll("div.m-item");
    for (var j = 0; j < item.length; j++) {
        item[j].addEventListener("click", function() {
            //毛玻璃效果
            if (typeof interval !== "undefined" && interval !== null) clearInterval(interval);
            interval = setInterval(function() {
                blur += 0.5;
                fbc("m-switch")[0].style.filter = "blur(" + blur + "px)";
                if (blur >= 5)
                    clearInterval(interval);
            }, 25);
            blur = 0;

            //显示元素
            document.querySelector("div#big").style.background = this.style.background;
            fadeIn(document.querySelector("div.m-big"));

            //绑定事件
            document.querySelector("div.m-big").addEventListener("click", function() {
                fadeOut(document.querySelector("div.m-big"));
                if (typeof interval !== "undefined" && interval !== null) clearInterval(interval);
                interval = setInterval(function() {
                    blur -= 0.5;
                    fbc("m-switch")[0].style.filter = "blur(" + blur + "px)";
                    if (blur <= 0)
                        clearInterval(interval);
                }, 25);
            });

        });
    }

}
/************************第二部分************************/
for (var i = 0; i < document.querySelectorAll("span").length; i++) {
    document.querySelectorAll("span")[i].addEventListener("click", function() {
        //获取点击的标签的索引   
        var span = document.querySelectorAll("span")
        for (var i = 0; i < span.length; i++)
            span[i].index = i;
        var index = this.index;

        //显示/隐藏元素
        let content = document.querySelectorAll("div.m-content");
        for (var i = 0; i < content.length; i++) {
            if (i == index) {
                document.querySelectorAll("div.m-page")[i].style.background = "#ccc";
                content[i].style.display = "flex";
            } else {
                document.querySelectorAll("div.m-page")[i].style.background = "";
                content[i].style.display = "none";
            }
        }
    });
}
/************************第三部分************************/
var num = 4;
//数据管理操作的按钮增加事件监听
document.querySelector("button").addEventListener("click", function() {
    if (document.querySelectorAll("div.m-row").length >= 9)
        alert("最多显示9行！");
    else {
        //添加新元素
        document.querySelector("div.m-top").insertAdjacentHTML('beforeend', "<div class=\"m-row\"><div class=\"m-id\">" +
            (num++) + "</div><div class=\"m-delete\">delete</div></div>");

        //新元素添加事件监听
        let row = document.querySelectorAll("div.m-row");
        row[row.length - 1].lastChild.addEventListener("click", function() {
            if (document.querySelectorAll("div.m-row").length == 1)
                alert("至少保留1行数据！");
            else
                this.parentNode.remove();
        });
    }
});


//添加删除节点的事件监听
for (var i = 0; i < document.querySelectorAll("div.m-delete").length; i++) {
    document.querySelectorAll("div.m-delete")[i].addEventListener("click", function() {
        if (document.querySelectorAll("div.m-row").length == 1)
            alert("至少保留1行数据！");
        else
            this.parentNode.remove();
    });
}

