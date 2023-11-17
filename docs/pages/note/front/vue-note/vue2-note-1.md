# vue2项目开发基本知识点总结

<br />

#### 概要
<h6> 1. 组件 </h6>
<h6> 2. vue 脚手架 </h6>
<h6> 3. vue 生命周期 </h6>
<h6> 4. vue 路由 </h6>
<h6> 5. axios </h6>
<h6> 6. vuex </h6>

## 1. 组件
### 1. 全局组件
##### 语法：
- 格式：<br />
    `Vue.component(tagName, options)`
- 参数：
    - `tagName` => 组件名称
    - `options` => 配置项
        - `data` => 数据，是个函数
        - `template` => 模板，内容为html结构(必须参数)
            
##### 解析
- 这里的Vue是一个对象，在引入的vue.js库中，每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始的，这个Vue实际上就是一个构造函数。
- 在Vue的构造函数(实例)中，它有一个component方法，Vue构造函数下面的这个component方法就是用来声明全局组件的。
- 这个component方法接收两个参数，tagName(组件名称)和options(组件配置)。
- tagName：当一个组件声明之后需要使用，使用的时候需要在html文件里面写标签对，而这标签对的名称，就是这个组件声明时候的名称。
- options：针对这个组件我们需要给它很多设置。它是一个对象，可以放很多参数，最基本的有两个，一个是数据(data)，一个是html模板(template)。

<br />

> ##### 示例1
> 全局组件的基本用法

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- 全局组件的名称(tagName) -->
    <counter></counter>
</div>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
/**
 * vue对象注册全局组件的方法
 * Vue.component(tagName, options)
 * 组件名称，配置项（data, template...）
 * 将组件名(tagName)放到html中
 * options是一个对象，表示组件中的选项
 */
Vue.component("counter",  {
    // template中所有的标签需要包含在一个父级当中
    template: '<button>按钮</button>',
});

// 实例化Vue对象
new Vue({
    // 用来放vue的容器，声明的这个vue对象，要在页面中放在id为app的div中展示。
    el: "#app",
});
```

> ##### 示例2
> 全局组件关联template

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
   <counter></counter>
</div>

<!--
    用来放vue模板的容器
    
    1. template标签它是放在body当中，并一定要与上面的div平级
    2. 需要给一个id用于关联
    3. 同样需要一个父级
-->
<template id="btn">
    <!-- 需要被包含在一个容器当中 -->
     <div>
     	<button>按钮</button>
     	<span>按照平常的html写法就可以了</span>
     </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js
```js
// vue对象，调用component注册全局组件
Vue.component("counter",  {
    // 使用在body中vue模板(template)的id
    template: '#btn',
});

new Vue({
    el: "#app",
});
```

> ##### 示例3：
> 全局组件关联中data的用法

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
   <counter></counter>
</div>

<!-- 用来放vue模板的容器 -->
<template id="btn">
     <div>
     	<button>按钮</button>
     	<!-- 在data中的数据可以使用模板字符串的形式使用 -->
     	<span>{{ count }}</span>
     </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js
```js
// vue中component注册全局组件的方法中的参数options是一个对象，里面有若干属性和方法，data是其中一个表示组件中数据的方法
Vue.component("counter",  {
    template: '#btn',
    
    // 表示vue组件中的数据，是一个方法
    // 在es6中，在对象中写一个函数的方法
    data() {
        // 在data对象中需要有一个return,这个return是一个对象，在这个对象里面可以存储这个组件所需要的数据
        return{
            count: 0,
        }
    }
});

new Vue({
    el: "#app",
});
```

> ##### 示例4：
> 全局组件中定义方法

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
   <counter></counter>
</div>

<!-- 用来放vue模板的容器 -->
<template id="btn">
     <div>
        <!-- 在vue中使用方法用 @事件名=“方法名” -->
     	<button @click="add">按钮</button>
     	<span>{{ count }}</span>
     </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js
```js
Vue.component("counter",  {
    template: '#btn',
    
    data() {
        return{
            count: 0,
        }
    },
    
    // 在全局组件中定义方法
    methods: {
        add() {
            // 取到组件中的数据使用this.数据
    	    this.count++;
    	}
    }
});

