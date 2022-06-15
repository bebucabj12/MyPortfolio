
const linksNav = document.getElementsByClassName('links-nav')[0];
const hamburger = document.getElementsByClassName('hamburguer')[0];
const hamburguerMenu = document.getElementById('hamburguesa')
let open = false;

const toggleMenu = () => {
  linksNav.classList.toggle('links-nav2');
  linksNav.style.transition = 'transform 0.5s ease-in-out';
}

hamburguerMenu.addEventListener('click', function() {
  toggleMenu();
  if(document.querySelector('.links-nav.links-nav2')){
    open = true;
  } else {
    open = false;
  }
});

window.addEventListener('click', function(e) {
  this.console.log(e.target);
  if(open){
    if(e.target !== hamburguerMenu) {
      toggleMenu();
      open = false;
    }
  }
});

window.addEventListener('resize', function() {
  if(this.screen.width > 800){
    toggleMenu();
    linksNav.style.transition = 'none';
    open = false;
  }
});

addEventListener('DOMContentLoaded', () => {
  const buttonUp = document.querySelector('#scrollUp')
  
  const getPixels = () => document.documentElement.scrollTop || document.body.scrollTop

  const up = () => {
    if(getPixels() > 0) {
      requestAnimationFrame(up)
      scrollTo(0, getPixels() - getPixels() / 20)
    }
  }

  const showScroll = () => {
    if(getPixels() > 50) {
      buttonUp.className = 'visible'
    } else {
      buttonUp.className = 'hidden'
    }
  }
  buttonUp.addEventListener('click', up)
  window.addEventListener('scroll', showScroll)
  
})

particlesJS(
  {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 1262.6362266116362
        }
      },
      "color": {
        "value": "#d717b5"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 29.234779642848423,
          "size_min": 0.8120772123013452,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "top-right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 255.80432187492372,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 243.62316369040352,
          "size": 133.99274002972194,
          "duration": 3.816762897816322,
          "opacity": 0.8851641614084662,
          "speed": 3
        },
        "repulse": {
          "distance": 105.57003759917487,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);