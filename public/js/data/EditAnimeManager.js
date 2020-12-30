import ScreenManager from "./ScreenManager.js";
import HTMLManager from './HTMLManager.js';
import Loader from '../Loader.js';
import 
{
	ScreenElementManager,
	ScreenElement,
	ScreenElementFromElement,
	SrcElement,
	ButtonElement,
	InputElement,
	MenuButtonElement,
	ProgressIndicator,
	ProgressBarIndicator,
	VideoElement,
	AnimeVideoElement,
	AnimeElement,
	EpisodeElement,
	EpisodeWatchButton,
	ReturnButton,
	DownloadAllButton,
	EpisodeInfoElement,
	PlayerInfoElement,
	YtDlFormatElement,
	EpisodeDlProgress,
	EpisodeDlErrorProgress,
	Account,
	VideoTime
}
from './ScreenElement.js';

/**
 * Manage Screen
 * @memberof Public.Html
 */
class EditAnimeManager {
	
	/**
	 * @public
	 */
	static showAnimes() {
		ScreenManager.setTitle("Edit animes");

		HTMLManager.body.clear();

		var animesElms = [];
		for (let i = 0; i < ScreenManager.animes.length; i++) {
			let a = ScreenManager.animes[i];
			let animElm = new AnimeElement(a, (anime) => {
				ScreenElementManager.removeListenersOnAllElements();
				EditAnimeManager.showSettings(anime);
			});

			animElm.setBtnInfo();

			animesElms.push(animElm);
		}

		// **************** //
		// HTML STARTS HERE //
		// **************** //
		HTMLManager.body.append(
			new ScreenElement("h1").addClass("text-center").setText("Editing Animes"),
			new ScreenElement("br"),
			new ScreenElement("ul").setId("editAnimeList").addClass("list-group").appendList(animesElms)
		);
		// **************** //
		//  HTML ENDS HERE  //
		// **************** //

		ScreenElementManager.allowStaticListener();
	}

	/**
	 * @public
	 * @param {*}
	 */
	static showSettings(anime) {
		debugger;
		HTMLManager.body.clear();
		ScreenElementManager.allowStaticListener();
	}
}

export default EditAnimeManager;