// ตัวอย่างโจทย์ 1
const example1 = {name:'ex1',status:1};
// เฉลย
const result1:{name:string,status:number}= {name:'ex1',status:1};

// ตัวอย่างโจทย์ 2
const example2 = {xn:10,yn:{hp:10,status:'1'}};
// เฉลย
const result2 :{xn:number,yn:{hp:number,status:string}} = {xn:10,yn:{hp:10,status:'1'}};

//โจทย์ 1
const pokemon = {hitpoint:10,name:'Suparai'};
//คำตอบ
const pokemon2 :{hitpoint:number,name:string} = {hitpoint:10,name:'Suparai'};
console.log(pokemon2)
//โจทย์ 2
const akito = {nameWa:'Akito',secretNo:20,security:{key:100,code:'ASS10'},register:new Date()};
// คำตอบ
const akito2 :{nameWa:string,secretNo:number,security:{key:number,code:string},register:Date} = {nameWa:'Akito',secretNo:20,security:{key:100,code:'ASS10'},register:new Date()};
console.log(akito2)
// โจทย์ 3
const myTest = {isValid:false};
// คำตอบ
const myTest2 :{isValid:boolean} = {isValid:false};
console.log(myTest2);
// โจทย์ 1
const findArea : (x:number,y:number)=>number  =  (x,y)=>x*y;
console.log(findArea(10,10))

// โจทย์ 2
const xfindArea = (x,y,z) => {
  console.log('Hello');
  return x*y+2-10;
}
const xfindArea2 :(x:number,y:number,z:number)=>number = (x,y,z) => {
  console.log('Hello');
  return x*y+2-10;
}
// โจทย์ 3
const optimize = () => 'xxxxx';
const optimize2: ()=> string = () => 'xxxxx' ;

// โจทย์ 4
const opopo = (x,y)=> `${x} and ${y} is same`;
const opopo2:(x:string,y:string)=>string = (x,y)=> `${x} and ${y} is same`;
// โจทย์ 5
const suruzu = (man)=>{
  console.log('test man');
  return {x:10,y:20};
}
const suruzu2:(man:any)=>{x:number,y:number} = (man:any)=>{
  console.log('test man');
  return {x:10,y:20};
}

// โจทย์ 6
const convertDateToTime = (date:Date)=>date.getTime();
const convertDateToTime2:(date:Date)=>number  = (date:Date)=>date.getTime();

// โจทย์ 7
const getMyDetailModule = ()=>{
  return {app:'module',detail:{operation:true}};
}
const getMyDetailModule2:()=>{app:string,detail:{operation:boolean}} = 
()=>({app:'module',detail:{operation:true}})

const isEven :(num:number)=>boolean    =    num => num%2==0;