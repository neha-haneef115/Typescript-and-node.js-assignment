let guestinvited: string[]=["Zendaya","Moazzam","Ammad","Faizan","Dua","Tyla","kaira"]
console.log(`Due to space constraints, we can only invite two people.`);
while (guestinvited.length>2){
    const removedguest=guestinvited.pop();
if(removedguest)
{
    console.log(`Sorry ${removedguest}, you are not invited to Dinner`);
}}
guestinvited.forEach((guest)=>console.log(`Dear ${guest}, you still are invited for Dinner.`));
guestinvited.pop();
guestinvited.pop();
console.log(guestinvited);

