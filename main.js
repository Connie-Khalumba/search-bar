let numberOne = 1
let numbertwo = 2
let numberThree = 3
let numberFour = 4
let numberFive = 5
console.log("numberOne")

console.log(typeof(numberOne))

//Addition
console.log(numberOne + numberFour);

//Subtraction
console.log(numberThree - numbertwo);

//Multiplication
console.log(numberFour * numbertwo);

//Division
console.log(numberFour / numbertwo);

//Modulus
console.log(numberThree % numberFive);

//Combined operations
console.log(numbertwo + numberOne - numberThree / numberFour * numberFive);

console.log(typeof(numberOne.toString()));

//numbers to string
let strVariable = numberOne.toString()

console.log(typeof(strVariables));

// string to numbers
let numVariables = parseInt(strVariable)

console.log(typeof(numVariables));

//strings
let firststring = "Ganira did not come to school on saturday!!!"
console.log(typeof(firststring));

console.log(firststring);

let numberofcharacters = firststring.length

console.log(numberofcharacters);

let constance = 'Mwendwa said,"Man united lost!!!"'

console.log(constance);

let mwendwaSpeech = `Mwendwa said, "Manchester united won!"`

console.log(mwendwaSpeech);

// string concatination

let sentence = "Manchester" + ' ' + "is" + ' ' + "the" + ' ' + "best" + ' ' + "club"

console.log(sentence);

let sentenceTwo = 'Ashivaka' + ' ' + 'is' + ' ' + 'always' + ' ' + 'sleeping'

console.log(sentenceTwo);

let firstPart = 'we are learning'

let lastpart = 'Javascript'

let sentenceThree = firstPart + '' + lastpart + "today"

console.log(sentenceThree);

//Arrays
let developers = ['Rukia', 'Ashivaka', 'Faith', 'Mwendwa', 'Constance']

console.log(developers);

let primeNumbers = [2, 3, 11, 13, 17, 23, 19, 23, 29, 31, 37, 41, 43, 47]

console.log(primeNumbers);

console.log(primeNumbers[4]);

console.log(developers[4]);

console.log(developers.length)

developers.push('Ganira')

developers.push('Mike')

developers.push('Brian')

developers.push('Hassan')

console.log(developers);

developers.pop('Brian')

developers.pop('Constance')

console.log(developers);

developers.unshift('Constance')

developers.unshift('Brian')

developers.shift('Constance')

console.log(developers);

//combing arrays

let combinedArray = [developers + ',' + primeNumbers]

console.log(typeof(combinedArray));

//spread operator

let clonedevelopers = [...developers]

console.log(clonedevelopers);

let cloneprimeNumbers = [...primeNumbers]

console.log(cloneprimeNumbers);

let ages = [19, 21, 25, 22, 19, 18]

console.log(ages);

//spread operators
let gender = ['male', 'male', 'female', 'male', 'male', 'male']

console.log(gender);

let combinedAgesGender = [...ages, ...gender]

console.log(combinedAgesGender);

//Descending

primeNumbers.reverse()

console.log(primeNumbers);


//Ascending
primeNumbers.sort()

console.log(primeNumbers);

let presidents = ['Uhuru', 'Moi', 'Kibaki', 'Kenyatta', 'Ruto']

let opposition = ['Jaramogi', 'Matiba', 'Kibaki', 'Aukot', 'Raila']

let combinedResults = presidents.concat(opposition)

console.log(combinedResults);

console.log(primeNumbers);

// let newArray = primeNumbers.map()

//function
function Greetings(name) {
    console.log(name + ' ' + 'hello world');
}

Greetings('Ganira')
Greetings('Constance')
Greetings('Brian')
Greetings('Michelle')

function Addition(num1, num2, num3, num4, num5) {
    console.log(num1 + num2 + num3 + num4 - num5);
}

Addition(1000, 100, 300, 500, 1000)

function Addition(num1, num2, num3, num4, num5) {
    console.log(num1 + num2 + num3 + num4 + num5);
}


//Map method on arrays
console.log(primeNumbers);

let newArray = primeNumbers.map((primeNumber) => {
    return primeNumber * 2
})

console.log(newArray);

let evenNumbers = [2, 4, 8, 6, 10, 12, 14, 16, 18, 20]

let productByFour = evenNumbers.map((evenNumber) => {
    return evenNumber * 4
})

console.log(productByFour);

let animals = ['goat', 'cow', 'cat', 'dog']

let animalsinMany = animals.map((animal) => {
    return animal + 's'
})
console.log(animalsinMany);

let numbers = [4, 9, 16, 25, 36, 49, 64]

