// TODO: find workout part based on the trainning day
const wparts = require('../data/wparts.json')
module.exports = {
  tWod: (text) => {
    // let txS = text.match( //i )
    let txS = -1; 
    for (var i = 0; i < wparts.wod.length; i++) {
      const tx = text.match(new RegExp(wparts.wod[i], 'i'));
      console.log(tx);
      // if (text.search(wparts.wod[i]) != -1 ) {
      //   txS =  text.search(wparts.wod[i])
      // }
    }
    return txS;
  },
  tWrk: (text) => {
    let txS = -1; 
    for (var i = 0; i < wparts.work.length; i++) {
      if (text.search(wparts.work[i]) != -1 ) {
        txS =  text.search(wparts.work[i])
      }
    }
    return txS;
  }  
}