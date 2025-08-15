# 🌿 Git分支操作完整指南

## 🎯 新增分支步骤

### 1. 检查当前状态
```bash
# 查看当前分支
git branch

# 查看所有分支（包括远程）
git branch -a

# 查看当前状态
git status
```

### 2. 创建新分支
```bash
# 基于当前分支创建
git checkout -b feature/trip-jwt-login

# 基于指定分支创建
git checkout -b feature/trip-jwt-login main

# 基于远程分支创建
git checkout -b feature/trip-jwt-login origin/main
```

### 3. 推送新分支到远程
```bash
# 第一次推送
git push -u origin feature/trip-jwt-login

# 后续推送
git push
```

## 📋 分支命名规范

### 功能分支
```bash
git checkout -b feature/user-authentication
git checkout -b feature/jwt-login-system
git checkout -b feature/profile-page
```

### Bug修复分支
```bash
git checkout -b bugfix/login-error
git checkout -b hotfix/security-patch
```

### 实验分支
```bash
git checkout -b experiment/new-ui-design
git checkout -b experiment/pwa-support
```

## 🔧 常用分支操作

### 查看分支
```bash
# 本地分支
git branch

# 远程分支
git branch -r

# 所有分支
git branch -a

# 查看分支详细信息
git branch -vv
```

### 切换分支
```bash
# 切换到现有分支
git checkout main
git checkout develop

# 或者使用新语法
git switch main
git switch feature/login-system
```

### 删除分支
```bash
# 删除本地分支
git branch -d feature/old-feature

# 强制删除本地分支
git branch -D feature/old-feature

# 删除远程分支
git push origin --delete feature/old-feature
```

### 合并分支
```bash
# 切换到目标分支
git checkout main

# 合并分支
git merge feature/login-system

# 或者使用rebase
git rebase feature/login-system
```

## 🎨 实际项目示例

### 场景：为trip项目添加JWT登录功能

```bash
# 1. 确保你在main分支上
git checkout main
git pull origin main

# 2. 创建新分支
git checkout -b feature/trip-jwt-login

# 3. 开始开发
# ... 进行代码修改 ...

# 4. 添加修改到暂存区
git add .

# 5. 提交修改
git commit -m "feat: 添加JWT登录功能

- 实现用户登录/注册页面
- 集成JWT认证系统
- 添加用户状态管理
- 实现登录提示功能"

# 6. 推送分支
git push -u origin feature/trip-jwt-login

# 7. 创建Pull Request（在GitHub/GitLab上）
# ... 进行代码审查 ...

# 8. 合并后清理
git checkout main
git pull origin main
git branch -d feature/trip-jwt-login
```

## 🚨 注意事项

### 创建分支前
1. **确保工作区干净**:
   ```bash
   git status
   # 如果有未提交的修改，先提交或stash
   git stash
   ```

2. **拉取最新代码**:
   ```bash
   git pull origin main
   ```

### 分支管理最佳实践
1. **保持分支简洁**: 每个分支只做一个功能
2. **及时推送**: 定期推送分支到远程
3. **命名清晰**: 使用有意义的命名
4. **定期合并**: 避免分支偏离主线太远

## 🎯 快速命令总结

```bash
# 完整流程
1. git checkout main          # 切换到主分支
2. git pull origin main       # 拉取最新代码
3. git checkout -b feature/xxx # 创建新分支
4. # 开发代码...
5. git add .                  # 添加修改
6. git commit -m "message"    # 提交修改
7. git push -u origin feature/xxx # 推送分支
```

## 📱 Git GUI工具

如果你更喜欢图形界面：
- **GitHub Desktop**: 简单易用
- **GitKraken**: 功能强大
- **SourceTree**: 免费且功能全面
- **VS Code Git**: 内置Git支持

## 🔍 故障排除

### 问题1: 分支已存在
```bash
# 如果分支已存在
error: pathspec 'feature/xxx' did not match any file(s) known to git

# 解决：使用不同名称或删除旧分支
git branch -d feature/xxx
git checkout -b feature/xxx-new
```

### 问题2: 权限问题
```bash
# 如果推送失败
error: failed to push some refs

# 解决：先拉取最新代码
git pull origin feature/xxx --rebase
```

### 问题3: 冲突解决
```bash
# 如果合并冲突
git checkout main
git pull origin main
git checkout feature/xxx
git rebase main
# 解决冲突后
git add .
git rebase --continue
```