import javax.naming.event.ObjectChangeListener;
import javax.rmi.ssl.SslRMIClientSocketFactory;
import java.util.Scanner;

public interface Airthmetic {
    //private float a;
    //private float b;
    // public void Arithmetic(float a, float b){
    //     this.a=a;
    //     this.b=b;
    // }
    public float calculate(float a, float b);

    public static void main(String[] args) {
        float z,y;
        System.out.println("Enter the first value:");
        Scanner n1= new Scanner(System.in);
        z=n1.nextFloat();
        System.out.println("Enter the first value:");
        y=n1.nextFloat();
        System.out.print("Enter the operation (+,-,/,x) ");
        String o=n1.next();
        //Airthmetic op;
        float result=0;

        switch(o){
            case "+":
                sum op1=new sum();
                result=op1.calculate(z,y);
                break;
            case "-":
                sub op2=new sub();
                result=op2.calculate(z,y);
                break;
            case "x":
                Mul op3=new Mul();
                result=op3.calculate(z,y);
                break;
            case "/":
                Div op4=new Div();
                result=op4.calculate(z,y);
                break;
            default:
                //op=new Airthmetic();
                System.out.println("Invalid operation selected")
                ;
                break;
        }
        //float result=op.calculate(z,y);
        System.out.println((+z)+o+(+y)+"="+result);
    }
}
