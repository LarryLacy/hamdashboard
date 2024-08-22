DAYLIGHT/DARKNESS GREYLINE REFERENCE MAP v1.91
       by RADIO-TIMETRAVELLER © 2024
          http://radio-timetraveller.blogspot.com
=================================================

Included is a GoogleMap-based, HTML-driven map which shows the current daylight/darkness state over the earth. Being a Google-based map, it is zoomable and scrollable. You may choose map view or satellite view. If desired, a home location may set by inputting latitude-longitude coordinates at the top of the map and clicking "<<Set Home" or by holding CTRL and left-clicking the map. This will allow you to return to the same reference point as long as the current map page remains open. Depending on your brower, latitude and longitude may be saved across map restarts.


THE NIGHT/DAY OVERLAY OR GREYLINE
----------------------------------------
Greyline propagation, or propagation along the earth's sunrise/sunset terminator, is very noticeable on the 160, 80, and 40 meter ham bands and lower shortwave bands. Medium wave signals can and do travel that path as well. 

A night/day overlay is drawn over the map. The overlay shows the areas of the earth in darkness, including the earth's terminator - the band of twilight surrounding the earth.

The earth's terminator is further broken into bands, showing its transition from total darkness to the sunrise and sunset edge. The actual sunrise or sunset point is the edge where the overlay disappears. The lightest band of the overlay is civil twilight, where the sun is just below the horizon to a point 6 degrees below the horizon. The next darkest band is nautical twilight, where the sun is between 6 degrees and 12 degrees below the horizon. The next darkest band is astronomical twilight, where the sun is between 12 degrees and 18 degrees below the horizon. The darkest area is where total darkness exists, where the sun's position is greater than 18 degrees below the horizon. Medium wave and other signals, as described above, can propagate along the terminator at greatly reduced signal attenuation - and are often received at astonishing distances.

The night/day overlay gets UTC, Universal Coordinated Time, from a software call in Javascript. Javascript calculates UTC from your computer clock, as it knows the time difference in local hours to UTC, so you must have your computer clock set correctly and with the proper time zone.

For mediumwave enthusiasts: Some US stations transmit at reduced power during a period called "CRITICAL HOURS". The FCC defines Critical Hours as the first two hours of daylight after sunrise and the last two hours of daylight before sunset.


INSTALLING
----------------------------------------
The map is HTML-based, so no regular install is necessary. Simply unzip the downloaded file and click on the map file to run. The map will open up in your web browser. The map is self-contained. You must have an internet connection to view the maps.


USING THE MAP
----------------------------------------
Note again that this map is web-based. As stated, it uses Google Maps and thus requires access to Google servers. In order to view it you need a connection to the internet. The map may not display properly or at all in older browsers. Best results are had with the latest versions. The Google Chrome browser will generally perform the best on desktop or laptop systems. It has also been tested on the Microsoft Edge and the Firefox browsers and in MacOS's Safari browser.

The map will generally work on mobile Android tablet and phone browsers, but no guarantee is given. The Google Chrome Android browser will work the best. Mobile IOS (Apple) browsers of any kind will not work. Apple has locked down offline files to such an extent on the iOS system that the script files won't even start.

>>> Blue Marker
The blue marker shows your current Home location. This can be updated as described below in "<<Set Home". Hover over the blue marker and the tooltip will show the marker's latitude-longitude. Track and circumference paths can be drawn using this marker as a location point. See the TRACK and O buttons description.

>>> Red Marker
The red marker shows the center of the map. Hover over it and the tooltip will show the marker's latitude-longitude, distance from Home in both kilometers and miles, and the bearing from Home to the red marker in degrees (also the return bearing). These are the short-path distances and bearings. Track and circumference paths can be drawn using this marker as a location point. See the "Track" and "O" buttons description.

>>> Yellow Markers M1 & M2
Yellow markers M1 or M2 can be placed anywhere on the map to mark a significant loaction. These two markers are draggable. Hover over either and the tooltip will show the marker's latitude-longitude. Track and circumference paths can be drawn using these markers as location points. See the "Track" and "O" buttons description.

