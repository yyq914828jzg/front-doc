<test></test>
<script setup>
import test from './test.vue'
</script>



<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .el-button {
        margin:10px 5px
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# Button 按钮

## 基础用法
使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <br>
        <br>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
        <br>
        <br>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="text">文字按钮</el-button>
   
  </div>
</template>
<script lang="ts" setup>
import { el-button } from "kitty-ui";
</script>
<style>
.k-el-button {
  margin-right: 10px;
}
</style>
```

</details>

## 使用说明
| 属性名        |      说明      |  默认值 |
| ------------- | :-----------: | ----: |
| size          | 尺寸           | small |
| type          |   类型         |    -- |
| zebra stripes |   are neat    |    $1 |
