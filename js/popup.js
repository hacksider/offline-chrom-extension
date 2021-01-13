$(function()
{
	$('li').click(function()
	{
		if ($(this).data('href'))
		{
			chrome.tabs.create({ url: $(this).data('href') });
		}
	});
});