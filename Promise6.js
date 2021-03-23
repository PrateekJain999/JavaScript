const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

var run = async () => {
    // promise version
    Promise
        .all([
            read('input.txt'),
            read('input.txt'),
            read('input.txt')
        ])
        .then(data => {
            const [ data1, data2, data3 ] = data;

            console.log(data1.toString());
            console.log(data2.toString());
            console.log(data3.toString());
        });


    // async/await version
    const [ data1, data2, data3 ] =
        await Promise
            .all([
                read('input.txt'),
                read('input.txt'),
                read('input.txt')
            ])
    console.log(data1.toString());
    console.log(data2.toString());
    console.log(data3.toString());
};

run();