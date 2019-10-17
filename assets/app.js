// var brand = document.querySelector(".brand");

// window.addEventListener('scroll', function(){
//     if(window.pageYOffset > 100) {
//         brand.classList = 'small-brand';
//     } else {
//         brand.classList = 'brand';
//     }
// })

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("brand").add.classList("small-brand");
  } else {
    document.getElementsByClassName("brand").add.classList("small-brand");
  }
}