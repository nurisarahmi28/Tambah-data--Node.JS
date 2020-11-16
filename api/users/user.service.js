const db = require("../../config/connection");

module.exports = {
    serviceAddUser: (data,callBack) => {
        db.query(
            `insert into registration(firstName,lastName,gender,email,password,number)
                values (?,?,?,?,?,?)`,
                [
                    data.first_name,
                    data.last_name,
                    data.gender,
                    data.email,
                    data.password,
                    data.number
                ],
                (error, result) => {
                    if(error){
                        return callBack(error);
                    } else {
                        return callBack(null,result);
                    }
            }
        );
    },
    serviceGetUsers:callBack => {
        db.query(
            `select*from registration`,[],(err, results,fields) => {
            if (err) {
                return callBack(err);
            } else {
                return callBack(null, results);
            }
        });
    },
};