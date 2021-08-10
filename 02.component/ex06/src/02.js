import fs from 'fs';

// const o1 = {a :1, b: 2};
// const o2 = {b :1, c: 2};
// const o3 = Object.assign({}, o1, o2);   // {} 넣으면 o1, o2은 변하지 않고 o3에만 

// console.log(o1);
// console.log(o2);
// console.log(o3);

let state;
let updateOrder;

// 안 좋은 예
console.log("=============================== violation =============================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateOrder = state.order;
updateOrder.receive = '부산시 해운대구 우동';
console.log(state.order, updateOrder, state.order === updateOrder);

// 좋은 예
console.log("=============================== 1. =============================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateOrder = Object.assign({}, state.order, {receive: '부산시 해운대구 우동'});
console.log(state.order, updateOrder, state.order === updateOrder);