new Vue({
    el: "#app",
});
```

注意：
- 每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始的。
- 组件就是具体的一个个功能。一个实际的功能里面会有很多结构。结构都放在template中，就是一个模板。
- template中所有的标签需要包含在一个父级当中。
- 每一个全局组件之间相互独立，即每次实例化的Vue相互不关联。
- 所有的组件名称不能使用驼峰命名(标签不能用大写字母)，要使用-，比如说你的一个组件名称叫counterA，你在标签里面使用的话只能用`<counter-A></counter-A>`

<br />

### 2. 局部组件
- 语法：
    - 格式：
    ```
    new Vue({
        components: {
            tagName: options,
            tagName: options,
            ...
        }
    })
    ```
    - 注意：
        - 参数与全局组件一样
        - 全局组件是通过`vue component`生成的(没有s)，局部组件用的是components(带s)。
        
##### 解析
- 局部组件相当于局部变量
- 和原生一样，原生不建议使用全局变量，组件也是，尽量不使用全局组件。
- 和全局组件不一样，全局组件是在原生的vue对象上使用component方法，`Vue.component`，而局部组件是new了一个Vue实例。
- 这个被创建的vue实例放在components中，比注册全局组件的方法多了一个s。
- 在components中的语法和全局组件中的语法一样。
- 局部组件只能在当前实例的vue中使用。

<br />

> ##### 示例1：
> 局部组件的基本用法

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- navBar组件 -->
    <!-- js中组件名定义的是驼峰命名，在标签中不允许驼峰，故用-连接 -->
    <nav-bar></nav-bar>
</div>

<!-- navBar组件的模板 -->
<navTemplate>
    <ul>
        <li>食材1</li>
        <li>食材2</li>
    </ul>
</navTemplate>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    
    // 局部组件直接在实例化后的vue中使用compontents,在这里可以放很多个组件
    components: {
        // 组件名
        navBar: {
            template: "#navTemplate",
        },
        // 组件名
        navList: {
            
        },
        // .....
    }
});
```

> ##### 示例2：
> 在局部组件中存放数据，并定义方法

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- navBar组件 -->
    <nav-bar></nav-bar>
</div>

<!-- navBar组件的模板 -->
<navTemplate>
    <!-- 用模板字符串使用数据 -->
    <!--<ul>
        <li>{{ text[0] }}</li>
        <li>{{ text[1] }}</li>
    </ul>-->

    <!-- 使用v-for遍历 -->
    <ul>
        <li v-for="(item, index) in text" :key="index" @click="log">{{ item }}</li>
    </ul>
</navTemplate>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    
    components: {
        // 组件名
        navBar: {
            // 定义模板
            template: "#navTemplate",
            
            // 数据
            data() {
                return {
                    text: ["食材1", "食材2"],
                }
            },
            
            // 方法
            methods: {
                log() {
                    console.log("点击");
                }
            }
        },
    }
});
```

> ##### 示例3：
> 局部组件有作用域

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- navBar组件 -->
    <nav-bar></nav-bar>
    
    <!-- navList组件 -->
    <nav-list></nav-list>
</div>

<!-- 用来放vue的容器 -->
<!-- 局部组件无法应用，有作用域，只能在app中使用 -->
<div id="box">
  <!-- 组件模板2  -->
  <nav-list></nav-list>  
</div>

<!-- navBar组件的模板 -->
<navTemplate>
    <ul>
        <li>食材1</li>
        <li>食材2</li>
    </ul>
</navTemplate>

<!-- navList组件模板 -->
<template id="navListTemplate">
   <span>navList233333</span>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    
    components: {
        // 组件名
        navBar: {
            // 定义模板
            template: "#navTemplate",
        },
        
        // 组件名
        navList: {
            template: "#navListTemplate",
        },
    }
});

new Vue({
    el: "#box",
});
```

<br />

关于全局组件和之间的区别
- 全局组件和局部组件与js中的全局变量和局部变量非常相似，它们身上所具有的特性，在组件中也能够体现出来。

<br />

### 3. Props
##### 定义：
props：在组件上定义一些属性用来传递数据(传递给组件里的结构使用)

##### 语法：
```
组件里：props:['属性名', '属性名', ...]
模板里：{{ 属性名 }}
标签里：<组件 属性名="值" 属性名="值"></组件>
```
            
##### 解析
- 用来传递数据
- 和形参与实参差不多
- html结构相同，但数据不同，组件传递数据

<br />

> ##### 示例1：
> props的基本用法

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- 每个li是一个组件，外面用ul包起来 -->
    <ul>
        <!-- boxList组件 -->
        <!-- 组件结构相同，数据不同，给每个组件的props中定义的属性赋值 -->
        <box-list title="可乐" price="112"></box-list>
        <box-list title="雪碧" price="333"></box-list>
    </ul>
</div>

