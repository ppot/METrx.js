// main entry of METrx data interpretation for Crossfit movements.

// Pass text for interpretation and recognition of : workout delimiter. movements .
const sections = require('./search/sections')

const content = require('./data/content')
const wparts = require('./data/wparts')
const wdays = require('./data/wDays')

const weekSet = require('./exparts/wExtractWeek')
const multipart = require('./exparts/wDayMultipart')

module.exports = () => {
  let weekPorgram = weekSet(content, wdays.D);
  weekPorgram = multipart(weekPorgram, sections);
  // console.log(weekPorgram);
  // const text = `
  // Work:
  // A. Deadlift 6x 8 (ramp up)
  // B. L-Sit hold 6x 30-45s
  // Wod:
  // 3-6-9-12-etc...
  // Amrap 7min
  // Power Snatch 95/65lbs
  // Burpees over bar`;
  // 
  // console.log('METrx'
  // ,
  // text);
  
  // const x  = sections.tWod(text);
  // const y  = sections.tWrk(text);
  // console.log(' Wod :', x);
  // console.log(' WRK :', y);
  
// 
//   let str = "Fame is the thirst of youth";
// 
// let result = text.match( //i );
// 
// console.log( result );    // Fame (the match)
// console.log( result.index ); // 0 (at the zero position)
// console.log( result.input ); // "Fame is the thirst of youth" (the string)

  // var regexp = /abc/g;
  // var foo = "abc1, abc2, abc3, zxy, abc4";
  // var match, matches = [];
  // 
  // while ((match = regexp.exec(foo)) != null) {
  // matches.push(match.index);
  // }
  // 
  // console.log(matches);
}