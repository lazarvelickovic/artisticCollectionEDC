var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;



// FUNCTION FOR SLIDERS

let slider = (cname, counter) => {
  let slides = document.getElementsByClassName(cname);

  for(let i of slides) {
    let imgSrcNumber = Number(i.src.slice(-6, -4)) + counter;
    
    if(imgSrcNumber < 1) imgSrcNumber = slides.length;

    if(imgSrcNumber < 10) imgSrcNumber = '0' + imgSrcNumber;

    if(imgSrcNumber > slides.length) imgSrcNumber = '01';

    i.src = i.src.slice(0, -6) + imgSrcNumber + '.jpg';
  }
}



// MODAL

var modal = document.getElementById('modal');
var modalImg = document.getElementById('modalImg');
var modalImgTwo = document.getElementById('modalImgTwo');
var modalImgContainer = document.getElementById('modalImgContainer');
var modalPrevious = document.getElementById('modalPrevious');
var modalNext = document.getElementById('modalNext');
var modalImgLabel = document.getElementById('modalImgLabel');
var modalImgHref = document.getElementById('modalImgHref');
var modalLabelHref = document.getElementById('modalLabelHref');
var bookModalClose = document.getElementById('bookModalClose');
var modalImgSrcNumber, imgCollection, arrSrc, arrAltImg, arrAltItlImg, arrAltImg1;

// functions for modal

function modalOpen(arrSrcImg, imgCollectionItems, cname, arrAlt, arrAltItl) {
  imgCollection = imgCollectionItems;
  arrSrc = arrSrcImg;
  arrAltImg = arrAlt;
  arrAltItlImg = arrAltItl;
  modalPrevious.style.display = 'inline';
  modalNext.style.display = 'inline';

  if(cname) {
    imgCollection = document.getElementsByClassName(cname);
    arrSrc = [];

    for(var i = 0; i < imgCollection.length; i++) {
      arrSrc.push(imgCollection[i].src);
    }
  }

  if(event.target.offsetParent) {
    if(event.target.offsetParent.localName === 'td' && event.target.offsetParent.id) {
      staffTableNumber =  event.target.offsetParent.id;
      modalImgSrcNumber = Number(staffTableNumber);   

      modalPrevious.addEventListener('click', modalPreviousSlide, false);
      modalNext.addEventListener('click', modalNextSlide, false);
          
      modal.style.display = 'flex';
      modalImg.src = arrSrc[modalImgSrcNumber - 1];

      if(arrAltImg) {
        modalImgLabel.innerHTML = arrAltImg[modalImgSrcNumber - 1];   
      }
    }
  }
  
  if (event.target.previousElementSibling) {
    if (event.target.previousElementSibling.localName === 'img') {
      var imgSrc = event.target.previousElementSibling.src;
      modalImgSrcNumber = Number(imgSrc.slice(-6, -4));   

      modalPrevious.addEventListener('click', modalPreviousSlide, false);
      modalNext.addEventListener('click', modalNextSlide, false);
          
      modal.style.display = 'flex';
      modalImg.src = arrSrc[modalImgSrcNumber - 1];

      if(arrAltImg) {
        modalImgLabel.innerHTML = arrAltImg[modalImgSrcNumber - 1];   
      }

      if(arrAltItlImg) {
        modalImgLabel.innerHTML = '<span id="modalImgLabelItl">' + arrAltItlImg[modalImgSrcNumber - 1] + '</span>' + arrAltImg[modalImgSrcNumber - 1];   
      }

      if(imgCollection.length === 52) {
        if(modalImgSrcNumber === 41) {
          modalImg.offsetParent.style.height = '75%';
        } 

        if(modalImgSrcNumber === 44) {
          modalImg.offsetParent.style.height = '60%';
        }

        if(modalImgSrcNumber === 48) {
          modalImg.offsetParent.style.height = '45%';
        }

        if(modalImgSrcNumber === 49) {
          modalImg.offsetParent.style.height = '70%';
        }
      }
    }   
  } 
}

// Function for books modal

