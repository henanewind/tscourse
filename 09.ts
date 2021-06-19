declare let $: any;
$('#id').addClass('show');
// 外部枚举，declare类似于c++中的extern关键字
// 说明某一个类型在其它地方定义过，此处只是说明(声明)一下
declare enum Day {

  SUNDAY,

  MONDAY,

}

const work = (x: Day) => {

  if (x === Day.SUNDAY) {

    x; // 类型是 Day

  }

}
