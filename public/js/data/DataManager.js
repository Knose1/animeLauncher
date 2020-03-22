export default class DataManager {
	static initAnimes(json) 
	{
		this.animes = json.map( (m) => {
			m.episodes = m.episodes.map( e => {e.anime = m; return e;});
			return m;
		});

		console.log(this.animes);
	}
};
