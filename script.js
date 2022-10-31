$(function()
{
    // Get Number of Twitter Followers From Twitter.com
    twitterusername = 'Micro0x00';
    $.getJSON('http://twitter.com/users/'+twitterusername+'.json?callback=?',
    function(data)
    {
        $('#twitflw').html('Twitter Followers : ' + data.followers_count + '');
    });
})