<!-- boxList组件模板 -->
<template id="boxListTemplate">
    <li>
        <!-- 使用模板字符串的方式渲染props传递过来的值 -->
         <span>{{ title }}</span>
         <span>{{ price }}</span>
    </li>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    
    components: {
        boxList: {
            template: "#boxListTemplate",
            
            // props 在组件上定义一些属性用来传递数据
            props: ["title", "price"]
        }
    }
});
```

<br />

### 4. Slot
##### 定义：
slot：插槽

##### 语法：
- 插槽(slot)：用于分发内容
    - template里定义：<slot></slot>
    - 组件标签对里使用(标签对里的标签能被解析)
    - 注意：插槽只能写一个，多写会报错
- 具名插槽：给slot添加name属性后就叫具名插槽
    - template里定义：<slot name="属性名"></slot>
    - 组件标签对里使用：<p slot="属性名"></p>
            
##### 解析
- 在使用props传递数据的时候，在使用组件的标签对中，数据都当做属性传递进来。这种方法传递的数据比较少比较清楚，但数据量一多就显得累赘。
- 在vue中，组件和标签是一样的，为了更像html标签，组件中传递数据可以用slot这种形式传递，结构会更清晰。
- 举个例子，就像一台电脑，它有各种插槽用来放显卡，内存等等，还有usb接口等等，这些插槽，就相当于vue中的slot。
- 在组件标签对中不会显示里面的标签，组件定义好之后，就相当于在内部已经成为一个完全封闭的状态了。

<br />

> ##### 示例1：
> slot的基本用法（传递数据）

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- boxList组件 -->
    <box-list>
        <!-- 组件标签对中的内容不显示 -->
        <!-- p标签中若有数据，使用slot分发内容，在组件的标签对里面放的都是数据 -->
    	<p>使用slot才能显示....</p>
    	<p>template里面使用一个slot就会全部显示</p>
    	...
    </box-list>
</div>

<!-- boxList组件模板 -->
<template id="boxListTemplate">
    <!-- 插槽在template中定义，相当于划一道口，想在哪里显示，slot插槽就放在哪里 -->
    <div>
        <h1>test</h1>
        
        <!-- 组件标签对中的内容在h1下面显示，它这里是显示组件标签对中所有的数据 -->
        <slot></slot>
    </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    
    components: {
        boxList: {
            template: "#boxListTemplate",
        }
    }
});
```

> ##### 示例2：
> slot的基本用法（具名插槽）

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- boxList组件 -->
    <box-list>
        <!-- 使用具名插槽 -->
        <span slot="cc1">插槽1</span>
	    <span slot="cc2">插槽2</span>
    </box-list>
</div>

<!-- boxList组件模板 -->
<template id="boxListTemplate">
    <!-- 插槽在template中定义，相当于每把刀上有一个名字，刀每划一道口，有特定的含义，使用的时候根据刀名字使用 -->
    <div>
        <h1>test</h1>
        
        <!-- 可以用名称定义显示部分（具名插槽） -->
	<slot name="cc1"></slot>
	<slot name="cc2"></slot>
    </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    
    components: {
        boxList: {
            template: "#boxListTemplate",
        }
    }
});
```

> ##### 示例3：
> slot传递数据

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
    <ul>
        <!-- boxList组件 -->
        <!-- 在组件标签对中使用具名插槽，并可以按照传统html写法把数据添加上去，一个标签对就是一个li，只要把组件模板中的插槽拿过来就可以了 -->
        <box-list>
            <span slot="title">可乐</span>
            <span slot="price">22</span>
        </box-list>
        <!-- boxList组件 -->
        <box-list>
            <span slot="title">雪碧</span>
            <span slot="price">33</span>
        </box-list>
    </ul>
</div>

<!-- boxList组件模板 -->
<template id="boxListTemplate">
    <!-- 在template中定义具名插槽，这里是具体的html结构，在li结构中 -->
     <li>
        <a href="#">
         	<slot name="title"></slot>
         	<slot name="price"></slot>
         	<span>食品介绍<span>
     	</a>
     </li>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    
    components: {
        boxList: {
            template: "#boxListTemplate",
        }
    }
});
```

<br />

### 5. 父子组件
##### 5-1. 父子组件的定义
###### 语法：
```js
new Vue({
    // vue容器
    el: "#app",

    components: {
        父组件名: {
    	    template: "父组件template对应的id",
    	    
    	    data() {
    	        // 父组件数据
    	    },
    	    
    	    // 子组件
    	    components: {
    	    	子组件名: {
    	    	    template: "子组件template对应的id",
    	    	},
    	    	...
    	     }
        }
    }
});
```

###### 解析:
- 一个组件就是一个功能里面的结构，这个结构可能包含在其他的结构当中，而这个结构就是外面那个结构的子组件，包围子组件的那个结构就是父组件。

> ##### 示例1：
> 基本的父子组件

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
   <!-- boxList组件(父组件) -->
   <box-list></box-list>
</div>

<!-- boxList组件(父组件)模板 -->
<!-- 父组件模板使用ul标签 -->
<template id="boxListTemplate">
     <ul>
        <!-- 在父组件中使用子组件 -->
        <!-- 子组件使用插槽 -->
     	<!-- 子组件只能在父组件模板里面调用 -->
     	<!-- 定义所有插槽的值(定义数据) -->
     	<item>
    		<span slot="title">可乐</span>
    		<span slot="price">44</span>
	    </item>
	    
     	<item>
    		<span slot="title">雪碧</span>
    		<span slot="price">33</span>
	    </item>
     </ul>
