(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/click1.7a7930a2.wav"},function(e,t,n){e.exports=n.p+"static/media/click2.fe0ded65.wav"},function(e,t,n){e.exports=n.p+"static/media/clef.96f6e8ca.svg"},function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),l=n.n(o),i=(n(18),n(1)),c=n(2),s=n(4),u=n(3),p=n(5),m=(n(20),n(7),n(10)),g=n.n(m),d=n(11),f=n.n(d),h=(n(8),n(12)),b=n.n(h),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={a:{animationDuration:e.swing}},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:b.a,className:this.props.toggleStart,alt:"ticker",style:{animationDuration:this.props.swing}}))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleBpmChange=function(e){var t=+e.target.value;n.setState({bpm:t,swing:120/e.target.value+"s"})},n.handleBeatsPerMeasureChange=function(e){var t=+e.target.value;console.log(t),n.setState({beatsPerMeasure:t})},n.startStop=function(){n.state.playing?(clearInterval(n.timer),console.log("playing from parent"),n.setState({playing:!1,toggleClass:"button",toggleStart:"wobble"})):(n.timer=setInterval(n.playClick,60/n.state.bpm*1e3),n.setState({count:0,playing:!0,toggleClass:"button, button-pressed",toggleStart:"swing"},n.playClick))},n.playClick=function(){var e=n.state;e.count%e.beatsPerMeasure===0?n.click2.play():n.click1.play(),n.setState(function(e){return{count:(e.count+1)%e.beatsPerMeasure}})},n.state={playing:!1,count:0,bpm:120,beatsPerMeasure:4,toggleClass:"button",toggleStart:"wobble",swing:"1s"},n.click1=new Audio(g.a),n.click2=new Audio(f.a),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.playing,n=e.bpm,a=e.toggleClass,o=e.toggleStart,l=e.swing;return r.a.createElement("div",{className:"metronome"},r.a.createElement("div",null,r.a.createElement(v,{bpm:n,playing:t,toggleClass:a,toggleStart:o,swing:l}),r.a.createElement("p",null,"set tempo"),r.a.createElement("div",{className:"bpm-slider"},r.a.createElement("div",null,n," BPM"),r.a.createElement("input",{type:"range",min:"60",max:"180",value:n,onChange:this.handleBpmChange,swing:l})),r.a.createElement("button",{className:a,onClick:this.startStop},t?"Stop":"Start"),r.a.createElement("div",{id:"signature",onChange:this.handleBeatsPerMeasureChange},r.a.createElement("p",null,"set time signature"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"4",name:"signature",defaultChecked:!0}),"4/4"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"2",name:"signature"}),"2/4"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"3",name:"signature"}),"3/4"),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"6",name:"signature"}),"Ed Sheeran Mode (6/8)"))))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,r.a.createElement(w,null)),r.a.createElement("p",null,"Listen on \xa0\xa0",r.a.createElement("a",{className:"App-link",href:"https://www.apple.com/uk/itunes/music/",target:"_blank",rel:"noopener noreferrer"},"iTunes"),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{className:"App-link",href:"https://open.spotify.com/browse/featured",target:"_blank",rel:"noopener noreferrer"},"Spotify"),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{className:"App-link",href:"https://soundcloud.com/",target:"_blank",rel:"noopener noreferrer"},"SoundCloud"))))}}]),t}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/metronome",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/metronome","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(t,e)})}}()}],[[13,2,1]]]);
//# sourceMappingURL=main.50cc8f44.chunk.js.map