import fs from 'fs';

let state;
let updateProducts;

console.log("=============================== violation =============================================");

// 안 좋은 예
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateProducts = state.order.products;
updateProducts.push({
    no: "s002-002",
    name: "블루 양말",
    price: 2000,
    amount: 1

});

console.log(state.order.products, updateProducts, state.order.products === updateProducts);

console.log("=============================== 1. =============================================");

// 좋은 예
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateProducts = state.order.products.concat({
    no: "s002-002",
    name: "블루 양말",
    price: 2000,
    amount: 1
});

console.log(state.order.products, updateProducts, state.order.products === updateProducts);

console.log("=============================== 2. =============================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateProducts = [...state.order.products, {
        no: "s002-002",
        name: "블루 양말",
        price: 2000,
        amount: 1
}];

console.log(state.order.products, updateProducts, state.order.products === updateProducts);
