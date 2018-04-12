// 编写一个函数，实现以下功能：计算出一个字符串共有多少个单词组成。
// function countWords(message){
//     // wirte your code here
// }
//countWords('Good morning, I love JavaScript.'); // should return 5

function countWords(message) {
    var count = 0;
    for(var i = 0; i<message.length; i++){
        if(message.charAt(i) === " " ||  message.charAt(i) === "," ){
            count++;
        }

    }
    return count;
}
console.log(countWords('to be or not to be,that is a question.'));
// var message = 'Good morning, I love JavaScript.';
// console.log(countWords(message));
