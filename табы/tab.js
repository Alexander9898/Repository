var tab;
var tabContent;

window.onload=function(){
	tab=document.querySelectorAll('.tab');
	tabContent=document.querySelectorAll('.tabContent');
	hideTabContent(1);
}

function hideTabContent(a){
	for (var i=a; i<tabContent.length;i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('whiteborder');
	}
}


document.getElementById('tabs').onclick=function(event){
	var target=event.target;
	if(target.className=="tab"){
		for(var i=0;i<tab.length;i++){
			if(target==tab[i]){
				showTabContent(i);
			break;
			}
		}
	}
}

function showTabContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideTabContent(0);
		tab[b].classList.add('whiteborder');
		tabContent[b].classList.add('show');
		tabContent[b].classList.remove('hide');
		
	}
}