AOS.init();
new WOW().init();
"use strict";
var swiper1 = new Swiper(".swiper-container", {
  spaceBetween: 1,
  slidesPerView: 3,
  // centeredSlides: true,
  // freeMode: true,
  // roundLengths: true,
  // loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6000,
  },

  breakpoints: {
    300: {
      mousewheel: true,
      keyboard: true,
      slidesPerView: 1,
      spaceBetween: 24,
      allowSlidePrev: true,
      allowSlideNext: true,
      loopedSlides: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
      loopedSlides: 1,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      loopedSlides: 3,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 30,
      loopedSlides: 3,
    },
  },
});
function sendEmail(){

          
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var mess = document.getElementById("message").value;
  
  var body = "Name: " + name + "<br/> Email:" + email + "<br/> Phone Number:" + phone + "<br/> Message:" + mess;
   
  console.log(body);
   Email.send({
       SecureToken: "9213808c-13e7-49cb-90ca-45876261ffe0",
       To : 'essa@pencil-designs.com',
       From : document.getElementById("email").value,
       Subject : name,
       Body : body
   }).then(
       message =>{
           if(message == 'OK'){
  
               swal("Successfull", "Your Data Successfull Received", "success");
           }
           else{
  
               swal("Something Wrong", "Your Data is not Received", "error");
           }
       }
     );
  }
// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 30.033333, lng: 31.233334 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 30.033333, lng: 31.233334 }, "Egypt"],
    [{ lat: 51.1657, lng: 10.4515 }, "Germany"],
    [{ lat: 53.5500, lng: 2.4333 }, "UK"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;