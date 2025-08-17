# 🎯 开源项目PR完整指南

## 📋 步骤1：找到目标项目

### 示例项目：假设我们要为一个CSS居中工具库贡献代码

```bash
# 1. 在GitHub上找到项目（示例）
# 项目地址：https://github.com/example/css-center-utils

# 2. 点击右上角的 "Fork" 按钮
# 3. 等待几秒钟，项目会fork到你的账户下
# 你的fork地址：https://github.com/YOUR_USERNAME/css-center-utils
```

## 📥 步骤2：克隆和设置

### 克隆项目到本地
```bash
# 1. 克隆你fork的项目（不是你的原始项目）
git clone https://github.com/YOUR_USERNAME/css-center-utils.git
cd css-center-utils

# 2. 添加上游仓库（原始项目）
git remote add upstream https://github.com/example/css-center-utils.git

# 3. 验证远程仓库设置
git remote -v
# 应该看到：
# origin    https://github.com/YOUR_USERNAME/css-center-utils.git (fetch)
# origin    https://github.com/YOUR_USERNAME/css-center-utils.git (push)
# upstream  https://github.com/example/css-center-utils.git (fetch)
# upstream  https://github.com/example/css-center-utils.git (push)
```

## 🔄 步骤3：保持同步

```bash
# 1. 获取上游最新更改
git fetch upstream

# 2. 切换到主分支
git checkout main

# 3. 合并上游更改到你的主分支
git merge upstream/main

# 4. 推送到你的fork
git push origin main
```

## 🎨 步骤4：创建功能分支

```bash
# 1. 从最新的主分支创建功能分支
git checkout -b feature/add-flex-center-method

# 2. 分支命名规范：
#    feature/新功能
#    bugfix/修复bug
#    docs/文档更新
#    refactor/代码重构
```

## 💻 步骤5：开发你的更改

### 实际开发示例
```bash
# 1. 创建新文件或修改现有文件
mkdir -p src/methods
touch src/methods/flex-center.js

# 2. 添加你的代码
cat > src/methods/flex-center.js << 'EOF'
/**
 * Flexbox居中方法
 * @param {string} direction - 居中方向：'horizontal' | 'vertical' | 'both'
 * @returns {Object} CSS样式对象
 */
export const flexCenter = (direction = 'both') => {
  const baseStyles = {
    display: 'flex',
  };
  
  switch(direction) {
    case 'horizontal':
      return { ...baseStyles, justifyContent: 'center' };
    case 'vertical':
      return { ...baseStyles, alignItems: 'center' };
    case 'both':
    default:
      return {
        ...baseStyles,
        justifyContent: 'center',
        alignItems: 'center'
      };
  }
};

// 使用示例
// const centeredDiv = flexCenter('both');
EOF

# 3. 更新主文件
# 编辑 src/index.js 添加导出
```

## ✅ 步骤6：提交更改

```bash
# 1. 查看更改状态
git status

# 2. 添加文件到暂存区
git add src/methods/flex-center.js
git add src/index.js

# 3. 提交更改（遵循提交信息规范）
git commit -m "feat: add flexbox centering utility method

- Add flexCenter() function for flexible centering
- Support horizontal, vertical, and both directions
- Include comprehensive TypeScript definitions
- Add usage examples in documentation"

# 或者使用更详细的提交信息
git commit -m "feat: add flexbox centering utility

This commit introduces a new flexCenter utility function that provides
easy-to-use flexbox centering for web elements.

Features:
- Horizontal centering (justify-content)
- Vertical centering (align-items)
- Both directions centering
- TypeScript support
- Comprehensive test coverage

Usage:
```javascript
import { flexCenter } from 'css-center-utils';

// Center both horizontally and vertically
const centered = flexCenter('both');

// Center only horizontally
const horizontal = flexCenter('horizontal');
```"
```

## 🚀 步骤7：推送到你的Fork

```bash
# 推送功能分支到你的fork
git push origin feature/add-flex-center-method

# 如果是第一次推送这个分支
git push -u origin feature/add-flex-center-method
```

## 📝 步骤8：创建Pull Request

### 在GitHub网页上操作：
1. 访问你的fork仓库页面
2. 点击 "Compare & pull request" 按钮
3. 填写PR信息：

### PR标题和描述模板

```markdown
## 📋 PR标题
feat: add flexbox centering utility method

## 📝 描述
这个PR添加了一个新的flexbox居中工具方法，提供了灵活的居中选项。

## ✨ 功能特性
- [x] 支持水平居中
- [x] 支持垂直居中  
- [x] 支持双向居中
- [x] 完整的TypeScript定义
- [x] 单元测试覆盖

## 🧪 测试
- [x] 本地测试通过
- [x] 所有现有测试通过
- [x] 新增测试用例

## 📖 文档更新
- [x] 更新了README.md
- [x] 添加了使用示例
- [x] 更新了API文档

## 🔗 相关Issues
Fixes #123
Relates to #456
```

## 🔄 步骤9：处理反馈

### 如果维护者要求修改

```bash
# 1. 在相同的分支上进行修改
git checkout feature/add-flex-center-method

# 2. 进行修改
# ... 编辑文件 ...

# 3. 提交修改（使用amend或新提交）
git add .
git commit --amend  # 修改最后一次提交
# 或者
git commit -m "fix: address review feedback"

# 4. 强制推送（因为修改了历史）
git push origin feature/add-flex-center-method --force
```

## 🎯 完整PR命令速查表

```bash
# 1. 初始设置
git clone https://github.com/YOUR_USERNAME/PROJECT.git
cd PROJECT
git remote add upstream https://github.com/ORIGINAL_OWNER/PROJECT.git

# 2. 开始工作前
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

# 3. 创建功能分支
git checkout -b feature/your-feature-name

# 4. 开发和提交
git add .
git commit -m "feat: your feature description"

# 5. 推送和创建PR
git push origin feature/your-feature-name
# 然后在GitHub上创建PR

# 6. 更新PR（如果需要）
git add .
git commit --amend --no-edit
git push origin feature/your-feature-name --force
```

## 📋 PR最佳实践

### ✅ 做这些：
1. **阅读贡献指南**（CONTRIBUTING.md）
2. **创建小的、专注的PR**
3. **写清晰的提交信息**
4. **添加测试**（如果项目有测试）
5. **更新文档**
6. **保持分支最新**

### ❌ 避免这些：
1. **不要修改不相关的文件**
2. **不要提交大文件**
3. **不要包含敏感信息**
4. **不要混合不同类型的更改**
5. **不要提交未经测试的代码**

## 🎨 实际示例：CSS居中工具库PR

让我为你创建一个实际的PR演示项目：