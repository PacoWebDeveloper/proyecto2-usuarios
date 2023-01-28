const usersDB = []

let baseId = 1

const usersController = {

    welcome : (req, res) => {
        return res.status(200).send({message: 'Welcome to Users API'})
    },

    getAllUsers : async (req, res) => {
        return await res.status(200).json(usersDB)
    },

    getUserById : async (req, res) => {
        const { id } = req.params

        console.log(id)

        const user = await usersDB.find(user => user.id = id)

        return res.status(200).json(user)
    },

    createUser : (req, res) => {
        const { firstName, lastName, email, password, age } = req.body
        const id = baseId++

        const newUSer = {
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "age": age
        }

        usersDB.push(newUSer)

        return res.status(201).json(newUSer)
    }
}

module.exports = usersController