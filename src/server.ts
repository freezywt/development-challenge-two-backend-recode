import * as express from 'express'
import * as dotenv from 'dotenv'
import router from './routes/patients'
import { connectToDynamoDb } from './utils/dynamoDb'

dotenv.config()

const app = express.default()

connectToDynamoDb()
app.use(router)

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`)
})


export default app