const arr = [[1, [2,3,[4,5]],[[6],[7,8]]], 9]
// // 输出[1,2,3,4,5,6,7,8,9]

//展开运算符
let arr1=[1,2,3];
let arr2=[4,5,6];
//let arr3=[].concat(arr1,arr2);
let  arr3=[...arr1,...arr2];
console.log(arr3);

 
// 直接递归
function way1 (arr) {
    let ans = []
    arr.forEach(e => { Array.isArray(e) ? ans = ans.concat(flat1(e)) : ans.push(e)})
    return ans
}
 
// 使用reduce递归
let way2 = arr => 
    arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flat2(cur) :cur), [])
 
// 使用生成器递归
function way3 (arr) {
    let ans = []
    // 首先定义生成器
    // 这里不能使用foreach，因为foreach的参数只能接受普通函数，不能使用生成器函数
    let generator = function* (arr) {
        for(let i in arr) {
            // 如果在生成器中yield另一个生成器，必须使用yield*而不是yield
            Array.isArray(arr[i]) ? yield* flat3(arr[i]) : yield arr[i]
        }
    }
    // 然后调用生成器
    for (let num of generator(arr)) {
        ans.push(num)
    }
    return ans    
} 



