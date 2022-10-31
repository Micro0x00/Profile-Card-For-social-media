$(function()
{
    // Get Number of Twitter Followers From Twitter.com
    twitterusername = 'hputtick';
    $.getJSON('http://twitter.com/Micro0x00/'+twitterusername+'.json?callback=?',
    function(data)
    {
        $('#twitflw').html('Twitter Followers : ' + data.followers_count + '');
    });
})
