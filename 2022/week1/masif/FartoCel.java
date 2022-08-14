import java.util.Scanner;  
public class FartoCel   
{  
    public static void main(String[] args)  
    {  
        Scanner InputWeather= new Scanner(System.in);     
        System.out.print("Enter the Temperature in Fahrenheit: ");  
        double fahrenheit= InputWeather.nextDouble();  

        double celsius =((fahrenheit-32)*5)/9; 
        System.out.println("Temperature in Celcius will be: "+celsius);  
    }  
}  