var bookModal = document.getElementById('bookModal');
var book, bookSsp, bookID;
function bookModalOpen(bookId) {
  bookModal.style.display = 'block';
  bookID = bookId;
  book = document.getElementById('mybook' + bookID);
  bookSsp = document.getElementById('mybooks' + bookID);
  if (book) {
    book.style.display = 'block';
  }

  if (bookSsp) {
    bookSsp.style.display = 'block';
  }

  $(document).ready(function() {
    if($(window).width() > 2200) {
      $("#mybook" + bookID).wowBook({ 
          width: 1495, height: 900,
          controls : {
          next      : '#next',     
          back      : '#back',     
          first     : '#first',    
          last      : '#last',     
          zoomIn    : '#zoomin',   
          zoomOut   : '#zoomout',  
          slideShow : '#slideshow', 
          fullscreen : '#fullscreen'
        },
        centeredWhenClosed: true,
        slideShowDelay: 5000,
        flipSound: false
      });   
    }

    if($(window).width() < 2200  && $(window).width() > 1800) {
      $("#mybook" + bookID).wowBook({ 
          width: 1410, height: 850,
          controls : {
          next      : '#next',     
          back      : '#back',     
          first     : '#first',    
          last      : '#last',     
          zoomIn    : '#zoomin',   
          zoomOut   : '#zoomout',  
          slideShow : '#slideshow', 
          fullscreen : '#fullscreen'
        },
        centeredWhenClosed: true,
        slideShowDelay: 5000,
        flipSound: false
      });   
    }

    if($(window).width() < 1800 && $(window).width() > 1400) {
      $("#mybook" + bookID).wowBook({ 
          width: 1165, height: 700,
          controls : {
          next      : '#next',     
          back      : '#back',     
          first     : '#first',    
          last      : '#last',     
          zoomIn    : '#zoomin',   
          zoomOut   : '#zoomout',  
          slideShow : '#slideshow',
          fullscreen : '#fullscreen'
        },
        centeredWhenClosed: true,
        slideShowDelay: 5000,
        flipSound: false
      });   
    }

    if($(window).width() < 1400 && $(window).width() > 1000) {
      $("#mybook" + bookID).wowBook({ 
          width: 920, height: 550,
          controls : {
          next      : '#next',     
          back      : '#back',     
          first     : '#first',    
          last      : '#last',     
          zoomIn    : '#zoomin',   
          zoomOut   : '#zoomout',  
          slideShow : '#slideshow',
          fullscreen : '#fullscreen'
        },
        centeredWhenClosed: true,
        slideShowDelay: 5000,
        flipSound: false
      });   
    }

    if($(window).width() < 1000 && $(window).width() > 600) {
      $("#mybook" + bookID).wowBook({ 
          width: 580, height: 350,
          controls : {
          next      : '#next',     
          back      : '#back',     
          first     : '#first',    
          last      : '#last',     
          zoomIn    : '#zoomin',   
          zoomOut   : '#zoomout',  
          slideShow : '#slideshow',
          fullscreen : '#fullscreen'
        },
        centeredWhenClosed: true,
        slideShowDelay: 5000,
        flipSound: false
      });   
    }

    if($(window).width() < 600) {
      $("#mybook" + bookID).wowBook({ 
          width: 285, height: 170,
          controls : {
          next      : '#next',     
          back      : '#back',     
          first     : '#first',    
          last      : '#last',     
          zoomIn    : '#zoomin',   
          zoomOut   : '#zoomout',  
          slideShow : '#slideshow',
          fullscreen : '#fullscreen'
        },
        centeredWhenClosed: true,
        slideShowDelay: 5000,
        flipSound: false
      });   
    }
  });
}

if(document.getElementById('bookModalClose')) {
  bookModalClose.addEventListener('click', function(){
    location.reload();
  });
}

function modalPreviousSlide() {
  modalImgSrcNumber++;

  if(modalImgSrcNumber > imgCollection.length) {
    modalImgSrcNumber = 1;
  }

  modalImg.src = arrSrc[(modalImgSrcNumber - 1)];

  if(arrAltImg) {
    modalImgLabel.innerHTML = arrAltImg[modalImgSrcNumber - 1];
  }

  if(arrAltItlImg) {
    modalImgLabel.innerHTML = '<span id="modalImgLabelItl">' + arrAltItlImg[modalImgSrcNumber - 1] + '</span>' + arrAltImg[modalImgSrcNumber - 1];   
  }

  if (modalImgHref && modalImgSrcNumber !==2 && modalImgSrcNumber !==3) {
    modalImgHref.removeAttribute('href');
    modalLabelHref.removeAttribute('href');  
  }

  if(imgCollection.length === 52) {
    if(modalImgSrcNumber === 41) {
      modalImg.offsetParent.style.height = '75%';
    } 

    if(modalImgSrcNumber === 44) {
      modalImg.offsetParent.style.height = '60%';
    } 

    if(modalImgSrcNumber === 48) {
      modalImg.offsetParent.style.height = '45%';
    } 

    if(modalImgSrcNumber === 49) {
      modalImg.offsetParent.style.height = '70%';
    } 
    
    if(modalImgSrcNumber !== 41 & modalImgSrcNumber !== 44 & modalImgSrcNumber !== 48 & modalImgSrcNumber !== 49) {
      modalImg.offsetParent.style.height = '84%';
    }
  }
}

