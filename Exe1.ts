
//fuc calculate Triangle area
const calcTriangleArea = (base: number, height: number): number => {
    const area  = 2 * base * height;
    return area
}
 
const triangleBase = 10;
const triangleHeight = 6;
const trianglearea = calcTriangleArea(triangleBase, triangleHeight);
console.log(trianglearea);
