jQuery-lastTweets
=================

*jQuery Last Tweets Plugin*

This plugin will retrieve your last tweets from Twitter and populate them into selected element(s).

Usage
-----

	$(function(){
	    $('.tweets').lastTweets({
	        auth: '373591145017643008',
	        num: 2,
	        wrap: "<b>My tweet: [[text]]</b>",
	        complete: function(t, tl) {
	            console.log(t);
	            console.log(tl);
	        }
	    });
	});

Check it here: http://jsfiddle.net/prostosergik/8yVwZ/4/ I can't promise it will always contain latest version, so this is your chance to see it in action. Don't rely on that code. Use GIT repo.

Template engine (haha)
-----------------------

If you set "wrap" opiton, each tweet will be wrapped by this html code. I.e. "[[text]]" will be replced with tweet text.

Other params
------------

You are smart guy, I think you can figure out what each parameter is for.

How to create an auth ID to use:
-------------------------------

* Go to www.twitter.com and sign in as normal, go to your settings page.
* Go to "Widgets" on the left hand side.
* Create a new widget for what you need eg "user timeline" or "search" etc. 
* Feel free to check "exclude replies" if you don't want replies in results.
* Now go back to settings page, and then go back to widgets page, you should
see the widget you just created. Click edit.
* Now look at the URL in your web browser, you will see a long number like this:
373591145017643008
* Use this as your auth.


Credits
-------

Sponsored by [Sweetrelish.com] [1]. Find something interedting for you to buy!

Inspired by **Jason Mayes** [Twitter Post Fetcher] [2], also, I use your instructions and some of your code, man, hope you don't mind. =)  

Feel free to use and modify this code. Only keep my copyrights and add link to Sweetrelish.com. This is required, no exclusions.

You can contact me by writing email to <serge.liskovsky@gmail.com>.

  [1]: http://sweetrelish.com/        							"Sweetrelish.com"
  [2]: http://www.jasonmayes.com/projects/twitterApi/        	"Twitter Post Fetcher"