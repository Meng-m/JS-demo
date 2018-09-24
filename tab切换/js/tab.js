// JavaScript Document
//封装id
function $(id){
	return typeof id==="string"?document.getElementById(id):id;
	}
	
window.onload=function(){
	//获取鼠标滑过或标签和要切换内容的元素
var titles=$('header').getElementsByTagName('li');
var divs=$('content').getElementsByTagName('div');	
if(titles.length!=divs.length)
return;
else
	for(i=0;i<titles.length;i++){
		titles[i].id=i;
		titles[i].onclick=function(){
			for(j=0;j<titles.length;j++){
			titles[j].className="";
			divs[j].style.display='none';
			}
			this.className="select";
	        divs[this.id].style.display='block';	
	 		}
		}
	}	