// Problem# 307
// Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!
// Please help me out by showing me the index in the list which contains my glasses.
// They look like two capital Os, with any number of dashes in between!
// This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
// Search thoroughly, maybe you'll find my glasses in places such as 'dustO-Odust'
// https://edabit.com/challenge/ayQR9ZBbR8LdXuwXq

const hasMyGlasses = (str) => new RegExp("O-{1,}O", "g").test(str);

const findMyGlasses = (arr) => arr.findIndex(hasMyGlasses);

module.exports = findMyGlasses;
