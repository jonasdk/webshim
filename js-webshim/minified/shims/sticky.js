webshim.register("sticky",function(a,b,c,d,e,f){"use strict";function g(a,b,c){var e=a+":",f=d.createElement("test"),g=f.style;return g.cssText=c?e+b:e+["-webkit-","-moz-","-ms-","-o-",""].join(b+";"+e)+b+";",g[a]}function h(){return{top:a.css(this,"top"),bottom:a.css(this,"bottom")}}function i(b){k++,l++,this.evtid=".wsstickyid"+k,this.$el=a(b).data("wsSticky",this),this.isTable=this.$el.is("thead, tbody, tfoot"),this.$parent=this.$el.parent(),this.elStyle=b.style,this.ankered="",this.isSticky=!1,this.$placeholder=null,this.stickyData={inline:{}},this.parentData={},this.addEvents(),this.update(!0)}function j(b){k++,l++,this.evtid=".wsstickyid"+k,this.$el=a(b).data("wsSticky",this),this.isTable=this.$el.is("thead, tbody, tfoot"),this.$parent=this.$el.parent(),this.elStyle=b.style,this.ankered="",this.isSticky=!1,this.$placeholder=null,this.stickyData={inline:{}},this.parentData={},this.addEvents(),this.update(!0)}var k=0,l=0,m=a(c),n=function(){var a,b="pageYOffset";return b in c?function(){return c[b]}:(a=d.documentElement,function(){return a.scrollTop})}(),o="ontouchstart"in c||c.matchMedia("(max-device-width: 721px)").matches,p={fixed:g("position","fixed",!0),sticky:g("position","sticky")},q={getPosition:function(){this.isSticky||(this.position={top:this.$el.css("top"),bottom:this.$el.css("bottom")},("auto"!=this.position.top&&"auto"!=this.position.bottom||"auto"==this.position.top&&"auto"==this.position.bottom)&&"static"==this.$el.css("position")&&(this.position=a.swap(this.$el[0],{position:"absolute"},h)),"auto"!==this.position.top?(delete this.position.bottom,this.ankered="top"):"auto"!==this.position.bottom&&(delete this.position.top,this.ankered="bottom"),"top"==this.ankered?this.position.top=parseFloat(this.position.top,10)||0:"bottom"==this.ankered&&(this.position.bottom=parseFloat(this.position.bottom,10)||0))},update:function(a){!this.disabled&&this.$el[0].offsetWidth&&(a&&(this.isSticky&&this.removeSticky(),this.getPosition()),this.updateDimension())},setTdWidth:function(){this.isTable&&this.$el.find("td, th").each(this._setInlineWidth)},_setInlineWidth:function(){a.data(this,"inlineWidth",this.style.width),a(this).innerWidth(parseInt(a(this).innerWidth(),10))},_restoreInlineWidth:function(){this.style.width=a.data(this,"inlineWidth")||"",a.removeData(this,"inlineWidth")},removeSticky:function(){this.$el.removeClass("ws-sticky-on"),this.$el.css(this.stickyData.inline),this.$placeholder.detach(),this.isSticky=!1,this.isTable&&this.$el.find("td, th").each(this._restoreInlineWidth)},commonAddEvents:function(){var b,e=this,f=function(){e.update()},g=this.$el.data("stickymedia"),h=c.matchMedia&&g?matchMedia(g):!1;m.one("load",f),a(d).on("updateshadowdom"+this.evtid,f),this.$el.on("updatesticky"+this.evtid,function(){e.update(!0)}),this.$el.on("disablesticky"+this.evtid,function(){e.disable(!0)}),this.$el.on("enablesticky"+this.evtid,function(){e.disable(!1)}),h&&h.addListener&&(b=function(){e.disable(!h.matches)},h.addListener(b),b())},disable:function(a){return arguments.length?void(this.disabled!=a&&(this.disabled=!!a,this.disabled?this.isSticky&&this.removeSticky():this.update(!0))):this.disabled}};if(!o||"disable"!=f.touchStrategy){a.extend(i.prototype,q,{addEvents:function(){var a=this;this.commonAddEvents(),m.on("scroll"+this.evtid,function(){!a.disabled&&a.ankered&&a.$el[0].offsetWidth&&a.updatePos()})},getStickyData:function(){this.stickyData.top=this.$el.offset().top,this.stickyData.scrollTop=this.stickyData.top-(parseFloat(this.$el.css("marginTop"),10)||0),this.stickyData.outerHeight=this.$el.outerHeight(!0),this.stickyData.bottom=this.stickyData.top+this.stickyData.outerHeight-(parseFloat(this.$el.css("marginTop"),10)||0),this.stickyData.width=this.$el.width(),this.stickyData.outerWidth=this.$el.outerWidth(),this.stickyData.inline.width=this.elStyle.width,"top"==this.ankered?this.stickyData.inline.top=this.elStyle.top:"bottom"==this.ankered&&(this.stickyData.inline.bottom=this.elStyle.bottom)},getParentData:function(){this.parentData.top=this.$parent.offset().top+(parseFloat(this.$parent.css("borderTopWidth"),10)||0)+(parseFloat(this.$parent.css("paddingTop"),10)||0),this.parentData.height=this.$parent.height(),this.parentData.bottom=this.parentData.top+this.parentData.height},updateDimension:function(a){this.isSticky&&this.removeSticky(),this.getParentData(),this.getStickyData(),"bottom"==this.ankered&&(this.viewportBottomAnker=m.height()-this.position.bottom),!a&&this.ankered&&this.updatePos(!0)},updatePos:function(b){var c,e,f,g=n();"top"==this.ankered?(c=g+this.position.top,this.stickyData.scrollTop<c&&g-9<=this.parentData.bottom&&(f=-1*(c+this.stickyData.outerHeight-this.parentData.bottom),e=!0)):"bottom"==this.ankered&&(c=g+this.viewportBottomAnker,this.stickyData.bottom>c&&c+9>=this.parentData.top&&(e=!0,f=c-this.parentData.top-this.stickyData.outerHeight)),e?(this.isSticky||(b||this.updateDimension(!0),this.$placeholder||(this.$placeholder=a(this.isTable?this.$el[0].cloneNode(!0):d.createElement(this.$el[0].nodeName||"div")),this.$placeholder.addClass("ws-fixedsticky-placeholder").removeClass("ws-sticky")),this.setTdWidth(),this.$placeholder.insertAfter(this.$el).outerHeight(this.stickyData.outerHeight).outerWidth(this.stickyData.outerWidth),this.isSticky=!0,this.$el.addClass("ws-sticky-on"),this.isTable||this.stickyData.width==this.$el.width()||this.$el.width(this.stickyData.width)),0>f&&("top"==this.ankered?this.elStyle.top=this.position.top+f+"px":"bottom"==this.ankered&&(this.elStyle.bottom=this.position.bottom+f+"px"))):this.isSticky&&this.removeSticky()}}),a.extend(j.prototype,q,{addEvents:function(){var b=this,c=function(){b.update()};this.$window.on("scroll"+this.evtid,function(){b.ankered&&b.$el[0].offsetWidth&&b.updatePos()}).one("load",c),a(d).on("updateshadowdom"+this.evtid,c),this.$el.on("remove"+this.evtid+" destroysticky"+this.evtid,function(){m.off(b.evtid),a(d).off(b.evtid),b.$el.off(b.evtid),b.$parent.off(b.evtid),b.$el.removeData("wsSticky").removeClass("ws-sticky"),b.$placeholder&&(b.$el.removeClass("ws-sticky-on"),b.$placeholder.remove()),l--}),this.$el.on("updatesticky"+this.evtid,function(){b.update(!0)}),this.$el.on("changesticky"+this.evtid,function(){b.trashPosition(!0)})},getStickyData:function(){this.stickyData.top=this.$el.offset().top,this.stickyData.scrollTop=this.stickyData.top-(parseFloat(this.$el.css("marginTop"),10)||0),this.stickyData.outerHeight=this.$el.outerHeight(!0),this.stickyData.bottom=this.stickyData.top+this.stickyData.outerHeight-(parseFloat(this.$el.css("marginTop"),10)||0),this.stickyData.width=this.$el.width(),this.stickyData.outerWidth=this.$el.outerWidth(),this.stickyData.inline.width=this.elStyle.width,"top"==this.ankered?this.stickyData.inline.top=this.elStyle.top:"bottom"==this.ankered&&(this.stickyData.inline.bottom=this.elStyle.bottom)},getParentData:function(){this.parentData.top=this.$parent.offset().top+(parseFloat(this.$parent.css("borderTopWidth"),10)||0)+(parseFloat(this.$parent.css("paddingTop"),10)||0),this.parentData.height=this.$parent.height(),this.parentData.bottom=this.parentData.top+this.parentData.height},updateDimension:function(a){this.isSticky&&this.removeSticky(),this.getParentData(),this.getStickyData(),"bottom"==this.ankered&&(this.viewportBottomAnker=m.height()-this.position.bottom),a||this.updatePos(!0)},updatePos:function(b){var c,e,f,g=n();"top"==this.ankered?(c=g+this.position.top,this.stickyData.scrollTop<c&&g-9<=this.parentData.bottom&&(f=-1*(c+this.stickyData.outerHeight-this.parentData.bottom),e=!0)):"bottom"==this.ankered&&(c=g+this.viewportBottomAnker,this.stickyData.bottom>c&&c+9>=this.parentData.top&&(e=!0,f=c-this.parentData.top-this.stickyData.outerHeight)),e?(this.isSticky||(b||this.updateDimension(!0),this.$placeholder||(this.$placeholder=a(this.isTable?this.$el[0].cloneNode(!0):d.createElement(this.$el[0].nodeName||"div")),this.$placeholder.addClass("ws-fixedsticky-placeholder").removeClass("ws-sticky")),this.setTdWidth(),this.$placeholder.insertAfter(this.$el).outerHeight(this.stickyData.outerHeight).outerWidth(this.stickyData.outerWidth),this.isSticky=!0,this.$el.addClass("ws-sticky-on"),this.isTable||this.stickyData.width==this.$el.width()||this.$el.width(this.stickyData.width)),0>f&&("top"==this.ankered?this.elStyle.top=this.position.top+f+"px":"bottom"==this.ankered&&(this.elStyle.bottom=this.position.bottom+f+"px"))):this.isSticky&&this.removeSticky()}});var r=function(){r=a.noop,b.ready("WINDOWLOAD",function(){b.loader.loadList(["dom-extend"]),b.ready("dom-extend",function(){b.addShadowDom()})})},s=function(){var c=a.data(this,"wsSticky");if(c)c.disable&&c.disable(!1);else{var d=a(this).parent();a(this).addClass("ws-sticky"),"visible"==(d.css("overflowY")||d.css("overflow")||"visible")?new i(this):b.warn("currently not supported"),r()}};if(!p.sticky&&p.fixed){var t={},u=function(c,d){var e,f,g,h=[];for(t[c]||(t[c]={sels:{},string:"",fn:function(b,d){var e=a(t[c].string,b).add(d.filter(t[c].string));c&&e.data("stickymedia",c),e.each(s)}},f=!0),e=0;e<d.length;e++)t[c].sels[d[e]]||(t[c].sels[d[e]]=!0,h.push(d[e]));(f||h.length)&&(t[c].string=Object.keys(t[c].sels).join(", "),f?a(function(){b.addReady(t[c].fn)}):a.isReady&&(g=a(h.join(", ")),c&&g.data("stickymedia",c),g.each(s)))};if(u("",[".ws-sticky"]),a(d).on("wssticky",function(a){s.call(a.target)}),f.parseCSS)if(c.Polyfill&&Polyfill.prototype&&Polyfill.prototype.doMatched){var v=function(a){var b=a.getSelectors().split(/\,\s*/g),c=a._rule.media&&a._rule.media.length?a.getMedia():"";u(c||"",b)};Polyfill({declarations:["position:sticky"]}).doMatched(function(a){a.each(v)})}else b.warn("Polyfill for CSS polyfilling made easy has to be included")}"complete"==d.readyState&&b.isReady("WINDOWLOAD",!0)}});