# 信息学院学生学习导航平台

## 项目简介

本项目是《创新实验》期末综合项目静态网站，面向信息学院学生学习场景，集中展示课程资源、实验作业、创新项目、学习工具和项目说明。网站不需要后端数据库，不需要登录注册功能，可直接使用浏览器打开运行。

## 技术栈

- HTML：页面结构与内容组织
- CSS：统一视觉风格、卡片布局、响应式设计
- JavaScript：导航高亮、搜索筛选、公告切换、返回顶部、卡片淡入效果
- Markdown：项目说明和实验报告材料整理

## 目录结构

```text
innovation-final-static-site
├── index.html
├── pages
│   ├── courses.html
│   ├── experiments.html
│   ├── projects.html
│   ├── tools.html
│   └── about.html
├── css
│   └── style.css
├── js
│   └── main.js
├── images
│   └── README.md
├── docs
│   ├── project_description.md
│   ├── page_function_description.md
│   ├── workflow.md
│   ├── feature_sketch.md
│   ├── report_material.md
│   └── screenshot_checklist.md
└── README.md
```

## 页面说明

- 首页 `index.html`：包含网站标题、导航栏、首页横幅、平台简介、主要功能入口、公告区域和页脚。
- 课程资源页 `pages/courses.html`：展示 Web 开发、软件工程、机器学习、数字影像技术、创新实验等课程资源卡片，并支持关键词搜索。
- 实验作业页 `pages/experiments.html`：展示实验一到实验五的任务列表，重点突出实验五期末大作业，并支持关键词搜索。
- 项目展示页 `pages/projects.html`：展示静态网站项目、机器学习项目、小程序项目、图像处理项目等创新项目卡片。
- 学习工具页 `pages/tools.html`：展示 VS Code、GitHub、MDN Web Docs、菜鸟教程、ProcessOn、Draw.io、W3C Validator、Markdown Guide、Mermaid Live Editor 等学习工具链接。
- 关于我们页 `pages/about.html`：说明项目设计目的、选题原因、功能设置依据、合规说明、隐私与数据来源说明、学习诚信说明。

## 运行方式

方式一：直接浏览器打开  
进入项目文件夹，双击 `index.html`，或在浏览器地址栏打开文件即可。

方式二：使用 VS Code Live Server  
使用 VS Code 打开项目文件夹，安装并启用 Live Server 插件，在 `index.html` 上右键选择 `Open with Live Server` 即可运行。该方式不需要安装复杂环境。

## 主要功能

1. 统一导航栏和页脚，保持多页面风格一致。
2. 首页横幅、平台简介、功能入口和公告切换。
3. 课程资源页关键词搜索筛选课程卡片。
4. 实验作业页关键词搜索筛选实验任务。
5. 项目展示页展示不同类型创新项目和技术标签。
6. 学习工具页提供常用开发、文档、绘图、校验与流程图网站入口。
7. 关于我们页展示项目说明、合规说明和学习诚信说明。
8. 返回顶部按钮和卡片加载淡入效果。
9. 响应式布局，适配电脑浏览器和手机宽度。

## 作者完成说明

项目按照课程期末综合项目要求完成，内容包括需求分析、页面设计、前端开发、功能测试、文档整理、运行展示和报告材料准备。

## 截图建议

1. 项目文件夹目录结构：截到 `index.html`、`pages`、`css`、`js`、`docs`、`README.md`。
2. 首页运行效果：截到导航栏、横幅、功能入口和页脚。
3. 课程资源页：截到搜索框和课程卡片。
4. 实验作业页：截到实验五期末大作业卡片。
5. 项目展示页：截到项目卡片和技术标签。
6. 学习工具页：截到工具资源卡片和适用场景说明。
7. 关于我们页：截到设计目的、合规说明、学习诚信说明。
8. JavaScript 交互效果：截搜索筛选前后对比。
9. GitHub 仓库首页：截仓库名称和文件结构。
10. GitHub 提交记录：截提交历史页面。
11. 主要代码文件：截 `index.html`、`style.css`、`main.js`。
12. README 页面：截 GitHub 上 README 渲染效果。

## 合规与诚信说明

本项目仅用于课程学习展示。网站内容健康合规，不包含真实用户隐私数据，不提供登录注册功能，不连接后端数据库。页面中的课程、项目和工具信息均为学习场景整理或公开资源导航。提交课程材料时应结合实际运行截图、仓库链接和测试记录进行整理，遵守课程要求和学习诚信规范。
