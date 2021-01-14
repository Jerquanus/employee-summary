// TODO: Write code to define and export the Employee class

class Employee {
        constructor(name, id, email){
            this.name = name;
            this.id = id;
            this.email = email;
            this.role = 'Employee';
            
        }   

        getName(){
            return this.name
        }

        getId(){
            return this.id
        }

        getEmail(){
            return this.email
        }   
}
const getRole = new Employee();






module.exports = Employee







// npm run test-employee

//     getEmail(){
//         return this.email;
//     }

//     getPassword(){ 
//         return this.password;
//     }

//     changePassword(newPW){
//         this.password = newPW

//     }


// }


// const jerquanus = new User('newemail@j.com', 'asdf')


// const frank = new User('neweremail@f.com', '123456')



// console.log('JERQUANUS EMAIL--->', jerquanus.getEmail())

// console.log('FRANKS OLD PASSWORD---> ', frank.getPassword())
// console.log('CHANGING PASSWORD......', frank.changePassword('789'))
// console.log('FRANK NEW Password---> ', frank.getPassword())


// class Vehicle{
//     constructor(color, year){
//         this.color = color;
//         this.year = year;
//     }

//     honk() {
//         return ' GET OUT OF MY WAY!!!!'
//     }

// }

// class Car extends Vehicle{
//     constructor(color, year, make, model){
//         super(color, year)
//         this.make = make;
//         this.model = model

//     }

//     honk() {
//         return 'BEEEEEEEEEEP'
//     }
// }

// const junker = new Car('grey', 1981, 'Oldsmobile', 'Cutlass Supreme')


// console.log('MY FIRST CAR-->', junker)
// // class Truck  extends Vehicle{
// //     super()
// // }

// class Motorcycle  extends Vehicle{
//     constructor(){
//       super()
//      }

//      honk() {
//          return 'beep'
//      }
