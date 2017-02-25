$(document).ready(function() {
	$.ajax({
		url : " https://api.blockchain.info/v2/apikey/request/",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		success : function(data) {
			$('#bitcoin_block_number').append(data.height);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
		}
	});
});


