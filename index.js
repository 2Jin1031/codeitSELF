function createUser(email, birthdate) {
        const user = {
        email,
        birthdate,
        buy(item) {
            console.log(`${this.email} buys ${item.name}`);
        },
    };
return user;
}

const item = {
    name: '스웨터',
    price: 30000,
};

const user1 = createUser('test1@naver.com', '1234-05-06');
const user2 = createUser('test2@naver.com', '1234-07-08');
const user3 = createUser('test3@naver.com', '1234-09-10');

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);

user1.buy(item);
user2.buy(item);
user3.buy(item);