let squareRoot = numbers.map((number) => {
    return Math.sqrt(number);
})
console.log(squareRoot);

let square = numbers.map((num) => {
    return num ** 2
})
console.log(square);

let billionaires = ["Elon", "Jeff", "Billgates", "Ganira", "Ashivaka"]

billionaires.pop('Ashivaka')

billionaires.pop('Ganira')

console.log(billionaires);

billionaires.unshift('Ashivaka')

console.log(billionaires);

//Destructuring  es5                                                                                                                                              
let fools = ['donkey', 'monkey', 'sheep']
let fool1 = fools[0]
let fool2 = fools[1]
let fool3 = fools[2]

console.log(fools);

console.log(navigator.appVersion);

// console.log(window);

//OBJECTS
let mwendwa = {
    hair: "rastafarian",
    character: "ignorant",
    height: 5,
    tribe: "kamba",
    married: "null",
    networth: "undefined",
    'life expectancy': 100,
    hobbies: ['painting', 'cycling', 'ballerina', 'nyash']
}

console.log(mwendwa);

//Accessing the properties
//we use . notation to access object properties
console.log(mwendwa.hair);

console.log(mwendwa.tribe);

console.log(mwendwa['life expectancy']);

console.log(mwendwa.hobbies[3]);

//array of objects

let devClass = [{
        id: 01,
        name: 'Hassan Ondieki',
        age: 23,
        status: 'single',
        profession: 'web developer',
        tribe: 'luo',
        hobby: ['football', 'video games'],
        gender: 'male',
    },

    {
        id: 02,
        name: 'Ashivaka John',
        age: 22,
        status: 'single',
        profession: 'front end developer',
        tribe: 'luhya',
        hobby: ['swimming', 'watching tutorial', ],
        gender: 'male',
    },

    {
        id: 03,
        name: 'Philip Mwendwa',
        age: 19,
        status: 'single',
        profession: 'web developer',
        tribe: 'luo',
        hobby: ['football', 'video games', 'riding'],
        gender: 'male',
    },

    {
        id: 04,
        name: 'Fauz Swaleh',
        age: 27,
        status: 'single',
        profession: 'web developer',
        tribe: 'luo',
        hobby: ['football', 'partying'],
        gender: 'null'
    },

    {
        id: 05,
        name: 'Hillary Mukaka',
        age: 20,
        status: 'single',
        profession: 'web developer',
        tribe: 'luhya',
        hobby: ['swimming', 'riding'],
        gender: 'undefined'
    },

    {
        id: 06,
        name: 'Simon Ojuku',
        age: 18,
        status: 'single',
        profession: 'under taker',
        tribe: 'kisii',
        hobby: ['football', 'video games'],
        gender: 'female'
    },

    {
        id: 07,
        name: 'Abraham Mafwoli',
        age: 30,
        status: 'married',
        profession: 'snipper',
        tribe: 'Pokot',
        hobby: ['hustling', 'researcher'],
        gender: 'male'
    },

    {
        id: 08,
        name: 'Ann ngugi',
        age: 20,
        status: 'single',
        profession: 'Actress',
        tribe: 'kikuyu',
        hobby: ['photography', 'volunteering'],
        gender: 'female'
    },

    {
        id: 09,
        name: 'Mike Peace',
        age: 120,
        status: 'married',
        profession: 'astronaut',
        tribe: 'alien',
        hobby: ['hiking', 'video games', 'travelling'],
        gender: undefined
    },

    {
        id: 10,
        name: 'Majoni Wadenya',
        age: 100,
        status: 'married',
        profession: 'advocate',
        tribe: 'kikuyu',
        hobby: ['coding', 'swimming'],
        gender: 'male'
    },

    {
        id: 11,
        name: 'Constance Itolondo',
        age: 70,
        status: 'married',
        profession: 'Journalist',
        tribe: 'Teso',
        hobby: ['singing', 'drawing'],
        gender: 'female'
    },

    {
        id: 12,
        name: 'Ganira Dennis',
        age: 3,
        status: 'married',
        profession: 'web developer',
        tribe: 'giriama',
        hobby: ['sleeping', 'drinking porridge'],
        gender: 'kid'
    },

    {
        id: 13,
        name: 'Faith Victoria',
        age: 93,
        status: 'married',
        profession: 'Chef',
        tribe: 'maasai',
        hobby: ['eating', 'travelling'],
        gender: 'female'
    },

    {
        id: 14,
        name: 'Rukia Rashid Akinyi',
        age: 120,
        status: 'single',
        profession: 'film producer',
        tribe: 'digo',
        hobby: ['photography', 'listening to music'],
        gender: 'female'
    },

    {
        id: 15,
        name: 'Brian Nyamweya Isicho',
        age: 50,
        status: 'married',
        profession: 'farmer',
        tribe: 'kisii',
        hobby: ['running', 'flying'],
        gender: 'male'

    }

]

