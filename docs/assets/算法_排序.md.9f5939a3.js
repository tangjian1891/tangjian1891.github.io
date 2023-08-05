import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"算法/排序.md","filePath":"算法/排序.md"}'),p={name:"算法/排序.md"},e=l(`<p>这是<a href="https://www.cnblogs.com/AlbertP/p/10847627.html" target="_blank" rel="noreferrer">排序</a></p><p><strong>const arr=[20,3,5,1,7,4,8,9,4,43,23,2]</strong></p><h2 id="冒泡排序" tabindex="-1">冒泡排序 <a class="header-anchor" href="#冒泡排序" aria-label="Permalink to &quot;冒泡排序&quot;">​</a></h2><blockquote><p>做两层循环。外层为轮数，内层为对比。值也是内层索引与索引+1对比</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const arr = [20, 3, 5, 1, 7, 4, 8, 9, 4, 43, 23, 2];</span></span>
<span class="line"><span style="color:#A6ACCD;">let len = arr.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">let temp;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 外循环控制轮次，3个数排序，需要2次。所以外层是len-1</span></span>
<span class="line"><span style="color:#A6ACCD;">// 内层每次都从索引0开始，外层单次结束，都可以让数组尾部确认最大，所以内部是len-外层已完成索引</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i = 0; i &lt; len - 1; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let j = 0; j &lt; len - i; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (arr[j] &gt; arr[j + 1]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      temp = arr[j];</span></span>
<span class="line"><span style="color:#A6ACCD;">      arr[j] = arr[j + 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">      arr[j + 1] = temp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr);</span></span></code></pre></div><h2 id="选择排序" tabindex="-1">选择排序 <a class="header-anchor" href="#选择排序" aria-label="Permalink to &quot;选择排序&quot;">​</a></h2><blockquote><p>两层循环，用外层第一个做一个最小值索引，与内层对比，不断推移最小值索引，最后交换位置。内层起点(外层+1)</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const arr = [20, 3, 5, 1, 7, 4, 8, 9, 4, 43, 23, 2];</span></span>
<span class="line"><span style="color:#A6ACCD;">let len = arr.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">let temp;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 选择排序。 从首到尾，每次固定最小索引，一直向后不断刷新最小值的索引,然后替换与外层循环替换</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i = 0; i &lt; len-1; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let minIndex = i;</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let j = i + 1; j &lt; len; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (arr[minIndex] &gt; arr[j]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      minIndex = j;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  temp = arr[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">  arr[i] = arr[minIndex];</span></span>
<span class="line"><span style="color:#A6ACCD;">  arr[minIndex] = temp;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr);</span></span></code></pre></div>`,8),o=[e];function t(r,c,i,C,A,y){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
