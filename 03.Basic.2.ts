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

// 非空断言、类型守卫使用  !  
userInfo.id!.toFixed(); // ok，但不建议

userInfo.name!.toLowerCase() // ok，但不建议
// 建议使用  ? 单问号（Optional Chain）、?? 双问号（空值合并） 

userInfo.id?.toFixed(); // Optional Chain
const myName = userInfo.name ?? `my name is ${userInfo.name}`; // 空值合并 类似 condition ? a : b

function ThrowError(msg: string): never {

    throw Error(msg);
  
}

/** str 类型是 '"str"' */

let str = 'str' as const;

/** readOnlyArr 类型是 'readonly [0, 1]' */

const readOnlyArr = [0, 1] as const;

let mayNullOrUndefinedOrString: null | undefined | string;

mayNullOrUndefinedOrString!.toString(); // ok

mayNullOrUndefinedOrString.toString(); // ts(2531)

    
