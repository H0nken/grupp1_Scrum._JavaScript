
let btnRemoveAlbumOne = document.getElementById("btnRemoveAlbumOne");
let btnUpload = document.getElementById("uploadOne");

//buttons for all images in album 2
let btnAlbumTwo1 = document.getElementById("button2.1");
let btnAlbumTwo2 = document.getElementById("button2.2");
let btnAlbumTwo3 = document.getElementById("button2.3");
let btnAlbumTwo4 = document.getElementById("button2.4");
let btnAlbumTwo5 = document.getElementById("button2.4");

//ref to all images
let image = document.getElementsByTagName("img");









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


   //buttons for album two
   btnAlbumTwo1.onclick = function(){  
    console.log(image[2]);
      
   }
   btnAlbumTwo2.onclick = function(){  
    console.log(image[3]);
      
   }
   btnAlbumTwo3.onclick = function(){  
    console.log(image[4]);
      
   }
   btnAlbumTwo4.onclick = function(){  
    console.log(image[5]);
      
   }
   btnAlbumTwo5.onclick = function(){  
    console.log(image[6]);
      
   }

   
   


