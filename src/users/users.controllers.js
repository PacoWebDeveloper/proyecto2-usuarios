const usersDB = []

let baseId = 1

const usersController = {

    welcome : (req, res) => {
        return res.status(200).send({message: 'Welcome to Users API'})
    },

    getAllUsers : async (req, res) => {

        if (usersDB.length === 0)
            return await res.status(200).send({message: "There are not users"})
        else return await res.status(200).json(usersDB)
    },

    getUserById : async (req, res) => {
        const { id } = req.params
        
        const user = await usersDB.find(user => user.id == id)

        if (user)
            return res.status(200).json(user)
        else return res.status(404).send({message: "User not found"})
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