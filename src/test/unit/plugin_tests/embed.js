module("EmbedPlugin", {setup: setupWym});

var YOUTUBE_VIDEO_URL = 'http://www.youtube.com/v/yJxbMUjLW1E?fs=1&amp;hl=en_US';
test("Shouldn't remove object elements", function() {
    expect(1);
    var objectEmbed = '' +
        '<object width="480" height="390">' +
            '<param name="movie" value="' + YOUTUBE_VIDEO_URL + '" />' +
            '</param>' +
            '<param name="allowFullScreen" value="true" /></param>' +
            '<param name="allowscriptaccess" value="always" /></param>' +
            '<embed ' +
                'src="' + YOUTUBE_VIDEO_URL + '" ' +
                'type="application/x-shockwave-flash" ' +
                'width="480" '+
                'height="390" '+
                'allowscriptaccess="always" ' +
                'allowfullscreen="true" /> ' +
            '</embed>' +
        '</object>';

    var expected = '' +
        '<object width="480" height="390">' +
            '<param name="movie" value="' + YOUTUBE_VIDEO_URL + '" />' +
            '<param name="allowFullScreen" value="true" />' +
            '<param name="allowscriptaccess" value="always" />' +
            '<embed ' +
                'src="' + YOUTUBE_VIDEO_URL + '" ' +
                'type="application/x-shockwave-flash" ' +
                'width="480" '+
                'height="390" '+
                'allowscriptaccess="always" ' +
                'allowfullscreen="true" /> ' +
        '</object>';
    equals(
        jQuery.trim(jQuery.wymeditors(0).parser.parse(objectEmbed)),
        jQuery.trim(expected));
});

test("Shouldn't remove iframe elements", function() {
    expect(1);
    var iframeEmbed = '<iframe width="480" height="390" ' +
        'src="' + YOUTUBE_VIDEO_URL + '" frameborder="0" />' +
        '</iframe>';
    var expected = '<iframe width="480" height="390" ' +
        'src="' + YOUTUBE_VIDEO_URL + '" frameborder="0"></iframe>';

    equals(
        jQuery.trim(jQuery.wymeditors(0).parser.parse(iframeEmbed)),
        jQuery.trim(expected));
});
