let guestinvited:string[]=["Saria","Ammad","Dua","Tyla"];
let cannotattend: string="Saria"
console.log(cannotattend+" ","cannot attend the dinner. ");
let newguest: string= "Moazzam"
guestinvited [guestinvited.indexOf(cannotattend)]=newguest;
guestinvited.map((items)=>
console.log(`Dear ${items}, you are invited for Dinner.`));

