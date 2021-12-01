const surveyQuestions = ['What\'s your name? Nicknames are also acceptable', 
 'What\'s an activity you like doing?',
 "What do you listen to while doing that?",
 'Which meal is your favourite (eg: dinner, brunch, etc.)',
 'What\'s your favourite thing to eat for that meal?', 
 'Which sport is your absolute favourite?',
 'What is your superpower? In a few words, tell us what you are amazing at!']
let surveyAnswers = [];
const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let i = 0;
rl.question(`${surveyQuestions[i++]}: `, (answer) => {
  surveyAnswers.push(answer);
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question(`${surveyQuestions[i++]}: `, (answer) => {
    surveyAnswers.push(answer);
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question(`${surveyQuestions[i++]}: `, (answer) => {
      surveyAnswers.push(answer);
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question(`${surveyQuestions[i++]}: `, (answer) => {
        surveyAnswers.push(answer);
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question(`${surveyQuestions[i++]}: `, (answer) => {
          surveyAnswers.push(answer);
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question(`${surveyQuestions[i++]}: `, (answer) => {
            surveyAnswers.push(answer);
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question(`${surveyQuestions[i++]}: `, (answer) => {
              surveyAnswers.push(answer);
              console.log(`Thank you for your valuable feedback: ${answer}`);
                  rl.close();
                });
              });
            });
          });
        });
      });
    });
rl.on("close", function() {
  console.log(surveyAnswers)
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
                        
// Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:


// 'That said, feel free to change the narrative if you have better, more interesting questions to ask them.'

// Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.