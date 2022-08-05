

function sum(fromN, toN) {
/* if fromN = toN
return fromn


sum from (1, 1) = 1
sum from (1, 2) = sum(1,1)+2
sum from (1, 3 )= sum(1,2) +3

from toN + sum(fromN, toN-1)
*/



if (fromN === toN) {
  return fromN
}

return toN + sum(fromN, toN-1)


}



module.exports = sum;