function modalNextSlide() {
  
  modalImgSrcNumber--;

  if(modalImgSrcNumber < 1) {
    modalImgSrcNumber = imgCollection.length;
  }

  modalImg.src = arrSrc[(modalImgSrcNumber - 1)];

  if(arrAltImg) {
    modalImgLabel.innerHTML = arrAltImg[modalImgSrcNumber - 1];
  }

  if(arrAltItlImg) {
    modalImgLabel.innerHTML = '<span id="modalImgLabelItl">' + arrAltItlImg[modalImgSrcNumber - 1] + '</span>' + arrAltImg[modalImgSrcNumber - 1];   
  }
  
  if (modalImgHref && modalImgSrcNumber !==2 && modalImgSrcNumber !==3) {
    modalImgHref.removeAttribute('href');
    modalLabelHref.removeAttribute('href');  
  }

  if(imgCollection.length === 52) {
    if(modalImgSrcNumber === 41) {
      modalImg.offsetParent.style.height = '75%';
    } 

    if(modalImgSrcNumber === 44) {
      modalImg.offsetParent.style.height = '60%';
    } 

    if(modalImgSrcNumber === 48) {
      modalImg.offsetParent.style.height = '45%';
    } 

    if(modalImgSrcNumber === 49) {
      modalImg.offsetParent.style.height = '70%';
    } 
    
    if(modalImgSrcNumber !== 41 & modalImgSrcNumber !== 44 & modalImgSrcNumber !== 48 & modalImgSrcNumber !== 49) {
      modalImg.offsetParent.style.height = '84%';
    }
  }
}

// Add event listeners for modal

if(document.getElementById('modal')) {

  modal.addEventListener('click', function() {
    
    if(event.target.id === 'modalPrevious' || event.target.id === 'modalNext') {
      modal.style.display = 'flex';
    } else if(modalImgHref && modalImgSrcNumber === 3 && event.target.id === 'modalImg' || event.target.id === 'modalImgLabel') { 
      modal.style.display = 'flex';
    } else if(modalImgHref && modalImgSrcNumber === 2 && event.target.id === 'modalImg' || event.target.id === 'modalImgLabel') { 
      modal.style.display = 'flex';
    } else {
      modal.style.display = 'none';   
      modalImgContainer.style.height = '84%';

      if(document.getElementById('modalImgLabel')) {
        document.getElementById('modalImgLabel').innerHTML = '';     
      }

      if(modalImgHref) {     
        modalImgHref.removeAttribute('href');
        modalLabelHref.removeAttribute('href');  
      }
    } 
  });

  modalClose.addEventListener('click', function(){
    modal.style.display = 'none';
    modalPrevious.removeEventListener('click', modalPreviousSlide);
    modalNext.removeEventListener('click', modalNextSlide);
    modalImgContainer.style.height = '84%';
    if(document.getElementById('modalImgLabel')) {
      document.getElementById('modalImgLabel').innerHTML = '';
    };

    if(modalImgHref) {     
      modalImgHref.removeAttribute('href');
      modalLabelHref.removeAttribute('href');  
    }
  });

}

// TABS

var linkPage1, linkPage2, linkPage3, idTab;

// Function that change tabs

function changeTab(evt, tabName, cname, tabPages) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(cname);
  var id = event.currentTarget.id;
  if(id) {
    idTab = id.substring(7);
  }

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('about-us-links-tabs');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active-tab', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active-tab';

  linkPage1 = document.getElementById('linkPage1-' + idTab);
  linkPage2 = document.getElementById('linkPage2-' + idTab);
  linkPage3 = document.getElementById('linkPage3-' + idTab);

  if (linkPage1) {
    linkPage1.addEventListener('click', function(event) {
      changePageTab(event, 'pageOne' + idTab, tabPages, 'about-us-links-tabs-page', '');
    }, false);

    linkPage1.click();
  }
  
  if (linkPage2) {
    linkPage2.addEventListener('click', function(event) {
        changePageTab(event, 'pageTwo' + idTab, tabPages, 'about-us-links-tabs-page', '');
    }, false);
  }

  if (linkPage3) {
    linkPage3.addEventListener('click', function(event) {
        changePageTab(event, 'pageThree' + idTab, tabPages, 'about-us-links-tabs-page', '');
    }, false);
  }
}

// Function that change page in tabs

function changePageTab(evt, tabName, cname, clinks, tabPage) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(cname + tabPage);

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName(clinks);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(tabName).style.display = 'flex';

  if (cname === 'poster-flex') {
    document.getElementById(tabName).style.justifyContent = 'space-between';
  }

  evt.currentTarget.className += ' active';
}



