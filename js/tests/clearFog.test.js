const clearFog = require("../clearTheFog");

const data = [
  ["fogfogfffoooofftreesggfoogfog", "trees"],
  ["foooffFGGGGofoogfosgfogfkygfogfogfoooggg", "sky"],
  ["ffogfogoggofobirdsandthebeesfOGgoffog", "birdsandthebees"],
  ["fogfoofgfogfgplgfogfanefogofgoffgo", "plane"],
  ["fogofogoofgfffogthesgofogooagofogoourfoousfogfogfogfgofg", "thesaurus"],
  ["fogfgofofsunfogfgoogfogofgff", "sun"],
  ["city", "It's a clear day!"],
  ["distance", "It's a clear day!"],
  ["fogfogFFfoooofftogffreogffesGgfOogfog", "trees"],
  ["fogFogFogffoObirdsanffodthebFfoeffoesGGGfOgFog", "birdsandthebees"],
  ["fogfooGooggploffanoffefogoffoffgo", "plane"],
  ["tfroege", "tree"]
];

describe("clearFog", () => {
  describe("Return string with all fog letters removed", () => {
    test.each(data)("clearFog(%p) = %p", (str, result) => {
      let actual = clearFog(str);

      expect(actual).toEqual(result);
    });
  });
});
