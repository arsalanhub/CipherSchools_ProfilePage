module.exports.undefinedChk = (data, origValue) => {
  if (data === true) return true;
  else if (data === false) return false;
  return origValue;
};