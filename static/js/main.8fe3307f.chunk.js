(window.webpackJsonpmovie_app_2019=window.webpackJsonpmovie_app_2019||[]).push([[0],{23:function(e,a,t){e.exports=t(52)},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(15),i=t.n(s),o=t(4),c=t.n(o),m=t(16),l=t(17),u=t(18),d=t(21),v=t(19),p=t(22),g=t(20),y=t.n(g),_=(t(45),t(2)),f=t.n(_);t(50);function E(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"genres"},i.map(function(e,a){return r.a.createElement("li",{key:a,className:"genres__genres"},e)})),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"...")))}E.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var h=E,b=(t(51),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovies=Object(m.a)(c.a.mark(function e(){var a,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=e.sent,n=a.data.data.movies,t.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}},e)})),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map(function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))}}]),a}(r.a.Component));i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.8fe3307f.chunk.js.map