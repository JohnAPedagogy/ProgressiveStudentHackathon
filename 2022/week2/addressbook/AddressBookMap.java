package addressbook;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

public class AddressBookMap implements ABInterface{
    public HashMap<String,String> addressBook= new HashMap<String,String>();
    public void listAll(){
        Set<String> keys = addressBook.keySet();
// The set of keys in the map.
        Iterator<String> keyIter = keys.iterator(
        );
        while (keyIter.hasNext()) {
            String key = keyIter.next(); // Get t
            String value = addressBook.get(key);
// Get the value for that key.
            System.out.println( " Name:\t" + key +
                    "\nPhoneNumber: " + value + "" );
        }
    }
    public void addEntry(Entry entry) {
        addressBook.put(entry.entryName, entry.phoneNumber);
        System.out.println(" Entry successful!");
    }
    public Entry findEntry(String name){
      String entry=addressBook.get(name);
      if(entry!=null){
        System.out.println(" Found! ");
        System.out.print(" Name:\t"+name);
        System.out.println("Phone: "+entry);
        return new Entry(name,entry);
      }
      System.out.println(" Not found! ");
      return null;
    }
    public void deleteEntry(String entry){
        addressBook.remove(entry);
        System.out.println(" Deleted! ");
        return;
    }

}