const names = ["Yaak", "John", "json", "Rock", "janny","Peter","Nickola", "Stephen","Harry"];

for(i=0; i<names.length; i++){
    // console.log(names[i]);
    if(names[i].charAt(0) == "J" || names[i].charAt(0) =="j")
    {
        console.log("Goodbye " + names[i])
    }
    else{
        console.log("Hello " + names[i])
    }
}