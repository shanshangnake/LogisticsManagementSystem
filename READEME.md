# 物流追踪管理系统服务端

[toc]

## 项目配置

Node+MongoDB+Redis+Typescript+koa

### 使用功能

- 多进程 [x]
- 多线程 [x]
- 事件发布订阅 [x]
- webSocket [x]
- typescript [x]
- Redis [x]
- MongoDB [x]

### 提供功能

- 自定义 tag 模块
- 自定义地址模块的
- 快递模块
- 用户模块
- 系统设置模块

## 项目结构

### 结构

- app
- router // router
- model // db model
- controller
- type // d.ts

### 启动

```
// 开发
npm run dev

// 打包
npm run build && npm start

```
