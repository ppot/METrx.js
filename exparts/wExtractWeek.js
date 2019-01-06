// OPTIMIZE:  reduce function into one aggragation
module.exports = (content, wdays) => {
  let dPos = []
  for (var i = 0; i < wdays.length; i++) {
    const cmatch = content.match(new RegExp(wdays[i], 'i'));
    cmatch != null ? dPos.push(cmatch.index): cmatch;
  }
  
  let nextIndex = 0;
  let weekPorgram = new Map();
  while(nextIndex < dPos.length) {
    let day = content.slice(dPos[nextIndex], dPos[nextIndex+1]);
    weekPorgram.set(nextIndex, day);
    nextIndex++;
  }
  return weekPorgram;
}