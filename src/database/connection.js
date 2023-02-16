import sql from "mssql"

const dbSettings = { 
    user: "darius",
    password: "darius1234",
    server: "localhost", //DESKTOP-R5SSJDK
    database: "Northwind",
    options: {
        encrypt: true, //for Azure
        trustServerCertificate: true
    }
}


export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings)
        return pool;
    }
    catch(error){
        console.error(error);
    }
}

export {sql};
