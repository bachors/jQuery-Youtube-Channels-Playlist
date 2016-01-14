jQuery-Youtube-Channels-Playlist
================================
<h2>Update youtube API v3</h2>
<p>YouTube device support message<br>
https://developers.google.com/youtube/v3/getting-started</p><br>
<p><b>Features:</b><br>
- you can customize width and height of the widget on your website.<br>
- the widget itself is responsive; given a width (or %) for the widget, the inner contents will resize accordingly.<br>
- a top featured video can be opened in the video player on load of the widget.<br>
- displays your actual complete youtube channel on your website just like its shown on youtube.</p>

<p>Register and get your Youtube API key <a href="https://code.google.com/apis/console" target="_blank">here</a></p>

<h1>Install:</h1>
<pre><pre><code>&lt;!-- include font awesome --&gt;
&lt;link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"&gt;

&lt;!-- Custom style  Youtube Channels Playlist --&gt;
&lt;link type="text/css" rel="stylesheet" href="src/ycp.css" /&gt;

&lt;!-- include jQuery --&gt;
&lt;script src="//code.jquery.com/jquery-2.1.1.min.js"&gt;&lt;/script&gt;

&lt;!-- jQuery Youtube Channels Playlist --&gt;
&lt;script src="src/ycp.js"&gt;&lt;/script&gt;

&lt;!-- Setting Example --&gt;
&lt;script&gt;
    ibacor_ycp(
        channels_name = 'vice', // example by USER name or channel ID
        channels_title = 'jQuery plugin by @bachors',
        type = 'forUsername', // type='forUsername' (by user) or type='id' (by channel)
		autoplay = false, // true or false
        apikey = 'Your API Key'
    );
&lt;/script&gt;</code></pre></pre>
</p>

<p><a href="http://ibacor.com/demo/jquery-youtube-channels-playlist/">DEMO</a></p>
