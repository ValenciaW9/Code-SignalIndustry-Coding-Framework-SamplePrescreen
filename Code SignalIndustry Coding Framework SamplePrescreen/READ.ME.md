Instructions
Welcome to the practice task! This task is designed to be a playground that allows you to get acquainted with the testing environment and practice the functionalities of the platform before your real assessment. Your task is to implement a simple container of integer numbers. All operations that should be supported by this database are described below.
Solving this task consists of several levels. Subsequent levels are opened when the current level is correctly solved. You always have access to the data for the current and all previous levels.
Environment details (click here to hide)

Requirements
Your task is to implement a simple container of integer numbers. Plan your design according to the level specifications below:
    • Level 1: Container should support adding and removing numbers.
    • Level 2: Container should support getting the median of the numbers stored in it.
To move to the next level, you need to pass all the tests at this level.
Note
You will receive a list of queries to the system, and the final output should be an array of strings representing the returned values of all queries. Each query will only call one operation.
Level 1
Implement two operations for adding and removing numbers from the container. Initially, the container is empty.
    • ADD <value> — should add the specified integer value to the container and return a string representing the number of integers in the container after the addition.
    • DELETE <value> — should attempt to remove the specified integer value from the container. If the value is present in the container, remove it and return "true", otherwise, return "false".
Examples
The example below shows how these operations should work (the section is scrollable to the right):
Queries	Explanations
queries = [
  ["ADD", "5"],
  ["ADD", "10"],
  ["ADD", "5"],
  ["DELETE", "10"],
  ["DELETE", "1"],
  ["ADD", "1"]
]	
returns "1"; container state: [5]
returns "2"; container state: [5, 10]
returns "3"; container state: [5, 10, 5]
returns "true"; container state: [5, 5]
returns "false"; container state: [5, 5]
returns "3"; container state: [5, 5, 1]
the output should be ["1", "2", "3", "true", "false", "3"].
Input/Output
    • [execution time limit] 4 seconds (js)
    • [memory limit] 1 GB
    • [input] array.array.string queries
An array of queries to the system. It is guaranteed that all the queries parameters are valid: each query calls one of the operations described in the description, all operation parameters are given in the correct format, and all conditions required for each operation are satisfied.
Guaranteed constraints:
1 ≤ queries.length ≤ 500.
    • [output] array.string
