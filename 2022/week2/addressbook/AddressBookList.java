import java.util.ArrayList;
import java.util.List;

public class AddressBookList implements ABInterface{
    private List<Entry> addressBook= new ArrayList<Entry>();
    public void listAll(){
        for(Entry entry:addressBook){
            System.out.print(" Name: "+ entry.entryName);
            System.out.println(" Phone: "+entry.phoneNumber);
        }
    }

    public void addEntry(Entry entry){
        addressBook.add(entry);
        System.out.println(" Entry successful!");
    }
    public Entry findEntry(String name){
        for(Entry entry:addressBook){
            if(entry.entryName.equals(name)){
                System.out.println(" Found! ");
                System.out.print(" Name: "+entry.entryName);
                System.out.println(" Phone: "+entry.phoneNumber);
                return entry;
            };
        }
        System.out.println(" Not found! ");
        return null;
     }
   public void deleteEntry(String name){
        Entry entry=findEntry(name);
        if(entry!=null)addressBook.remove(entry);
        System.out.println(" Deleted! ");
    }
}