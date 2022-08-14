public class duck extends animal{
    String beakColor="Yellow";
    public String swim(){
        System.out.println("Duck can swing");
        return null;
    }

    public static void main(String[] args){
       animal a1= new animal();

        System.out.println(a1.mate());
    }
}
