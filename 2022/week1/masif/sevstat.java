import java.util.Scanner;  
public class sevstat{
    public static void main(String args[]){
        System.out.println(sayHello());
        System.out.println("Addition of 2+2 :"+add(2,2));
        System.out.println("Subtraction of 2-2 :"+sub(2,2));
        System.out.println("Multiplication of 2*2 :"+mul(2,2));
        System.out.println("Division of 2/2 :"+div(2,2));
        System.out.println(toCelsius(21));
        System.out.println(toFahrenheit(21));
    }
    

    public static String sayHello(){
        String hello = ("Hello to Java");
        return hello;
    }
    public static int add(int a, int b){
        int sum=a+b;
        return sum;

    }
    public static int sub(int a, int b){
        int sub=a-b;
        return sub;

    }
    public static int mul(int a, int b){
        int mul=a*b;
        return mul;

    }
    public static int div(int a, int b){
        int div=a/b;
        return div;

    }
    public static int toCelsius(int celsius){

        int fahrenheit =( (celsius*9)/5)+32; 
        return fahrenheit;

    }
    public static int toFahrenheit(int fahrenheit){

        int celsius  = ((fahrenheit-32)*5)/9;   
        return celsius;

    }
}