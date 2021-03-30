const {Router} = require('express')
const router = new Router()
const fs = require('fs')

router.get('/', (req, res) => {
    const coffe = fs.createReadStream('./data/menu.json')
    coffe.pipe(res)
})


module.exports = router