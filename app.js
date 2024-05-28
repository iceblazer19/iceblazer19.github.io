const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a ');
const header = document.querySelector('.header.container');
const navbar_links = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const home = document.querySelector('.header .brand h1');
const homeSpan = document.querySelector('.header .brand h1 span');
// const language = document.querySelector('.header .nav-bar .nav-list .language');
// const lang = document.querySelector('.header .nav-bar .nav-list li .language');
var lang = 0;

menu.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    menu.classList.add('black-color');
    menu.style.borderColor = '#505050';
    ;
  }
  else {
    menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    navbar_links.forEach(link => link.style.color = 'white');
    menu.classList.remove('black-color');
    menu.style.borderColor = 'white';
  }

});

// language.addEventListener('click', () => {
//   if (language.classList.contains('active')) {

//     language.classList.toggle('active');
//     ;
//   }
//   else {

//     language.classList.toggle('active');
//   }

// }); 



document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (menu.classList.contains('active')) {
    navbar_links.forEach(link => link.style.color = 'white');
  } 
  else {
    if (scroll_position > 250) {
      header.style.backgroundColor = '#29323c';
      home.style.color = '#fdf6eb';
      homeSpan.style.color = '#d0a465';
      navbar_links.forEach(link => link.style.color = 'white');
      menu.classList.remove('black-color');
      menu.style.borderColor = 'white';
    } else {
      header.style.backgroundColor = 'transparent';
      home.style.color = '#050505';
      homeSpan.style.color = '#d0a465';
      navbar_links.forEach(link => link.style.color = 'black');
      menu.classList.add('black-color');
      menu.style.borderColor = 'black';
    }
  }
});


menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    }
    // menu.classList.toggle('active');
    // mobile_menu.classList.toggle('active');
  });
});

function changeLang() {

  if (lang == 0) {
    lang = 1;
    document.getElementById("language").textContent = "language: indonesia";
    document.getElementById("changeprofile").textContent = "Seorang mahasiswa yang termotivasi dan berorientasi pada detail yang mengejar gelar di Teknik Informatika dengan semangat untuk pengembangan .NET. Bersemangat untuk menerapkan pengetahuan yang diperoleh di dalam kelas ke proyek dunia nyata, memberikan kontribusi positif dalam lingkungan tim yang dinamis, dan meningkatkan keterampilan dalam pengembangan perangkat lunak, terutama fokus pada teknologi .NET.";
    document.getElementById("changework").textContent = "Bekerja sebagai intern pengembang sistem selama 10 bulan. Unggul sebagai Pengembang .NET, menunjukkan keahlian dalam pemrograman, debugging, dan mengoptimalkan solusi perangkat lunak. Berperan penting dalam pengembangan empat proyek, berkontribusi pada penyelesaian dan implementasi yang sukses.";
  }
  else {
    lang = 0; 
    document.getElementById("language").textContent = "language: english";
    document.getElementById("changeprofile").textContent = "A motivated and detail-oriented undergraduate student pursuing a degree in Computer Science with a passion for .NET development. Eager to apply knowledge gained in the classroom to real-world projects, contribute positively to a dynamic team environment, and further enhance skills in software development, particularly focusing on .NET technologies.";
    document.getElementById("changework").textContent = "Worked as a system developer intern for 10 months. Excelled as a .NET Developer, demonstrating proficiency in coding, debugging, and optimizing software solutions. Played a important role in the development of four projects, contributing to their successful completion and implementation.";
  }

  // lang.classList.toggle('english');
  // document.getElementById("language").textContent = "indonesia";
  // document.getElementById("change").textContent = "test change language";
}