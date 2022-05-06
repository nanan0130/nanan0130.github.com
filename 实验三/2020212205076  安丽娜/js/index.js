var p8 = true;
var p9 = true;

var li = document.querySelectorAll("li");

li[0].onclick = function() {
	alert('这是p1');
	this.style.color = 'red';
}

li[1].onclick = function() {
	alert('这是p2');
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();

	month = month.toString().padStart(2, "0");
	day = day.toString().padStart(2, "0");

	this.innerHTML = year + "-" + month + "-" + day;
}

li[2].onclick = function() {
	alert('这是p3');
	this.classList.add('fn-active');
}
li[3].onclick = function() {
	alert('这是p4');
	if (p8) {
		p8 = false;
		li[7].parentNode.removeChild(li[7]);
	}
}
li[4].onclick = function() {
	alert('这是p5');
	window.open("https://www.taobao.com/");
}
li[5].onclick = function() {
	alert('这是p6');
	if (p9) {
		p9 = false;
		var new_li = document.createElement("li");
		var node = document.createTextNode("p9");
		new_li.appendChild(node);
		li[5].parentNode.appendChild(new_li);

		new_li.onclick = function() {
			alert('这是p9');
		}
	}

}

li[6].onclick = function() {
	alert('这是p7');
	console.log(screen.availWidth);
	document.querySelector(".m-box").style.width = screen.availWidth + 'px';
}

li[7].onclick = function() {
	alert('这是p8');
}