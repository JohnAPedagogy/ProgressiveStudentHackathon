package week2;


public class Octal extends Binary{

    public String convert(int num){
       /* int dec = 0;
       int oct = 0;
        int i = 0;
        while (val != 0) {
            dec += (val % 10) * Math.pow(2, i);
            ++i;
            val /= 10;
        }
        i = 1;

        // converting to decimal to octal
        while (dec != 0) {
            oct += (dec % 8) * i;
            dec /= 8;
            i *= 10;
        }
        
        System.out.println(oct);
        return;*/
        String st=super.convert(num);
        String oct="";
        System.out.println("st="+st);
        // first let's group the  result of the binary function into threes

        // first get the remainder
        int rem=st.length()%3;
        System.out.println("rem="+rem);
        // pad if remainder doesn't equal 0
        if(rem!=0)st=rem==1?"00"+st:"0"+st;

        // split the string into groups of threes
        int stl=st.length()/3;
        System.out.println("stl="+stl);
        //use a for loop, supstring and lookup to convert to radix
        for(int i=0;i<stl;i++)
            oct=oct+super.lookup(st.substring(i*3,i*3+3));
        
            
        return oct;
    }
}
