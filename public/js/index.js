const searchBtn = document.getElementById('class-search-btn');
const searchInput = document.getElementById('class-search-input');
let countries;


axios.get('/home')
  .then(res => {
    countries = res.data;
  }).catch(err => {
    console.log(err);
  });

searchBtn.addEventListener('click', event => {
  const courseName = searchInput.value;
  const inputIndex = searchInput.value.match(/[0-9]/).index;
  const major = searchInput.value.substring(0, inputIndex).trim();
  const courseNumber = searchInput.value.substr(inputIndex, 3);

  window.location = '/search/' + major + courseNumber + '/' + courseName + '/';
})




// inp from text field and arr contains matched values
var currentFocus;
searchInput.addEventListener("input", e => {
  let matchList, matchItem;
  let val = searchInput.value;

  // close any already open lists of matched values
  closeAllList();
  if (!val) return false;
  currentFocus = -1;

  // Create a div that will contain the match values
  matchList = document.createElement("div");
  matchList.id = "autocomplete-list";
  matchList.setAttribute("class", "autocomplete-items");

  // append new element to autocomplete container
  searchInput.parentNode.appendChild(matchList);

  countries.forEach(country => {
    const matchIndex = country
      .toLowerCase()
      .indexOf(searchInput.value.toLowerCase());

    if (matchIndex != -1) {
      // matches.push(country);
      matchItem = document.createElement("div");
      matchItem.classList.add("match-item");
      const leftString = country.substring(0, matchIndex);
      const boldString = country.substr(matchIndex, val.length);
      const rightString = country.substr(matchIndex + val.length);
      matchItem.innerHTML =
        leftString + "<strong>" + boldString + "</strong>" + rightString;
      matchItem.innerHTML += '<input type="hidden" value="' + country + '">';
      //listen to clicks on match item
      matchItem.addEventListener("click", e => {
        // insert value to input field
        searchInput.value = e.target.textContent;
        // close list of matched values
        closeAllList();
      });
      matchList.appendChild(matchItem);
    }
  });
});

//
searchInput.addEventListener("keydown", e => {
  //
  let matchItems = document.getElementsByClassName("match-item");
  switch (e.keyCode) {
    // if arrow down was pressed
    case 40: {
      currentFocus++;
      // highlight current focus item
      addActive(matchItems);
      e.preventDefault();
      break;
    }
    // arrow up
    case 38: {
      currentFocus--;
      addActive(matchItems);
      e.preventDefault();
      break;
    }
    case 13: {
      // if enter key was press, do not submit
      e.preventDefault();
      if (matchItems) matchItems[currentFocus].click();
    }
  }
});

// highlight current focus item
function addActive(matchItems) {
  if (!matchItems) return false;

  // start by removing all active
  removeActive(matchItems);
  if (currentFocus >= matchItems.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = matchItems.length - 1;
  matchItems[currentFocus].classList.add("autocomplete-active");
}

function removeActive(matchItems) {
  for (let i = 0; i < matchItems.length; i++) {
    matchItems[i].classList.remove("autocomplete-active");
  }
}

function closeAllList(element) {
  // close all matched items except the one passed an the argument
  let matchItems = document.getElementsByClassName("autocomplete-items");
  for (let i = 0; i < matchItems.length; i++) {
    if (element != matchItems[i] && element != searchInput) {
      matchItems[i].parentNode.removeChild(matchItems[i]);
    }
  }
}

document.addEventListener("click", () => {
  closeAllList();
});


