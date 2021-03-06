const hasHiddenFee = require("../noHiddenFees");

const data = [
  [["$2", "$4", "$1", "$8"], "$15", false],
  [["$1", "$2", "$3"], "$6", false],
  [["$1"], "$4", true],
  [
    ["$15", "$40", "$19", "$50", "$22", "$41", "$35", "$10", "$38", "$41"],
    "$311",
    false
  ],
  [
    [
      "$25",
      "$6",
      "$19",
      "$9",
      "$32",
      "$15",
      "$10",
      "$9",
      "$7",
      "$8",
      "$37",
      "$23",
      "$18"
    ],
    "$232",
    true
  ],
  [
    ["$31", "$30", "$21", "$12", "$10", "$38", "$42", "$27", "$51"],
    "$297",
    true
  ],
  [
    [
      "$9",
      "$37",
      "$21",
      "$4",
      "$14",
      "$10",
      "$36",
      "$33",
      "$17",
      "$41",
      "$50",
      "$48",
      "$2",
      "$45",
      "$6",
      "$22",
      "$23"
    ],
    "$499",
    true
  ],
  [["$44"], "$82", true],
  [["$15", "$30", "$34"], "$79", false],
  [
    [
      "$35",
      "$29",
      "$9",
      "$47",
      "$43",
      "$4",
      "$37",
      "$32",
      "$49",
      "$37",
      "$32",
      "$38",
      "$43",
      "$19",
      "$26",
      "$46",
      "$46",
      "$31",
      "$24",
      "$6"
    ],
    "$696",
    true
  ],
  [["$50", "$28", "$11", "$51", "$8", "$44"], "$192", false],
  [
    [
      "$50",
      "$14",
      "$45",
      "$43",
      "$7",
      "$45",
      "$34",
      "$28",
      "$46",
      "$50",
      "$36",
      "$23"
    ],
    "$432",
    true
  ],
  [
    [
      "$45",
      "$50",
      "$45",
      "$16",
      "$6",
      "$45",
      "$33",
      "$18",
      "$12",
      "$3",
      "$40",
      "$51"
    ],
    "$364",
    false
  ],
  [["$33", "$26", "$40", "$10", "$24", "$48"], "$181", false],
  [["$21", "$45", "$6", "$43", "$39"], "$207", true],
  [
    [
      "$18",
      "$44",
      "$51",
      "$31",
      "$22",
      "$8",
      "$21",
      "$27",
      "$21",
      "$3",
      "$42",
      "$10",
      "$47",
      "$29",
      "$32",
      "$47"
    ],
    "$517",
    true
  ],
  [
    [
      "$17",
      "$31",
      "$42",
      "$20",
      "$28",
      "$13",
      "$17",
      "$4",
      "$13",
      "$1",
      "$29",
      "$20",
      "$30",
      "$34",
      "$14",
      "$18",
      "$20",
      "$14",
      "$38",
      "$30"
    ],
    "$456",
    true
  ],
  [["$48", "$24", "$11"], "$83", false],
  [
    [
      "$14",
      "$15",
      "$12",
      "$18",
      "$29",
      "$3",
      "$29",
      "$9",
      "$7",
      "$2",
      "$15",
      "$8",
      "$50",
      "$4",
      "$3"
    ],
    "$218",
    false
  ],
  [
    [
      "$30",
      "$40",
      "$2",
      "$25",
      "$48",
      "$42",
      "$22",
      "$6",
      "$48",
      "$14",
      "$15",
      "$2",
      "$46",
      "$20",
      "$5",
      "$10",
      "$35"
    ],
    "$412",
    true
  ],
  [
    [
      "$43",
      "$49",
      "$2",
      "$15",
      "$6",
      "$20",
      "$31",
      "$7",
      "$38",
      "$40",
      "$17",
      "$25",
      "$21",
      "$29",
      "$12",
      "$34",
      "$22",
      "$45",
      "$18",
      "$19",
      "$31"
    ],
    "$524",
    false
  ],
  [["$25", "$16"], "$56", true],
  [
    [
      "$28",
      "$11",
      "$2",
      "$12",
      "$22",
      "$7",
      "$30",
      "$46",
      "$25",
      "$17",
      "$28",
      "$44",
      "$14",
      "$43",
      "$6",
      "$11",
      "$23",
      "$6",
      "$46"
    ],
    "$459",
    true
  ],
  [
    ["$24", "$31", "$6", "$20", "$35", "$33", "$1", "$46", "$45", "$36", "$43"],
    "$394",
    true
  ],
  [
    [
      "$18",
      "$25",
      "$44",
      "$36",
      "$50",
      "$32",
      "$7",
      "$42",
      "$23",
      "$38",
      "$43",
      "$9",
      "$7",
      "$22",
      "$51",
      "$35",
      "$8"
    ],
    "$557",
    true
  ],
  [
    [
      "$17",
      "$37",
      "$43",
      "$6",
      "$22",
      "$39",
      "$11",
      "$29",
      "$11",
      "$1",
      "$7",
      "$30",
      "$1",
      "$30",
      "$42",
      "$27",
      "$12",
      "$16",
      "$13",
      "$42",
      "$19"
    ],
    "$455",
    false
  ],
  [
    [
      "$40",
      "$39",
      "$22",
      "$19",
      "$24",
      "$40",
      "$16",
      "$47",
      "$28",
      "$23",
      "$45",
      "$2",
      "$45"
    ],
    "$428",
    true
  ],
  [
    ["$32", "$22", "$16", "$34", "$6", "$10", "$19", "$25", "$46"],
    "$282",
    true
  ],
  [
    [
      "$49",
      "$43",
      "$3",
      "$7",
      "$35",
      "$48",
      "$5",
      "$47",
      "$45",
      "$10",
      "$18",
      "$13",
      "$17",
      "$32",
      "$26"
    ],
    "$398",
    false
  ],
  [
    [
      "$37",
      "$29",
      "$22",
      "$32",
      "$32",
      "$51",
      "$18",
      "$49",
      "$19",
      "$15",
      "$6",
      "$18",
      "$8",
      "$2",
      "$36",
      "$39",
      "$48",
      "$25",
      "$32"
    ],
    "$518",
    false
  ],
  [
    [
      "$49",
      "$2",
      "$10",
      "$47",
      "$1",
      "$5",
      "$38",
      "$33",
      "$7",
      "$12",
      "$44",
      "$50",
      "$47",
      "$45",
      "$37",
      "$8",
      "$30"
    ],
    "$465",
    false
  ],
  [
    [
      "$41",
      "$38",
      "$12",
      "$33",
      "$34",
      "$7",
      "$40",
      "$19",
      "$17",
      "$48",
      "$41",
      "$30",
      "$1",
      "$38"
    ],
    "$399",
    false
  ],
  [
    [
      "$30",
      "$38",
      "$37",
      "$13",
      "$8",
      "$2",
      "$43",
      "$23",
      "$48",
      "$50",
      "$25",
      "$12",
      "$34"
    ],
    "$431",
    true
  ],
  [
    [
      "$11",
      "$41",
      "$4",
      "$6",
      "$37",
      "$51",
      "$1",
      "$23",
      "$41",
      "$18",
      "$6",
      "$36",
      "$40",
      "$36",
      "$16",
      "$10"
    ],
    "$377",
    false
  ],
  [["$45", "$22", "$18", "$3", "$5", "$10", "$30", "$39", "$32"], "$263", true],
  [
    [
      "$49",
      "$32",
      "$47",
      "$14",
      "$47",
      "$51",
      "$27",
      "$51",
      "$18",
      "$44",
      "$16",
      "$29",
      "$39",
      "$16",
      "$1",
      "$12",
      "$16",
      "$48",
      "$44",
      "$41"
    ],
    "$642",
    false
  ],
  [
    [
      "$37",
      "$3",
      "$7",
      "$5",
      "$23",
      "$1",
      "$11",
      "$50",
      "$9",
      "$5",
      "$16",
      "$30"
    ],
    "$197",
    false
  ],
  [
    [
      "$50",
      "$12",
      "$43",
      "$45",
      "$44",
      "$38",
      "$17",
      "$2",
      "$42",
      "$9",
      "$37",
      "$25",
      "$33",
      "$35",
      "$51"
    ],
    "$510",
    true
  ],
  [
    [
      "$35",
      "$17",
      "$35",
      "$24",
      "$29",
      "$21",
      "$50",
      "$8",
      "$44",
      "$45",
      "$13",
      "$44",
      "$17",
      "$42",
      "$51",
      "$10",
      "$47",
      "$46",
      "$47",
      "$18"
    ],
    "$643",
    false
  ],
  [
    [
      "$37",
      "$29",
      "$5",
      "$2",
      "$27",
      "$7",
      "$4",
      "$32",
      "$6",
      "$27",
      "$24",
      "$43",
      "$41",
      "$15",
      "$13",
      "$25",
      "$27",
      "$44"
    ],
    "$501",
    true
  ],
  [
    [
      "$1",
      "$5",
      "$19",
      "$26",
      "$14",
      "$51",
      "$51",
      "$27",
      "$6",
      "$13",
      "$28",
      "$40",
      "$21",
      "$20",
      "$10",
      "$27"
    ],
    "$412",
    true
  ],
  [["$4"], "$84", true],
  [["$13", "$9", "$49", "$2", "$18"], "$91", false],
  [
    [
      "$23",
      "$14",
      "$42",
      "$28",
      "$18",
      "$35",
      "$22",
      "$37",
      "$6",
      "$35",
      "$33",
      "$37",
      "$12",
      "$45",
      "$6",
      "$27",
      "$3",
      "$9"
    ],
    "$530",
    true
  ],
  [
    [
      "$21",
      "$2",
      "$16",
      "$49",
      "$26",
      "$32",
      "$7",
      "$33",
      "$4",
      "$28",
      "$12",
      "$24",
      "$39",
      "$39",
      "$28",
      "$13",
      "$27",
      "$33"
    ],
    "$490",
    true
  ],
  [["$9", "$20", "$46", "$36", "$14"], "$151", true],
  [
    [
      "$50",
      "$37",
      "$27",
      "$39",
      "$3",
      "$10",
      "$18",
      "$39",
      "$27",
      "$24",
      "$18",
      "$6",
      "$23",
      "$36",
      "$33",
      "$3",
      "$20"
    ],
    "$413",
    false
  ],
  [
    [
      "$3",
      "$15",
      "$8",
      "$24",
      "$41",
      "$22",
      "$5",
      "$21",
      "$51",
      "$9",
      "$45",
      "$25",
      "$26",
      "$9",
      "$18",
      "$34",
      "$16",
      "$12",
      "$5",
      "$24",
      "$12"
    ],
    "$438",
    true
  ],
  [
    [
      "$48",
      "$44",
      "$15",
      "$3",
      "$22",
      "$33",
      "$18",
      "$28",
      "$12",
      "$34",
      "$20",
      "$21",
      "$48",
      "$28",
      "$6",
      "$2",
      "$40",
      "$49",
      "$6"
    ],
    "$477",
    false
  ],
  [["$6", "$4", "$27", "$8", "$7", "$48", "$41"], "$236", true],
  [
    [
      "$38",
      "$30",
      "$24",
      "$15",
      "$5",
      "$1",
      "$50",
      "$41",
      "$20",
      "$12",
      "$18",
      "$48",
      "$18"
    ],
    "$320",
    false
  ],
  [["$31", "$48", "$15", "$7", "$36", "$32", "$15"], "$184", false],
  [
    [
      "$3",
      "$10",
      "$39",
      "$51",
      "$40",
      "$21",
      "$23",
      "$39",
      "$1",
      "$39",
      "$49",
      "$47",
      "$32",
      "$45",
      "$37",
      "$34",
      "$20",
      "$33"
    ],
    "$563",
    false
  ],
  [["$51", "$1", "$14", "$26", "$10", "$31", "$25"], "$158", false],
  [
    [
      "$2",
      "$12",
      "$14",
      "$50",
      "$16",
      "$24",
      "$9",
      "$19",
      "$50",
      "$3",
      "$16",
      "$26",
      "$31",
      "$41"
    ],
    "$317",
    true
  ],
  [
    [
      "$38",
      "$5",
      "$4",
      "$16",
      "$13",
      "$2",
      "$39",
      "$28",
      "$35",
      "$50",
      "$32",
      "$26",
      "$39"
    ],
    "$327",
    false
  ],
  [
    [
      "$17",
      "$41",
      "$26",
      "$40",
      "$50",
      "$36",
      "$6",
      "$2",
      "$28",
      "$42",
      "$7",
      "$35",
      "$39",
      "$31",
      "$33",
      "$43"
    ],
    "$476",
    false
  ],
  [["$1", "$23", "$46", "$20", "$37", "$42", "$19"], "$188", false],
  [["$25", "$41"], "$66", false],
  [["$13", "$1", "$23", "$12"], "$49", false],
  [["$49", "$38", "$16", "$40", "$20", "$36", "$39", "$46"], "$353", true],
  [["$33"], "$84", true],
  [["$40", "$49", "$21", "$14", "$48", "$40", "$13"], "$307", true],
  [
    ["$38", "$25", "$51", "$30", "$25", "$14", "$39", "$9", "$6", "$46"],
    "$283",
    false
  ],
  [["$3", "$44", "$7", "$33", "$46", "$13", "$8", "$40", "$2"], "$196", false],
  [
    [
      "$4",
      "$23",
      "$2",
      "$40",
      "$35",
      "$40",
      "$39",
      "$18",
      "$28",
      "$49",
      "$15",
      "$16",
      "$12",
      "$3",
      "$30",
      "$29",
      "$38"
    ],
    "$421",
    false
  ],
  [
    [
      "$47",
      "$35",
      "$4",
      "$49",
      "$31",
      "$40",
      "$48",
      "$47",
      "$22",
      "$51",
      "$33",
      "$46",
      "$50"
    ],
    "$535",
    true
  ],
  [["$18", "$28", "$50", "$1"], "$97", false],
  [
    [
      "$25",
      "$30",
      "$28",
      "$17",
      "$4",
      "$7",
      "$24",
      "$12",
      "$15",
      "$15",
      "$44",
      "$26",
      "$47",
      "$16"
    ],
    "$310",
    false
  ],
  [
    [
      "$10",
      "$38",
      "$7",
      "$49",
      "$33",
      "$18",
      "$25",
      "$16",
      "$2",
      "$17",
      "$35",
      "$11",
      "$44",
      "$35",
      "$49",
      "$22"
    ],
    "$411",
    false
  ],
  [
    [
      "$8",
      "$3",
      "$28",
      "$19",
      "$18",
      "$28",
      "$24",
      "$8",
      "$20",
      "$36",
      "$28",
      "$37"
    ],
    "$320",
    true
  ],
  [
    [
      "$7",
      "$6",
      "$34",
      "$10",
      "$31",
      "$5",
      "$29",
      "$13",
      "$40",
      "$30",
      "$21",
      "$49",
      "$44",
      "$4",
      "$2",
      "$10",
      "$3",
      "$1",
      "$7",
      "$12",
      "$50"
    ],
    "$487",
    true
  ],
  [
    [
      "$11",
      "$51",
      "$46",
      "$19",
      "$25",
      "$51",
      "$48",
      "$18",
      "$17",
      "$16",
      "$18",
      "$6",
      "$6",
      "$48",
      "$41",
      "$20",
      "$7"
    ],
    "$489",
    true
  ],
  [
    [
      "$6",
      "$20",
      "$25",
      "$41",
      "$24",
      "$26",
      "$41",
      "$47",
      "$6",
      "$17",
      "$22",
      "$7",
      "$3",
      "$23",
      "$48",
      "$48"
    ],
    "$456",
    true
  ],
  [["$15", "$26", "$26", "$23"], "$93", true],
  [["$21", "$14", "$45", "$20", "$24", "$36", "$34"], "$194", false],
  [
    [
      "$5",
      "$26",
      "$16",
      "$47",
      "$42",
      "$24",
      "$40",
      "$20",
      "$22",
      "$20",
      "$43"
    ],
    "$305",
    false
  ],
  [["$13", "$19", "$36", "$43", "$18"], "$129", false],
  [["$11", "$19", "$25", "$5", "$11", "$35", "$21"], "$138", true],
  [["$7", "$42", "$27", "$17", "$13"], "$123", true],
  [["$41"], "$41", false],
  [
    [
      "$3",
      "$15",
      "$4",
      "$7",
      "$2",
      "$7",
      "$4",
      "$6",
      "$16",
      "$24",
      "$30",
      "$20",
      "$8",
      "$14",
      "$35",
      "$15",
      "$13",
      "$34",
      "$26",
      "$11",
      "$37"
    ],
    "$331",
    false
  ],
  [
    [
      "$1",
      "$24",
      "$43",
      "$26",
      "$32",
      "$11",
      "$49",
      "$20",
      "$15",
      "$37",
      "$24",
      "$12",
      "$34",
      "$41",
      "$41",
      "$23",
      "$32",
      "$44",
      "$23",
      "$42",
      "$42"
    ],
    "$681",
    true
  ],
  [["$24", "$9", "$27"], "$128", true],
  [
    [
      "$25",
      "$14",
      "$21",
      "$26",
      "$20",
      "$50",
      "$26",
      "$43",
      "$27",
      "$16",
      "$49",
      "$51",
      "$33",
      "$26",
      "$39",
      "$29",
      "$4",
      "$35",
      "$39"
    ],
    "$645",
    true
  ],
  [["$9", "$20", "$36", "$51", "$15", "$26"], "$157", false],
  [
    [
      "$16",
      "$28",
      "$28",
      "$26",
      "$22",
      "$23",
      "$33",
      "$8",
      "$38",
      "$21",
      "$4",
      "$13"
    ],
    "$302",
    true
  ],
  [["$28", "$2"], "$30", false],
  [
    [
      "$50",
      "$44",
      "$51",
      "$17",
      "$29",
      "$9",
      "$6",
      "$14",
      "$6",
      "$5",
      "$38",
      "$51",
      "$34",
      "$18",
      "$40",
      "$20",
      "$7"
    ],
    "$512",
    true
  ],
  [["$37"], "$132", true],
  [["$38", "$40", "$26", "$51"], "$203", true],
  [["$8", "$5", "$5"], "$70", true],
  [["$29", "$16", "$36", "$25"], "$161", true],
  [["$40", "$7", "$8", "$47", "$19", "$7"], "$128", false],
  [["$33", "$2", "$43", "$1", "$36", "$33", "$3"], "$220", true],
  [
    [
      "$11",
      "$17",
      "$43",
      "$4",
      "$6",
      "$8",
      "$51",
      "$32",
      "$15",
      "$20",
      "$2",
      "$41",
      "$12",
      "$5"
    ],
    "$267",
    false
  ],
  [
    [
      "$28",
      "$2",
      "$7",
      "$50",
      "$28",
      "$40",
      "$51",
      "$29",
      "$18",
      "$49",
      "$18",
      "$44",
      "$39",
      "$44",
      "$3",
      "$16",
      "$10",
      "$19",
      "$7"
    ],
    "$502",
    false
  ],
  [
    [
      "$40",
      "$37",
      "$36",
      "$50",
      "$33",
      "$27",
      "$27",
      "$50",
      "$39",
      "$29",
      "$3",
      "$40",
      "$13",
      "$10",
      "$2",
      "$37",
      "$35",
      "$33"
    ],
    "$641",
    true
  ],
  [["$23", "$13", "$5", "$12", "$28"], "$81", false]
];

describe("hasHiddenFee", () => {
  describe("Return boolean if there is a hidden fee", () => {
    test.each(data)("hasHiddenFee(%p, %p) = %s", (prices, t, result) => {
      let actual = hasHiddenFee(prices, t);

      expect(actual).toEqual(result);
    });
  });
});
