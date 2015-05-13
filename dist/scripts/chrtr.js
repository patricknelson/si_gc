CHRTR={pie1:"energy_use1",pie2:"energy_use2",positions1:{3:325,2:[430,160],1:[440,242],0:[400,280]},positions2:{3:325,2:[440,175],1:[420,270],0:[373,286]},barLabels:{0:["Salt Lake City, UT",68],1:["Phoenix, AZ",120],2:["San Jose North",86],3:["San Jose South",138],4:["Omaha",188]},tbarLabels:{0:["2014",68],1:["2013",108],2:["2012",148],3:["2014",68],4:["2013",108],5:["2012",148]},fillColors:{4:"#0064d2",3:"#3383db",2:"#66a2e4",1:"#99c1ed",0:"#cce0f6"},redraw:function(t){t.drawChart()},updateChart:function(t,e){t.rows=e},findChart:function(t){return document.getElementById(t)},fixPieLabels:function(){lbls=CHRTR.getLabels(CHRTR.pie1),[].forEach.call(lbls,CHRTR.position1),lbls=CHRTR.getLabels(CHRTR.pie2),[].forEach.call(lbls,CHRTR.position2)},getLabels:function(t){var e=CHRTR.findChart(t);return e.getChartSvg().querySelectorAll("g text")},getSlice:function(t){var e=CHRTR.findChart(t);return e.getChartSvg().querySelectorAll("g")},getHorizontalLabels:function(t){var e=CHRTR.getHorizontal(t),r=$(e[0]).find(">g:last-child  text");return r},getHorizontalBars:function(t,e){var r=CHRTR.getHorizontal(t),n=$(r[0]).find(">g:first-of-type>g rect"),a=[$(n[0]),$(n[1])];return 2==e&&(a[2]=$(n[2])),a},getTrendsLabels:function(){var t=CHRTR.getHorizontal("energy_trends1"),e=CHRTR.getHorizontal("energy_trends2");return[$(t[3]),$(t[6]),$(t[9]),$(e[3]),$(e[6]),$(e[9])]},fixTrendsLabels:function(){var t=CHRTR.getTrendsLabels();t.forEach(function(t){$(t).attr("transform","translate(20,0)")})},getHorizontal:function(t){var e=CHRTR.findChart(t);return e.getChartSvg().querySelectorAll("g:first-of-type")},position1:function(t,e){CHRTR.positionLabels(t,e,CHRTR.positions1)},position2:function(t,e){CHRTR.positionLabels(t,e,CHRTR.positions2)},positionLabels:function(t,e,r){if(t.setAttribute("text-anchor","middle"),3==e)t.setAttribute("x",r[e]);else{{r[e][0]+","+r[e][1]}t.setAttribute("x",r[e][0]),t.setAttribute("y",r[e][1])}},getTrendBars:function(){var t=CHRTR.getTrendBar(1),e=CHRTR.getTrendBar(2);return[t[0],t[1],t[2],e[0],e[1],e[2]]},getTrendBar:function(t){var e=CHRTR.findChart("energy_trends"+t),r=t-1;return e.getChartSvg().querySelectorAll('g[clip-path="url(#_ABSTRACT_RENDERER_ID_'+r+')"] > g:first-child rect')},legendHover:function(t){CHRTR.resetSliceFill();var e=t.siblings().length,r=e-t.index();pie1=CHRTR.getSlice(CHRTR.pie1),[].forEach.call(pie1,function(t,e){e!=r&&$(t).find("path").attr("fill","rgba(204, 204, 204, 0.76)")}),pie2=CHRTR.getSlice(CHRTR.pie2),[].forEach.call(pie2,function(t,e){e!=r&&$(t).find("path").attr("fill","rgba(204, 204, 204, 0.76)")})},resetSliceFill:function(){var t=CHRTR.getSlice(CHRTR.pie1),e=CHRTR.getSlice(CHRTR.pie2);[].forEach.call(t,function(t,e){$(t).find("path").attr("fill",CHRTR.fillColors[e])}),[].forEach.call(e,function(t,e){$(t).find("path").attr("fill",CHRTR.fillColors[e])})},positionHorizontalLabels:function(){var t=$.merge(CHRTR.getHorizontalLabels("water1"),CHRTR.getHorizontalLabels("water2"));t.each(function(t,e){(0==t||1==t)&&$(e).attr("x","353"),$(e).attr("transform","translate(15,0)")})},createBarLabel:function(){var t=CHRTR.getHorizontalBars("water1").concat(CHRTR.getHorizontalBars("water2",2));t.forEach(function(t,e){0==e&&$(t).attr("width","250");var r=CHRTR.buildLabelSvg(CHRTR.barLabels[e][0],CHRTR.barLabels[e][1]);$(t).after(r)})},createTrendsLabels:function(){var t=CHRTR.getTrendBars();t.forEach(function(t,e){var r=CHRTR.buildLabelSvg(CHRTR.tbarLabels[e][0],CHRTR.tbarLabels[e][1],"170");$(t).after(r)})},buildLabelSvg:function(t,e,r){r="undefined"==typeof r?"190":r;var n=document.createElementNS("http://www.w3.org/2000/svg","text"),a=["y","x","text-anchor","fill","font-size"],i=[e,r,"start","#fff","17px"];CHRTR.setAllAttributes(n,a,i);var l=document.createTextNode(t);return n.appendChild(l),n},setAllAttributes:function(t,e,r){e.forEach(function(e,n){t.setAttribute(e,r[n])})}};