An array of strings representing the returned values of queries.
[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
//
Level 2
Container should support calculating the median of the numbers stored in it.
    • GET_MEDIAN  — should return a string representing the median integer - the integer in the middle of the sequence after all integers stored in the container are sorted in ascending order. If the length of the sequence is even, the leftmost integer from the two middle integers should be returned. If the container is empty, this method should return an empty string.
Examples
The example below shows how these operations should work (the section is scrollable to the right):
Queries	Explanations
queries = [
  ["GET_MEDIAN"],
  ["ADD", "5"],
  ["ADD", "10"],
  ["ADD", "1"],
  ["GET_MEDIAN"],
  ["ADD", "4"],
  ["GET_MEDIAN"],
  ["DELETE", "1"],
  ["GET_MEDIAN"]
]	
returns ""; container state: []
returns "1"; container state: [5]
returns "2"; container state: [5, 10]
returns "3"; container state: [5, 10, 1]
returns "5"; sorted sequence of container numbers is: [1, 5, 10]
returns "4"; container state: [5, 10, 1, 4]
returns "4"; sorted sequence of container numbers is: [1, 4, 5, 10]
returns "true"; container state: [5, 10, 4]
returns "5"; sorted sequence of container numbers is: [4, 5, 10]
the output should be ["", "1", "2", "3", "5", "4", "4", "true", "5"].
Input/Output
    • [execution time limit] 4 seconds (js)
    • [memory limit] 1 GB
    • [input] array.array.string queries
An array of queries to the system. It is guaranteed that all the queries parameters are valid: each query calls one of the operations described in the description, all operation parameters are given in the correct format, and all conditions required for each operation are satisfied.
Guaranteed constraints:
1 ≤ queries.length ≤ 500.
    • [output] array.string
An array of strings representing the returned values of queries.
[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


//


Level 1200/250
Level 2
Level 3
Level 4
Question 1 (Level 1) of 1
Submitted
0:45:55
Instructions

Your task is to implement a simplified version of a banking system. All operations that should be supported are listed below.

Solving this task consists of several levels. Subsequent levels are opened when the current level is correctly solved. You always have access to the data for the current and all previous levels.
Requirements

Your task is to implement a simplified version of a banking system. Plan your design according to the level specifications below:

    Level 1: The banking system should support creating new accounts, depositing money into accounts, and transferring money between two accounts.
    Level 2: The banking system should support ranking accounts based on outgoing transactions.
    Level 3: The banking system should allow scheduling payments with cashback and checking the status of scheduled payments.
    Level 4: The banking system should support merging two accounts while retaining both accounts' balance and transaction histories.

To move to the next level, you should pass all the tests at this level.

Note

You will receive a list of queries to the system, and the final output should be an array of strings representing the returned values of all queries. Each query will only call one operation.

All operations will have a timestamp parameter — a stringified timestamp in milliseconds. It is guaranteed that all timestamps are unique and are in a range from 1 to 109. Operations will be given in order of strictly increasing timestamps.
Level 1

Initially, the banking system does not contain any accounts, so implement operations to allow account creation, deposits, and transfers between 2 different accounts.

    CREATE_ACCOUNT <timestamp> <accountId> — should create a new account with the given identifier if it doesn't already exist. Returns "true" if the account was successfully created or "false" if an account with accountId already exists.

    DEPOSIT <timestamp> <accountId> <amount> — should deposit the given amount of money to the specified account accountId. Returns a string representing the balance of the account after the operation has been processed. If the specified account doesn't exist, should return an empty string.

    TRANSFER <timestamp> <sourceAccountId> <targetAccountId> <amount> — should transfer the given amount of money from account sourceAccountId to account targetAccountId. Returns a string representing the balance of sourceAccountId if the transfer was successful or an empty string otherwise.
        Returns an empty string if sourceAccountId or targetAccountId doesn't exist.
        Returns an empty string if sourceAccountId and targetAccountId are the same.
        Returns an empty string if account sourceAccountId has insufficient funds to perform the transfer.

Examples

The example below shows how these operations should work (the section is scrollable to the right):
Queries	Explanations

queries = [
  ["CREATE_ACCOUNT", "1", "account1"],
  ["CREATE_ACCOUNT", "2", "account1"],
  ["CREATE_ACCOUNT", "3", "account2"],
  ["DEPOSIT", "4", "non-existing", "2700"],
  ["DEPOSIT", "5", "account1", "2700"],
  ["TRANSFER", "6", "account1", "account2", "2701"],
  ["TRANSFER", "7", "account1", "account2", "200"]
]

	


returns "true"
returns "false"; this account already exists
returns "true"
returns ""
returns "2700"
returns ""; this account has insufficient funds for the transfer
returns "2500"

the output should be ["true", "false", "true", "", "2700", "", "2500"].

Input/Output

    [execution time limit] 4 seconds (js)

    [memory limit] 1 GB

    [input] array.array.string queries

    An array of queries to the system. It is guaranteed that all the queries parameters are valid: each query calls one of the operations described in the description, all operation parameters are given in the correct format, and all conditions required for each operation are satisfied.

    Guaranteed constraints:
    1 ≤ queries.length ≤ 500.

    [output] array.string

    An array of strings representing the returned values of queries.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

//

nstructions

Your task is to implement a simplified version of a banking system. All operations that should be supported are listed below.

Solving this task consists of several levels. Subsequent levels are opened when the current level is correctly solved. You always have access to the data for the current and all previous levels.
Requirements

Your task is to implement a simplified version of a banking system. Plan your design according to the level specifications below:

    Level 1: The banking system should support creating new accounts, depositing money into accounts, and transferring money between two accounts.
    Expand to see level 1 details.

    Level 2: The banking system should support ranking accounts based on outgoing transactions.

    Level 3: The banking system should allow scheduling payments with cashback and checking the status of scheduled payments.

    Level 4: The banking system should support merging two accounts while retaining both accounts' balance and transaction histories.

To move to the next level, you should pass all the tests at this level.

Note

You will receive a list of queries to the system, and the final output should be an array of strings representing the returned values of all queries. Each query will only call one operation.

All operations will have a timestamp parameter — a stringified timestamp in milliseconds. It is guaranteed that all timestamps are unique and are in a range from 1 to 109. Operations will be given in order of strictly increasing timestamps.
Level 2

The bank wants to identify people who are not keeping money in their accounts, so implement operations to support ranking accounts based on outgoing transactions.

    TOP_SPENDERS <timestamp> <n> — should return the identifiers of the top n accounts with the highest outgoing transactions - the total amount of money either transferred out of or paid/withdrawn (the PAY operation will be introduced in level 3) - sorted in descending order, or in case of a tie, sorted alphabetically by accountId in ascending order. The result should be a string in the following format: "<accountId1>(<totalOutgoing1>), <accountId2>(<totalOutgoing2>), ..., <accountIdN>(<totalOutgoingN>)".
        If less than n accounts exist in the system, then return all their identifiers (in the described format).
        Cashback (an operation that will be introduced in level 3) should not be reflected in the calculations for total outgoing transactions.

Examples

The example below shows how these operations should work (the section is scrollable to the right):
Queries	Explanations

queries = [
  ["CREATE_ACCOUNT", "1", "account3"],
  ["CREATE_ACCOUNT", "2", "account2"],
  ["CREATE_ACCOUNT", "3", "account1"],
  ["DEPOSIT", "4", "account1", "2000"],
  ["DEPOSIT", "5", "account2", "3000"],
  ["DEPOSIT", "6", "account3", "4000"],
  ["TOP_SPENDERS", "7", "3"],
  ["TRANSFER", "8", "account3", "account2", "500"],
  ["TRANSFER", "9", "account3", "account1", "1000"],
  ["TRANSFER", "10", "account1", "account2", "2500"],
  ["TOP_SPENDERS", "11", "3"]
]

	


returns "true"
returns "true"
returns "true"
returns "2000"
returns "3000"
returns "4000"
returns "account1(0), account2(0), account3(0)"; none of the accounts have any outgoing transactions, so they are sorted alphabetically
returns "3500"
returns "2500"
returns "500"
returns "account1(2500), account3(1500), account2(0)"

the output should be ["true", "true", "true", "2000", "3000", "4000", "account1(0), account2(0), account3(0)", "3500", "2500", "500", "account1(2500), account3(1500), account2(0)"].

Input/Output

    [execution time limit] 4 seconds (js)

    [memory limit] 1 GB

    [input] array.array.string queries

    An array of queries to the system. It is guaranteed that all the queries parameters are valid: each query calls one of the operations described in the description, all operation parameters are given in the correct format, and all conditions required for each operation are satisfied.

    Guaranteed constraints:
    1 ≤ queries.length ≤ 500.

    [output] array.string

    An array of strings representing the returned values of queries.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

///
nstructions

Your task is to implement a simplified version of a banking system. All operations that should be supported are listed below.

Solving this task consists of several levels. Subsequent levels are opened when the current level is correctly solved. You always have access to the data for the current and all previous levels.
Requirements

Your task is to implement a simplified version of a banking system. Plan your design according to the level specifications below:

    Level 1: The banking system should support creating new accounts, depositing money into accounts, and transferring money between two accounts.
    Expand to see level 1 details.

    Level 2: The banking system should support ranking accounts based on outgoing transactions.
    Expand to see level 2 details.

    Level 3: The banking system should allow scheduling payments with cashback and checking the status of scheduled payments.

    Level 4: The banking system should support merging two accounts while retaining both accounts' balance and transaction histories.

To move to the next level, you should pass all the tests at this level.

Note

You will receive a list of queries to the system, and the final output should be an array of strings representing the returned values of all queries. Each query will only call one operation.

All operations will have a timestamp parameter — a stringified timestamp in milliseconds. It is guaranteed that all timestamps are unique and are in a range from 1 to 109. Operations will be given in order of strictly increasing timestamps.
Level 3

The banking system should allow scheduling payments with some cashback and checking the status of scheduled payments.

    PAY <timestamp> <accountId> <amount> — should withdraw the given amount of money from the specified account. All withdraw transactions provide a 2% cashback - 2% of the withdrawn amount (rounded down to the nearest integer) will be refunded to the account 24 hours after the withdrawal. If the withdrawal is successful (i.e., the account holds sufficient funds to withdraw the given amount), returns a string with a unique identifier for the payment transaction in this format: "payment[ordinal number of withdraws from all accounts]" - e.g., "payment1", "payment2", etc. Additional conditions:
        Returns an empty string if accountId doesn't exist.
        Returns an empty string if accountId has insufficient funds to perform the payment.
        TOP_SPENDERS should now also account for the total amount of money withdrawn from accounts.
        The waiting period for cashback is 24 hours, equal to 24 * 60 * 60 * 1000 = 86400000 milliseconds (the unit for timestamps). So, cashback will be processed at timestamp timestamp + 86400000.
        When it's time to process cashback for a withdrawal, the amount must be refunded to the account before any other transactions are performed at the relevant timestamp.

    GET_PAYMENT_STATUS <timestamp> <accountId> <payment> — should return the status of the payment transaction for the given payment. Specifically:
        Returns an empty string if accountId doesn't exist.
        Returns an empty string if the given payment doesn't exist for the specified account.
        Returns an empty string if the payment transaction was for an account with a different identifier from accountId.
        Returns a string representing the payment status: "IN_PROGRESS" or "CASHBACK_RECEIVED".

Examples

The example below shows how these operations should work (the section is scrollable to the right):
Queries	Explanations

queries = [
  ["CREATE_ACCOUNT", "1", "account1"],
  ["CREATE_ACCOUNT", "2", "account2"],
  ["DEPOSIT", "3", "account1", "2000"],
  ["PAY", "4", "account1", "1000"],
  ["PAY", "100", "account1", "1000"],
  ["GET_PAYMENT_STATUS", "101", "non-existing", "payment1"],
  ["GET_PAYMENT_STATUS", "102", "account2", "payment1"],
  ["GET_PAYMENT_STATUS", "103", "account1", "payment1"],
  ["TOP_SPENDERS", "104", "2"],
  ["DEPOSIT", str(3 + MILLISECONDS_IN_1_DAY), "account1", "100"],
  ["GET_PAYMENT_STATUS", str(4 + MILLISECONDS_IN_1_DAY), "account1", "payment1"],
  ["DEPOSIT", str(5 + MILLISECONDS_IN_1_DAY), "account1", "100"],
  ["DEPOSIT", str(99 + MILLISECONDS_IN_1_DAY), "account1", "100"],
  ["DEPOSIT", str(100 + MILLISECONDS_IN_1_DAY), "account1", "100"]
]

	


returns "true"
returns "true"
returns "2000"
returns "payment1"
returns "payment2"
returns ""; this account does not exist
returns ""; this payment was from another account
returns "IN_PROGRESS"
returns "account1(2000), account2(0)"
returns "100"; cashback for "payment1" was not refunded yet
returns "CASHBACK_RECEIVED"
returns "220"; cashback of `20` from "payment1" was refunded
returns "320"; cashback for "payment2" was not refunded yet
returns "440"; cashback of `20` from "payment2" was refunded

the output should be ["true", "true", "2000", "payment1", "payment2", "", "", "IN_PROGRESS", "account1(2000), account2(0)", "100", "CASHBACK_RECEIVED", "220", "320", "440"].

Input/Output

    [execution time limit] 4 seconds (js)

    [memory limit] 1 GB

    [input] array.array.string queries

    An array of queries to the system. It is guaranteed that all the queries parameters are valid: each query calls one of the operations described in the description, all operation parameters are given in the correct format, and all conditions required for each operation are satisfied.

    Guaranteed constraints:
    1 ≤ queries.length ≤ 500.

    [output] array.string

    An array of strings representing the returned values of queries.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

