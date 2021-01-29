const {
  stolenItems,
  mostExpensiveItem,
  findIt,
  addName,
  thirdMostExpensive,
  convertToNumber,
  makeCopy,
  removeEntry,
  filterValues,
  calculateDifference,
  sayWhat,
  getVodkaBottle,
  sortList,
  totalAmountAdjectives,
  countNumberOfOccurences,
  determineWhoCursedTheMost,
  determineWinnerOfFight,
  makeDetailedList,
  preventChanges,
  signYourName
} = require("../burglarySeries");

describe("Burglary Series", () => {
  describe("Part 01: Stolen Items", () => {
    describe("stolenItems", () => {
      describe("Return total amount of burglary, if none, return 'Lucky you!'", () => {
        const data = [
          [{ tv: 30, skate: 20, stereo: 50 }, 100],
          [{ ring: 30000, painting: 20000, bust: 1 }, 50001],
          [{ chair: 3500 }, 3500],
          [{}, "Lucky you!"]
        ];

        test.each(data)("stolenItems(%o) = %p", (obj, result) => {
          let actual = stolenItems(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 02: Most Valuable Item", () => {
    describe("mostExpensiveItem", () => {
      describe("Return the most expensive item on the list", () => {
        const data = [
          [{ tv: 30, skate: 20, stereo: 50 }, "stereo"],
          [{ skate: 20 }, "skate"],
          [{ tv: 30, skate: 20 }, "tv"]
        ];

        test.each(data)("mostExpensiveItem(%o) = %p", (obj, result) => {
          let actual = mostExpensiveItem(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 03: Is It Gone?", () => {
    describe("findIt", () => {
      describe("Return message if pet is gone or not", () => {
        const data = [
          [{}, "rambo", "Rambo is here!"],
          [{}, "heman", "Heman is here!"],
          [{ tv: 30, stereo: 50 }, "rocky", "Rocky is here!"],
          [{ tv: 30, stereo: 50 }, "spiderman", "Spiderman is here!"],
          [{ tv: 30, stereo: 50, julius: 100 }, "julius", "Julius is gone..."],
          [{ tv: 30, stereo: 50, batman: 200 }, "batman", "Batman is gone..."]
        ];

        test.each(data)("findIt(%o, %p) = %p", (obj, name, result) => {
          let actual = findIt(obj, name);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 04: Add Its Name", () => {
    describe("addName", () => {
      describe("Return object with name and value as key-value pairs", () => {
        const data = [
          [{}, "Brutus", 300, { Brutus: 300 }],
          [{ piano: 500 }, "Brutus", 400, { piano: 500, Brutus: 400 }],
          [
            { piano: 500, stereo: 300 },
            "Caligula",
            440,
            { piano: 500, stereo: 300, Caligula: 440 }
          ]
        ];

        test.each(data)(
          "addName(%o, %p, %i) = %o",
          (obj, name, value, result) => {
            let actual = addName(obj, name, value);

            expect(actual).toEqual(result);
          }
        );
      });
    });
  });

  describe("Part 05: Third Most Expensive", () => {
    describe("thirdMostExpensive", () => {
      describe("Return the third most expensive item on the list, otherwise return false", () => {
        const data = [
          [{}, false],
          [{ piano: 100 }, false],
          [{ piano: 100, stereo: 200 }, false],
          [{ piano: 100, stereo: 200, tv: 10 }, "tv"],
          [{ piano: 100, stereo: 200, tv: 10, timmy: 500 }, "piano"],
          [
            { computer: 1000, piano: 500, stereo: 200, tv: 10, timmy: 1 },
            "stereo"
          ]
        ];

        test.each(data)("thirdMostExpensive(%o) = %s", (obj, result) => {
          let actual = thirdMostExpensive(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 06: Convert To Number", () => {
    describe("convertToNumber", () => {
      describe("Convert all values of an object to number", () => {
        const data = [
          [
            { piano: "200", tv: "300", stereo: "400" },
            { piano: 200, tv: 300, stereo: 400 }
          ],
          [
            { piano: "200", tv: "300" },
            { piano: 200, tv: 300 }
          ],
          [{ piano: "200" }, { piano: 200 }]
        ];

        test.each(data)("convertToNumber(%o) = %o", (obj, result) => {
          let actual = convertToNumber(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 07: Make A Copy", () => {
    describe("makeCopy", () => {
      describe("Return a copy of the list", () => {
        const data = [
          [{ piano: 100 }, { piano: 100 }],
          [{ stereo: 200 }, { stereo: 200 }]
        ];

        test.each(data)("makeCopy(%o) = %o", (obj, result) => {
          let actual = makeCopy(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 08: Remove An Entry", () => {
    describe("removeEntry", () => {
      describe("Return a copy of list without input item name", () => {
        const random = Math.random();

        const data = [
          [{ piano: random, tv: 100 }, "tv", { piano: random }],
          [
            { piano: random, tv: 100, skate: 50 },
            "tv",
            { piano: random, skate: 50 }
          ]
        ];

        test.each(data)("removeEntry(%o, %p) = %o", (obj, itemName, result) => {
          let actual = removeEntry(obj, itemName);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 09: Filter Values", () => {
    describe("filterValues", () => {
      describe("Return list of items with values equal or greater than 5000", () => {
        const data = [
          [{}, {}],
          [{ piano: 300 }, {}],
          [
            { tv: 4999, guitar: 5000, fork: 5001 },
            { guitar: 5000, fork: 5001 }
          ]
        ];

        test.each(data)("filterValues(%o) = %o", (obj, result) => {
          let actual = filterValues(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 10: Calculate Difference", () => {
    describe("calculateDifference", () => {
      describe("Return difference between total value of items and limit of policy", () => {
        const data = [
          [{ skate: 20000, painting: 30000, shoes: 1 }, 50000, 1],
          [{ "baseball bat": 31 }, 10, 21]
        ];

        test.each(data)(
          "calculateDifference(%o, %i) = %i",
          (obj, limit, result) => {
            let actual = calculateDifference(obj, limit);

            expect(actual).toEqual(result);
          }
        );
      });
    });
  });

  describe("Part 11: Say What", () => {
    describe("sayWhat", () => {
      describe("Return string that concatenates all values and adds 2nd key at the end", () => {
        const data = [
          [{ 1: "Mommy", 2: "please", 3: "help" }, "Mommy please help please"],
          [{ 1: "Me", 2: "innocent", 3: "is" }, "Me innocent is innocent"],
          [{ 1: "Must", 2: "lawyer", 3: "call" }, "Must lawyer call lawyer"]
        ];

        test.each(data)("sayWhat(%o) = %p", (obj, result) => {
          let actual = sayWhat(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 12: Get Vodka Bottle", () => {
    describe("getVodkaBottle", () => {
      describe("Return a string with the name of the Rammstein bottle that matches the given number", () => {
        const data = [
          [
            { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 },
            100,
            "Rammstein A"
          ],
          [
            { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 },
            50,
            "Rammstein B"
          ],
          [
            { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 },
            70,
            "Rammstein D"
          ]
        ];

        test.each(data)("getVodkaBottle(%o, %i) = %p", (obj, num, result) => {
          let actual = getVodkaBottle(obj, num);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 13: Sort That List", () => {
    describe("sortList", () => {
      describe("Return new object with list in reverse order", () => {
        const data = [
          [
            { c: 100, a: 50, b: 10, d: 50 },
            { d: 50, c: 100, b: 10, a: 50 }
          ],
          [
            { ab: 10, ac: 10, ad: 10 },
            { ad: 10, ac: 10, ab: 10 }
          ],
          [
            { piano: 5, stereo: 10, suitcase: 1 },
            { suitcase: 1, stereo: 10, piano: 5 }
          ]
        ];

        test.each(data)("sortList(%o) = %o", (obj, result) => {
          let actual = sortList(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 14: Adjectives Total", () => {
    describe("totalAmountAdjectives", () => {
      describe("Return total amount of adjectives used", () => {
        const data = [
          [{ a: "moron" }, 1],
          [{ a: "idiot", b: "idiot", c: "idiot" }, 3],
          [{ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }, 4]
        ];

        test.each(data)("totalAmountAdjectives(%o) = %i", (obj, result) => {
          let actual = totalAmountAdjectives(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 15: Number Of Occurences", () => {
    describe("countNumberOfOccurences", () => {
      describe("Return new object with count of occurences of each adjective", () => {
        const data = [
          [
            { a: "moron", b: "scumbag", c: "moron", d: "idiot", e: "idiot" },
            { moron: 2, scumbag: 1, idiot: 2 }
          ],
          [{ a: "moron", b: "moron", c: "moron" }, { moron: 3 }],
          [
            { a: "idiot", b: "scumbag" },
            { idiot: 1, scumbag: 1 }
          ]
        ];

        test.each(data)("countNumberOfOccurences(%o) = %o", (obj, result) => {
          let actual = countNumberOfOccurences(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 16: Nested Objects", () => {
    describe("determineWhoCursedTheMost", () => {
      describe("Return string of who cursed the most", () => {
        const data = [
          [
            {
              round1: { me: 10, spouse: 5 },
              round2: { me: 5, spouse: 10 },
              round3: { me: 10, spouse: 10 }
            },
            "DRAW!"
          ],
          [
            {
              round1: { me: 40, spouse: 5 },
              round2: { me: 9, spouse: 10 },
              round3: { me: 9, spouse: 10 }
            },
            "ME!"
          ],
          [
            {
              round1: { me: 10, spouse: 5 },
              round2: { me: 9, spouse: 44 },
              round3: { me: 10, spouse: 55 }
            },
            "SPOUSE!"
          ]
        ];

        test.each(data)("determineWhoCursedTheMost(%o) = %p", (obj, result) => {
          let actual = determineWhoCursedTheMost(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 17: Who Is The Winner?", () => {
    describe("determineWinnerOfFight", () => {
      describe("Return who won most rounds", () => {
        const data = [
          [
            {
              round1: { me: 10, spouse: 5 },
              round2: { me: 9, spouse: 9 },
              round3: { me: 20, spouse: 20 }
            },
            "ME!"
          ],
          [
            {
              round1: { me: 10, spouse: 5 },
              round2: { me: 9, spouse: 14 },
              round3: { me: 10, spouse: 55 }
            },
            "SPOUSE!"
          ],
          [
            {
              round1: { me: 10, spouse: 9 },
              round2: { me: 11, spouse: 12 },
              round3: { me: 10, spouse: 10 }
            },
            "NOBODY!"
          ]
        ];

        test.each(data)("determineWinnerOfFight(%o) = %p", (obj, result) => {
          let actual = determineWinnerOfFight(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 18: Detailed List", () => {
    describe("makeDetailedList", () => {
      describe("Return an object that represents where the goods were stolen and which goods are stolen", () => {
        const data = [
          [
            [["kitchen", ["piano", "tv"], [1000, 50]]],
            { kitchen: { piano: 1000, tv: 50 } }
          ],
          [
            [
              ["basement", ["baseball bat"], [500]],
              ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
            ],
            {
              basement: { "baseball bat": 500 },
              garage: { horses: 110, cadillac: 2000, flowers: 30 }
            }
          ]
        ];

        test.each(data)("makeDetailedList(%o) = %o", (arr, result) => {
          let actual = makeDetailedList(arr);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 19: Prevent Changes", () => {
    describe("preventChanges", () => {
      test("Return input object despite added changes in the function", () => {
        const obj = { noChanges: true };

        let actual = preventChanges(obj);

        expect(actual).toEqual(obj);
      });
    });
  });

  describe("Part 20: Sign Your Name", () => {
    describe("signYourName", () => {
      test("Return input object with no additional properties", () => {
        const obj = { yourSignature: "" };

        let actual = signYourName(obj);

        expect(actual).toEqual({ yourSignature: "Whatever" });
      });
    });
  });
});
