'use strict';
var imagesTags = document.getElementById('images');
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
  } while(image1Index === image2Index || image2Index === image3Index || image3Index === image1Index)

  Images.allImages[image1Index].views++;
  Images.allImages[image2Index].views++;
  Images.allImages[image3Index].views++;

  img1.src = Images.allImages[image1Index].image;
  img2.src = Images.allImages[image2Index].image;
  img3.src = Images.allImages[image3Index].image;

}

// renderImages();
var clickedImage = function(event){
  var imageClicked = event.target.id;
  // console.log(imageClicked);
  if (imageClicked === 'image1'){
    Images.allImages[0].clicked++;
    vote++;
  } else if(imageClicked === 'image2'){
    Images.allImages[1].clicked++;
    vote++;
  } else if(imageClicked === 'image3'){
    Images.allImages[2].clicked++;
    vote++;
  } else{
    alert('Please select an image');
  }

  if(vote === 25){
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
new Images ('Unicorn Meat', 'img/directory/unicron.jpg');
new Images ('USB', 'img/directory/usb.gif');
new Images ('Wateringcan', 'img/directory/water-can.jpg');
new Images ('Wine Glass', 'img/directory/wine-glass.jpg');



console.log(Images.allImages);
renderImages();
imagesTags.addEventListener('click', clickedImage);

