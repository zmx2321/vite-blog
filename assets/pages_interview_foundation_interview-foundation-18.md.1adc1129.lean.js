import{_ as l,o as p,c as o,e as a,b as s,d as n}from"./app.eca400a4.js";const d=JSON.parse('{"title":"高频面试真题","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/foundation/interview-foundation-18.md","filePath":"pages/interview/foundation/interview-foundation-18.md","lastUpdated":1700191029000}'),e={name:"pages/interview/foundation/interview-foundation-18.md"},c=a("",62),r=s("ul",null,[s("li",null,[n("概念 "),s("ul",null,[s("li",{"css-module":"."},"函数声明：function fn()"),s("li",{"css-module":"."},"函数表达式：const fn = function()")])]),s("li",null,[n("答案 "),s("ul",null,[s("li",null,"函数声明是直接用function来定义函数的"),s("li",null,"函数表达式是通过先定义一个变量，再把它赋值给一个函数来定义函数的"),s("li",null,[n("函数声明会在代码执行前预加载，而函数表达式不会 "),s("ul",null,[s("li",null,"这个预加载和变量提升是一样的"),s("li",null,"函数表达式没有变量提升")])]),s("li",null,[s("a",{href:"https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E%E5%92%8C%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E5%8C%BA%E5%88%AB.html",target:"_blank",rel:"noreferrer"},"手写demo传送门")])]),s("div",{class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 函数声明")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"res"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"sum"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(res)")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 函数声明会在代码执行之前预加载，有些类似变量提升，但函数已经可以用了")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 会先把这个函数初始化上，再执行代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"sum"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"x"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"y"),s("span",{style:{color:"#E1E4E8"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," x "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 函数表达式")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"res1"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"sum1"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(res1)  "),s("span",{style:{color:"#6A737D"}},"// 使用函数表达式这里会报错")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"sum1"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"x"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"y"),s("span",{style:{color:"#E1E4E8"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," x "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 函数声明")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"res"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"sum"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(res)")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 函数声明会在代码执行之前预加载，有些类似变量提升，但函数已经可以用了")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 会先把这个函数初始化上，再执行代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"sum"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"x"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"y"),s("span",{style:{color:"#24292E"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," x "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," * 函数表达式")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}}," */")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"res1"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"sum1"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(res1)  "),s("span",{style:{color:"#6A737D"}},"// 使用函数表达式这里会报错")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"sum1"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"x"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"y"),s("span",{style:{color:"#24292E"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," x "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br")])])]),s("li",null,[n("延伸 "),s("ul",null,[s("li",null,"函数表达式的报错")]),s("div",{class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"res1"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"sum1"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// Cannot access 'sum1' before initialization")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(res1)  "),s("span",{style:{color:"#6A737D"}},"// 使用函数表达式这里会报错")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 用let或者const不会命中变量提升")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 这里没有做变量提升，所以上面的sum1实际上就是未被定义")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},'// 所以报错信息是，初始化前无法访问"sum1"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"sum1"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"x"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"y"),s("span",{style:{color:"#E1E4E8"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," x "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"res2"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"sum2"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// sum2 is not a function")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(res1)  "),s("span",{style:{color:"#6A737D"}},"// 这里的报错信息不一样")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 使用var会命中变量提升")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 他会提升到最上面，实际上 sum2 === undefined")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 所以上面的报错信息是sum2不是一个函数")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"var"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"sum2"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"x"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"y"),s("span",{style:{color:"#E1E4E8"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," x "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"res1"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"sum1"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// Cannot access 'sum1' before initialization")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(res1)  "),s("span",{style:{color:"#6A737D"}},"// 使用函数表达式这里会报错")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 用let或者const不会命中变量提升")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 这里没有做变量提升，所以上面的sum1实际上就是未被定义")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},'// 所以报错信息是，初始化前无法访问"sum1"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"sum1"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"x"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"y"),s("span",{style:{color:"#24292E"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," x "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"res2"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"sum2"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// sum2 is not a function")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(res1)  "),s("span",{style:{color:"#6A737D"}},"// 这里的报错信息不一样")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 使用var会命中变量提升")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 他会提升到最上面，实际上 sum2 === undefined")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 所以上面的报错信息是sum2不是一个函数")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"var"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"sum2"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"x"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"y"),s("span",{style:{color:"#24292E"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," x "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br")])])])],-1),t=a("",49),E=[c,r,t];function y(i,b,u,F,m,A){return p(),o("div",null,E)}const C=l(e,[["render",y]]);export{d as __pageData,C as default};
//# sourceMappingURL=pages_interview_foundation_interview-foundation-18.md.1adc1129.js.map
