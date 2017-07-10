jQuery-Youtube-Channels-Playlist
================================
<h2>Update youtube API v3</h2>
<p>YouTube device support message<br>
https://developers.google.com/youtube/v3/getting-started</p><br>
<p><img src="https://2.bp.blogspot.com/-aRB-ImAWbCU/V9VkAb6GOQI/AAAAAAAABs0/eGoByDS0R6YmiP-OyIYkVrp2p4eFkbFdACLcB/s1600/ereeeeeeeeeeeew.jpg"/></p><br>
<p><b>Features:</b><br>
- you can customize width and height of the widget on your website.<br>
- the widget itself is responsive; given a width (or %) for the widget, the inner contents will resize accordingly.<br>
- a top featured video can be opened in the video player on load of the widget.<br>
- displays your actual complete youtube channel on your website just like its shown on youtube.<br>
- multi channel playlist.</p>

<p>Register and get your Youtube API key <a href="https://code.google.com/apis/console" target="_blank">here</a></p>
<h3>HTML:</h3>
<p>Required:</p>
<pre>data-ycp_channel = 'vevouk'</pre>
<p>Options:</p>
<pre>data-ycp_title = 'Title your playlist'</pre>
<h3>Javascript:</h3>
<p>Required:</p>
<pre>apikey : 'xxxxxxxxxxxxxxxx'</pre>
<p>Options:</p>
<pre>playlist : number of videos playlist count. Default = 10
autoplay : true. Default = false
related : true. Default = false</pre>

<pre>&lt;!-- CSS --&gt;
&lt;link type="text/css" rel="stylesheet" href="css/ycp.css" /&gt;

&lt;!-- Selector by Id --&gt;
&lt;div id="unix" data-ycp_title="#Demo - iBacor.com" data-ycp_channel="UCoiS7s7HrE7bHNuzERi-FCQ"&gt;&lt;/div&gt; &lt;!-- By ChannelId --&gt;

&lt;!-- Selector by ClassName --&gt;
&lt;div class="demo" data-ycp_title="#Javascript - Sekolah Koding" data-ycp_channel="PLCZlgfAG0GXAiH1acKFPx8EtpJAq44gjP"&gt;&lt;/div&gt; &lt;!-- By PlayListId --&gt;
&lt;div class="demo" data-ycp_title="#News - Vevo Uk" data-ycp_channel="vevouk"&gt;&lt;/div&gt; &lt;!-- By UserName --&gt;

&lt;!-- jQuery --&gt;
&lt;script src="//code.jquery.com/jquery-2.1.1.min.js"&gt;&lt;/script&gt;
&lt;script src="js/ycp.js"&gt;&lt;/script&gt;
&lt;script&gt;
$(function() {
        
    $("#unix").ycp({
        apikey : 'xxxxxxxxxxxxxxxx',
        playlist : 6,
        autoplay : true,
        related : true
    });
            
    $(".demo").ycp({
        apikey : 'xxxxxxxxxxxxxxxx'
    });
            
});
&lt;/script&gt;</pre>
</p>
