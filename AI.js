// main entry of METrx data interpretation for Crossfit movements.

// Pass text for interpretation and recognition of : workout delimiter. movements .
const sections = require('./search/sections')

const content = require('./data/content')
const wparts = require('./data/wparts')
const wdays = require('./data/wDays')

const weekSet = require('./exparts/wExtractWeek')
const multipart = require('./exparts/wDayMultipart')
const cleaing = require('./utils/wCleaning')

module.exports = () => {
  let start = new Date()
  let hrstart = process.hrtime()
  let weekPorgram = weekSet(content, wdays.D);
  weekPorgram = multipart(weekPorgram, sections);
  weekPorgram = cleaing(weekPorgram);
  let end = new Date() - start;
  let hrend = process.hrtime(hrstart);
  console.log(weekPorgram);
  console.log('METrx'
  ,
  `
  Execution time: %dms ` + end +
  `
  Execution time (hr): %ds %dms ` +  hrend[0] + hrend[1] / 1000000);
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
}