//symptoms
// increased hunger
// 

//
// 
// 
// 
// 
// 
//


// s1 increased thirst (Sering merasa haus.
// s2 frequent urination (Sering buang air kecil, terutama di malam hari.
// s3 increased hunger (Sering merasa sangat lapar.
// s4 unintentional weight loss (Turunnya berat badan tanpa sebab yang jelas.
// s5 Very dry skin
// s6 Tingling or numbness in hands or feet
// s7 extreme fatigue / Tiredness (Lemas.
// s8 blurry vision (Pandangan kabur.
// s9 sores that don’t heal ( Luka yang sulit sembuh.
// s10 More infections than usual  (Sering mengalami infeksi, misalnya pada gusi, kulit, vagina, atau saluran kemih.

const setSymptoms = (hasDiabetesParent, fpg, gthae, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, callback) => {
    let parameters = {
        hasDiabetesParent: hasDiabetesParent,
        medtest: {
            fpg: fpg, //fasting plasma glucose
            gthae: gthae //glucose two hours after eating
        },
        symptoms: {
            s1: s1,
            s2: s2,
            s3: s3,
            s4: s4,
            s5: s5,
            s6: s6,
            s7: s7,
            s8: s8,
            s9: s9,
            s10: s10,
        },
        result: {
            symptom_result: {
                status: '',
                message: '',
                score: ''
            },
            parent_risk: {
                status: '',
                message: '',
                score: ''
            },

            test_result: {
                fpg: {
                    status: '',
                    message: '',
                    score: 0
                },
                gthae: {
                    status: '',
                    message: '',
                    score: 0
                }
            },
            final_result: '',
            percentage: ''
        }
    }

    return callback(parameters)
}

// get the symtoms
// setSymptoms(true, true, true, true, true, true, false, false, false, true, (res) => {
//     console.log(res)
// })


module.exports = { setSymptoms: setSymptoms }