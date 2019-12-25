const express = require('express')
const app = express()

const expert = require('./utils/diabetes')

app.get('/', async (req, res) => {
    try {
        const result = await expert.evaluation()
        res.send({
            result
        })
    } catch (error) {
        res.send({
            error
        })
    }

})

const port = process.env.PORT || 1996

app.listen(port, () => {
    console.log('port listen ', port)
})
