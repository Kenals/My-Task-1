let name = "Kenny Alausa";
let courses = ["html", "CSS", "JS"]

for(let i=0;i<200;i++){ 
	if (i%2!=0) {
	    console.log(i);
}


let odd_Number = [];
for(let i=0; i<=200; i++){ 
if(i%2!=0){odd_Number.push(i);
}
}
console.log(odd_Number);


let oddNumber = [];
for(let i=0; i<=200; i++){ 
if(i%2!=0){
	oddNumber.push(i);
}
}
console.log(oddNumber);
}


if(courses.length%2!==0){
    const evenNumber = [];
    for(let i=1; i<=200; i++) {
        if(i%2!==0 ){
            evenNumber.push(i);
        }
    }
    console.log(evenNumber);
} else {
    const oddNumber = [];
    for(let i=1; i<=200; i++) {
        if( i%2!== 0 ){
            oddNumber.push(i);
        }
    }
    console.log(oddNumber);
}
    