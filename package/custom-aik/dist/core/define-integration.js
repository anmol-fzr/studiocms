import{AstroError as x}from"astro/errors";import{z as P}from"astro/zod";var f=(e,n)=>{let i=m(e.path);if(e.code==="invalid_union"){let s=new Map;for(let t of e.unionErrors.flatMap(o=>o.errors))if(t.code==="invalid_type"||t.code==="invalid_literal"){let o=m(t.path);s.has(o)?s.get(o).expected.push(t.expected):s.set(o,{code:t.code,received:t.received,expected:[t.expected]})}return{message:[p(i,s.size?"Did not match union:":"Did not match union.")].concat([...s.entries()].filter(([,t])=>t.expected.length===e.unionErrors.length).map(([t,o])=>t===i?`> ${d(o)}`:`> ${p(t,d(o))}`)).join(`
`)}}return e.code==="invalid_literal"||e.code==="invalid_type"?{message:p(i,d({code:e.code,received:e.received,expected:[e.expected]}))}:e.message?{message:p(i,e.message)}:{message:p(i,n.defaultError)}},d=e=>{if(e.received==="undefined")return"Required";let n=new Set(e.expected);switch(e.code){case"invalid_type":return`Expected type \`${g(n)}\`, received ${JSON.stringify(e.received)}`;case"invalid_literal":return`Expected \`${g(n)}\`, received ${JSON.stringify(e.received)}`}},p=(e,n)=>e.length?`**${e}**: ${n}`:n,g=e=>[...e].map((n,i)=>i===0?JSON.stringify(n):` | ${JSON.stringify(n)}`).join(""),m=e=>e.join(".");var z=({name:e,optionsSchema:n,setup:i,plugins:s})=>(...u)=>{let t=(n??P.never().optional()).safeParse(u[0],{errorMap:f});if(!t.success)throw new x(`Invalid options passed to "${e}" integration
`,t.error.issues.map(r=>r.message).join(`
`));let o=t.data,y=Object.values((()=>{let r={};for(let a of s??[])r[a.name]=a;return r})()),l=i({name:e,options:o}),h=Object.keys(l),v=Object.fromEntries(h.map(r=>[r,a=>{let O=y.filter(c=>c.hook===r);return l[r]?.({...a,...Object.fromEntries(O.map(c=>[c.name,c.implementation(a,{name:e})]))})}]));return{name:e,hooks:v}};export{z as defineIntegration};
//# sourceMappingURL=define-integration.js.map