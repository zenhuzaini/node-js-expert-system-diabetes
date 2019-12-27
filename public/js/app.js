const questionsform = document.querySelector('form')
console.log(questionsform)
//symptoms
const p = document.querySelector('#parent-value')
const fpg = document.querySelector('#fpg')
const gthae = document.querySelector('#gthae')
const s1 = document.querySelector('#s1')
const s2 = document.querySelector('#s2')
const s3 = document.querySelector('#s3')
const s4 = document.querySelector('#s4')
const s5 = document.querySelector('#s5')
const s6 = document.querySelector('#s6')
const s7 = document.querySelector('#s7')
const s8 = document.querySelector('#s8')
const s9 = document.querySelector('#s9')
const s10 = document.querySelector('#s10')

// console.log(p, fpg, gthae, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10)

const result_message = document.querySelector('#results')

const expertresult = async (p, fpg, gthae, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) => {
    result_message.textContent = "..loading .."
    const url = await `evaluation?fpg=${fpg}&dp=${p}&gthae=${gthae}&s1=${s1}&s2=${s2}&s3=${s3}&s4=${s4}&s5=${s5}&s6=${s6}&s7=${s7}&s8=${s8}&s9=${s9}&s10=${s10}`
    //const url = await `/evaluation/?dp=true&fpg=890&gthae=140&s1=true&s2=true&s3=false&s4=false&s5=false&s6=false&s7=false&s8=false&s9=false&s10=false`
    fetch(url)
        .then((result) => {
            result.json().then((res) => {
                console.log('here is the result : ', res)
                result_message.textContent = res.result.final_result
            })
        })
}


questionsform.addEventListener('submit', (e) => {
    e.preventDefault();
    expertresult(p.value, fpg.value, gthae.value, s1.value, s2.value, s3.value, s4.value, s5.value, s6.value, s7.value, s8.value, s9.value, s10.value)
})



