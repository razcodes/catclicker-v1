
// Grabbing the menu and the container
const menuEl = document.getElementById("menu");
const container = document.getElementById("container");
let catAmount = 7;

// Looping through 5 cats
for(let i=0; i<catAmount; i++){

	// Creating each cat info page
	// Variable declerations
	let catNum = i+1;
	let catImg = `img/cat${catNum}.jpg`;
	let count = 0;

	// Creating elements
	let countElement = document.createElement("DIV");
		countElement.setAttribute("id", "counter");
		countElement.innerHTML = "Clicks: "+count;
	let newCat = document.createElement("BUTTON");
		newCat.innerText = "Cat: "+catNum;
	let newImage = document.createElement("img");

	newCat.addEventListener("click", ((countCopy) => {
		return () => {
			// Grabbing changeable elements
			firstImg = document.querySelector("img"); 
			firstCounter = document.getElementById("counter");

			// Removing changeable elements before change
			if(firstImg){
				firstImg.parentNode.removeChild(firstImg);
			};
			if(firstCounter){
				firstCounter.parentNode.removeChild(firstCounter);
			};

			// Setting the proper image
			newImage.src = catImg;
			
			// Appending the image and the click counter
			container.appendChild(newImage);
			container.appendChild(countElement);
		};
	})(count));

	newImage.addEventListener("click", ((countCopy) => {
		return () => {
			console.log("Copy: "+countCopy);
			countCopy++;
			countElement.innerHTML = "Clicks: "+countCopy;
			container.appendChild(countElement);
		};
	})(count));

	menuEl.appendChild(newCat);
};