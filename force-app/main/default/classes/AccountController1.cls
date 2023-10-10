public with sharing class AccountController1 {
    @AuraEnabled(cacheable=true)
    public static List<Account> getMinimalAccounts() {
        return [SELECT Id, Name, Website FROM Account];
    }
}