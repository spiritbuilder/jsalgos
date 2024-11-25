function isMatch(s: string, p: string): boolean {
  let sIdx = 0,
    pIdx = 0,
    lastItem = 0;

  while (sIdx < s.length) {
    console.log(s[sIdx]);
    if (p[pIdx] !== "*") {
      console.log(
        `pIdx:${pIdx} patternCurrent ${p[pIdx]} lastPattern ${p[lastItem]}; stringValue:${s[sIdx]}`
      );
      if (s[sIdx] === p[pIdx] || p[pIdx] === ".") {
        lastItem = pIdx;
        pIdx++;
        sIdx++;
      }else{
        for(let i=pIdx;i<p.length;i++){

        }
      }
      return false;
    }else{

      // if(){

      // }

    }

    sIdx++;
  }

  return true;
}

export { isMatch };
