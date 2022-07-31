import{_ as s,c as n,o as a,d as l}from"./app.dd0ab690.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u7B97\u6CD5/\u6590\u6CE2\u90A3\u5951.md"}'),p={name:"\u7B97\u6CD5/\u6590\u6CE2\u90A3\u5951.md"},o=l(`<p>\u6590\u6CE2\u90A3\u5951</p><blockquote><p>\u5F62\u5982\uFF1A[1,1,2,3,5,8,13,21...]\u7ED9\u51FA\u6307\u5B9A\u7D22\u5F15\uFF0C\u6C42\u51FA\u7D22\u5F15\u7684\u503C</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5206\u6790\u9898\u76EE\uFF1A\u51FA\u53E3\u4E3A\u7D22\u5F150\uFF0C\u7D22\u5F151</span></span>
<span class="line"><span style="color:#A6ACCD;">//  [1,1,2,3,5,8,13,21]</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(index){</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(index===0||index===1){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 1 //\u51FA\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">  }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return foo(index-1)+foo(index-2) //\u5047\u8BBE\u662F3\uFF0C\u90A3\u4E48\u5C31\u662Ffoo(2)+foo(1) 1+1,\u4F9D\u6B21\u7C7B\u63A8\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(foo(5));// 8</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(foo(7));// 21</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u89E3\u6CD52\uFF1A\u4F7F\u7528\u5FAA\u73AF\u3002\u540C\u6837\u9700\u8981\u8BB0\u5F55\u7D22\u5F150 \u548C\u7D22\u5F151\u3002</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function foo(i) {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">console.log(foo(7));//21</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),e=[o];function c(t,A,C,i,r,y){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{_ as __pageData,d as default};
