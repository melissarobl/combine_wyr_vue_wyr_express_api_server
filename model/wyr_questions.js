const questions = [
    {
        'question': 'Live in a house shaped like a triangle or a house shaped like a circle?',
        'answer1': 'Triangle house',
        'answer2': 'Circle house'
    },
    {
        'question': 'Have a cat-sized elephant or an elephant-sized cat?',
        'answer1': 'Cat-sized elephant',
        'answer2': 'Elephant-sized cat'
    },
    {
        'question': 'Be able to fly or be able to breathe underwater?',
        'answer1': 'Fly',
        'answer2': 'Breathe underwater'
    },
    {
        'question': 'Play any musical instrument or speak any language?',
        'answer1': 'Play any musical instrument',
        'answer2': 'Speak any language'
    },
    {
        'question': 'Be a famous movie star or a famous scientist?',
        'answer1': 'Famous movie star',
        'answer2': 'Famous scientist'
    },
    {
        'question': 'Go on a skiing vacation or a beach vacation?',
        'answer1': 'Skiing vacation',
        'answer2': 'Beach vacation'
    },
]

//function for finding random question in json questions based on index
function randomWYRQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length)
    const randomQuestion = questions[randomIndex]
    return randomQuestion
}


module.exports = randomWYRQuestion  //to call function above