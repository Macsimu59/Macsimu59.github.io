const chk = document.getElementById('chk');
const checked = JSON.parse(localStorage.getItem("chk"));
const loader = document.querySelector('.loader');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

function save() {
  localStorage.setItem("chk", chk.checked);
}

document.getElementById("chk").checked = checked;

window.addEventListener("load", function() {
  loader.classList.add('fondu-out');
  if (checked) {
    document.body.classList.toggle('dark');
  }
});

function scriptTemplate(script) {
  return `
    <div class="grid-item">
          <p>${script.name}</p>
          <iframe src="https://www.youtube.com/embed/${script.vidéo}" frameborder="0"></iframe>
          <div class="buttons">
          <a href="${script.github}" target="_blank" class="bt-repositorie"><i class="fa fa-download"></i>Télécharger</a>

          </div>
      </div>
  `;
}

function scriptTemplate(script) {
  return `
    <div class="track-item">
          <p>${script.name}</p>
          <iframe src="https://www.youtube.com/embed/${script.vidéo}" frameborder="0"></iframe>
          <div class="buttons">
          <a href="${script.github}" target="_blank" class="bt-repositorie"><i class="fa fa-download"></i>Télécharger</a>

          </div>
      </div>
  `;
}

const requestURL = 'https://Macsimu59.github.io/json/data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response
  document.getElementById("grid-container").innerHTML = `${data.map(scriptTemplate).join("")}`;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}