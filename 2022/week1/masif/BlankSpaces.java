class BlankSpaces {
    public static void main(String[] args) {  


String a= "The quick brown fox jumped over the lazy fox";
int count=0;
System.out.println(a);
for(int i=0;i<a.length()-1;i++)
{
    if(a.charAt(i)==' ')
    {
        count++;
    }
}

System.out.println("the Total number of Spaces above are: " +count);
}
}