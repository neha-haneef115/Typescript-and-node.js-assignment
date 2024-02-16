let guestinvited:string[]=["Saria","Ammad","Dua","Tyla"];
let cannotattend: string="Saria"
console.log(cannotattend+" ","cannot attend the dinner. ");
let newguest: string= "Moazzam"
guestinvited [guestinvited.indexOf(cannotattend)]=newguest;
guestinvited.map((items)=>
console.log(`Dear ${items}, I found a bigger table now i am inviting more people`));

let furtherguest1: string="Zendaya"
guestinvited.unshift(furtherguest1);
console.log(furtherguest1);

let furtherguest2: string="Faizan"
let furtherindex2=guestinvited.length/3;
guestinvited.splice(furtherindex2+2,0,furtherguest2)
console.log(furtherguest2);
guestinvited.push("kaira")
console.log(guestinvited);
guestinvited.map((items)=>console.log(`Dear ${items}, you are invited for Dinner today`));