</template>

<!-- item组件(子组件)模板 -->
<!-- 子组件模板就是一个个li标签 -->
<template id="itemTemplate">
      <!-- html结构，值用插槽代替 -->
      <li>
        <a href="#">
         	<slot name="title"></slot>
         	<slot name="price"></slot>
         	<span>食品介绍<span>
     	</a>
     </li>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    
    // 父组件
    components: {
        boxList: {
            // 父组件模板
    	    template: "#boxListTemplate",
    	    
    	    // 子组件
    	    components: {
    	    	item: {
    	    	    // 子组件模板
    	    	    template: "#itemTemplate",
    	    	}
    	     }
        }
    }
});
```

关于组件间如何传递数据
- 父组件向子组件传递数据(自动传)
    - 使用props属性传递数据
- 子组件向父组件传递数据(主动传，事件触发)
    - 使用自定义事件

关于自定义事件
- 在发数据组件的methods里定义一个方法，方法内容如下：`this.$emit('event', value)`
    - event：自定义事件名称
    - value：要传递的数据(可选参数)
- 在发数据组件的标签里
    - `<component @自定义事件名称="函数名"></component>`
- 在接收数据组件的methods里
```
函数名(val) {
    // val就是接收到的数据
}
```
 
##### 5-2. 父组件给子组件传递数据
###### 语法：
- 父组件向子组件传递数据(自动传)
- 使用props属性

##### 解析
- 父亲可以给儿子零花钱，即父组件可以给子组件传递数据，单向数据流

> ##### 示例1：
> 父组件给子组件传递数据(外->里)

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
   <!-- 父组件 -->
   <father></father>
</div>

<!-- father组件(父组件)模板 -->
<template id="fatherTemplate">
    <div>
        <h1>父组件</h1>
        <span>把"{{ name }}"传给子组件</span>
    
        <!--
            使用props传递数据给子组件
            1. 在子组件定义一个props用来接收父组件传递过来的数据
            2. 在父组件中引用子组件，并给该子组件绑定上在子组件上已经定义的props属性名
            3. 绑定的props属性名的值，就是父组件要传过来给子组件的值，这里是name，即取到父组件的name值
            4. 在子组件的template使用数据
        -->
        <son :fatherdata="name"></son>
    </div>
</template>

<!-- son组件(子组件)模板 -->
<template id="sonTemplate">
    <div>
        <h1>子组件</h1>
        <span>这是儿子</span>
        
        <!-- 此时已经将父组件的值通过props传过来了，要使用父组件中的值，就只需要使用在子组件中定义的props属性，并把定义的props属性名用模板字符串的方式在子组件模板中表现出来就行了 -->
        <p>{{ fatherdata }}</p>
    </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    
    // 父组件
    components: {
        father: {
    	    template: "#fatherTemplate",
    	    
    	    // 父组件数据
    	    data() {
    	    	return {
    	    		name: "老王",
    	    		
    	    		// 用来存放子组件的数据
    	    		sonData: "",
    	    	}
    	    },

            // 子组件
    	    components: {
    	    	son: {
    	    	    template: "#sonTemplate",
    	    	    
    	    	    // 父组件向子组件传递数据，子组件需要定义一个props，用来接收父组件的数据
                    props: ['fatherdata'],
    	    	}
    	     }
        }
    }
});
```

##### 5-3. 子组件给父组件传递数据
###### 语法：
- 子组件向父组件传递数据(主动传，事件触发)
```js
// 在发数据组件的methods里定义一个方法
this.$emit('event', value)

...

// 在发数据组件的标签里
<component @自定义事件名称="函数名"></component>

...

// 在接收数据组件的methods里
函数名(val) {
    // val就是接收到的数据
}
```
            
###### 解析
- 儿子可以孝敬父亲，双向数据流。

> ##### 示例1：
> slot的基本用法（传递数据）

html:
```html
<!-- 用来放vue的容器 -->
<div id="app">
   <!-- 父组件 -->
   <father></father>
</div>

<!-- 父组件模板 -->
<template id="fatherTemplate">
     <div>
       	<h1>父组件</h1>
       	<span>把"{{ name }}"传给子组件</span>
       	<p>{{ sondata }}</p>

       <!-- 在子组件标签绑定属性 -->
       <!-- 在子组件用props属性把已经绑定的属性名写进去 -->
       <!-- 在子组件的template使用数据 -->
       <!-- getdata用来接收数据 -->
       	<son :fatherdata="name" @getdata="getval"></son>
     </div>
</template>

<!-- 子组件模板 -->
<template id="sonTemplate">
      <div>
      	<h1>子组件</h1>
      	<span>这是子组件</span>

      	<p>父组件传过来的数据：“{{ fatherdata }}”</p>

          <!-- 给父组件传数据 -->
          <button @click="send">给父组件传数据</button>
      </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```js
