
let i=0
function add(){
    let titre=document.getElementById("titre")
    let lien=document.getElementById("lien")
    if (titre.value === "" || lien.value==="" ) 
        alert("les champs sont vides");
        else
       {
        let x = document.createElement("INPUT");
x.setAttribute("type", "text" );
x.setAttribute("value", titre.value);
x.disabled=true
let liste=document.createElement("li")
liste.appendChild(x)
localStorage.setItem(`act ${i}`,x)
i++
liste.innerHTML +=' <a  target="_blank" href='+lien.value+'> <i class="fa fa-external-link" aria-hidden="true"></i></a><i class="fa fa-pencil-square-o color3" aria-hidden="true"></i><i class="fa fa-trash color1" aria-hidden="true"></i>'
let listes=document.getElementById("listes")
listes.appendChild(liste)
titre.value=""
lien.value=""


       }
       

} 
