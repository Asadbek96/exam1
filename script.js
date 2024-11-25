//TASK1
let a = +prompt('Birinshi sandy engiziniz')
let b = +prompt('Ekinshi sandy engiziniz')

    if (a <= 0 || b <= 0) {
      alert('Qate engizy!')

    } else {

      const qosu = (a, b) => {
        return a + b
      }
      alert(qosu(a, b))
      const azaitu = (a, b) => {
        return a - b
      }
      alert(azaitu(a, b))
      const bolu = (a, b) => {
        return a / b
      }
      alert(bolu(a, b))
      const kobeitu = (a, b) => {
        return a * b
      }
      alert(kobeitu(a, b))

    }

// //TASK2

let sum = 0
function zhenildik(zattynBagasy) {
  let zattynBagasy = +prompt(`Zattyn bagasy`)
  sum += zattynBagasy
  if (sum > 5000) {
    sum *= 0.9
    alert('Songy tolem zhenildikpen birge:' + sum)
  } else if (sum > 10000) {
    sum *= 0.8
    alert('Songy tolem zhenildikpen birge:' + sum)
  } else if (sum > 20000) {
    sum *= 0.7
    alert('Songy tolem zhenildikpen birge:' + sum)
  }
}
zhenildik(QanshaZat)
