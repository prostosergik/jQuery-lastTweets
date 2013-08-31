jQuery-lastTweets
=================

*jQuery Last Tweets Plugin*

This plugin will retrieve your last tweets from Twitter and populate them into selected element(s).

USAGE
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

Check it here: http://jsfiddle.net/prostosergik/8yVwZ/4/ I can't promice it will always contain latest verstion, so this is your chance to see it in action. Don't rely on that code. Use GIT repo.

TEMPLATES ENGINE (haha)
-----------------------

If you set "wrap" opion, each tweet will be wrapped by this html code. I.e. "[[text]]" will be replced with tweet text.

OTHER PARAMS
------------

You are smart guy, I think you can figure out what each parameter for.

HOW TO CREATE A AUTH ID TO USE:
-------------------------------

Go to www.twitter.com and sign in as normal, go to your settings page.
Go to "Widgets" on the left hand side.
Create a new widget for what you need eg "user timeline" or "search" etc. 
Feel free to check "exclude replies" if you dont want replies in results.
Now go back to settings page, and then go back to widgets page, you should
see the widget you just created. Click edit.
Now look at the URL in your web browser, you will see a long number like this:
373591145017643008
Use this as your auth.


CREDITS
-------

Sponsored by Sweetrelish.com. Find something interedting for you to buy!

Inpired by **Jason Mayes** Twitter Post Fetcher v10.0 (http://www.jasonmayes.com/projects/twitterApi/), also, I use your instructions, man, hope you don't mind. =)  

Feel free to use and modify this code. Only keep my copitights and add link to Sweetrelish.com. This is required, no exclusions.

You can contact me by writting email to <serge.liskovsky@gmail.com>.