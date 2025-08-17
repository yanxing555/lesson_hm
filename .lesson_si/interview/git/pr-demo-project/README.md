# 🎯 CSS Center Utils

一个轻量级的CSS居中工具库，提供简单易用的居中方法。

## 🚀 安装

```bash
npm install css-center-utils
# 或者
yarn add css-center-utils
```

## 📖 使用方法

### ES6模块
```javascript
import { flexCenter, flexCenterHorizontal, flexCenterVertical, flexCenterBoth } from 'css-center-utils';

// 完全居中
const centered = flexCenter();

// 仅水平居中
const horizontal = flexCenterHorizontal();

// 仅垂直居中
const vertical = flexCenterVertical();
```

### CommonJS
```javascript
const { flexCenter, flexCenterHorizontal, flexCenterVertical, flexCenterBoth } = require('css-center-utils');
```

## 🎯 API文档

### flexCenter(direction, justify, align)

使用Flexbox实现元素居中。

**参数：**
- `direction` (string): 居中方向，可选值：
  - `'horizontal'` - 水平居中
  - `'vertical'` - 垂直居中
  - `'both'` (默认) - 完全居中
- `justify` (string): justify-content值，默认'center'
- `align` (string): align-items值，默认'center'

**返回值：**
- `Object` - CSS样式对象

**示例：**
```javascript
// 完全居中
const style = flexCenter();
// 返回: { display: 'flex', justifyContent: 'center', alignItems: 'center' }

// 仅水平居中
const style = flexCenter('horizontal');
// 返回: { display: 'flex', justifyContent: 'center' }

// 自定义对齐
const style = flexCenter('both', 'space-between', 'flex-start');
```

### 快捷方法

- `flexCenterHorizontal()` - 水平居中快捷方法
- `flexCenterVertical()` - 垂直居中快捷方法  
- `flexCenterBoth()` - 完全居中快捷方法

## 🧪 示例

### React组件
```jsx
import { flexCenter } from 'css-center-utils';

function CenteredDiv() {
  return (
    <div style={flexCenter()}>
      <h1>居中的内容</h1>
    </div>
  );
}
```

### Vue组件
```vue
<template>
  <div :style="centerStyle">
    <h1>居中的内容</h1>
  </div>
</template>

<script>
import { flexCenter } from 'css-center-utils';

export default {
  computed: {
    centerStyle() {
      return flexCenter();
    }
  }
};
</script>
```

### 纯HTML/CSS
```html
<div id="centered" style="height: 100vh;">
  <h1>居中的内容</h1>
</div>

<script>
import { flexCenter } from 'css-center-utils';
document.getElementById('centered').style = {
  ...flexCenter(),
  height: '100vh'
};
</script>
```

## 🤝 贡献

我们欢迎所有形式的贡献！请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详情。

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。