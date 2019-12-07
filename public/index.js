const searchBtn = document.getElementById('class-search-btn');
const searchInput = document.getElementById('class-search-input');



searchBtn.addEventListener('click', event => {
  const inputIndex = searchInput.value.match(/[0-9]/).index;
  const major = searchInput.value.substring(0, inputIndex).trim();
  const courseNumber = searchInput.value.substr(inputIndex, 3);

  window.location = '/search/' + major + courseNumber;
})

