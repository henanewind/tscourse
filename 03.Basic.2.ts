let result: unknown;

if (typeof result === 'number') {    
    result.toFixed(); // 提示 ts(2571)
}
// void undefined null 
// let undeclared: undefined = undefined; // 鸡肋

// let nullable: null = null; // 鸡肋

// const userInfo: {

//     id?: number;
  
//   } = {};
  
//   let undeclared: undefined = undefined;
  
//   let unusable: void = undefined;
  
//   unusable = undeclared; // ok
  
//   undeclared = unusable; // ts(2322)
  
const userInfo: {

    id?: number;
  
    name?: null | string
  
  } = { id: 1, name: 'Captain' };
  
  if (userInfo.id !== undefined) { // Type Guard
  
    userInfo.id.toFixed(); // id 的类型缩小成 string
  
  }
  
