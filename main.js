$('document').ready(function(){
  $("body").hide();
	$.getJSON("https://www.reddit.com/r/earthporn/top.json?sort=top&t=all&limit=100",function(json){
		let post = json.data.children[Math.floor(Math.random() * 100)].data;
		$('#image').attr("href","http://www.reddit.com"+post.permalink);
		$('#pictureauthor').html("Picture: u/"+post.author);
		betterUrl=correct_url(post.url);
		if(betterUrl!='')
			post.url=betterUrl;
		 $('<img/>').attr('src', post.url).load(function() {
     $("#bgImage").attr('src', post.url)
     $("#bgImage").hide();
     $('#bgImage').fadeIn(2000);
    $('body').fadeIn(2000);
		});
	});
	$.getJSON("https://www.reddit.com/r/showerthoughts/top.json?sort=top&t=all&limit=100",function(json){
		let post=json.data.children[Math.floor(Math.random() * 100)].data;
		$('#showerthough  ').html("\""+post.title+"\"");
		$('#showerthoughtauthor').html("u/"+post.author+" - 2018");
		$('#showerthought').attr("href","http://www.reddit.com"+post.permalink);
	});
});
function correct_url(url) {
	if (url.indexOf('imgur.com') > 0 || url.indexOf('/gallery/') > 0) {
		if (url.indexOf('gifv') >= 0) {
			if (url.indexOf('i.') === 0)
				url = url.replace('imgur.com', 'i.imgur.com');
			return url.replace('.gifv', '.gif');
		}
		if (url.indexOf('/a/') > 0 || url.indexOf('/gallery/') > 0)
			return '';
		return url.replace(/r\/[^ \/]+\/(\w+)/, '$1') + '.jpg';
	}
	return '';
};