console.log(devClass);

for (i = 0; i < devClass.length; i++) {
    let body = document.querySelector('body')

    let container = document.createElement('div')

    let card = document.createElement('div')

    let name = document.createElement('h1')

    let image = document.createElement('img')

    let age = document.createElement('h3')

    let status = document.createElement('h3')

    let profession = document.createElement('h3')

    let gender = document.createElement('h3')

    let tribe = document.createElement('h3')

    let hobby = document.createElement('h3')


    name.textContent = devClass[i].name

    age.textContent = devClass[i].age

    status.textContent = devClass[i].status

    profession.textContent = devClass[i].profession

    gender.textContent = devClass[i].profession

    tribe.textContent = devClass[i].tribe

    hobby.textContent = devClass[i].hobby

    console.log([i]);




    console.log(devClass[i].name);

    console.log(body);

    body.append(container)

    container.append(card)

    card.append(name, profession, age, gender, tribe, hobby, status)
}

//mapping over array
// let developersNames = devClass.map((deve) => {
//     return deve.name
// })

// console.log(developersNames);

// let developersAges =
//     devClass.map((deve) => {
//         return deve.age
//     })

// console.log(developersAges);

// console.log(devClass[2]);


// //REDUCE() - reduces an array to a single value
// let nums = [4, 9, 16, 25, 36, 49]

// let sumOfNums = nums.reduce((curr, acc, i, arr) => {
//     return acc + curr
// }, 0)
// console.log(sumOfNums);

// let assign = [100, 1000, 2, 3, 10]

// let sumOfAssign = assign.reduce((curr, acc, i, arr) => {
//     return acc + curr
// }, 0)
// console.log(sumOfAssign);

// let alot = [10.33, 7.5, 8.19, 20.98, 30.99]

// let sumOfalot = alot.reduce((curr, acc, i, arr) => {
//     return Math.round(acc + curr)
// }, 0)
// console.log(sumOfalot);

// let day = new Date('4/4/2023')

// console.log(day);

// let hours = day.getHours()
// let today = new Date()

// console.log(today);

// //FILTER METHOD - returns a new array based on the condition given

// let Connie = [1, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 13, 14, 15]

// let newNumbers = Connie.filter((Connie) => {
//     return Connie > 3
// })

// console.log(newNumbers);

// let aboveTwenty = devClass.filter((deve) => {
//         return deve.age > 20
//     })
//     .map((deve) => {
//         return deve.age + 10
//     })
//     .reduce((acc, curr) => {
//         return acc + curr
//     }, 0)

// console.log(aboveTwenty)

// let Porsche = {
//     color: 'gold',
//     engine: 'V12',
//     seat: 6,
//     automatic: 'false',
//     accelarate() { 'I am accelerating!!!' }
// }

// console.log(Porsche);

// console.log(Porsche.accelarate());

// //Destructuring in Es5

// // let color = Porsche.color

// // let engine = Porsche.engine

// // let seat = Porsche.seat

// // let automatic = Porsche.automaticl



// //Destructuring in Es6
// let { color: paint, engine, seat, automatic } = Porsche

// console.log(paint, engine, seat, automatic);

// function Hello(name) {
//     console.log(name + ' ' + 'Hey how are you doing, hope youre fine');            
// }

// Hello('Diana')
// Hello('Melissa')
// Hello('Judy')
// Hello('Michelle')
// Hello('Andrew')

// function Addition(num1, num2, num3, num4, num5) {
//     console.log(num1 + num2 + num3 + num4 + num5);
// }

// Addition(100, 1120, 300, 500, 1100)

// function Multiplication(num1, num2, num3, num4, num5) {
//     console.log(num1 * num2 * num3 * num4 * num5);
// }

// Multiplication(120, 10, 300, 500, 2000)

// function Subtraction(num1, num2, ) {
//     console.log(num1 - num2);
// }

// Subtraction(120, 10, )

// function Division(num1, num2) {
//     console.log(num1, num2);
// }

// Division(2000 / 100)

// function Modulus(num1, num2) {
//     console.log(num1, num2);
// }

// Modulus(2000 % 12)

// let arr = []

// function feedArr(value) {
//     return arr.push(value)
// }
// feedArr(1, 2, 4)

// console.log(arr);

