let courses = ["html", "CSS", "JS"]
if(courses.length%2!=0){
    let odd_Number = [];
    for(let i=0; i<=200; i++){
        if(i%2!=0){
            odd_Number.push(i);
    }
    }
    console.log(odd_Number);
} else {let even_Number = [];
for(let i=1; i<=200; i++){
if(i%2 ==0){
	even_Number.push(i);
}
}
console.log(even_Number);
}