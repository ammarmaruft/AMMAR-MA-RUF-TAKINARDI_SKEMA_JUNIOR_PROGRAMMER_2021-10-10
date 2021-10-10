//mendifinisikan variabel number
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => { // untuk menambahkan click event ke setiap tombol operator
    number.addEventListener("click", (event) => {    
        inputNumber(event.target.value)
        updateScreen(currentNumber) // merubah argument updateScreen menjadi currentNumber
    })
})
// mendefinisikan fungsi untuk memperbarui layar tampilan pada calculator-screen dengan updateScreen
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}
// fungsi menyimpan angka dan operasi hitung untuk melakukan kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => { //untuk menginput number 
    if(currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number //input number lebih dari dua
    }
}

const operators = document.querySelectorAll(".operator") //mendifiniskan operator
operators.forEach((operator) => { //untuk mengklik pada event setiap tombol operator
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value) //untuk input kalkulator
    })
})

const equalSign = document.querySelector('.equal-sign') //mendfiniskan equal sign(=)

equalSign.addEventListener('click', () => { //menjalankan equalsign saat diklik
    calculate()
    updateScreen(currentNumber) //memperbarui layar saat samadengan diklik
})

const calculate = () => { //untuk fungsi kalkulasi pada kalkulator
    let result = ''
    switch(calculationOperator) {
        case "+": //menggunakan parsefloat untuk mendapatkan angka desimal
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break //menggunakan break sebagai pembatas case satu dengan yg lain
        case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber) //kalkulasi kurang
            break 
        case "*":
            result = parseInt(prevNumber) * parseInt(currentNumber) //kalkulasi kali
            break
        case "/":
            result = parseInt(prevNumber) / parseInt(currentNumber) //kalkulasi bagi
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator  = ''
}
// membuat tombol AC agar dapat bekerja dengan baik
const clearBtn = document.querySelector('.all-clear')// mendefiniskan clearBtn

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => { //mendifiniskan fungsi clearAll /untuk menghapus
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0' //menetapkan angka nol
}
//membuat agar kalkulator dapat kalkulasi desimal
const decimal = document.querySelector('.decimal') //mendefiniskan decimal

decimal.addEventListener('click', (event) => { //untuk menjalankan saat tombol desimal diklik
    inputDecimal(event.target.value)
    updateScreen(currentNumber) //update layar ketika desimal diklik
})
//mencegah penginputan desimal secara berulang
inputDecimal = (dot) => { 
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot //menambah desimal ke currentNumber
}

const inputOperator = (operator) => { //mendefinisikan inputOperator
    if (calculationOperator === '') {
        prevNumber = currentNumber // memberikan nilai yang tersimpan di currentNumber pada prevNumber
    }
    calculationOperator = operator // memberikan operator ke calculationOperator sebagai argumen
    currentNumber = '0'
}