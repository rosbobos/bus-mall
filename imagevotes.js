'use strict';
var imagesTags = document.getElementById('voteImages');
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');
var image1Index = null;
var image2Index = null;
var image3Index = null;
var vote = 0;

function Images (name, image){
  this.name = name;
  this.image = image;
  this.clicked = 0;
  this.views = 0;
  Images.allImages.push(this);
}
function randomImage(){
  var createRandom = Math.floor(Math.random()*Images.allImages.length);
  return createRandom;
}

function renderImages(){
  do{
    image1Index = randomImage();
    image2Index = randomImage();
    image3Index = randomImage();
  } while(image1Index===image2Index || image2Index === image3Index || image3Index===image1Index)

  Images.allImages[image1Index].views++;
  Images.allImages[image2Index].views++;
  Images.allImages[image3Index].views++;

  image1.src = Images.allImages[image1Index].image;
  image2.src = Images.allImages[image2Index].image;
  image3.src = Images.allImages[image3Index].image;
}
var clickedImage = function(event){
  var imageClicked = event.target.id;
  if (imageClicked === 'img1'){
    Images.allImages['img1'].clicked++;
    imageVote++;
  } else if(imageClicked === 'img2'){
    Images.allImages['img2'].clicked++;
    imageVote++;
  } else if(imageClicked === 'img3'){
    Images.allImages['img3'].clicked++;
    imageVote++;
  } else(){
    alert('Please select an image');
  }

  if(imageVote === 25){
    imagesTags.removeEventListener('click', clickedImage);
    for(var i=0; i< Images.allImages.length; i++){
      var picture = Images.allImages[i];
      alert('${img.name} was viewed ${img.views} with ${clicks} clicks. Thank you for participating.');
    }
  }else{
    renderImages();
  }
}
Images.allImages = [];
new Vote ('Bag', 'img/directory/bag.jpg');
new Vote ('Banana', 'img/directory/banana.jpg');
new Vote ('Bathroom', 'img/directory/bathroom.jpg');
new Vote ('Boots', 'img/directory/boots.jpg');
new Vote ('Breakfast', 'img/directory/breakfast.jpg');
new Vote ('Bubble gum', 'img/directory/bubblegum.jpg');
new Vote ('Chair', 'img/directory/chair.jpg');
new Vote ('Cthulhu', 'img/directory/cthulhu.jpg');
new Vote ('Dog-duck', 'img/directory/dog-duck.jpg');
new Vote ('Dragon', 'img/directory/dragon.jpg');
new Vote ('Pen', 'img/directory/pen.jpg');
new Vote ('Pet Sweeper', 'img/directory/pet-sweep.jpg');
new Vote ('Pizza Scissors', 'img/directory/scissors.jpg');
new Vote ('Shark Sleeping Bag', 'img/directory/shark.jpg');
new Vote ('Baby Sweeper', 'img/directory/sweep.png');
new Vote ('TaunTaun', 'img/directory/tauntaun.jpg');
new Vote ('Unicorn Meat', 'img/directory/unicron.jpg');
new Vote ('USB', 'img/directory/usb.gif');
new Vote ('Wateringcan', 'img/directory/water-can.jpg');
new Vote ('Wine Glass', 'img/directory/wine-glass.jpg');



console.log(Images.allImages);
renderImages();
imagesTags.addEventListener('click', imageClicked);

