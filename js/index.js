window.onload = function() {
	// createInstanceAPIsForRange(1,10);
	get_all_resources();
};

function get_all_resources() {
	// var resources_data = $.ajax(
	// 	{
	// 		url: '/instances',
	// 	});
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
            {
               "id": 21,
               "name": "Instance 21",
               "status": "running"
            },
            {
               "id": 22,
               "name": "Instance 22",
               "status": "running"
            },
            {
               "id": 23,
               "name": "Instance 23",
               "status": "running"
            },
            {
               "id": 24,
               "name": "Instance 24",
               "status": "running"
            },
            {
               "id": 25,
               "name": "Instance 25",
               "status": "running"
            },
            {
               "id": 26,
               "name": "Instance 26",
               "status": "running"
            },
            {
               "id": 27,
               "name": "Instance 27",
               "status": "running"
            },
            {
               "id": 28,
               "name": "Instance 28",
               "status": "running"
            },
            {
               "id": 29,
               "name": "Instance 29",
               "status": "running"
            },
            {
               "id": 30,
               "name": "Instance 30",
               "status": "running"
            },
            {
               "id": 31,
               "name": "Instance 31",
               "status": "running"
            },
            {
               "id": 32,
               "name": "Instance 32",
               "status": "running"
            },
            {
               "id": 33,
               "name": "Instance 33",
               "status": "running"
            },
            {
               "id": 34,
               "name": "Instance 34",
               "status": "running"
            },
            {
               "id": 35,
               "name": "Instance 35",
               "status": "running"
            },
            {
               "id": 36,
               "name": "Instance 36",
               "status": "running"
            },]
	$('#resources').bootstrapTable({
		//Assigning data to table
		data: resources_data
	});
}
