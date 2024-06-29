function solution(queries) {
    let accounts = {};

    function createAccount(timestamp, accountId) {
        if (!(accountId in accounts)) {
            accounts[accountId] = {
                id: accountId,
                balance: 0,
                totalOutgoing: 0,
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
                accounts[sourceAccountId].totalOutgoing += transferAmount; // Update totalOutgoing
                return accounts[sourceAccountId].balance.toString();
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    function topSpenders(timestamp, n) {
        let sortedAccounts = Object.values(accounts)
            .sort((a, b) => {
                if (a.totalOutgoing !== b.totalOutgoing) {
                    return b.totalOutgoing - a.totalOutgoing; // Sort by totalOutgoing descending
                } else {
                    return a.id.localeCompare(b.id); // Sort alphabetically by accountId if totalOutgoing is tied
                }
            })
            .slice(0, n)
            .map(account => `${account.id}(${account.totalOutgoing})`);

        return sortedAccounts.join(', ');
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
            case "TOP_SPENDERS":
                results.push(topSpenders(timestamp, parseInt(params[0])));
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
];

let result = solution(queries);
console.log(result);  
// Expected Output: ["true", "true", "true", "2000", "3000", "4000", "account1(0), account2(0), account3(0)", "3500", "2500", "500", "account1(2500), account3(1500), account2(0)"]
