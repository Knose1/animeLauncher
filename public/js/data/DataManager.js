import HTMLManager from './HTMLManager.js';
import Loader from '../Loader.js';

export default class DataManager {
	static initAnimes(json) 
	{
		this.animes = json.map( (m) => {
			m.episodes = m.episodes.map( e => {e.anime = m; return e;});
			return m;
		});

		console.log(this.animes);

		this.generateAnimeListHTML()
	}
	
	static generateAnimeListHTML()
	{
		var animesString = "";
		for (let i = 0; i < this.animes.length; i++) {
			const a = this.animes[i];
				//Animes
			let thumbnail = a.thumbnailLink ? `<img src="${a.thumbnailLink}"/>` : "";
		
			animesString += 
			`<li class="anime" id="anime ${a.id}">
				<button>
					${thumbnail}
					<h1>${a.name}</h1>
				</button>
			</li>`
			
			
		}

		// **************** //
		// HTML STARTS HERE //
		// **************** //
		HTMLManager.body.innerHTML = 
		`<ul id="animeList">
			${animesString}
		</ul>`;
		// **************** //
		//  HTML ENDS HERE  //
		// **************** //

		let animeButtons = Array.from(HTMLManager.body.querySelectorAll(".anime > button"));
		for (let i = animeButtons.length - 1; i >= 0; i--) {
			let lElement = animeButtons[i];

			lElement.addEventListener("click", () => {
				this.generateEpisodeListHTML(this.animes[lElement.id]);
			});

		}
	}

	static generateEpisodeListHTML()
	{
		let episodeString = "";

		for (let i = 0; i < anime.episodes.length; i++) {

			const e = anime.episodes[i];
			let poster = e.posterLink ? `<img src="${e.posterLink}"/>` : "";

			episodeString += `
				<li class="episode" id="episode ${anime.id}-${e.episodeId}">
					<button>
						${poster}
						<h2>${e.name || "Episode " + e.episodeId}</h2>
					</button>
				</li>
			`
		}

		HTMLManager.body.innerHTML = 
		`<ul style="display:none" class="episodes">
			${episodeString}
		</ul>`

		let episodeButtons = Array.from(HTMLManager.body.querySelectorAll(".episode > button"));
		for (let i = episodeButtons.length - 1; i >= 0; i--) {
			let lElement = episodeButtons[i];

			lElement.addEventListener("click", () => {
				let args = lElement.id.split("-");
				Loader.getEpisodeInfo(args[0], args[1]);
			});
		}
	}

	static generateEpisodeInfo(info)
	{
		
	}
};
