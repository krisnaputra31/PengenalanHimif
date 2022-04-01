document.addEventListener("DOMContentLoaded", function () {

  //AOS Init
  AOS.init({
    once: true
  });

  // init for fullscreen js

  var myFullpage = new fullpage('#fullpage', {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['home', 'himif', 'himif2', 'himif3', 'family'],
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

  //methods
  // fullpage_api.setAllowScrolling(true);


  // navbar section
  const navbarUl = document.querySelectorAll(".ul-from-nav");

});

