// enhaced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId,
    }
}

console.log(newUser("Mileva.~", 25, "PE", 1));