// SMOOTH SCROLL FOR IE

var buttonScrollTop = document.getElementById('button-scroll-top');

// Function for smooth scroll

function smoothScroll() {

  var topPage = document.body;
  var startY = self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var stopY = document.body.offsetTop;
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if(distance < 100) {
      scrollTo(0, stopY); 
      return;
  }
  var speed = 30;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if(stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
          setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
  }
  for(var i = startY; i > stopY; i -= step) {
      setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
  }

  if(document.getElementById('start-page')) {
    var startPage = document.getElementById('start-page');
    startPage.style.backgroundAttachment = 'scroll';

    setTimeout(function() {
      startPage.style.backgroundAttachment = 'fixed';
    }, 100);
  }

return false;
}

// Adding event listener for scroling to top of the page

buttonScrollTop.addEventListener('click', function() {
  smoothScroll();
}, false);



// MENU

// Stick menu

if(windowWidth > 1150) {
  window.addEventListener('scroll', menuSticky);
  var navbar = document.getElementById('menu');
  var sticky = navbar.offsetTop;

  function menuSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky') ; 
    } else {
      navbar.classList.remove('sticky');
    }
  }
}

// Mobile menu

var menu = document.getElementById('menu');
var menuIcon = document.getElementById('menuIcon');
var menuList = document.getElementById('menuList');

menuIcon.addEventListener('click', function() {
  if(menuList.style.display === '') {
    menuList.style.display = 'block';
    menu.style.height = 'auto';
  } else {
    menuList.style.display = '';
    menu.style.height = '45px';
  }
});



// HOME PAGE

if(document.getElementById('homePage')) {


// Start page

var startPagePrevious = document.getElementById('startPagePrevious');
var startPageNext = document.getElementById('startPageNext');
var dots = document.getElementsByClassName('dot');

var slideIndex = 0;
startPageSlideshow(slideIndex);
startPageSlideshowAuto();

// Functions for changing background images

function plusSlides(n) {
  startPageSlideshow(slideIndex += n);
}

function currentSlide(n) {
  startPageSlideshow(slideIndex = n);
}

function startPageSlideshow(n) {
  var i;
  var slides = document.getElementsByClassName('start-page');
  if (n > 5) {slideIndex = 1;}   
  if (n < 1) {slideIndex = 5;}
  var dotIndex = slideIndex;
  slides[0].className = 'start-page start-page' + slideIndex;   
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active-dots', '');
  } 
  dots[dotIndex-1].className += ' active-dots';
}

// Function that changes background images automaticly

function startPageSlideshowAuto() {
  var i;
  var slides = document.getElementsByClassName('start-page');
  slideIndex++;
  if (slideIndex > 5) {slideIndex = 1;}    
  if (slideIndex < 1) {slideIndex = 5;}
  var dotIndex = slideIndex;
  slides[0].className = 'start-page start-page' + slideIndex;   
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active-dots', '');
  } 
  dots[dotIndex-1].className += ' active-dots';
  var timeout = setTimeout(function() {
    startPageSlideshowAuto();
  }, 7500);
}

startPagePrevious.addEventListener('click', function() {
  plusSlides(-1);
}, false);

startPageNext.addEventListener('click', function() {
  plusSlides(1);
}, false);


dots[0].addEventListener('click', function() {
  currentSlide(1);
}, false);

dots[1].addEventListener('click', function() {
  currentSlide(2);
}, false);

dots[2].addEventListener('click', function() {
  currentSlide(3);
}, false);

dots[3].addEventListener('click', function() {
  currentSlide(4);
}, false);

dots[4].addEventListener('click', function() {
  currentSlide(5);
}, false);


// FADE TO ELEMENTS

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset
  };
}

