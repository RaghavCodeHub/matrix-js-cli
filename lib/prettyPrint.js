const PRINTJ = require('printj');

module.exports = function(data) {
    let output = [];
    if (!Array.isArray(data)) {
        return;
    }
    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            for (let j = 0; j < data[i].length; j++) {
                if (Number.isInteger(data[i][j])) {
                    output.push(PRINTJ.sprintf("%10d", data[i][j]));
                } else if (typeof data[i][j] === 'number') {
                    output.push(PRINTJ.sprintf("%10.2f", data[i][j]));
                }
            }
            output.push(PRINTJ.sprintf("\n"));
        } else {
            output.push(PRINTJ.sprintf("%10d", data[i]));
        }
    }
    console.log(output.join(''));
}