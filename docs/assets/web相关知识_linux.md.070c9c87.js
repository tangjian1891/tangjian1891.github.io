import{_ as s,c as n,o as a,d as l}from"./app.5022b90d.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u538B\u6587\u4EF6","slug":"\u89E3\u538B\u6587\u4EF6","link":"#\u89E3\u538B\u6587\u4EF6","children":[]},{"level":2,"title":"\u73AF\u5883\u53D8\u91CF","slug":"\u73AF\u5883\u53D8\u91CF","link":"#\u73AF\u5883\u53D8\u91CF","children":[]},{"level":2,"title":"\u67E5\u627E\u76EE\u5F55","slug":"\u67E5\u627E\u76EE\u5F55","link":"#\u67E5\u627E\u76EE\u5F55","children":[]},{"level":2,"title":"\u8F6F\u4EF6\u52A0\u538B\u7F16\u8BD1\u5B89\u88C5","slug":"\u8F6F\u4EF6\u52A0\u538B\u7F16\u8BD1\u5B89\u88C5","link":"#\u8F6F\u4EF6\u52A0\u538B\u7F16\u8BD1\u5B89\u88C5","children":[]}],"relativePath":"web\u76F8\u5173\u77E5\u8BC6/linux.md"}'),p={name:"web\u76F8\u5173\u77E5\u8BC6/linux.md"},o=l(`<h2 id="\u89E3\u538B\u6587\u4EF6" tabindex="-1">\u89E3\u538B\u6587\u4EF6 <a class="header-anchor" href="#\u89E3\u538B\u6587\u4EF6" aria-hidden="true">#</a></h2><p>-x \u63D0\u53D6/\u89E3\u538B extract -z \u89E3\u538B.gz .gzip -v \u663E\u793A\u7EC6\u8282\u3002\u6CA1\u5565\u7528\uFF0C\u4E0D\u7528\u62FC -f \u6700\u540E\u4E00\u4E2A\u540D\u5B57\uFF0C\u63A5file\u540D \u4E00\u5B9A\u8981</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.tar.gz \u548C </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.tgz\u4F7F\u7528tar -xzf </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.tar  \u4F7F\u7528 tar -xvf </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">    //\u4E07\u80FD\u89E3\u538B</span></span>
<span class="line"></span></code></pre></div><h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u6B63\u5E38\u6765\u8BF4\uFF0C\u50CFnode\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u53EF\u6267\u884C\u811A\u672C\uFF0C\u9700\u8981\u5230\u6307\u5B9A\u76EE\u5F55\uFF0C\u5F88\u4E0D\u65B9\u4FBF\uFF0C\u6240\u4EE5\u9700\u8981\u8BA9\u8BA1\u7B97\u673A\u5728\u4EFB\u4F55\u76EE\u5F55\u90FD\u80FD\u8BC6\u522B\u6211\u4EEC\u5F97\u811A\u672C\u3002 \u5C06\u53EF\u6267\u884C\u811A\u672C\u5F97\u6240\u5728\u76EE\u5F55\u914D\u7F6E\u5230\u5168\u5C40PATH\u4E2D\uFF0C\u8FD9\u6837\u5728\u4EFB\u4F55\u5730\u5740\u6267\u884C\u90FD\u53EF\u4EE5\u3002 \u5B9E\u9645\u5230\u5904\u5F97PATH\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7528:\u5206\u5272 \u4F8B\u5982:PATH=/opt/nginx/bin:/opt/nginx/git/bin \u8FD9\u6837\u5C31\u53EF\u4EE5\u4F7F\u7528nginx \u548C git\u4E86,\u5982\u679C\u6709\u66F4\u591A\u5F97\u5C31\u7EE7\u7EED\u62FC\u63A5 \u5B9E\u9645\u73AF\u5883\u53D8\u91CF\uFF0C\u9700\u8981\u914D\u7F6E\u5230/etc/profile\u6587\u4EF6\u4E2D\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">$PATH</span><span style="color:#89DDFF;">:/</span><span style="color:#A6ACCD;">opt</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">bin</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">$PATH</span><span style="color:#89DDFF;">:/</span><span style="color:#A6ACCD;">opt</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">git</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">bin</span></span>
<span class="line"></span></code></pre></div><p><strong>\u5199\u6CD5\u4E0A\uFF0C$PATH\u4EE3\u8868\u5F15\u7528\u4E86\u5DF2\u6709\u5F97\u5B8C\u6574PATH\uFF0C\u7136\u540E\u4E0D\u65AD\u4F7F\u7528:/...\u62FC\u63A5\u5373\u53EF\uFF0C\u6700\u540E\u5B9E\u9645\u4E0A\u53EA\u5BFC\u51FA\u4E86\u4E00\u4E2A\u5B8C\u6574\u5F97\uFF0C\u62FC\u63A5\u597D\u5F97\u6240\u6709\u76EE\u5F55\u5F97PATH\u53D8\u91CF\u5B57\u7B26\u4E32</strong></p><p><strong>\u51FA\u73B0\u5F97\u95EE\u9898</strong> /usr/libexec/grepconf.sh: line 5: grep: command not found</p><p>\u5237\u4E00\u4E0B\uFF0C\u7136\u540E\u518D\u66F4\u65B0\u914D\u7F6E</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">$PATH</span><span style="color:#89DDFF;">:/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#FFCB6B;">bin</span><span style="color:#89DDFF;">:/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#FFCB6B;">sbin</span><span style="color:#89DDFF;">:/</span><span style="color:#FFCB6B;">bin</span><span style="color:#89DDFF;">:/</span><span style="color:#A6ACCD;">sbin</span></span>
<span class="line"><span style="color:#A6ACCD;">source </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">profile</span></span>
<span class="line"></span></code></pre></div><h2 id="\u67E5\u627E\u76EE\u5F55" tabindex="-1">\u67E5\u627E\u76EE\u5F55 <a class="header-anchor" href="#\u67E5\u627E\u76EE\u5F55" aria-hidden="true">#</a></h2><p>find \u8303\u56F4 -name \u6587\u4EF6\u5939\u540D -d</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name vue3 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d   \u4ECE</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\u6839\u76EE\u5F55\u4E0B\uFF0C\u67E5\u770Bvue3\u5F97\u76EE\u5F55\u540D\u79F0</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8F6F\u4EF6\u52A0\u538B\u7F16\u8BD1\u5B89\u88C5" tabindex="-1">\u8F6F\u4EF6\u52A0\u538B\u7F16\u8BD1\u5B89\u88C5 <a class="header-anchor" href="#\u8F6F\u4EF6\u52A0\u538B\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-JS"><button class="copy"></button><span class="lang">JS</span><pre><code><span class="line"><span style="color:#A6ACCD;"># cd\u5230\u6E90\u7801\u76EE\u5F55\uFF0C\u6267\u884C\u89E3\u538B\u540E\u5F97\u524D\u7F00\u76EE\u5F55</span></span>
<span class="line"><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">configure </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">prefix</span><span style="color:#89DDFF;">=/</span><span style="color:#A6ACCD;">opt</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">make </span></span>
<span class="line"><span style="color:#A6ACCD;">make install</span></span>
<span class="line"></span></code></pre></div>`,15),e=[o];function t(c,r,D,i,A,y){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
