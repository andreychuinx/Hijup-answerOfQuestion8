const clothes = [
  ["JakartaJS"],
  ["AWSome Day", "Elixir"],
  ["JVM User Group"],
  ["GOJakarta", "Elixir", "AWSome Day"]
]
const combineClothes = (clothes) => {
  var r = [], arg = clothes, max = arg.length - 1;
  const helper = (arr, i) => {
    if (r.length === arg.length) {
      return true
    }
    for (var j = 0, l = arg[i].length; j < l; j++) {
      var a = arr.slice(0); // clone arr
      if (a.indexOf(arg[i][j]) == -1) {
        a.push(arg[i][j]);
      }
      if (i == max) {
        r = a
        return
      }
      helper(a, i + 1);
    }
  }
  helper([], 0);
  return r.length === clothes.length ? true + '. Example of possible combination: ' + JSON.stringify(r) : false
}

console.log(combineClothes(clothes))
