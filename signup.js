
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")



function clicked(){
    let arrData = [];
    arrData.push(input1.value)
    arrData.push(input2.value)
    // console.log(arrData);
    localStorage.setItem("Data", JSON.stringify(arrData))
    // localStorage.setItem("password", input2.value)
}