const mongoose = require('mongoose');



const dbConnection = async() => {

    try {

        await mongoose.connect( `${process.env.MONGODB_CNN}/MyVet` , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos online');
        console.log(process.env.MONGODB_CNN);


        } catch (error) {
            console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    dbConnection
}