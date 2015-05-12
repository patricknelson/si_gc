CHRTR = {
          pie1: 'energy_use1',
          pie2: 'energy_use2',
          positions1:{
            3:325,
            2:[430,160],
            1:[440,242],
            0:[400,280]
          },
          positions2:{
            3:325,
            2:[440,175],
            1:[420,270],
            0:[373,286]
          },
          barLabels:{
            //set 1
            0:['Salt Lake City, UT',68],
            1:['Phoenix, AZ',120],
            //set 2
            2:['San Jose North',86],
            3:['San Jose South',138],
            4:['Omaha',188]
          },
          tbarLabels:{
            //set 1
            0:['2014',68],
            1:['2013',108],
            2:['2012',148],
            //set 2
            3:['2014',68],
            4:['2013',108],
            5:['2012',148]
          },
          fillColors:{
            4:"#0064d2",
            3:"#3383db",
            2:"#66a2e4",
            1:"#99c1ed",
            0:"#cce0f6"
          },
          redraw :function (chrt){
            chrt.drawChart();
          },
          updateChart:function(chrt,rows){
            chrt.rows = rows;
          },
          findChart:function(id){
            return document.getElementById(id)
          },
          fixPieLabels:function()
          {
            lbls = CHRTR.getLabels(CHRTR.pie1);
            [].forEach.call(lbls, CHRTR.position1);
            lbls = CHRTR.getLabels(CHRTR.pie2);
            [].forEach.call(lbls, CHRTR.position2);
          },
          getLabels:function(id){
            var chrt = CHRTR.findChart(id);
            return chrt.getChartSvg().querySelectorAll('g text');
          },
          getSlice:function(id){
            var chrt = CHRTR.findChart(id);
            return chrt.getChartSvg().querySelectorAll('g');
          },
          getHorizontalLabels:function(id){
            //var chrt = CHRTR.findChart(id);
            var gs = CHRTR.getHorizontal(id);//chrt.getChartSvg().querySelectorAll('g:first-of-type');
            var lbls = $(gs[0]).find('>g:last-child  text');
            return lbls;
          },
          getHorizontalBars:function(id,num){
            var gs = CHRTR.getHorizontal(id);
            var bars = $(gs[0]).find('>g:first-of-type>g rect');
            var bars1 = [$(bars[0]),$(bars[1])] ;
            if (num == 2) {
              bars1[2] = $(bars[2]);
            }
            return bars1;
          },
          getTrendsLabels:function()
          {
            var t1 = CHRTR.getHorizontal('energy_trends1');
            var t2 = CHRTR.getHorizontal('energy_trends2');
            return [$(t1[3]),$(t1[6]),$(t1[9]),$(t2[3]),$(t2[6]),$(t2[9])];
          },
          fixTrendsLabels:function(){
            var lbls = CHRTR.getTrendsLabels();
            lbls.forEach(function(el,i){
              $(el).attr('transform','translate(20,0)');
            });
          },
          getHorizontal:function(id){
            var chrt = CHRTR.findChart(id);
            return  chrt.getChartSvg().querySelectorAll('g:first-of-type');
          },
          position1:function(lbl,i){
            CHRTR.positionLabels(lbl,i,CHRTR.positions1);
          },
          position2:function(lbl,i){
            CHRTR.positionLabels(lbl,i,CHRTR.positions2);  
          },
          positionLabels:function(lbl,i,data){
            lbl.setAttribute('text-anchor','middle');
            if(i == 3){
              lbl.setAttribute("x",data[i]);
            }else{
              var trans = data[i][0]+','+data[i][1];
              lbl.setAttribute("x",data[i][0]);
              lbl.setAttribute("y",data[i][1]);
            }
          },
          getTrendBars:function(){
            var t1 = CHRTR.getTrendBar(1);
            var t2 = CHRTR.getTrendBar(2);
            return  [t1[0],t1[1],t1[2],t2[0],t2[1],t2[2]];
          },
          getTrendBar:function(num){
            var chrt = CHRTR.findChart('energy_trends'+num);
            var id = num-1;
            return chrt.getChartSvg().querySelectorAll('g[clip-path="url(#_ABSTRACT_RENDERER_ID_'+id+')"] > g:first-child rect');
          },
          legendHover:function(el){
            CHRTR.resetSliceFill();
            var slices = el.siblings().length;
            var chrtSlice = slices - el.index();
            pie1 = CHRTR.getSlice(CHRTR.pie1);
            [].forEach.call(pie1, function(el,i){
              if(i != chrtSlice){
                $(el).find('path').attr('fill','rgba(204, 204, 204, 0.76)');
              }
            });
            pie2 = CHRTR.getSlice(CHRTR.pie2);
            [].forEach.call(pie2, function(el,i){
              if(i != chrtSlice){
                $(el).find('path').attr('fill','rgba(204, 204, 204, 0.76)');
              }
            });
          },
          resetSliceFill:function(){
            var pie1 = CHRTR.getSlice(CHRTR.pie1);
            var pie2 = CHRTR.getSlice(CHRTR.pie2);
            [].forEach.call(pie1,function(el,i){
              $(el).find('path').attr('fill',CHRTR.fillColors[i]);
            });
            [].forEach.call(pie2,function(el,i){
              $(el).find('path').attr('fill',CHRTR.fillColors[i]);
            });
          },
          positionHorizontalLabels:function(){
            var lbls = $.merge(CHRTR.getHorizontalLabels('water1'),CHRTR.getHorizontalLabels('water2'));
            lbls.each(function(i,el){
              if(i == 0 || i== 1) $(el).attr('x','353'); //FORCE FURTHER RIGHT ON FIRST ONE
                $(el).attr('transform','translate(15,0)');
            });
          },
          createBarLabel:function(){
            var bars = CHRTR.getHorizontalBars('water1').concat(CHRTR.getHorizontalBars('water2',2));
            bars.forEach(function(el,i){
              if(i == 0) $(el).attr('width','250'); //FORCE LONGER ON FIRST ONE
              var txt= CHRTR.buildLabelSvg(CHRTR.barLabels[i][0],CHRTR.barLabels[i][1]);
              $(el).after(txt);
            });
          },
          createTrendsLabels:function()
          {
            var bars = CHRTR.getTrendBars();
            bars.forEach(function(el,i){
              var txt= CHRTR.buildLabelSvg(CHRTR.tbarLabels[i][0],CHRTR.tbarLabels[i][1],"170");
              $(el).after(txt);
            });
          },
          buildLabelSvg:function (txt,posy,posx)
          {
             posx = (typeof posx === 'undefined') ? "190" : posx;//164
             var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
             var attrs = ["y","x","text-anchor","fill","font-size"];
             var avals = [posy,posx,"start","#fff","17px"];
             CHRTR.setAllAttributes(text,attrs,avals);
             var node = document.createTextNode(txt);
             text.appendChild(node);
             return text;
          },
          setAllAttributes:function(el,attrs,avals){
            attrs.forEach(function(attr,i){
              el.setAttribute(attr,avals[i]);
            });
            //return el;
          }
        }