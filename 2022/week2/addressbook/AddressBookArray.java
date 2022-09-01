 

public class AddressBookArray implements ABInterface {
private Entry[] addressBook= new Entry[3];

public void listAll(){
  for(int i=0;i<addressBook.length;i++){
    if(addressBook[i]!=null){
      System.out.print((i+1)+". Name: "+addressBook[i].entryName);
      System.out.println(":: Phone: "+addressBook[i].phoneNumber);
    }
  }
}
public void addEntry(Entry entry){
  for(int i=0;i<addressBook.length;i++){
    if(addressBook[i]==null){
      addressBook[i]=new Entry(entry.entryName,entry.phoneNumber);
      System.out.println(" Entry successful!");
      return;
    }
  }
  System.out.println(" No room found for entry!");
}

public Entry findEntry(String name){
  for(int i=0;i<addressBook.length;i++){
    if(addressBook[i]!=null && addressBook[i].entryName.equals(name)){
      System.out.println(" Found! ");
      System.out.print(" Name: "+addressBook[i].entryName);
      System.out.println(" Phone: "+addressBook[i].phoneNumber);
      return addressBook[i];
    }
  }
  System.out.println(" Not found! ");
  return null;
}
public void deleteEntry(String name){
  for(int i=0;i<addressBook.length;i++){
    if(addressBook[i]!=null && addressBook[i].entryName.equals(name)){
      System.out.println(" Found and deleted! ");
      addressBook[i]=null;
      return;
    }
  }
  System.out.println(" Not found! ");
  return ;
}
}
