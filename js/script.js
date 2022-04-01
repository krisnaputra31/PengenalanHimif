document.addEventListener("DOMContentLoaded", function () {



  // card for family
  const windowWidth = window.innerWidth;
  const familyNoBidang = document.getElementById("familyWithoutBidang");
  const bidang = document.getElementById("ketuaBidang")
  if (windowWidth > 768) {
    familyNoBidang.innerHTML =
      `
    <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="card card-resize">
                <img src="assets/img/family/1.png" class="card-img-top" alt="Egi Fransesco Saputra">
                <div class="card-body">
                  <h5 class="card-title rubik">Egi Fransisco Saputra</h5>
                  <p class="card-text rubik">Ketua Himpunan</p>
                </div>
              </div>
            </div>
            <div class="col-4 ">
              <div class="card card-resize">
                <img src=" assets/img/family/2.png" class="card-img-top" alt="Muhammad Fauzan Marzuki">
                <div class="card-body">
                  <h5 class="card-title rubik">Muhammad Fauzan Marzuki</h5>
                  <p class="card-text rubik">Wakil Ketua Himpunan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="card card-resize">
                <img src="assets/img/family/3.png" class="card-img-top" alt="Muhammad Ricky<">
                <div class="card-body">
                  <h5 class="card-title rubik">Muhammad Ricky</h5>
                  <p class="card-text rubik">Sekretaris 1</p>
                </div>
              </div>
            </div>
            <div class="col-4 ">
              <div class="card card-resize">
                <img src=" assets/img/family/4.png" class="card-img-top" alt="Tarissa">
                <div class="card-body">
                  <h5 class="card-title rubik">Tarissa</h5>
                  <p class="card-text rubik">Sekretaris 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="card card-resize">
                <img src="assets/img/family/5.png" class="card-img-top" alt="Thingkilia Finnatia Husin">
                <div class="card-body">
                  <h5 class="card-title rubik">Thingkilia Finnatia Husin</h5>
                  <p class="card-text rubik">Bendahara 1</p>
                </div>
              </div>
            </div>
            <div class="col-4 ">
              <div class="card card-resize">
                <img src=" assets/img/family/6.png" class="card-img-top" alt="Leonica Chandra">
                <div class="card-body">
                  <h5 class="card-title rubik">Leonica Chandra</h5>
                  <p class="card-text rubik">Bendahara 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    bidang.innerHTML =
      `
    <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="card card-resize">
                <img src="assets/img/family/bidang/1.png" class="card-img-top" alt="Axel Leovincent">
                <div class="card-body">
                  <h5 class="card-title rubik">Axel Leovincent</h5>
                  <p class="card-text rubik">Ketua Bidang Pendidikan dan Teknologi</p>
                </div>
              </div>
            </div>
            <div class="col-4 ">
              <div class="card card-resize">
                <img src=" assets/img/family/bidang/2.png" class="card-img-top" alt="Ferdi Jiranda Sinaga">
                <div class="card-body">
                  <h5 class="card-title rubik">Ferdi Jiranda Sinaga</h5>
                  <p class="card-text rubik">Ketua Bidang Kreatifitas dan Multimedia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="card card-resize">
                <img src="assets/img/family/bidang/3.png" class="card-img-top" alt="Michael">
                <div class="card-body">
                  <h5 class="card-title rubik">Michael</h5>
                  <p class="card-text rubik">Ketua Bidang Masyarakat dan Kerumahtanggaan</p>
                </div>
              </div>
            </div>
            <div class="col-4 ">
              <div class="card card-resize">
                <img src=" assets/img/family/bidang/4.png" class="card-img-top" alt="M. Fajri Septian Dwi Cahyo">
                <div class="card-body">
                  <h5 class="card-title rubik">M. Fajri Septian Dwi Cahyo</h5>
                  <p class="card-text rubik">Ketua Bidang Sosial dan Dana Usaha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  } else {
    familyNoBidang.innerHTML =
      `
    <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <div class="card card-resize">
                <img src="assets/img/family/1.png" class="card-img-top" alt="Egi Fransesco Saputra">
                <div class="card-body">
                  <h5 class="card-title rubik">Egi Fransisco Saputra</h5>
                  <p class="card-text rubik">Ketua Himpunan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <div class="card card-resize">
                <img src=" assets/img/family/2.png" class="card-img-top" alt="Muhammad Fauzan Marzuki">
                <div class="card-body">
                  <h5 class="card-title rubik">Muhammad Fauzan Marzuki</h5>
                  <p class="card-text rubik">Wakil Ketua Himpunan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <div class="card card-resize">
                <img src="assets/img/family/3.png" class="card-img-top" alt="Muhammad Ricky<">
                <div class="card-body">
                  <h5 class="card-title rubik">Muhammad Ricky</h5>
                  <p class="card-text rubik">Sekretaris 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <div class="card card-resize">
                <img src=" assets/img/family/4.png" class="card-img-top" alt="Tarissa">
                <div class="card-body">
                  <h5 class="card-title rubik">Tarissa</h5>
                  <p class="card-text rubik">Sekretaris 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <div class="card card-resize">
                <img src="assets/img/family/5.png" class="card-img-top" alt="Thingkilia Finnatia Husin">
                <div class="card-body">
                  <h5 class="card-title rubik">Thingkilia Finnatia Husin</h5>
                  <p class="card-text rubik">Bendahara 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <div class="card card-resize">
                <img src="assets/img/family/6.png" class="card-img-top" alt="Leonica Chandra">
                <div class="card-body">
                  <h5 class="card-title rubik">Leonica Chandra</h5>
                  <p class="card-text rubik">Bendahara 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    bidang.innerHTML =
      `
      <div class="slide">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="card card-resize">
              <img src="assets/img/family/bidang/1.png" class="card-img-top" alt="Axel Leovincent">
              <div class="card-body">
                <h5 class="card-title rubik">Axel Leovincent</h5>
                <p class="card-text rubik">Ketua Bidang Pendidikan dan Teknologi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="card card-resize">
              <img src=" assets/img/family/bidang/2.png" class="card-img-top" alt="Ferdi Jiranda Sinaga">
              <div class="card-body">
                <h5 class="card-title rubik">Ferdi Jiranda Sinaga</h5>
                <p class="card-text rubik">Ketua Bidang Kreatifitas dan Multimedia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="card card-resize">
              <img src="assets/img/family/bidang/3.png" class="card-img-top" alt="Michael">
              <div class="card-body">
                <h5 class="card-title rubik">Michael</h5>
                <p class="card-text rubik">Ketua Bidang Masyarakat dan Kerumahtanggaan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8 ">
            <div class="card card-resize">
              <img src=" assets/img/family/bidang/4.png" class="card-img-top" alt="M. Fajri Septian Dwi Cahyo">
              <div class="card-body">
                <h5 class="card-title rubik">M. Fajri Septian Dwi Cahyo</h5>
                <p class="card-text rubik">Ketua Bidang Sosial dan Dana Usaha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
  // close for card family


  //AOS Init
  AOS.init({
    once: true
  });
  // init for fullscreen js
  // var myFullpage = new fullpage('#fullpage', {
  new fullpage('#fullpage', {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['home', 'himif', 'himif2', 'himif3', 'family', 'family1', 'events'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 750,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: ['#42F2F7', '#50C9CE', '#42F2F7', '#50C9CE', '#42F2F7', '#50C9CE', '#42F2F7'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
    dropEffect: false,
    dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999 },
    waterEffect: false,
    waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
    cards: false,
    cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    // //events
    // onLeave: function (origin, destination, direction) { },
    // afterLoad: function (origin, destination, direction) { },
    // afterRender: function () { },
    // afterResize: function (width, height) { },
    // afterReBuild: function () { },
    // afterResponsive: function (isResponsive) { },
    // afterSlideLoad: function (section, origin, destination, direction) { },
    // onSlideLeave: function (section, origin, destination, direction) { }
  });

});

