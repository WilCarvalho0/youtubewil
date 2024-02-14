"use strict";

var searchInput = document.getElementById('search-input');
var resultArtist = document.getElementById("result-artist");
var resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
  var url = "http://localhost:3000/artists?name_like=".concat(searchTerm);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (result) {
    return displayResults(result);
  });
}

function displayResults(result) {
  resultPlaylist.classList.add("hidden");
  var artistName = document.getElementById('artist-name');
  var artistImage = document.getElementById('artist-img');
  result.forEach(function (element) {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });
  resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
  var searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === '') {
    resultPlaylist.classList.add('hidden');
    resultArtist.classList.remove('hidden');
    return;
  }

  requestApi(searchTerm);
});
//# sourceMappingURL=script.dev.js.map