new Vue({
    el: "#app",
    components: {
        father: {
        	    template: "#fatherTemplate",
        	    data() {
        	    	return {
        	    		name: "老王",
        	    		sondata: "",
        	    	}
        	    },

               methods: {
                    // 拿到子组件给父组件传递的值
                    getval(val) {
                        this.sondata = val;
                    }
               },

        	     components: {
        	    	son: {
        	    	  template: "#sonTemplate",
                        props: ['fatherdata'],
                        data () {
                            return {
                                // 只能通过事件给父组件传数据(自定义事件)
                                // 在发数据的组件(子组件) 定义一个方法
                                message: "你好，我是小王~~~~~",
                            }
                        },

                        methods: {
                            // 给父组件传数据
                            send() {
                                // alert();
                                // 触发自定义事件
                                // $emit("事件名称", 传递的数据)
                                this.$emit("getdata",  this.message);
                            }
                        }
        	    	}
        	     }
        }
    }
});
```

---
<br />

## 2. vue 脚手架
### 1. vue脚手架搭建步骤
1. 安装node.js
    - 在命令提示符输入`node -v`和`npm -v`查看是否安装成功
2. 安装vue3
    - `npm install -g @vue/cli`
3. 创建项目
    - `vue create 项目名称`
        - 上下箭头选择需要安装的东西，空格确认，回车确定选项进入下一步

### 2. vue脚手架相关命令
- vue -V  查看版本
- vue -h  查看命令帮助
- vue create  创建项目
- vue add  增加一个插件
- vue invoke  在创建好的项目里去调用插件
- vue inspect  检查webpack配置
- vue serve  启动一个项目
- vue build  打包项目
- vue ui  打开ui库
- vue init  声明一个项目

### 3. vue脚手架目录解析
- node-modules是nodejs里的模块
- public目录：index.html为模板文件
- src目录：开发目录
  - assets  静态资源文件夹(图片、外部的js、css文件)
  - components  公共组件文件夹
  - App.vue  项目的主组件
  - main.js  入口文件
  - router.js  路由配置文件
  - store.js  vue的状态文件

### 4. vue脚手架执行简述
1. App.vue组件会渲染到public文件夹下的index.html文件中
2. 之后他会去找main.js,他是一个入口文件
   - 打包之后的index.html也会引入这个js，只是打包之后他变成了app.js 
   - 框架中的主要逻辑会在这里面去写，包括引入的各种文件
3. 去读取路由（页面的配置都放在路由当中了）

---
<br />

## 3. vue 生命周期
> vue实例从开始创建到销毁经历了什么?
```
vue生命周期最开始：
new Vue()
初始化事件和生命周期
    - 生命周期里面有很多方法(钩子)需要进行初始化
```
1. beforeCreate  创建实例前触发
   - 此时实例未被创建，在这里可以放预加载loading
```
beforeCreate之后：
初始化数据、方法等
    - 初始化vue中的data、methods等里面的加载数据绑定事件等的东西
    - 这个步骤走完之后实例才算是被创建完成
```
2. created  创建实例后触发
   - 这个时候事件和数据就可以被使用了
   - 这时候实例被创建完成了，但dom还没有被创建，所以这时候页面中什么东西都没有
   - 页面未被展示，在这边大多是用作请求数据时触发
   - 如果有loading的话，在这个地方就可以被结束了
   - 接下来开始渲染dom
```
渲染dom
    - 渲染dom时，首选会检查有没有el这个选项，如果没有会去检查$mount()
        - 需要知道渲染dom到什么地方
        - new Vue({el: "#app"});
        - new Vue({}).$mount("#app");
    - 他会根据template去渲染dom
        - 他会去检查有没有template这个属性，如果有就渲染，如果没有的话，他会根据el标签去渲染
    - 这些操作是在虚拟dom中去编译的，虚拟dom是为了提升性能
