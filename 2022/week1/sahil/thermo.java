import java.util.Scanner;
public class thermo {
    public static void main(String[] args)
    {

        System.out.println("Enter the temprature in Celsius::");
        Scanner x= new Scanner(System.in);
        float temp=x.nextInt();
        System.out.println("Temprature in Farenheit::"+t1(temp));
    }

    public static float t1(float temp)
    {
        return 9/5 * temp + 32;
    }
}

