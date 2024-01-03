# Vue和React对比
## 共同点
- 组件化
    - 单向数据流，数据驱动视图
    - 使用Virtual DOM + Diff算法渲染DOM
        - 但两者源码实现上有区别：
        - Vue Diff使用双向链表，边对比，边更新DOM
        - React主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM
- 为什么Vue和React都选择Virtual DOM
- 减少直接操作DOM，使用数据驱动视图
- 可以跨平台，渲染到Web之外的平台。比如ReactNative，Weex

## 不同点
- 核心思想不同
    - Vue个人开发，推崇灵活易用（渐进式开发体验），双向数据绑定（依赖收集）
    - Facebook开发React，目的是颠覆前端开发方式，核心倡导函数式编程，函数式编程最大好处稳定性（无副作用）和可测试性（输入相同，输出一定相同）
- Vue使用模板拥抱 html，React使用JSX拥抱JS
- Vue2使用声明式编程，Vue3之后和React一样更推崇函数式编程
- Vue“自动挡”（自动监听数据变化渲染视图，提供大量语法糖和周边配套生态），React“手动挡”(手动setState修改状态，往往需要到社区寻找各种插件和解决方案)