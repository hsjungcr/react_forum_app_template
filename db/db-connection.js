const pg = require('pg');
var password = 'encodedbase64PW' //Store in ENV and safe

var config = {
    user: 'postgres', // env var: PGUSER
    database: 'postgres',
    password: Buffer.from(password, 'base64').toString(),
    host: 'dbhost', // Server hosting the postgres database
    port: 5432, // env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}

const pool = new pg.Pool(config);

async function query(q) {
    const client = await pool.connect();
    try {
        res = await client.query(q);
        await client.query('COMMIT');
    } catch (err) {
        await client.query('ROLLBACK');
        throw err
    } finally {
        client.release();
    }
    return res;
}

async function main() {
    try {
        const { rows } = await query('SELECT * FROM access_log')
        console.log(JSON.stringify(rows))
    } catch (err) {
        console.log('Database ' + err)
    }
}

main();