if(windowWidth > 1023) {  
  window.addEventListener('scroll', function() {
    var h2 = document.getElementsByTagName('h2');
    var h3 = document.getElementsByTagName('h3');
    var posterContainer = document.getElementById('posterContainer');
    var mainLinks = document.getElementsByClassName('main-links-column');
    var worksFlex = document.getElementsByClassName('works-flex');
    var authors = document.getElementById('authors');
    var footer = document.getElementsByTagName('footer');
    var windowFadeHeight = window.pageYOffset + windowHeight;

    for (var i = 0; i < h2.length; i++) {
      if((getOffset(h2[i]).top) < windowFadeHeight) {
        h2[i].classList.add('animation-fade-in');
      }
    }
    for (i = 0; i < h3.length; i++) {
      if((getOffset(h3[i]).top + 50) < windowFadeHeight) {
        h3[i].classList.add('animation-fade-in');
      }
    }
    for (i = 0; i < mainLinks.length; i++) {
      if((getOffset(mainLinks[i]).top + 100) < windowFadeHeight) {
        mainLinks[i].classList.add('animation-fade-in');
      }
    }
    for (i = 0; i < worksFlex.length; i++) {
      if((getOffset(worksFlex[i]).top + 200) < windowFadeHeight) {
        worksFlex[i].classList.add('animation-fade-in');
      }
    }

    if((getOffset(authors).top + 100) < windowFadeHeight) {
      authors.classList.add('animation-fade-in');
      footer[0].style.opacity = '1';
    } else {
      footer[0].style.opacity = '0';
    }

    if((getOffset(posterContainer).top + 100) < windowFadeHeight) {
      posterContainer.classList.add('animation-fade-in');
    }
  });
}


  
// WORKS

// Works slide

var worksPreviousBtn = document.getElementById('worksPrevious');
var worksNextBtn = document.getElementById('worksNext');

// // Add Works Listeners for works slide

worksNextBtn.addEventListener('click', function() {
  slider('works-item-img', -1);
}, false);

worksPreviousBtn.addEventListener('click', function() {
  slider('works-item-img', 1);
}, false);

// Modal works 

var works = document.getElementById('works');
var worksItemImg = document.getElementsByClassName('works-item-img');
var worksItemArr = [];

for(var i = 0; i < worksItemImg.length; i++) {
  worksItemArr.push(worksItemImg[i].src);
}

var worksImgAlt = [];
for(var i = 0; i < worksItemImg.length; i++) {
  worksImgAlt.push(worksItemImg[i].alt);
}

var worksImgAltItl = [];
for(var i = 0; i < worksItemImg.length; i++) {
  worksImgAltItl.push(worksItemImg[i].dataset.author);
}

works.addEventListener('click', function() {
  modalOpen(worksItemArr, worksItemImg, undefined, worksImgAlt, worksImgAltItl);
});


// POSTER

var poster = document.getElementById('poster');
var posterItemImg = document.getElementsByClassName('poster-img-item');
var posterItemArr = [];

for(var i = 0; i < posterItemImg.length; i++) {
  posterItemArr.push(posterItemImg[i].src);
}

var posterImgAlt = [];
for(var i = 0; i < posterItemImg.length; i++) {
  posterImgAlt.push(posterItemImg[i].alt.toUpperCase());
}

var posterImgAltItl = [];
for(var i = 0; i < posterItemImg.length; i++) {
  posterImgAltItl.push(posterItemImg[i].dataset.author);
}

poster.addEventListener('click', function() {
  modalOpen(posterItemArr, posterItemImg, undefined, posterImgAlt, posterImgAltItl);
});


// AUTHORS

// Authors slide

var authorsPreviousBtn = document.getElementById('authorsPrevious');
var authorsNextBtn = document.getElementById('authorsNext');

// Add Event Listeners for authors slide

authorsPreviousBtn.addEventListener('click', function() {
  slider('authors-item-img', 1);
}, false);
authorsNextBtn.addEventListener('click', function() {
  slider('authors-item-img', -1);
}, false);

// Modal poster 

var authors = document.getElementById('authors');
var authorsItemImg = document.getElementsByClassName('authors-item-img');
var authorsItemImgArr = [];
var authorsImgAlt = [];

for(var i = 0; i < authorsItemImg.length; i++) {
  authorsItemImgArr.push(authorsItemImg[i].src);
}

for(var i = 0; i < authorsItemImg.length; i++) {
  authorsImgAlt.push(authorsItemImg[i].alt);
}

authors.addEventListener('click', function() {
  modalOpen(authorsItemImgArr, authorsItemImg, undefined, authorsImgAlt);
});

}



// ABOUT

if(document.getElementById('about')) {

  // Catalog

  var catalog = document.getElementById('catalog');
  
  catalog.addEventListener('click', function (event) {
    if(event.target.className === 'opacity') {
      bookModalOpen('Catalog');
    }
  });

}



// ARTISTIC COLLECTION

