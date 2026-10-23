const userProfile = {
    name: "Khanzada",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["reading","taekwondo","tennis","football","painting"],
};
console.log(userProfile); 
const cYear = new Date().getFullYear();
const age= cYear - userProfile.birthYear;
const hobCount=userProfile.hobbies.length;
const monthsOld=age*12;
console.log("Name:",userProfile.name);
console.log("Age:",age);
console.log("Hobbies count:",hobCount);
console.log("Months Old:",monthsOld);

const pf=document.getElementById("f");
pf.addEventListener("submit",function(event){
    event.preventDefault();
    const username=document.getElementById("name").value;
    const birthYear=Number(document.getElementById("birth").value);
    userProfile.name=username;
    userProfile.birthYear=birthYear;
    console.log("updated profilr:",userProfile);
    console.log("Age:", new Date().getFullYear()-userProfile.birthYear);
});

const ii=document.getElementById("ii");
const il=document.getElementById("il");
const add=document.getElementById("add");
const rm=document.getElementById("rm");
add.addEventListener("click",function(){
    const it=ii.value.trim();
    if(it!==""){
        const nt=document.createElement("li");
        nt.textContent=it;
        il.appendChild(nt);
        ii.value="";
    }
});
rm.addEventListener("click",function(){
    if(il.lastElementChild){
        il.lastElementChild.remove();
    }
});