const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeamName = [];

  if(Array.isArray(members)){
    members.map(x => typeof x === 'string' ? dreamTeamName.push(x.trim()[0].toUpperCase()) : null);
  } else {
    return false;
  }

  return dreamTeamName.sort().join('');
};
