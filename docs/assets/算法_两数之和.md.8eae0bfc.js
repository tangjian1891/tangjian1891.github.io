import{_ as s,c as n,o as a,a as l}from"./app.a6275ae1.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u7B97\u6CD5/\u4E24\u6570\u4E4B\u548C.md"}'),e={name:"\u7B97\u6CD5/\u4E24\u6570\u4E4B\u548C.md"},p=l(`<p>\u4E24\u6570\u4E4B\u548C:\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u627E\u5230\u6570\u7EC4\u4E2D\u4E24\u6570\u4E4B\u548C\u7B26\u5408\uFF0C\u5E76\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807</p><blockquote><p>\u7ED9\u5B9Anums=[3,23,2,55,8] target 11,\u90A3\u4E48\u8FD4\u56DE[0,4]</p></blockquote><blockquote><p>\u7B80\u5355\u89E3\u6CD5:\u53CC\u5C42for\u5FAA\u73AF\uFF0C\u66B4\u529B\u67E5\u627E</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let arr = [3, 23, 2, 55, 8];</span></span>
<span class="line"><span style="color:#A6ACCD;">let len = arr.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E24\u5C42\u5FAA\u73AF\uFF0C\u76F4\u63A5\u6C42\u548C</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u4F7F\u7528\u94FE\u8868</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let arr = [3, 23, 2, 55, 8];</span></span>
<span class="line"><span style="color:#A6ACCD;">let len = arr.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E24\u5C42\u5FAA\u73AF\uFF0C\u76F4\u63A5\u6C42\u548C</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),o=[p];function c(t,r,A,C,i,y){return a(),n("div",null,o)}var u=s(e,[["render",c]]);export{d as __pageData,u as default};
