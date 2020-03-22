export default class DataManager {
	static initAnimes(json) 
	{
		animes = json.map( (m) => {
			m.episodes = m.episodes.map( e => {e.anime = m; return e;});
			return m;
		});
	}
};
