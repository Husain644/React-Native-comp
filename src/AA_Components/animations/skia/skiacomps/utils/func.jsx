import { Skia } from "@shopify/react-native-skia";
export const wordModify=(word=[],positions={x:100,y:100},scale=1)=>{
const lst=word.map((item)=>{
    const x=item.x*scale+2*positions.x-scale*positions.x;
    const y=item.y*scale+2*positions.y-scale*positions.y;
    return {x:x,y:y,n:item.n, s:item.s}});
    console.log('word modify run')
return lst
}

export function StructureByPath(
   word=[]
){
const path = Skia.Path.Make();
word.forEach((item, index) => {
    if (index === 0) {
      path.moveTo(item.x, item.y);
    } else {
      if (item.n) {
        path.moveTo(item.x, item.y);
      } else {
        path.lineTo(item.x, item.y);
      }
    }
  });
  return path;
}

const radiusEffect=Skia.PathEffect.MakeCorner(5);
const deshEffect = Skia.PathEffect.MakeDash(intervals=[4,4]);
export const basePathStyle = Skia.Paint();
  basePathStyle.setColor(Skia.Color('#fff'));
  basePathStyle.setStyle(1);// Fill = 0, Stroke = 1
  basePathStyle.setStrokeWidth(5);
  basePathStyle.setPathEffect(radiusEffect); 
  basePathStyle.setPathEffect(deshEffect); 

export const tracePathStyle = Skia.Paint();
  tracePathStyle.setColor(Skia.Color('yellow'));
  tracePathStyle.setStyle(1);// Fill = 0, Stroke = 1
  tracePathStyle.setStrokeWidth(10);
  tracePathStyle.setPathEffect(radiusEffect);

export const handPathStyle = Skia.Paint();
  handPathStyle.setColor(Skia.Color('#000'));
   handPathStyle.setStyle(1);// Fill = 0, Stroke = 1
   handPathStyle.setStrokeWidth(1);
   handPathStyle.setPathEffect(radiusEffect);

export const sortPathStyle = Skia.Paint();
  sortPathStyle.setColor(Skia.Color('red'));
  sortPathStyle.setStyle(1);// Fill = 0, Stroke = 1
  sortPathStyle.setStrokeWidth(5);
  sortPathStyle.setPathEffect(radiusEffect);
