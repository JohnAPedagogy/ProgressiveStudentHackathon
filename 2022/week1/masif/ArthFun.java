import java.util.Scanner;  
public class UserInput   
{  
public static void main(String[] args)  
{  
Scanner InputWeather= new Scanner(System.in);     
System.out.print("Enter the Temperature in Celsius: ");  
int celsius= InputWeather.nextInt();  

int fahrenheit =( (celsius*9)/5)+32; 
System.out.println("Temperature in Fahrenheit will be: "+fahrenheit);  
}  
}  