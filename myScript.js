var a= "Scop: "
var int='Realizare interna'
var ext='Realizare externa'


function myFunction1() {
  document.getElementById("demo").innerHTML = "1.Digitalizare si vizualizare documentatie tehnica flux - Tablete";
  document.getElementById('demo1').innerHTML=a+'Format PDF pentru accesare pe flux (Tablete) a documentatiei'
  document.getElementById('demo2').innerHTML=int
}

function myFunction2() {
  document.getElementById("demo").innerHTML = "2. Soft programare SDV (reminder)";
  document.getElementById('demo1').innerHTML=a+'SDV va fi inregistrat in program si vor fi afisate perioadele necesare pentru ascutire, inlocuire, aprovizionare, uzura (mp sau liniari) prin diagrame de timp, atentionari in functie de urgente si termeni limita'
  document.getElementById('demo2').innerHTML=int
}
function myFunction3() {
  document.getElementById("demo").innerHTML = "3. Soft extern FLUX - Manopera, Raportare, Programare productie";
  document.getElementById('demo1').innerHTML=a+'Incarcarea pe flux a programului de productie, necesarul de manopera, redistribuire personal'
  document.getElementById('demo2').innerHTML=ext
}
