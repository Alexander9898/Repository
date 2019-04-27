

let myInput = document.querySelector("input")
let butt = document.querySelector('button')
let myli= document.querySelector("#li")
let myUl= document.querySelector('ul')

butt.addEventListener('click',function(){
	if(myInput.value==" "){
		alert('введите дело!!!')
	}else{
	var li = document.createElement('li');
	li.id="li"
	myUl.appendChild(li)
	li.textContent=(myInput).value;}
	myInput.value=" "
});


myUl.addEventListener('click',function(event){
	var target=event.target;
	if(target.id=='li'){
	target.classList.toggle('checked')
	console.log(target)}
})



