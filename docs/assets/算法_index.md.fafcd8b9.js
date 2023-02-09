import{_ as s,c as n,o as a,b as l}from"./app.1a7b8d50.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"算法/index.md"}'),e={name:"算法/index.md"},p=l(`<p>suanfa</p><p>介绍一下 loop 循环: 三个可选得表达式,使用分号;分割</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for(表达式 1;表达式 2;表达式 3){</span></span>
<span class="line"><span style="color:#A6ACCD;">  执行的代码块</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>表达式 1（initialization） 初始化，仅执行一次</li><li>表达式 2 (condition)每次执行(代码块执行前得判断条件):如果被忽略，则需要手动break;否则循环不会停下</li><li>表达式 3 (final-expression)会在循环(代码块)执行后执行</li></ul><blockquote><p>变种:拆解出来变量声明，可能更好理解。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let index = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">for (; index &lt; 10; index++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;会循环 10 次&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>面试题：通过为什么在for循环中，使用let与var会有不同的结果。</p></blockquote><p>在for循环中使用var，因为var是函数级作用域，存在hoisting变量提升。每次循环，都使用相同的var作为变量。 在for循环中使用let，因为let是块级作用域，没有hoisting变量提升。每次循环体重变量都是let重新声明的。</p><p>()圆括号中循环变量设置实际上是一个独立的父级作用域。</p><p>变量提升时，会逐层向上。如果碰到已声明的块级。也会报错has already been declared</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Uncaught SyntaxError: Identifier &#39;i&#39; has already been declared</span></span>
<span class="line"><span style="color:#A6ACCD;">//不要认为var i 可以直接跑到最外层的代码块外声明。</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let i = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var i = 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>同理可推测for循环也是父级代码块嵌套。符合阮一峰老师所说的</p><blockquote><p>设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域</p></blockquote><p>接下来就是为什么每一个单独的子作用域都能单独保留一份自己作用域内的变量了。这完全就是内部词法问题了。 变量i因为是let声明的，每一次循环的变量都是内部<strong>重新</strong>声明，所以每个i都被块级作用域包括独立。(循环体中的那次显示申明，有且只执行一次。真正内部使用是词法提供的全新声明)</p><p>指示一下: hoisting 变量提升 var 声明。 （函数表达式：变量会提升，但是函数不会。） 函数声明提升。</p><p>暂时性死区: 存在let const的声明，那么此变量就会绑定当前作用域，此变量不受外界影响。作用域内想要使用这些变量，必须在申明之后。 即使上级作用域中有这个变量，也不能用。</p><p>const 声明的是一个只读的常量。声明后，常量的值就不能改变了。实际上，const让变量指向内存地址指针不能变动。 对于基本类型，存在于栈中，变量直接指向栈内存数据。 对于引用类型，存在于堆内存，变量存储的是这个数据内存的指针(内存地址值)，保证变量对指向的内存地址不变，至于变量自身的变动，是不影响的。 另外:const的声明和初始化，必须同时产生。</p>`,17),o=[p];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{_ as __pageData,u as default};
