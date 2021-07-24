console.log('%c HI', 'color: firebrick')
const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImg() {
    return fetch(imgURL)
    .then(response => response.json())
    .then(data => {
        renderImg(data.message)
        console.log(data)
    });
}

function renderImg(dogArr) {
    for (const dog of dogArr) {
        let dogImg = document.getElementById("dog-image-container");
        const img = document.createElement("img"); 
        img.src = dog; 
        dogImg.append(img); 
    }
    // dogArr.forEach((dog) => {
    //     let dogImg = document.getElementById("dog-image-container");
    //     const img = document.createElement("img"); 
    //     img.src = dog; 
    //     dogImg.append(img); 
    // })
}

function fetchBreeds() {
    return fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(typeof(data))
        renderBreed(data)
    });
}

// function renderBreed(dogObj) {
//     const breeds = Object.keys(dogObj)
//     console.log(breeds);
//     breeds.forEach((dog) => {
//         const breedUl = document.getElementById("dog-Breeds"); 
//         const breedLi = document.createElement("li"); 
//         breedLi.innerText = dog;
//         breedUl.append(breedLi)
//         breedLi.addEventListener("click", function(e))
//     })
    
// }
document.addEventListener('DOMContentLoaded', function() {
    fetchImg(); 
});

document.addEventListener('DOMContentLoaded', function() {
    fetchBreeds(); 
});
// console.log('%c HI', 'color: firebrick')
// const breedUrl = 'https://dog.ceo/api/breeds/list/all';
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
// document.addEventListener("DOMContentLoaded", function(){fetchDogs() 
//     fetchBreeds()});
// const fetchDogs = () => {
//     fetch(imgUrl).then(resp => resp.json()).then(json => renderDogs(json.message)) 
// }
// const renderDogs = (dogArr) => {
//     dogArr.forEach((dog) => {
//         let dogImg = document.getElementById("dog-image-container")
//         const img = document.createElement("img")
//         img.src = dog
//         dogImg.append(img)
//     }) 
// };
// const fetchBreeds = () => {
//     fetch(breedUrl).then(resp => resp.json()).then(json => renderBreed(json.message))
// };
// const renderBreed = (dogObj) => {
//     const breeds = Object.keys(dogObj)
//     breeds.forEach((dog) => {
//         const breedUl = document.getElementById("dog-breeds")
//         const breedLi = document.createElement("li")
//         breedLi.innerText = dog
//         breedUl.append(breedLi)
//         breedLi.addEventListener("click", function(e) {
//             document.querySelector("li")
//             this.style.color = "red"
//     })
//  })
// };