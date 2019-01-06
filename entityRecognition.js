// const w1 = "test";
const w1 = "tset";
const w2 = "tsext";

let wcalc = 0;
let wpercent;
const wl = w1.length === w2.length ? 1 : 0;
if (wl) {
  wcalc += wl
  console.log('TRUE' + wl);
  let w1s = w1.split('');
  let w2s = w2.split('');
  
  console.log(w1s);
  console.log(w2s);
  
  for (var i = 0; i < w1s.length; i++) {
    console.log(w1s[i], w2s[i], w1s[i] === w2s[i]);
    const wps = w1s[i] === w2s[i] ? 1 : 0;
    wcalc += wps;
  }
  wpercent = wcalc/w1.length;
  console.log(wpercent);
} else {
  let w1s = w1.split('');
  let w2s = w2.split('');
  
  console.log(w1s);
  console.log(w2s);
  
  const L = w1s.length > w2s.length ? w1s.length : w2s.length;
  
  for (var i = 0; i < L; i++) {
    
    console.log(w1s[i], w2s[i], w1s[i] === w2s[i]);
    const wps = w1s[i] === w2s[i] ? 1 : 0;
    console.log(wps);
  }
  
  
  console.log('FALSE');
}
