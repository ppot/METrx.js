const wparts = require('../data/wparts.json')

module.exports = {
  Twod: (text) => {
    const iterator = wparts.wod[Symbol.iterator]();
    for (let nextValue = iterator.next(); nextValue.done !== true; nextValue = iterator.next()) {
      const position = text.match(new RegExp(nextValue.value, 'i'));
      if (position) {
        return position;
        break;
      }
      return undefined;
    }
  },
  Twork: (text) => {
    const iterator = wparts.work[Symbol.iterator]();
    for (let nextValue = iterator.next(); nextValue.done !== true; nextValue = iterator.next()) {
      const position = text.match(new RegExp(nextValue.value, 'i'));
      if (position) {
        return position;
        break;
      }
      return undefined;
    }
    
  }  
}