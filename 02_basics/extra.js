//map
const nu = [1, 2, 3, 4, 5, 6, 7, 8]
const nu1 = nu.map( (num) => {return num}) //map returns unlike for each
console.log(nu1);

//chaining -> method to apply one or more functions together
const num3 = [1, 2, 3, 4, 5, 6, 7, 8]
const num3n = num3
              .map( (num) => num * 10 )
              .map( (num) => num + 1 )
              .filter( (num) => num >= 40)
console.log(num3n);

//reduce
const num = [1, 2, 3, 4, 5]
const numn = num.reduce( function(acc, cur) {
    console.log(`acc: ${acc} and curr: ${cur}`);
    return acc + cur;
},0 )
console.log(numn);

const shoppingCart = [
    {
        item: 'tomato',
        price: 45
    },
    {
        item: 'potato',
        price: 35
    },
    {
        item: 'onion',
        price: 50
    },
    {
        item: 'carrot',
        price: 30
    }
]
const amtToPay = shoppingCart.reduce( (i, item) => i + item.price , 0 )
console.log(amtToPay);
