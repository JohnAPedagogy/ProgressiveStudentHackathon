public class cal {
    public static void main(String[] args) {
        System.out.println("10+2="+sub(10,2));
        System.out.println("10*2="+mult(10,2));
        System.out.println("10-2="+sub(10,2));
        System.out.println("10/2="+div(10,2));

    }

    public static int add(int a,int b) {
        return a+b;

    }
    public static int sub(int a,int b) {
        return a-b;

    }
    public static float mult(int a,int b) {
        return a*b;

    }
    public static float div(int a,int b) {
        return a/b;

    }
}