```
1. beforeMount  渲染dom前触发
   - 在这一步前面的虚拟dom已经渲染(编译)完成了
   - 此时会渲染真实dom
2. mounted  渲染dom后触发
   - 如果需要在页面显示之后做一些事件，需要将他们放到这里
```
当页面渲染完成之后，可能页面会有修改
```
3. beforeUpdate  数据更改前触发
```
页面修改时触发，此时的修改也是在虚拟dom中修改的
此时会触发vue的diff算法，如果和之前一样，就不渲染，如果和之前不同，就渲染
```
4. updated  数据更改后触发
    - 更新渲染完成之后触发
5. beforeDestroy  实例销毁前触发
    - 中间有一个销毁的阶段，销毁数据、事件，如果有定时器，会销毁定时器等
6. destroyed  实例销毁后触发
    - 此时vue组件的生命周期就结束了

---
<br />

## 4. vue 路由
> 根据url锚点路径，在容器中加载不同的模块
### 1. 路由配置
#### 1. 路由配置一
1. 引入vue-router.js库
2. 定义路由，并对应router配置参数
```js
// 实例化一个路由对象
router: new VueRouter({
    routers: [  // 放置所有的路由
        // {path:'路径', name:'路由名称', component: '路由对应的组件名'},
        {path:'/dishes', name:'dishes', component:Dishes},
    ]
});
```
3. 使用`<router-link>`组件来导航，并通过to属性指定链接
    - `<router-link to="/about">关于</router-link>`
4. 定义路由出口
   - `<router-view />` 

#### 2. 路由配置二
1. 引入vue-router.js库
2. 定义(路由)组件
```js
// 第一种
const Home = {template: '<h2>home<h2>'}

// 第二种
// Vue.extend是用来注册组件的,是一个全局的方法
const News = Vue.extend({
    {template: '<h2>news<h2>'}
});
```
3. 定义路由
```js
const routers = [
    {path:'/home', name:'home', component:Home},
    ......
];
```
4. 创建router实例(路由对象)，并对router配置参数
```js
const router = new VueRouter({
    routers
});
```
5. 使用`<router-link>`组件来导航，并通过to属性指定链接
6. 定义路由出口

### 2. 动态路由匹配
```js
// html
<template id="new">
    <section>
        <router-link to="/news/1">新闻1</router-link>
        <router-link to="/news/2">新闻2</router-link>
    </section>
</template>
<template id="newList">
    <section>
        这是传过来的id:{{ this.$route.params.id }}
    </section>
</template>

const New = {template'#new'};
const NewList = {template'#newList'};

// 点击某个新闻要跳转到新的页面
// 这个页面要匹配到动态路由的话就用:id,动态路径的参数
// 这个设置完之后,参数值会设置到this.$route.params
const routers = [
    {path:'/new', components:New}
    {path:'/news/:id', components:NewList}
]

const router = new VueRouter({
    routers
});

new Vue({
    el: '#app',
    router
});
```

### 3. 脚手架中的路由
- 引入vue,引入vue-router
- 使用路由
- 供出router方法(new Router)
  - 导出来之后在main.js里面使用
  ```js
    // 引入router.js
    import router from './router'

    new Vue({
        router;
    }).mount('#app');
  ```

<!-- ### 4.  -->

### 4. 路由守卫
#### 1. 路由守卫简述
1. 全局守卫
> 在所有路由展示前触发
```js
// 在引入router组件的页面里使用(main.js)
router.beforeEach((to, from, next) => {
//   to: 即将要进入的到的路由,值为路由
//   from: 离开的路由(从哪个路由离开),值为路由
//   next: 值为函数,这个函数决定你接下来要展示的路由页面
});
```
2. 后置钩子
> 在所有路由展示后触发
```js
// 在引入router组件的页面里使用(main.js)
router.afterEach((to, from) => {
//   to: 即将要进入的到的路由,值为路由
//   from: 离开的路由(从哪个路由离开),值为路由
});
```
3. 路由独享守卫
> 在当前路由展示前触发(放在router.js中)
   - `beforeEnter((to, from, next) => {})`
   - 示例:
```js
{path: '/manage',component: Manage,
    // 管理只有登陆才能看(路由独享守卫)
    beforeEnter(to, from, next) {
        alert("非登陆状态下无法管理");
        next('/login');
    }
},
```
    
1. 组件内的守卫(在组件内使用)
    1. 在当前路由被展示前调用
       - `beforeRouterEnter((to, from, next) => {})`
    2. 在当前路由改变时调用
       - `beforeRouterUpdate((to, from, next) => {})`
    3. 在离开当前路由时调用
       - `beforeRouterLeave((to, from, next) => {})`
    4. 示例:
    ```js
        // *.vue
        <script>
            export default {
                // 在当前路由被展示前调用
                beforeRouterEnter((to, from, next) => {
                    // 在当前不能使用this,即获取不到data中的值
                    // beforeRouter不能访问this对象,因为守卫触发的时候,组件还未被创建
                    // 这里有一个next,可以把他当作回调来看,在里面可以使用this
                    next(vm => {
                        // 这里的vm指的就是this
                    });
                }),

                // 在离开当前路由时调用
                beforeRouterLeave((to, from, next) => {
                    const answer = comfirm('你确定要离开吗');

                    if(answer) {
                        next();
                    } else {
                        // 中断当前路由跳转
                        next(false);
                    }
                })
            }
        </script>
    ```

#### 2. 示例
```js
router.beforeEach((to, from, next) => {
  // 如果点击的是登陆的那个路由，直接跳转
  if (to.path == 'login') {
    // 如果是继续执行
    next();
  } else {  // 点击的不是登陆的路由，跳到登陆
    next("/login");
  }
});
```

### 5. 路由其他知识点
#### 1. 路由跳转方式
- 跳转到指定路由:
 - `this.$router.push("/order");`
 - `this.$router.replate("/order");`
- 回退:
 - `this.$router.go(-1);`
- 错误路由重定向
 - `{path: '*', redirect:'/'}`
  
#### 2. 嵌套路由(多级)
```js
// html
<template id="about">
    <section>
        <h6>关于我们</h6>

        <router-link to="/about/intro">简介</router-link>
        <router-link to="/about/join">加入</router-link>
        <router-link to="/about/contact">联系</router-link>

        <div class="box">
            <router-view />
        </div>
    </section>
