class UserStorage{
    static #users = {
        id: ["sang", "dkdk", "ckck"],
        psword: ["1234", "1234", "123456"],
    }

    static getUsers(){
        return this.#users
    }
}

module.exports = UserStorage