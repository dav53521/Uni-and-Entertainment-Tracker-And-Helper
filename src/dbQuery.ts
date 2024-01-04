import { Client } from "pg"

export class dbConnectionAndQuery {
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
    }

    async insertIntoDatabase(tableToUse: string, dataToInsert: string) {
    }
}