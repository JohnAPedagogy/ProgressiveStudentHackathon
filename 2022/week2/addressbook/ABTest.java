package addressbook;


/**
 * Write a description of class ABTest here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class ABTest
{
    // instance variables - replace the example below with your own
    private int x;

    /**
     * Constructor for objects of class ABTest
     */
    public ABTest()
    {
        // initialise instance variables
        x = 0;
    }

    /**
     * An example of a method - replace this comment with your own
     *
     * @param  y  a sample parameter for a method
     * @return    the sum of x and y
     */
    public static void main(String[] y)
    {
        // put your code here
        ABInterface ab = new AddressBookArray();
        Entry s1=new Entry("Sahil", "001");
        ab.addEntry(s1);
        ab.listAll();
    }
}
