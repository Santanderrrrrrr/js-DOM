const nowTime = new Date().getTime();
console.log(nowTime)

const birthday = new Date(1995, 07, 15).getTime()
const copy = new Date()
copy.setTime(birthday)
console.log(birthday)
console.log(copy)

console.log(copy.getDay())
console.log(copy.getMonth())
console.log(copy.getYear())
console.log(copy.getDate())