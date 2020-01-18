# node-js-expert-system-diabetes
Expert System Diabetes Using Node.js
This expert system is develeoped using node.js and module used is Rools.
Rools is a rule engine library that can be used for expert system

Module used = Rools -> https://www.npmjs.com/package/rools

See complete documentation here:
https://docs.google.com/document/d/1S0MOIo2WxfIlw1Bqwukt8xEGVtnWrpmK7xbBnCelRPQ/edit?usp=sharing


How to start
1. npm install
2. npm start
3. access localhost:1996

This expert system is built for detecting Diabetes based on these 4 aspects
1. Symtoms -> there are 10 symptoms and 2 medical tests.
2. Checking wheter parents have diabetic history
3. Medical Test Fasting  , here we cal it 'FPG'
4. Medical fasting  Two Hour After Fasting, here we call it GTHAE


Explanation of each aspects
1. Symptoms
    - always feeling thirsty
    - Urination, especially during the night
    - Often feeling hunger
    - Weight loss with no reason
    - Loss of muscle mass
    - There is Keton in urine
    - Weak --> lemas(indonesian)
    - Problem with sight Pandangan kabur.
    - scars take long time to heal
    -  often get infected. For example in gusi, kulit, vagina, atau saluran kemih.
 
 According to the resource, A person can be identified as having diabetic if has >= 2 symptoms

2. Diabetic parent
According to the reasearch, if a person has parent with diabetic it can give more
probability of having diabetic.

3. Fasting after 8 hours
 - This test is kind of medical test that is done after fasting for 8 hours. 
 - This fasting is only FOR NOT EATING food or drink something containing energy or sugar
 - Drink pure water is allowed

 - According this medical test here are the criteria
    - Kadar gula darah normal: di bawah 100 mg/dL
    - Pradiabetes: 100-125 mg/dL
    - Diabetes di atas 125 mg/dL

4. gtwo hour
- a test that is taken 2 hours after the last eating.
- According this medical test here are the critera
    - Kadar gula darah normal: di bawah 140 mg/dL
    - Pradiabetes: 140-199 mg/dL
    - Diabetes: lebih dari 200 mg/ dL


Calculation
- For calculation purposes (to get the precentage)
- Each aspects has maximum score of 25 

This expert system is created based on these resources :
- https://www.alodokter.com/diabetes
- https://hellosehat.com/pusat-kesehatan/diabetes-kencing-manis/serba-serbi-pemeriksaan-diabetes-di-rumah/
- https://www.id.wikihow.com/Mengetahui-Apakah-Anda-Menderita-Diabetes
- https://www.webmd.com/diabetes/how-sugar-affects-diabetes#1
- https://www.webmd.com/diabetes/diagnosing-type-2-diabetes#1
https://www.cdc.gov/media/presskits/aahd/diabetes.pdf