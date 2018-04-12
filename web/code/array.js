// // 编程程序，找出下列数组中出现频率最高的元素。
// var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// // should output: 'a'
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// function findMost2(arr) {
//     var h = {};
//     var maxNum = 0;
//     var maxEle = null;
//     for (var i = 0; i < arr.length; i++) {
//         var a = arr[i];
//         h[a] === undefined ? h[a] = 1 : (h[a]++);
//         if (h[a] > maxNum) {
//             maxEle = a;
//             maxNum = h[a];
//         }
//     }
//     return '出现次数最多的元素为:' + maxEle + ', 出现次数为:' + maxNum;
// }
// console.log(findMost2(arr));

function mostFrequent(arr) {
    var array = {};
    var freNum = 0;
    var freElement = null;
    for(var i =0; i<arr.length;i++){
        var a = arr[i];array[a] === undefined ? array[a] = 1 : (array[a]++);
        if(array[a] > freNum){
            freElement = a;
            freNum =array[a];
        }
    }
    return freElement ;
}
console.log(mostFrequent(arr));