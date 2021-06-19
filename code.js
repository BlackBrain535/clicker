let click = 0;
let dollars = 0;


let textclick = document.querySelector(".cl");
let button = document.querySelector(".click__button");
let textdollars = document.querySelector(".dollars");
let buttondollars = document.querySelector(".shop__button-dollars")




if(localStorage.getItem("click") === null){
	localStorage.setItem("click", click);
	console.log("true");
}
click = localStorage.getItem("click");
textclick.textContent = click;




if(localStorage.getItem("dollars") === null){
	console.log("dollarsTrue");
	localStorage.setItem("dollars", dollars);
}
dollars = localStorage.getItem("dollars");
textdollars.textContent = dollars;




button.addEventListener('click', function () {
	click++;
	localStorage.setItem("click", click);
	textclick.textContent = click;	
});


buttondollars.addEventListener('click', function(){
	if(click >= 1000){
		click -= 1000;
		dollars++;
		textclick.textContent = click;
		textdollars.textContent = dollars;

		localStorage.setItem("dollars", dollars);
		localStorage.setItem("click", click);
	}
});







