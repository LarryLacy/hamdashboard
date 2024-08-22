const topBarCenterText = `WROJ207 - DN81dt`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  ["2196F3", "TIME", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "CHY WEATHER",
    "https://forecast.weather.gov/MapClick.php?lat=41.8101&lon=-103.6692",
    "1",
    "R"
  ],
  [
    "2196F3",
    "US WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=42.0000&lon=-95.0000&zoom=5&units=imperial",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-95.00,40.00,3000",
    "1",
    "R",
  ],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  [
    "RADAR",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KCYS_loop.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "GREY LINE",
    "https://www.hamqsl.com/solarmuf.php"
//    "https://www.fourmilab.ch/cgi-bin/uncgi/Earth?img=NOAAtopo.evif&imgsize=320&dynimg=y&opt=-p&lat=&lon=&alt=&tle=&date=0&utc=&jd=",
//    "https://hamdash.syswiz.net/greyline_map",
//    "https://www.dxfuncluster.com/grayline/",
//    "https://www.timeanddate.com/scripts/sunmap.php?iso=now",
  ],
  [
    "SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif",
    //"https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif",
  ],
  [
    "LOCAL SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/nr/GEOCOLOR/GOES16-NR-GEOCOLOR-600x600.gif",
  ],
  [
    "ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  [
    "HF UTILIZATION",
    "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG",
    "https://www.tvcomm.co.uk/g7izu/Autosave/ATL_HF10_AutoSave.JPG"],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_mn.png",
  ],
  [
    "FORCAST",
    "https://forecast.weather.gov/meteograms/Plotter.php?lat=41.8774&lon=-103.7542&wfo=CYS&zcode=NEZ019&gset=25&gdiff=7&unit=0&tinfo=MY7&ahour=0&pcmd=11011111111110000000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48",
    "https://www.wpc.ncep.noaa.gov/noaa/noaa.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif",
    "https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif",
    "https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif",
//    "SW BROADCAST",
//    "http://www.short-wave.info/php/transmitter-site-map.php?mobile=false&lat=24.01|36.21|27.46|35.62|-17.53|46.34|50.73|27.46|36.21|39.75|52.65|50.48|50.89|52.65|43.51|52.67|46.34|59.75|36.21|29.84|27.46|27.46|46.34|27.46|27.46|39.36|33.50|39.36|24.88|39.75|-38.83|24.88|24.88|59.75|21.14|36.28|13.28|44.15|24.88|18.22|24.88|21.14|36.21|40.41|21.93|13.28|13.23|34.38|44.15|39.36|39.91|36.21|36.21|39.36|39.40|21.93&lon=90.26|-86.89|-80.93|-86.01|146.05|-67.83|4.39|-80.93|-86.89|116.81|12.91|6.52|-113.85|12.91|-79.63|9.75|-67.83|-151.74|-86.89|-90.12|-80.93|-80.93|-67.83|-80.93|-80.93|75.72|-86.47|75.72|102.49|116.81|176.42|102.49|102.50|-151.74|105.42|-86.10|144.67|86.90|102.50|-63.02|102.49|105.42|-86.89|45.19|59.63|144.67|77.22|108.61|86.90|75.72|-76.58|-86.89|-86.89|75.72|32.86|59.63&freq=4750|4840|5010|5050|5055|5130|5780|5850|5935|5955|5990|6005|6030|6045|6070|6160|6160|7355|7490|7505|7570|7730|9330|9395|9455|9460|9470|9500|9600|9645|9700|9730|9760|9795|9840|9940|11590|11650|11760|11775|11980|12020|13845|15205|15295|15400|15410|15555|15590|15660|15720|15825|15825|17490|17620|17790&az=320|40|181|45|ND|245|ND|315|85|95|233|10|ND|240|ND|ND|245|270|85|20|315|44|245|355|285|174|335|209|163|215|325|225|135|270|177|40|285|212|135|320|177|177|90|305|10|290|60|292|308|173|62|46|46|308|310|80",
  ],
  [
    "HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php",
    "https://www.hamqsl.com/solar100sc.php",
    "https://www.hamqsl.com/solarpich.php",
    "https://img.propagation.dr2w.de/n-america/10M/dr2w_animation_10M.gif",
    "https://img.propagation.dr2w.de/n-america/12M/dr2w_animation_12M.gif",
    "https://img.propagation.dr2w.de/n-america/15M/dr2w_animation_15M.gif",
    "https://img.propagation.dr2w.de/n-america/17M/dr2w_animation_17M.gif",
    "https://img.propagation.dr2w.de/n-america/20M/dr2w_animation_20M.gif",
    "https://img.propagation.dr2w.de/n-america/30M/dr2w_animation_30M.gif",
    "https://img.propagation.dr2w.de/n-america/40M/dr2w_animation_40M.gif",
    "https://img.propagation.dr2w.de/n-america/80M/dr2w_animation_80M.gif",
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000];



