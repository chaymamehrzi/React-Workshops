
export const findLongestWord = (tab) => tab.reduce((acc, curr) => acc.length < curr.length ?

console.log(`${curr} : ${curr.length}` ): console.log(`${acc} : ${acc.length}` ));







export const totalNotes=(tab)=>{
    console.log(tab);
  return  tab.map((e)=>{
        e.marks < 50 && (e.marks+=15 )
        return e
    }).filter((obj)=>obj.marks>50).reduce((acc,curr)=>
      acc + curr.marks
    ,0)
}






export const pushT=(tabObj) =>{
    var ID =0;
 tabObj.push({name :'wael' , fonction : "medecin"});
 return tabObj.map((obj)=>({
    ...obj,ID:ID++
 }))
};