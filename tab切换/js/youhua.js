// JavaScript Document
//自动加手动加代码优化
// JavaScript Document
//手动切换加自动切换
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
	
/*自动切换部分*/	   
 //添加定时器

/*手动切换部分*/
//遍历每一个标签栏并给她们绑定事件
   for(var i=0;i<lis.length;i++){
	lis[i].id=i;
	lis[i].onmouseover=function(){
	clearInterval(timer);	
    changeOption(this.id);
	}
    lis[i].onmouseout=function(){
//鼠标离开后，继续执行自动切换部分
       index=this.id;
	   console.log('index='+index);	 
	   timer=setInterval(autoplay,2000);   
   }
 }
 
  if(timer){//timer为真
	 clearInterval(timer);
	 timer=null;
	 }
  timer=setInterval(autoplay,2000);
//重复代码封装	
function changeOption(curIndex){
	for(var j=0;j<lis.length;j++){
	lis[j].className='';
	divs[j].style.display='none';
	}
     //只高亮显示当前li标签	
	lis[curIndex].className='select';
    divs[curIndex].style.display='block';	
	}
//封装定时器	
function autoplay(){
	index++;
    if(index>=lis.length){
	   index=0;
		}
     console.log(index);
	 changeOption(index);	   
      
    }		

}