// Reduce Method

const myNums = [1, 2, 3]

//const myTotal = myNums.reduce(function  (acc, currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//    return acc + currval
//}, 0)


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 )

console.log(myTotal);

const shoppingcard = [
    {
        iteamName: "js course",
        price: 2999
    },
    {
        iteamName: "python course",
        price: 999
    },
    {
        iteamName: "Mobile Dev Course",
        price: 5999
    },
    {
        iteamName: "Data Science course",
        price: 12999
    }
]

const PriceToPay = shoppingcard.reduce( (acc, item) => acc + item.price, 0  )

console.log(PriceToPay);