console.log("Welcome to the guessing game!");
console.log("------------------------------------------------");

let numberRounds = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('How many times would you like to play: ', rounds => {
    numberRounds = rounds;
    console.log(`You will play ${rounds} rounds!`);
    readline.close();
  });
console.log(numberRounds);
// srand(time(0));  //seed generator
//   //cout << "You are playing " << rounds << " times" << endl;
//   //:create array to store number of guesses for each round 
// vector<int> rguesses(rounds);
// //: Initialise counter and do rounds loop
// //while (round < rounds) is yes then
// for (int round = 0; round < rounds; round++) {
//     cout << "Round " << (round + 1) << " of " << rounds << endl;
//     //    : number = generate(betwen 0 and 100); //loop body
//     int number = rand() % 100 + 1;
//     cout << " generated number = " << number << endl;
//     //: prepare non deterministic loop
//     bool guessCorrect = false;
//     int guesses = 0;  // count the number of guesses
// //while (guessCorrect == false) is yes then
//     while (guessCorrect == false)
//     {
//         //    : display enter the guess ? ;
//         cout << "guess a number between 0 and 100: ";
//         int guess; //: input guess;
//         cin >> guess;
//         //check for player exit
//         if (guess == -1) { //is yes then
//             cout << "Thank you for playing! Have a nice day." << endl;
//             return 0;//exit(0);
//         }//end if is no
//   //if (guess == number) is yes then
//   //    : guessCorrect = true;
//   //: cout << " Bingo! << endl;
//   //else if (guess > number) is yes then
//   //    : cout << "it is actually less ";
//   //else
//   //    :cout << "it is actually greater";
//   //end if
//   //    :guesses = guesses + 1;
//     }//end while is no
// //; rguesses[round] = guesses;
// //; cout << "You Guessed correctly after " << guesses << "guesses")
// }//end while
// return 0;
// ////game summary
// //    :round = 0;
// //: sum = 0;
// //while (round < rounds) is yes
// //    : sum = sum + rguesses[round];
// //: cout << "in round " << round << " you guessed right after " << rguesses[round] << " attempts" << endl;
// //: round = round + 1;
// //end while is no
// //    : cout << " average number of guesses =" << sum / rounds << endl;
// }//Stop

