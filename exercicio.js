const ventilador = {
    marca: 'mondial',
    cor: 'branco',
    tamanho: '70cm'

}
const array1 = [10,20,30]

for(const e in ventilador){
    console.log(e+' = '+ventilador[e]);
}
for(const a of array1){
    console.log(a);
}