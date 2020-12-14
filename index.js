let btnRemoveAlbumOne = document.getElementById('btnRemoveAlbumOne');
let btnUpload = document.getElementById('uploadOne');

//buttons for all images in album 2
let btnAlbumTwo1 = document.getElementById('button2.1');
let btnAlbumTwo2 = document.getElementById('button2.2');
let btnAlbumTwo3 = document.getElementById('button2.3');
let btnAlbumTwo4 = document.getElementById('button2.4');
let btnAlbumTwo5 = document.getElementById('button2.5');

//ref to all images
let imagesOfAlbum2 = document.getElementsByClassName('albumTwo');

//file-input

document.querySelector('#myFileInput').addEventListener('change', function () {
  //this will convert file to dataURL
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    localStorage.setItem(localStorage.length, reader.result);
  });

  //This looking for a loaded file and store it
  reader.readAsDataURL(this.files[0]);
});

//image-preweiv
document.addEventListener('DOMContentLoaded', () => {
  let photos = document.getElementById('photos1');
  for (let i = 0; i < localStorage.length; i++) {
    //console.log("Bild" +localStorage.getItem(i));
  }
  //create new elem-section in HTML and save the image there
  for (let i = 0; i < localStorage.length; i++) {
    let elem = document.createElement('img');
    elem.setAttribute('src', localStorage.getItem(i));
    photos.appendChild(elem);
  }
});

//setKeys();

//btnRemove1.onclick = function(){
//localStorage.removeItem(1);
//här efter ska inte index 1 bli null!
//}

btnRemoveAlbumOne.onclick = function () {
  localStorage.clear();
  location.reload();
};

btnUpload.onclick = function () {
  location.reload();
};

//buttons for album two
btnAlbumTwo1.onclick = function () {
  console.log(imagesOfAlbum2[0]);
};
btnAlbumTwo2.onclick = function () {
  console.log(imagesOfAlbum2[1]);
};
btnAlbumTwo3.onclick = function () {
  console.log(imagesOfAlbum2[2]); 
};
btnAlbumTwo4.onclick = function () {
  console.log(imagesOfAlbum2[3]);
};
btnAlbumTwo5.onclick = function () {
  console.log(imagesOfAlbum2[4]);
};
var loadFile = function (event) {
  const imagePreview = Array.from(event.target.files);
  var output = document.getElementById('output');
  imagePreview.forEach((image) => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.height = 100;
    output.appendChild(img);
  });
};
