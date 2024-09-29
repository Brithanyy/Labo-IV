class User {
    #id
    #pass

    constructor(id,user,pass,email,isActive){
        this.#id = id
        this.user = user
        this.#pass = pass
        this.email = email
        this.isActive = isActive
    }
    ///Solo implementar los get y los set si los atributos son privados
    get id() {
        return this.#id
    }
    get password() {
        return this.#pass
    }
    set password(newPass) {
        return this.#pass = newPass
    }
}

