
function solution(queries) {
    let container = [];
    let output = [];

    queries.forEach(query => {
        let command = query[0];
        let value = query[1];

        if (command === "ADD") {
            container.push(value);
            output.push(container.length.toString());
        } else if (command === "DELETE") {
            let index = container.indexOf(value);
            if (index !== -1) {
                container.splice(index, 1);
                output.push("true");
            } else {
                output.push("false");
            }
        } else if (command === "GET_MEDIAN") {
            if (container.length === 0) {
                output.push("");
            } else {
                let sortedContainer = [...container].sort((a, b) => a - b);
                let middle = Math.floor((sortedContainer.length - 1) / 2);
                output.push(sortedContainer[middle]);
            }
        }
    });

    return output;
}

// Example usage:
const queries = [
    ["GET_MEDIAN"],
    ["ADD", "5"],
    ["ADD", "10"],
    ["ADD", "1"],
    ["GET_MEDIAN"],
    ["ADD", "4"],
    ["GET_MEDIAN"],
    ["DELETE", "1"],
    ["GET_MEDIAN"]
];

console.log(solution(queries)); // Output: ["", "1", "2", "3", "5", "4", "4", "true", "5"]

