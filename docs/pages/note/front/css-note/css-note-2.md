# css高级用法

## css计算
```css
// 输入框宽度
@each $width in 180, 220, 240, 260, 300 {
  // @each可以遍历列表$list中的值
  .w#{$width} {
    width: #{$width}px !important; // 通过变量直接计算出每个class的transition-delay值
  }
}
/* 字号大小 */
@for $i from 12 through 40 {
  .ft#{$i} {
    font-size: #{$i}px !important;
  }
}

/* 外边距、内边距全局样式 */
@for $i from 0 through 40 {
  .mt#{$i} {
    margin-top: #{$i}px !important;
  }
  .mr#{$i} {
    margin-right: #{$i}px !important;
  }
  .mb#{$i} {
    margin-bottom: #{$i}px !important;
  }
  .ml#{$i} {
    margin-left: #{$i}px !important;
  }
  .pt#{$i} {
    padding-top: #{$i}px !important;
  }
  .pr#{$i} {
    padding-right: #{$i}px !important;
  }
  .pb#{$i} {
    padding-bottom: #{$i}px !important;
  }
  .pl#{$i} {
    padding-left: #{$i}px !important;
  }
}
```

## css变量的使用
```html
<div :style="`--dropdownThemeColor:${themeColor};--dropdownThemeColorRgb:${hexToRgb(themeColor)}`"></div>

<script setup>
    const props = defineProps({
        // 主题的颜色
		themeColor: {
			type: String,
			default: "#3185FF"
		},
    })
</script>

<style scope lang="scss">
.le-dropdown-filter-box-active {
    color: var(--dropdownThemeColor);
    background-color: rgba(var(--dropdownThemeColorRgb), 0.04);
}
</style>
```