//Ganti Nama

   function replaceName(){
        let nama = prompt("Masukkan Nama Anda","");
        document.getElementById("nama-user").innerHTML = nama
    }
     function load(){
        replaceName();
        datetime();
     }

// Slideshow

var slideIndex = 1;
showSlides(slideIndex);

     function plusSlides(n){
        showSlides(slideIndex += n);
     }

     function currentSlide(n){
        showSlides(slideIndex = n);
     }

     function showSlides(n){
        var i;
        var slides = document.getElementsByClassName("slideshow");

        if (n > slides.length) slideIndex = 1;
        else if (n < 1) slideIndex = slides.length;

        for (i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        
        slides[slideIndex - 1].style.display = "block";
     }

     function datetime(){
      const d = new Date();
      document.getElementById("datetime").innerHTML = d;
     }


     function loadData(){
      document.getElementById("nm").innerHTML = document.getElementById("full-name").value;
      document.getElementById("full-name").value=""

      document.getElementById("tgllahir").innerHTML = document.getElementById("birth-date").value;
      document.getElementById("birth-date").value=""

      var ele = document.getElementsByName('gender');
            for(i = 0; i < ele.length; i++) {
               if(ele[i].checked)
               document.getElementById("jk").innerHTML = ele[i].value;
            }

      document.getElementById("note").textContent = document.getElementById("messages").value;

      }