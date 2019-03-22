const axios = require('axios')

module.exports = async function getUser(data) {
    try{
        const user = await axios.get(`https://api.github.com/users/${data}`)
        return user
    }catch(err){
        return err
    }
}

