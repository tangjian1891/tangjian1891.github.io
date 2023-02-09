import{_ as s,c as n,o as a,b as l}from"./app.1a7b8d50.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"算法/两数之和.md"}'),e={name:"算法/两数之和.md"},p=l(`<p>两数之和:给定一个数组，找到数组中两数之和符合，并返回他们的数组下标</p><blockquote><p>给定nums=[3,23,2,55,8] target 11,那么返回[0,4]</p></blockquote><blockquote><p>简单解法:双层for循环，暴力查找</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr = [3, 23, 2, 55, 8];</span></span>
<span class="line"><span style="color:#A6ACCD;">let len = arr.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 两层循环，直接求和</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let index = 0; index &lt; len; index++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let j = index + 1; j &lt; len; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (arr[index] + arr[j] == target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return [index, j];</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(foo(11));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>使用链表</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr = [3, 23, 2, 55, 8];</span></span>
<span class="line"><span style="color:#A6ACCD;">let len = arr.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 两层循环，直接求和</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let map = {}; // {needValue:currentIndex}</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let currentValue = arr[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    let needValue = target - currentValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (map[currentValue] !== undefined) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return [map[currentValue], i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      map[needValue] = i;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(foo(11));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),o=[p];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const d=s(e,[["render",t]]);export{D as __pageData,d as default};