if(document.getElementById('artisticCollectionPage')) {

  // Artistic collection modal 

  var artisticCollection = document.getElementById('artisticCollection');
  var artisticCollectionItemImg = document.getElementsByClassName('artistic-collection-item-img');
  var artisticCollectionItemArr = [];

  for(var i = 0; i < artisticCollectionItemImg.length; i++) {
    artisticCollectionItemArr.push(artisticCollectionItemImg[i].src);
  }

  var artisticCollectionImgAlt = [];
  for(var i = 0; i < artisticCollectionItemImg.length; i++) {
    artisticCollectionImgAlt.push(artisticCollectionItemImg[i].alt);
  }

  var artisticCollectionImgAltItl = [];
  for(var i = 0; i < artisticCollectionItemImg.length; i++) {
    artisticCollectionImgAltItl.push(artisticCollectionItemImg[i].dataset.author);
  }

  artisticCollection.addEventListener('click', function() {
    modalOpen(artisticCollectionItemArr, artisticCollectionItemImg, undefined, artisticCollectionImgAlt, artisticCollectionImgAltItl);
  });

  // Artistic collection tabs

  linkPage1ArtisticCollection = document.getElementById('linkPage1ArtisticCollection');
  linkPage2ArtisticCollection = document.getElementById('linkPage2ArtisticCollection');
  linkPage3ArtisticCollection = document.getElementById('linkPage3ArtisticCollection');

  linkPage1ArtisticCollection.addEventListener('click', function(event) {
    changePageTab(event, 'artisticCollectionPageOne', 'artistic-collection-pages', 'about-us-links-tabs-page', '');
  }, false);
 
  linkPage2ArtisticCollection.addEventListener('click', function(event) {
      changePageTab(event, 'artisticCollectionPageTwo', 'artistic-collection-pages', 'about-us-links-tabs-page', '');
  }, false);

  linkPage3ArtisticCollection.addEventListener('click', function(event) {
    changePageTab(event, 'artisticCollectionPageThree', 'artistic-collection-pages', 'about-us-links-tabs-page', '');
}, false);

  linkPage1ArtisticCollection.click();

}



// AUTHORS

