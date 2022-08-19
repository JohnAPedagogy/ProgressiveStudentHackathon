package week2;

import java.util.Scanner;

public class Binary {
    protected int val;


    public int getBinary(int val){
        this.val=val;
        return val;
    }
    protected String lookup(String num){
        String rv = "";
        if(num.length()==3){
            if(num.equals("000")) rv="0";
            if(num.equals("001")) rv="1";
            if(num.equals("010")) rv="2";
            if(num.equals("011")) rv="3";
            if(num.equals("100")) rv="4";
            if(num.equals("101")) rv="5";
            if(num.equals("110")) rv="6";
            if(num.equals("111")) rv="7";
        }else{
            if(num.equals("0000")) rv="0";
            if(num.equals("0001")) rv="1";
            if(num.equals("0010")) rv="2";
            if(num.equals("0011")) rv="3";
            if(num.equals("0100")) rv="4";
            if(num.equals("0101")) rv="5";
            if(num.equals("0110")) rv="6";
            if(num.equals("0111")) rv="7";
            if(num.equals("1000")) rv="8";
            if(num.equals("1001")) rv="9";
            if(num.equals("1010")) rv="A";
            if(num.equals("1011")) rv="B";
            if(num.equals("1100")) rv="C";
            if(num.equals("1101")) rv="D";
            if(num.equals("1110")) rv="E";
            if(num.equals("1111")) rv="F";
        }
        return rv;
    }
    public String convert(int num){
        int rem;
        String s="";
        do{
            rem = num % 2;
            s = (rem == 1 ? "1" : "0") + s;
            num = (num / 2);
        }while (num>=1);
        return s;
    }

    public static void main(String[] args) {
        System.out.println("Please Enter a binary number:");
        Scanner xx = new Scanner(System.in);
        int val = xx.nextInt();
        Binary oc;
        System.out.println("Which type of operation do you want to perform\n1.Convert Binary to Octal\n2.Convert Binary to hexa");
        int choice = xx.nextInt();
        if (choice == 1) {
            oc = new Octal();
            // oc.convert(val);
            System.out.println(oc.convert(val));
        } else if (choice == 2) {
            oc = new Hex();
            oc.convert(val);
            System.out.println(oc.convert(val));


        }
        else if(choice==3){

        }else {
            System.out.println("Wrong Selection");
        }

    }
}