</template>
<template id="Contact">
    <h2>联系我们</h2>

    <router-link to="/about/contact/wechat" tag="h3">微信</router-link>
    <router-link to="/about/contact/qq" tag="h3">qq</router-link>
    <router-link to="/about/contact/email" tag="h3">email</router-link>

    <div class="box">
        <router-view />
    </div>
</template>

// 二级路由
{
    path: '/about',
    component: About,
    redirect: '/about/contact',  // 默认要展示的路由
    children: [
        // 要加父路由
        {path: '/about/intro', component: Intro},
        {path: '/about/join', component: Join},
        //  三级路由
        {
            path: '/about/contact',
            component: Contact,
            redirect: '/about/contact/qq',  // 默认要展示的路由
            children: [
                {path: '/about/contact/wechat', component: Wechat},
                {path: '/about/contact/qq', component: QQ},
                {path: '/about/contact/email', component: Email},
        ]},
]},
```

#### 3. 路由传参
```js
// 路由传参一
this.$router.push({
    path: "/路径",
    query: {
        // data
        stubId: row.id
    }
});

// 路由传参二
this.$router.push({
    name: "/路径",
    params: {
        // data
        stubId: row.id
    }
});

// 获取
this.$route.params.guiNo
```

#### 4. 其他小知识点
1. 去掉导航中的#
   - `mode: 'history'`
2. 指定激活项class
   - `linkActiveClass: 'active'`
3. 指定跳转标签类型
   - "router-link"默认是a标签
   - `<router-link target='div'>简介</router-link>`
4. 用属性作为路由地址
   ```js
    <router-link :to="homeLink">简介</router-link>

    data() {
        return {
            homeLink: "/about"
        }
    }
   ```
5. 用路由名称作为路由地址
   - `<router-link :to="{name: 'order'}">订单</router-link>`
    
---
<br />


## 5. axios
> API: [axios API](https://www.kancloud.cn/yunye/axios/234845)
> axios: [axios API](https://github.com/axios/axios)
### 1. get请求
```js
axios.get(url, {
    params: {
        key: value,
        ......
    }
}).then(res=> {
    // 请求成功后回调函数
}).catch(err=> {
    // 请求失败后回调函数
});
```

### 2. post请求
```js
axios.post(url, {
    data: {
        key: value,
        ......
    }
}).then(res=> {
    // 请求成功后回调函数
}).catch(err=> {
    // 请求失败后回调函数
});
```

### 3. 可以通过向 axios 传递相关配置来创建请求
```js
axios({
    method: 'post',
    url: url,
    data: {
        key: value,
        ......
    },
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
}).then(res=> {
    // 请求成功后回调函数
}).catch(err=> {
    // 请求失败后回调函数
});
```

### 4. 在脚手架中使用axios
1. 在对应组件中引入axios
2. 在main.js中把引入的axios对象，放到vue的原型上。
   - 挂载到vue的原型上，那么所有生成的vue实例都可以使用。
   - `Vue.prototype.axios = axios;`

### 5. 注意事项
- 如果method为get，传给后台的值要用params
- 如果method为post，传给后台的值要用data

---
<br />

## 6. vuex
> 可以理解为数据的仓库，可以用作数据的存储和管理
### 1. 通俗理解
- 它相当于是一个商店，任何人都可以过来买商品，这个商品就是数据，这个商店就是vuex
- 配置
```js
// store.js
export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
}); 
```

### 2. State属性
> state: 用来存储数据
#### 示例1：
```js
// store.js
state: {
    dishes: "美食",
}

