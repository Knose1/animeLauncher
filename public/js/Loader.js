import FileLoader from './utils/FileLoader.js';

export default class Loader 
{
	static start()
	{
		reloadAnime();
	}

	static reloadAnime()
	{
		debugger;
		FileLoader.getInstance()
		.readAsJson("./get/list", this.onListLoaded)
		.start();
	}

	static onListLoaded(data)
	{
		data = data.map( (m) => {
			m.episodes = m.episodes.map( e => {e.anime = m; return e;});
			return m;
		});
		console.dir(data);
	}
}