const pg = require('pg');

const config = {
    user:'user',
    password:'password',
    database:'database',
    currentSchema:'schema',
    port:5432,
    host:'host',
    max:10,
    idleTimeoutMillis:30000,
    ssl: true,
};

const myDbCall = async (config) => {
    var client = new Client(config);
    await client.connect();
    const res = await client.query("SELECT * FROM myTable");
    await client.end();
    return res;
}