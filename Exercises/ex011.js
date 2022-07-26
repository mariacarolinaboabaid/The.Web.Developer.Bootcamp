const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' }
]

// AVERAGE OF INCOME
let averageIncome = (person, key) => {
    let sum = 0
    for (let individual of person) {
        sum = sum + parseInt(individual[key])
    }
    let media = sum / person.length
    console.log(`The average of the incomes is: ${media}`)
}
averageIncome(people, "salary")

// PEOPLE OLDER THAN 30
// Current Date
let dateNow = new Date()
let yearNow = dateNow.getFullYear()
let monthNow = dateNow.getMonth() + 1
let dayNow = dateNow.getDate()

const over30Age = []
let checkingAge = (person, name, dateOfBirth) => {
    for (let individual of person) {
        let year = parseInt(individual[dateOfBirth].slice(-4))
        let month = parseInt(individual[dateOfBirth].slice(0, 2))
        let day = parseInt(individual[dateOfBirth].slice(-7, -5))
        if (Math.abs(year - yearNow) === 30 && month - monthNow === 0 && day - dayNow <= 0) {
            over30Age[over30Age.length] = " " + individual[name]
        }
        else if (Math.abs(year - yearNow) === 30 && month - monthNow < 0) {
            over30Age[over30Age.length] = " " + individual[name]
        }
        else if (Math.abs(year - yearNow) > 30){
            over30Age[over30Age.length] = " " + individual[name]
        }
    }
    console.log(`The employees that have more than 30 years are:${over30Age}`)
}
checkingAge(people, "firstName", "DOB")

// PEOPLE FULL NAME 
const fullNameArray = []
let fullName = (person, firstName, lastName) => {
    for (let individual of person) {
        var allName = individual[firstName].concat(" ", individual[lastName])
        fullNameArray[fullNameArray.length] = " " + allName 
    }
    console.log(`Full name of the employes:${fullNameArray} `)
}
fullName(people, "firstName", "lastName")

// HOW MANY PEOPLE WORKING IN EACH DEPARTAMENT:
let dev = 0
let mkt = 0
let sales = 0 
let ofMng = 0
let makeDictAge = (person, areaWork) => {
    for (let i = 0; i < person.length; i++) {
        if (person[i][areaWork] === "Marketing"){
        mkt += 1
        } else if (person[i][areaWork] === "Development"){
            dev += 1
        }
        else if (person[i][areaWork] === "Sales"){
            sales += 1
        } else if (person[i][areaWork] === "Office Management"){
            ofMng += 1
        }
    }
    console.log(`Numbers of employees for each departament: 
a) Development: ${dev}
b) Marketing: ${mkt}
c) Sales: ${sales}
d) Office Management: ${ofMng}`)
}
makeDictAge(people, "department")