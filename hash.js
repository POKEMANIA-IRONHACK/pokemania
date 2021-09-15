 const bcrypt = require('bcrypt');
 
 const password = 'EELSTER'
 const salt ='$2b$10$ZxdyeIOVY3Nrz14BOaYhZu'

 console.log(salt)
 const hash = bcrypt.hashSync(password, salt);
 
 console.log(hash)