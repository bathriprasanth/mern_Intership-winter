setTimeout(()=>{
    console.log("SetTimeOut Function 1");
},0);
//callback fun and timer
console.log("Hello World");

//callback Hell
//nested callbacks
setTimeout(()=>{
    console.log("SetTimeOut Function 2");
    setTimeout(()=>{
        console.log("SetTimeOut Function 3");
        setTimeout(()=>{
            console.log("SetTimeOut Function 4");
            setTimeout(()=>{
                console.log("SetTimeOut Function 4");
            },2000);
        },2000);
    },2000);
},2000);

let mypromise = new Promise((res,rej)=>{
    let marks = 70;
    if(marks>=60){
        res("Student is Passed");
    } else {
        rej("Student is Failed");
    }
});
// way to call a Promise
// .then and .catch
mypromise.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
});


