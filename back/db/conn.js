const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb+srv://rian:uLZmZwoiNrZZqhbQ@todocluster.ipfjgys.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conectado');
}

main().catch((err) => console.log(err))

module.exports = mongoose