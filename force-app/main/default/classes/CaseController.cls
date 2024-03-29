//CaseController.cls
public with sharing class CaseController {
    @AuraEnabled(cacheable=true)
    public static list<Account> getNewCasesForAccounts(){
        return [SELECT Name, (
                SELECT Id, CaseNumber, Status FROM Cases WHERE toLabel(Status) = 'New')
                FROM Account WHERE Id IN (SELECT AccountId FROM Case)];
    }
}