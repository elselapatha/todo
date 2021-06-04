(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(19),o=n.n(s),c=n(27),l=(n(89),n(90),n(109)),i=n(32),d=n(33),u=n(40),b=n(39),j=n(60),m=n(43),p=Object(m.b)({name:"todo",initialState:{tasks:[]},reducers:{add:function(e,t){e.tasks.push(t.payload)},remove:function(e,t){e.tasks=e.tasks.filter((function(e){return e.id!==t.payload}))},done:function(e,t){e.tasks=e.tasks.map((function(e){return e.id===t.payload?Object(j.a)(Object(j.a)({},e),{},{done:!0}):e}))}}}),h=p.actions,f=h.add,x=h.remove,O=h.done,v=function(e){return e.todo.tasks},g=p.reducer,y=n(110),k=n(46),w=n.n(k),N=n(7),T=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:""},e.addTask=function(t){e.props.addTask({id:Object(y.a)(),timestamp:w()(),title:e.state.title,done:!1}),e.setState({title:""}),t.preventDefault()},e.onChange=function(t){e.setState({title:t.target.value}),t.preventDefault()},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"px-8 flex flex-col",children:[Object(N.jsx)("div",{className:"text-gray-700 text-4xl font-bold py-8",children:" Todo"}),Object(N.jsxs)("form",{onSubmit:this.addTask,className:"flex space-x-2",children:[Object(N.jsx)("input",{type:"text",className:"block appearance-none text-base placeholder-gray-500 placeholder-opacity-50 border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 hover:border-emerald-400 focus:border-emerald-400 focus:ring-emerald-300",placeholder:"New Task",value:this.state.title,onChange:this.onChange}),Object(N.jsx)("button",{type:"submit",className:"min-w-max px-3 py-2 shadow-md bg-green-500 rounded-md text-white focus:outline-none font-semibold hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md",children:"Add Task"})]})]})}}]),n}(a.Component),C=Object(c.b)(null,{addTask:f})(T),S=n(108),z=n(4),D=n.n(z),A=n(75),F=n(59),I=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).removeTask=function(t){e.props.removeTask(e.props.item.id),console.log("Task Removed."),t.preventDefault()},e.done=function(t){e.props.doneTask(e.props.item.id),console.log("Task done."),t.preventDefault()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.item;return Object(N.jsxs)(S.b.Item,{className:"transition-colors group duration-200 border border-gray-300 select-none hover:bg-gray-100 rounded-lg mb-2",children:[Object(N.jsxs)("div",{className:D()("h-full","py-1","text-lg","flex","flex-row",{"cursor-pointer":!e.done}),children:[Object(N.jsx)("div",{className:"flex items-center",children:e.done?Object(N.jsx)(A.a,{size:"24px",className:"text-green-500 ml-1 mr-5"}):Object(N.jsx)(F.a,{size:"24px",className:"text-gray-400 ml-1 mr-5 group-hover:text-emerald-500",onClick:this.done,style:{fill:"white"}})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:e.title}),Object(N.jsx)("div",{className:"text-sm text-gray-400",children:w()(e.timestamp).fromNow()})]})]}),Object(N.jsx)(F.b,{onClick:this.removeTask,className:"text-gray-500 hover:text-red-700 md:mr-4 cursor-pointer",size:"24px"})]})}}]),n}(a.Component),L={removeTask:x,doneTask:O},B=Object(c.b)(null,L)(I),J=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"px-8 my-6 h-full overflow-auto",children:Object(N.jsx)(S.b,{split:!1,itemLayout:"horizontal",size:"small",dataSource:this.props.tasks,renderItem:function(e){return Object(N.jsx)(B,{item:e})}})})}}]),n}(a.Component),P=Object(c.b)((function(e){return{tasks:v(e)}}))(J);n(104);var E=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(l.a,{className:"layout h-screen",children:Object(N.jsx)(l.a.Content,{className:"p-4 lg:p-20 bg-gray-100",children:Object(N.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:Object(N.jsxs)("div",{className:"w-full lg:w-2/3 bg-white flex flex-col rounded-2xl shadow-lg h-full",children:[Object(N.jsx)(C,{}),Object(N.jsx)(P,{})]})})})})})},M=Object(m.a)({reducer:{todo:g},middleware:Object(m.c)({serializableCheck:!1})}),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(c.a,{store:M,children:Object(N.jsx)(E,{})})}),document.getElementById("root")),R()},89:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.69c832ab.chunk.js.map