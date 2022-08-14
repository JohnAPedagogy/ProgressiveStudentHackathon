import java.util.Scanner;

public class loancal{
    private int yrs;
    private double rate;
    private double amount;
    public loancal(int year,double rt, double amt){
        this.rate=rt;
        this.amount=amt;
        this.yrs=year;
    }
    public double ammortize() {
        double r=rate/(100*12);
        double n=yrs*12;
        double a=amount;
        double d = (Math.pow((1 + r),n)- 1)/ (r*Math.pow((1 + r),n));
        return a/d ;
    }
    public static void main(String ar[]){
        System.out.println("Please enter the year:");
        Scanner xx= new Scanner(System.in);
        int y=xx.nextInt();
        System.out.println("Please Enter the rate:");
        int r=xx.nextInt();
        System.out.println("Please enter the amount::");
       int a=xx.nextInt();
        loancal carloan=new loancal(y,r,a);
        double p=carloan.ammortize();
        System.out.println("monthly payments on "+a+" for "+y+" yrs at "+r+" is"+p);
    }}

