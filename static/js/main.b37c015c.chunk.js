(this["webpackJsonpface-recognition"]=this["webpackJsonpface-recognition"]||[]).push([[0],{301:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(83),l=n.n(i),r=(n(94),n(84)),c=n(85),s=n(88),u=n(87),m=function(e){return o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{className:"f3 link dim black underline pa2 pointer white"},"Sign Out"))},d=(n(95),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return o.a.createElement("div",{className:"container"},o.a.createElement("p",null,"This will detect faces in your pictures. Try it out!"),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa4 br4 shadow-5"},o.a.createElement("input",{onChange:t,className:"br2 f4 pa2 w-70 center",type:"text"}),o.a.createElement("button",{onClick:n,className:"ma2 w-25 grow f3 link ph3 pv2 dib br2 bg-light-blue"},"Detect"))))}),p=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"white f3"},"Jesse, your current rank is..."),o.a.createElement("div",{className:"white f1"},"#5"))},b=(n(96),function(e){var t=e.imageUrl,n=e.box;return o.a.createElement("div",{className:"center ma4"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputimage",src:t,alt:"",width:"600px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})))}),h=n(86),f=n.n(h),g=n(42),v=n.n(g),E=(n(301),{particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{shadow:{enable:!0,color:"#3CA9D1",blue:5}}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:200,duration:6}}}}),w=new v.a.App({apiKey:"98d70806f17a461a8e9f977797f853ae"}),y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),o=Number(n.height);return console.log(a,o),{leftCol:t.left_col*a,topRow:t.top_row*o,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){console.log(t),e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),w.models.predict(v.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{}},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(p,null),o.a.createElement(d,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),o.a.createElement(f.a,{className:"particles",params:E}),o.a.createElement(b,{box:this.state.box,imageUrl:this.state.imageUrl}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(302);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,n){e.exports=n(303)},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.b37c015c.chunk.js.map