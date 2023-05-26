## 防抖

### 使用方式
```js 
import {debounce} from "5irich-test/lib/utils/common"
```
### 代码
```js 
/**
 * @debounce 防抖函数
 * @param fn 执行函数
 * @param time 时间间隔
 */
// @ts-ignore
export function debounce(fn, time? = 300) {
  let timer: any = null;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, time);
  };
}
```
## 节流

### 使用方式
```js 
import {throttle} from "5irich-test/lib/utils/common"
```
### 代码
```js 
/**
 * @throttle 节流函数
 * @param fn 执行函数
 * @param time 时间间隔
 */
// @ts-ignore
export function throttle(fn, delay? = 300) {
  let last = 0; // 上次触发时间
  return (...args) => {
    const now = Date.now();
    if (now - last > delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}
```

## 属性转换

### 使用方式
```js 
import {codeToName} from "5irich-test/lib/utils/common"
```
### 代码
```js 
/**
 * @function 属性转换
 * @param list 列表数据
 * @param key 当前选中key
 * @param listKey 列表主键
 * @param listName 列表回显值
 * @return 最终显示的值
 */
// @ts-ignore
export function codeToName(list: Array<any>, key: string, listKey = 'code', listName = 'name', nodata = '--') {
  if (key && list.find((el) => el[listKey] === key)) {
    return list.find((el) => el[listKey] === key)[listName];
  }
  return nodata;
}
```