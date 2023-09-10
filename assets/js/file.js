AOS.init();
new WOW().init();
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
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "moh.essa2020@gmail.com",
        Password : "me.2020@@",
        To : 'moh.essa2020@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
var locations = [
  ["Bondi Beach", -33.890542, 151.274856, 4],
  ["Coogee Beach", -33.923036, 151.259052, 5],
  ["Cronulla Beach", -34.028249, 151.157507, 3],
  ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  ["Maroubra Beach", -33.950198, 151.259302, 1],
];

var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 10,
  center: new google.maps.LatLng(-33.92, 151.25),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
  });

  google.maps.event.addListener(
    marker,
    "click",
    (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      };
    })(marker, i)
  );
}
