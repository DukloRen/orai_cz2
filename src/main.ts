/*document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("btnx")!.addEventListener("click", ()=>{
    document.getElementById("btnx")!.textContent='0';
    let b=document.getElementById("btnx") as HTMLElement;
    let aktualis=parseInt(b.textContent!.toString());
    aktualis++;
    document.getElementById("btnx")!.textContent=aktualis.toString();
  })
})
document.addEventListener("DOMContentLoaded", ()=>{
  for (let i=0; i<5; i++){
    const btn = document.createElement("button");
    document.getElementById("app")!.appendChild(btn);
    btn.textContent = "Gomb";
    btn.addEventListener("click", ()=>{
      console.log("A(z) "+ (i+1)+". gombra kattintottál.");
    })
  }
});*/

/*document.addEventListener("DOMContentLoaded", init);
function init(){
  const btny=document.createElement('button');
  btny.textContent="Új szöveg";
  btny.addEventListener('click', newText);
  document.getElementById('app')!.appendChild(btny);
}
function newText(){
  const szoveg=document.createElement('p');
  const inputB = document.createElement('input')
  const inputH = document.createElement('input')
  szoveg.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non consequat sem. Phasellus eu vestibulum justo, eu tempus metus. Nam convallis lacus metus, sit amet porta eros rhoncus id. Duis non semper nulla. Ut mattis justo nec urna faucibus, vel consequat ex tincidunt. Aenean tellus turpis, maximus et nibh vitae, lobortis fermentum mauris. Pellentesque porta, ligula non tincidunt tempus, turpis arcu suscipit tortor, in ultricies turpis eros ut augue. Nam congue, nibh egestas aliquet accumsan, enim arcu sagittis sem, imperdiet dapibus enim ex non ipsum. Suspendisse at sem in lectus pharetra eleifend non sed ipsum. Maecenas non erat et ante ultricies rutrum. Curabitur consectetur nec mauris in dictum.";
  inputB.type="color";
  inputH.defaultValue="#000000"
  inputB.addEventListener('input', () =>{
    szoveg.style.color=inputB.value;
  })
  inputH.type="color";
  inputH.defaultValue="#FFFFFF"
  inputH.addEventListener('input', () =>{
    szoveg.style.backgroundColor=inputH.value;
  })
  document.getElementById('app')!.appendChild(szoveg);
  document.getElementById('app')!.appendChild(inputB);
  document.getElementById('app')!.appendChild(inputH);
}*/

import {Form} from './form';
const form: Form[]=[];
function kiir(){
  
  form.forEach(form =>{
    document.getElementById('allatok')!.innerHTML+=`
    <tr>
    <td>${form.ujNev}</td>
    <td>${form.ujKedvencEtel}</td>
    <td>🗑️</td>
    </tr>
    `
  });
  }
  function newData(){
  const ujNev = (document.getElementById("ujNev")as HTMLInputElement).value;
  const ujKedvencEtel=(document.getElementById("ujKedvencEtel")as HTMLInputElement).value;
  const formx = new Form(ujNev, ujKedvencEtel);
  form.push(formx);
  
  (document.getElementById("ujNev") as HTMLInputElement).value=="";
  (document.getElementById("ujKedvencEtel") as HTMLInputElement).value=="";
  kiir();
  }
  function init(){
    document.getElementById("gomb")!.addEventListener("click", newData);
    document.getElementById("gomb")!.addEventListener("click", (e) =>{
      e.preventDefault();
    });
  }
  document.addEventListener("DOMContentLoaded", init)
  
  /*const nev=(document.getElementById('ujNev') as HTMLInputElement).value.trim();
  const etel=(document.getElementById('ujKedvencEtel') as HTMLInputElement).value.trim();

  const ujAllat=new Haziallat(nev,etel);
  allatok.push(ujAllat);
  
  const tr=document.createElement('tr');
  const tdNev=document.createElement('td');
  const tdEtel=document.createElement('td');
  const tdTorles=document.createElement('td');
  tr.appendChild(tdNev);
  tr.appendChild(tdEtel);
  tr.appendChild(tdTorles);
  tdNev.textContent=nev;
  tdEtel.textContent=etel;

  const delBtn=document.createElement('span');
  delBtn.textContent='🗑️';
  tdTorles.appendChild(delBtn);

  delBtn.addEventListener('click', ()=>{
    tr.remove();
    const i= allatok.idnexOf(ujAllatForm);
    allatok.splice(i,1);
    console.log(allatok);
  });
  document.getElementById('allatok')?.appendChild(tr);

  form.reset();*/





































































/*export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}*/