const searchBarContainer1El = document.querySelector('.search-bar-container');
const magnifierEl = document.querySelector('.magnifier');
const input = document.querySelector('.input');

magnifierEl.addEventListener('click', () => {
	searchBarContainer1El.classList.toggle('active');

	if (!searchBar.classList.contains('active')) {
		input.focus();
	}
});
