let lowerDiv = document.getElementById("lowerDiv");
let upperDiv = document.getElementById("upperDiv");
let title = document.getElementById("title");
let ImgUrl = document.getElementById("ImgUrl");
let description = document.getElementById("description");

let arr = [];
let divsArray = [];

function createDiv() {
  let div1 = document.createElement("div");

  let r = Math.floor(Math.random() * 100) + 1;
  arr.push(r);
  div1.setAttribute("id", r);

  let img1 = document.createElement("img");
  let para1 = document.createElement("p");
  let h6 = document.createElement("h6");
  h6.innerText = title.value;
  img1.setAttribute("src", ImgUrl.value);
  para1.innerText = description.value;
  lowerDiv.appendChild(div1);
  div1.appendChild(h6);
  div1.appendChild(img1);
  div1.appendChild(para1);

  div1.style.width = "500px";
  div1.style.height = "auto";
  div1.style.display = "flex";
  div1.style.flexDirection = "column";
  div1.style.padding = "8px";
  div1.style.fontSize = "20px";
  div1.style.color = "white";
  div1.style.backgroundColor = "rgb(159, 135, 180, 0.8)";
  div1.style.borderRadius = "2rem";
  div1.style.marginLeft = "2%";
  div1.style.boxShadow = "5px 10px 18px #888888";

  let finalArray = [
    {
      title: title.value,
      imageUrl: ImgUrl.value,
      Description: description.value,
    },
  ];
  divsArray.push(finalArray[0]);
  console.log("hhhhh");
}

function removeDiv() {
  document.getElementById(`${arr[arr.length - 1]}`).remove();
}

function storageDate(){

  let addButton = document.getElementById("add")
  addButton.addEventListener('click', (e) => {
    localStorage.setItem("Data", JSON.stringify(e))
    console.log("ddd");
  })
    
}