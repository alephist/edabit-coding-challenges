const reverse = require("../reverseStringOrder");

const data = [
  ["Think different.", ".tnereffid knihT"],
  [
    "It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do.",
    ".od ot tahw su llet nac yeht os elpoep trams erih ew ;od ot tahw meht llet dna elpoep trams erih ot esnes ekam t’nseod tI"
  ],
  [
    "Innovation is the ability to see change as an opportunity - not a threat",
    "taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI"
  ],
  [
    "Everything is based on a simple rule: Quality is the best business plan.",
    ".nalp ssenisub tseb eht si ytilauQ :elur elpmis a no desab si gnihtyrevE"
  ],
  [
    "The people who are crazy enough to think they can change the world are the ones who do.",
    ".od ohw seno eht era dlrow eht egnahc nac yeht kniht ot hguone yzarc era ohw elpoep ehT"
  ],
  [
    "Don’t let the noise of others’ opinions drown out your own inner voice.",
    ".eciov renni nwo ruoy tuo nword snoinipo ’srehto fo esion eht tel t’noD"
  ],
  [
    "Learn continually; There's always one more thing to learn.",
    ".nrael ot gniht erom eno syawla s'erehT ;yllaunitnoc nraeL"
  ],
  [
    "Quality is more important than quantity. One home run is much better than two doubles.",
    ".selbuod owt naht retteb hcum si nur emoh enO .ytitnauq naht tnatropmi erom si ytilauQ"
  ],
  [
    "Your time is limited so don't waste it living someone else's life.",
    ".efil s'esle enoemos gnivil ti etsaw t'nod os detimil si emit ruoY"
  ],
  [
    "The only way to be truly satisfied is to do what you believe is great work.",
    ".krow taerg si eveileb uoy tahw od ot si deifsitas ylurt eb ot yaw ylno ehT"
  ]
];

describe("reverse", () => {
  describe("Return string in reverse order", () => {
    test.each(data)("reverse(%p) = %p", (str, result) => {
      var actual = reverse(str);

      expect(actual).toEqual(result);
    });
  });
});
