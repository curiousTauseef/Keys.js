if (process.platform=="darwin")
{
	var exec = require('child_process').exec;
}



var send = function(keycode) 
{
	if (process.platform=="darwin")
	{
		var script = 'tell application "System Events" to key code ' + keycode;
		exec("osascript -e '" + script + "'");
	}

};

exports.send = send;