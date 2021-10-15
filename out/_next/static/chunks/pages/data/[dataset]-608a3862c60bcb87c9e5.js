(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{5020:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return B},default:function(){return q}});var n=a(219),i=a(266),r=a(2809),o=a(809),s=a.n(o),l=a(7294),c=a(1664),d=a(9008),m=a(9920),h=a(1120),u=a(3457),p=a(1543),g=a(1843),f=a(3154),b=a(9702),y=a(1576),v=a(8920),w=a(871),x=a(5893),_=(0,h.Z)((function(e){var t;return{chartContainer:(t={display:"flex",position:"relative",height:"60vh",width:"65vw",maxWidth:1e3,padding:"1rem 2rem"},(0,r.Z)(t,e.breakpoints.down("md"),{height:"65vh",width:"100vw",margin:0,padding:"1rem"}),(0,r.Z)(t,"@media (max-width: 700px) and (orientation: portrait)",{height:"40vh"}),(0,r.Z)(t,"@media (max-width: 1000px) and (orientation: landscape)",{height:"85vh"}),(0,r.Z)(t,"@media (max-width: 410px) and (orientation: portrait)",{height:"35vh"}),(0,r.Z)(t,"@media (max-width: 410px) and (orientation: landscape)",{height:"90vh"}),t)}})),k=function(e){var t=e.displayData,a=e.label,n=e.grad,i=(0,v.Z)(),r=_(),o={responsive:!0,maintainAspectRatio:!1,legend:{display:!(0,u.Z)("(max-width:600px)")},redraw:!0,interaction:{mode:"index",intersect:!1}};return(0,x.jsx)("div",{className:r.chartContainer,children:(0,x.jsx)(w.x1,{data:function(e){var r=e.getContext("2d").createLinearGradient(0,500,0,100);return r.addColorStop(0,i.palette.gradient[n][0]),r.addColorStop(.3,i.palette.gradient[n][1]),r.addColorStop(.6,i.palette.gradient[n][2]),r.addColorStop(1,i.palette.gradient[n][3]),{labels:t.labels,datasets:[{label:a,fill:!0,data:t.values,backgroundColor:r,borderColor:i.palette.gradient[n][4],borderWidth:1,pointBorderColor:"rgba(0,0,0,0)",pointBackgroundColor:"rgba(0,0,0,0)",lineTension:0}]}},options:o})})},j=a(9322),O=a.n(j),S=function(e){var t=e.activeData,a=e.updateActiveValues,n=(0,l.useState)({min:0,max:t.labels.length-1}),i=n[0],r=n[1],o=t.labels.length-1;(0,l.useEffect)((function(){a(i)}),[i]),(0,l.useEffect)((function(){r({min:0,max:t.labels.length-1})}),[t]);return(0,x.jsx)("div",{className:"slidercontainer",children:(0,x.jsx)("div",{className:"slider",children:(0,x.jsx)(O(),{maxValue:o,minValue:0,draggableTrack:!0,formatLabel:function(e){if("undefined"===typeof e)return"";var a=t.labels[e]||t.labels[e-1]||"";return 2===a.split(".").length&&(a=a.split(".")[0]),"".concat(a)},value:i,onChange:function(e){return function(e){e.min<0?e.min=0:e.max>o&&(e.max=o),r(e)}(e)}})})})};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=(0,h.Z)((function(e){var t,a,n;return{contentContainer:{display:"flex",flexDirection:"column"},title:(t={padding:"5rem",fontFamily:"Poppins",paddingBottom:"1rem",fontWeight:300,color:e.palette.text.primary,fontSize:"1.6rem"},(0,r.Z)(t,e.breakpoints.down("md"),{padding:"3rem",paddingBottom:0,paddingLeft:36}),(0,r.Z)(t,e.breakpoints.down("sm"),{fontSize:"1.2rem",padding:"2rem 2rem 0"}),(0,r.Z)(t,e.breakpoints.down("xs"),{fontSize:"1rem",padding:"2rem 1.5rem 0"}),t),sliderLabel:(a={padding:"0rem 3rem 0.5rem 5rem",fontFamily:"Poppins",fontWeight:400,color:e.palette.text.primary,fontSize:"1rem"},(0,r.Z)(a,e.breakpoints.down("md"),{padding:"0rem 3rem 1rem 3rem",paddingLeft:36,fontSize:".9rem"}),(0,r.Z)(a,e.breakpoints.down("sm"),{paddingRight:"1rem",fontSize:".8rem"}),a),description:A(A(A({},e.typography.pop),e.utils.p),{},(n={color:e.palette.text.primary,fontSize:"1.2rem",padding:"2rem 4rem 4rem"},(0,r.Z)(n,e.breakpoints.down("md"),{padding:"2rem 2rem 0",fontSize:"1.1rem"}),(0,r.Z)(n,e.breakpoints.down("xs"),{padding:"1rem 1.5rem 0",fontSize:"1rem",lineHeight:1.3}),n))}})),N=function(e){var t=e.activeData,a=e.gradient,n=I(),i=(0,l.useState)({}),r=i[0],o=i[1],s=t.labels,c=t.values;return(0,x.jsxs)("div",{className:n.contentContainer,children:[(0,x.jsx)("div",{className:n.title,children:t.title}),(0,x.jsx)(k,{displayData:r,label:t.title,grad:a}),(0,x.jsx)("div",{className:n.sliderLabel,children:"Data scope:"}),(0,x.jsx)(S,{activeData:t,updateActiveValues:function(e){var t=s.slice(e.min,e.max+1),a=c.slice(e.min,e.max+1);o({labels:t,values:a})},style:{passive:"false"}}),(0,x.jsx)("div",{className:n.description,children:t.description})]})};function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=(0,a(115).Z)((function(e){var t,a;return{container:(t={padding:"0 4rem 8rem"},(0,r.Z)(t,e.breakpoints.down("md"),{padding:"0 2rem"}),(0,r.Z)(t,e.breakpoints.down("xs"),{padding:"0 1.5rem"}),t),para:P(P({},e.utils.p),{},(a={color:e.palette.text.secondary,maxWidth:"auto",padding:"0 4rem 0 0",marginBottom:"2rem"},(0,r.Z)(a,e.breakpoints.down("md"),{padding:0}),(0,r.Z)(a,e.breakpoints.down("sm"),{fontSize:"1rem",lineHeight:1.5,fontWeight:200,marginBlock:"1.5rem"}),a))}})),D=function(e){var t=e.desc,a=e.link,n=T();return(0,x.jsxs)("div",{className:n.container,children:[t&&t.map((function(e,t){return(0,x.jsx)("p",{className:n.para,children:e})})),(0,x.jsx)("p",{className:n.source,children:(0,x.jsx)("a",{href:a,target:"_blank",children:"Read more"})})]})},E=a(3106),M=a(3758),z=a(8634),L=(0,h.Z)((function(e){return{root:(0,r.Z)({position:"fixed",right:"2rem",bottom:"2rem","& > *":{margin:e.spacing(1)}},e.breakpoints.down("xs"),{right:"0.5rem",bottom:"0.5rem"}),extendedIcon:{marginRight:e.spacing(1)}}})),G=function(e){var t=e.cb,a=L();return(0,x.jsx)("div",{className:a.root,onClick:t,children:(0,x.jsx)(M.Z,{color:"secondary","aria-label":"add",children:(0,x.jsx)(z.Z,{style:{color:"white"}})})})},W=["in","children","onEnter","onExited"];function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=(0,h.Z)((function(e){var t,a;return{container:R(R({},e.utils.container),{},(0,r.Z)({display:"flex",justifyContent:"flex-start",marginTop:"4rem"},e.breakpoints.down("md"),{marginTop:0})),drawer:(0,r.Z)({minWidth:"360px",height:"100%",overflow:"auto",background:"white"},e.breakpoints.down("md"),{minWidth:"max-content",maxWidth:"90%",height:"auto",maxHeight:"calc(86vh - 80px)",overflowY:"auto",borderRadius:4,boxShadow:e.shadows[5]}),list:(t={marginTop:"3.5rem",marginBottom:"10rem",listStyle:"none",fontWeight:400},(0,r.Z)(t,e.breakpoints.down("md"),{margin:0,padding:"2rem 1.5rem"}),(0,r.Z)(t,e.breakpoints.down("xs"),{margin:0,padding:"2rem 1rem"}),t),listItem:(a={border:"1px solid transparent",borderRadius:4,display:"flex",color:e.palette.text.primary,fontSize:"1rem",margin:".5rem 0",padding:"0.8rem",paddingLeft:"2rem",cursor:"pointer","&:hover":{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),borderRadius:4}},(0,r.Z)(a,e.breakpoints.down("md"),{border:"1px solid #f3f3f3",padding:"0.7rem 1.5rem",fontSize:"0.9rem",margin:".4rem 0"}),(0,r.Z)(a,e.breakpoints.down("xs"),{padding:"0.6rem 1rem",fontSize:"0.85rem"}),a),listItemActive:(0,r.Z)({borderRadius:4,display:"flex",border:"1px solid ".concat(e.palette.secondary.main),color:e.palette.secondary.main,fontSize:"1rem",margin:".5rem 0",padding:"0.8rem",paddingLeft:"2rem",cursor:"pointer","&:hover":{cursor:"default",borderRadius:4}},e.breakpoints.down("md"),{padding:"0.7rem 1.5rem",fontSize:"0.9rem",margin:".4rem 0"}),content:{fontSize:"2rem",padding:"3rem"},link:{textDecoration:"none"},backIcon:{paddingInline:"0.2rem",marginRight:"1rem"},modal:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"calc(80px + 7vh)",paddingBottom:"7vh"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),margin:"7%",maxHeight:"80%",overflowY:"auto"}}})),B=!0,q=function(e){var t=e.dataset,a=(0,l.useState)(y.D[t].scopes[0]),r=a[0],o=a[1],h=(0,l.useState)(0),v=h[0],w=h[1],_=(0,l.useState)(!1),k=_[0],j=_[1],O=(0,l.useState)(!1),S=O[0],C=O[1],A=H(),I=(0,u.Z)("(max-width:1000px)");(0,l.useEffect)((function(){Z(y.D[t].scopes[0].endpoint),w(0)}),[t]);var Z=function(){var e=(0,i.Z)(s().mark((function e(t){var a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,fetch("/api/v1/chartdata/".concat(t));case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,o(n.data),j(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){window.scrollTo({top:0,behavior:"smooth"})},T=function(){C(!1)},M=l.forwardRef((function(e,t){var a=e.in,i=e.children,r=e.onEnter,o=e.onExited,s=(0,n.Z)(e,W),l=(0,m.useSpring)({from:{opacity:0},to:{opacity:a?1:0},onStart:function(){a&&r&&r()},onRest:function(){!a&&o&&o()}});return(0,x.jsx)(m.animated.div,R(R({ref:t,style:l},s),{},{children:i}))}));return(0,x.jsxs)(l.Fragment,{children:[(0,x.jsxs)(d.default,{children:[(0,x.jsx)("title",{children:"".concat(y.D[t].header," | Climate Monitor")},"title"),(0,x.jsx)("meta",{name:"description",content:"".concat(y.D[t].header,", ").concat(y.D[t].title,", Climate Monitor - free public REST API with json data on climate change")},"description")]}),(0,x.jsxs)("div",{className:A.container,children:[(0,x.jsx)(p.Z,{mdDown:!0,children:(0,x.jsx)("div",{className:A.drawer,children:(0,x.jsxs)("div",{className:A.list,children:[(0,x.jsx)(c.default,{href:"/data",className:A.link,children:(0,x.jsxs)("div",{className:A.listItem,children:[(0,x.jsx)(g.Z,{className:A.backIcon}),"all data"]})}),y.D[t].scopes&&y.D[t].scopes.map((function(e,t){return(0,x.jsx)("div",{className:t===v?A.listItemActive:A.listItem,onClick:function(){Z(e.endpoint),w(t),P()},children:e.title},e.title)}))]})})}),(0,x.jsxs)("div",{children:[k||!r.labels?(0,x.jsx)("div",{style:{width:"100%",marginTop:"7rem",marginBottom:"40vh"},children:(0,x.jsx)(E.Z,{})}):(0,x.jsx)(N,{activeData:r,gradient:y.D[t].gradient}),(0,x.jsx)(D,{desc:y.D[t].desc,link:y.D[t].sourceLink})]})]}),I&&(0,x.jsx)(G,{className:A.float,cb:function(){C(!0)}}),S&&(0,x.jsx)(f.Z,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:A.modal,open:S,onClose:T,closeAfterTransition:!0,BackdropComponent:b.Z,BackdropProps:{timeout:500},children:(0,x.jsx)(M,{in:S,children:(0,x.jsx)("div",{className:A.drawer,children:(0,x.jsxs)("div",{className:A.list,children:[(0,x.jsx)(c.default,{href:"/data",className:A.link,children:(0,x.jsxs)("div",{className:A.listItem,onClick:T,children:[(0,x.jsx)(g.Z,{className:A.backIcon}),"all data"]})}),y.D[t].scopes&&y.D[t].scopes.map((function(e,t){return(0,x.jsx)("div",{className:t===v?A.listItemActive:A.listItem,onClick:function(){Z(e.endpoint),w(t),P(),T()},children:e.title},e.title)}))]})})})})]})}},1576:function(e,t){t.D={co2:{header:"Carbon dioxide CO2",scopes:[{title:"Annual CO2 Mauna Loa",endpoint:"annual_co2_ml"},{title:"Annual CO2 Global",endpoint:"annual_co2_gl"},{title:"CO2 increase Mauna Loa",endpoint:"annual_co2_increase_ml"},{title:"CO2 increase Global",endpoint:"annual_co2_increase_gl"},{title:"Monthly CO2 Mauna Loa",endpoint:"monthly_co2_ml"},{title:"Monthly CO2 Global",endpoint:"monthly_co2_gl"},{title:"Weekly CO2 Mauna Loa",endpoint:"weekly_co2"},{title:"Daily CO2 Mauna Loa",endpoint:"daily_co2"}],desc:["Carbon dioxide is a greenhouse gas: a gas that absorbs and radiates heat. Warmed by sunlight, Earth\u2019s land and ocean surfaces continuously radiate thermal infrared energy (heat). Unlike oxygen or nitrogen (which make up most of our atmosphere), greenhouse gases absorb that heat and release it gradually over time, like bricks in a fireplace after the fire goes out. Without this natural greenhouse effect, Earth\u2019s average annual temperature would be below freezing instead of close to 60\xb0F. But increases in greenhouse gases have tipped the Earth's energy budget out of balance, trapping additional heat and raising Earth's average temperature.","Carbon dioxide is the most important of Earth\u2019s long-lived greenhouse gases. It absorbs less heat per molecule than the greenhouse gases methane or nitrous oxide, but it\u2019s more abundant and it stays in the atmosphere much longer. Increases in atmospheric carbon dioxide are responsible for about two-thirds of the total energy imbalance that is causing Earth's temperature to rise.","Another reason carbon dioxide is important in the Earth system is that it dissolves into the ocean like the fizz in a can of soda. It reacts with water molecules, producing carbonic acid and lowering the ocean's pH. Since the start of the Industrial Revolution, the pH of the ocean's surface waters has dropped from 8.21 to 8.10. This drop in pH is called ocean acidification.","A drop of 0.1 may not seem like a lot, but the pH scale is logarithmic; a 1-unit drop in pH means a tenfold increase in acidity. A change of 0.1 means a roughly 30% increase in acidity. Increasing acidity interferes with the ability of marine life to extract calcium from the water to build their shells and skeletons."],gradient:"co2",sourceLink:"https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide"},ch4:{header:"Methane CH4",scopes:[{title:"Annual CH4",endpoint:"annual_ch4_gl"},{title:"Annual CH4 growth rate",endpoint:"annual_ch4_gr_gl"},{title:"Monthly CH4",endpoint:"monthly_ch4_gl"}],desc:["Methane in the Earth's atmosphere is a strong greenhouse gas with a global warming potential (GWP) 84 times greater than CO2 in a 20-year time frame; methane is not as persistent a gas as CO2 (assuming no change in carbon sequestration rates) and tails off to about GWP of 28 for a 100-year time frame. This means that a methane emission is projected to have 28 times the impact on temperature of a carbon dioxide emission of the same mass over the following 100 years assuming no change in the rates of carbon sequestration. Methane has a large effect but for a relatively brief period, having an estimated mean half-life of 9.1 years in the atmosphere, whereas carbon dioxide is currently given an estimated mean lifetime of over 100 years.","The balance between sources and sinks of methane is not yet fully understood. The IPCC Working Group I stated in chapter 2 of the Fourth Assessment Report that there are large uncertainties in the current bottom-up estimates of components of the global source, and the balance between sources and sinks is not yet well known. The most important sink in the methane cycle is reaction with the hydroxyl radical, which is produced photochemically in the atmosphere. Production of this radical is not fully understood and has a large effect on atmospheric concentrations. This uncertainty is exemplified by observations that have shown between the year 2000 and 2006 increases in atmospheric concentration of methane ceased, for reasons still being investigated.","Any process that results in the production of methane and its release into the atmosphere can be considered a 'source'. The two main processes that are responsible for methane production occur as a result of microorganisms anaerobically converting organic compounds into methane. Slightly over half of the total emission is due to human activity. Since the Industrial Revolution humans have had a major impact on concentrations of atmospheric methane, increasing atmospheric concentrations roughly 250%. According to the 2021 IPCC report, 30 - 50 percent of the current rise in temperatures is caused by emissions of methane, and reducing methane is a fast way of climate change mitigation."],gradient:"ch4",sourceLink:"https://en.wikipedia.org/wiki/Atmospheric_methane#Emissions_accounting_of_methane"},sf6:{header:"Sulfur hexafluoride SF6",scopes:[{title:"Annual SF6",endpoint:"annual_sf6_gl"},{title:"Annual SF6 growth rate",endpoint:"annual_sf6_gr_gl"},{title:"Monthly SF6",endpoint:"monthly_sf6_gl"}],desc:["According to the Intergovernmental Panel on Climate Change, SF6 is the most potent greenhouse gas that has been evaluated, with a global warming potential of 23,900 times that of CO2 when compared over a 100-year period. Sulfur hexafluoride is inert in the troposphere and stratosphere and is extremely long-lived, with an estimated atmospheric lifetime of 800\u20133,200 years.","Measurements of SF6 show that its global average mixing ratio has increased from a steady base of about 54 parts per quadrillion prior to industrialization, to over 10 parts per trillion (ppt) as of April 2020, and is increasing by about 0.35 ppt (3.5 percent) per year. Average global SF6 concentrations increased by about seven percent per year during the 1980s and 1990s, mostly as the result of its use in magnesium production, and by electrical utilities and electronics manufacturers. Given the small amounts of SF6 released compared to carbon dioxide, its overall individual contribution to global warming is estimated to be less than 0.2 percent, however the collective contribution of it and similar man-made halogenated gases has reached about 10 percent as of year 2020. Alternatives are being tested."],gradient:"sf6",sourceLink:"https://en.wikipedia.org/wiki/Sulfur_hexafluoride"},n2o:{header:"Dinitrogen oxide N2O",scopes:[{title:"Annual N2O",endpoint:"annual_n2o_gl"},{title:"Annual N2O growth rate",endpoint:"annual_n2o_gr_gl"},{title:"Monthly N2O",endpoint:"monthly_n2o_gl"}],desc:["Nitrous oxide (dinitrogen monoxide) has significant global warming potential as a greenhouse gas. On a per-molecule basis, considered over a 100-year period, nitrous oxide has 265 times the atmospheric heat-trapping ability of carbon dioxide (CO2). However, because of its low concentration (less than 1/1,000 of that of CO2), its contribution to the greenhouse effect is less than one third that of carbon dioxide, and also less than water vapour and methane. On the other hand, since 38% or more of the N2O entering the atmosphere is the result of human activity, control of nitrous oxide is considered part of efforts to curb greenhouse gas emissions.","Nitrous oxide is released into the atmosphere through agriculture, when farmers add nitrogen-based fertilizers onto the fields, through the breakdown of animal manure. Approximately 79 percent of all nitrous oxide released in the United States came from nitrogen fertilization. Nitrous oxide is also released as a by-product of burning fossil fuel, though the amount released depends on which fuel was used. It is also emitted through the manufacture of nitric acid, which is used in the synthesis of nitrogen fertilizers. The production of adipic acid, a precursor to nylon and other synthetic clothing fibres, also releases nitrous oxide. The total amount of nitrous oxide released that is of human origins is about 40 percent.","Nitrous oxide has also been implicated in thinning the ozone layer. A 2009 study suggested that N2O emission was the single most important ozone-depleting emission and it was expected to remain the largest throughout the 21st century."],gradient:"n2o",sourceLink:"https://en.wikipedia.org/wiki/Nitrous_oxide"},temperatures:{header:"Temperatures",scopes:[{title:"Annual land average",endpoint:"annual_land_temp_avg"},{title:"Annual land maximum",endpoint:"annual_land_temp_max"},{title:"Annual land minimum",endpoint:"annual_land_temp_min"},{title:"Annual land anomaly average",endpoint:"annual_land_temp_anomaly_avg"},{title:"Annual land anomaly maximum",endpoint:"annual_land_temp_anomaly_max"},{title:"Annual land anomaly minimum",endpoint:"annual_land_temp_anomaly_min"},{title:"Annual land and ocean",endpoint:"annual_loc_temp"},{title:"Annual land and ocean anomaly",endpoint:"annual_loc_temp_anomaly"},{title:"Monthly land average",endpoint:"monthly_land_temp_avg"},{title:"Monthly land maximum",endpoint:"monthly_land_temp_max"},{title:"Monthly land minimum",endpoint:"monthly_land_temp_min"},{title:"Monthly land anomaly average",endpoint:"monthly_land_temp_anomaly_avg"},{title:"Monthly land anomaly maximum",endpoint:"monthly_land_temp_anomaly_max"},{title:"Monthly land anomaly minimum",endpoint:"monthly_land_temp_anomaly_min"},{title:"Monthly land and ocean",endpoint:"monthly_loc_temp"},{title:"Monthly land and ocean anomaly",endpoint:"monthly_loc_temp_anomaly"}],desc:["The largest driver of warming is the emission of gases that create a greenhouse effect, of which more than 90% are carbon dioxide (CO2) and methane. Fossil fuel burning (coal, oil, and natural gas) for energy consumption is the main source of these emissions, with additional contributions from agriculture, deforestation, and manufacturing. The human cause of climate change is not disputed by any scientific body of national or international standing. Temperature rise is accelerated or tempered by climate feedbacks, such as loss of sunlight-reflecting snow and ice cover, increased water vapour (a greenhouse gas itself), and changes to land and ocean carbon sinks.","Temperature rise on land is about twice the global average increase, leading to desert expansion and more common heat waves and wildfires. Temperature rise is also amplified in the Arctic, where it has contributed to melting permafrost, glacial retreat and sea ice loss. Warmer temperatures are increasing rates of evaporation, causing more intense storms and weather extremes. Impacts on ecosystems include the relocation or extinction of many species as their environment changes, most immediately in coral reefs, mountains, and the Arctic. Climate change threatens people with food insecurity, water scarcity, flooding, infectious diseases, extreme heat, economic losses, and displacement. These human impacts have led the World Health Organization to call climate change the greatest threat to global health in the 21st century. Even if efforts to minimise future warming are successful, some effects will continue for centuries, including rising sea levels, rising ocean temperatures, and ocean acidification.","Many of these impacts are already felt at the current level of warming, which is about 1.2 \xb0C (2.2 \xb0F). The Intergovernmental Panel on Climate Change has issued a series of reports that project significant increases in these impacts as warming continues to 1.5 \xb0C (2.7 \xb0F) and beyond. Additional warming also increases the risk of triggering critical thresholds called tipping points."],gradient:"temperatures",sourceLink:"https://en.wikipedia.org/wiki/Climate_change"},sealevels:{header:"Sea levels",scopes:[{title:"Trend in sea levels",endpoint:"sea_level_trend"},{title:"Global ocean mass",endpoint:"global_ocean_mass"}],desc:["Tide gauge measurements show that the current global sea level rise began at the start of the 20th century. Between 1900 and 2017, the globally averaged sea level rose by 16\u201321 cm (6.3\u20138.3 in), or 1.4\u20131.8 mm (0.055\u20130.071 in) per year. More precise data gathered from satellite radar measurements reveal an accelerating rise of 7.5 cm (3.0 in) from 1993 to 2017, for an average rate of 31 mm (1.22 in) per decade. This acceleration is due mostly to climate change, which is driving thermal expansion of seawater and the melting of land-based ice sheets and glaciers. Between 1993 and 2018, thermal expansion of the oceans contributed 42% to sea level rise; the melting of temperate glaciers 21%, Greenland 15%, and Antarctica 8%. Climate scientists expect the rate to further accelerate during the 21st century, with the latest measurements saying the sea levels are currently rising by 3.6 mm per year","Projecting future sea level is challenging, due to the complexity of many aspects of the climate system and to time lags in sea level reactions to Earth temperature changes. As climate research into past and present sea levels leads to improved computer models, projections have consistently increased. In 2007, the Intergovernmental Panel on Climate Change projected a high end estimate of 60 cm (2 ft) through 2099, but their 2014 report raised the high-end estimate to about 90 cm (3 ft). A number of later studies have concluded that a global sea level rise of 200 to 270 cm (6.6 to 8.9 ft) this century is 'physically plausible'. A conservative estimate of the long-term projections is that each Celsius degree of temperature rise triggers a sea level rise of approximately 2.3 meters (4.2 ft/degree Fahrenheit) over a period of two millennia: an example of climate inertia. In February 2021, a paper published in Ocean Science suggested that past projections for global sea level rise by 2100 reported by the IPCC were likely conservative, and that sea levels will rise more than previously expected","The sea level will not rise uniformly everywhere on Earth, and it will even drop slightly in some locations, such as the Arctic. Local factors include tectonic effects and subsidence of the land, tides, currents and storms. Sea level rises can affect human populations considerably in coastal and island regions. Widespread coastal flooding is expected with several degrees of warming sustained for millennia. Further effects are higher storm-surges and more dangerous tsunamis, displacement of populations, loss and degradation of agricultural land and damage in cities. Natural environments like marine ecosystems are also affected, with fish, birds and plants losing parts of their habitat."],gradient:"sealevels",sourceLink:"https://en.wikipedia.org/wiki/Sea_level_rise"},glaciers:{header:"Glaciers",scopes:[{title:"Antarctica ice mass",endpoint:"antarctica_ice_mass"},{title:"Greenland ice mass",endpoint:"greenland_ice_mass"}],desc:["The mass balance, or difference between accumulation and ablation (melting and sublimation), of a glacier is crucial to its survival. Climate change may cause variations in both temperature and snowfall, resulting in changes in mass balance. A glacier with a sustained negative balance loses equilibrium and retreats. A sustained positive balance is also out of equilibrium and will advance to reestablish equilibrium. Currently, nearly all glaciers have a negative mass balance and are retreating. About 99 percent of all freshwater ice is in the great ice sheets of polar and subpolar Antarctica and Greenland. These continuous continental-scale ice sheets, 3 km (1.9 mi) or more in thickness, cap much of the polar and subpolar land masses. Like rivers flowing from an enormous lake, numerous outlet glaciers transport ice from the margins of the ice sheet to the ocean.","In Greenland, glacier retreat has been observed in outlet glaciers, resulting in an increase of the ice flow rate and destabilization of the mass balance of the ice sheet that is their source. The net loss in volume and hence sea level contribution of the Greenland Ice Sheet has doubled in recent years from 90 km3 per year in 1996 to 220 km3 per year in 2005. Researchers also noted that the acceleration was widespread affecting almost all glaciers south of 70N by 2005. The period since 2000 has brought retreat to several very large glaciers that had long been stable. Three glaciers that have been researched\u2014Helheim Glacier, Kangerdlugssuaq Glacier, and Jakobshavn Isbr\xe6\u2014jointly drain more than 16% of the Greenland Ice Sheet. In the case of Helheim Glacier, researchers used satellite images to determine the movement and retreat of the glacier. Satellite images and aerial photographs from the 1950s and 1970s show that the front of the glacier had remained in the same place for decades. In 2001 the glacier began retreating rapidly, and by 2005 the glacier had retreated a total of 7.2 km, accelerating from 20 m (66 ft) per day to 35 m (115 ft) per day during that period.","Antarctica is intensely cold and arid. Most of the world's freshwater ice is contained within its sheets. Its most dramatic example of glacier retreat is the loss of large sections of the Larsen Ice Shelf on the Antarctic Peninsula. The recent collapse of Wordie Ice Shelf, Prince Gustav Ice Shelf, Mueller Ice Shelf, Jones Ice Shelf, Larsen-A and Larsen-B Ice Shelf on the Antarctic Peninsula has raised awareness of how dynamic ice shelf systems are. The Antarctic sheet is the largest known single mass of ice. It covers almost 14 million km2 and some 30 million km3 of ice. Around 90% of the fresh water on the planet's surface is held in this area and if melted would raise sea levels by 58 metres. The continent-wide average surface temperature trend of Antarctica is positive and significant at > 0.05 \xb0C/decade since 1957."],gradient:"glaciers",sourceLink:"https://en.wikipedia.org/wiki/Retreat_of_glaciers_since_1850"}}},3106:function(e,t,a){"use strict";a(7294);var n=a(115),i=a(5893),r=(0,n.Z)((function(e){return{containerStyle:{width:"100%",height:"40vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},spinnerStyle:{height:"7rem",margin:"2rem"}}}));t.Z=function(){var e=r();return(0,i.jsx)("div",{className:e.containerStyle,children:(0,i.jsx)("img",{src:"/loader.gif",alt:"fetching data...",className:e.spinnerStyle})})}},5694:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data/[dataset]",function(){return a(5020)}])}},function(e){e.O(0,[570,421,56,774,888,179],(function(){return t=5694,e(e.s=t);var t}));var t=e.O();_N_E=t}]);