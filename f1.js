// let myname= "harsh" ;
// console.log("hello my name is " , myname) ; 

// let myarr1=[22,34,21,48,59] ;
// let mylen = myarr1.length ; 
// for(let i=0 ; i<mylen ; i++){
//     if (myarr1[i]%2==0){
//         console.log(myarr1[i]) ;
//     }
// }

// const data= [
//     {
//         "name": "harsh" , 
//         "age": "19" ,
//         "gender" : "male" 
//    },
//    {
//         "name": "sakshi" , 
//         "age": "20" ,
//         "gender" : "female" 
//     } ,
//     {
//         "name" : {
//             "firstname" : "ronak" ,
//             "secondname" : "choudhary"

//         } , 
//         "age": "20" ,
//         "gender" : "female" 
       
//     }

// ]
// console.log(data[0]) ;
// console.log(data[2]["name"]["firstname"]) ;

//classes

// class Animal{
//     constructor(aniname,legs,speaks){
//         this.aniname=aniname ;
//         this.legs=legs ;
//         this.speaks = speaks ;

//     }
//     showdetails(){
//         console.log("hello , i am " + this.aniname + " i have legs:" + this.legs + " i speak " + this.speaks) ;

//     }
// }
// let dog= new Animal("doggie" , 4, "bhow bhow ")  ;
// dog.showdetails() ;


//async functions 

// function saymyname(){
//     console.log("say my name say my name hn , desi rap ko maine bana diya h wrestle mania")
// }

// setTimeout(saymyname, 2000) ;
// console.log("what da phack") ;

// reading file : first completes all task then does the async calls

// const fs = require("fs") ;

// fs.readFile("toread.txt" , "utf-8" , function(err, data ){
//     console.log(data) ;
// })

// console.log("hello my name is walter lewins") ;

//PROMISES

// ugly way of doing callbacks 
const fs = require("fs") ;
const { resolve } = require("path");
function harshreadsfile(cb){
    fs.readFile("toread.txt" , "utf-8" , function(err,data){
        cb(data) ;

    })
}
function printdatabitch(data){
    console.log(data) ;

}
//this is the branched data for github testing
harshreadsfile(printdatabitch) ;

// Better way using promises 


function harshreadsFile1(){
    return new Promise(function(resolve){
        fs.readFile("toread.txt" , "utf-8" , function(err,data){
            resolve(data) ;
        })

    })
}

harshreadsFile1().then(printdatabitch) ;