if(document.getElementById('authorsPage')) {

  var gordanaTab = document.getElementById('gordanaTab');
  var micaTab = document.getElementById('micaTab');
  var anaTab = document.getElementById('anaTab');
  var ivanTab = document.getElementById('ivanTab');
  var radomirTab = document.getElementById('radomirTab');
  var bratislavTab = document.getElementById('bratislavTab');
  var simaTab = document.getElementById('simaTab');
  var miodragTab = document.getElementById('miodragTab');
  
  // Author tabs
  
  gordanaTab.addEventListener('click', function(event) {
    changeTab(event, 'gordana', 'authors-tab');
  }, false);
  
  micaTab.addEventListener('click', function(event) {
    changeTab(event, 'mica', 'authors-tab');
  }, false);
  
  anaTab.addEventListener('click', function(event) {
    changeTab(event, 'ana', 'authors-tab');
  }, false);
  
  ivanTab.addEventListener('click', function(event) {
    changeTab(event, 'ivan', 'authors-tab');
  }, false);
  
  radomirTab.addEventListener('click', function(event) {
    changeTab(event, 'radomir', 'authors-tab');
  }, false);

  bratislavTab.addEventListener('click', function(event) {
    changeTab(event, 'bratislav', 'authors-tab');
  }, false);
  
  simaTab.addEventListener('click', function(event) {
    changeTab(event, 'sima', 'authors-tab');
  }, false);
  
  miodragTab.addEventListener('click', function(event) {
    changeTab(event, 'miodrag', 'authors-tab');
  }, false);
  
  
  gordanaTab.click();
  
  // Author modal 

  var modalWorksGordana = document.getElementById('modalWorksGordana');
  var modalWorksGordanaItemImg = document.getElementsByClassName('authors-works-item-img-gordana');
  var modalWorksGordanaItemArr = [];

  for(var i = 0; i < modalWorksGordanaItemImg.length; i++) {
    modalWorksGordanaItemArr.push(modalWorksGordanaItemImg[i].src);
  }

  var modalWorksGordanaImgAlt = [];
  for(var i = 0; i < modalWorksGordanaItemImg.length; i++) {
    modalWorksGordanaImgAlt.push(modalWorksGordanaItemImg[i].alt);
  }

  var modalWorksGordanaImgAltItl = [];
  for(var i = 0; i < modalWorksGordanaItemImg.length; i++) {
    modalWorksGordanaImgAltItl.push(modalWorksGordanaItemImg[i].dataset.author);
  }

  modalWorksGordana.addEventListener('click', function() {
    modalOpen(modalWorksGordanaItemArr, modalWorksGordanaItemImg, undefined, modalWorksGordanaImgAlt, modalWorksGordanaImgAltItl);
  });

  var modalWorksMica = document.getElementById('modalWorksMica');
  var modalWorksMicaItemImg = document.getElementsByClassName('authors-works-item-img-mica');
  var modalWorksMicaItemArr = [];

  for(var i = 0; i < modalWorksMicaItemImg.length; i++) {
    modalWorksMicaItemArr.push(modalWorksMicaItemImg[i].src);
  }

  var modalWorksMicaImgAlt = [];
  for(var i = 0; i < modalWorksMicaItemImg.length; i++) {
    modalWorksMicaImgAlt.push(modalWorksMicaItemImg[i].alt);
  }

  var modalWorksMicaImgAltItl = [];
  for(var i = 0; i < modalWorksMicaItemImg.length; i++) {
    modalWorksMicaImgAltItl.push(modalWorksMicaItemImg[i].dataset.author);
  }

  modalWorksMica.addEventListener('click', function() {
    modalOpen(modalWorksMicaItemArr, modalWorksMicaItemImg, undefined, modalWorksMicaImgAlt, modalWorksMicaImgAltItl);
  });

  var modalWorksAna = document.getElementById('modalWorksAna');
  var modalWorksAnaItemImg = document.getElementsByClassName('authors-works-item-img-ana');
  var modalWorksAnaItemArr = [];

  for(var i = 0; i < modalWorksAnaItemImg.length; i++) {
    modalWorksAnaItemArr.push(modalWorksAnaItemImg[i].src);
  }

  var modalWorksAnaImgAlt = [];
  for(var i = 0; i < modalWorksAnaItemImg.length; i++) {
    modalWorksAnaImgAlt.push(modalWorksAnaItemImg[i].alt);
  }

  var modalWorksAnaImgAltItl = [];
  for(var i = 0; i < modalWorksAnaItemImg.length; i++) {
    modalWorksAnaImgAltItl.push(modalWorksAnaItemImg[i].dataset.author);
  }

  modalWorksAna.addEventListener('click', function() {
    modalOpen(modalWorksAnaItemArr, modalWorksAnaItemImg, undefined, modalWorksAnaImgAlt, modalWorksAnaImgAltItl);
  });

  var modalWorksIvan = document.getElementById('modalWorksIvan');
  var modalWorksIvanItemImg = document.getElementsByClassName('authors-works-item-img-ivan');
  var modalWorksIvanItemArr = [];

  for(var i = 0; i < modalWorksIvanItemImg.length; i++) {
    modalWorksIvanItemArr.push(modalWorksIvanItemImg[i].src);
  }

  var modalWorksIvanImgAlt = [];
  for(var i = 0; i < modalWorksIvanItemImg.length; i++) {
    modalWorksIvanImgAlt.push(modalWorksIvanItemImg[i].alt);
  }

  var modalWorksIvanImgAltItl = [];
  for(var i = 0; i < modalWorksIvanItemImg.length; i++) {
    modalWorksIvanImgAltItl.push(modalWorksIvanItemImg[i].dataset.author);
  }

  modalWorksIvan.addEventListener('click', function() {
    modalOpen(modalWorksIvanItemArr, modalWorksIvanItemImg, undefined, modalWorksIvanImgAlt, modalWorksIvanImgAltItl);
  });

  var modalWorksRadomir = document.getElementById('modalWorksRadomir');
  var modalWorksRadomirItemImg = document.getElementsByClassName('authors-works-item-img-radomir');
  var modalWorksRadomirItemArr = [];

  for(var i = 0; i < modalWorksRadomirItemImg.length; i++) {
    modalWorksRadomirItemArr.push(modalWorksRadomirItemImg[i].src);
  }

  var modalWorksRadomirImgAlt = [];
  for(var i = 0; i < modalWorksRadomirItemImg.length; i++) {
    modalWorksRadomirImgAlt.push(modalWorksRadomirItemImg[i].alt);
  }

  var modalWorksRadomirImgAltItl = [];
  for(var i = 0; i < modalWorksRadomirItemImg.length; i++) {
    modalWorksRadomirImgAltItl.push(modalWorksRadomirItemImg[i].dataset.author);
  }

  modalWorksRadomir.addEventListener('click', function() {
    modalOpen(modalWorksRadomirItemArr, modalWorksRadomirItemImg, undefined, modalWorksRadomirImgAlt, modalWorksRadomirImgAltItl);
  });

  var modalWorksBratislav = document.getElementById('modalWorksBratislav');
  var modalWorksBratislavItemImg = document.getElementsByClassName('authors-works-item-img-bratislav');
  var modalWorksBratislavItemArr = [];

  for(var i = 0; i < modalWorksBratislavItemImg.length; i++) {
    modalWorksBratislavItemArr.push(modalWorksBratislavItemImg[i].src);
  }

  var modalWorksBratislavImgAlt = [];
  for(var i = 0; i < modalWorksBratislavItemImg.length; i++) {
    modalWorksBratislavImgAlt.push(modalWorksBratislavItemImg[i].alt);
  }

  var modalWorksBratislavImgAltItl = [];
  for(var i = 0; i < modalWorksBratislavItemImg.length; i++) {
    modalWorksBratislavImgAltItl.push(modalWorksBratislavItemImg[i].dataset.author);
  }

  modalWorksBratislav.addEventListener('click', function() {
    modalOpen(modalWorksBratislavItemArr, modalWorksBratislavItemImg, undefined, modalWorksBratislavImgAlt, modalWorksBratislavImgAltItl);
  });

  var modalWorksSima = document.getElementById('modalWorksSima');
  var modalWorksSimaItemImg = document.getElementsByClassName('authors-works-item-img-sima');
  var modalWorksSimaItemArr = [];

  for(var i = 0; i < modalWorksSimaItemImg.length; i++) {
    modalWorksSimaItemArr.push(modalWorksSimaItemImg[i].src);
  }

  var modalWorksSimaImgAlt = [];
  for(var i = 0; i < modalWorksSimaItemImg.length; i++) {
    modalWorksSimaImgAlt.push(modalWorksSimaItemImg[i].alt);
  }

  var modalWorksSimaImgAltItl = [];
  for(var i = 0; i < modalWorksSimaItemImg.length; i++) {
    modalWorksSimaImgAltItl.push(modalWorksSimaItemImg[i].dataset.author);
  }

  modalWorksSima.addEventListener('click', function() {
    modalOpen(modalWorksSimaItemArr, modalWorksSimaItemImg, undefined, modalWorksSimaImgAlt, modalWorksSimaImgAltItl);
  });

  var modalWorksMiodrag = document.getElementById('modalWorksMiodrag');
  var modalWorksMiodragItemImg = document.getElementsByClassName('authors-works-item-img-miodrag');
  var modalWorksMiodragItemArr = [];

  for(var i = 0; i < modalWorksMiodragItemImg.length; i++) {
    modalWorksMiodragItemArr.push(modalWorksMiodragItemImg[i].src);
  }

  var modalWorksMiodragImgAlt = [];
  for(var i = 0; i < modalWorksMiodragItemImg.length; i++) {
    modalWorksMiodragImgAlt.push(modalWorksMiodragItemImg[i].alt);
  }

  var modalWorksMiodragImgAltItl = [];
  for(var i = 0; i < modalWorksMiodragItemImg.length; i++) {
    modalWorksMiodragImgAltItl.push(modalWorksMiodragItemImg[i].dataset.author);
  }

  modalWorksMiodrag.addEventListener('click', function() {
    modalOpen(modalWorksMiodragItemArr, modalWorksMiodragItemImg, undefined, modalWorksMiodragImgAlt, modalWorksMiodragImgAltItl);
  });
  
  
}



