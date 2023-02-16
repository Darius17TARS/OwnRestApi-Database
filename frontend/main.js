

let lol = ('recordset')

//document.getElementById("X").innerHTML =  `<h1> Hola Como </h1> ${test}`; 

let clicks =  1;



const button1 = document.getElementById("button2");
const button2 = document.getElementById("button4");
button1.addEventListener("click", next);
button2.addEventListener("click", foward);

function next(){
  clicks = clicks + 1;
  test(clicks);
  
}

function foward(){
  clicks = clicks - 1;
  test(clicks);
  
}

async function test(IDNUMBER) {
  let obj;

  const res = await fetch(`http://localhost:3000/products/${IDNUMBER}`)

  obj = await res.json();
  let searcher = obj.recordset[0];
  console.log(searcher.ProductID);
  document.getElementById("X").innerHTML =  `<h3> The Product:
  <br>"${searcher.ProductName}" has a Price of ${searcher.UnitPrice}$,
  <br> the ID is ${searcher.ProductID};`
  
}



test(clicks);


