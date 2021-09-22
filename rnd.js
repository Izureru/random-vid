if(document.getElementById) { window.onload = swap };

function swap() {
	const imgArray = new Array("pics/jam7.jpg", "pics/jam6.jpg", "pics/jam5.jpg", "pics/jam4.jpg", "pics/jam3.jpg", "pics/jam2.jpg", "pics/jam1.jpg"); 
	const index=(Math.floor(Math.random()*imgArray.length));
	const randomImage=(imgArray[index]);
	document.getElementById("backg").style.backgroundImage = "url("+ randomImage +")"; 
}
