let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
   ul.classList.toggle("showData");
    
   if(ul.className == "showData"){
       document.getElementById("bar").className= "fa-solid fa-xmark";
   }else{
       document.getElementById("bar").className= "fa-solid fa-bars";

   }
})

// slider start
// Access the Images
let slideImages = document.querySelectorAll('img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
// let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
// slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
if(counter >= slideImages.length-1){
    counter = 0;
}
else{
    counter++;
}
slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
if(counter == 0){
    counter = slideImages.length-1;
}
else{
    counter--;
}
slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
indicators();
}


function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter){
        return;
    }
    else{
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
    }
    indicators();
}

// slider end


// form availblity start

// Example availability data
const availabilityData = {
    room1: [],
    room2: [],
    room3: [],
    room4: [],
    room5: [],
    room6: [],
    };
   
    function checkAvailability() {
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const roomNumber = 'room' + document.getElementById('roomNumber').value;
   
    if (availabilityData[roomNumber].some(isOverlap)) {
    alert('Sorry, this room is already booked for the selected dates.');
    } else {
    alert('Room booked successfully!');
    availabilityData[roomNumber].push({ checkInDate, checkOutDate });
    }
    function isOverlap(existingBooking) {
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
   
    return (
    (checkInDate >= existingBooking.checkInDate && checkInDate <= existingBooking.checkOutDate) ||
    (checkOutDate >= existingBooking.checkInDate && checkOutDate <= existingBooking.checkOutDate) ||
    (checkInDate <= existingBooking.checkInDate && checkOutDate >= existingBooking.checkOutDate)
   );
    } }


// form availblity end 