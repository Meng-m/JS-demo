// JavaScript Document
//延迟特效的切换
function $(id){
	return typeof id==="string"?document.getElementById(id):id;
	}
	
window.onload=function(){
	var index=0;//滑过的标签的索引
	var timer=null;//延迟需要定时器；
	var lis=$('header').getElementsByTagName('li');//获取标签的id
    var divs=$('content').getElementsByTagName('div');	//获取内容的id
	if(lis.length!=divs.length)
	return;
	else
	for(var i=0;i<lis.length;i++)//遍历所有标签
	{ 
	lis[i].id=i;	
	lis[i].onmouseover=function(){
		var that=this;
		if(timer){//如果存在准备执行的定时器，立刻清除，只有当前停留时间大于1S时才执行。
			clearTimeout(timer);
			timer=null;
			}
		else{
			timer=setTimeout(function(){
			  for(var j=0;j<lis.length;j++){
				lis[j].className='';
				divs[j].style.display='none';					
				 }//setTimeout中this指向window对象
		         lis[that.id].className='select';	
	             divs[that.id].style.display='block';              		 
		    },100);
        }
		
      }
  }
}