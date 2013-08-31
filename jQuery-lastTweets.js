/* lastTweets by Serge Liskovsky <serge.liskovsky@gmail.com> 
 * https://github.com/prostosergik/jQuery-lastTweets 
 *
 * Sponsored by Sweetrelish.com 
*/

var twitterFetcher = null;

(function($) {
    
	$.fn.lastTweets = function( options ) {

		// Establish our default settings
		var settings = $.extend({
			auth         : '',
            num          : null,  
            wrap         : "<p>[[text]]</p>",
            complete     : null
		}, options);
   
        if ( settings.auth.length != 18) {
            alert('lastTweets require twitter widget auth. See instructions here: https://github.com/prostosergik/jQuery-lastTweets');
            return;
        }
        
        twitterFetcher = function(els, num, wrap, complete){
            return {
                callback: function(response) {
                    var tweets = [];
                    var tweets_str = "";
                    
                    var div = $("<div></div>");
                    div.html(response.body);
                    
                    var i = 0;
                    $.each(div.find('.tweet'), function(){
                        if((num != null && i < num) || num === null){ 
                            tweets.push($(this).find('.e-entry-content').find('.e-entry-title').text());
                        }
                        i++;
                    });

                    $.each(tweets, function(){
                        if(/\[\[text\]\]/.test(wrap)) {
                            tweets_str += wrap.replace('[[text]]', filter(this));
                        } else {
                            tweets_str += filter(this);
                        }
                    });
                
                    els.each(function(){
                        $(this).html(tweets_str);
                    });
    
                    if ( $.isFunction( complete ) ) {
                        complete.call(this, tweets, tweets_str);
                    }
                   
                }
            }
        }($(this), settings.num, settings.wrap, settings.complete);
        
        
        var url = "//cdn.syndication.twimg.com/widgets/timelines/" + settings.auth + "?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd=" + Math.random();
    
        var script = document.createElement('script');
        script.type='text/javascript';
        script.src=url;
        
        $("head").append(script);
        
	    return $(this);
	};
    
    function filter(e) {
        return e.replace(/<b[^>]*>(.*?)<\/b>/gi, function (c, e) {
            return e
        }).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "")
    }

}(jQuery));
