export const wordModify=(word=[],positions={x:100,y:100},scale=1)=>{
const lst=word.map((item)=>{
    const x=item.x*scale+2*positions.x-scale*positions.x;
    const y=item.y*scale+2*positions.y-scale*positions.y;
    return {x:x,y:y,n:item.n, s:item.s}});
return lst
}