// //Arrow function - these are functions that came with es6
// const regards = (friendsName) => {
//     console.log(`Hello ${friendsName},how are you today?`);
// }

// regards('Amina Mohammed')

// const greetPeople = (friendsName) => console.log(`Hello ${friendsName},how are you`);

// greetPeople('developers')


// // FOR LOOP - repeat an action several times
// for (let i = 0; i < 15; i++)
//     console.log('hello Nairobi', i + 1);

// //IF STATEMENTS

// for (let m = 1; m < 10; m++) {
//     if (m % 2 !== 0) {
//         console.log(m);
//     }
// }
// //DIGITAL CLOCK
// // function ShowTime() {
// //     let date = new Date()

// //     let hours = date.getHours()

// //     let minutes = date.getMinutes()

// //     let seconds = date.getSeconds()

// //     let milliseconds = date.getMilliseconds()

// //     let time = `${hours}:${minutes}:${seconds}:${milliseconds}`

// //     setTimeout(() => ShowTime(), 1000)

// //     console.log(time);
// // }
// // ShowTime()



// let trial = [2, 3, 4, 5]

// for (let j = 2; j <= trial.length + 1; j++) {
//     console.log(j);
// }

// let sleep = ['Ashivaka', 'Ganira', 'Ann', 'Peace', 'Majoni', 'Kimani']

// for (let name = 0; name <= sleep.length + 1; name++) {
//     console.log(sleep);

//     console.log(name);
// }

// //WHILE LOOP
// // let num = 0
// // while (num <= 20)
// //     console.log(num);

// // num++

// //DO WHILE
// //  let total = 0
// //  do {
// //     Amina <=10
// //  }
// // while

// let squads = ['Manchester', 'Arsenal', 'Tottenham']

// for (squad in squads) {
//     console.log(squad);
// }

// //FOR OF
// let squadss = ['Manchester', 'Arsenal', 'Tottenham']

// for (squad of squadss) {
//     console.log(squad);
// }

// //FOR IN LOOP
// let tims = ['Manchester', 'Arsenal', 'Tottenham']

// for (tim in tims) {
//     console.log(tims[tim]);
// }

// //CLASS - templates for creating objects
// class Car {
//     constructor(model, color, engine, millage) {
//         this.model = model
//         this.color = color
//         this.engine = engine
//         this.millage = millage
//     }
//     walk() {
//         console.log('I am walking');
//     }

// }

// const BMW = new Car('X6', 'maroon', 'V16', 10)

// console.log(BMW);

// //DOM MANIPULATION
// let div = document.querySelector('div')

// console.log(div);

// //SELECTOR ALL
// let selector = document.querySelectorAll('div')

// console.log(selector);

// //using tag name
// let tagname = document.getElementsByTagName('tagname')

// console.log(tagname);

// //using classes
// let faith = document.querySelector('.faith')

// let speech = 'I have a husband and a boyfriend!!!'

// // faith.append(speech)

// let secondFaith = document.createElement('div')

// // faith.append(secondFaith)

// console.log(secondFaith);

// // faith.textContent = speech

// //using ids
// let ganira = document.getElementById('ganira')

// console.log(ganira);


// let codeLab = devClass.map((deve) => {
//     return deve.name
// })

// ganira.textContent = codeLab

// let carrierTwo = document.createElement('h1')

// let profession = devClass.map((deve) => {
//     return deve.profession
// })

// carrierTwo.textContent = profession

// ganira.append(carrierTwo)

// let carrierThree = document.createElement('p')

// let age = devClass.map((deve) => {
//     return deve.age
// })

// carrierThree.textContent = age

// ganira.append(carrierThree)

// //REMOVING ELEMENTS
// ganira.remove(carrierThree)

// // for (let i = 0; i < 5; i++) {
// //     text += "The number is " + i + "<br>";
// // }

// // const image = document.querySelector('img')

// // image.src = 'assets/image 1.jpg'

// // image[0].src = "assets/image 1.jpg"; // image 1
// // image[1].src = "assets/image 2.jpg"; // image 2
// // image[2].src = "assets/image 3.jpg"; // image 3


// // prompt("what is your name");

// // alert()
// // console.log(nums.map(Math.sqrt));

//REVSION
//FUNCTIONS
function greetings(name) {
    console.log(`Hello ${name}, how are you today`);
}
greetings("Hassan")

function talking(person1, person2, person3) {
    console.log(`Hello ${person1}, have you met ${person2}or ${person3}?`);
}
talking("Hassan", "Ojuku", "Ann")

const talk = (people1, people2, people3) =>
    console.log(`Hello ${people1}, have you met ${people2} or ${people3}?`);

