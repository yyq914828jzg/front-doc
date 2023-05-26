## 密码验证

### 使用方式
```js 
import {pwdValidate} from "5irich-test/lib/utils/validate"
fgPwd1 页面设置,是否是再次输入
pwd 页面设置, 再次输入密码的值
```
### 代码
```js 
/*
 * 密码验证
 *fgPwd1 页面设置,是否是再次输入
 * pwd 页面设置, 再次输入密码的值
 */
 
export const pwdValidate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error(rule.fgPwd1 ? '请再次输入密码' : '请输入密码'));
  } else if (String(value).indexOf(' ') >= 0) {
    callback(new Error('密码不能有空格'));
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('请输入6-16位密码'));
  } else if (passwordLevel(value) < 2) {
    callback(new Error('密码必须包含字母、数字、符号中的2种'));
  } else if (rule.pwd && value !== rule.pwd) {
    callback(new Error('两次输入密码不一致'));
  } else {
    callback();
  }
};
```

## 手机号码验证

### 使用方式
```js 
import {phonevalidate} from "5irich-test/lib/utils/validate"

```
### 代码
```js 
/*
 * 手机号码验证
 */
 
export function phonevalidate(rule, value,callback) {
  const reg =/^[1][3-9][0-9]{9}$/;
  if(value==''||value==undefined||value==null){
    callback();
  }else {
    if ((!reg.test(value)) && value != '') {
      callback(new Error('请输入正确的电话号码'));
    } else {
      callback();
    }
  }
}
```
## 身份证号验证

### 使用方式
```js 
import {idNoValidate} from "5irich-test/lib/utils/validate"

```
### 代码
```js 
/*
 * 身份证号验证
 */
 
export function idNoValidate(rule, value,callback) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if(value==''||value==undefined||value==null){
    callback();
  }else {
    if ((!reg.test(value)) && value != '') {
      callback(new Error('请输入正确的身份证号码'));
    } else {
      callback();
    }
  }
}
```

## 基金账号验证

### 使用方式
```js 
import {accountIdValidate} from "5irich-test/lib/utils/constant"

```
### 代码
```js 
/*
 * 基金账号验证
 */
 
export const accountIdValidate = (_rule, value, callback) => {
  // eslint-disable-next-line prefer-regex-literals
  const pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
  if (value === '') {
    callback(new Error('请输入登记的基金账号,长度12位'));
  } else if (pattern.test(value)) {
    callback(new Error('基金账号包含特殊字符'));
  } else if (value.length !== 12) {
    callback(new Error('基金账号长度不是12位'));
  } else {
    callback();
  }
};
```