const express = require('express')
const app = express()
const hbs = require('hbs')

const path = require('path')
const viewLocation = path.join(__dirname, '../templates')
const publicPath = path.join(__dirname, '../public/')

// console.log(publicPath)
//.use for public, .set for template, views
app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views', viewLocation)

const partials = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partials)

const expert = require('./utils/diabetes')

app.get('/', (req, res) => {
    res.render('homepage')
})


app.get('/evaluation', async (req, res) => {
    try {
        const values = {
            dp: JSON.parse(req.query.dp),
            s1: JSON.parse(req.query.s1),
            s2: JSON.parse(req.query.s2),
            s3: JSON.parse(req.query.s3),
            s4: JSON.parse(req.query.s4),
            s5: JSON.parse(req.query.s5),
            s6: JSON.parse(req.query.s6),
            s7: JSON.parse(req.query.s7),
            s8: JSON.parse(req.query.s8),
            s9: JSON.parse(req.query.s9),
            s10: JSON.parse(req.query.s10),
            fpg: req.query.fpg,
            gthae: req.query.gthae
        }


        const { dp, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,
            fpg, gthae } = values

        // if (!dp || !s1 || !s2 || !s3 || !s4 || !s5 || !s6 || !s7 || !s8 || !s9 || !s10 || !fpg || !gthae) {
        //     return res.send({ error: 'you have to ake sure that the query string is correct' })
        // }

        console.log(values)

        //const result = await expert.finalresult(true, 300, 400, false, false, false, false, false, false, false, false, false, false)
        const result = await expert.finalresult(dp, fpg, gthae, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10)

        return res.json(result)
    } catch (error) {
        return console.log(error)
    }
})

//fr example
app.get('/evaluationn', async (req, res) => {
    const result = await expert.finalresult(false, 10, 100, true, true, false, false, false, false, false, false, false, false)
    //return console.log(result)
    return res.json(result)
})


const port = process.env.PORT || 1996

app.listen(port, () => {
    console.log('port listen ', port)
})
