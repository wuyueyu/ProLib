window.onload=function (){
	var test = document.getElementById("test");
	var list = document.getElementById("list");
	var span = test.getElementsByTagName("span")[0];
	var a = test.getElementsByTagName("a")[0];

	test.onmouseover = function (){
		this.style.border="1px solid #e5e5e5";
		a.style.color="#fe4912";
		span.className="span2";
		list.style.display="block";
	}
	
	test.onmouseout = function(){
		this.style.border="";
		a.style.color="";
		span.className="";
		list.style.display="";
	}
	
	var lx = document.getElementById("lx");
	var span1 = lx.getElementsByTagName("span")[0];
	var al = lx.getElementsByTagName("a")[0];
	
	lx.onmouseover = function(){
		span1.className = "span3";
		al.style.color = "#FE4912";
	}
	
	lx.onmouseout = function(){
		span1.className = "";
		al.style.color = "";
	}
	
	var current_index = 0;
	var pic_div = document.getElementById("banner_pic").getElementsByTagName("div");
	var button_li = document.getElementById("button").getElementsByTagName("li");
	var timer = window.setInterval(autoChange,2000)
	
	for(var i=0;i<button_li.length;i++){
		button_li[i].onmouseover=function(){
			if(timer){
				window.clearInterval(timer);
			}
			
			for(var j=0;j<button_li.length;j++){
				if(button_li[j]==this){
					this.className = "current";
					pic_div[j].className = "current";
					current_index = j;
				}
				else{
					pic_div[j].className = "pic";
					button_li[j].className = "but";
				}
			}
		}
		
		button_li[i].onmouseout=function(){
			timer = window.setInterval(autoChange,2000);
		}
	}
	
	function autoChange(){
		current_index = ++current_index%button_li.length;
		
		for(var i=0;i<button_li.length;i++){
			
			if(i==current_index){
				pic_div[i].className = "current"; 
				button_li[i].className = "current";
			}
			else {
				pic_div[i].className = "pic";
				button_li[i].className = "but";
			}
		}
	}
	
	var message = document.getElementById("m_essage").getElementsByTagName("li");
	var message_con = document.getElementById("message_con").getElementsByTagName("dl");
	
	for(var i=0;i<message.length;i++){
		message[i].onmouseover = function(){
			for(var j=0;j<message.length;j++)
			if(message[j] == this){
				this.className = "current";
				message_con[j].className = "current";
			}
			else{
				message[j].className = "";
				message_con[j].className = "";
			}
		}
	}
}