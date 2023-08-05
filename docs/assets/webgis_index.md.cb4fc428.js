import{_ as e,v as a,b as i,R as l}from"./chunks/framework.caa0fbaf.js";const m=JSON.parse('{"title":"WebGIS","description":"","frontmatter":{},"headers":[],"relativePath":"webgis/index.md","filePath":"webgis/index.md"}'),o={name:"webgis/index.md"},r=l('<h1 id="webgis" tabindex="-1">WebGIS <a class="header-anchor" href="#webgis" aria-label="Permalink to &quot;WebGIS&quot;">​</a></h1><p>概念:GIS（Geographic Information System）地理信息系统。是一个创建、管理、分析和绘制所有类型数据的空间系统。GIS将数据连接到地图以进行快速分析和理解。</p><h1 id="相关概念" tabindex="-1">相关概念: <a class="header-anchor" href="#相关概念" aria-label="Permalink to &quot;相关概念:&quot;">​</a></h1><ol><li>坐标系：地理数据通常以某种坐标系的形式存储。例如：经纬度坐标系、投影坐标系。</li><li>地理数据：GIS中的数据是具有地理信息的数据。例如：地图、地形、道路、建筑物、人口数据等。</li><li>地图投影：地图投影是将三维地球标识为二维地球的过程。</li><li>叠加分析：叠加分析是在一张地图上查看多个图层的分析，以探究其相互关系。</li><li>空间分析：空间分析是指使用地理数据分析空间关系。例如：距离、面积和方位等。</li><li>地理数据库：GIS的核心是地理信息数据库，用于存储和管理地址数据。</li></ol><h1 id="发展史" tabindex="-1">发展史 <a class="header-anchor" href="#发展史" aria-label="Permalink to &quot;发展史&quot;">​</a></h1><ol><li></li></ol><h1 id="webgis框架" tabindex="-1">webgis框架 <a class="header-anchor" href="#webgis框架" aria-label="Permalink to &quot;webgis框架&quot;">​</a></h1><ol><li>Leaflet （二维：传统）</li><li>OpenLayers （二维：功能强大）</li><li>Mapbox (二维：互联网展示型)</li><li>cesium (三维)</li></ol><h1 id="ogc-open-geospatial-consortium开放地理空间信息联盟-三个标准" tabindex="-1">OGC（Open Geospatial Consortium开放地理空间信息联盟）三个标准 <a class="header-anchor" href="#ogc-open-geospatial-consortium开放地理空间信息联盟-三个标准" aria-label="Permalink to &quot;OGC（Open Geospatial Consortium开放地理空间信息联盟）三个标准&quot;">​</a></h1><ol><li>WMTS （Web Map Tile Service Web瓦片地图），适用于数据相对静态或更新频率低的数据。</li><li>WMS(Web Map Service Web地图服务)，动态地图服务，地图是服务器在每次接到客户请求时立刻生成的。返回的并非地图数据，而是地图图像，格式类型:PNG,GIS,JPEG,SVG,WEBCGM。由服务器端绘制地图。</li><li>WFS(Web Feature Service)服务器将矢量数据返回给客户端。实际的地图是由客户端根据矢量数据绘制。</li></ol><h1 id="地图缓存技术" tabindex="-1">地图缓存技术 <a class="header-anchor" href="#地图缓存技术" aria-label="Permalink to &quot;地图缓存技术&quot;">​</a></h1><ol><li>栅格瓦片 (raster tile) 地图中所有的图层切分并存储为栅格格式的地图瓦片。（使用最广，技术成熟的底图技术）</li><li>矢量瓦片（vector tile） 矢量图层以矢量瓦片的（描述数据）形式进行切分和存储。体积小，传输快，客户端渲染。</li></ol><h1 id="gis数据来源" tabindex="-1">GIS数据来源 <a class="header-anchor" href="#gis数据来源" aria-label="Permalink to &quot;GIS数据来源&quot;">​</a></h1><ol><li>底图数据 （天地图、百度等网络底图服务-通常用于底图的显示，GIS运算能力有限。 测绘数据，影像数据）</li><li>业务数据 （商业数据，采集数据）</li></ol><h1 id="网络服务" tabindex="-1">网络服务 <a class="header-anchor" href="#网络服务" aria-label="Permalink to &quot;网络服务&quot;">​</a></h1><ol><li>地图服务 （负责处理地图显示浏览，查询，专题图展现等相关运算）</li><li>数据服务 （负责对空间数据进行编辑，查询等运算）</li><li>空间服务 （对空间数据之间进行分析运算，如等值线分析，缓冲区分析等）</li><li>交通服务 （公交路线和换乘方案） 5.三维服务</li></ol><h1 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h1><p><a href="http://develop.smaryun.com/#/index" target="_blank" rel="noreferrer">http://develop.smaryun.com/#/index</a> 可做参考：集成OpenLayers、Leaflet、MapBoxGL、Cesium四大地图开源框架，同时接入了MapGIS服务器、大数据存储、大数据分析、智能GIS、云运维等云服务器产品提供的数据和功能服务，轻松实现地图二三维应用开发。</p>',18),t=[r];function s(n,h,d,c,b,p){return a(),i("div",null,t)}const G=e(o,[["render",s]]);export{m as __pageData,G as default};