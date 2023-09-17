const navBtn = document.getElementById('nav-btn');
const navEl = document.getElementById('header-nav');
const navBack = document.getElementById('nav-back');

navBtn.addEventListener('click', (event) => {
	navEl.style.display = 'flex';
});

navBack.addEventListener('click', (event) => {
	navEl.style.display = 'none';
});
