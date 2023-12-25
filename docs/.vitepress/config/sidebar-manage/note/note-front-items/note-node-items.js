/**
 * node学习笔记
 */
const baseUrl = "/pages/note/front/node-note";

// node积累
const nodeBaseConfig = [
  { text: "node爬虫相关", link: `${baseUrl}/node-base-note-1` },
  { text: "node问题集锦", link: `${baseUrl}/node-base-note-2` },
];

// node案例
const nodeDemoConfig = [
  { text: "node中的日志文件", link: `${baseUrl}/node-demo-1` },
  { text: "node定时任务", link: `${baseUrl}/node-demo-2` },
  { text: "node爬虫案例-定时发送邮件", link: `${baseUrl}/node-demo-3` },
  { text: "当node爬虫遇到登陆和验证码", link: `${baseUrl}/node-demo-4` },
];

// express
const nodeExpressConfig = [
  { text: "node-express-mysql入门小栗子", link: `${baseUrl}/node-express-1` },
  { text: "express登陆和注册", link: `${baseUrl}/node-express-2` },
];

// koa
const nodeKoaConfig = [{ text: "浅析koa洋葱模型", link: `${baseUrl}/node-koa-1` }];

module.exports = [
  { text: "node积累", items: nodeBaseConfig },
  { text: "node案例", items: nodeDemoConfig },
  { text: "express", items: nodeExpressConfig },
  { text: "koa", items: nodeKoaConfig },
];