// CONTACT

if(document.getElementById('contact')) {

mapboxgl.accessToken = 'pk.eyJ1IjoibXJpdmFudnRzIiwiYSI6ImNqdjlvOTU5cTByMGo0YW15NWhrdGNobnQifQ.cFG1BjYUsBMH_R3NVJNvng';
var map = new mapboxgl.Map({
container: 'map', 
style: 'mapbox://styles/mapbox/bright-v9',
center: [21.008412, 43.619204], 
zoom: 15 
});
 
map.addControl(new mapboxgl.NavigationControl());

var marker = new mapboxgl.Marker({color: '#ada074'});

marker.setLngLat([
    21.008412,
    43.619204
]);

marker.addTo(map);

var layerList = document.getElementById('map-menu');
var inputs = layerList.getElementsByTagName('input');
 
function switchLayer(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
}
 
for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchLayer;
}

var send = document.getElementById('send');
var ime = document.getElementById('ime');
var email = document.getElementById('email');
var message = document.getElementById('message');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var letters = /^[A-Za-z]+$/;
var counter = 1;

send.addEventListener('click', function(event) {
  event.preventDefault();
  var storageObject = {};
  
  if(ime.value.match(letters)) {
    var imeVal = ime.value;
  } else {
    alert('Име мора садржати само карактере алфабета!');
    ime.focus();
    return;
  }

  if(email.value.match(mailformat)){
    var emailVal = email.value;
  } else {
    alert("Унели сте неправилну email адресу!");
    email.focus();
    return;
  }

  if(message.value.length > 20) {
    var messageVal = message.value;
  } else {
    alert('Порука мора имати више од 20 карактера!');
    message.focus();
    return;
  }

  storageObject = {
    'name': imeVal,
    'email': emailVal,
    'message': messageVal
  }

  var storageObjectStr = JSON.stringify(storageObject);

  localStorage.setItem('person' + counter, storageObjectStr);
  counter++;
});
  
}





