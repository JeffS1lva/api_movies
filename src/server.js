require('express-async-errors')

const express = require('express')

const app = express()

const migrationsRun = require('./database/sqlite/migrations')

const routes = require('./routes')

const AppError = require('./utils/AppError')

app.use(express.json())

migrationsRun()

app.use(routes)

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: 'error',
        message: 'Server internal error'
    })
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))