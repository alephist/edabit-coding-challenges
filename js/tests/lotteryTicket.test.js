const lottery = require("../lotteryTicket");

const data = [
  [
    [
      ["YYW", 70],
      ["WXK", 65],
      ["RPDI", 88]
    ],
    2,
    "Loser!"
  ],
  [
    [
      ["KG", 80],
      ["NTBBVZ", 79],
      ["CI", 73],
      ["AGXMEE", 74],
      ["IU", 68],
      ["VOSP", 84]
    ],
    1,
    "Winner!"
  ],
  [
    [
      ["ZSAMZB", 81],
      ["XWWCXP", 72],
      ["SYBRQOHP", 88],
      ["HJSVV", 75]
    ],
    1,
    "Loser!"
  ],
  [
    [
      ["GM", 84],
      ["KLJ", 86],
      ["UOF", 77],
      ["JKC", 84],
      ["RUI", 72]
    ],
    3,
    "Loser!"
  ],
  [
    [
      ["CXFAFUOW", 90],
      ["VKKC", 74],
      ["OPYVAUR", 84],
      ["WTMRW", 79],
      ["ZIL", 84],
      ["TDQMZD", 74],
      ["MR", 66],
      ["IQ", 86],
      ["JTBX", 88],
      ["ZJKX", 77]
    ],
    4,
    "Loser!"
  ],
  [
    [
      ["SHUT", 85],
      ["DOWPKSLD", 80],
      ["QOOGBTDG", 85],
      ["EID", 68],
      ["EZKKAEYW", 81],
      ["OYQBJCJE", 86],
      ["WYTDAMFI", 87],
      ["CW", 89],
      ["BICKVN", 76],
      ["BQH", 79]
    ],
    3,
    "Winner!"
  ],
  [
    [
      ["GITVQFQ", 65],
      ["VCQ", 71],
      ["DLK", 70],
      ["HUVMWH", 80],
      ["PLUYERTX", 68],
      ["JVJSHC", 81],
      ["OUSXBLP", 77],
      ["IGNCP", 82],
      ["LV", 65]
    ],
    9,
    "Loser!"
  ],
  [
    [
      ["CKLD", 80],
      ["VDGDL", 78],
      ["LKAJBSPM", 74],
      ["CCPNIE", 67],
      ["GS", 77],
      ["QYWGWS", 83],
      ["XLJUE", 73],
      ["CMUCLWE", 70],
      ["MHM", 90]
    ],
    8,
    "Loser!"
  ],
  [
    [
      ["TRJZKKCQ", 81],
      ["KYC", 80],
      ["WU", 66],
      ["MFTWCFZ", 83],
      ["TNIRSP", 72],
      ["VC", 86],
      ["AINOS", 87],
      ["RGROXMF", 86],
      ["URKVFY", 70]
    ],
    3,
    "Winner!"
  ],
  [
    [
      ["XONLHEB", 71],
      ["FXMR", 65],
      ["WMGY", 89]
    ],
    1,
    "Winner!"
  ]
];

describe("lottery", () => {
  describe("Return a string whether the user won the lottery or not", () => {
    test.each(data)("lottery(%o, %i) = %p", (ticket, win, result) => {
      let actual = lottery(ticket, win);

      expect(actual).toEqual(result);
    });
  });
});
