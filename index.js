let btnRemoveAlbumOne = document.getElementById('btnRemoveAlbumOne');
let btnUpload = document.getElementById('uploadOne');



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

btnRemoveAlbumOne.onclick = function () {
  localStorage.clear();
  location.reload();
};

btnUpload.onclick = function () {
  location.reload();
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
