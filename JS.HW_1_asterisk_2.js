// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const age_2 = 18
const age_3 = 60

const checkAge1 = function (age) {
    if (typeof age == "number") {

    if (age < age_2) {
        console.log("You don’t have access cause your age is " + age + " It’s less then ")
    } 
    else if (age >= age_2 && age < age_3) {
        console.log("Welcome  !")
    }
    else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    }
    else {
        console.log("Technical work")
    }
} else {console.log("Error")}
}

checkAge1(17);
checkAge1("2");