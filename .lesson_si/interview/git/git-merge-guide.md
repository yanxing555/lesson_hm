# 🔄 Git Merge 完全使用指南

## 🎯 基本语法

```bash
# 基本合并命令
git merge <branch-name>

# 常用选项
git merge --no-ff <branch-name>    # 禁用快进合并
git merge --squash <branch-name>    # 压缩为一个提交
git merge --abort                   # 取消合并
```

## 📋 完整合并流程

### 场景1：功能开发完成合并到主分支

#### 步骤1：准备环境
```bash
# 查看当前分支
git branch

# 确保主分支是最新的
git checkout main
git pull origin main
```

#### 步骤2：创建功能分支
```bash
# 创建并切换到新分支
git checkout -b feature/user-login

# 进行开发...
# 编辑文件...
git add .
git commit -m "feat: 添加用户登录功能"
```

#### 步骤3：合并功能分支
```bash
# 切换回主分支
git checkout main

# 合并功能分支
git merge feature/user-login

# 推送更新到远程
git push origin main
```

### 场景2：处理合并冲突

#### 模拟冲突场景
```bash
# 创建两个分支
git checkout -b feature/update-style
echo "body { color: blue; }" > styles.css
git add . && git commit -m "更新样式为蓝色"

git checkout main
git checkout -b feature/update-style-2
echo "body { color: red; }" > styles.css
git add . && git commit -m "更新样式为红色"

# 尝试合并（会产生冲突）
git checkout main
git merge feature/update-style
git merge feature/update-style-2
```

#### 解决冲突步骤
```bash
# 1. 查看冲突文件
git status

# 2. 打开冲突文件，会看到类似：
```
<<<<<<< HEAD
body { color: blue; }
=======
body { color: red; }
>>>>>>> feature/update-style-2
```

# 3. 手动编辑文件解决冲突
# 例如：body { color: purple; }

# 4. 标记冲突已解决
git add styles.css

# 5. 完成合并
git commit -m "解决样式冲突，使用紫色"
```

## 🎨 合并策略对比

### 1. Fast-forward vs No-fast-forward

#### Fast-forward（默认）
```bash
git merge feature-branch
# 结果：线性历史，看起来像一条直线
```

#### No-fast-forward
```bash
git merge --no-ff feature-branch
# 结果：保留分支历史，创建合并提交
```

### 2. Squash 合并（压缩提交）
```bash
# 将多个提交压缩为一个
git merge --squash feature-branch
git commit -m "添加完整的用户认证功能"
```

## 🛠️ 高级合并技巧

### 1. 合并特定提交
```bash
# 合并单个提交（cherry-pick）
git cherry-pick <commit-hash>
```

### 2. 合并策略选择
```bash
# 使用特定合并策略
git merge -s recursive feature-branch
git merge -s ours feature-branch    # 保留当前分支内容
git merge -s theirs feature-branch  # 保留合并分支内容
```

### 3. 合并前预览
```bash
# 查看将要合并的内容
git diff main..feature-branch

# 查看合并后的差异
git diff main...feature-branch
```

## 📊 实际项目示例

### React Trip 项目合并流程

```bash
# 1. 确保工作区干净
git status

# 2. 切换到主分支
git checkout main
git pull origin main

# 3. 创建功能分支
git checkout -b feature/jwt-login-improvements

# 4. 进行JWT登录功能开发
# ... 开发代码 ...

# 5. 定期提交
ngit add .
git commit -m "feat: 实现JWT登录基础功能"
git commit -m "feat: 添加用户状态管理"
git commit -m "feat: 集成登录提示组件"

# 6. 推送分支
git push -u origin feature/jwt-login-improvements

# 7. 创建Pull Request前，确保是最新的
git checkout main
git pull origin main
git checkout feature/jwt-login-improvements
git rebase main

# 8. 合并到主分支
git checkout main
git merge --no-ff feature/jwt-login-improvements

# 9. 推送合并结果
git push origin main

# 10. 清理分支
git branch -d feature/jwt-login-improvements
git push origin --delete feature/jwt-login-improvements
```

## 🔍 常见合并问题及解决

### 问题1：合并后历史混乱
```bash
# 使用rebase保持线性历史
git rebase main feature-branch
git checkout main
git merge feature-branch
```

### 问题2：不想保留分支历史
```bash
# 使用squash合并
git merge --squash feature-branch
git commit -m "完成用户认证功能"
```

### 问题3：合并错误需要回退
```bash
# 查看合并前的状态
git log --oneline

# 回退到合并前
git reset --hard <commit-before-merge>

# 或者使用reflog
git reflog
git reset --hard HEAD@{1}
```

## 🎯 最佳实践

### 1. 合并前检查清单
- [ ] 目标分支是最新的
- [ ] 功能分支已经测试通过
- [ ] 代码审查已完成
- [ ] 没有未提交的更改

### 2. 合并信息规范
```bash
# 合并功能分支
git merge --no-ff feature/user-login -m "Merge branch 'feature/user-login'

- 实现用户登录/注册功能
- 集成JWT认证系统
- 添加用户状态管理"