public class ReverseString {
    public static void main(String[] args) {
      
      String a = "Hello World";
      String revStr = "";
      // -1 is used to delete 1 from the total length so the 10 letters starting from zero can be printed
      for(int i = a.length()-1; i>=0; i--){
        revStr = revStr + a.charAt(i);
      }
      
      System.out.print("The reversed string of the '"+a+"' is: " );
      System.out.println(revStr);
    }
  }