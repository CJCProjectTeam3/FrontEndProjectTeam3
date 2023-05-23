export class OfficerTypes {

    public static menus : Array<any> = [
        {
            RM : [
                {lable : 'Enquiries', path : 'enquiries'},
                {lable : 'Approved', path : 'approved'},
                {lable : 'Rejected',  path : 'rejected'},
                {lable : "Loan Application", path : 'loanApplication'}
            ],

            IO :  [
                {lable : 'Mortgage Details', path : 'mortgageDetails'},
                {lable : 'Property Details', path : 'propertyDetails'},
                {lable : 'Guarantor Details', path: 'guarrantorDetails'}
            ],

            PO : [
                {lable : 'Current Loan Details', path : 'currentLoanDetails'},
            ],

            DO :  [
                {lable : 'Loan Disbursment', path : 'loanDisbursement'},
                {lable : 'Ledger', path : 'ledger'},
                {lable : 'Sanction Letter', path: 'sanctionLetter'}
            ]
        }
    ]
}
