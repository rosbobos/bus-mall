'use strict';
var imagesTags = document.getElementById('images');
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');
var threeShown = [img1, img2, img3];
var image1Index = null;
var image2Index = null;
var image3Index = null;
var vote = 0;
var previousArray = [];
var nameArray = [];
var viewArray = [];
var clickedArray = [];


function Images (name, image){
  this.name = name;
  this.image = image;
  this.clicked = 0;
  this.views = 0;
  Images.allImages.push(this);
}
function updateStorageImage(){
  var jsonString = JSON.stringify(Images.allImages);
  localStorage.setItem('image', jsonString);
  // console.log('pie', updateStorageImage);
}
function retrieveData(){
  var data = localStorage.getItem('image');
  if(data){
    var parsedData = JSON.parse(data);
    Images.allImages = parsedData;
    renderImages();
  } else{
    renderImages();
  }
}

function populateNameArray(){
  for(var i = 0; i < Images.allImages.length; i++){
    nameArray.push(Images.allImages[i].name);
  }
}

function populateViewArray(){
  for(var i = 0; i < Images.allImages.length; i++){
    viewArray.push(Images.allImages[i].views);
  }
}

function populateClickArray(){
  for(var i = 0; i < Images.allImages.length; i++){
    clickedArray.push(Images.allImages[i].clicked);
  }
}

function randomImage(){
  var createRandom = Math.floor(Math.random()*Images.allImages.length);
  return createRandom;
}

function renderImages(){
  while(previousArray.length < 6){
    var randImg = randomImage();
    while(!previousArray.includes(randImg)){
      previousArray.push(randImg);
    }
  }
  for(var i = 0; i < previousArray.length; i++){
    var remove = previousArray.shift();
    console.log(remove);
    threeShown[i].src = Images.allImages[remove].image;
    // Images.threeShown[i].id = Images.all[remove].name;
    Images.allImages[remove].views +=1;
    console.log(threeShown[i].id);
    if(threeShown[i].id === 'image1'){
      image1Index = remove;
    } else if(threeShown[i].id === 'image2'){
      image2Index = remove;
    } else if (threeShown[i].id === 'image3'){
      image3Index= remove;
    }
  }
}



var clickedImage = function(event){
  var imageClicked = event.target.id;
  // console.log(imageClicked);
  if (imageClicked === 'image1'){
    console.log(image1Index);
    console.log(Images.allImages[image1Index]);
    Images.allImages[image1Index].clicked++;
    vote++;
  } else if(imageClicked === 'image2'){
    Images.allImages[image2Index].clicked++;
    vote++;
  } else if(imageClicked === 'image3'){
    Images.allImages[image3Index].clicked++;
    vote++;
  } else{
    alert('Please select an image');
  }

  if(vote === 25){
    imagesTags.removeEventListener('click', clickedImage);
    populateViewArray();
    populateClickArray();
    console.log('clicks' + clickedArray);
    console.log('views' +viewArray);
    console.log(Images.allImages);
    updateStorageImage();
    viewChart();
  }else{
    renderImages();
  }
};

function viewChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [{
        label: '# of Votes',
        data: clickedArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: viewArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


Images.allImages = [];
new Images ('Bag', 'img/directory/bag.jpg');
new Images ('Banana', 'img/directory/banana.jpg');
new Images ('Bathroom', 'img/directory/bathroom.jpg');
new Images ('Boots', 'img/directory/boots.jpg');
new Images ('Breakfast', 'img/directory/breakfast.jpg');
new Images ('Bubble gum', 'img/directory/bubblegum.jpg');
new Images ('Chair', 'img/directory/chair.jpg');
new Images ('Cthulhu', 'img/directory/cthulhu.jpg');
new Images ('Dog-duck', 'img/directory/dog-duck.jpg');
new Images ('Dragon', 'img/directory/dragon.jpg');
new Images ('Pen', 'img/directory/pen.jpg');
new Images ('Pet Sweeper', 'img/directory/pet-sweep.jpg');
new Images ('Pizza Scissors', 'img/directory/scissors.jpg');
new Images ('Shark Sleeping Bag', 'img/directory/shark.jpg');
new Images ('Baby Sweeper', 'img/directory/sweep.png');
new Images ('TaunTaun', 'img/directory/tauntaun.jpg');
new Images ('Unicorn Meat', 'img/directory/unicorn.jpg');
new Images ('USB', 'img/directory/usb.gif');
new Images ('Wateringcan', 'img/directory/water-can.jpg');
new Images ('Wine Glass', 'img/directory/wine-glass.jpg');



console.log(Images.allImages);
// renderImages();
imagesTags.addEventListener('click', clickedImage);
populateNameArray();

retrieveData();
console.log(clickedArray);
