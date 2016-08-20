jQuery-Youtube-Channels-Playlist
================================
<h2>Update youtube API v3</h2>
<p>YouTube device support message<br>
https://developers.google.com/youtube/v3/getting-started</p><br>
<p><img src="http://i.imgur.com/UISPijY.jpg"/></p><br>
<p><b>Features:</b><br>
- you can customize width and height of the widget on your website.<br>
- the widget itself is responsive; given a width (or %) for the widget, the inner contents will resize accordingly.<br>
- a top featured video can be opened in the video player on load of the widget.<br>
- displays your actual complete youtube channel on your website just like its shown on youtube.<br>
- multi channel playlist.</p>

<p>Register and get your Youtube API key <a href="https://code.google.com/apis/console" target="_blank">here</a></p>

<h1>Usage:</h1>
<pre>&lt;!-- CSS --&gt;
&lt;link type="text/css" rel="stylesheet" href="css/ycp.css" /&gt;

&lt;!-- HTML --&gt;
&lt;div id="unix" data-ycp="bachorsan"&gt;&lt;/div&gt;
&lt;div class="demo" data-ycp="UCpSPS5yLCxYRuZSrCx-eBjA"&gt;&lt;/div&gt; &lt;!-- By ChannelId --&gt;
&lt;div class="demo" data-ycp="vevouk"&gt;&lt;/div&gt; &lt;!-- By UserName --&gt;

&lt;!-- jQuery --&gt;
&lt;script src="//code.jquery.com/jquery-2.1.1.min.js"&gt;&lt;/script&gt;
&lt;script src="js/ycp.js"&gt;&lt;/script&gt;
&lt;script&gt;              
    $(function() {
    
        // Selector by Id
        $("#unix").ycp(
            playlist = 6, // number of videos playlist count
            autoplay = true, // true or false
            apikey = 'AIzaSyCj2xxxxxxxxxxxx' // your google api key
        );
        
        // Selector by ClassName
        $(".demo").ycp(
            playlist = 10, // number of videos playlist count
            autoplay = false, // true or false
            apikey = 'AIzaSyCj2xxxxxxxxxxxx' // your google api key
        );
        
    });
&lt;/script&gt;</pre>
</p>

<h3><a href="http://ibacor.com/demo/jquery-youtube-channels-playlist/">DEMO</a></h3>
