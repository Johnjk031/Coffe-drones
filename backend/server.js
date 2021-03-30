const app = require('./index.js')
const PORT = 8080
const coffeRouter = require('./routes/index.js')
const cors = require('cors')

app.use(cors())
app.use('/api/coffe', coffeRouter)

// script to start the server
app.listen(PORT, (err) => {
    if (err) throw err
    console.log('server is running on http://localhost:8080')
})
