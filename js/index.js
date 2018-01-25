window.onload = function() {
	// createInstanceAPIsForRange(1,10);
	get_all_resources();
	$('.loader').removeAttr("style").hide();
  	$('.table-responsive').show();
};

function refreshButton(value, row, index){
	return [
		'<button id="' + row.id + '" class="refresh">Refresh Instance</button>'
	]
}

window.refreshAction = {
	'click .refresh': function (e, value, row, index) {
		disable_button(row.id);
		refresh_resource(row.id, index);
	}
};

function disable_button(id) {
	$('#' + id).attr("disabled", true);
	$('#' + id).addClass('disabled');
}

function enable_button(id) {
	$('#' + id).removeAttr('disabled');	
	$('#' + id).removeClass('disabled');
}

function delay(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function refresh_resource(instance_id, index){
	// var instance_data = $.ajax(
	// 	{
	// 		url: '/instances/' + instance_id,
	// 		complete: function(){
	// 			enable_button(instance_id);
	// 		}
	// 	});
	var instance_data = {
		"id": 1000,
		"name": "Instance 1000",
		"status": "hold"
	}
    $('#resources').bootstrapTable('updateRow', {
	    index: index,
	    row: instance_data
	});
}

function get_all_resources() {
	// var resources_data = $.ajax(
	// 	{
	// 		url: '/instances',
	// 	});
	// delay(500);
	var resources_data = [
		{
	      "id": 1,
	      "name": "Instance 1",
	      "status": "running"
	   },
	   {
	      "id": 2,
	      "name": "Instance 2",
	      "status": "running"
	   },
	   {
	      "id": 3,
	      "name": "Instance 3",
	      "status": "running"
	   },
	   {
	      "id": 4,
	      "name": "Instance 4",
	      "status": "running"
	   },
	   {
	      "id": 5,
	      "name": "Instance 5",
	      "status": "running"
	   },
	   {
	      "id": 6,
	      "name": "Instance 6",
	      "status": "running"
	   },
	   {
	      "id": 7,
	      "name": "Instance 7",
	      "status": "running"
	   },
	   {
	      "id": 8,
	      "name": "Instance 8",
	      "status": "running"
	   },
	   {
	      "id": 9,
	      "name": "Instance 9",
	      "status": "running"
	   },
	   {
	      "id": 10,
	      "name": "Instance 10",
	      "status": "running"
	   },
	   {
	      "id": 11,
	      "name": "Instance 11",
	      "status": "running"
	   },
	   {
	      "id": 12,
	      "name": "Instance 12",
	      "status": "running"
	   },
	   {
	      "id": 13,
	      "name": "Instance 13",
	      "status": "running"
	   },
	   {
	      "id": 14,
	      "name": "Instance 14",
	      "status": "running"
	   },
	   {
	      "id": 15,
	      "name": "Instance 15",
	      "status": "running"
	   },
	   {
	      "id": 16,
	      "name": "Instance 16",
	      "status": "running"
	   },
	   {
	      "id": 17,
	      "name": "Instance 17",
	      "status": "running"
	   },
	   {
	      "id": 18,
	      "name": "Instance 18",
	      "status": "running"
	   },
	   {
	      "id": 19,
	      "name": "Instance 19",
	      "status": "running"
	   },
	   {
	      "id": 20,
	      "name": "Instance 20",
	      "status": "running"
	   },
	]
	$('#resources').bootstrapTable({
		//Assigning data to table
		data: resources_data
	});

}
