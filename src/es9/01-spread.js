const user = {username: 'aaron', age: 25, country: 'PE'};
const { username, ...values } = user;
console.log(username);
console.log(values);