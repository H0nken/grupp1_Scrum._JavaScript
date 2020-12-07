
let btnRemoveAlbumOne = document.getElementById("btnRemoveAlbumOne");
let btnUpload = document.getElementById("uploadOne");



//file-input

document.querySelector("#myFileInput").addEventListener("change", function(){
    //this will convert file to dataURL
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        localStorage.setItem(localStorage.length, reader.result);
    });

    //This looking for a loaded file and store it
    reader.readAsDataURL(this.files[0]);
 
 });

    //image-preweiv
     document.addEventListener("DOMContentLoaded", () =>{
         let photos = document.getElementById("photos1");
         for(let i=0;i<localStorage.length;i++){
            //console.log("Bild" +localStorage.getItem(i));
         }
         //create new elem-section in HTML and save the image there
         for(let i=0;i<localStorage.length;i++){
            let elem = document.createElement("img");
            elem.setAttribute("src",localStorage.getItem(i));
            photos.appendChild(elem);

         }
        
      
 
  });



  //setKeys();

  //btnRemove1.onclick = function(){  
    //localStorage.removeItem(1);
       //här efter ska inte index 1 bli null!
   //}

   btnRemoveAlbumOne.onclick = function(){  
    localStorage.clear();
    location.reload();
      
   }

   btnUpload.onclick = function(){  
    location.reload();
      
   }


