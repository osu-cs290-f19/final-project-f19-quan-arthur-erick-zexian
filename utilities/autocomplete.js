/**
 * PLEASE READ!!
 * 
 * This js file needs the autocomoplete-style.css to work properly. So please import autocomplete-style.css when you import this file
 * For html, you just need to wrap the search input in a "autocomplete" div
 * and give the search input "search-input" id
 * 
 * This is for demo purposes, so the countries is an array
 * If you work with JSON, you'll need to convert JSON to array for it to work
 * 
 * Thanks.
 * Quan Nguyen.
 * 
 */




let searchInput = document.getElementById('search-input');
let countries;

countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];


// inp from text field and arr contains matched values
var currentFocus;
searchInput.addEventListener('input', e => {
  let matchList, matchItem;
  let val = searchInput.value;

  // close any already open lists of matched values
  closeAllList();
  if (!val) return false;
  currentFocus = -1;

  // Create a div that will contain the match values
  matchList = document.createElement('div');
  matchList.id = 'autocomplete-list';
  matchList.setAttribute('class', 'autocomplete-items');

  // append new element to autocomplete container
  searchInput.parentNode.appendChild(matchList);

  countries.forEach(country => {
    const matchIndex = country.toLowerCase().indexOf(searchInput.value.toLowerCase());

    if (matchIndex != -1) {
      // matches.push(country);
      matchItem = document.createElement('div');
      matchItem.classList.add('match-item');
      const leftString = country.substring(0, matchIndex);
      const boldString = country.substr(matchIndex, val.length);
      const rightString = country.substr(matchIndex + val.length);
      matchItem.innerHTML = leftString + '<strong>' + boldString + '</strong>' + rightString;
      matchItem.innerHTML += '<input type="hidden" value="' + country + '">';
      //listen to clicks on match item
      matchItem.addEventListener('click', (e) => {
        // insert value to input field
        searchInput.value = e.target.textContent;
        // close list of matched values
        closeAllList();
      });
      matchList.appendChild(matchItem);
    }
  });

});

// listen to the arrow keys and enter key
searchInput.addEventListener('keydown', e => {
  //
  let matchItems = document.getElementsByClassName('match-item');
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
  matchItems[currentFocus].classList.add('autocomplete-active');
}

// remove highlights before adding new highlight to the next item
function removeActive(matchItems) {
  for (let i = 0; i < matchItems.length; i++) {
    matchItems[i].classList.remove('autocomplete-active');
  }
}

// close all items 
function closeAllList(element) {
  // close all matched items except the one passed an the argument
  let matchItems = document.getElementsByClassName('autocomplete-items');
  for (let i = 0; i < matchItems.length; i++) {
    if (element != matchItems[i] && element != searchInput) {
      matchItems[i].parentNode.removeChild(matchItems[i]);
    }
  }
}

// when user clicks on an item, close the list
document.addEventListener('click', () => {
  closeAllList();
})
