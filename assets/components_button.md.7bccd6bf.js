import{_ as o,r as p,o as e,c as r,a as t,b as a,w as l,d as s,e as c}from"./chunks/framework.beee6370.js";const B=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md"}'),D={name:"components/button.md"},y=t("h1",{id:"button-按钮",tabindex:"-1"},[s("Button 按钮 "),t("a",{class:"header-anchor",href:"#button-按钮","aria-label":'Permalink to "Button 按钮"'},"​")],-1),F=t("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),i=t("p",null,"使用 type、plain、round 和 circle 来定义按钮的样式。",-1),u={class:"example"},d=t("br",null,null,-1),C=t("br",null,null,-1),_=t("br",null,null,-1),A=t("br",null,null,-1),g=c(`<details><summary>展开查看</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">默认按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">主要按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">成功按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">信息按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">警告按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">危险按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">文字按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">-</span><span style="color:#A6ACCD;">button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">kitty-ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">k-el-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h2><table><thead><tr><th>属性名</th><th style="text-align:center;">说明</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>size</td><td style="text-align:center;">尺寸</td><td style="text-align:right;">small</td></tr><tr><td>type</td><td style="text-align:center;">类型</td><td style="text-align:right;">--</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table>`,3);function b(h,f,m,x,q,E){const n=p("el-button");return e(),r("div",null,[y,F,i,t("div",u,[t("div",null,[a(n,null,{default:l(()=>[s("默认按钮")]),_:1}),a(n,{type:"primary"},{default:l(()=>[s("主要按钮")]),_:1}),a(n,{type:"success"},{default:l(()=>[s("成功按钮")]),_:1}),a(n,{type:"info"},{default:l(()=>[s("信息按钮")]),_:1}),a(n,{type:"warning"},{default:l(()=>[s("警告按钮")]),_:1}),a(n,{type:"danger"},{default:l(()=>[s("危险按钮")]),_:1}),a(n,{type:"text"},{default:l(()=>[s("文字按钮")]),_:1}),d,C,a(n,{plain:""},{default:l(()=>[s("朴素按钮")]),_:1}),a(n,{type:"primary",plain:""},{default:l(()=>[s("主要按钮")]),_:1}),a(n,{type:"success",plain:""},{default:l(()=>[s("成功按钮")]),_:1}),a(n,{type:"info",plain:""},{default:l(()=>[s("信息按钮")]),_:1}),a(n,{type:"warning",plain:""},{default:l(()=>[s("警告按钮")]),_:1}),a(n,{type:"danger",plain:""},{default:l(()=>[s("危险按钮")]),_:1}),_,A,a(n,{round:""},{default:l(()=>[s("圆角按钮")]),_:1}),a(n,{type:"primary",round:""},{default:l(()=>[s("主要按钮")]),_:1}),a(n,{type:"success",round:""},{default:l(()=>[s("成功按钮")]),_:1}),a(n,{type:"info",round:""},{default:l(()=>[s("信息按钮")]),_:1}),a(n,{type:"warning",round:""},{default:l(()=>[s("警告按钮")]),_:1}),a(n,{type:"danger",round:""},{default:l(()=>[s("危险按钮")]),_:1})])]),g])}const k=o(D,[["render",b]]);export{B as __pageData,k as default};