talk("Faith", "Mukaka", "Constance")

//DESTRUCTURINGn es5
let cars = ["BMW", "Audi", "Porsche", "Mazda", "Jeep", "Defender", "Lamborghini"]

// let BMW = cars[0]
// let Audi = cars[1]
// let Porsche = cars[2]
// let Mazda = cars[3]
// let Jeep = cars[4]
// let Defender = cars[5]
// let Lamborghini = cars[6]

// console.log(BMW, Audi, Porsche, Mazda, Jeep, Defender, Lamborghini);


let [BMW, Audi, Porsche, Mazda, Jeep, Defender, Lamborghini] = cars
console.log(BMW, Audi, Porsche, Mazda, Jeep, Defender, Lamborghini);

//OBJECTS
let Abraham = {
    age: 18,
    genders: "male",
    married: "false",
    hobbies: ['eating', 'dancing', 'singing']

}
let age = Abraham.age
console.log(age);
let married = Abraham.married
console.log(married);
let hobbies = Abraham.hobbies
console.log(hobbies);
let genders = Abraham.genders
console.log(genders);

// let { age, genders, married, hobbies } = Abraham
// console.log(hobbies);

//LOOPS
//FOR LOOP
for (let Philip = 0; Philip < 20; Philip++) {
    console.log(Philip + 1);

}

let devs = ["Hassan", "Ojuku", "Faith", "Connie", "Ganira"]
for (Philip = 0; Philip < devs.length; Philip++) {
    console.log(devs[Philip]);
}

let car = {
    color: "blue",
    model: "BMW",
    year: 2023,
    engine: "5000cc"
}

for (let properties in car) {
    console.log(properties + " :" + car[properties]);
}

let j

for (j = 1; j <= 20; j = j + 1) {
    console.log(j)
}



for (let k = 1; k < 50; k++) {
    if (k % 2 == 0) {
        console.log(k);
    }
}

//UNIQUE VALUES
// let Bell = [2, 2, 5, 5, 6, 4, 4]
// let unique = Bell.filter(onlyUnique);
// console.log(unique);



let n = 15; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // Internal loop
    for (let j = 1; j <= i; j++) {
        string += j + "";
    }
    string += "\n";
}
console.log(string);


let list = [2, 3, 4, 5, 6, 7]
for (let d = 0; d < list.length; d++) {
    list[d] *= 2
}


console.log(list);

const heading = document.querySelector("#heading")

console.log(heading);

heading.textContent = "chelsea lost yesterday"

// heading.innerHTML = < h1 > I love singing Alto < /h1>

heading.style.color = "green"

heading.style.padding = '20px'

heading.style.backgroundColor = 'black'

heading.style.borderRadius = '5px'

// heading.style.boxShadow = 'grey'

heading.style.margin = "20px"

// heading.style.transition = "background-color 1.5s"

heading.addEventListener("mouseenter", function() {
    heading.style.backgroundColor = "#CCCCCC"
})

heading.addEventListener("mouseleave", function() {
    heading.style.backgroundColor = "black"
})

console.log(heading);

const btn = document.querySelector(".btn")

console.log(btn);

btn.style.cssText = `background-color:blue; padding:10px; border-radius:10px `
const click = () => {
    console.log('I have been clicked');
}

btn.addEventListener("click", click())

//API(Application Programming Interface)
let apiUrl = "https://api.github.com/users"
let users = fetch(apiUrl)
    .then(response =>
        response.json()
    ).then(data => console.log(data))
    .then(data =>
        console.log(data)
    )
console.log(users);

var form = document.getElementById("myForm")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    alert(search)

    //Remove spaces between names
    var originalName = search.split(' ').join(' ')

    document.getElementById("result").innerHTML = ""


    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)

            document.getElementById("result").innerHTML = `
            <a target="_blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
            `
        })
})








// let w = 6;
// let strin = "";
// // External loop
// for (let i = 1; i <= w; i++) {
//     // printing spaces
//     for (let j = 1; j <= w - i; j++) {
//         string += " ";
//     }
//     // printing star
//     for (let k = 0; k < 2 * i - 1; k++) {
//         string += "#";
//     }
//     string += "\n";
// }
// console.log(string);

// let x = 6; 
// let stri = "";
// // External loop
// for (let i = 0; i < n; i++) {
//     // printing spaces
//     for (let j = 0; j < i; j++) {
//         string += " ";
//     }
//     // printing star
//     for (let k = 0; k < 2 * (n - i) - 1; k++) {
//         string += "#";
//     }
//     string += "\n";
// }
// console.log(string);