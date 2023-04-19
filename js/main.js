// const ani = ['cat', 'dog', 'turtle', 'cat1', 'cat2']
//
// console.log(ani.length)
// const mas = ani.slice(1,4)
// console.log(mas)
//
// ani.sort()
// console.log(ani)
//
// const nums = [2,4,1,5,7,2,3,6,30,12]
// nums.sort(function (a,b){return a - b})
// console.log(nums)
//
// console.log('min',nums[0],'max',nums[nums.length - 1])





//массив из случ элем и вывод макс мин
// let n = prompt('введите количество значений массива:')
// const arr = []
//
//
// for (let i = 0; i < n; i++) {
//     arr.push(Math.floor(Math.random() * 100 + 1))
// }
//
//
// console.log(arr)
//
// arr.sort(function (a,b){return a - b})
// console.log('min',arr[0],'max',arr[arr.length - 1])


// const nums = [40,42,43,12,22]
// const nums2 = []
// for (let i = 0; i < nums.length; i++) {
//     // console.log(nums[i]*2)
//     nums2.push(nums[i]*2)
// }
// console.log(nums)
// console.log(nums2)
//
// const ani = ['cat', 'dog', 'turtle', 'cat1', 'cat2']
//
// for (let i = 0; i<ani.length; i++) {
//     console.log('Привет,',ani[i])
// }
//
// for (i in ani) {
//     console.log('Привет,',ani[i])
// }

// let k = 0
// while (k < 10) {
//     console.log(k)
//     k++
//     // if (k == 8) {break}
// }

// let r = 0
// let count = 0
// while (r!==95) {
//     r = Math.floor(Math.random()*100+1)
//     count++
//     console.log(r)
// }
// console.log(count,'попыток')


$('#butk').click(function () {
    f1('k')
})

$('#butn').click(function () {
    f1('n')
})

$('#butb').click(function () {
    f1('b')
})

let comp = ''
let hum = ''
const turn = ['k','n','b']
const win = ['kn','nb','bk']
const fail = ['kb','nk','bn']
const draw = ['kk','nn','bb']
let scoreh = 0
let scorec = 0


function f1(x) {
    hum = x
    let r = Math.floor(Math.random()*3)
    comp = turn[r]
    console.log(hum,comp)
    $('#out').text('человек '+hum+', робот '+comp)
    prov()
}

function prov() {
    let result = hum+comp
    if (win.includes(result)) {
        scoreh++
        $('#out').append(' Вы выиграли ' + scoreh + ':' + scorec)
    } else if (fail.includes(result)) {
        scorec++
        $('#out').append(' Вы проиграли ' + scoreh + ':' + scorec)
    } else {$('#out').append(' Ничья ' + scoreh + ':' + scorec)
    }
}


