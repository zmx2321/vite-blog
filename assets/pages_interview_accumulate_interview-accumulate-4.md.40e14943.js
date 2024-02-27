import{_ as e,o as i,c as a,e as n}from"./app.6f8159a9.js";const k=JSON.parse('{"title":"汇总构建工具相关面试题","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/accumulate/interview-accumulate-4.md","filePath":"pages/interview/accumulate/interview-accumulate-4.md","lastUpdated":1700122230000}'),l={name:"pages/interview/accumulate/interview-accumulate-4.md"},c=n('<h1 id="汇总构建工具相关面试题" tabindex="-1">汇总构建工具相关面试题 <a class="header-anchor" href="#汇总构建工具相关面试题" aria-label="Permalink to &quot;汇总构建工具相关面试题&quot;">​</a></h1><h2 id="_1-webpack四大核心要素是什么" tabindex="-1">1. webpack四大核心要素是什么 <a class="header-anchor" href="#_1-webpack四大核心要素是什么" aria-label="Permalink to &quot;1. webpack四大核心要素是什么&quot;">​</a></h2><ul><li>入口(entry)</li><li>出口(output)</li><li>文件加载器（loader） <ul><li>用来预处理文件,loader让webpack 能够去处理那些非 JavaScript 文件</li><li>本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块</li></ul></li><li>插件(plugins) <ul><li>插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量</li><li>plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务</li></ul></li></ul><h2 id="_2-yarn-serve的过程中做了哪些事情" tabindex="-1">2. yarn serve的过程中做了哪些事情 <a class="header-anchor" href="#_2-yarn-serve的过程中做了哪些事情" aria-label="Permalink to &quot;2. yarn serve的过程中做了哪些事情&quot;">​</a></h2><ul><li>首先在package.json中的script里面可以找到serve指令，实际上他执行的是vue-cli-service serve这个指令</li><li>从webpack的学习过程中我们可以知道，他执行的命令都是在node_modules里面的bin里面执行的，所以我们需要在node_modules/.bin里面找到vue-cli-service</li><li>node_modules/bin里面的东西实际上都是软链接，即符号链接，计算机可以通过软链接去找到真实代码，我们在node_modules/bin/vue-cli-service这个文件里面可以找到他的真实代码，即@vue/cli-service</li><li>这个软连接是操作系统帮我们做的，有些类似linux指令</li><li>cli-service这个文件夹实际上是用webpack搭建的一个项目，我们可以明显地看到webpack.config.js这个配置文件</li><li>进入cli-service，找到package.json，看到bin，在安装的时候，他首先安装的是bin里面的东西，即他实际上执行的就是bin下面的vue-cli-service指令，即执行的是cli-service/bin/vue-cli-service.js这个文件</li><li>进到vue-cli-service.js这个文件，我们可以看到整个文件最主要就做了三件事，一件是引入service这个类并定义他，这个类实际上是一个js文件，cli-service/lib/Service，第二件事是对这个类做了实例化，即new Service()，第三件事情是，执行了这个Service实例的run方法</li><li>我们知道，只要对一个类进行实例化，它必然会执行他的构造方法，即constructor，在Service的构造器里面定义了一系列变量，并执行了一些当前类的一些方法赋值给一些变量</li><li>我们可以在构造器中找到定义插件并给他赋值的这句话this.plugins = this.resolvePlugins()，找到resolvePlugins这个方法，他将插件的路径定义成数组，并定义了一个方法，以map的形式将他们一个个组成了有id和apply属性的数组，并最终返回给在构造器里面的plugins，需要注意的是apply是一个方法，它将预设的插件以require的形式引入，每个插件里面又做了module.exports，即每一个apply的返回值实际上可以理解为是每个插件具体的内容</li><li>准备工作在这一步基本完成了，之后执行service里面的run方法，我们可以看到这个run方法传了一个command参数，即外部传过来的serve或者build，我们还可以看到run方法里面的第三个步骤是执行了一个init方法，即初始化，定位到init方法，我们可以看到他做了很多事情，但目前他做的最主要的事情是对插件这个对象数组plugins进行了遍历（这个plugins之前在resolvePlugins被赋值了）</li><li>init函数在对plugins对象数组遍历的时候，将每个对象的id和apply给解构了出来，并执行apply方法，这里的apply实际上代表各自的插件，在apply方法即插件中传入两个配置项作为参数，其中一个配置项是PluginAPI的实例，另一个配置项是项目的配置projectOptions（里面包含但不仅限于vue.config.js的配置），所以在每个插件中，第一个参数为PluginAPI的实例，即源码中的api，所以这个api也就可以使用PluginAPI这个js文件中的所有方法了</li><li>在run方法中，我们还看到，它最终返回了一个fn，并调用了他，这个fn是通过command对象解构出来的，再往上看，可以看到command是通过this.commands[name]这个对象被赋值的，所以后面的重点是这个this.commands[name]做了哪些操作</li><li>我们知道在vue-cli-service中执行run方法的时候，传过去的值为外部yarn或者npm run后面带的东西，比如serve或者build，即this.commands[name]中的这个name实际上是外部传过来的serve或者build的东西，那this.commands这个对象是什么呢，或者说他是什么时候被赋值的呢</li><li>从上文我们知道，实际上我们在构造器里面的resolvePlugins函数给plugins赋值之后，对象数组中的每个apply属性的值实际上代表的就是一个个被require的模块，在执行init方法的时候，遍历了这个plugins数组，并apply了一个个插件，并且看模块中的module.exports可以知道，实际上是执行了一个个模块里面的方法，在这个方法中还将实例化的PluginAPI这个类当作参数传入，实际上是一个个模块里面的第一个参数api就是这个PluginAPI的实例</li><li>我们以commands/serve为例，第一个参数即PluginAPI的实例执行了registerCommand方法，我们在PluginAPI.js这个文件中去找到registerCommand这个方法，可以看到这个函数里面传了三个参数，第一个参数是当前的状态，用来匹配开发人员运行是输入的内容，这里是serve，第二个参数是一个对象，表示一些配置，诸如默认的ip端口之类的，第三个参数是最重要的参数，他是一个异步方法，再看到函数体，我们通过最后一句话能看出commands这个对象就是在这里被赋值的，即this.commands[name]这个操作是在这里面去做的，他将一个函数和配置组成一个对象，传给这个commands对象，由此可得出结论，第三个参数的这个异步方法实际上是commands对象的一个属性</li><li>我们再回过头看Service.js里面的run方法，从上文我们说到，他实际上是由commands[name]这个对象赋值给command，在最后将fn解构出来，并执行这个fn，从这里可以得出，run方法最后执行的这个方法就是serve.js里面的第三个参数，即那个异步方法，当然这边只是以serve做例子，plugs对象数组里面的其他项实际上也是一样的，接下来继续以serve.js为例，看api.registerCommand的第三个参数，即那个异步函数</li><li>在registerCommand这个异步方法中，我们可以看到它require了webpack和WebpackDevServer，从这里可以得出结论，实际上vue-cli-service serve这个指令，他执行的依旧还是webpack</li><li>继续往下看，webpack的所有配置实际上是webpackConfig，webpackConfig被赋值之后（至于webpackConfig如何被赋值放在下文介绍），又定义了compiler这个变量，并且调用webpack方法将webpackConfig当做参数传入进去，并赋值给compiler这个变量，由此可以得出，compiler实际上表示webpack编译之后的结果，再将编译后的结果compiler拿过来，放到WebpackDevServer这个类中，这样就拿到这个server了，最后再用这个server来监听开启一个服务，整个流程就执行完毕了</li><li>这个异步函数的大概执行流程我们基本了解了，现在有一个比较大的难点就是，webpack配置到底是怎么赋值的，webpackConfig为什么就代表了所有的webpack配置</li><li>我们从webpackConfig的赋值可以看出，它实际上调用了PluginAPI的resolveWebpackConfig方法，再看到PluginAPI的resolveWebpackConfig函数，它实际上是执行了Service.js中的resolveWebpackConfig方法</li><li>我们阅读Service.js中的resolveWebpackConfig方法的时候可以发现，他将chainableConfig作为参数，并且调佣resolveChainableWebpackConfig方法给他赋予了一个默认值，在这个方法里面获取所有的webpack配置，并且将自己的和默认的webpack配置进行了merge</li><li>我们再具体看下resolveChainableWebpackConfig这个方法是如何给chainableConfig这个参数赋值的，在resolveChainableWebpackConfig这个函数里面，他主要是对this.webpackChainFns做了遍历</li><li>我们全局搜索this.webpackChainFns，可以在init这个方法里面找到webpackChainFns这个变量被赋值的过程</li><li>他首先判断当前项目projectOptions这个对象里面的chainWebpack或者configureWebpack是否存在，如果projectOptions.chainWebpack存在，会被添加到webpackChainFns数组中，如果projectOptions.configureWebpack存在，会被添加到webpackRawConfigFns数组中，chainWebpack和configureWebpack实际上是开发者在供出的webpack配置文件中进行配置的两种方式，他们是可以共存的，至于projectOptions对象，我们一层层往上找，我们可以发现它实际上是和loadUserOptions这个方法相关的，而定位到这个函数之后，我们可以看到vue.config.js就在这里面，所以projectOptions这个对象实际上包含了是开发者的一些配置</li><li>我们在init函数里面可以发现，webpackChainFns和webpackRawConfigFns这两个数组中实际上有一些用户自己的webpack配置在里面，是从projectOptions这个对象那边过来的，那么框架默认的webpack配置和这个函数式什么关系呢，为什么说webpackRawConfigFns代表webpack所有的配置呢</li><li>我们知道，框架在初始化的时候，在实例化service.js的时候，会执行service这个类的构造器，并且会执行resolvePlugins函数，从上文可以知道，在执行这个函数的时候，builtInPlugins对象数组里的所有文件都会被执行，我们可以以config/base为例，这个base实际上就是一些基本的默认的webpack配置，在base.js这个文件中，api首先执行了chainWebpack，即PluginAPI中的方法，我们找到这个方法，可以看到他实际上就是将当前的webpack配置直接push到了webpackChainFns这个数组中</li><li>不仅仅是config/base，config文件夹里面所有的js文件，实际上都是这么操作的，包括css相关的webpack配置，开发环境相关的webpack配置等，都执行了PluginAPI实例里面的chainWebpack方法，并且都存到webpackChainFns数组里面了</li><li>由此可见，在构造器里面对builtInPlugins数组进行改造，并赋值给plugins，又在run方法中去对他遍历的时候，实际上这时候已经将所有的webpack配置以函数的方式都存入webpackChainFns这个数组里面了，再在下面去判断用户的一些webpack的配置，将他们分别存入webpackChainFns和webpackRawConfigFns，再将所有的配置进行merge，再将他们存入webpackConfig这个对象中，最后将这个webpackConfig作为参数通过webpack方法转换成编译后的compiler，再通过实例化WebpackDevServer，并传入compiler这个对象去创建server，最终，用这个server去创建了一个服务，即yarn serve或者npm run serve的这个服务</li><li>所有的配置webpack的操作都是在registerCommand这个方法里面的第三个参数去实现的，这个参数是一个方法，这个方法本身是在registerCommand函数里面以对象的形式赋值给了commands对象，并且在service里面，在执行run方法的时候，将这个方法给解构了出来，并且去执行他，这一套流程就算完了</li></ul>',5),s=[c];function r(p,o,u,t,b,v){return i(),a("div",null,s)}const g=e(l,[["render",r]]);export{k as __pageData,g as default};
