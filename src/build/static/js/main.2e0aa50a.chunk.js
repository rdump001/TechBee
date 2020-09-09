(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{23:function(e,t,n){e.exports=n(37)},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);n(24);var o=n(0),a=n.n(o),r=n(17),s=n.n(r),i=(n(29),n(18)),l=n(19),c=n(22),u=n(21),d=n(7),h=n(1),m=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Hello, welcome to my blog!"),a.a.createElement("p",null,"Welcome to Blog! This Blog was with the goal of helping educators with techogies integration. We provide latest educational technology news as well as a collection of reviews, and professional development ideas. This blog is designed for tech lovers, tech haters and anyone else who wants or needs to learn about the world of personal technology"),a.a.createElement("p",null,"Blog helps IT decision-makers identify technologies and strategies to empower workers and streamline business processes. The site delivers a unique blend of original content by IT professionals, peer-to-peer advice from the largest community of IT leaders on the Web, and a vast library of professional resources from the leading vendors in the IT industry."),a.a.createElement("p",null,"Tech can improve your life by making it more efficient, knowledgeable and fun. Let Blog help you learn about the amazing and rapid developments in technology."))},p=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About me"),a.a.createElement("p",null,"Welcome to Blog! This Blog was with the goal of helping educators with techogies integration. We provide latest educational technology news as well as a collection of reviews, and professional development ideas. This blog is designed for tech lovers, tech haters and anyone else who wants or needs to learn about the world of personal technology"),a.a.createElement("p",null,"Blog helps IT decision-makers identify technologies and strategies to empower workers and streamline business processes. The site delivers a unique blend of original content by IT professionals, peer-to-peer advice from the largest community of IT leaders on the Web, and a vast library of professional resources from the leading vendors in the IT industry."),a.a.createElement("p",null,"Tech can improve your life by making it more efficient, knowledgeable and fun. Let Blog help you learn about the amazing and rapid developments in technology."))},f=function(e){var t=e.articles;return a.a.createElement(a.a.Fragment,null,t.map((function(e,t){return a.a.createElement(d.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},a.a.createElement("h3",null,e.title),a.a.createElement("p",null,e.content[0].substring(0,150),"..."))})))},g=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["The first thing you\u2019ll want to do is set up an environment that supports at \n            the very least JSX, the XML-like syntax most React code relies upon. You\u2019ll \n            probably also want all the niceties of ES6 or ES7, and maybe even TypeScript.\n\n            If you are just setting up your first React project and want to dive into \n            tutorials rather than messing with configuration, I would recommend using \n            Create React App, which will generate all the boilerplate you need to get started.\n            \n            Create React App will likely not provide the level of custom configuration you want \n            down the road, but when you get to that point, it allows you to \u201ceject\u201d the project, \n            giving you control over the build steps.","The React extension adds another tab to your browser\u2019s dev tools, allowing \n            you to look through React components the same way you would look at HTML \n            elements. Along with the structure of the components, it also shows the props, \n            state, and context a component contains. This can be a big help when debugging.","Okay, so you\u2019ve got the tools. Now it\u2019s time to write some code. React\u2019s \n            documentation provides a tutorial that goes over the steps to create a tic-tac-toe game. \n            It offers a light intro to the syntax and basic concepts of React so you can get up and \n            running before you dig into more details in the documentation.","The docs give a good overview of the basics you\u2019ll need to understand React development.","The standard for testing React components is Enzyme. Enzyme builds wrappers around components\n             so they can be rendered either in isolation or inside of other components, and appear in your webapp. \n             It allows you to easily simulate user interaction like mouse clicks and entering text.\n\n            The Jest testing framework is often used along Enzyme for testing your components. \n            One of its features is \u201csnapshot\u201d testing. The first time a snapshot test is run on a component, \n            it documents how the component renders\u2013what text is present, the elements, any child components, etc. \n            Any subsequent run of the test just verifies that nothing has changed.\n            \n            Any time the rendering of the component changes, you will be alerted via a failing test. If the change \n            was unintended, you will see the diff and be able to easily correct it. If the change was intended, you \n            can easily update the snapshot."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["Assuming you\u2019ve got Node and Mongo installed already, the first step is to open \n            the terminal and create a directory \u2018toDoListAPI\u2019. Then run \u2018npm init\u2019 to create \n            a package.json file. In the JSON file, add details about your app, its name, the \n            version and a little description etc. Then create a server.js file. Finally, create \n            a new directory \u2018api\u2019 with three subdirectories, models, routes and controllers. \n            Then add a toDoListController.js file to the controllers folder, a toDoListModel.js \n            file to the models folder and toDoListRoutes.js to the routes folder. ","The next step is to get your server up and running. For this, you\u2019ll need to install \n            express.js along with nodmon, which will keep track of code changes and restart the \n            server accordingly. You\u2019ll then have to add these packages as dependencies to your \n            JSON file, remembering to add nodmon as the value of the \u2018start\u2019 key in the \u2018scripts\u2019 \n            section. Finally, copy the following code snippet into server.js and start the server \n            with \u2018npm run start\u2019. ","Next, you\u2019ll need to install Mongoose. This is a library that will let you interact \n            with your Mongo db instance. Create a new file in the models folder toDoListModel.js \n            and copy the following code snippet into it.","Setup the Routes and Controllers","The final steps are to add your database url to the Mongoose connection instance, \n            load the created model \u2018task\u2019 and register the routes with the server.\n            You might want to install BodyParser and use BodyParser parse as middleware \n            before the handlers too. Finally start the Mongo server by running \u2018mongod\u2019 in \n            the terminal.","The last thing you want to do is test that everything works as promised. For this, you\u2019ll need Postman installed."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Don\u2019t start your job search without giving due thought to your resume as a strong \n            resume does wonders for your chances of making it to the interview stage. Additionally, \n            it can work wonders for your job search in general. Here\u2019s how to make sure yours ends up in the \u2018yes\u2019 tray.","1. Keep it brief - usually two pages maximum.","2. Avoid unnecessary personal detail such as age, religion, and sex.","3. Don\u2019t write in the first person \u2013 start sentences with verbs.","4. List your career history in reverse chronological order. Don\u2019t forget to include a short note to explain any gaps.","5. Use bullet points for achievements and responsibilities \u2013 include more detail on recent roles and less on older ones, \n            unless they are particularly relevant to the job you are applying for.","6. List educational institutions and qualifications in reverse chronological order.","7. Include computer skills, language skills, and any relevant training.","8. Keep your hobbies and interest section short.","9. References can be provided on request \u2013 you don\u2019t need to include their contact details on your resume.","10. Check for typos. Even if you think your resume is error-free, it\u2019s worth asking a friend to read it through."]}],y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Articles"),a.a.createElement(f,{articles:g}))},v=n(6),w=n.n(v),b=n(9),E=n(11),k=function(e){var t=e.comments;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Comments:"),t.map((function(e,t){return a.a.createElement("div",{className:"comment",key:t},a.a.createElement("h4",null,e.username),a.a.createElement("p",null,e.text))})))},T=function(e){var t=e.articleName,n=e.upvotes,o=e.setArticleInfo,r=function(){var e=Object(b.a)(w.a.mark((function e(){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,o(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{id:"upvotes-section"},a.a.createElement("button",{onClick:function(){return r()}},"Add Upvote"),a.a.createElement("p",null,"This post has been upvoted ",n," times"))},j=function(e){var t=e.articleName,n=e.setArticleInfo,r=Object(o.useState)(""),s=Object(E.a)(r,2),i=s[0],l=s[1],c=Object(o.useState)(""),u=Object(E.a)(c,2),d=u[0],h=u[1],m=function(){var e=Object(b.a)(w.a.mark((function e(){var o,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:i,text:d}),headers:{"Content-Type":"application/json"}});case 2:return o=e.sent,e.next=5,o.json();case 5:a=e.sent,n(a),l(""),h("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{id:"add-comment-form"},a.a.createElement("h3",null,"Add a Comment"),a.a.createElement("label",null,"Name:",a.a.createElement("input",{type:"text",value:i,onChange:function(e){return l(e.target.value)}})),a.a.createElement("label",null,"Comment:",a.a.createElement("textarea",{rows:"4",cols:"50",value:d,onChange:function(e){return h(e.target.value)}})),a.a.createElement("button",{onClick:function(){return m()}},"Add Comment"))},x=function(){return a.a.createElement("h1",null,"404: Page Not Found")},A=function(e){var t=e.match.params.name,n=g.find((function(e){return e.name===t})),r=Object(o.useState)({upvotes:0,comments:[]}),s=Object(E.a)(r,2),i=s[0],l=s[1];if(Object(o.useEffect)((function(){(function(){var e=Object(b.a)(w.a.mark((function e(){var n,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,l(o);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!n)return a.a.createElement(x,null);var c=g.filter((function(e){return e.name!==t}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,n.title),a.a.createElement(T,{articleName:t,upvotes:i.upvotes,setArticleInfo:l}),n.content.map((function(e,t){return a.a.createElement("p",{key:t},e)})),a.a.createElement(k,{comments:i.comments}),a.a.createElement(j,{articleName:t,setArticleInfo:l}),a.a.createElement("h3",null,"Other Articles:"),a.a.createElement(f,{articles:c}))},I=function(){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(d.b,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(d.b,{to:"/about"},"About")),a.a.createElement("li",null,a.a.createElement(d.b,{to:"/articles-list"},"Articles"))))},O=(n(36),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(I,null),a.a.createElement("div",{id:"page-body"},a.a.createElement(h.c,null,a.a.createElement(h.a,{path:"/",component:m,exact:!0}),a.a.createElement(h.a,{path:"/about",component:p}),a.a.createElement(h.a,{path:"/articles-list",component:y}),a.a.createElement(h.a,{path:"/article/:name",component:A}),a.a.createElement(h.a,{component:x})))))}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.2e0aa50a.chunk.js.map