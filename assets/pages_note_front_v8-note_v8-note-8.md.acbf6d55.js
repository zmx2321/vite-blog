import{_ as s,o as n,c as a,e as l}from"./app.6f8159a9.js";const v=JSON.parse('{"title":"JavaScript 中的“类型系统”","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/v8-note/v8-note-8.md","filePath":"pages/note/front/v8-note/v8-note-8.md","lastUpdated":1701415253000}'),p={name:"pages/note/front/v8-note/v8-note-8.md"},e=l(`<h1 id="javascript-中的-类型系统" tabindex="-1">JavaScript 中的“类型系统” <a class="header-anchor" href="#javascript-中的-类型系统" aria-label="Permalink to &quot;JavaScript 中的“类型系统”&quot;">​</a></h1><h2 id="_1-2-等于多少" tabindex="-1">1+‘2’等于多少 <a class="header-anchor" href="#_1-2-等于多少" aria-label="Permalink to &quot;1+‘2’等于多少&quot;">​</a></h2><ul><li>其实这相当于是在问，在 JavaScript 中，让数字和字符串相加是会报错，还是可以正确执行。如果能正确执行，那么结果是等于数字 3，还是字符串“3”，还是字符串“12”呢</li><li>在 JavaScript 中执行这段表达式，是可以返回一个结果的，最终返回的结果是字符串“12”</li></ul><h2 id="什么是类型系统" tabindex="-1">什么是类型系统 <a class="header-anchor" href="#什么是类型系统" aria-label="Permalink to &quot;什么是类型系统&quot;">​</a></h2><ul><li>在这个简单的表达式中，涉及到了两种不同类型的数据的相加。要想理清以上两个问题，我们就需要知道类型的概念，以及 JavaScript 操作类型的策略。</li><li>对机器语言来说，所有的数据都是一堆二进制代码，CPU 处理这些数据的时候，并没有类型的概念，CPU 所做的仅仅是移动数据，比如对其进行移位，相加或相乘。</li><li>而在高级语言中，我们都会为操作的数据赋予指定的类型，类型可以确认一个值或者一组值具有特定的意义和目的。所以，类型是高级语言中的概念。 <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/8/8-1.png" alt="类型"></li><li>Python 和 JavaScript 定义变量的方式不同，但是它们都不需要直接指定变量的类型，因为虚拟机会根据数据自动推导出类型。</li><li>通用的类型有数字类型、字符串、Boolean 类型等等，引入了这些类型之后，编译器或者解释器就可以根据类型来限制一些有害的或者没有意义的操作。</li><li>比如在 Python 语言中，如果使用字符串和数字相加就会报错，因为 Python 觉得这是没有意义的。而在 JavaScript 中，字符串和数字相加是有意义的，可以使用字符串和数字进行相加的。再比如，你让一个字符串和一个字符串相乘，这个操作是没有意义的，所有语言几乎都会禁止该操作。</li><li>每种语言都定义了自己的类型，还定义了如何操作这些类型，另外还定义了这些类型应该如何相互作用，我们就把这称为类型系统。</li><li>关于类型系统，wiki 百科上是这样解释的： <ul><li>在计算机科学中，类型系统（type system）用于定义如何将编程语言中的数值和表达式归类为许多不同的类型，如何操作这些类型，这些类型如何互相作用。</li></ul></li><li>直观地理解，一门语言的类型系统定义了各种类型之间应该如何相互操作，比如，两种不同类型相加应该如何处理，两种相同的类型相加又应该如何处理等。还规定了各种不同类型应该如何相互转换，比如字符串类型如何转换为数字类型。</li><li>一个语言的类型系统越强大，那编译器能帮程序员检查的东西就越多，程序员定义“检查规则”的方式就越灵活。</li></ul><h2 id="v8-是怎么执行加法操作的" tabindex="-1">V8 是怎么执行加法操作的 <a class="header-anchor" href="#v8-是怎么执行加法操作的" aria-label="Permalink to &quot;V8 是怎么执行加法操作的&quot;">​</a></h2><ul><li>V8 会严格根据 ECMAScript 规范来执行操作。ECMAScript 是一个语言标准，JavaScript 就是 ECMAScript 的一个实现，比如在 ECMAScript 就定义了怎么执行加法操作，如下所示： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/8/8-2.png" alt="ECMAScript定义加法语义"></li></ul><ol><li>把第一个表达式 (AdditiveExpression) 的值赋值给左引用 (lref)。</li><li>使用 GetValue(lref) 获取左引用 (lref) 的计算结果，并赋值给左值</li><li>使用ReturnIfAbrupt(lval) 如果报错就返回错误。</li><li>把第二个表达式 (MultiplicativeExpression) 的值赋值给右引用 (rref)。</li><li>使用 GetValue(rref) 获取右引用 (rref) 的计算结果，并赋值给 rval。</li><li>使用ReturnIfAbrupt(rval) 如果报错就返回错误。</li><li>使用 ToPrimitive(lval) 获取左值 (lval) 的计算结果，并将其赋值给左原生值 (lprim)。</li><li>使用 ToPrimitive(rval) 获取右值 (rval) 的计算结果，并将其赋值给右原生值 (rprim)。</li><li>如果 Type(lprim) 和 Type(rprim) 中有一个是 String，则： <ul><li>把 ToString(lprim) 的结果赋给左字符串 (lstr)；</li><li>把 ToString(rprim) 的结果赋给右字符串 (rstr)；</li><li>返回左字符串 (lstr) 和右字符串 (rstr) 拼接的字符串。</li></ul></li><li>把 ToNumber(lprim) 的结果赋给左数字 (lnum)。</li><li>把 ToNumber(rprim) 的结果赋给右数字 (rnum)。</li><li>返回左数字 (lnum) 和右数字 (rnum) 相加的数值。</li></ol><ul><li>通俗地理解，V8 会提供了一个 ToPrimitive 方法，其作用是将 a 和 b 转换为原生数据类型，其转换流程如下： <ul><li>先检测该对象中是否存在 valueOf 方法，如果有并返回了原始类型，那么就使用该值进行强制类型转换；</li><li>如果 valueOf 没有返回原始类型，那么就使用 toString 方法的返回值；</li><li>如果 vauleOf 和 toString 两个方法都不返回基本类型值，便会触发一个 TypeError 的错误。</li></ul></li><li>将对象转换为原生类型的流程图如下所示： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/8/8-3.png" alt="ECMAScript定义加法语义"></li><li>当 V8 执行 1+“2”时，因为这是两个原始值相加，原始值相加的时候，如果其中一项是字符串，那么 V8 会默认将另外一个值也转换为字符串，相当于执行了下面的操作： <ul><li><code>Number(1).toString() + &quot;2&quot;</code></li></ul></li><li>这里，把数字 1 偷偷转换为字符串“1”的过程也称为强制类型转换，因为这种转换是隐式的，所以如果我们不熟悉语义，那么就很容易判断错误。</li><li>我们还可以再看一个例子来验证上面流程，你可以看下面的代码：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> Obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;200&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">valueOf</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">    }   </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  Obj</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> Obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;200&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">valueOf</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">    }   </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  Obj</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>由于需要先使用 ToPrimitive 方法将 Obj 转换为原生类型，而 ToPrimitive 会优先调用对象中的 valueOf 方法，由于 valueOf 返回了 100，那么 Obj 就会被转换为数字 100，那么数字 100 加数字 3，那么结果当然是 103 了。</li><li>如果我改造下代码，让 valueOf 方法和 toString 方法都返回对象，其改造后的代码如下：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> Obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">valueOf</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }   </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  Obj</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> Obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">valueOf</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }   </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  Obj</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>因为 ToPrimitive 会先调用 valueOf 方法，发现返回的是一个对象，并不是原生类型，当 ToPrimitive 继续调用 toString 方法时，发现 toString 返回的也是一个对象，都是对象，就无法执行相加运算了，这时候虚拟机就会抛出一个异常，异常如下所示：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">VM263</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;"> Uncaught </span><span style="color:#B392F0;">TypeError</span><span style="color:#E1E4E8;">: Cannot convert object to primitive value</span></span>
<span class="line"><span style="color:#E1E4E8;">    at </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">anonymous</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">VM263</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">9</span><span style="color:#24292E;"> Uncaught </span><span style="color:#6F42C1;">TypeError</span><span style="color:#24292E;">: Cannot convert object to primitive value</span></span>
<span class="line"><span style="color:#24292E;">    at </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">anonymous</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>提示的是类型错误，错误原因是无法将对象类型转换为原生类型。</li><li>所以说，在执行加法操作的时候，V8 会通过 ToPrimitive 方法将对象类型转换为原生类型，最后就是两个原生类型相加，如果其中一个值的类型是字符串时，则另一个值也需要强制转换为字符串，然后做字符串的连接运算。在其他情况时，所有的值都会转换为数字类型值，然后做数字的相加。</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>在 Python 中，数字和字符串相加会抛出异常，这是因为 Python 认为字符串和数字相加是无意义的，所以限制其操作。</li><li>在 JavaScript 中，数字和字符串相加会返回一个新的字符串，这是因为 JavaScript 认为字符串和数字相加是有意义的，V8 会将其中的数字转换为字符，然后执行两个字符串的相加操作，最终得到的是一个新的字符串。</li><li>在 JavaScript 中，类型系统是依据 ECMAScript 标准来实现的，所以 V8 会严格根据 ECMAScript 标准来执行。在执行加法过程中，V8 会先通过 ToPrimitive 函数，将对象转换为原生的字符串或者是数字类型，在转换过程中，ToPrimitive 会先调用对象的 valueOf 方法，如果没有 valueOf 方法，则调用 toString 方法，如果 vauleOf 和 toString 两个方法都不返回基本类型值，便会触发一个 TypeError 的错误。</li></ul><h2 id="经典题目" tabindex="-1">经典题目 <a class="header-anchor" href="#经典题目" aria-label="Permalink to &quot;经典题目&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> Obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;200&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">valueOf</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">    }   </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  Obj</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;3&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> Obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;200&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">valueOf</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">    }   </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  Obj</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;3&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>&quot;1003&quot;, 如果其中一项是字符串，那么 V8 会默认将另外一个值也转换为字符串</li><li>先调 valueOf，存在则不调 toString , Number(100).toString() + &#39;3&#39; = &#39;1003&#39;</li></ul>`,20),o=[e];function r(t,i,c,E,y,u){return n(),a("div",null,o)}const d=s(p,[["render",r]]);export{v as __pageData,d as default};
