//Async with api
let fetchData = () =>{
    fetch("https://jsonplaceholder.typicode.com/todos")
     .then((res)=>{
        console.log(res);
        return res.json();
     })
     .then((data)=>{
        console.log("value is ",data);
     })
     .catch((err)=>{
        console.log(err);
     });
};

let fetchData1 = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(responce);
        const data = await response.json();
        localStorage.setItem("responceData",JSON.stringify(data));
        console.log("value is",data);
    }catch(err){
        console.log(err);
    }
};
let localDat=JSON.parse(localStorage.getItem("responceData"))|| [];
if(localDat.length <=0){
fetchData1();
}