
const darkmode = document.getElementById('toggle');
const cvgauche = document.getElementById('leftside')
const cvdroite = document.getElementById('rightside')
const pres = document.getElementById('introduction')

 

darkmode.onclick = function(){
   darkmode.classList.toggle('active'),
   cvgauche.classList.toggle('active');
   cvdroite.classList.toggle('active');
   pres.classList.toggle('active');


}


 