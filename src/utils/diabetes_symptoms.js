//symptoms
// s1 Sering merasa haus.
// s2 Sering buang air kecil, terutama di malam hari.
// s3 Sering merasa sangat lapar.
// s4 Turunnya berat badan tanpa sebab yang jelas.
// s5 Berkurangnya massa otot.
// s6 Terdapat keton dalam urine. Keton adalah produk sisa dari pemecahan otot dan lemak akibat tubuh tidak dapat menggunakan gula sebagai sumber energi.
// s7 Lemas.
// s8 Pandangan kabur.
// s9 Luka yang sulit sembuh.
// s10 Sering mengalami infeksi, misalnya pada gusi, kulit, vagina, atau saluran kemih.

var parameters = {
    hasDiabetesParent: false,
    medtest: {
        fpg: '', //fasting plasma glucose 8 hours
        gthae: '' //glucose two hours after eating
    },
    symptoms: {
        s1: false, //thirsty
        s2: false, // urination
        s3: false, // feeling always hungsy
        s4: false, // loss weight with no clear reason
        s5: false, //loss muscle mass
        s6: false, // there is keton in Urine
        s7: false, // lemas 
        s8: false, //sight problem
        s9: false, // scars is long to heal
        s10: false, // often get infected in vagina
    },
    result: {
        parent_risk: {
            status: '',
            message: ''
        },
        test_result: {
            fpg: {
                status: 'fb',
                message: 'db'
            },
            gthae: {
                status: '',
                message: ''
            }
        }

    }
}

const setSymptoms = (hasDiabetesParent, fpg, gthae, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, callback) => {
    parameters = {
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
                message: ''
            },
            parent_risk: {
                status: '',
                message: ''
            },

            test_result: {
                fpg: {
                    status: '',
                    message: ''
                },
                gthae: {
                    status: '',
                    message: ''
                }
            },
            final_result: ''
        }
    }

    // parameters = {
    //         hasDiabetesParent: hasDiabetesParent,
    //         hyperglycemic_risk: hyperglycemic_risk,
    //         s1: s1,
    //         s2: s2,
    //         s3: s3,
    //         s4: s4,
    //         s5: s5,
    //         s6: s6,
    //         s7: s7,
    //         s8: s8,
    //         s9: s9,
    //         s10: s10,
    //         result: {
    //             parent_risk: {
    //                 status: '',
    //                 message: ''
    //             },
    //             hyperglycemic_risk: {
    //                 status: '',
    //                 message: ''
    //             },

    //         }
    //     }

    return callback(parameters)
}

//get the symtoms
// setSymptoms(true, true, true, true, true, true, false, false, false, true, (res) => {
//     console.log(res)
// })


module.exports = { setSymptoms: setSymptoms }