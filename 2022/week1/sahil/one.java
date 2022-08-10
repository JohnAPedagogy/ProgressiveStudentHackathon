import java.util.Scanner;

public class one {
    public static void main(String[] args) {
        Scanner v1 = new Scanner(System.in);
        int sc=0;

        do {
            System.out.println("Enter your Score::");
             sc = v1.nextInt();
            {
                if (sc >= 70 && sc <= 100) {
                    System.out.println("You got A");

                } else if (sc >= 60 && sc <= 69) {
                    System.out.println("You got B");

                } else if (sc >= 50 && sc <= 59) {
                    System.out.println("You got C");


                } else if (sc >= 45 && sc <= 49) {

                    System.out.println("You got D");


                } else if (sc >= 40 && sc <= 44) {
                    System.out.println("You got E");

                } else if (sc >= 0 && sc <= 39) {
                    System.out.println("You got R");

                } else {
                    System.out.println("You entered wrong!! score");
                }

            }
        }while (sc>=0&&sc<=100);
    }
}
