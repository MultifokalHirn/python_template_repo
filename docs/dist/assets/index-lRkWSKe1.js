import{j as e,L as j,c as a,a as x,b as _,R as b,d as H,T as i,C as c,u as P}from"./index-Ub75XjsG.js";function N(){return e.jsx("div",{className:"footer",children:e.jsx("div",{children:"Copyright © 2024 Lennard Wolf."})})}var y="vocs_Button_button",L="vocs_Button_button_accent";function M({children:t,className:n,href:r,variant:f}){return e.jsx(j,{className:a(n,y,f==="accent"&&L),href:r,variant:"styleless",children:t})}var C="vocs_HomePage_button",k="vocs_HomePage_buttons",B="vocs_HomePage_description",w="vocs_HomePage_logo",l="vocs_HomePage_packageManager",R="vocs_HomePage",D="vocs_HomePage_tabs",u="vocs_HomePage_tabsContent",T="vocs_HomePage_tabsList",$="vocs_HomePage_tagline",E="vocs_HomePage_title";function m({children:t,className:n}){return e.jsx("div",{className:a(n,R),children:t})}function d({className:t}){const{logoUrl:n,title:r}=x();return n?e.jsx("div",{className:a(t,w),children:e.jsx(_,{})}):e.jsx("h1",{className:a(t,E),children:r})}function g({children:t,className:n}){return e.jsx("div",{className:a(n,$),children:t})}function h({children:t,className:n}){return e.jsx("div",{className:a(n,B),children:t})}function p({children:t,className:n}){return e.jsx("div",{className:a(n,k),children:t})}function s(t){return e.jsx(M,{...t,className:a(C,t.className)})}function O({name:t,type:n="install"}){return e.jsxs(b,{className:D,defaultValue:"npm",children:[e.jsxs(H,{className:T,children:[e.jsx(i,{value:"npm",children:"npm"}),e.jsx(i,{value:"pnpm",children:"pnpm"}),e.jsx(i,{value:"yarn",children:"yarn"})]}),e.jsxs(c,{className:u,value:"npm",children:[e.jsx("span",{className:l,children:"npm"})," ",n==="init"?"init":"install"," ",t]}),e.jsxs(c,{className:u,value:"pnpm",children:[e.jsx("span",{className:l,children:"pnpm"})," ",n==="init"?"create":"install"," ",t]}),e.jsxs(c,{className:u,value:"yarn",children:[e.jsx("span",{className:l,children:"yarn"})," ",n==="init"?"create":"install"," ",t]})]})}const S=Object.freeze(Object.defineProperty({__proto__:null,Button:s,Buttons:p,Description:h,InstallPackage:O,Logo:d,Root:m,Tagline:g},Symbol.toStringTag,{value:"Module"})),F={title:"python_template_repo",description:"Landing page of python_template_repo homepage.",layout:"landing",showLogo:!0,authors:["[Lennard Wolf](https://github.com/MultifokalHirn)"],showOutline:2,showSidebar:!0};function v(t){return S||o("HomePage",!1),s||o("HomePage.Button",!0),p||o("HomePage.Buttons",!0),h||o("HomePage.Description",!0),d||o("HomePage.Logo",!0),m||o("HomePage.Root",!0),g||o("HomePage.Tagline",!0),e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(d,{}),e.jsx(g,{children:"Another project by MultifokalHirn."}),e.jsx(h,{children:"Lorem Ipsum."}),e.jsxs(p,{children:[e.jsx(s,{href:"/docs",variant:"accent",children:"Get started"}),e.jsx(s,{href:"https://github.com/MultifokalHirn/python_template_project",children:"GitHub"})]})]}),`
`,`
`,e.jsx(N,{})]})}function G(t={}){const{wrapper:n}={...P(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(v,{...t})}):v()}function o(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{G as default,F as frontmatter};
