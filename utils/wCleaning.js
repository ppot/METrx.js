// TODO: IMPLEMENT day cleaning named part like wod and work
module.exports = (wmap) => {
  const Tclean = (day) => {
    if (day instanceof Map) {
      let kday = day.keys();
      for (let nValue = kday.next(); nValue.done !== true; nValue = kday.next()) {
        let cSelect = day.get(nValue.value);
        let cSplit = cSelect.split("\n")
        for (var i = 0; i < cSplit.length; i++) {
          let c = cSplit[i].trim();
          cSplit[i] = cSplit[i].trim();
        }
        if (cSplit[cSplit.length-1] === '') {
          cSplit.pop();
        }
        if (cSplit.length <= 1) {
          cSplit = cSplit[0];
        }
        day.set(nValue.value, cSplit)
      }
      return day;
    } else {
      return day
    }
  };
  
  let k  = wmap.keys();
  for (let nextValue = k.next(); nextValue.done !== true; nextValue = k.next()) {
    Tclean(wmap.get(nextValue.value));
  }
  
  return wmap;
}