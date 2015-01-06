exports.values={
	version: '0.0.1',
	server : {
		production : {
			real_time_server : {port: 3001, host: 'ec2-54-174-89-1.compute-1.amazonaws.com'}
		}
	}
	,
	game : {
		show_hall_of_fame: 20,
		show_history_games: 20,
		duration: 30 //seconds
	}
}
