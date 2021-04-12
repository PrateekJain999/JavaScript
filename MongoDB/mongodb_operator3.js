const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to Connect')
    }
    const db = client.db(databaseName)

    db.collection('Student', (err, col) => {

        if (err) {
            console.log("Error...");
            return;
        }

        // col.insertMany([
        //     {
        //         firstName: "Prashuk", lastName: "Jain", gender: "male", Address: "UP", phone: {
        //             work: 12345,
        //             home: 54321
        //         }, course: {
        //             'CSE': { 'P': 10, 'C': 32, 'M': 91 }
        //         }
        //     },
        //     {
        //         firstName: "Prateek", lastName: "Jain", gender: "male", Address: "UP", phone: {
        //             work: 1357,
        //             home: 1684
        //         }, course: {
        //             'CSE': { 'P': 15, 'C': 12, 'M': 31 }
        //         }
        //     },
        //     {
        //         firstName: "Nitesh", lastName: "Rastogi", gender: "male", Address: "BIHAR", phone: {
        //             work: 7494,
        //             home: 19474
        //         }, course: {
        //             'CSE': { 'P': 83, 'C': 62, 'M': 61 }
        //         }
        //     },
        //     {
        //         firstName: "Arun", lastName: "Dhadak", gender: "male", Address: "MP", phone: {
        //             work: 2378393,
        //             home: 393893
        //         }, course: {
        //             'CSE': { 'P': 56, 'C': 45, 'M': 46 }
        //         }
        //     },
        //     {
        //         firstName: "Tushar", lastName: "Dhiman", gender: "male", Address: "PUNJAB", phone: {
        //             work: 34832,
        //             home: 19442
        //         }, course: {
        //             'CSE': { 'P': 89, 'C': 78, 'M': 41 }
        //         }
        //     },
        //     {
        //         firstName: "Ankit", lastName: "Updhayay", gender: "male", Address: "Firozabad", phone: {
        //             work: 12345,
        //             home: 54321
        //         }, course: {
        //             'CSE': { 'P': 60, 'C': 72, 'M': 51 }
        //         }
        //     },
        //     {
        //         firstName: "Nehal", lastName: "Tiwari", gender: "female", Address: "RAJISTHAN", phone: {
        //             work: 48312,
        //             home: 287473
        //         }, course: {
        //             'CSE': { 'P': 67, 'C': 34, 'M': 54 }
        //         }
        //     },
        //     {
        //         firstName: "Priyanka", lastName: "Jain", gender: "female", Address: "UP", phone: {
        //             work: 554465,
        //             home: 466773
        //         }, course: {
        //             'CSE': { 'P': 60, 'C': 45, 'M': 81 }
        //         }
        //     },
        //     {
        //         firstName: "Shivam", lastName: "Pandey", gender: "male", Address: "MP", phone: {
        //             work: 85456,
        //             home: 57644
        //         }, course: {
        //             'CSE': { 'P': 16, 'C': 92, 'M': 74 }
        //         }
        //     },
        //     {
        //         firstName: "Priyanshu", lastName: "Kumar", gender: "male", Address: "MP", phone: {
        //             work: 5456,
        //             home: 36897
        //         }, course: {
        //             'CSE': { 'P': 78, 'C': 82, 'M': 91 }
        //         }
        //     },
        //     {
        //         firstName: "Jatin", lastName: "Seghal", gender: "male", Address: "PUNJAB", phone: {
        //             work: 468784,
        //             home: 476772
        //         }, course: {
        //             'CSE': { 'P': 17, 'C': 86, 'M': 34 }
        //         }
        //     },

        // ], (err, data) => {
        //     console.log(data);
        // });

        // col.aggregate([{ $match: { firstName: 'Prateek' } }]).toArray((err, result) => {
        //     console.log(result);
        // })

        // col.aggregate([
        //     { $match: { firstName: 'Prateek' } },
        //     {
        //         $project: {
        //             _id: 0,
        //             name: { $concat: ['$firstName', " ", '$lastName'] },
        //             gender: 1,
        //             Address: 1,
        //             phone: 1
        //         }
        //     }
        // ]).toArray((err, result) => {
        //     console.log(result);
        // })

        // col.aggregate(
        //     [
        //         { $match: { gender: 'male' } },
        //         { $group: { _id: '$firstName', total: { $sum: 1 } } }
        //     ]
        // ).toArray((err, result) => {
        //     console.log(result);
        // })

        // col.aggregate(
        //     [
        //         { $match: { firstName: 'Prateek' } },
        //         { $unwind: '$course' }
        //     ]
        // ).toArray((err, result) => {
        //     console.log(result);
        // })

        // col.aggregate(
        //     [
        //         { $match: { gender: 'male' } },
        //         { $sort: { firstName: 1 } }
        //     ]
        // ).toArray((err, result) => {
        //     console.log(result);
        // })

        // col.aggregate(
        //     [
        //         { $match: { gender: 'male' } },
        //         { $sort: { firstName: 1 } },
        //         { $limit: 5 }
        //     ]
        // ).toArray((err, result) => {
        //     console.log(result);
        // })

        // col.aggregate(
        //     [
        //         { $match: { gender: 'male' } },
        //         { $sort: { firstName: 1 } },
        //         { $count: 'Total' }
        //     ]
        // ).toArray((err, result) => {
        //     console.log(result);
        // })

        //=================================== Arthemetic operator =========================================

        // col.aggregate(
        //     [
        //         { $match: { 'firstName': 'Prateek' } },
        //         {
        //             $project: {
        //                 'abs': { $abs: [{ $subtract: ['$phone.work', '$phone.home'] }] },
        //                 'add': { $add: [{ $subtract: ['$phone.work', '$phone.home'] }, 2] },
        //                 'multiply': { $multiply: [{ $subtract: ['$phone.work', '$phone.home'] }, 2] },
        //                 'divide': { $divide: [{ $subtract: ['$phone.work', '$phone.home'] }, 2] },
        //                 'ceil': { $ceil: { $divide: [{ $subtract: ['$phone.work', '$phone.home'] }, 2] } },
        //                 'floor': { $floor: { $divide: [{ $subtract: ['$phone.work', '$phone.home'] }, 2] } },
        //                 'pow': { $pow: [{ $abs: [{ $subtract: ['$phone.work', '$phone.home'] }] }, 2] },
        //                 'sqrt': { $sqrt: { $abs: [{ $subtract: ['$phone.work', '$phone.home'] }] } },
        //                 'round': { $round: { $divide: [{ $subtract: ['$phone.work', '$phone.home'] }, 2] } },
        //                 'ln': { $ln: [{ $abs: [{ $subtract: ['$phone.work', '$phone.home'] }] }] },
        //                 'log': { $log: [{ $abs: [{ $subtract: ['$phone.work', '$phone.home'] }] }, 5] },
        //                 'log10': { $log10: [{ $abs: [{ $subtract: ['$phone.work', '$phone.home'] }] }] },
        //                 'mod': { $mod: [{ $abs: [{ $subtract: ['$phone.work', '$phone.home'] }] }, 5] },
        //                 'trunc': { $trunc: [{ $sqrt: { $abs: [{ $subtract: ['$phone.work', '$phone.home'] }] } }, 3] }
        //             }
        //         }
        //     ]
        // ).toArray((err, result) => {
        //     console.log(result);
        // })

        //===================================  String Experssion ===================================================

        // col.aggregate(
        //     [
        //         { $match: { 'gender': 'male' } },
        //         {
        //             $project: {
        //                 'concat': { $concat: ['$firstName', '-', '$lastName'] },
        //                 'dateFromString': { $dateFromString: { dateString: "1998-06-25", timezone: 'America/New_York' } },
        //                 'dateToString': { $dateToString: { date: new Date() } },
        //                 'indexOfBytes': { $indexOfBytes: ["$firstName", "e"] },  //[<string expression>, <substring expression>, <start>, <end>]
        //                 'indexOfCP': { $indexOfCP: ["$firstName", "e"] },  //[<string expression>, <substring expression>, <start>, <end>]
        //                 'ltrim': { $ltrim: { input: '$firstName' } },  //{ $ltrim: { input: <string>,  chars: <string> } }
        //                 'regexFind': { $regexFind: { input: '$firstName', regex: /P/ } }, //{$regexFind: {input: <expression> , regex: <expression>, options: <expression>}}
        //                 'regexMatch': { $regexMatch: { input: '$firstName', regex: /ra/ } }, //{$regexMatch: {input: <expression> , regex: <expression>, options: <expression>}}
        //                 'replaceOne': { $replaceOne: { input: '$firstName', find: 'ra', replacement: 'RA' } }, // { $replaceOne: { input: <expression>, find: <expression>, replacement: <expression> } }
        //                 'replaceAll': { $replaceAll: { input: '$firstName', find: 'a', replacement: 'A' } }, // { $replaceAll: { input: <expression>, find: <expression>, replacement: <expression> } }
        //                 'split': { $split: ['$firstName', 'a'] }, //{ $split: [ <string expression>, <delimiter> ] }
        //                 'strLenCP': { $strLenCP: '$firstName' }, //{ $strLenCP: <string expression> }
        //                 'strLenBytes': { $strLenBytes: '$firstName' }, //{ $strLenBytes: <string expression> }
        //                 'strcasecmp': { $strcasecmp: ['$firstName', '$lastName'] }, //{ $strcasecmp: [ <expression1>, <expression2> ] }
        //                 'substr': { $substr: ['$firstName', 4, 6] }, //{ $substr: [ <string>, <start>, <length> ] }
        //                 'substrBytes': { $substrBytes: ['$firstName', 4, 6] }, //{ $substrBytes: [ <string expression>, <byte index>, <byte count> ] }
        //                 'substrCP': { $substrCP: ['$firstName', 4, 6] }, //{ $substrCP: [ <string expression>, <code point index>, <code point count> ] }
        //                 'toLower': { $toLower: '$firstName' }, //{ $toLower: <expression> }
        //                 'toUpper': { $toUpper: '$firstName' }, //{ $toUpper: <expression> }
        //                 'toString': { $toString: '$phone.work' }, //{ $toString: <expression> }

        //             }
        //         }
        //     ]
        // ).toArray((err, result) => {
        //     console.log(result);
        // })

        //======================================== Boolean experssion ==========================================

        // col.aggregate(
        //     [
        //         { $match: { 'gender': 'male' } },
        //         {
        //             $project: {
        //                 'and': { $and: [{ $gt: ["$phone.work", 90000] }, { $lt: ["$phone.home", 2000] }] }, //{ $and: [ <expression1>, <expression2>, ... ] }
        //                 'or': { $or: [{ $gt: ["$phone.work", 90000] }, { $lt: ["$phone.home", 2000] }] }, //{ $or: [ <expression1>, <expression2>, ... ] }
        //                 'not': { $not: [{ $gt: ["$phone.work", 80000] }] } //{ $not: [ <expression> ] }
        //             }
        //         }
        //     ]
        // ).toArray((err, result) => {
        //     console.log(result);
        // })

        //======================================= Type Experssion ==========================================

        // col.aggregate(
        //     [
        //         { $match: { 'gender': 'male' } },
        //         {
        //             $project: {
        //                 'convert': { $convert: { input: '$firstName', to: 'bool', onError: 'Not converted' /* Optional*/, onNull: 'Null found' /*Optional*/ } },
        //                 'isNumber': { $isNumber: '$firstName' }, //{ $isNumber: <expression> }
        //                 'toBool': { $toBool: '$firstName' }, //{$toBool: <expression>}
        //                 'toDate': { $toDate: new Date('$phone.work') }, //{$toDate: <expression>}
        //                 'toDecimal': { $toDecimal: '$phone.home' }, //{$toDecimal: <expression>}
        //                 'toDouble': { $toDouble: '$phone.work' }, //{$toDouble: <expression>}
        //                 'toInt': { $toInt: '$phone.work' }, //{$toInt: <expression>}
        //                 'toLong': { $toLong: '$phone.work' }, //{$toLong: <expression>}
        //                 //'toObjectId': {$toObjectId: '$phone.work'}, //{$toObjectId: <expression>}
        //                 'toString': { $toString: '$phone.work' }, //{$toString: <expression>}
        //                 'type': { $type: '$phone.work' }, //{ $type: <expression> }
        //             }
        //         }
        //     ]
        // ).toArray((err, result) => {
        //     console.log(result);
        // })

        //===================================== function aggregation ==============================================

        // col.aggregate(
        //     [
        //         { $match: { 'gender': 'male' } },
        //         {
        //             $project: {
        //                 isFound: {
        //                     $function: {
        //                         body: function (name) {
        //                             return name
        //                         },
        //                         args: ["$firstName"],
        //                         lang: "js"
        //                     }
        //                 },
        //                 message: {
        //                     $function: {
        //                         body: function (name, work) {
        //                             return `Hello ${name}.  Your total work phone no is ${work}.`
        //                         },
        //                         args: ["$firstName", "$phone.work"],
        //                         lang: "js"
        //                     }
        //                 }
        //             }
        //         }
        //     ]).toArray((err, result) => {
        //         console.log(result);
        //     })

        //========================================= object Experssion ======================================================

        // col.aggregate(
        //     [
        //         { $match: { 'gender': 'male' } },
        //         {
        //             $project: {
        //                 'mergeObjects': { $mergeObjects: [{ a: 1 }, { a: 2, b: 2 }, { a: 3, b: null, c: 3 }] },
        //                 'objectToArray': { $objectToArray: '$phone' }, //{ $objectToArray: <object> }
        //             }
        //         }
        //     ]).toArray((err, result) => {
        //         console.log(result);
        //     })

        //====================================  Year Experssion ========================================================

        // col.aggregate(
        //     [
        //         { $match: { 'gender': 'male' } },
        //         {
        //             $project: {
        //                 'dateFromParts1': { $dateFromParts: { 'year': 2018, 'month': 12, 'day': 1, 'hour': 15, 'minute': 45, 'second': 34, 'millisecond': 23, 'timezone': 'America/New_York' } },
        //                 'dateFromParts2': { $dateFromParts: { 'isoWeekYear': 2018, 'isoWeek': 3, 'isoDayOfWeek': 6, 'hour': 5, 'minute': 23, 'second': 34, 'millisecond': 56, 'timezone': 'America/New_York' } },
        //                 'dateFromString': { $dateFromString: { dateString: '1998-06-25T16:23:11', format: '%Y-%m-%dT%H:%M:%S', timezone: 'America/New_York', onError: 'Error', onNull: 'Null' } },
        //                 'dateToParts': { $dateToParts: { 'date': new Date(), 'timezone': 'America/New_York', 'iso8601': true } },
        //                 'dateToString': { $dateToString: { date: new Date(), format: '%Y-%m-%dT%H:%M:%S', timezone: 'America/New_York', onNull: 'Null' } },
        //                 'dayOfMonth': { $dayOfMonth: { date: new Date("August 14, 2011"), timezone: "America/New_York" } },
        //                 'dayOfWeek': { $dayOfWeek: { date: new Date(), timezone: "America/New_York" } },
        //                 'dayOfYear': { $dayOfYear: { date: new Date(), timezone: "America/New_York" } },
        //                 'hour': { $hour: { date: new Date(), timezone: "America/New_York" } },
        //                 'isoDayOfWeek': { $isoDayOfWeek: { date: new Date(), timezone: "America/New_York" } },
        //                 'isoWeek': { $isoWeek: { date: new Date(), timezone: "America/New_York" } },
        //                 'isoWeekYear': { $isoWeekYear: { date: new Date(), timezone: "America/New_York" } },
        //                 'millisecond': { $millisecond: { date: new Date(), timezone: "America/New_York" } },
        //                 'minute': { $minute: { date: new Date(), timezone: "America/New_York" } },
        //                 'month': { $month: { date: new Date(), timezone: "America/New_York" } },
        //                 'second': { $second: { date: new Date(), timezone: "America/New_York" } },
        //                 'toDate': { $toDate: new Date(56547657) },
        //                 'week': { $week: { date: new Date(), timezone: "America/New_York" } },
        //                 'year': { $year: { date: new Date(), timezone: "America/New_York" } }
        //             }
        //         }
        //     ]).toArray((err, result) => {
        //         console.log(result);
        //     })

        //========================================== Array Experssion ===============================================
        // col.aggregate(
        //     [
        //         { $match: { 'firstName': 'Prashuk' } },
        //         {
        //             $project: {
        //                 'arrayElemAt': { $arrayElemAt: ['$course', 0] },
        //                 //'arrayToObject': {$arrayToObject: [['key', '$course']]},
        //                 'concatArrays': { $concatArrays: ['$course', [1, 2, 3]] },
        //                 'first': { $first: '$course' }, //{ $first: <expression> }
        //                 'in': { $in: ['{}', '$course'] }, //{ $in: [ <expression>, <array expression>]}
        //                 'indexOfArray': { $indexOfArray: ['$course', { 'CSE': { 'P': 83, 'C': 62, 'M': 61 } }] }, //{ $indexOfArray: [ <array expression>, <search expression>, <start>, <end> ] }
        //                 'isArray': { $isArray: '$course' }, //{ $isArray: [ <expression> ] }
        //                 'objectToArray': { $objectToArray: { $arrayElemAt: ['$course', 0] } }, //{ $objectToArray: <object> }
        //                 'range': { $range: [0, 10, 2] }, //{ $range: [ <start>, <end>, <non-zero step> ] }
        //                 'reverseArray': { $reverseArray: '$course' }, //{ $reverseArray: <array expression> }
        //                 'size': { $size: '$course' }, //{ $size: <expression> }
        //                 'slice': { $slice: ['$course', 3] }, //{ $slice: [ <array>, <position>, <n> ] }
        //                 'map': { $map: { input: '$array', as: 'data', in: { $add: ['$$data', 2] } } }, //{ $map: { input: <expression>, as: <string>, in: <expression> } }
        //                 'filter': { $filter: { input: '$array', as: 'data', cond: { $gte: ["$$data", 2] } } }, //{ $filter: { input: <array>, as: <string>, cond: <expression> } }
        //                 'reduce': {
        //                     $reduce: { input: '$array', initialValue: { sum: 0, product: 1 }, in: { sum: { $add: ["$$value.sum", "$$this"] }, product: { $multiply: ["$$value.product", "$$this"] } } }, //{$reduce: { input: <array>, initialValue: <expression>, in: <expression>
        //                     //'zip': { $zip: { inputs: ['$array'], useLongestLength: true, defaults: ["a", "b", "c"] } } //{ $zip: { inputs: [ <array expression1>,  ... ], useLongestLength: <boolean>, defaults:  <array expression> }}
        //                 }
        //             }
        //         }
        //     ]).toArray((err, data) => {
        //         console.log(data)
        //     })

        //================================= set experssion ===================================
        // col.aggregate(
        //     [
        //         { $match: { 'firstName': 'Prashuk' } },
        //         {
        //             $project: {
        //                 'allElementsTrue1': { $allElementsTrue: ['$array'] },
        //                 'allElementsTrue2': { $allElementsTrue: [[]] },
        //                 'allElementsTrue3': { $allElementsTrue: [[false, 0]] },
        //                 'anyElementTrue1': { $anyElementTrue: ['$array'] },
        //                 'anyElementTrue2': { $anyElementTrue: [[true, false]] },
        //                 'anyElementTrue3': { $anyElementTrue: [[false, false]] },
        //                 'setDifference': { $setDifference: [[1, 2, 3, 4], [2, 3, 7, 8]] },
        //                 'setEquals1': { $setEquals: [[1, 2, 3, 4], [2, 3, 7, 8]] },
        //                 'setIntersection': { $setIntersection: [[1, 2, 3, 4], [2, 3, 7, 8]] },
        //                 'setIsSubset': { $setIsSubset: [[1, 2, 3, 4], [1, 2]] },
        //                 'setUnion': { $setUnion: [[1, 2, 3, 4], [2, 3, 7, 8]] },
        //             }
        //         }
        //     ])

        

    })
})