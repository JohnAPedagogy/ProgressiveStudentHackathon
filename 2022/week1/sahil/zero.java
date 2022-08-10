import java.util.Scanner;
public class zero {
    public static void main(String[] args) {
        System.out.println("Enter the Temprature::");
        Scanner x= new Scanner(System.in);
        float temp=x.nextFloat();
        if(temp==0){
            System.out.println("Freezing!!!");
        }
        else if(temp<0){
            System.out.println("Sub Zero");
        }
        else {
            System.out.println("Above Zero");
        }
    }

}
