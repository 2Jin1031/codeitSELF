function User(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
    this.buy = function(item) {
        console.log(`${this.email} buys ${item.name}`);
    };
}

const item = {
    name: '스웨터',
    price: 30000,
};

const user1 = new User('test1@naver.com', '1234-01-02');
const user2 = new User('test2@naver.com', '1234-03-04');
const user3 = new User('test3@naver.com', '1234-05-06');

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);
console.log(user1.birthdate);
user1.buy(item);