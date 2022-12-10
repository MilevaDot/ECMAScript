function newUser(name, age, country) {
    var name = name || 'Aaron';
    var age = age || 25;
    var country = country || 'PE';
    console.log(name, age, country);
}

newUser();
newUser('Dan', 23, 'CO');

function newAdmin(name='Aaron', age=25, country='PE') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'CH');