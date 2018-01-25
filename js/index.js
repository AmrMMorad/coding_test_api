window.onload = function() {
	get_all_resources();
};

window.refreshAction = {
	'click .refresh': function (e, value, row, index) {
		disable_button(row.id);
		refresh_instance(row.id, index);
	}
};

function get_all_resources() {
	$.ajax({
		url: '/instances',
		success: function(result){
			$('#resources').bootstrapTable({
				data: result.instances
			});
		},
		complete: function() {
			$('.loader').removeAttr("style").hide();
  			$('.table-responsive').show();
		}
	});
}

function refresh_instance(instance_id, index){
	$.ajax({
		url: '/instances/' + instance_id,
		success: function(result){
			$('#resources').bootstrapTable('updateRow', {
			    index: index,
			    row: result.instance
			});
        },
        complete: function() {
			enable_button(instance_id);
		}
	});
}

function refreshButton(value, row, index){
	return [
		'<button id="' + row.id + '" class="refresh">Refresh Instance</button>'
	]
}

function disable_button(id) {
	$('#' + id).attr("disabled", true);
	$('#' + id).addClass('disabled');
}

function enable_button(id) {
	$('#' + id).removeAttr('disabled');	
	$('#' + id).removeClass('disabled');
}