>>> Lat-Lon boxes (Latitude and Longitude)
The current map location at the center of the map, indicated by the red marker. Modify as you wish. If you type in a latitude-longitude, be sure to use negative values for the western and southern hemispheres. More easily, just scroll the map to where you want your home location to be and click the "<<Set Home" button to redraw the map. TIP: You can also hold CTRL and left-click the map to reset the home location.

>>> Set Home button
Click to set the receiving location to the new latitude and longitude in the boxes (which is also the map's center or red marker). TIP: You can also hold CTRL and left-click the map to reset the home location.

>>> SHOWING: textbox
The UTC date and time shown in this box is the current time the map has been drawn for unless the ALT DATE+TIME checkbox is checked. If you check the ALT DATE+TIME checkbox, that UTC date and time will be shown.

>>> SR=, SS= textbox
The local sunrise and sunset times in UTC for the latitude-longitude at the center of the map, indicated by the red marker. This will change as you scroll the map.

>>> Update button
Click to update the night/day overlay. The greyline will update to the current time or the ALT DATE+TIME if the ALT DATE+TIME checkbox is checked.

>>> Home button
Click to center the map on your home location.

>>> Track button
First scroll the map to the location desired, then click the "Track" button to draw a track from Home to the map's center, the red marker. Multiple tracks can be drawn.

Tip: If yellow markers M1 and M2 are extant, holding the SHIFT key down while clicking the "Track" button will draw a track between M1 and M2.

>>> O button
First scroll the map to the location desired, then click the "O" button to draw a world circumference path from Home through the map's center, the red marker. Multiple world circumference paths can be drawn.

Tip: If yellow markers M1 and M2 are extant, holding the SHIFT key down while clicking the "O" button will draw a world circumference path between M1 and M2.

>>> Clear button
Click to erase all drawn tracks and paths.

>>> z2 button
Click to zoom the map out to zoom level 2.

>>> z13 button
Click to zoom the map in to zoom level 13.

>>> AUTO UPDATE checkbox
If checked and not using ALT DATE+TIME (the ALT DATE+TIME checkbox is NOT checked), the overlay will auto-update every 60 seconds.

>>> M1 button
Click to place a yellow M1 marker at the current map location. Click again to remove the yellow M1 marker. You can only have one M1 marker.

Tip: If yellow marker M1 is extant, holding the SHIFT key down while clicking the "M1" button will center the map on the M1 marker.

>>> M2 button
Click to place a yellow M2 marker at the current map location. Click again to remove the yellow M2 marker. You can only have one M2 marker.

Tip: If yellow marker M2 is extant, holding the SHIFT key down while clicking the "M2" button will center the map on the M2 marker.

>>> ALT DATE+TIME checkbox
Check to use the calendar and Time scrollbar to set an alternate date and time. This allows you to view the night/day overlay for any point in time during the year.

>>> Calendar control
Click the calendar to set an alternate date for any year, month, or day. The date (year, month, day) can also be manually entered by typing).

>>> Time scrollbar
Scroll the control left or right to set the time of day from 00:00 - 23:59 UTC. The time will be shown in the Time textbox to the right.

>>> Time textbox
Shows the time the Time scrollbar is set to. TIME CANNOT BE CHANGED BY ENTERING NUMBERS INTO THE TIME TEXTBOX - the program reads the time from the Time scrollbar setting itself.

>>> + and - buttons
Fine time control can be had by either the plus(+) or minus(-) button to advance or subtract the clock by one minute.

>>> Map/Satellite
Click one or the other to display the map in either map form or satellite form. Subsequently, "Map" form may be displayed as a road map or terrain map. "Satellite" form may be displayed with or without labels (hybrid = labels). Street view can be enabled from the satellite mode. Zoom in using satellite view to set your exact location.

KNOWN ISSUES
----------------------------------------









