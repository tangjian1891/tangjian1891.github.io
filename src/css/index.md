---
title: VitePress
titleTemplate: Vite & Vue powered static site generator
editLink: true
navbar: true
sidebar: true
outline: 4
---


https://developer.mozilla.org/zh-CN/docs/Learn/CSS  学习css




7层模型：取自张鑫旭
层叠上下文
	负值z-index (relative/absolate或flex的子项可以使用z-index。普通元素z-index是无效的)
		block块级
			float浮动元素
				inline/inline-block(内容)
					z-index:auto;或z-index=0;或不依赖z-index创建的层叠上下文（opacity或transform）
						正值z-index
					



如何创建一个层叠上下文：
1.relative/absolate 只有当z-index不为auto时，触发层叠上下文。
2.fixed天然触发层叠上下文。
3.html根元素天然为层叠上下文

css3
3.z-index值不为auto的flex项（父元素为display:flex|inline-flex）
4.opacity不为1 ，0.99也算
5.transform值不是none;

