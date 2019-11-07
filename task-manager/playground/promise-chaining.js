require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5db831dbd29e640aada0de63', { age: 19}).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 19});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

//USING ASYNC
const updateAgeAndCount = async(id, age) => {
    const user =await User.findByIdAndUpdate(id, {age});
    const count =await User.countDocuments ({age});
    return count;
};
updateAgeAndCount('5db831dbd29e640aada0de63' , 42).then((count) => {
    console.log(count);
})