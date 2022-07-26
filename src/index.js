document.addEventListener('DOMContentLoaded', function () {
console.log('%c HI', 'color: firebrick')
//initalizing constants
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropDown = document.getElementById("breed-dropdown");
const breedList = document.getElementById("dog-breeds");
//event listeners
dropDown.addEventListener('change', handleChange)
let breeds = [];

//fetch calls
fetch(imgUrl)
    .then(function (response) {
    return response.json();
     })
    .then(object => object.message.forEach(renderImage))

    .catch(function (error) {
        alert("Error!");
        console.log(error.message);
        
    })
fetch(breedUrl)
    .then(function (response) {
    return response.json();
     })
    .then(object => {
        breeds = Object.keys(object.message)
        breeds.forEach(renderBreed);
        })

    .catch(function (error) {
        alert("Error!");
        console.log(error.message);
        
    })


//functions
function renderImage(img){
    const image = document.createElement("img");
    image.src = img;
    const imageContainer = document.getElementById("dog-image-container");
    imageContainer.append(image);
}

function renderBreed(breed){
    const dogBreed = document.createElement("li");
    dogBreed.addEventListener("click", colorChange);
    dogBreed.textContent = breed; 
    breedList.append(dogBreed);

}

function colorChange(e){
    e.target.style.color = "pink";
}
function handleChange(e) {
    let letter = e.target.value;
    let filteredBreeds = breeds.filter(breed => breed.startsWith(letter));
    breedList.textContent = '';
    filteredBreeds.forEach(renderBreed);
}

})