import{_ as s,v as a,b as n,R as e}from"./chunks/framework.caa0fbaf.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"node/npm.md","filePath":"node/npm.md"}'),t={name:"node/npm.md"},o=e(`<h2 id="nvm配置" tabindex="-1">nvm配置 <a class="header-anchor" href="#nvm配置" aria-label="Permalink to &quot;nvm配置&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nvm node_mirror </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//npmmirror.com/mirrors/node/</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm npm_mirror </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//npmmirror.com/mirrors/npm/</span></span></code></pre></div><h2 id="npmrc" tabindex="-1">.npmrc <a class="header-anchor" href="#npmrc" aria-label="Permalink to &quot;.npmrc&quot;">​</a></h2><p>yarn也会读取.npmrc,只配这一个就行</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//registry.npmmirror.com</span></span></code></pre></div><h2 id="全局npm配置" tabindex="-1">全局npm配置 <a class="header-anchor" href="#全局npm配置" aria-label="Permalink to &quot;全局npm配置&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 一次性配置，所有通过npm安装的均使用新的淘宝镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config set registry </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//registry.npmmirror.com/</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 验证</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config get registry</span></span></code></pre></div>`,7),p=[o];function l(r,c,i,m,d,y){return a(),n("div",null,p)}const g=s(t,[["render",l]]);export{C as __pageData,g as default};
