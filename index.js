const array = [1, 2, 3, [4, 5], null, 6, 'name', { one: 'one' }];

const sumAllNumbersInArray = (value, sum = 0) => {
    let arr = value.flat()
    
    console.log(arr)
    let i = arr.map(item => {
        if(typeof(item) === 'number') {
            sum = sum + item
        }
    })
    return sum
    
    
};

console.info(sumAllNumbersInArray(array)); // 21 ( i.e. 1 + 2 + 3 + 4 + 5 + 6 )
