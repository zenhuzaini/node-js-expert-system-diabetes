const { Rule, Rools } = require('rools')
const symptoms = require('./diabetes_symptoms')

const facts = symptoms.setSymptoms(true, 300, 160, true, true, true, true, true, true, true, true, true, true, (res) => {
    return res
});

console.log(facts)

// {
//     facts.heritted = true,
//         facts.s1 = true,
//         facts.s2 = true,
//         facts.s3 = true,
//         facts.s4 = true,
//         facts.s5 = true,
//         facts.s6 = true,
//         facts.s7 = true,
//         facts.s8 = true,
//         facts.s9 = true,
//         facts.s10 = true
// }

//check if one of the parents has diabetic
var diabetes_parent_risk_fact = ''
const diabetes_parent_risk = new Rule({
    name: 'detecting diabetes if parent',
    when: [
        (facts) => facts.hasDiabetesParent === true || facts.hasDiabetesParent === false
    ],
    then: (facts) => {
        if (facts.hasDiabetesParent === true) {
            diabetes_parent_risk_fact = {
                message: facts.result.parent_risk.message = "Beware, If your parent is diabetes, then you could be having diabetes..",
                status: facts.result.parent_risk.status = true
            }
            return diabetes_parent_risk_fact
        } else {
            diabetes_parent_risk_fact = {
                message: facts.result.parent_risk.message = "You likely have no diabetes Type 1..",
                status: facts.result.parent_risk.status = false
            }
            return diabetes_parent_risk_fact
        }
    }

})

//MED TEST
//DIAGNOSTIC TESTS
//DIAGNOSTIC test  Fasting Plasma Glucose 8 hours fasting
// Kadar gula darah normal: di bawah 100 mg/dL
// Pradiabetes: 100-125 mg/dL
// Diabetes di atas 125 mg/dL
var fpg_fact = ''
const fpg = new Rule({
    name: 'detecting fpg glucose',
    when: [
        (facts) => facts.medtest.fpg
    ],
    then: (facts) => {
        if (facts.medtest.fpg >= 125) {
            fpg_fact = {
                message: facts.result.test_result.fpg.message = 'It is above normal!, Sorry you have diabetes',
                status: facts.result.test_result.fpg.status = true
            }
            return fpg_fact
        } else if (facts.medtest.fpg >= 100 && facts.medtest.fpg <= 125) {
            fpg_fact = {
                message: facts.result.test_result.fpg.message = 'Be careful! you may have Diabetes! glucose between 100 and 125 is diagnosed to have paradiabetes',
                status: facts.result.test_result.fpg.status = true
            }
            return fpg_fact
        } else {
            fpg_fact = {
                message: facts.result.test_result.fpg.message = 'Glucose above 60 is normal. If it is below, check to the doctor',
                status: facts.result.test_result.fpg.status = false
            }
        }
    }
})


//Diagnostic test Two hours after eating Gula darah 2 jam postprandial 
// Kadar gula darah normal: di bawah 140 mg/dL
// Pradiabetes: 140-199 mg/dL
// Diabetes: lebih dari 200 mg/ dL
var gthae_facts = ''
const gthae = new Rule({
    name: 'glucose two hours after eating',
    when: [
        (facts) => facts.medtest.gthae
    ],
    then: (facts) => {
        if (facts.medtest.gthae >= 200) {
            gthae_facts = {
                message: facts.result.test_result.gthae.message = 'It is above normal!, Sorry you have diabetes',
                status: facts.result.test_result.gthae.status = true
            }
            return gthae_facts
        } else if (facts.medtest.fpg >= 140 && facts.medtest.fpg <= 199) {
            gthae_facts = {
                message: facts.result.test_result.gthae.message = 'Be careful! you may have Diabetes! glucose between 140 and 199 is diagnosed to have paradiabetes, for this test',
                status: facts.result.test_result.gthae.status = true
            }
            return gthae_facts
        } else {
            gthae_facts = {
                message: facts.result.test_result.gthae.message = 'Glucose under 140 is normal. If it is below, check to the doctor',
                status: facts.result.test_result.gthae.status = false
            }
            return gthae_facts
        }
    }

})


//if you got diabetes 
const allsymptoms = new Rule({
    name: 'pople who defintely have diabetes',
    when: [
        (facts) => facts.hasDiabetesParent === true,
        (facts) => facts.symptoms.s1 === true,
        // (facts) => {
        //     facts.hasDiabetesParent === true,
        //         facts.s1 === true,
        //         facts.s2 === true
        //     // facts.s3 = true,
        //     // facts.s4 = true,
        //     // facts.s5 = true,
        //     // facts.s6 = true,
        //     // facts.s7 = true,
        //     // facts.s8 = true,
        //     // facts.s9 = true,
        //     // facts.s10 = true
        // }
    ],
    then: (facts) => {
        facts.result.finalResult = 'You definitely has Diabetes! go check the doctor'
    }
})


//eval
const evaluation = async (callback) => {
    const rools = new Rools()
    await rools.register([diabetes_parent_risk, allsymptoms, fpg, gthae])
    await rools.evaluate(facts)
    console.log(await rools.evaluate(facts))
    return callback(facts)
}

evaluation((res) => {
    console.log(JSON.stringify(res))
})


// console.log(JSON.stringify(facts))