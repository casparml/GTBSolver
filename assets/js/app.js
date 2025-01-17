// Window Height fix //
function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();


// Dynamic favicon //
window.onload = function () {
	const faviconICO = document.getElementById('faviconICO')
	const faviconSVG = document.getElementById('faviconSVG')
	const faviconPNG = document.getElementById('faviconPNG')
  
	document.addEventListener('visibilitychange', function (e) {
	  const isPageActive = !document.hidden
	  toggle(isPageActive)
	})
  
	function toggle(isPageActive) {
	  if (isPageActive) {
		faviconICO.href = '../assets/images/icons/favicon.ico'
		faviconSVG.href = '../assets/images/icons/favicon.svg'
		faviconPNG.href = '../assets/images/icons/favicon-96x96.png'
	  } else {
		faviconICO.href = '../assets/images/icon/favicon-away.ico'
		faviconSVG.href = '../assets/images/icons/favicon-away.svg'
		faviconPNG.href = '../assets/images/icons/favicon-96x96-away.png'
	  }
	}
}


// Mobile nav //
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
};

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
};

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
		nav.classList.add('scroll-header');
    } else {
		nav.classList.remove('scroll-header');
	};
};

window.addEventListener('scroll', scrollHeader);

// Dark and light mode
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
};

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});