import { Client } from "pg"

export default class dbConnectionAndQuery {
    client: Client

    constructor(private databaseToUse: string, private username: string, private userPassword: string) {
        this.client = new Client({
            host: 'localhost',
            port: 5432,
            database: databaseToUse,
            user: username,
            password: userPassword
        })
    }

    async queryDatabase(tableToUse: string, condition: string, dataToFind: string) {
        this.client.connect()


        this.client.end()

        this.client.on('error', (e) => {
            alert('An exception has occured when trying to query the database')
            console.log("Error type" + e.name)
            console.log("Error message" + e.message)
            console.log("Stack trace" + e.stack)
        })
    }

    async insertIntoDatabase(tableToUse: string, dataToInsert: string) {
    }
}