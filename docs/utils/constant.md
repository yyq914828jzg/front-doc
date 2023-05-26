## 分红方式

### 使用方式
```js 
import {dividendTypeList} from "5irich-test/lib/utils/constant"
```
### 代码
```js 
/**
 * 分红方式
 */
 
export const dividendTypeList: Array<any> = [
  { code: '1', name: '现金分红', type: 'success' },
  { code: '0', name: '红利再投', type: 'danger' },
];
```

## 巨额赎回

### 使用方式
```js 
import {vastredeemFlagList} from "5irich-test/lib/utils/constant"
```
### 代码
```js 
/**
 * 巨额赎回
 */
 
export const vastredeemFlagList: Array<any> = [
  { code: '0', name: '取消', type: '' },
  { code: '1', name: '顺延', type: 'success' },
]; 
```

## 交易状态

### 使用方式
```js 
import {orderStatusList} from "5irich-test/lib/utils/constant"
```
### 代码
```js 
/**
 * 交易状态
 */
 
export const orderStatusList = [
  { code: '01', name: '待受理', color: '' },
  { code: '02', name: '受理中', color: '' },
  { code: '03', name: '申请失败', color: 'danger' },
  { code: '04', name: '待支付', color: '' },
  { code: '05', name: '支付失败', color: 'danger' },
  { code: '06', name: '支付成功', color: '' },
  { code: '07', name: '已撤单', color: '' },
  { code: '08', name: '已报', color: '' },
  { code: '09', name: '确认成功', color: '' },
  { code: '10', name: '确认失败', color: '' },
  { code: '11', name: '撤单已回款', color: '' },
  { code: '12', name: '申请成功', color: '' },
  { code: '14', name: '已作废', color: '' },
  { code: '16', name: '预约赎回成功', color: '' },
  { code: '17', name: '修改分红方式申请成功', color: '' },
  { code: '99', name: '受理中', color: '' },
];
```






