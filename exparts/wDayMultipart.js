module.exports = (week, Tsections) => {
  const Tday = (day, Tsections) => {
    let map = new Map();
    
    const Twork = Tsections.Twork(day);
    const Twod = Tsections.Twod(day);
    
    if (!Twork && !Twod) {
      // 'work not found', 'wod not found'
      return day;
    }
    
    if (Twork && !Twod) {
      // 'wod not found'
      if (Twork.index >= 0) {
        map.set('T', day.slice(0, Twork.index));
      }
      map.set('Twork', day.slice(Twork.index, day.length));
      return map;
    }
    
    if (!Twork && Twod) {
      // 'work not found'
      if (Twod.index >= 0) {
        map.set('T', day.slice(0, Twod.index));
      }
      map.set('Twod', day.slice(Twod.index, day.length));
      return map;
    }

    // EDGE CASE not IMPLEMENTED = if work or wod not found = not working.
    if (Twork && Twod) {
      if (Twork.index < Twod.index) {
        // THIS LOGIC
        if (Twork.index >= 0) {
          map.set('T', day.slice(0, Twork.index));
        }
        map.set('Twork', day.slice(Twork.index, Twod.index));
        map.set('Twod', day.slice(Twod.index, day.length));
      }
      if (Twork.index > Twod.index) {
        // INVERT
        if (Twod.index >= 0) {
          map.set('T', day.slice(0, Twod.index));
        }
        map.set('work', day.slice(Twod.index, Twork.index));
        map.set('Twod', day.slice(Twork.index, day.length));
      }
      return map;
    }
    // TODO: IMPLEMENT not found logic
  };
  
  let k  = week.keys();
  for (let nextValue = k.next(); nextValue.done !== true; nextValue = k.next()) {
    week.set(nextValue.value, Tday(week.get(nextValue.value), Tsections));
  }
  return week;
};