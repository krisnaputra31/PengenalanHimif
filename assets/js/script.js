// same like $(document).ready(function() {}); but in vanilla js
document.addEventListener("DOMContentLoaded", () => {
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

  // init for fullscreen js
  // var myFullpage = new fullpage('#fullpage', {
  new fullpage('#fullpage', {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['home', 'himif', 'himif2', 'himif3', 'family', 'family1', 'events', 'footer'],
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
    sectionsColor: ['#42F2F7', '#50C9CE', '#42F2F7', '#50C9CE', '#42F2F7', '#50C9CE', '#42F2F7', '#134E4A'],
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
    lazyLoading: true
  });

  //AOS Init
  AOS.init({
    once: true
  });

  // type effect js
  new TypeIt("#himifuniv", {
    waitUntilVisible: true,
    speed: 44
  }).pause(15).delete(3, { instant: true }).pause(01).delete(12, { instant: true }).pause(2).delete(8, { instant: true }).pause(823).type("H").pause(58).type("I").pause(25).type("M").pause(95).type("I").pause(15).type("F").pause(73).type(" ").pause(23).type("-").pause(53).type(" ").pause(012).type("U").pause(71).type("N").pause(67).type("I").pause(67).type("V").pause(53).type("E").pause(32).type("R").pause(49).type("S").pause(80).type("I").pause(69).type("T").pause(83).type("A").pause(08).type("S").pause(86).type(" ").pause(10).type("M").pause(16).type("D").pause(85).type("P").go();

  new TypeIt("#homeText", {
    waitUntilVisible: true,
    speed: 50
  }).type("I").pause(35).type("n").pause(27).type("g").pause(14).type("i").pause(18).type("n").pause(22).type(" ").pause(22).type("t").pause(7).type("a").pause(13).type("h").pause(18).type("u").pause(23).type(" ").pause(16).type("a").pause(10).type("p").pause(8).type("a").pause(19).type(" ").pause(17).type("i").pause(10).type("t").pause(16).type("u").pause(8).type(" ").pause(19).type("h").pause(19).type("i").pause(10).type("m").pause(11).type("i").pause(40).type("f").pause(54).type("?").pause(26).type("?").pause(30).type("?").pause(1888).break().pause(16).break().pause(49).type("S").pause(24).type("c").pause(45).type("r").pause(11).type("o").pause(45).type("l").pause(19).type("l").pause(20).type(" ").pause(41).type("d").pause(6).type("u").pause(15).type("l").pause(18).type("u").pause(12).type(" ").pause(28).type("d").pause(31).type("i").pause(73).delete(1).pause(24).type("o").pause(12).type("n").pause(22).type(" ").pause(42).delete(1).pause(14).type("g").pause(19).type(" ").pause(10).type("k").pause(9).type("e").pause(11).type(" ").pause(41).type("b").pause(15).type("a").pause(11).type("w").pause(11).type("a").pause(14).type("h").pause(90).type(".").pause(16).type(".").pause(10).type(".").pause(300000).delete(99).type("Selamat Anda menemukan Easter Egg Makanan Kesukaan Pembuat Website adalah kentang goreng").pause(100).delete(99).type("Kirim pesan tersembunyinya ke pembuat web di wa dengan nomor 089525336399").delete(77).type("just an easter egg...").pause(1000).type("Right?.?.?").go();

  new TypeIt("#youth", {
    strings: ["Youth Organization"],
    speed: 20,
    waitUntilVisible: true
  }).go();

  new TypeIt("#pengertianHimif", {
    strings: ["Himif atau Himpunan Mahasiswa Informatika merupakan Himpunan khusus mahasiswa Informatika lebih tepatnya mahasiswa Informatika Universitas Multi Data Palembang."],
    speed: 20,
    waitUntilVisible: true
  }).go();


  new TypeIt("#visi", {
    lifeLike: false,
    waitUntilVisible: true,
    speed: 50
  }).type("I").pause(44).type("n").pause(66).type("i").pause(06).type(" ").pause(013).type("b").pause(15).type("l").pause(26).type("o").pause(09).type("k").pause(36).type(" ").pause(79).type("v").pause(29).type("i").pause(30).type("s").pause(31).type("i").pause(919).delete(4, { instant: true }).pause(54).delete(5, { instant: true }).pause(85).delete(4, { instant: true }).pause(493).type("v").pause(45).type("i").pause(24).type("s").pause(51).type("i").pause(68).type(" ").pause(67).type("s").pause(45).type("a").pause(66).type("j").pause(22).type("a").pause(1000).delete(4, { instant: true }).pause(82).type("b").pause(31).type("a").pause(65).type("e").pause(1000).delete(3, { instant: true }).pause(91).delete(5, { instant: true }).pause(03).type("V").pause(98).type("i").pause(54).type("s").pause(52).type("i").pause(23).type(".").pause(77).type(".").pause(63).type(".").go();

  new TypeIt("#misi", {
    lifeLike: false,
    waitUntilVisible: true,
    speed: 40
  }).type("i").pause(64).type("n").pause(53).type("i").pause(22).type(" ").pause(19).type("j").pause(70).type("u").pause(42).type("g").pause(4).type("a").pause(4).type(" ").pause(63).type("b").pause(20).type("l").pause(22).type("o").pause(87).type("k").pause(80).type(" ").pause(31).type("m").pause(74).type("i").pause(04).type("s").pause(23).type("i").pause(651).delete(4, { instant: true }).pause(99).delete(5, { instant: true }).pause(2).delete(5, { instant: true }).pause(8).delete(4, { instant: true }).pause(13).type("m").pause(25).type("a").pause(92).type("k").pause(51).type("s").pause(87).type("u").pause(33).type("d").pause(53).type("n").pause(07).type("y").pause(2).type("a").pause(21).type(" ").pause(26).type("m").pause(61).type("i").pause(40).type("s").pause(00).type("i").pause(275).delete(4, { instant: true }).pause(01).delete(10, { instant: true }).pause(73).type("m").pause(97).type("i").pause(53).type("s").pause(30).type("i").pause(26).type(" ").pause(44).type("s").pause(44).type("a").pause(66).type("j").pause(19).type("a").pause(38).delete(4, { instant: true }).pause(61).delete(5, { instant: true }).pause(54).type("m").pause(57).type("i").pause(4).type("s").pause(2).type("a").pause(75).type("i").pause(54).delete(1).pause(27).delete(1).pause(99).delete(1).pause(24).delete(1).pause(60).delete(1).pause(09).type("M").pause(85).type("i").pause(1).type("s").pause(67).type("i").pause(17).type(".").pause(61).type(".").pause(96).type(".").go();

  new TypeIt("#makna", {
    lifeLike: false,
    waitUntilVisible: true,
    speed: 30
  }).type("M").pause(33).type("A").pause(8).type("K").pause(84).type("N").pause(4).type("A").pause(07).type(" ").pause(17).type("L").pause(87).type("O").pause(6).type("G").pause(31).type("O").pause(129).type(" ").pause(13).type("E").pause(06).type("H").pause(39).type(" ").pause(43).type("W").pause(15).type("A").pause(11).type("I").pause(78).type("T").pause(35).type(" ").pause(55).type("K").pause(49).type("O").pause(70).type("K").pause(18).type(" ").pause(42).type("C").pause(57).type("P").pause(99).delete(1).pause(31).type("A").pause(81).type("S").pause(34).delete(1).pause(99).type("P").pause(00).type("S").pause(1000).delete(4, { instant: true }).pause(96).delete(4, { instant: true }).pause(1).delete(5, { instant: true }).pause(1).delete(3, { instant: true }).pause(1).delete(5, { instant: true }).pause(1).delete(6, { instant: true }).pause(90).type("M").pause(87).type("a").pause(18).type("k").pause(69).type("n").pause(23).type("a").pause(18).type(" ").pause(61).type("L").pause(11).type("o").pause(08).type("g").pause(59).type("o").pause(59).type(" ").pause(47).type("n").pause(25).type("a").pause(58).type("h").pause(70).type("h").pause(04).type("h").pause(85).type(" ").pause(67).type("i").pause(11).type("n").pause(25).type("i").pause(62).type(" ").pause(72).type("b").pause(4).type("e").pause(15).type("n").pause(22).type("e").pause(55).type("r").pause(1000).delete(5, { instant: true }).pause(45).delete(4, { instant: true }).pause(98).delete(6, { instant: true }).pause(87).delete(1).go();


  new TypeIt("#acara", {
    lifeLike: false,
    waitUntilVisible: true,
    speed: 40
  }).type("B").pause(69).type("e").pause(23).type("b").pause(18).type("e").pause(38).type("r").pause(61).type("a").pause(38).type("p").pause(46).type("a").pause(42).type(" ").pause(18).type("a").pause(09).type("c").pause(88).type("a").pause(28).type("r").pause(00).type("a").pause(64).type(" ").pause(06).type("t").pause(20).type("e").pause(10).type("r").pause(44).type("a").pause(32).type("k").pause(44).type("h").pause(47).type("i").pause(60).type("r").pause(39).type(" ").pause(01).type("y").pause(04).type("a").pause(41).type("n").pause(62).type("g").pause(60).type(" ").pause(44).type("k").pause(01).type("a").pause(21).type("m").pause(64).type("i").pause(20).type(" ").pause(40).type("s").pause(27).type("e").pause(27).type("l").pause(17).type("e").pause(88).type("n").pause(43).type("g").pause(37).type("g").pause(03).type("a").pause(65).type("r").pause(09).type("a").pause(10).type("k").pause(37).type("a").pause(23).type("n").pause(833).type(".").pause(13).type(".").pause(07).type(".").pause(207).delete(1).pause(01).delete(1).pause(6).delete(1).pause(1).delete(1).pause(0).delete(1).pause(0).delete(1).pause(0).delete(1).pause(0).delete(1).pause(1).delete(1).pause(2).delete(1).pause(1).delete(1).pause(3).delete(1).pause(7).delete(1).pause(2).delete(1).pause(9).delete(1).pause(9).delete(1).pause(0).delete(1).pause(1).delete(1).pause(1).delete(1).pause(0).delete(1).pause(0).delete(1).pause(1).delete(1).pause(0).delete(1).pause(1).delete(1).pause(9).delete(1).pause(0).delete(1).pause(2).delete(1).pause(0).delete(1).pause(1).delete(1).pause(1).delete(1).pause(2).delete(1).pause(2).delete(1).pause(8).delete(1).pause(1).delete(1).pause(1).delete(1).pause(1).delete(1).pause(0).delete(1).pause(0).delete(1).pause(1).delete(1).pause(0).delete(1).pause(0).delete(1).pause(0).delete(1).pause(1).delete(1).pause(2).delete(1).pause(9).delete(1).pause(1).delete(1).pause(2).delete(1).pause(0).delete(1).pause(1).delete(1).pause(9).delete(1).pause(90).type("E").pause(15).type("v").pause(00).type("e").pause(06).type("n").pause(16).type("t").pause(52).type("s").pause(15).type(".").pause(96).type(".").pause(49).type(".").pause(34).delete(1).pause(67).delete(1).pause(63).delete(1).go();

});