// *.vue
export default {
    data() {
        return {

        }
    },

    // 计算属性，他的值是一个对象
    // 和methods差不多，可以存放方法
    // 但它不一定会覆盖data中的值（为了提升性能）
    // 如果上一次的数据和这次的数据一样的话，它不会进行操作
    // 使用vuex的时候会经常使用computed
    // 这里的语法和methods的语法是一样的
    computed: {
        // 是一个函数
        dishes() {
            // 取store.js里的数据
            return this.$store.state.dishes;
        }
    },

    // 可以重复执行，每次都会覆盖data中的值
    methods: {}
}
```

#### 示例2：
```js
// store.js
state: {
    dishes: [
        {name: "可乐", price: 33},
        {name: "雪碧", price: 44},
    ],
}

// *.vue
export default {
    computed: {
        // 用此示例和在getters中操作数据作区别
        // 是一个函数
        dishes() {
            const oldData = this.$store.state.dishes;
            // value每一条数据，index每条数据对应的索引，arr数组本身
            const newData = oldData.map((value, index, arr)=> {
                // 把人民币换成泰铢
                return {
                    name: value.name,
                    price: value.price * 5
                }
            });

            return newData;
        }
    },
}
```

### 3. Getter属性
> getters: 用来获取数据
#### 示例:
```js
// store.js
state: {
    dishes: [
        {name: "可乐", price: 33},
        {name: "雪碧", price: 44},
    ],
},
// 获取数据
getters: {
    // 这里面的方法会接收一个参数，就是上面的state
    changePrice(state) {
        /* const oldData = state.dishes;

        const newData = oldData.map(value => {
            // 把人民币换成泰铢
            return {
                name: value.name,
                price: value.price * 5
            }
        });

        return newData; */

        // 可以简写成
        return state.dishes.map(value => {
            // 把人民币换成泰铢
            return {
                name: value.name,
                price: value.price * 5
            }
        });
    }
},

// *.vue
export default {
    computed: {
        // 是一个函数
        // 在单个组件中使用只有当前组件生效，但在getters中使用可以在全局使用
        dishes() {
            // 不用加括号
            return this.$store.getters.changePrice;
        }
    },
}
```

### 4. Mutation属性
> mutations: 用来管理(操作)数据
#### 示例:
```js
// store.js
state: {
    dishes: [
        {name: "可乐", price: 33},
        {name: "雪碧", price: 44},
    ],
},
// 管理数据
//  同步
mutations: {
    // 这里面的方法会接收一个参数，就是上面的state
    // 支持传参(payload)从第二个参数开始，就是对应的调用的时候传过来的参数
    // 打折方法，打dis折
    discount(state, dis) {
        state.dishes.forEach(ele=> {
            ele.price *= dis/10;

            // 保留两位小数  ele.price.toFixed(2);
            /* ele.price = Math.round((ele.price*dis/10)*100)/100;
            ele.price = (ele.price*dis/10).toFixed(2); */
        })
    }
},

// *.vue
<button @click="discount(8)">打折</button>

export default {
    methods: {
        discount(dis) {
            // 改变所有的价格
            // map和foreach都可以遍历，map会返回新数组，foreach是改变当前数组
            // 使用老方法
            /* this.$store.state.dishes.forEach(element =>{
                // 打5折
                element.price *= 0.5;
            }) */

            // 使用新方法
            // 调用mutations的discount方法（相当于自定义事件）、
            // 支持传参(payload)从第二个参数开始，就是对应的调用的时候传过来的参数
            // this.$store.commit("discount", 5);  // 5折
            // mutations调用方法用commit
            // 用定时器，多次点击，数据只会在最后一次变化
            this.$store.commit("discount", dis);
        }
    },
}
```

### 5. Action属性
> actions: 主要用来操作mutations
#### 示例:
```js
// store.js
state: {
    dishes: [
        {name: "可乐", price: 33},
        {name: "雪碧", price: 44},
    ],
},
// 管理数据
//  同步
mutations: {
    // 同步的状态是无法记录当前点击出现的东西的
    discount(state, dis) {
        state.dishes.forEach(ele=> {
            ele.price = (ele.price*dis/10).toFixed(2);
        })
    }
},
// 操作mutations
// 异步
actions: {
    // 第一个参数不是state, 是类似store对象的实例
    // 所以在这里拿不到state的值
    discount(context, dis) {
        // 如果执行这个会报错
        /* state.dishes.forEach(ele =>{
            ele.price = (ele.price*dis/10).toFixed(2);
        }) */

        // 最终执行的还是mutations
        // 在这里执行，每次点击，数据状态都会变化
        context.commit("discount", dis);

        // 判断同步还是异步，用定时器就可以看出来
        /* setTimeout(()=> {
            context.commit("discount", dis);
        }, 2000); */
    }
}

// *.vue
<button @click="discount(8)">打折</button>

export default {
    methods: {
        discount(dis) {
            // actions的调用方式用dispatch
            // 用定时器，每次点击，数据状态都会变化
            this.$store.dispatch("discount", dis);
        }
    },
}
```