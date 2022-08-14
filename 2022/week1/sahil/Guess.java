import java.util.Arrays;
import java.util.Scanner;

public class Guess {
    public static void main(String[] args) {
        int i = 0;


        System.out.println("Enter the number of the rounds to play::");
        Scanner x = new Scanner(System.in);
        int number = 1 + (int) (100 * Math.random());//to generate random numbers
        int rounds = x.nextInt();


        int[] round = new int[rounds];
        for (i = 0; i < rounds; i++) {
            boolean right_guess = false;
            int guess;
            int count_guess = 0;

            while (!right_guess) {
                System.out.println("\nRound " + (i + 1) + " of " + rounds);

                System.out.println("\nEnter guess: " + (++count_guess) + " (between 0 and 100, enter -1 to quit)");

                guess = x.nextInt();

                if (guess < 1) {
                    System.out.println("Thankyou for playing!");
                    return;//to exit
                }
                if (number == guess) {
                    System.out.println("You guesssed the correct number! after" +count_guess+" attempts!");
                    right_guess = true;
                    //  int* round = new int[rounds];

                    round[i] = count_guess;
                } else if (number < guess) {
                    System.out.println("it is actually smaller");
                } else {
                    System.out.println("it is actually greater");
                }

            }
        }
        System.out.println("Original number::" + number);
        System.out.println("_________________Game Summary_________________");

       float sum = 0;
        float sum2 = 0;
        for (int in = 0; in < rounds; in++) {
                sum = sum + round[in];
                sum2 = sum / rounds;
                System.out.println("In round " + (in + 1) + " you gessed it right after " + round[in] + " guesses ");

        }    System.out.println("Average guess count:" + sum2);


    }
}