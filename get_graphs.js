
var timeframe = "this_1_days";

var client = new Keen({
  projectId: "586556c88db53dfda8a7e515",
  readKey: "1554768e999e411bc5e98ea000836d507aa6084fb4f61bd8dcbe0b094ae6d3d6a0cb3f7857dc8f68fc7998776a9e3708d367b2b0d7bb717b36357d5a0ad15a018df9cef4ebc6a6d1246793ac10b49db04f82f63b5f741573163a7b4546694f9b"
});

var client2 = new Keen({
  projectId: "586556c88db53dfda8a7e515",
  readKey: "1554768e999e411bc5e98ea000836d507aa6084fb4f61bd8dcbe0b094ae6d3d6a0cb3f7857dc8f68fc7998776a9e3708d367b2b0d7bb717b36357d5a0ad15a018df9cef4ebc6a6d1246793ac10b49db04f82f63b5f741573163a7b4546694f9b"
});

var chart = new Keen.Dataviz()
  .el("#chart-01")
  .height(350)
  .title(" ")
  .type("linechart")
  .prepare();

client
  .query("average", {
	event_collection: "Home_Temp_Logging",
	filters: [{"operator":"gt","property_name":"air_temp","property_value":0}],
	interval: "hourly",
	target_property: "air_temp",
	timeframe: "this_4_days",
	timezone: "US/Eastern"
  })
  .then(function(res) {
	chart.data(res).render();
  })
  .catch(function(err) {
	chart.message(err.message);
  });	

var chart2 = new Keen.Dataviz()
  .el("#chart-02")
  .height(240)
  .title(" ")
  .type("linechart")
  .prepare();

client
  .query("average", {
	event_collection: "Home_Temp_Logging",
	filters: [{"operator":"gt","property_name":"air_humidity","property_value":0}],
	interval: "hourly",
	target_property: "air_humidity",
	timeframe: "this_4_days",
	timezone: "US/Eastern"
  })
  .then(function(res) {
	chart2.data(res).render();
  })
  .catch(function(err) {
	chart2.message(err.message);
  });

var chart3 = new Keen.Dataviz()
  .el("#chart-03")
  .height(350)
  .title("Pool Water Temperature")
  .title(" ")
  .type("linechart")
  .prepare();

client
  .query("median", {
	event_collection: "Home_Temp_Logging",
	interval: "hourly",
	filters: [{"operator":"gt","property_name":"pool_water_temp","property_value":0}],
	target_property: "pool_water_temp",
	timeframe: "this_4_days",
	timezone: "US/Eastern"
  })
  .then(function(res) {
	chart3.data(res).render();
  })
  .catch(function(err) {
	chart3.message(err.message);
  });

var chart4 = new Keen.Dataviz()
  .el("#chart-04")
  .height(240)
  .title(" ")
  .type("linechart")
  .prepare();

client
  .query("average", {
	event_collection: "Home_Temp_Logging",
	filters: [{"operator":"gt","property_name":"water_level","property_value":0},{"operator":"lt","property_name":"water_level","property_value":300}],
	interval: "hourly",
	target_property: "water_level",
	timeframe: "this_4_days",
	timezone: "US/Eastern"
  })
  .then(function(res) {
	chart4.data(res).render();
  })
  .catch(function(err) {
	chart4.message(err.message);
  });

var chart5 = new Keen.Dataviz()
  .el("#chart-05")
  .height(240)
  .type("linechart")
  .title(" ")
  .prepare();

client
  .query("average", {
	event_collection: "Home_Temp_Logging",
	interval: "hourly",
	target_property: "pump_speed",
	timeframe: "this_4_days",
	timezone: "US/Eastern"
  })
  .then(function(res) {
	chart5.data(res).render();
  })
  .catch(function(err) {
	chart5.message(err.message);
  });

var chart6 = new Keen.Dataviz()
  .el("#chart-06")
  .height(240)
  .title(" ")
  .type("areachart")
  .prepare();

client
  .query("minimum", {
	event_collection: "Home_Temp_Logging",
	interval: "hourly",
	target_property: "flow",
	timeframe: "this_4_days",
	timezone: "US/Eastern"
  })
  .then(function(res) {
	chart6.data(res).render();
  })
  .catch(function(err) {
	chart6.message(err.message);
  });

var chart7 = new Keen.Dataviz()
  .el("#chart-07")
  .height(240)
  .title(" ")
  .type("areachart")
  .prepare();

client
  .query("average", {
	event_collection: "Home_Temp_Logging",
	filters: [{"operator":"gt","property_name":"UV_index","property_value":0}],
	interval: "hourly",
	target_property: "UV_index",
	timeframe: "this_4_days",
	timezone: "US/Eastern"
  })
  .then(function(res) {
	chart7.data(res).render();
  })
  .catch(function(err) {
	chart7.message(err.message);
  });

var chart8 = new Keen.Dataviz()
  .el("#chart-08")
  .height(240)
  .title(" ")
  .type("areachart")
  .prepare();

client.query("average", {
	event_collection: "Home_Temp_Logging",
	filters: [{"operator":"gt","property_name":"visible_light","property_value":0}],
	interval: "hourly",
	target_property: "visible_light",
	timeframe: "this_4_days",
	timezone: "US/Eastern"
  })
	.then(function(res) {
		chart8.data(res).render();
	})
	.catch(function(err) {
		chart8.message(err.message);
	});

var chart9 = new Keen.Dataviz()
  .el("#chart-09")
  .height(240)
  .title(" ")
  .type("areachart")
  .prepare();

client.query("average", {
	event_collection: "Home_Temp_Logging",
	filters: [{"operator":"gt","property_name":"ir_light","property_value":0}],
	interval: "hourly",
	target_property: "ir_light",
	timeframe: "this_4_days",
	timezone: "US/Eastern"
  }).then(function(res) {
		chart9.data(res).render();
	})
	.catch(function(err) {
		chart9.message(err.message);
	});


