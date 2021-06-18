enum Day {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
}

function work(d: Day) {
    switch (d) {
      case Day.SUNDAY:
      case Day.SATURDAY:
        return 'take a rest';
      case Day.MONDAY:
      case Day.TUESDAY:
      case Day.WEDNESDAY:
      case Day.THURSDAY:
      case Day.FRIDAY:
        return 'work hard';
    }
  }

var s: String;
s = work(Day.FRIDAY);
console.log(s);
// 编译：ts-node 09.js 输出：work hard
// tsc HelloWorld.ts --strict --alwaysStrict false --watch 实时转译输出 js