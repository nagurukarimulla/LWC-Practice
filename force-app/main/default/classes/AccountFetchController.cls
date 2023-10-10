public with sharing class AccountFetchController {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts() {
        List<Account> accounts = [SELECT Id, Name, Industry, AnnualRevenue FROM Account LIMIT 7 ];
        
        // Add debug statements to print accounts with a separator
        System.debug('Retrieved Accounts:');
        for (Account acc : accounts) {
            System.debug('Account Id: ' + acc.Id);
            System.debug('Account Name: ' + acc.Name);
            System.debug('Account Industry: ' + acc.Industry);
            System.debug('Account Annual Revenue: ' + acc.AnnualRevenue);
            System.debug('----------------------------------------');
        }
        
        return accounts;
    }

    
}