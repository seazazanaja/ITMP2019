fortuneBank = ["อยากหาอะไรดีๆ เก่งๆ เป็นในชีวิตลองเป็นคนปากดีปากเก่งดู รับรองเจอดีแน่ๆ","กินให้อร่อยเลยนะ <3","กินแล้วลุยต่อเลย !!!"]
function play()
{
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");
	setTimeout(function(){
		getFortune();
	},3000);
}
function play2()
{
	cookie1.classList.remove("cookie-hide");
	cookie2.classList.remove("cookie-show");
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");
	setTimeout(function(){
		cookie1.classList.remove("cookie-hide");
		cookie2.classList.remove("cookie-show");
	},0);
}

 
function getFortune(){
	rand = Math.floor(Math.random()*fortuneBank.length);
	fortune.innerText = fortuneBank[rand];
	fortune.style.opacity = 1;
	fortune.style.top = "96px";
}