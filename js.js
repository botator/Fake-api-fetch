let a = null;
let b = [];
let btnVal = null;
let app = document.getElementById('app');
let div =  document.createElement('div');
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.innerText = 'UserId';
const th2 = document.createElement("th");
th2.innerText = 'id';
const th3 = document.createElement("th");
th3.innerText = 'title';
const th4 = document.createElement("th");
th4.innerText = 'body';
headerRow.appendChild(th1);
headerRow.appendChild(th2);
headerRow.appendChild(th3);
headerRow.appendChild(th4);
table.appendChild(headerRow);
div.appendChild(table);
async function fetchData() {
  try{
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    a = await result.json();
    b = a.slice()
    for(let i = 0; i<b.length;i++){
      
      const dataRow = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.innerText = b[i].userId;
      dataRow.appendChild(td1);
      const td2 = document.createElement("td");
      td2.innerText = b[i].id;
      dataRow.appendChild(td2);
      const td3 = document.createElement("td");
      td3.innerText = b[i].title;
      dataRow.appendChild(td3);
      const td4 = document.createElement("td");
      td4.innerText = b[i].body;
      dataRow.appendChild(td4);
      const td5 = document.createElement("td")
      const tdbtn = document.createElement("button");
      const form = document.createElement("form");
      form.action = "fetchedData.html";
      tdbtn.innerText = "Data";
      tdbtn.value = i;
      tdbtn.type = "submit";
      tdbtn.style.padding = "10px";
      
      form.onsubmit = function(event) { 
        event.preventDefault();
        btnVal = parseInt(tdbtn.value);
        window.location.href = `fetchedData.html?btnVal=${btnVal}`; 
        dataLoad();
      }; 

      form.appendChild(tdbtn);
      td5.appendChild(form);
      dataRow.appendChild(td5);

      table.appendChild(dataRow);
      div.appendChild(table)
      app.appendChild(div);
    }
  }
  catch(error){
    console.log(error)
  }
}


fetchData();
console.log(btnVal)

function getQueryParameter(name) { 
  const urlParams = new URLSearchParams(window.location.search); 
  return urlParams.get(name); }

function dataLoad(){
  let appData = document.getElementById('fetchedApp');
  btnVal = getQueryParameter('btnVal');
  console.log(b)
  console.log(btnVal)
  const div = document.createElement('div');
  div.style.display = "flex";
  div.style.flexDirection = "row";
  const p0 = document.createElement('p');
  p0.innerText = b[btnVal].userId;
  const p1 = document.createElement('p');
  p1.innerText = b[btnVal].id;
  const p2 = document.createElement('p');
  p2.innerText = b[btnVal].title;
  const p3 = document.createElement('p');
  p3.innerText = b[btnVal].body;
  div.appendChild(p0);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  appData.appendChild(div);
}