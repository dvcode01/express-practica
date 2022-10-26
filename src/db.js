const mysql = require('mysql2/promise');


async function connectDB(){
    const connection = await mysql.createConnection({
        host: 'us-east.connect.psdb.cloud',
        user: '98qz10n2zq9brykydzka',
        password: 'pscale_pw_gaMk9NurclXxeT86hA84gbSDzcXAUykHMDDjreCASZf',
        database: 'expressdb',
        ssl: {
            rejectUnauthorized: false
        }
    });

    const result = await connection.query('SELECT "hello world" AS RESULT');
    console.log(result)
}

module.exports = connectDB;
