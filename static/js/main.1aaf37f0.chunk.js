(this.webpackJsonpmovie_app_reactjs=this.webpackJsonpmovie_app_reactjs||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),i=s.n(n),c=s(13),r=s.n(c),o=s(4),l=s.n(o),m=s(14),d=s(15),j=s(16),u=s(19),v=s(18),p=s(17),_=s.n(p),h=(s(44),function(e){e.id;var t=e.year,s=e.title,n=e.summary,i=e.poster,c=e.genres;return Object(a.jsxs)("div",{className:"movies__movie",children:[Object(a.jsx)("img",{src:i,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("span",{className:"movie__title",children:s}),Object(a.jsxs)("span",{className:"movie__year",children:["(",t,")"]}),Object(a.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(a.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(a.jsx)("p",{className:"movie__summary",children:n.length>350?n.slice(0,350)+"...":n})]})]})}),b=(s(45),s.p+"static/media/loading.42aaa181.jpg"),g=function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0},e.getMovies=Object(m.a)(l.a.mark((function t(){var s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=raiting");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies(),console.log(this.state)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsxs)("div",{className:"loader",children:[Object(a.jsx)("img",{className:"loader__logo",src:b,alt:"Loading"}),Object(a.jsx)("p",{className:"loader__text",children:"Loading ..."})]}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(h,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.1aaf37f0.chunk.js.map