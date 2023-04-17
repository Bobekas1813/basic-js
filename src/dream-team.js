const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(typeof members != 'object') return false;
  if(!members) return false;
  let str = '';
  let res;
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] == 'string' ){
    
      // let r = members[i].split(' ');
      // for(let u = 0; u < r.length; u++){
      //   let t = r[u].trim();
      //   str += t.slice(0, 1).toUpperCase();
      // }

    let t = members[i].trim().slice(0, 1).toUpperCase();
    str += t;
   
  }
  
}
let d = str.toUpperCase().split('').sort().join('');
  return d;
}


module.exports = {
  createDreamTeam
};
