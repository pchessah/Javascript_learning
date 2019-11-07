const mongoose = require ('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' , {
    useNewUrlParser:true, 
    useCreateIndex: true 
});

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type :String,
//         required:true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//             }
//         }

//     },
//     password: {
//         type:String,
//         required: true,
//         minLength: 7,
//         trim: true,
//         validate (value) {
//             if (value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain password')
//             }
//         }
//     }
// });


// const me = new User({
//     name: '      Paul    ',
//     email:'PAUL@gmail.com',
//     password: 'paul0987'
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!', error);
// });

// const me = new User({
//     name: 'Andrew',
//     age: '28'
// });

// me.save().then(()=> {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!', error);
// });

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     }, 
//     completed: {
//         type: Boolean
//     }
// });

// const task = new Task({
//     description: 'Learn how to deal with snakes',
//     completed: false 
// });

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// });


// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// });

// const task = new Task({
//     description: 'Go to eat lunch',
// });
// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// });



