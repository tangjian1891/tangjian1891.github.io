import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"算法/斐波那契.md","filePath":"算法/斐波那契.md"}'),p={name:"算法/斐波那契.md"},o=l(`<p>斐波那契</p><blockquote><p>形如：[1,1,2,3,5,8,13,21...]给出指定索引，求出索引的值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">分析题目：出口为索引0，索引1</span></span>
<span class="line"><span style="color:#A6ACCD;">//  [1,1,2,3,5,8,13,21]</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(index){</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(index===0||index===1){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 1 //出口</span></span>
<span class="line"><span style="color:#A6ACCD;">  }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return foo(index-1)+foo(index-2) //假设是3，那么就是foo(2)+foo(1) 1+1,依次类推即可</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(foo(5));// 8</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(foo(7));// 21</span></span></code></pre></div><blockquote><p>解法2：使用循环。同样需要记录索引0 和索引1。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    b: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (i === 0 || i === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return i;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  let count;</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let index = 2; index &lt;= i; index++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    count = obj.a + obj.b;</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj.a = obj.b;</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj.b = count;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return count;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(foo(5));//8</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(foo(7));//21</span></span></code></pre></div>`,5),e=[o];function c(t,i,C,r,A,y){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
