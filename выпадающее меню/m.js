var menu;
var sub;

window.onload= function(){
menu=document.querySelectorAll('.menu');
sub=document.querySelectorAll('.submenu');
funcClose(0)
}

function funcClose (a){
	for ( let i = a ; i<sub.length; i++){
		sub[i].style.display='none'
	}
};

 document.getElementById('nav').onmouseover=function(event){
	 var target=event.target;
	 if(target.className=="menu" || target.className=="submenu"){
		 for(var i=0; i<menu.length;i++){
			 if(target==menu[i]){
				 funcShow(i);
				 break;
			 }
		 }
	 }
 }




 document.getElementById('nav').onmouseout=function(event){
	var target=event.target;
	if(target.className=="menu" || target.className=='submenu'){
		for(var i=0; i<menu.length;i++){
			if(target==menu[i]){
				funcClose(i);
				break;
			}
		}
	}
}

function funcShow (b) {
if(sub[b].style.display='none'){
	funcClose(0);
	sub[b].style.display='block'
}
 }