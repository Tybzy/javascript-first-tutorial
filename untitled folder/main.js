// // functions declaration
// function greet(){
//     console.log('hello there');
// }

// greet();
// greet();
// greet();

// //functions expression - or calling functions
// const speak = function(){
//     console.log('good day!')
// };
// speak();
// speak();
// speak();

// //arguments & parameters

// const speak = function(name = 'Olawale', time = 'night'){
//     console.log(`good ${time} ${name}`)
// };
// speak();
// speak('Tybzy', 'morning');

// //returning values

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);
//after returning the name can change it shouldnt necessarily be the same name 

// //arrow function

// const calcArea = radius => 3.14 * radius**2;
// const area = calcArea(5);
// console.log('area is:', area);

//const name = 'shawn';

// const greet = () => 'hello world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30], 0.2));

//callback & foreach

// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     //do something
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shawn', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log('${index} - Hello ${person}');
// };
// people.forEach(logPerson);
// people.forEach((people, index) => {
//     console.log(index, people);
// });

//get a reference to the ul
// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shawn', 'chun-li'];

// let html = '';
// people.forEach(function(person){
//     //create html template
//     html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;

// // objects literals

// let user = {
//     name: 'crystal',
//     age: '25',
//     email: 'tybzykuti@gmail.com',
//     location: 'lagos',
//     blogs: ['why mac & cheese rule', '10 things to mkae with marmite']
// };

// console.log(user);
// console.log(user.name);

// user.age = 30;
// console.log(user.age);

// console.log(user['email']);

// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes:50}
// ];
// console.log(blogs)

let user = {
    name: 'crystal',
    age: '25',
    email: 'tybzykuti@gmail.com',
    location: 'lagos',   
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes:50}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
console.log(this);

user.login();
user.login();

const names = 'mario';
names.toUpperCase();