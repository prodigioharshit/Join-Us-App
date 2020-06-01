var faker = require('faker')



for(var i=0;i<5;i++){
    var address = faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.state();
    console.log(address)
}