
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
            }
        });
        return output;
    }
    // Example usage:
    const queries = [
        ["ADD", "5"],
        ["ADD", "10"],
        ["ADD", "5"],
        ["DELETE", "10"],
        ["DELETE", "1"],
        ["ADD", "1"]
    ];
    console.log(solution(queries)); // Output: ["1", "2", "3", "true", "false", "3"]
    