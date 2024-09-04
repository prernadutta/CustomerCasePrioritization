public class ContactSearch {

    public static List<Contact> searchForContacts(String lastName, String mailingPostalCode)
    {
        List<Contact> contactList = [Select Id,Name from Contact 
                                    where LastName = :lastName and MailingPostalCode = :mailingPostalCode];
        return contactList;
    }
}