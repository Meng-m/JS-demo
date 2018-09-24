// JavaScript Document
//封装id
function $(id){
	return typeof id==="string"?document.getElementById(id):id;
	}
window.onload=tab;
function tab(){
	var timer=null;
	var index=0;
	var lis=$('header').getElementsByTagName('li');
	var divs=$('content').getElementsByTagName('div');
	   
 //添加定时器
 timer=setInterval(function(){
	 index++;
     if(index>=lis.length){
	   index=0;
		}
     console.log(index);
		   
//标签每自动切换一次，循环清空所有内容
 for(var j=0;j<lis.length;j++){
	lis[j].className='';
	divs[j].style.display='none';
	}
//只高亮显示当前li标签	
	lis[index].className='select';
    divs[index].style.display='block';
		   
    },2000);
	
}