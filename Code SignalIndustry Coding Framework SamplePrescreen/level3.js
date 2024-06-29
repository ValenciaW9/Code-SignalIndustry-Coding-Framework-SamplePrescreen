function solution(queries) {
    let accounts = {};

    function createAccount(timestamp, accountId) {
        if (!(accountId in accounts)) {
            accounts[accountId] = {
                id: accountId,
                balance: 0,
                transactions: []  // For future levels
            };
            return "true";
        } else {
            return "false";
        }
    }

    function deposit(timestamp, accountId, amount) {
        if (accountId in accounts) {
            let balance = accounts[accountId].balance;
            let newBalance = balance + parseInt(amount);
            accounts[accountId].balance = newBalance;
            return newBalance.toString();
        } else {
            return "";
        }
    }

    function transfer(timestamp, sourceAccountId, targetAccountId, amount) {
        if (sourceAccountId === targetAccountId) {
            return "";
        }

        if (sourceAccountId in accounts && targetAccountId in accounts) {
            let sourceBalance = accounts[sourceAccountId].balance;
            let targetBalance = accounts[targetAccountId].balance;
            let transferAmount = parseInt(amount);

            if (sourceBalance >= transferAmount) {
                accounts[sourceAccountId].balance -= transferAmount;
                accounts[targetAccountId].balance += transferAmount;
                return accounts[sourceAccountId].balance.toString();
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    let results = [];

    for (let query of queries) {
        let [operation, timestamp, ...params] = query;

        switch (operation) {
            case "CREATE_ACCOUNT":
                results.push(createAccount(timestamp, ...params));
                break;
            case "DEPOSIT":
                results.push(deposit(timestamp, ...params));
                break;
            case "TRANSFER":
                results.push(transfer(timestamp, ...params));
                break;
            default:
                results.push("");
                break;
        }
    }

    return results;
}

// Example usage:
let queries = [
    ["CREATE_ACCOUNT", "1", "account1"],
    ["CREATE_ACCOUNT", "2", "account1"],
    ["CREATE_ACCOUNT", "3", "account2"],
    ["DEPOSIT", "4", "non-existing", "2700"],
    ["DEPOSIT", "5", "account1", "2700"],
    ["TRANSFER", "6", "account1", "account2", "2701"],
    ["TRANSFER", "7", "account1", "account2", "200"]
];

let result = solution(queries);
console.log(result);  // Output: ["true", "false", "true", "", "2700", "", "2500"]