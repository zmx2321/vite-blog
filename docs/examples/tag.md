# Tag 标签

常用的标签。

## 基础用法

基础的标签用法。

:::demo
```vue
<template>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el按钮>
  <el-button type="success">成功按钮</el按钮>
  <el-button type="info">信息按钮</el按钮>
  <el-button type="warning">警告按钮</el按钮>
  <el-button type="danger">危险按钮</el按钮>
</template>
```

:::

## 不同尺寸

提供三种不同尺寸的标签。

:::demo

```vue
<template>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el按钮 type="info">信息按钮</el按钮>
  <el-button type="warning">警告按钮</el按钮>
  <el-button type="danger">危险按钮</el按钮>
</template>
```

:::

## 加载中

点击标签进行数据加载操作，在标签上面显示加载状态。

:::demo

```vue
<template>
  <xl-button>默认按钮</xl-button>
  <xl-button type="primary">主要按钮</xl-button>
  <xl-button type="success">成功按钮</xl-button>
  <xl-button type="info">信息按钮</xl-button>
  <xl-button type="warning">警告按钮</xl-button>
  <xl-button type="danger">危险按钮</xl-button>
</template>
```

:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| size    | 尺寸   | string  | large / small / mini                               | default |
| type    | 类型   | string  | primary / success / warning / info / danger / text | primary |
| loading | 加载中 | boolean | —                                                  | false   |

