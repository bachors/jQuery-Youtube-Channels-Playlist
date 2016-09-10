/******************************************************
* #### jQuery-Youtube-Channels-Playlist v03 ####
* Coded by Ican Bachors 2014.
* http://ibacor.com/labs/jquery-youtube-channels-playlist/
* Updates will be posted to this site.
******************************************************/

$.fn.ycp = function(m, n, o) {

    $(this).each(function(i, a) {
        var b = ($(this).attr('id') != null ? '#' + $(this).attr('id') : '.' + $(this).attr('class')),
            channel = $(this).data('ycp'),
            tipe = (channel.substring(0, 2) == 'UC' ? 'id' : 'forUsername'),
            p = $(this).data('ycp-playlist'),
            html = '<div class="ycp">' + '<div class="unit kenca">' + '<div id="ycp_vid_play' + i + '"></div>' + '</div>' + '<div class = "unit katuhu">' + '<div id="ycp_youtube_channels' + i + '"></div>' + '</div>' + '</div>';
        $(this).html(html);
        ycp_play(channel, tipe, i, b, p)
    });

    function ycp_play(c, d, e, f, p) {
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&' + d + '=' + c + '&key=' + o,
            crossDomain: true,
            dataType: 'json'
        }).done(function(a) {
            var b = a.items[0].contentDetails.relatedPlaylists.uploads,
                chid = a.items[0].id,
                pageToken = '',
                autop = 0;
            if (n) {
                autop = 1
            }
            ycp_list(b, pageToken, chid, autop, e, f, p)
        })
    }

    function ycp_list(f, g, h, j, k, l, p) {
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=' + m + '&playlistId=' + (p ? p : f) + '&key=' + o + '&pageToken=' + g,
            dataType: 'json'
        }).done(function(c) {
            var d = '';
            d += '<div class="vid-top">';
            d += '<span class="tombol vid-prev" title="Previous videos">Previous</span> ';
            d += '<span class="tombol vid-next" title="Next videos">Next</span><span class="about" title="ycp.js"><a href="http://ibacor.com/labs/jquery-youtube-channels-playlist" target="_BLANK">?</a></span></div><div class="vid-bottom">';
            $.each(c.items, function(i, a) {
                var b = c.items[i].snippet.resourceId.videoId;
                ycp_part(b, i, k, l);
                d += '<div class="play" data-vvv="' + b + '" title="' + c.items[i].snippet.title + '"><div class="thumb"><img src="' + c.items[i].snippet.thumbnails.default.url + '" alt=" "><span class="tm' + i + '"></span></div>';
                d += c.items[i].snippet.title + '<br><span class="mute by' + i + '"></span></div>'
            });
            d += '</div>';
            $(l + ' .ycp div#ycp_youtube_channels' + k).html(d);
            if (c.prevPageToken == null) {
                var e = $(l + ' .ycp div#ycp_youtube_channels' + k + ' div.play').attr("data-vvv");
                $(l + ' .ycp div#ycp_vid_play' + k).html('<iframe src="http://www.youtube.com/embed/' + e + '?rel=0&amp;autoplay=' + n + '" allowfullscreen="" frameborder="0" class="vid-iframe"></iframe>');
                $(l + ' .ycp div#ycp_youtube_channels' + k + ' div').removeClass('vid-active');
                $(l + ' .ycp div#ycp_youtube_channels' + k + ' div.play:eq(0)').addClass('vid-active')
            } else {
                $(l + ' .ycp div#ycp_youtube_channels' + k + ' span.vid-prev').click(function() {
                    g = c.prevPageToken;
                    ycp_list(f, g, h, j, k, l);
                    return false
                })
            }
            $(l + ' .ycp div#ycp_youtube_channels' + k + ' span.vid-next').click(function() {
                g = c.nextPageToken;
                ycp_list(f, g, h, j, k, l);
                return false
            });
            $(l + ' .ycp div#ycp_youtube_channels' + k + ' div.play').each(function() {
                $(this).click(function() {
                    var a = $(this).attr("data-vvv");
                    $(l + ' .ycp div#ycp_youtube_channels' + k + ' div').removeClass('vid-active');
                    $(this).addClass('vid-active');
                    $(l + ' .ycp div#ycp_vid_play' + k).html('<iframe src="http://www.youtube.com/embed/' + a + '?rel=0&amp;autoplay=' + n + '" allowfullscreen="" frameborder="0" class="vid-iframe"></iframe>');
                    return false
                })
            })
        })
    }

    function ycp_part(c, i, d, e) {
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/videos?id=' + c + '&key=' + o + '&part=contentDetails,snippet',
            dataType: 'json'
        }).done(function(a) {
            var b = a.items[0].contentDetails.duration,
                dataw = '',
                menit = '',
                detik = '';
            if (b.match(/M/g)) {
                dataw = b.split('M');
                menit = dataw[0].replace('PT', '');
                if (dataw[1] != '') {
                    detik = dataw[1].replace('S', '')
                } else {
                    detik = '00'
                }
            } else {
                dataw = b.split('PT');
                menit = '00';
                detik = dataw[1].replace('S', '')
            }
            $(e + ' .ycp div#ycp_youtube_channels' + d + ' span.tm' + i).html(menit + ':' + detik);
            $(e + ' .ycp div#ycp_youtube_channels' + d + ' span.by' + i).html(a.items[0].snippet.channelTitle)
        })
    }

}
