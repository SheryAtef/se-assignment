$('body').on('click', function (event) {
    

    $.ajax({
    	url:'api/qoute/'
    	success: function (qoute)
    	{
    		$('.text').html(qoute.text);
           $('.written').html(qoute.author);
    	}
    })
});