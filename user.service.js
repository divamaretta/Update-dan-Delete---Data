const db = require("../../connection");

module.exports = {
serviceAddUser: (data, callBack) => {
    db.query(
      `insert into regristation(firstName, lastName, gender, email, password, number)
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
        if (error) {
          return callBack(error);
        } else {
        return callBack(null, result);
        }
      }
    );
  },

serviceGetUsers: callBack => {
    db.query(`select * from regristation`, [], (err, results, fields) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, results);
      }
    });
  },
} 
module.exports = {
serviceUpdateUser: (data, callBack) => {
  db.query(
      `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id=?`,
      [
          data.first_name,
          data.last_name,
          data.gender,
          data.email,
          data.password,
          data.number,
          data.id
      ],
      (err, results) => {
          if(err){
              return callBack(err);
          } else {
              return callBack(null, results);
          }
      }
  );
},
serviceDeleteUser: (data,callBack)=>{
  db.query(
     `delete from registration where id = ?`,
     [data,id],
     (err,result,fields)=>{
         if(err){
             return callBack(err)
         }else{
             return callBack(null,result)
         }
     });
}
};
