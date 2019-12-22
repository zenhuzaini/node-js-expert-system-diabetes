// import
const { Rools, Rule } = require('rools');

// facts
const facts = {
    user: {
        name: 'frank',
        stars: 347,
    },
    weather: {
        temperature: 20,
        windy: true,
        rainy: false,
    },
};

// rules
const ruleMoodGreat = new Rule({
    name: 'mood is great if 200 stars or more',
    when: (facts) => facts.user.stars >= 200,
    then: (facts) => {
        facts.user.mood = 'great';
    },
});
const ruleGoWalking = new Rule({
    name: 'go for a walk if mood is great and the weather is fine',
    when: [
        (facts) => facts.user.mood === 'great',
        (facts) => facts.weather.temperature >= 20,
        (facts) => !facts.weather.rainy,
    ],
    then: (facts) => {
        facts.goWalking = true;
    },
});

// evaluation
const evaluation = async (callback) => {
    const rools = new Rools();
    await rools.register([ruleMoodGreat, ruleGoWalking]);
    await rools.evaluate(facts);
    console.log(await rools.evaluate(facts))
    return callback(facts)
}


// console.log(rools.evaluate(facts)
evaluation((res) => {
    console.log(res)
})