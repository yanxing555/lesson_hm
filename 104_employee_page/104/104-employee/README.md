# 员工信息管理系统

一个现代化的员工信息展示和编辑系统，灵感来自LinkedIn的设计风格。

## 功能特性

- 📋 **员工信息展示**：完整的个人资料页面
- ✏️ **信息编辑**：支持编辑基本信息、技能、工作经验和教育背景
- 🎨 **现代化UI**：使用Tailwind CSS构建的响应式设计
- 🔄 **实时更新**：即时反馈的编辑体验
- 📱 **移动友好**：完全响应式设计
- 🔧 **API集成**：为未来后端集成做好准备的API接口

## 技术栈

- **前端框架**：React 18 + TypeScript
- **样式框架**：Tailwind CSS
- **图标库**：Lucide React
- **构建工具**：Vite
- **包管理器**：pnpm

## 项目结构

```
src/
├── api/                    # API接口定义
│   └── employeeApi.ts     # 员工相关API
├── components/             # React组件
│   ├── EmployeeProfile.tsx # 主要员工信息组件
│   └── EditModal.tsx      # 编辑模态框
├── types/                  # TypeScript类型定义
│   └── employee.ts        # 员工相关类型
├── App.tsx                # 主应用组件
├── main.tsx              # 应用入口
└── index.css             # 全局样式
```

## 快速开始

### 安装依赖

```bash
# 使用pnpm安装依赖
pnpm install

# 或使用npm/yarn
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
# 启动开发服务器
pnpm dev

# 应用将在 http://localhost:5174 启动
```

### 构建生产版本

```bash
# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 使用说明

1. **查看员工信息**：访问应用首页即可查看示例员工张三的完整信息
2. **编辑信息**：点击各个部分的编辑按钮即可修改对应内容
3. **保存更改**：编辑完成后点击保存，更改会立即生效

## API接口

项目包含完整的API接口定义，位于 `src/api/employeeApi.ts`，支持以下功能：

- 获取员工信息
- 更新员工基本信息
- 管理技能标签
- 添加/编辑/删除工作经验
- 添加/编辑/删除教育背景
- 头像上传

当前使用模拟数据进行演示，未来可以轻松替换为真实后端API。

## 扩展开发

### 添加新的员工

修改 `src/api/employeeApi.ts` 中的模拟数据，或使用真实API替换MockEmployeeApi。

### 自定义样式

项目使用Tailwind CSS，可以通过修改 `tailwind.config.js` 来自定义主题。

### 添加新功能

1. 在 `src/types/employee.ts` 中添加新的数据类型
2. 在 `src/api/employeeApi.ts` 中添加对应的API方法
3. 创建新的组件或修改现有组件

## 开发规范

- 使用TypeScript进行类型安全的开发
- 遵循React Hooks最佳实践
- 使用Tailwind CSS进行样式设计
- 保持组件的单一职责原则

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT License
