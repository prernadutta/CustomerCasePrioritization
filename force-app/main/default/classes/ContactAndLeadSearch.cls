public class ContactAndLeadSearch {

    public static List<List<sObject>> searchContactsAndLeads(String lastname)
    {
		List<List<sObject>> contactLeadList = [Find :lastName in ALL FIELDS
                                              RETURNING Contact(Name),
                                              Lead(Name)];
        return contactLeadList;
    }
}