window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "document",
          "helper",
          "index",
          "readm",
          "streamanim"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "list_namespace.html": [
          "document",
          "list",
          "list:namespac",
          "namespac"
        ],
        "server.JsonObject.html": [
          "class",
          "file",
          "json",
          "jsonobject",
          "load",
          "save",
          "server.jsonobject",
          "server~jsonobject"
        ],
        "server.JsonObject.html#loadSync": [
          "func",
          "function",
          "jsonobject#loadsync",
          "loadsync",
          "server.jsonobject#loadsync"
        ],
        "server.JsonObject.html#load": [
          "function",
          "jsonobject#load",
          "load",
          "server.jsonobject#load"
        ],
        "server.JsonObject.html#save": [
          "function",
          "jsonobject#sav",
          "promise.&lt;void&gt",
          "save",
          "server.jsonobject#sav"
        ],
        "server.DownloadEpisode.html": [
          "class",
          "download",
          "downloadepisod",
          "ensur",
          "episod",
          "event",
          "handl",
          "max",
          "on",
          "server.downloadepisod",
          "server~downloadepisod",
          "there'",
          "us",
          "videoplayer.download"
        ],
        "server.DownloadEpisode.html#.list": [
          "array.&lt;downloadepisode&gt",
          "downloadepisode.list",
          "list",
          "lt;static",
          "member",
          "readonly&gt",
          "server.downloadepisode.list"
        ],
        "server.DownloadEpisode.html#.toDownload": [
          "array.&lt;todownloaditem&gt",
          "downloadepisode.todownload",
          "lt;static&gt",
          "member",
          "server.downloadepisode.todownload",
          "todownload"
        ],
        "server.DownloadEpisode.html#.currentDownload": [
          "currentdownload",
          "downloadepisod",
          "downloadepisode.currentdownload",
          "lt;protect",
          "member",
          "server.downloadepisode.currentdownload",
          "static&gt"
        ],
        "server.DownloadEpisode.html#episode": [
          "download",
          "downloadepisode#episod",
          "episod",
          "lt;readonly&gt",
          "member",
          "server.downloadepisode#episod",
          "want"
        ],
        "server.DownloadEpisode.html#id": [
          "downloadepisod",
          "downloadepisode#id",
          "id",
          "instanc",
          "lt;readonly&gt",
          "member",
          "number",
          "server.downloadepisode#id",
          "uniqu"
        ],
        "server.DownloadEpisode.html#player": [
          "download",
          "downloadepisode#play",
          "epsod",
          "lt;privat",
          "member",
          "player",
          "readonly&gt",
          "server.downloadepisode#play",
          "us",
          "video",
          "videoplay"
        ],
        "server.DownloadEpisode.html#isReady": [
          "boolean",
          "done",
          "download",
          "downloadepisode#isreadi",
          "isreadi",
          "json",
          "lt;privat",
          "member",
          "readonly&gt",
          "save",
          "server.downloadepisode#isreadi"
        ],
        "server.DownloadEpisode.html#isPending": [
          "boolean",
          "download",
          "downloadepisode#ispend",
          "ispend",
          "lt;readonly&gt",
          "member",
          "pend",
          "server.downloadepisode#ispend"
        ],
        "server.DownloadEpisode.html#isDownloading": [
          "boolean",
          "download",
          "downloadepisode#isdownload",
          "isdownload",
          "lt;readonly&gt",
          "member",
          "ongo",
          "server.downloadepisode#isdownload"
        ],
        "server.DownloadEpisode.html#isError": [
          "boolean",
          "downloadepisode#iserror",
          "error",
          "iserror",
          "lt;readonly&gt",
          "member",
          "server.downloadepisode#iserror"
        ],
        "server.DownloadEpisode.html#error": [
          "downloadepisode#error",
          "error",
          "lt;readonly&gt",
          "member",
          "server.downloadepisode#error",
          "string"
        ],
        "server.DownloadEpisode.html#progress": [
          "download",
          "downloadepisode#progress",
          "lt;readonly&gt",
          "member",
          "number",
          "progress",
          "server.downloadepisode#progress"
        ],
        "server.DownloadEpisode.html#_setLocalPath": [
          "_setlocalpath",
          "call",
          "done",
          "downloadepisode#_setlocalpath",
          "episode#setlocalpath",
          "function",
          "it'",
          "itself",
          "lt;private&gt",
          "pathtofil",
          "readi",
          "server.downloadepisode#_setlocalpath",
          "set"
        ],
        "server.DownloadEpisode.html#download": [
          "download",
          "downloadepisode#download",
          "format",
          "function",
          "launch",
          "server.downloadepisode#download",
          "url"
        ],
        "server.DownloadEpisode.html#_setEvents": [
          "_setev",
          "downloadepisode#_setev",
          "emitt",
          "event",
          "function",
          "lt;private&gt",
          "server.downloadepisode#_setev",
          "set"
        ],
        "server.DownloadEpisode.html#destroy": [
          "destroy",
          "downloadepisode#destroy",
          "downloadepisode.list",
          "function",
          "instanc",
          "remov",
          "server.downloadepisode#destroy"
        ],
        "server.DownloadEpisode.html#.getFromEpisode": [
          "downloadepisode.getfromepisod",
          "episod",
          "function",
          "getfromepisod",
          "lt;static&gt",
          "server.downloadepisode.getfromepisod"
        ],
        "server.VideoPlayer.html": [
          "class",
          "download",
          "server.videoplay",
          "server~videoplay",
          "us",
          "video",
          "videoplay"
        ],
        "server.VideoPlayer.html#.list": [
          "array.&lt;videoplayer&gt",
          "list",
          "lt;static",
          "member",
          "readonly&gt",
          "server.videoplayer.list",
          "videoplay",
          "videoplayer.list"
        ],
        "server.VideoPlayer.html#name": [
          "lt;readonly&gt",
          "member",
          "name",
          "server.videoplayer#nam",
          "string",
          "videoplay",
          "videoplayer#nam"
        ],
        "server.VideoPlayer.html#isNatif": [
          "avail",
          "boolean",
          "edit",
          "isnatif",
          "lt;readonly&gt",
          "member",
          "server.videoplayer#isnatif",
          "true",
          "videoplay",
          "videoplayer#isnatif",
          "wront"
        ],
        "server.VideoPlayer.html#prefix": [
          "array.&lt;string&gt",
          "match",
          "member",
          "prefix",
          "prefix(",
          "server.videoplayer#prefix",
          "url",
          "videoplayer#prefix"
        ],
        "server.VideoPlayer.html#downloadable": [
          "boolean",
          "download",
          "member",
          "server",
          "server.videoplayer#download",
          "tell",
          "videoplayer#download"
        ],
        "server.VideoPlayer.html#autoDownload": [
          "autodownload",
          "boolean",
          "download",
          "episode.link",
          "member",
          "server.videoplayer#autodownload",
          "tell",
          "url",
          "us",
          "videoplayer#autodownload"
        ],
        "server.VideoPlayer.html#id": [
          "id",
          "lt;readonly&gt",
          "member",
          "server.videoplayer#id",
          "uniqu",
          "videoplay",
          "videoplayer#id"
        ],
        "server.VideoPlayer.html#toPublic": [
          "client",
          "function",
          "give",
          "inform",
          "public",
          "publicvideoplay",
          "return",
          "server.videoplayer#topubl",
          "topubl",
          "videoplay",
          "videoplayer#topubl"
        ],
        "server.VideoPlayer.html#_dispatchOnComplete": [
          "_dispatchoncomplet",
          "complet",
          "emitt",
          "event",
          "fire",
          "function",
          "lt;protected&gt",
          "recdownloaddata",
          "server.videoplayer#_dispatchoncomplet",
          "videoplayer#_dispatchoncomplet"
        ],
        "server.VideoPlayer.html#_dispatchOnProgress": [
          "_dispatchonprogress",
          "emitt",
          "event",
          "fire",
          "function",
          "lt;protected&gt",
          "progress",
          "recdownloaddata",
          "server.videoplayer#_dispatchonprogress",
          "videoplayer#_dispatchonprogress"
        ],
        "server.VideoPlayer.html#_dispatchOnError": [
          "_dispatchonerror",
          "emitt",
          "err",
          "error",
          "event",
          "fire",
          "function",
          "lt;protected&gt",
          "server.videoplayer#_dispatchonerror",
          "videoplayer#_dispatchonerror"
        ],
        "server.VideoPlayer.html#download": [
          "async",
          "download",
          "downloadurl",
          "eventemitt",
          "filenam",
          "format",
          "function",
          "given",
          "link",
          "server.videoplayer#download",
          "us",
          "video",
          "videoplayer#download"
        ],
        "server.VideoPlayer.html#hasPrefix": [
          "boolean",
          "compar",
          "function",
          "hasprefix",
          "list",
          "match",
          "prefix",
          "return",
          "server.videoplayer#hasprefix",
          "true",
          "url",
          "videoplayer#hasprefix"
        ],
        "server.VideoPlayer.html#.getPlayer": [
          "first",
          "function",
          "getplay",
          "lt;static&gt",
          "match",
          "prefix",
          "return",
          "server.videoplayer.getplay",
          "url",
          "videoplay",
          "videoplayer.getplay"
        ],
        "server.VideoPlayer.html#.getVideoPlayerById": [
          "corrispond",
          "function",
          "getvideoplayerbyid",
          "id",
          "lt;static&gt",
          "player",
          "return",
          "server.videoplayer.getvideoplayerbyid",
          "video",
          "videoplay",
          "videoplayer.getvideoplayerbyid"
        ],
        "server.YoutubePlayer.html": [
          "class",
          "download",
          "info",
          "server.youtubeplay",
          "server~youtubeplay",
          "us",
          "video",
          "youtub",
          "youtubeplay"
        ],
        "server.YoutubePlayer.html#.instance": [
          "class",
          "instanc",
          "lt;static",
          "member",
          "readonly&gt",
          "server.youtubeplayer.inst",
          "uniqu",
          "youtubeplayer.inst"
        ],
        "server.YoutubePlayer.html#download": [
          "async",
          "download",
          "downloadurl",
          "eventemitt",
          "format",
          "function",
          "localfilewithoutextens",
          "server.youtubeplayer#download",
          "video",
          "youtub",
          "youtubeplayer#download"
        ],
        "server.YoutubePlayer.html#getInfo": [
          "fetch",
          "function",
          "getinfo",
          "inform",
          "promise.&lt;ytdl.videoinfo&gt",
          "server.youtubeplayer#getinfo",
          "url",
          "video",
          "youtub",
          "youtubeplayer#getinfo"
        ],
        "server.Anime.html": [
          "anim",
          "class",
          "data",
          "index.json",
          "server.anim",
          "server~anim",
          "store",
          "updat"
        ],
        "server.Anime.html#.list": [
          "anim",
          "anime.list",
          "array.&lt;anime&gt",
          "list",
          "lt;static",
          "member",
          "readonly&gt",
          "server.anime.list"
        ],
        "server.Anime.html#.publicList": [
          "anim",
          "anime.publiclist",
          "inform",
          "list",
          "lt;static&gt",
          "map",
          "member",
          "public",
          "publiclist",
          "server.anime.publiclist"
        ],
        "server.Anime.html#jsonObject": [
          "anim",
          "anime#jsonobject",
          "data",
          "index.json",
          "json",
          "jsonobject",
          "lt;privat",
          "member",
          "object",
          "readonly&gt",
          "server.anime#jsonobject",
          "store",
          "us"
        ],
        "server.Anime.html#name": [
          "anim",
          "anime#nam",
          "member",
          "name",
          "server.anime#nam",
          "string"
        ],
        "server.Anime.html#thumbnailLink": [
          "anim",
          "anime#thumbnaillink",
          "member",
          "poster",
          "server.anime#thumbnaillink",
          "string",
          "thumbnaillink",
          "uri"
        ],
        "server.Anime.html#_path": [
          "_path",
          "anime#_path",
          "anime'",
          "folder",
          "lt;privat",
          "member",
          "path",
          "readonly&gt",
          "server.anime#_path",
          "string"
        ],
        "server.Anime.html#episodes": [
          "anime#episod",
          "array.&lt;episode&gt",
          "episod",
          "list",
          "member",
          "server.anime#episod"
        ],
        "server.Anime.html#id": [
          "anim",
          "anime#id",
          "id",
          "lt;readonly&gt",
          "member",
          "number",
          "server.anime#id",
          "uniqu"
        ],
        "server.Anime.html#path": [
          "anim",
          "anime#path",
          "folder",
          "lt;readonly&gt",
          "member",
          "path",
          "return",
          "server.anime#path"
        ],
        "server.Anime.html#toPublic": [
          "anim",
          "anime#topubl",
          "client",
          "function",
          "give",
          "inform",
          "public",
          "publicanim",
          "return",
          "server.anime#topubl",
          "topubl"
        ],
        "server.Anime.html#getEpisodeById": [
          "anime#getepisodebyid",
          "anime'",
          "episod",
          "episodeid",
          "episode|nul",
          "function",
          "getepisodebyid",
          "id",
          "server.anime#getepisodebyid"
        ],
        "server.Anime.html#updateJson": [
          "anime#updatejson",
          "animeconfig",
          "episod",
          "episodeconfig",
          "function",
          "gener",
          "get",
          "json",
          "promise.&lt;void&gt",
          "server.anime#updatejson",
          "updat",
          "updatejson"
        ],
        "server.Anime.html#toAnimeConfig": [
          "anim",
          "anime#toanimeconfig",
          "animeconfig",
          "function",
          "return",
          "server.anime#toanimeconfig",
          "toanimeconfig"
        ],
        "server.Episode.html": [
          "class",
          "data",
          "episod",
          "server.episod",
          "server~episod",
          "store"
        ],
        "server.Episode.html#name": [
          "episod",
          "episode#nam",
          "member",
          "name",
          "server.episode#nam",
          "string"
        ],
        "server.Episode.html#episodeId": [
          "between",
          "defin",
          "episod",
          "episode#episodeid",
          "episodeid",
          "id",
          "lt;readonly&gt",
          "member",
          "number",
          "order",
          "server.episode#episodeid",
          "uniqu"
        ],
        "server.Episode.html#posterLink": [
          "episod",
          "episode#posterlink",
          "member",
          "poster",
          "posterlink",
          "server.episode#posterlink",
          "string",
          "uri"
        ],
        "server.Episode.html#links": [
          "array.&lt;string&gt",
          "episode#link",
          "episode'",
          "link",
          "member",
          "server.episode#link",
          "stream"
        ],
        "server.Episode.html#localLink": [
          "episode#locallink",
          "episode'",
          "episode.locallink",
          "episode.setlocalpath",
          "file",
          "local",
          "locallink",
          "lt;readonly&gt",
          "member",
          "path",
          "see",
          "server.episode#locallink",
          "set",
          "string"
        ],
        "server.Episode.html#anime": [
          "anim",
          "episode#anim",
          "lt;readonly&gt",
          "member",
          "refer",
          "server.episode#anim"
        ],
        "server.Episode.html#isLocal": [
          "boolean",
          "episode#isloc",
          "isloc",
          "locallink",
          "member",
          "server.episode#isloc",
          "set",
          "true"
        ],
        "server.Episode.html#hasPoster": [
          "boolean",
          "episode#haspost",
          "haspost",
          "member",
          "posterlink",
          "server.episode#haspost",
          "set",
          "true"
        ],
        "server.Episode.html#path": [
          "default",
          "episode#path",
          "file",
          "local",
          "member",
          "path",
          "path.join($this.anime.path",
          "server.episode#path",
          "string",
          "this.episodeid",
          "us"
        ],
        "server.Episode.html#toPublic": [
          "client",
          "episod",
          "episode#topubl",
          "function",
          "give",
          "inform",
          "public",
          "publicepisod",
          "return",
          "server.episode#topubl",
          "topubl"
        ],
        "server.Episode.html#getInfo": [
          "episod",
          "episode#getinfo",
          "function",
          "getinfo",
          "info",
          "loadyoutubeinfo",
          "lt;async&gt",
          "promise.&lt;episodeinfo&gt",
          "server.episode#getinfo"
        ],
        "server.Episode.html#getUrlByPlayer": [
          "correspond",
          "episode#geturlbyplay",
          "first",
          "function",
          "geturlbyplay",
          "player",
          "server.episode#geturlbyplay",
          "string",
          "url",
          "videoplay"
        ],
        "server.Episode.html#setLocalPath": [
          "anim",
          "episode#setlocalpath",
          "episode.locallink",
          "function",
          "path",
          "promise.&lt;void&gt",
          "server.episode#setlocalpath",
          "set",
          "setlocalpath",
          "updat"
        ],
        "server.Episode.html#toEpisodeConfig": [
          "episod",
          "episode#toepisodeconfig",
          "episodeconfig",
          "function",
          "return",
          "server.episode#toepisodeconfig",
          "toepisodeconfig"
        ],
        "server.html": [
          "namespac",
          "server"
        ],
        "server.html#.createLogFile": [
          "creat",
          "createlogfil",
          "file",
          "folder",
          "function",
          "log",
          "lt;static&gt",
          "name",
          "new",
          "server.createlogfil",
          "uniqu"
        ],
        "server.https.html": [
          "http",
          "namespac",
          "server.http"
        ],
        "server.https.html#.start": [
          "add",
          "anim",
          "anime.publiclist",
          "animeid",
          "asset",
          "asset/ico",
          "asset/thumbnail/:text.png",
          "background",
          "backgroundcolor",
          "color",
          "config",
          "consolegroup",
          "css",
          "current",
          "download",
          "episod",
          "episode'",
          "episode/:animeid/:episodeid",
          "episodeid",
          "episodeinfo",
          "episodes'",
          "error",
          "folder",
          "font",
          "format",
          "function",
          "gener",
          "get/episode/download",
          "get/episode/info",
          "get/list",
          "get/list/download",
          "height",
          "html",
          "https.start",
          "ico",
          "id",
          "id\":anim",
          "imag",
          "index.html",
          "info",
          "js",
          "link",
          "list",
          "local",
          "lt;protect",
          "name",
          "new",
          "new/anim",
          "new/episod",
          "param",
          "path",
          "progress\":downloadepisode.progress",
          "return",
          "send",
          "server",
          "server.https.start",
          "show",
          "size",
          "start",
          "static&gt",
          "text",
          "textcolor",
          "textsiz",
          "thumbnail",
          "thumbnaillink",
          "url",
          "us",
          "videoplayerid",
          "width"
        ],
        "server.global.html": [
          "global",
          "namespac",
          "server.glob"
        ],
        "server.global.html#.__root": [
          "__root",
          "folder",
          "global.__root",
          "lt;static&gt",
          "member",
          "node.j",
          "projet",
          "server.global.__root",
          "string"
        ],
        "server.global.html#.__logFile": [
          "__logfil",
          "global.__logfil",
          "logfil",
          "lt;static&gt",
          "member",
          "path",
          "server.global.__logfil",
          "string"
        ],
        "server.global.html#.__tempFolder": [
          "__tempfold",
          "folder",
          "global.__tempfold",
          "lt;static&gt",
          "member",
          "node.j",
          "projet",
          "server.global.__tempfold",
          "string",
          "temp"
        ],
        "server.global.html#.GUIDGenerator": [
          "function",
          "global.guidgener",
          "guidgener",
          "lt;static&gt",
          "server.global.guidgener",
          "string"
        ],
        "server.global.html#.nameof": [
          "function",
          "global.nameof",
          "lt;static&gt",
          "nameof",
          "server.global.nameof",
          "varobject"
        ],
        "server.global.html#.overrideLine": [
          "function",
          "global.overridelin",
          "last",
          "line",
          "logfil",
          "lt;static&gt",
          "messag",
          "newlin",
          "overrid",
          "overridelin",
          "server.global.overridelin"
        ],
        "server.global.html#.writeLog": [
          "function",
          "global.writelog",
          "line",
          "logfil",
          "lt;static&gt",
          "messag",
          "newlin",
          "server.global.writelog",
          "write",
          "writelog"
        ],
        "server.global.html#.toFileName": [
          "filenam",
          "function",
          "global.tofilenam",
          "lt;static&gt",
          "replac",
          "server.global.tofilenam",
          "tofilenam"
        ],
        "server.image.html": [
          "imag",
          "namespac",
          "server.imag"
        ],
        "server.image.html#.exports.getThumbail": [
          "exports.getthumbail",
          "function",
          "getthumbail",
          "image.exports.getthumbail",
          "lt;static&gt",
          "option",
          "promise.&lt;string&gt",
          "server.image.exports.getthumbail",
          "text"
        ],
        "server.image.html#.ThumbailOption": [
          "image.thumbailopt",
          "server.image.thumbailopt",
          "thumbailopt",
          "typedef"
        ],
        "server.data.html": [
          "data",
          "namespac",
          "server.data"
        ],
        "server.data.config.html": [
          "config",
          "data.config",
          "namespac",
          "server.data.config"
        ],
        "server.data.config.html#.VideoPlayerConfig": [
          "config",
          "config.videoplayerconfig",
          "data.config.videoplayerconfig",
          "server.data.config.videoplayerconfig",
          "typedef",
          "videoplay",
          "videoplayerconfig"
        ],
        "server.data.config.html#.AnimeConfig": [
          "anim",
          "animeconfig",
          "config",
          "config.animeconfig",
          "data.config.animeconfig",
          "server.data.config.animeconfig",
          "typedef"
        ],
        "server.data.config.html#.Config": [
          "config",
          "config.config",
          "data.config.config",
          "server.data.config.config",
          "typedef"
        ],
        "server.data.config.html#.EpisodeConfig": [
          "config",
          "config.episodeconfig",
          "data.config.episodeconfig",
          "episod",
          "episodeconfig",
          "server.data.config.episodeconfig",
          "typedef"
        ],
        "server.data.public.html": [
          "data.publ",
          "namespac",
          "public",
          "server.data.publ"
        ],
        "server.data.public.html#.PublicVideoPlayer": [
          "data.public.publicvideoplay",
          "inform",
          "player",
          "public",
          "public.publicvideoplay",
          "publicvideoplay",
          "server.data.public.publicvideoplay",
          "typedef",
          "video"
        ],
        "server.data.public.html#.PlayerInfo": [
          "data.public.playerinfo",
          "info",
          "playerinfo",
          "public.playerinfo",
          "server.data.public.playerinfo",
          "typedef",
          "url"
        ],
        "server.data.public.html#.PublicAnime": [
          "anim",
          "data.public.publicanim",
          "inform",
          "public",
          "public.publicanim",
          "publicanim",
          "server.data.public.publicanim",
          "typedef"
        ],
        "server.data.public.html#.PublicEpisode": [
          "data.public.publicepisod",
          "episod",
          "inform",
          "public",
          "public.publicepisod",
          "publicepisod",
          "server.data.public.publicepisod",
          "typedef"
        ],
        "server.data.public.html#.EpisodeInfo": [
          "data.public.episodeinfo",
          "episod",
          "episodeinfo",
          "inform",
          "map",
          "playerinfo",
          "public.episodeinfo",
          "server.data.public.episodeinfo",
          "typedef",
          "url"
        ]
      },
      "length": 103
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "index.html": {
                            "ref": "index.html",
                            "tf": 70
                          },
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "w": {
              "docs": {},
              "n": {
                "docs": {},
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "server.DownloadEpisode.html": {
                            "ref": "server.DownloadEpisode.html",
                            "tf": 4.545454545454546
                          },
                          "server.DownloadEpisode.html#episode": {
                            "ref": "server.DownloadEpisode.html#episode",
                            "tf": 16.666666666666664
                          },
                          "server.DownloadEpisode.html#player": {
                            "ref": "server.DownloadEpisode.html#player",
                            "tf": 10
                          },
                          "server.DownloadEpisode.html#isReady": {
                            "ref": "server.DownloadEpisode.html#isReady",
                            "tf": 12.5
                          },
                          "server.DownloadEpisode.html#isPending": {
                            "ref": "server.DownloadEpisode.html#isPending",
                            "tf": 25
                          },
                          "server.DownloadEpisode.html#isDownloading": {
                            "ref": "server.DownloadEpisode.html#isDownloading",
                            "tf": 25
                          },
                          "server.DownloadEpisode.html#progress": {
                            "ref": "server.DownloadEpisode.html#progress",
                            "tf": 25
                          },
                          "server.DownloadEpisode.html#download": {
                            "ref": "server.DownloadEpisode.html#download",
                            "tf": 658.3333333333334
                          },
                          "server.VideoPlayer.html": {
                            "ref": "server.VideoPlayer.html",
                            "tf": 12.5
                          },
                          "server.VideoPlayer.html#downloadable": {
                            "ref": "server.VideoPlayer.html#downloadable",
                            "tf": 666.6666666666666
                          },
                          "server.VideoPlayer.html#autoDownload": {
                            "ref": "server.VideoPlayer.html#autoDownload",
                            "tf": 8.333333333333332
                          },
                          "server.VideoPlayer.html#download": {
                            "ref": "server.VideoPlayer.html#download",
                            "tf": 628.3333333333334
                          },
                          "server.YoutubePlayer.html": {
                            "ref": "server.YoutubePlayer.html",
                            "tf": 7.142857142857142
                          },
                          "server.YoutubePlayer.html#download": {
                            "ref": "server.YoutubePlayer.html#download",
                            "tf": 632.5
                          },
                          "server.https.html#.start": {
                            "ref": "server.https.html#.start",
                            "tf": 0.6944444444444444
                          }
                        },
                        "e": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "server.DownloadEpisode.html": {
                                        "ref": "server.DownloadEpisode.html",
                                        "tf": 650
                                      },
                                      "server.DownloadEpisode.html#.currentDownload": {
                                        "ref": "server.DownloadEpisode.html#.currentDownload",
                                        "tf": 25
                                      },
                                      "server.DownloadEpisode.html#id": {
                                        "ref": "server.DownloadEpisode.html#id",
                                        "tf": 12.5
                                      }
                                    },
                                    "e": {
                                      "docs": {},
                                      ".": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "server.DownloadEpisode.html#.list": {
                                                    "ref": "server.DownloadEpisode.html#.list",
                                                    "tf": 100
                                                  },
                                                  "server.DownloadEpisode.html#destroy": {
                                                    "ref": "server.DownloadEpisode.html#destroy",
                                                    "tf": 12.5
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "t": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "w": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "d": {
                                                            "docs": {
                                                              "server.DownloadEpisode.html#.toDownload": {
                                                                "ref": "server.DownloadEpisode.html#.toDownload",
                                                                "tf": 100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "c": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "w": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "d": {
                                                                      "docs": {
                                                                        "server.DownloadEpisode.html#.currentDownload": {
                                                                          "ref": "server.DownloadEpisode.html#.currentDownload",
                                                                          "tf": 100
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "g": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "f": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {
                                                                    "server.DownloadEpisode.html#.getFromEpisode": {
                                                                      "ref": "server.DownloadEpisode.html#.getFromEpisode",
                                                                      "tf": 100
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "#": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "server.DownloadEpisode.html#episode": {
                                                        "ref": "server.DownloadEpisode.html#episode",
                                                        "tf": 100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "r": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {
                                                    "server.DownloadEpisode.html#error": {
                                                      "ref": "server.DownloadEpisode.html#error",
                                                      "tf": 100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "i": {
                                          "docs": {},
                                          "d": {
                                            "docs": {
                                              "server.DownloadEpisode.html#id": {
                                                "ref": "server.DownloadEpisode.html#id",
                                                "tf": 100
                                              }
                                            }
                                          },
                                          "s": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {
                                                        "server.DownloadEpisode.html#isReady": {
                                                          "ref": "server.DownloadEpisode.html#isReady",
                                                          "tf": 100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "p": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "server.DownloadEpisode.html#isPending": {
                                                        "ref": "server.DownloadEpisode.html#isPending",
                                                        "tf": 100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "d": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "w": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "d": {
                                                            "docs": {
                                                              "server.DownloadEpisode.html#isDownloading": {
                                                                "ref": "server.DownloadEpisode.html#isDownloading",
                                                                "tf": 100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "e": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {
                                                        "server.DownloadEpisode.html#isError": {
                                                          "ref": "server.DownloadEpisode.html#isError",
                                                          "tf": 100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "p": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "y": {
                                                "docs": {
                                                  "server.DownloadEpisode.html#player": {
                                                    "ref": "server.DownloadEpisode.html#player",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "r": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {
                                                          "server.DownloadEpisode.html#progress": {
                                                            "ref": "server.DownloadEpisode.html#progress",
                                                            "tf": 100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "_": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {},
                                                                "h": {
                                                                  "docs": {
                                                                    "server.DownloadEpisode.html#_setLocalPath": {
                                                                      "ref": "server.DownloadEpisode.html#_setLocalPath",
                                                                      "tf": 100
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "e": {
                                                  "docs": {},
                                                  "v": {
                                                    "docs": {
                                                      "server.DownloadEpisode.html#_setEvents": {
                                                        "ref": "server.DownloadEpisode.html#_setEvents",
                                                        "tf": 100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "d": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "w": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {
                                                          "server.DownloadEpisode.html#download": {
                                                            "ref": "server.DownloadEpisode.html#download",
                                                            "tf": 100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "y": {
                                                      "docs": {
                                                        "server.DownloadEpisode.html#destroy": {
                                                          "ref": "server.DownloadEpisode.html#destroy",
                                                          "tf": 100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "u": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "server.VideoPlayer.html#download": {
                                  "ref": "server.VideoPlayer.html#download",
                                  "tf": 20
                                },
                                "server.YoutubePlayer.html#download": {
                                  "ref": "server.YoutubePlayer.html#download",
                                  "tf": 20
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "e": {
                "docs": {
                  "server.DownloadEpisode.html#isReady": {
                    "ref": "server.DownloadEpisode.html#isReady",
                    "tf": 12.5
                  },
                  "server.DownloadEpisode.html#_setLocalPath": {
                    "ref": "server.DownloadEpisode.html#_setLocalPath",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "y": {
                      "docs": {
                        "server.DownloadEpisode.html#destroy": {
                          "ref": "server.DownloadEpisode.html#destroy",
                          "tf": 712.5
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "server.Episode.html#episodeId": {
                      "ref": "server.Episode.html#episodeId",
                      "tf": 7.142857142857142
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "server.Episode.html#path": {
                          "ref": "server.Episode.html#path",
                          "tf": 4.545454545454546
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {
                  "server.Anime.html": {
                    "ref": "server.Anime.html",
                    "tf": 8.333333333333332
                  },
                  "server.Anime.html#jsonObject": {
                    "ref": "server.Anime.html#jsonObject",
                    "tf": 6.25
                  },
                  "server.Episode.html": {
                    "ref": "server.Episode.html",
                    "tf": 16.666666666666664
                  },
                  "server.data.html": {
                    "ref": "server.data.html",
                    "tf": 650
                  }
                },
                ".": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "g": {
                              "docs": {
                                "server.data.config.html": {
                                  "ref": "server.data.config.html",
                                  "tf": 100
                                }
                              },
                              ".": {
                                "docs": {},
                                "v": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "y": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "f": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "g": {
                                                                  "docs": {
                                                                    "server.data.config.html#.VideoPlayerConfig": {
                                                                      "ref": "server.data.config.html#.VideoPlayerConfig",
                                                                      "tf": 75
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "a": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {
                                                        "server.data.config.html#.AnimeConfig": {
                                                          "ref": "server.data.config.html#.AnimeConfig",
                                                          "tf": 75
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "c": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "f": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "g": {
                                            "docs": {
                                              "server.data.config.html#.Config": {
                                                "ref": "server.data.config.html#.Config",
                                                "tf": 75
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "g": {
                                                          "docs": {
                                                            "server.data.config.html#.EpisodeConfig": {
                                                              "ref": "server.data.config.html#.EpisodeConfig",
                                                              "tf": 75
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "p": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "b": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "server.data.public.html": {
                              "ref": "server.data.public.html",
                              "tf": 100
                            }
                          },
                          "i": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              ".": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "v": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "y": {
                                                              "docs": {
                                                                "server.data.public.html#.PublicVideoPlayer": {
                                                                  "ref": "server.data.public.html#.PublicVideoPlayer",
                                                                  "tf": 75
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "a": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {
                                                      "server.data.public.html#.PublicAnime": {
                                                        "ref": "server.data.public.html#.PublicAnime",
                                                        "tf": 75
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "e": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {
                                                          "server.data.public.html#.PublicEpisode": {
                                                            "ref": "server.data.public.html#.PublicEpisode",
                                                            "tf": 75
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "l": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "y": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {
                                                      "server.data.public.html#.PlayerInfo": {
                                                        "ref": "server.data.public.html#.PlayerInfo",
                                                        "tf": 75
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {
                                                        "server.data.public.html#.EpisodeInfo": {
                                                          "ref": "server.data.public.html#.EpisodeInfo",
                                                          "tf": 75
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "e": {
            "docs": {},
            "l": {
              "docs": {},
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 300
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "g": {
                "docs": {},
                "h": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "server.https.html#.start": {
                        "ref": "server.https.html#.start",
                        "tf": 0.6944444444444444
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {
                    "server.DownloadEpisode.html": {
                      "ref": "server.DownloadEpisode.html",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "p": {
                "docs": {},
                "r": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "x": {
                          "docs": {
                            "server.VideoPlayer.html#hasPrefix": {
                              "ref": "server.VideoPlayer.html#hasPrefix",
                              "tf": 633.3333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "o": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "server.Episode.html#hasPoster": {
                          "ref": "server.Episode.html#hasPoster",
                          "tf": 650
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "t": {
              "docs": {},
              "p": {
                "docs": {
                  "server.https.html": {
                    "ref": "server.https.html",
                    "tf": 650
                  }
                },
                "s": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "server.https.html#.start": {
                                  "ref": "server.https.html#.start",
                                  "tf": 100
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "l": {
                "docs": {
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 0.6944444444444444
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  },
                  ".": {
                    "docs": {},
                    "j": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {
                              "server.Anime.html": {
                                "ref": "server.Anime.html",
                                "tf": 8.333333333333332
                              },
                              "server.Anime.html#jsonObject": {
                                "ref": "server.Anime.html#jsonObject",
                                "tf": 6.25
                              }
                            }
                          }
                        }
                      }
                    },
                    "h": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "server.https.html#.start": {
                                "ref": "server.https.html#.start",
                                "tf": 0.3472222222222222
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "server.DownloadEpisode.html#id": {
                          "ref": "server.DownloadEpisode.html#id",
                          "tf": 12.5
                        },
                        "server.DownloadEpisode.html#destroy": {
                          "ref": "server.DownloadEpisode.html#destroy",
                          "tf": 12.5
                        },
                        "server.YoutubePlayer.html#.instance": {
                          "ref": "server.YoutubePlayer.html#.instance",
                          "tf": 650
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "o": {
                "docs": {
                  "server.YoutubePlayer.html": {
                    "ref": "server.YoutubePlayer.html",
                    "tf": 7.142857142857142
                  },
                  "server.Episode.html#getInfo": {
                    "ref": "server.Episode.html#getInfo",
                    "tf": 25
                  },
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 0.3472222222222222
                  },
                  "server.data.public.html#.PlayerInfo": {
                    "ref": "server.data.public.html#.PlayerInfo",
                    "tf": 25
                  }
                },
                "r": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "server.VideoPlayer.html#toPublic": {
                        "ref": "server.VideoPlayer.html#toPublic",
                        "tf": 14.285714285714285
                      },
                      "server.YoutubePlayer.html#getInfo": {
                        "ref": "server.YoutubePlayer.html#getInfo",
                        "tf": 12.5
                      },
                      "server.Anime.html#.publicList": {
                        "ref": "server.Anime.html#.publicList",
                        "tf": 10
                      },
                      "server.Anime.html#toPublic": {
                        "ref": "server.Anime.html#toPublic",
                        "tf": 14.285714285714285
                      },
                      "server.Episode.html#toPublic": {
                        "ref": "server.Episode.html#toPublic",
                        "tf": 14.285714285714285
                      },
                      "server.data.public.html#.PublicVideoPlayer": {
                        "ref": "server.data.public.html#.PublicVideoPlayer",
                        "tf": 12.5
                      },
                      "server.data.public.html#.PublicAnime": {
                        "ref": "server.data.public.html#.PublicAnime",
                        "tf": 16.666666666666664
                      },
                      "server.data.public.html#.PublicEpisode": {
                        "ref": "server.data.public.html#.PublicEpisode",
                        "tf": 16.666666666666664
                      },
                      "server.data.public.html#.EpisodeInfo": {
                        "ref": "server.data.public.html#.EpisodeInfo",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "server.DownloadEpisode.html#id": {
                "ref": "server.DownloadEpisode.html#id",
                "tf": 645.8333333333334
              },
              "server.VideoPlayer.html#id": {
                "ref": "server.VideoPlayer.html#id",
                "tf": 666.6666666666666
              },
              "server.VideoPlayer.html#.getVideoPlayerById": {
                "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                "tf": 25
              },
              "server.Anime.html#id": {
                "ref": "server.Anime.html#id",
                "tf": 650
              },
              "server.Anime.html#getEpisodeById": {
                "ref": "server.Anime.html#getEpisodeById",
                "tf": 16.666666666666664
              },
              "server.Episode.html#episodeId": {
                "ref": "server.Episode.html#episodeId",
                "tf": 7.142857142857142
              },
              "server.https.html#.start": {
                "ref": "server.https.html#.start",
                "tf": 2.083333333333333
              }
            },
            "\"": {
              "docs": {},
              ":": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "server.https.html#.start": {
                            "ref": "server.https.html#.start",
                            "tf": 0.6944444444444444
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "server.DownloadEpisode.html#isReady": {
                          "ref": "server.DownloadEpisode.html#isReady",
                          "tf": 625
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "server.DownloadEpisode.html#isPending": {
                        "ref": "server.DownloadEpisode.html#isPending",
                        "tf": 633.3333333333334
                      }
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "o": {
                "docs": {},
                "w": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "server.DownloadEpisode.html#isDownloading": {
                                "ref": "server.DownloadEpisode.html#isDownloading",
                                "tf": 633.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "server.DownloadEpisode.html#isError": {
                          "ref": "server.DownloadEpisode.html#isError",
                          "tf": 633.3333333333334
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "f": {
                      "docs": {
                        "server.VideoPlayer.html#isNatif": {
                          "ref": "server.VideoPlayer.html#isNatif",
                          "tf": 633.3333333333334
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "o": {
                "docs": {},
                "c": {
                  "docs": {
                    "server.Episode.html#isLocal": {
                      "ref": "server.Episode.html#isLocal",
                      "tf": 650
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "'": {
              "docs": {
                "server.DownloadEpisode.html#_setLocalPath": {
                  "ref": "server.DownloadEpisode.html#_setLocalPath",
                  "tf": 7.142857142857142
                }
              }
            },
            "s": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "server.DownloadEpisode.html#_setLocalPath": {
                        "ref": "server.DownloadEpisode.html#_setLocalPath",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "o": {
              "docs": {
                "server.https.html#.start": {
                  "ref": "server.https.html#.start",
                  "tf": 0.3472222222222222
                }
              }
            }
          },
          "m": {
            "docs": {},
            "a": {
              "docs": {},
              "g": {
                "docs": {
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 1.7361111111111112
                  },
                  "server.image.html": {
                    "ref": "server.image.html",
                    "tf": 650
                  }
                },
                "e": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "x": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  ".": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "h": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "b": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {
                                                            "server.image.html#.exports.getThumbail": {
                                                              "ref": "server.image.html#.exports.getThumbail",
                                                              "tf": 75
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "t": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "server.image.html#.ThumbailOption": {
                                              "ref": "server.image.html#.ThumbailOption",
                                              "tf": 100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                },
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "server.DownloadEpisode.html#.list": {
                                  "ref": "server.DownloadEpisode.html#.list",
                                  "tf": 25
                                },
                                "server.DownloadEpisode.html#player": {
                                  "ref": "server.DownloadEpisode.html#player",
                                  "tf": 25
                                },
                                "server.DownloadEpisode.html#isReady": {
                                  "ref": "server.DownloadEpisode.html#isReady",
                                  "tf": 25
                                },
                                "server.VideoPlayer.html#.list": {
                                  "ref": "server.VideoPlayer.html#.list",
                                  "tf": 25
                                },
                                "server.YoutubePlayer.html#.instance": {
                                  "ref": "server.YoutubePlayer.html#.instance",
                                  "tf": 33.33333333333333
                                },
                                "server.Anime.html#.list": {
                                  "ref": "server.Anime.html#.list",
                                  "tf": 25
                                },
                                "server.Anime.html#jsonObject": {
                                  "ref": "server.Anime.html#jsonObject",
                                  "tf": 25
                                },
                                "server.Anime.html#_path": {
                                  "ref": "server.Anime.html#_path",
                                  "tf": 25
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "i": {
                  "docs": {
                    "server.DownloadEpisode.html#_setLocalPath": {
                      "ref": "server.DownloadEpisode.html#_setLocalPath",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "v": {
                  "docs": {
                    "server.DownloadEpisode.html#destroy": {
                      "ref": "server.DownloadEpisode.html#destroy",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "server.VideoPlayer.html#toPublic": {
                        "ref": "server.VideoPlayer.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "server.VideoPlayer.html#hasPrefix": {
                        "ref": "server.VideoPlayer.html#hasPrefix",
                        "tf": 5
                      },
                      "server.VideoPlayer.html#.getPlayer": {
                        "ref": "server.VideoPlayer.html#.getPlayer",
                        "tf": 8.333333333333332
                      },
                      "server.VideoPlayer.html#.getVideoPlayerById": {
                        "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                        "tf": 12.5
                      },
                      "server.Anime.html#path": {
                        "ref": "server.Anime.html#path",
                        "tf": 12.5
                      },
                      "server.Anime.html#toPublic": {
                        "ref": "server.Anime.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "server.Anime.html#toAnimeConfig": {
                        "ref": "server.Anime.html#toAnimeConfig",
                        "tf": 16.666666666666664
                      },
                      "server.Episode.html#toPublic": {
                        "ref": "server.Episode.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "server.Episode.html#toEpisodeConfig": {
                        "ref": "server.Episode.html#toEpisodeConfig",
                        "tf": 16.666666666666664
                      },
                      "server.https.html#.start": {
                        "ref": "server.https.html#.start",
                        "tf": 0.3472222222222222
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "d": {
                "docs": {},
                "o": {
                  "docs": {},
                  "w": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "a": {
                                      "docs": {
                                        "server.VideoPlayer.html#_dispatchOnComplete": {
                                          "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                                          "tf": 25
                                        },
                                        "server.VideoPlayer.html#_dispatchOnProgress": {
                                          "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                                          "tf": 25
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "server.Episode.html#anime": {
                      "ref": "server.Episode.html#anime",
                      "tf": 25
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "a": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "server.global.html#.toFileName": {
                        "ref": "server.global.html#.toFileName",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "t": {
            "docs": {},
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "server.Episode.html#links": {
                        "ref": "server.Episode.html#links",
                        "tf": 16.666666666666664
                      }
                    },
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "m": {
                            "docs": {
                              "index.html": {
                                "ref": "index.html",
                                "tf": 300
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "server.DownloadEpisode.html#error": {
                        "ref": "server.DownloadEpisode.html#error",
                        "tf": 33.33333333333333
                      },
                      "server.VideoPlayer.html#name": {
                        "ref": "server.VideoPlayer.html#name",
                        "tf": 33.33333333333333
                      },
                      "server.Anime.html#name": {
                        "ref": "server.Anime.html#name",
                        "tf": 50
                      },
                      "server.Anime.html#thumbnailLink": {
                        "ref": "server.Anime.html#thumbnailLink",
                        "tf": 50
                      },
                      "server.Anime.html#_path": {
                        "ref": "server.Anime.html#_path",
                        "tf": 25
                      },
                      "server.Episode.html#name": {
                        "ref": "server.Episode.html#name",
                        "tf": 50
                      },
                      "server.Episode.html#posterLink": {
                        "ref": "server.Episode.html#posterLink",
                        "tf": 50
                      },
                      "server.Episode.html#localLink": {
                        "ref": "server.Episode.html#localLink",
                        "tf": 33.33333333333333
                      },
                      "server.Episode.html#path": {
                        "ref": "server.Episode.html#path",
                        "tf": 50
                      },
                      "server.Episode.html#getUrlByPlayer": {
                        "ref": "server.Episode.html#getUrlByPlayer",
                        "tf": 33.33333333333333
                      },
                      "server.global.html#.__root": {
                        "ref": "server.global.html#.__root",
                        "tf": 33.33333333333333
                      },
                      "server.global.html#.__logFile": {
                        "ref": "server.global.html#.__logFile",
                        "tf": 33.33333333333333
                      },
                      "server.global.html#.__tempFolder": {
                        "ref": "server.global.html#.__tempFolder",
                        "tf": 33.33333333333333
                      },
                      "server.global.html#.GUIDGenerator": {
                        "ref": "server.global.html#.GUIDGenerator",
                        "tf": 33.33333333333333
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "g": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "server.DownloadEpisode.html#.currentDownload": {
                              "ref": "server.DownloadEpisode.html#.currentDownload",
                              "tf": 25
                            },
                            "server.https.html#.start": {
                              "ref": "server.https.html#.start",
                              "tf": 25
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "t": {
                  "docs": {
                    "server.https.html#.start": {
                      "ref": "server.https.html#.start",
                      "tf": 625.3472222222222
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {
                    "server.Anime.html": {
                      "ref": "server.Anime.html",
                      "tf": 8.333333333333332
                    },
                    "server.Anime.html#jsonObject": {
                      "ref": "server.Anime.html#jsonObject",
                      "tf": 6.25
                    },
                    "server.Episode.html": {
                      "ref": "server.Episode.html",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "server.JsonObject.html": {
                    "ref": "server.JsonObject.html",
                    "tf": 12.5
                  },
                  "server.JsonObject.html#save": {
                    "ref": "server.JsonObject.html#save",
                    "tf": 650
                  },
                  "server.DownloadEpisode.html#isReady": {
                    "ref": "server.DownloadEpisode.html#isReady",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "r": {
              "docs": {},
              "v": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "server.VideoPlayer.html#downloadable": {
                        "ref": "server.VideoPlayer.html#downloadable",
                        "tf": 16.666666666666664
                      },
                      "server.html": {
                        "ref": "server.html",
                        "tf": 1900
                      },
                      "server.https.html#.start": {
                        "ref": "server.https.html#.start",
                        "tf": 0.6944444444444444
                      }
                    },
                    ".": {
                      "docs": {},
                      "j": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "b": {
                                  "docs": {},
                                  "j": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "server.JsonObject.html": {
                                              "ref": "server.JsonObject.html",
                                              "tf": 1150
                                            }
                                          },
                                          "#": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "server.JsonObject.html#load": {
                                                        "ref": "server.JsonObject.html#load",
                                                        "tf": 1100
                                                      }
                                                    },
                                                    "s": {
                                                      "docs": {},
                                                      "y": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "c": {
                                                            "docs": {
                                                              "server.JsonObject.html#loadSync": {
                                                                "ref": "server.JsonObject.html#loadSync",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "s": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "v": {
                                                  "docs": {
                                                    "server.JsonObject.html#save": {
                                                      "ref": "server.JsonObject.html#save",
                                                      "tf": 1100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "d": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "w": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {
                                                    "server.DownloadEpisode.html": {
                                                      "ref": "server.DownloadEpisode.html",
                                                      "tf": 1150
                                                    }
                                                  },
                                                  "e": {
                                                    "docs": {},
                                                    ".": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {
                                                                "server.DownloadEpisode.html#.list": {
                                                                  "ref": "server.DownloadEpisode.html#.list",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "t": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "d": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "w": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "l": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "a": {
                                                                        "docs": {},
                                                                        "d": {
                                                                          "docs": {
                                                                            "server.DownloadEpisode.html#.toDownload": {
                                                                              "ref": "server.DownloadEpisode.html#.toDownload",
                                                                              "tf": 1100
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "c": {
                                                        "docs": {},
                                                        "u": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "d": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "w": {
                                                                          "docs": {},
                                                                          "n": {
                                                                            "docs": {},
                                                                            "l": {
                                                                              "docs": {},
                                                                              "o": {
                                                                                "docs": {},
                                                                                "a": {
                                                                                  "docs": {},
                                                                                  "d": {
                                                                                    "docs": {
                                                                                      "server.DownloadEpisode.html#.currentDownload": {
                                                                                        "ref": "server.DownloadEpisode.html#.currentDownload",
                                                                                        "tf": 1100
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "g": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "f": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "m": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "p": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "s": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "d": {
                                                                                "docs": {
                                                                                  "server.DownloadEpisode.html#.getFromEpisode": {
                                                                                    "ref": "server.DownloadEpisode.html#.getFromEpisode",
                                                                                    "tf": 1100
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "#": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {
                                                                    "server.DownloadEpisode.html#episode": {
                                                                      "ref": "server.DownloadEpisode.html#episode",
                                                                      "tf": 1100
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "r": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {
                                                                  "server.DownloadEpisode.html#error": {
                                                                    "ref": "server.DownloadEpisode.html#error",
                                                                    "tf": 1100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "i": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {
                                                            "server.DownloadEpisode.html#id": {
                                                              "ref": "server.DownloadEpisode.html#id",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        },
                                                        "s": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {
                                                                      "server.DownloadEpisode.html#isReady": {
                                                                        "ref": "server.DownloadEpisode.html#isReady",
                                                                        "tf": 1100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "p": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "n": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {
                                                                    "server.DownloadEpisode.html#isPending": {
                                                                      "ref": "server.DownloadEpisode.html#isPending",
                                                                      "tf": 1100
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "d": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "w": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "l": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "a": {
                                                                        "docs": {},
                                                                        "d": {
                                                                          "docs": {
                                                                            "server.DownloadEpisode.html#isDownloading": {
                                                                              "ref": "server.DownloadEpisode.html#isDownloading",
                                                                              "tf": 1100
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "e": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {
                                                                      "server.DownloadEpisode.html#isError": {
                                                                        "ref": "server.DownloadEpisode.html#isError",
                                                                        "tf": 1100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "p": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "y": {
                                                              "docs": {
                                                                "server.DownloadEpisode.html#player": {
                                                                  "ref": "server.DownloadEpisode.html#player",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "r": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {},
                                                                    "s": {
                                                                      "docs": {
                                                                        "server.DownloadEpisode.html#progress": {
                                                                          "ref": "server.DownloadEpisode.html#progress",
                                                                          "tf": 1100
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "_": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "l": {
                                                                        "docs": {},
                                                                        "p": {
                                                                          "docs": {},
                                                                          "a": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {},
                                                                              "h": {
                                                                                "docs": {
                                                                                  "server.DownloadEpisode.html#_setLocalPath": {
                                                                                    "ref": "server.DownloadEpisode.html#_setLocalPath",
                                                                                    "tf": 1100
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "e": {
                                                                "docs": {},
                                                                "v": {
                                                                  "docs": {
                                                                    "server.DownloadEpisode.html#_setEvents": {
                                                                      "ref": "server.DownloadEpisode.html#_setEvents",
                                                                      "tf": 1100
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "d": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "w": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "d": {
                                                                      "docs": {
                                                                        "server.DownloadEpisode.html#download": {
                                                                          "ref": "server.DownloadEpisode.html#download",
                                                                          "tf": 1100
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "e": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "y": {
                                                                    "docs": {
                                                                      "server.DownloadEpisode.html#destroy": {
                                                                        "ref": "server.DownloadEpisode.html#destroy",
                                                                        "tf": 1100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {
                                "server.data.html": {
                                  "ref": "server.data.html",
                                  "tf": 1250
                                }
                              },
                              ".": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "f": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "g": {
                                            "docs": {
                                              "server.data.config.html": {
                                                "ref": "server.data.config.html",
                                                "tf": 1200
                                              }
                                            },
                                            ".": {
                                              "docs": {},
                                              "v": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "y": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "c": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "n": {
                                                                          "docs": {},
                                                                          "f": {
                                                                            "docs": {},
                                                                            "i": {
                                                                              "docs": {},
                                                                              "g": {
                                                                                "docs": {
                                                                                  "server.data.config.html#.VideoPlayerConfig": {
                                                                                    "ref": "server.data.config.html#.VideoPlayerConfig",
                                                                                    "tf": 1075
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "a": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "f": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "g": {
                                                                    "docs": {
                                                                      "server.data.config.html#.AnimeConfig": {
                                                                        "ref": "server.data.config.html#.AnimeConfig",
                                                                        "tf": 1075
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "c": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "g": {
                                                          "docs": {
                                                            "server.data.config.html#.Config": {
                                                              "ref": "server.data.config.html#.Config",
                                                              "tf": 1075
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "e": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "f": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {
                                                                          "server.data.config.html#.EpisodeConfig": {
                                                                            "ref": "server.data.config.html#.EpisodeConfig",
                                                                            "tf": 1075
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "p": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "l": {
                                        "docs": {
                                          "server.data.public.html": {
                                            "ref": "server.data.public.html",
                                            "tf": 1200
                                          }
                                        },
                                        "i": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            ".": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "b": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "v": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "d": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {},
                                                                    "p": {
                                                                      "docs": {},
                                                                      "l": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "y": {
                                                                            "docs": {
                                                                              "server.data.public.html#.PublicVideoPlayer": {
                                                                                "ref": "server.data.public.html#.PublicVideoPlayer",
                                                                                "tf": 1075
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "a": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "m": {
                                                                  "docs": {
                                                                    "server.data.public.html#.PublicAnime": {
                                                                      "ref": "server.data.public.html#.PublicAnime",
                                                                      "tf": 1075
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "e": {
                                                            "docs": {},
                                                            "p": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {},
                                                                    "d": {
                                                                      "docs": {
                                                                        "server.data.public.html#.PublicEpisode": {
                                                                          "ref": "server.data.public.html#.PublicEpisode",
                                                                          "tf": 1075
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "l": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "y": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "f": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {
                                                                    "server.data.public.html#.PlayerInfo": {
                                                                      "ref": "server.data.public.html#.PlayerInfo",
                                                                      "tf": 1075
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "e": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "n": {
                                                                "docs": {},
                                                                "f": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {
                                                                      "server.data.public.html#.EpisodeInfo": {
                                                                        "ref": "server.data.public.html#.EpisodeInfo",
                                                                        "tf": 1075
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "v": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "y": {
                                        "docs": {
                                          "server.VideoPlayer.html": {
                                            "ref": "server.VideoPlayer.html",
                                            "tf": 1150
                                          }
                                        },
                                        "e": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            ".": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "server.VideoPlayer.html#.list": {
                                                          "ref": "server.VideoPlayer.html#.list",
                                                          "tf": 1100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "g": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "y": {
                                                            "docs": {
                                                              "server.VideoPlayer.html#.getPlayer": {
                                                                "ref": "server.VideoPlayer.html#.getPlayer",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "v": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "p": {
                                                                "docs": {},
                                                                "l": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "y": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "b": {
                                                                            "docs": {},
                                                                            "y": {
                                                                              "docs": {},
                                                                              "i": {
                                                                                "docs": {},
                                                                                "d": {
                                                                                  "docs": {
                                                                                    "server.VideoPlayer.html#.getVideoPlayerById": {
                                                                                      "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                                                                                      "tf": 1100
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "#": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {
                                                      "server.VideoPlayer.html#name": {
                                                        "ref": "server.VideoPlayer.html#name",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "i": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "f": {
                                                            "docs": {
                                                              "server.VideoPlayer.html#isNatif": {
                                                                "ref": "server.VideoPlayer.html#isNatif",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "d": {
                                                  "docs": {
                                                    "server.VideoPlayer.html#id": {
                                                      "ref": "server.VideoPlayer.html#id",
                                                      "tf": 1100
                                                    }
                                                  }
                                                }
                                              },
                                              "p": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "x": {
                                                          "docs": {
                                                            "server.VideoPlayer.html#prefix": {
                                                              "ref": "server.VideoPlayer.html#prefix",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "d": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "w": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {
                                                                "server.VideoPlayer.html#downloadable": {
                                                                  "ref": "server.VideoPlayer.html#downloadable",
                                                                  "tf": 1100
                                                                },
                                                                "server.VideoPlayer.html#download": {
                                                                  "ref": "server.VideoPlayer.html#download",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "a": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "w": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "d": {
                                                                      "docs": {
                                                                        "server.VideoPlayer.html#autoDownload": {
                                                                          "ref": "server.VideoPlayer.html#autoDownload",
                                                                          "tf": 1100
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "t": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "b": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {
                                                            "server.VideoPlayer.html#toPublic": {
                                                              "ref": "server.VideoPlayer.html#toPublic",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "_": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "h": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "n": {
                                                                    "docs": {},
                                                                    "c": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "m": {
                                                                          "docs": {},
                                                                          "p": {
                                                                            "docs": {},
                                                                            "l": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "t": {
                                                                                  "docs": {
                                                                                    "server.VideoPlayer.html#_dispatchOnComplete": {
                                                                                      "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                                                                                      "tf": 1100
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "p": {
                                                                      "docs": {},
                                                                      "r": {
                                                                        "docs": {},
                                                                        "o": {
                                                                          "docs": {},
                                                                          "g": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "s": {
                                                                                    "docs": {
                                                                                      "server.VideoPlayer.html#_dispatchOnProgress": {
                                                                                        "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                                                                                        "tf": 1100
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "e": {
                                                                      "docs": {},
                                                                      "r": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {
                                                                                "server.VideoPlayer.html#_dispatchOnError": {
                                                                                  "ref": "server.VideoPlayer.html#_dispatchOnError",
                                                                                  "tf": 1100
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "h": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "f": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "x": {
                                                                "docs": {
                                                                  "server.VideoPlayer.html#hasPrefix": {
                                                                    "ref": "server.VideoPlayer.html#hasPrefix",
                                                                    "tf": 1100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "y": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "b": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "y": {
                                            "docs": {
                                              "server.YoutubePlayer.html": {
                                                "ref": "server.YoutubePlayer.html",
                                                "tf": 1150
                                              }
                                            },
                                            "e": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                ".": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {
                                                            "server.YoutubePlayer.html#.instance": {
                                                              "ref": "server.YoutubePlayer.html#.instance",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "#": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "w": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {
                                                                    "server.YoutubePlayer.html#download": {
                                                                      "ref": "server.YoutubePlayer.html#download",
                                                                      "tf": 1100
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "g": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "f": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {
                                                                  "server.YoutubePlayer.html#getInfo": {
                                                                    "ref": "server.YoutubePlayer.html#getInfo",
                                                                    "tf": 1100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "a": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "m": {
                              "docs": {
                                "server.Anime.html": {
                                  "ref": "server.Anime.html",
                                  "tf": 1150
                                }
                              },
                              "e": {
                                "docs": {},
                                ".": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "server.Anime.html#.list": {
                                              "ref": "server.Anime.html#.list",
                                              "tf": 1100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "p": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "server.Anime.html#.publicList": {
                                                          "ref": "server.Anime.html#.publicList",
                                                          "tf": 1100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "#": {
                                  "docs": {},
                                  "j": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "b": {
                                              "docs": {},
                                              "j": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "server.Anime.html#jsonObject": {
                                                          "ref": "server.Anime.html#jsonObject",
                                                          "tf": 1100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "n": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "m": {
                                        "docs": {
                                          "server.Anime.html#name": {
                                            "ref": "server.Anime.html#name",
                                            "tf": 1100
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "t": {
                                    "docs": {},
                                    "h": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "b": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "k": {
                                                            "docs": {
                                                              "server.Anime.html#thumbnailLink": {
                                                                "ref": "server.Anime.html#thumbnailLink",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "o": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "b": {
                                            "docs": {},
                                            "l": {
                                              "docs": {
                                                "server.Anime.html#toPublic": {
                                                  "ref": "server.Anime.html#toPublic",
                                                  "tf": 1100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "a": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "f": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {
                                                              "server.Anime.html#toAnimeConfig": {
                                                                "ref": "server.Anime.html#toAnimeConfig",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "_": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "h": {
                                            "docs": {
                                              "server.Anime.html#_path": {
                                                "ref": "server.Anime.html#_path",
                                                "tf": 1100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "server.Anime.html#episodes": {
                                                  "ref": "server.Anime.html#episodes",
                                                  "tf": 1100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "i": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "server.Anime.html#id": {
                                          "ref": "server.Anime.html#id",
                                          "tf": 1100
                                        }
                                      }
                                    }
                                  },
                                  "p": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {
                                            "server.Anime.html#path": {
                                              "ref": "server.Anime.html#path",
                                              "tf": 1100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "g": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "b": {
                                                        "docs": {},
                                                        "y": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {
                                                                "server.Anime.html#getEpisodeById": {
                                                                  "ref": "server.Anime.html#getEpisodeById",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "u": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "j": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {
                                                        "server.Anime.html#updateJson": {
                                                          "ref": "server.Anime.html#updateJson",
                                                          "tf": 1100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "e": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "server.Episode.html": {
                                      "ref": "server.Episode.html",
                                      "tf": 1150
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "#": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "m": {
                                            "docs": {
                                              "server.Episode.html#name": {
                                                "ref": "server.Episode.html#name",
                                                "tf": 1100
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "e": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {
                                                          "server.Episode.html#episodeId": {
                                                            "ref": "server.Episode.html#episodeId",
                                                            "tf": 1100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "p": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "k": {
                                                          "docs": {
                                                            "server.Episode.html#posterLink": {
                                                              "ref": "server.Episode.html#posterLink",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "h": {
                                              "docs": {
                                                "server.Episode.html#path": {
                                                  "ref": "server.Episode.html#path",
                                                  "tf": 1100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "l": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "k": {
                                              "docs": {
                                                "server.Episode.html#links": {
                                                  "ref": "server.Episode.html#links",
                                                  "tf": 1100
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "o": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "k": {
                                                        "docs": {
                                                          "server.Episode.html#localLink": {
                                                            "ref": "server.Episode.html#localLink",
                                                            "tf": 1100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "a": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "m": {
                                              "docs": {
                                                "server.Episode.html#anime": {
                                                  "ref": "server.Episode.html#anime",
                                                  "tf": 1100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "c": {
                                                "docs": {
                                                  "server.Episode.html#isLocal": {
                                                    "ref": "server.Episode.html#isLocal",
                                                    "tf": 1100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "h": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "server.Episode.html#hasPoster": {
                                                        "ref": "server.Episode.html#hasPoster",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "t": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "b": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {
                                                    "server.Episode.html#toPublic": {
                                                      "ref": "server.Episode.html#toPublic",
                                                      "tf": 1100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "f": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "g": {
                                                                    "docs": {
                                                                      "server.Episode.html#toEpisodeConfig": {
                                                                        "ref": "server.Episode.html#toEpisodeConfig",
                                                                        "tf": 1100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "g": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {
                                                      "server.Episode.html#getInfo": {
                                                        "ref": "server.Episode.html#getInfo",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "u": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "b": {
                                                    "docs": {},
                                                    "y": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "y": {
                                                              "docs": {
                                                                "server.Episode.html#getUrlByPlayer": {
                                                                  "ref": "server.Episode.html#getUrlByPlayer",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "s": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "h": {
                                                              "docs": {
                                                                "server.Episode.html#setLocalPath": {
                                                                  "ref": "server.Episode.html#setLocalPath",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "c": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "f": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "l": {
                                              "docs": {
                                                "server.html#.createLogFile": {
                                                  "ref": "server.html#.createLogFile",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "h": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "p": {
                              "docs": {
                                "server.https.html": {
                                  "ref": "server.https.html",
                                  "tf": 1250
                                }
                              },
                              "s": {
                                "docs": {},
                                ".": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "server.https.html#.start": {
                                                "ref": "server.https.html#.start",
                                                "tf": 1100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "g": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "b": {
                              "docs": {
                                "server.global.html": {
                                  "ref": "server.global.html",
                                  "tf": 1250
                                }
                              },
                              "a": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  ".": {
                                    "docs": {},
                                    "_": {
                                      "docs": {},
                                      "_": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "server.global.html#.__root": {
                                                    "ref": "server.global.html#.__root",
                                                    "tf": 1100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "l": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "f": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {
                                                      "server.global.html#.__logFile": {
                                                        "ref": "server.global.html#.__logFile",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "t": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {
                                                          "server.global.html#.__tempFolder": {
                                                            "ref": "server.global.html#.__tempFolder",
                                                            "tf": 1100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "g": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {
                                                        "server.global.html#.GUIDGenerator": {
                                                          "ref": "server.global.html#.GUIDGenerator",
                                                          "tf": 1100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "n": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "f": {
                                                "docs": {
                                                  "server.global.html#.nameof": {
                                                    "ref": "server.global.html#.nameof",
                                                    "tf": 1100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "o": {
                                      "docs": {},
                                      "v": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {
                                                            "server.global.html#.overrideLine": {
                                                              "ref": "server.global.html#.overrideLine",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "w": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "g": {
                                                    "docs": {
                                                      "server.global.html#.writeLog": {
                                                        "ref": "server.global.html#.writeLog",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "t": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "f": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {
                                                        "server.global.html#.toFileName": {
                                                          "ref": "server.global.html#.toFileName",
                                                          "tf": 1100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "i": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "g": {
                              "docs": {
                                "server.image.html": {
                                  "ref": "server.image.html",
                                  "tf": 1250
                                }
                              },
                              "e": {
                                "docs": {},
                                ".": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "x": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                ".": {
                                                  "docs": {},
                                                  "g": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "h": {
                                                            "docs": {},
                                                            "u": {
                                                              "docs": {},
                                                              "m": {
                                                                "docs": {},
                                                                "b": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "l": {
                                                                        "docs": {
                                                                          "server.image.html#.exports.getThumbail": {
                                                                            "ref": "server.image.html#.exports.getThumbail",
                                                                            "tf": 1075
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "t": {
                                    "docs": {},
                                    "h": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "b": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {
                                                          "server.image.html#.ThumbailOption": {
                                                            "ref": "server.image.html#.ThumbailOption",
                                                            "tf": 1100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "~": {
                      "docs": {},
                      "j": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "b": {
                                  "docs": {},
                                  "j": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "server.JsonObject.html": {
                                              "ref": "server.JsonObject.html",
                                              "tf": 100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "d": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "w": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {
                                                    "server.DownloadEpisode.html": {
                                                      "ref": "server.DownloadEpisode.html",
                                                      "tf": 100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "v": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "y": {
                                        "docs": {
                                          "server.VideoPlayer.html": {
                                            "ref": "server.VideoPlayer.html",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "y": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "b": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "y": {
                                            "docs": {
                                              "server.YoutubePlayer.html": {
                                                "ref": "server.YoutubePlayer.html",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "a": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "m": {
                              "docs": {
                                "server.Anime.html": {
                                  "ref": "server.Anime.html",
                                  "tf": 100
                                }
                              }
                            }
                          }
                        }
                      },
                      "e": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "server.Episode.html": {
                                      "ref": "server.Episode.html",
                                      "tf": 100
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {
                "server.DownloadEpisode.html#_setLocalPath": {
                  "ref": "server.DownloadEpisode.html#_setLocalPath",
                  "tf": 7.142857142857142
                },
                "server.DownloadEpisode.html#_setEvents": {
                  "ref": "server.DownloadEpisode.html#_setEvents",
                  "tf": 16.666666666666664
                },
                "server.Episode.html#localLink": {
                  "ref": "server.Episode.html#localLink",
                  "tf": 6.25
                },
                "server.Episode.html#isLocal": {
                  "ref": "server.Episode.html#isLocal",
                  "tf": 16.666666666666664
                },
                "server.Episode.html#hasPoster": {
                  "ref": "server.Episode.html#hasPoster",
                  "tf": 16.666666666666664
                },
                "server.Episode.html#setLocalPath": {
                  "ref": "server.Episode.html#setLocalPath",
                  "tf": 12.5
                }
              },
              "l": {
                "docs": {},
                "o": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "h": {
                                "docs": {
                                  "server.Episode.html#setLocalPath": {
                                    "ref": "server.Episode.html#setLocalPath",
                                    "tf": 633.3333333333334
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {
                "server.Episode.html#localLink": {
                  "ref": "server.Episode.html#localLink",
                  "tf": 6.25
                }
              }
            },
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 2.083333333333333
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "o": {
              "docs": {},
              "w": {
                "docs": {
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 0.3472222222222222
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "z": {
              "docs": {},
              "e": {
                "docs": {
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 0.3472222222222222
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      },
                      "server.global.html": {
                        "ref": "server.global.html",
                        "tf": 650
                      }
                    },
                    ".": {
                      "docs": {},
                      "_": {
                        "docs": {},
                        "_": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "server.global.html#.__root": {
                                      "ref": "server.global.html#.__root",
                                      "tf": 100
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "l": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "f": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "l": {
                                      "docs": {
                                        "server.global.html#.__logFile": {
                                          "ref": "server.global.html#.__logFile",
                                          "tf": 100
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "server.global.html#.__tempFolder": {
                                              "ref": "server.global.html#.__tempFolder",
                                              "tf": 100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "g": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "r": {
                                        "docs": {
                                          "server.global.html#.GUIDGenerator": {
                                            "ref": "server.global.html#.GUIDGenerator",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "f": {
                                  "docs": {
                                    "server.global.html#.nameof": {
                                      "ref": "server.global.html#.nameof",
                                      "tf": 100
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "o": {
                        "docs": {},
                        "v": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "n": {
                                            "docs": {
                                              "server.global.html#.overrideLine": {
                                                "ref": "server.global.html#.overrideLine",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "w": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "g": {
                                      "docs": {
                                        "server.global.html#.writeLog": {
                                          "ref": "server.global.html#.writeLog",
                                          "tf": 100
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "f": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "m": {
                                        "docs": {
                                          "server.global.html#.toFileName": {
                                            "ref": "server.global.html#.toFileName",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "server.Anime.html#updateJson": {
                  "ref": "server.Anime.html#updateJson",
                  "tf": 7.142857142857142
                }
              },
              "f": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "server.DownloadEpisode.html#.getFromEpisode": {
                                      "ref": "server.DownloadEpisode.html#.getFromEpisode",
                                      "tf": 633.3333333333334
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "y": {
                      "docs": {
                        "server.VideoPlayer.html#.getPlayer": {
                          "ref": "server.VideoPlayer.html#.getPlayer",
                          "tf": 625
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "y": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "y": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "d": {
                                            "docs": {
                                              "server.VideoPlayer.html#.getVideoPlayerById": {
                                                "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                                                "tf": 625
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "o": {
                      "docs": {
                        "server.YoutubePlayer.html#getInfo": {
                          "ref": "server.YoutubePlayer.html#getInfo",
                          "tf": 633.3333333333334
                        },
                        "server.Episode.html#getInfo": {
                          "ref": "server.Episode.html#getInfo",
                          "tf": 625
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "p": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "y": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "server.Anime.html#getEpisodeById": {
                                        "ref": "server.Anime.html#getEpisodeById",
                                        "tf": 633.3333333333334
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "b": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "y": {
                                "docs": {
                                  "server.Episode.html#getUrlByPlayer": {
                                    "ref": "server.Episode.html#getUrlByPlayer",
                                    "tf": 633.3333333333334
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "/": {
                "docs": {},
                "e": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "/": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "w": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {
                                                  "server.https.html#.start": {
                                                    "ref": "server.https.html#.start",
                                                    "tf": 0.3472222222222222
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "i": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "f": {
                                      "docs": {},
                                      "o": {
                                        "docs": {
                                          "server.https.html#.start": {
                                            "ref": "server.https.html#.start",
                                            "tf": 0.3472222222222222
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "server.https.html#.start": {
                            "ref": "server.https.html#.start",
                            "tf": 0.3472222222222222
                          }
                        },
                        "/": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "w": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "server.https.html#.start": {
                                              "ref": "server.https.html#.start",
                                              "tf": 0.3472222222222222
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "h": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "b": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "server.image.html#.exports.getThumbail": {
                                  "ref": "server.image.html#.exports.getThumbail",
                                  "tf": 75
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "server.Anime.html#updateJson": {
                      "ref": "server.Anime.html#updateJson",
                      "tf": 7.142857142857142
                    },
                    "server.https.html#.start": {
                      "ref": "server.https.html#.start",
                      "tf": 0.6944444444444444
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "server.VideoPlayer.html#toPublic": {
                    "ref": "server.VideoPlayer.html#toPublic",
                    "tf": 7.142857142857142
                  },
                  "server.Anime.html#toPublic": {
                    "ref": "server.Anime.html#toPublic",
                    "tf": 7.142857142857142
                  },
                  "server.Episode.html#toPublic": {
                    "ref": "server.Episode.html#toPublic",
                    "tf": 7.142857142857142
                  }
                },
                "n": {
                  "docs": {
                    "server.VideoPlayer.html#download": {
                      "ref": "server.VideoPlayer.html#download",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "i": {
              "docs": {},
              "d": {
                "docs": {},
                "g": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "server.global.html#.GUIDGenerator": {
                              "ref": "server.global.html#.GUIDGenerator",
                              "tf": 633.3333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "server.JsonObject.html": {
                      "ref": "server.JsonObject.html",
                      "tf": 110
                    },
                    "server.DownloadEpisode.html": {
                      "ref": "server.DownloadEpisode.html",
                      "tf": 114.54545454545455
                    },
                    "server.VideoPlayer.html": {
                      "ref": "server.VideoPlayer.html",
                      "tf": 122.5
                    },
                    "server.YoutubePlayer.html": {
                      "ref": "server.YoutubePlayer.html",
                      "tf": 117.14285714285714
                    },
                    "server.YoutubePlayer.html#.instance": {
                      "ref": "server.YoutubePlayer.html#.instance",
                      "tf": 16.666666666666664
                    },
                    "server.Anime.html": {
                      "ref": "server.Anime.html",
                      "tf": 110
                    },
                    "server.Episode.html": {
                      "ref": "server.Episode.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "server.VideoPlayer.html#toPublic": {
                        "ref": "server.VideoPlayer.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "server.Anime.html#toPublic": {
                        "ref": "server.Anime.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "server.Episode.html#toPublic": {
                        "ref": "server.Episode.html#toPublic",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "server.https.html#.start": {
                          "ref": "server.https.html#.start",
                          "tf": 0.3472222222222222
                        }
                      },
                      "d": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "w": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "server.DownloadEpisode.html#.currentDownload": {
                                          "ref": "server.DownloadEpisode.html#.currentDownload",
                                          "tf": 625
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "server.DownloadEpisode.html#_setLocalPath": {
                    "ref": "server.DownloadEpisode.html#_setLocalPath",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "server.VideoPlayer.html#_dispatchOnComplete": {
                          "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                },
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "server.VideoPlayer.html#hasPrefix": {
                        "ref": "server.VideoPlayer.html#hasPrefix",
                        "tf": 5
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "r": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "server.VideoPlayer.html#.getVideoPlayerById": {
                                "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                                "tf": 12.5
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "server.Episode.html#getUrlByPlayer": {
                                "ref": "server.Episode.html#getUrlByPlayer",
                                "tf": 12.5
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "server.https.html#.start": {
                      "ref": "server.https.html#.start",
                      "tf": 0.6944444444444444
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "server.https.html#.start": {
                        "ref": "server.https.html#.start",
                        "tf": 25
                      },
                      "server.data.config.html": {
                        "ref": "server.data.config.html",
                        "tf": 600
                      },
                      "server.data.config.html#.VideoPlayerConfig": {
                        "ref": "server.data.config.html#.VideoPlayerConfig",
                        "tf": 25
                      },
                      "server.data.config.html#.AnimeConfig": {
                        "ref": "server.data.config.html#.AnimeConfig",
                        "tf": 25
                      },
                      "server.data.config.html#.Config": {
                        "ref": "server.data.config.html#.Config",
                        "tf": 675
                      },
                      "server.data.config.html#.EpisodeConfig": {
                        "ref": "server.data.config.html#.EpisodeConfig",
                        "tf": 25
                      }
                    },
                    ".": {
                      "docs": {},
                      "v": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "y": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {
                                                          "server.data.config.html#.VideoPlayerConfig": {
                                                            "ref": "server.data.config.html#.VideoPlayerConfig",
                                                            "tf": 75
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "a": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "f": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "g": {
                                            "docs": {
                                              "server.data.config.html#.AnimeConfig": {
                                                "ref": "server.data.config.html#.AnimeConfig",
                                                "tf": 75
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "g": {
                                  "docs": {
                                    "server.data.config.html#.Config": {
                                      "ref": "server.data.config.html#.Config",
                                      "tf": 75
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "e": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "f": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "g": {
                                                "docs": {
                                                  "server.data.config.html#.EpisodeConfig": {
                                                    "ref": "server.data.config.html#.EpisodeConfig",
                                                    "tf": 75
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "o": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "g": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "p": {
                                "docs": {
                                  "server.https.html#.start": {
                                    "ref": "server.https.html#.start",
                                    "tf": 0.3472222222222222
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "server.html#.createLogFile": {
                      "ref": "server.html#.createLogFile",
                      "tf": 6.25
                    }
                  },
                  "e": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "g": {
                          "docs": {},
                          "f": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "l": {
                                "docs": {
                                  "server.html#.createLogFile": {
                                    "ref": "server.html#.createLogFile",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "s": {
              "docs": {
                "server.https.html#.start": {
                  "ref": "server.https.html#.start",
                  "tf": 0.6944444444444444
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "list_namespace.html": {
                    "ref": "list_namespace.html",
                    "tf": 110
                  },
                  "server.DownloadEpisode.html#.list": {
                    "ref": "server.DownloadEpisode.html#.list",
                    "tf": 625
                  },
                  "server.VideoPlayer.html#.list": {
                    "ref": "server.VideoPlayer.html#.list",
                    "tf": 650
                  },
                  "server.VideoPlayer.html#hasPrefix": {
                    "ref": "server.VideoPlayer.html#hasPrefix",
                    "tf": 5
                  },
                  "server.Anime.html#.list": {
                    "ref": "server.Anime.html#.list",
                    "tf": 650
                  },
                  "server.Anime.html#.publicList": {
                    "ref": "server.Anime.html#.publicList",
                    "tf": 10
                  },
                  "server.Anime.html#episodes": {
                    "ref": "server.Anime.html#episodes",
                    "tf": 25
                  },
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 1.0416666666666665
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "c": {
                                  "docs": {
                                    "list_namespace.html": {
                                      "ref": "list_namespace.html",
                                      "tf": 1300
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "k": {
                "docs": {
                  "server.VideoPlayer.html#download": {
                    "ref": "server.VideoPlayer.html#download",
                    "tf": 8.333333333333332
                  },
                  "server.Episode.html#links": {
                    "ref": "server.Episode.html#links",
                    "tf": 666.6666666666666
                  },
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 0.3472222222222222
                  }
                }
              },
              "e": {
                "docs": {
                  "server.global.html#.overrideLine": {
                    "ref": "server.global.html#.overrideLine",
                    "tf": 12.5
                  },
                  "server.global.html#.writeLog": {
                    "ref": "server.global.html#.writeLog",
                    "tf": 16.666666666666664
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "server.JsonObject.html": {
                    "ref": "server.JsonObject.html",
                    "tf": 12.5
                  },
                  "server.JsonObject.html#load": {
                    "ref": "server.JsonObject.html#load",
                    "tf": 700
                  }
                },
                "s": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "server.JsonObject.html#loadSync": {
                            "ref": "server.JsonObject.html#loadSync",
                            "tf": 650
                          }
                        }
                      }
                    }
                  }
                },
                "y": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "b": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "o": {
                                      "docs": {
                                        "server.Episode.html#getInfo": {
                                          "ref": "server.Episode.html#getInfo",
                                          "tf": 25
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {
                    "server.Episode.html#localLink": {
                      "ref": "server.Episode.html#localLink",
                      "tf": 6.25
                    },
                    "server.Episode.html#path": {
                      "ref": "server.Episode.html#path",
                      "tf": 13.636363636363635
                    },
                    "server.https.html#.start": {
                      "ref": "server.https.html#.start",
                      "tf": 0.3472222222222222
                    }
                  },
                  "f": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "w": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "x": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {
                                                      "server.YoutubePlayer.html#download": {
                                                        "ref": "server.YoutubePlayer.html#download",
                                                        "tf": 20
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "l": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "k": {
                          "docs": {
                            "server.Episode.html#localLink": {
                              "ref": "server.Episode.html#localLink",
                              "tf": 633.3333333333334
                            },
                            "server.Episode.html#isLocal": {
                              "ref": "server.Episode.html#isLocal",
                              "tf": 16.666666666666664
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {
                "server.html#.createLogFile": {
                  "ref": "server.html#.createLogFile",
                  "tf": 12.5
                }
              },
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "server.global.html#.__logFile": {
                        "ref": "server.global.html#.__logFile",
                        "tf": 25
                      },
                      "server.global.html#.overrideLine": {
                        "ref": "server.global.html#.overrideLine",
                        "tf": 12.5
                      },
                      "server.global.html#.writeLog": {
                        "ref": "server.global.html#.writeLog",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {
                            "server.DownloadEpisode.html#.list": {
                              "ref": "server.DownloadEpisode.html#.list",
                              "tf": 25
                            },
                            "server.VideoPlayer.html#.list": {
                              "ref": "server.VideoPlayer.html#.list",
                              "tf": 25
                            },
                            "server.YoutubePlayer.html#.instance": {
                              "ref": "server.YoutubePlayer.html#.instance",
                              "tf": 33.33333333333333
                            },
                            "server.Anime.html#.list": {
                              "ref": "server.Anime.html#.list",
                              "tf": 25
                            }
                          },
                          "&": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "server.DownloadEpisode.html#.toDownload": {
                                    "ref": "server.DownloadEpisode.html#.toDownload",
                                    "tf": 33.33333333333333
                                  },
                                  "server.DownloadEpisode.html#.getFromEpisode": {
                                    "ref": "server.DownloadEpisode.html#.getFromEpisode",
                                    "tf": 33.33333333333333
                                  },
                                  "server.VideoPlayer.html#.getPlayer": {
                                    "ref": "server.VideoPlayer.html#.getPlayer",
                                    "tf": 25
                                  },
                                  "server.VideoPlayer.html#.getVideoPlayerById": {
                                    "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                                    "tf": 25
                                  },
                                  "server.Anime.html#.publicList": {
                                    "ref": "server.Anime.html#.publicList",
                                    "tf": 50
                                  },
                                  "server.html#.createLogFile": {
                                    "ref": "server.html#.createLogFile",
                                    "tf": 50
                                  },
                                  "server.global.html#.__root": {
                                    "ref": "server.global.html#.__root",
                                    "tf": 33.33333333333333
                                  },
                                  "server.global.html#.__logFile": {
                                    "ref": "server.global.html#.__logFile",
                                    "tf": 33.33333333333333
                                  },
                                  "server.global.html#.__tempFolder": {
                                    "ref": "server.global.html#.__tempFolder",
                                    "tf": 33.33333333333333
                                  },
                                  "server.global.html#.GUIDGenerator": {
                                    "ref": "server.global.html#.GUIDGenerator",
                                    "tf": 33.33333333333333
                                  },
                                  "server.global.html#.nameof": {
                                    "ref": "server.global.html#.nameof",
                                    "tf": 33.33333333333333
                                  },
                                  "server.global.html#.overrideLine": {
                                    "ref": "server.global.html#.overrideLine",
                                    "tf": 25
                                  },
                                  "server.global.html#.writeLog": {
                                    "ref": "server.global.html#.writeLog",
                                    "tf": 25
                                  },
                                  "server.global.html#.toFileName": {
                                    "ref": "server.global.html#.toFileName",
                                    "tf": 25
                                  },
                                  "server.image.html#.exports.getThumbail": {
                                    "ref": "server.image.html#.exports.getThumbail",
                                    "tf": 20
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "server.DownloadEpisode.html#.currentDownload": {
                                "ref": "server.DownloadEpisode.html#.currentDownload",
                                "tf": 25
                              },
                              "server.https.html#.start": {
                                "ref": "server.https.html#.start",
                                "tf": 25
                              }
                            },
                            "e": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "&": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "server.VideoPlayer.html#_dispatchOnComplete": {
                                          "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                                          "tf": 25
                                        },
                                        "server.VideoPlayer.html#_dispatchOnProgress": {
                                          "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                                          "tf": 25
                                        },
                                        "server.VideoPlayer.html#_dispatchOnError": {
                                          "ref": "server.VideoPlayer.html#_dispatchOnError",
                                          "tf": 25
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "i": {
                    "docs": {},
                    "v": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "server.DownloadEpisode.html#player": {
                              "ref": "server.DownloadEpisode.html#player",
                              "tf": 25
                            },
                            "server.DownloadEpisode.html#isReady": {
                              "ref": "server.DownloadEpisode.html#isReady",
                              "tf": 25
                            },
                            "server.Anime.html#jsonObject": {
                              "ref": "server.Anime.html#jsonObject",
                              "tf": 25
                            },
                            "server.Anime.html#_path": {
                              "ref": "server.Anime.html#_path",
                              "tf": 25
                            }
                          },
                          "e": {
                            "docs": {},
                            "&": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "server.DownloadEpisode.html#_setLocalPath": {
                                      "ref": "server.DownloadEpisode.html#_setLocalPath",
                                      "tf": 33.33333333333333
                                    },
                                    "server.DownloadEpisode.html#_setEvents": {
                                      "ref": "server.DownloadEpisode.html#_setEvents",
                                      "tf": 33.33333333333333
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "server.DownloadEpisode.html#episode": {
                                        "ref": "server.DownloadEpisode.html#episode",
                                        "tf": 33.33333333333333
                                      },
                                      "server.DownloadEpisode.html#id": {
                                        "ref": "server.DownloadEpisode.html#id",
                                        "tf": 33.33333333333333
                                      },
                                      "server.DownloadEpisode.html#isPending": {
                                        "ref": "server.DownloadEpisode.html#isPending",
                                        "tf": 33.33333333333333
                                      },
                                      "server.DownloadEpisode.html#isDownloading": {
                                        "ref": "server.DownloadEpisode.html#isDownloading",
                                        "tf": 33.33333333333333
                                      },
                                      "server.DownloadEpisode.html#isError": {
                                        "ref": "server.DownloadEpisode.html#isError",
                                        "tf": 33.33333333333333
                                      },
                                      "server.DownloadEpisode.html#error": {
                                        "ref": "server.DownloadEpisode.html#error",
                                        "tf": 33.33333333333333
                                      },
                                      "server.DownloadEpisode.html#progress": {
                                        "ref": "server.DownloadEpisode.html#progress",
                                        "tf": 33.33333333333333
                                      },
                                      "server.VideoPlayer.html#name": {
                                        "ref": "server.VideoPlayer.html#name",
                                        "tf": 33.33333333333333
                                      },
                                      "server.VideoPlayer.html#isNatif": {
                                        "ref": "server.VideoPlayer.html#isNatif",
                                        "tf": 33.33333333333333
                                      },
                                      "server.VideoPlayer.html#id": {
                                        "ref": "server.VideoPlayer.html#id",
                                        "tf": 50
                                      },
                                      "server.Anime.html#id": {
                                        "ref": "server.Anime.html#id",
                                        "tf": 33.33333333333333
                                      },
                                      "server.Anime.html#path": {
                                        "ref": "server.Anime.html#path",
                                        "tf": 50
                                      },
                                      "server.Episode.html#episodeId": {
                                        "ref": "server.Episode.html#episodeId",
                                        "tf": 33.33333333333333
                                      },
                                      "server.Episode.html#localLink": {
                                        "ref": "server.Episode.html#localLink",
                                        "tf": 33.33333333333333
                                      },
                                      "server.Episode.html#anime": {
                                        "ref": "server.Episode.html#anime",
                                        "tf": 33.33333333333333
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "server.Episode.html#getInfo": {
                                  "ref": "server.Episode.html#getInfo",
                                  "tf": 25
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "c": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "server.DownloadEpisode.html#download": {
                        "ref": "server.DownloadEpisode.html#download",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "server.global.html#.overrideLine": {
                    "ref": "server.global.html#.overrideLine",
                    "tf": 12.5
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "server.VideoPlayer.html#name": {
                    "ref": "server.VideoPlayer.html#name",
                    "tf": 658.3333333333334
                  },
                  "server.Anime.html#name": {
                    "ref": "server.Anime.html#name",
                    "tf": 675
                  },
                  "server.Episode.html#name": {
                    "ref": "server.Episode.html#name",
                    "tf": 675
                  },
                  "server.html#.createLogFile": {
                    "ref": "server.html#.createLogFile",
                    "tf": 6.25
                  },
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 1.7361111111111112
                  }
                },
                "s": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 635
                          },
                          "server.html": {
                            "ref": "server.html",
                            "tf": 110
                          },
                          "server.https.html": {
                            "ref": "server.https.html",
                            "tf": 110
                          },
                          "server.global.html": {
                            "ref": "server.global.html",
                            "tf": 110
                          },
                          "server.image.html": {
                            "ref": "server.image.html",
                            "tf": 110
                          },
                          "server.data.html": {
                            "ref": "server.data.html",
                            "tf": 110
                          },
                          "server.data.config.html": {
                            "ref": "server.data.config.html",
                            "tf": 110
                          },
                          "server.data.public.html": {
                            "ref": "server.data.public.html",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                },
                "o": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "server.global.html#.nameof": {
                        "ref": "server.global.html#.nameof",
                        "tf": 633.3333333333334
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "server.DownloadEpisode.html#id": {
                        "ref": "server.DownloadEpisode.html#id",
                        "tf": 33.33333333333333
                      },
                      "server.DownloadEpisode.html#progress": {
                        "ref": "server.DownloadEpisode.html#progress",
                        "tf": 33.33333333333333
                      },
                      "server.Anime.html#id": {
                        "ref": "server.Anime.html#id",
                        "tf": 33.33333333333333
                      },
                      "server.Episode.html#episodeId": {
                        "ref": "server.Episode.html#episodeId",
                        "tf": 33.33333333333333
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "w": {
              "docs": {
                "server.html#.createLogFile": {
                  "ref": "server.html#.createLogFile",
                  "tf": 6.25
                },
                "server.https.html#.start": {
                  "ref": "server.https.html#.start",
                  "tf": 0.6944444444444444
                }
              },
              "/": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "server.https.html#.start": {
                            "ref": "server.https.html#.start",
                            "tf": 0.3472222222222222
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "server.https.html#.start": {
                                "ref": "server.https.html#.start",
                                "tf": 0.3472222222222222
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "server.global.html#.overrideLine": {
                        "ref": "server.global.html#.overrideLine",
                        "tf": 25
                      },
                      "server.global.html#.writeLog": {
                        "ref": "server.global.html#.writeLog",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                ".": {
                  "docs": {},
                  "j": {
                    "docs": {
                      "server.global.html#.__root": {
                        "ref": "server.global.html#.__root",
                        "tf": 16.666666666666664
                      },
                      "server.global.html#.__tempFolder": {
                        "ref": "server.global.html#.__tempFolder",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "i": {
            "docs": {},
            "l": {
              "docs": {},
              "e": {
                "docs": {
                  "server.JsonObject.html": {
                    "ref": "server.JsonObject.html",
                    "tf": 12.5
                  },
                  "server.Episode.html#localLink": {
                    "ref": "server.Episode.html#localLink",
                    "tf": 6.25
                  },
                  "server.Episode.html#path": {
                    "ref": "server.Episode.html#path",
                    "tf": 4.545454545454546
                  },
                  "server.html#.createLogFile": {
                    "ref": "server.html#.createLogFile",
                    "tf": 6.25
                  }
                },
                "n": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "server.VideoPlayer.html#download": {
                          "ref": "server.VideoPlayer.html#download",
                          "tf": 20
                        },
                        "server.global.html#.toFileName": {
                          "ref": "server.global.html#.toFileName",
                          "tf": 25
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "server.VideoPlayer.html#_dispatchOnComplete": {
                    "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                    "tf": 12.5
                  },
                  "server.VideoPlayer.html#_dispatchOnProgress": {
                    "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                    "tf": 12.5
                  },
                  "server.VideoPlayer.html#_dispatchOnError": {
                    "ref": "server.VideoPlayer.html#_dispatchOnError",
                    "tf": 12.5
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "server.VideoPlayer.html#.getPlayer": {
                      "ref": "server.VideoPlayer.html#.getPlayer",
                      "tf": 8.333333333333332
                    },
                    "server.Episode.html#getUrlByPlayer": {
                      "ref": "server.Episode.html#getUrlByPlayer",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {
                  "server.JsonObject.html#loadSync": {
                    "ref": "server.JsonObject.html#loadSync",
                    "tf": 50
                  }
                },
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "server.JsonObject.html#loadSync": {
                            "ref": "server.JsonObject.html#loadSync",
                            "tf": 110
                          },
                          "server.JsonObject.html#load": {
                            "ref": "server.JsonObject.html#load",
                            "tf": 110
                          },
                          "server.JsonObject.html#save": {
                            "ref": "server.JsonObject.html#save",
                            "tf": 110
                          },
                          "server.DownloadEpisode.html#_setLocalPath": {
                            "ref": "server.DownloadEpisode.html#_setLocalPath",
                            "tf": 110
                          },
                          "server.DownloadEpisode.html#download": {
                            "ref": "server.DownloadEpisode.html#download",
                            "tf": 110
                          },
                          "server.DownloadEpisode.html#_setEvents": {
                            "ref": "server.DownloadEpisode.html#_setEvents",
                            "tf": 110
                          },
                          "server.DownloadEpisode.html#destroy": {
                            "ref": "server.DownloadEpisode.html#destroy",
                            "tf": 110
                          },
                          "server.DownloadEpisode.html#.getFromEpisode": {
                            "ref": "server.DownloadEpisode.html#.getFromEpisode",
                            "tf": 110
                          },
                          "server.VideoPlayer.html#toPublic": {
                            "ref": "server.VideoPlayer.html#toPublic",
                            "tf": 110
                          },
                          "server.VideoPlayer.html#_dispatchOnComplete": {
                            "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                            "tf": 110
                          },
                          "server.VideoPlayer.html#_dispatchOnProgress": {
                            "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                            "tf": 110
                          },
                          "server.VideoPlayer.html#_dispatchOnError": {
                            "ref": "server.VideoPlayer.html#_dispatchOnError",
                            "tf": 110
                          },
                          "server.VideoPlayer.html#download": {
                            "ref": "server.VideoPlayer.html#download",
                            "tf": 110
                          },
                          "server.VideoPlayer.html#hasPrefix": {
                            "ref": "server.VideoPlayer.html#hasPrefix",
                            "tf": 110
                          },
                          "server.VideoPlayer.html#.getPlayer": {
                            "ref": "server.VideoPlayer.html#.getPlayer",
                            "tf": 110
                          },
                          "server.VideoPlayer.html#.getVideoPlayerById": {
                            "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                            "tf": 110
                          },
                          "server.YoutubePlayer.html#download": {
                            "ref": "server.YoutubePlayer.html#download",
                            "tf": 110
                          },
                          "server.YoutubePlayer.html#getInfo": {
                            "ref": "server.YoutubePlayer.html#getInfo",
                            "tf": 110
                          },
                          "server.Anime.html#toPublic": {
                            "ref": "server.Anime.html#toPublic",
                            "tf": 110
                          },
                          "server.Anime.html#getEpisodeById": {
                            "ref": "server.Anime.html#getEpisodeById",
                            "tf": 110
                          },
                          "server.Anime.html#updateJson": {
                            "ref": "server.Anime.html#updateJson",
                            "tf": 110
                          },
                          "server.Anime.html#toAnimeConfig": {
                            "ref": "server.Anime.html#toAnimeConfig",
                            "tf": 110
                          },
                          "server.Episode.html#toPublic": {
                            "ref": "server.Episode.html#toPublic",
                            "tf": 110
                          },
                          "server.Episode.html#getInfo": {
                            "ref": "server.Episode.html#getInfo",
                            "tf": 110
                          },
                          "server.Episode.html#getUrlByPlayer": {
                            "ref": "server.Episode.html#getUrlByPlayer",
                            "tf": 110
                          },
                          "server.Episode.html#setLocalPath": {
                            "ref": "server.Episode.html#setLocalPath",
                            "tf": 110
                          },
                          "server.Episode.html#toEpisodeConfig": {
                            "ref": "server.Episode.html#toEpisodeConfig",
                            "tf": 110
                          },
                          "server.html#.createLogFile": {
                            "ref": "server.html#.createLogFile",
                            "tf": 110
                          },
                          "server.https.html#.start": {
                            "ref": "server.https.html#.start",
                            "tf": 110
                          },
                          "server.global.html#.GUIDGenerator": {
                            "ref": "server.global.html#.GUIDGenerator",
                            "tf": 110
                          },
                          "server.global.html#.nameof": {
                            "ref": "server.global.html#.nameof",
                            "tf": 110
                          },
                          "server.global.html#.overrideLine": {
                            "ref": "server.global.html#.overrideLine",
                            "tf": 110
                          },
                          "server.global.html#.writeLog": {
                            "ref": "server.global.html#.writeLog",
                            "tf": 110
                          },
                          "server.global.html#.toFileName": {
                            "ref": "server.global.html#.toFileName",
                            "tf": 110
                          },
                          "server.image.html#.exports.getThumbail": {
                            "ref": "server.image.html#.exports.getThumbail",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "m": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "server.DownloadEpisode.html#download": {
                        "ref": "server.DownloadEpisode.html#download",
                        "tf": 33.33333333333333
                      },
                      "server.VideoPlayer.html#download": {
                        "ref": "server.VideoPlayer.html#download",
                        "tf": 20
                      },
                      "server.YoutubePlayer.html#download": {
                        "ref": "server.YoutubePlayer.html#download",
                        "tf": 20
                      },
                      "server.https.html#.start": {
                        "ref": "server.https.html#.start",
                        "tf": 0.3472222222222222
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "d": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "server.Anime.html#_path": {
                        "ref": "server.Anime.html#_path",
                        "tf": 16.666666666666664
                      },
                      "server.Anime.html#path": {
                        "ref": "server.Anime.html#path",
                        "tf": 12.5
                      },
                      "server.html#.createLogFile": {
                        "ref": "server.html#.createLogFile",
                        "tf": 6.25
                      },
                      "server.https.html#.start": {
                        "ref": "server.https.html#.start",
                        "tf": 2.083333333333333
                      },
                      "server.global.html#.__root": {
                        "ref": "server.global.html#.__root",
                        "tf": 16.666666666666664
                      },
                      "server.global.html#.__tempFolder": {
                        "ref": "server.global.html#.__tempFolder",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "t": {
                "docs": {
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 0.6944444444444444
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "server.YoutubePlayer.html#getInfo": {
                      "ref": "server.YoutubePlayer.html#getInfo",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {
              "server.https.html#.start": {
                "ref": "server.https.html#.start",
                "tf": 0.6944444444444444
              }
            },
            "o": {
              "docs": {},
              "n": {
                "docs": {
                  "server.JsonObject.html": {
                    "ref": "server.JsonObject.html",
                    "tf": 12.5
                  },
                  "server.DownloadEpisode.html#isReady": {
                    "ref": "server.DownloadEpisode.html#isReady",
                    "tf": 12.5
                  },
                  "server.Anime.html#jsonObject": {
                    "ref": "server.Anime.html#jsonObject",
                    "tf": 6.25
                  },
                  "server.Anime.html#updateJson": {
                    "ref": "server.Anime.html#updateJson",
                    "tf": 7.142857142857142
                  }
                },
                "o": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "j": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "server.JsonObject.html": {
                                "ref": "server.JsonObject.html",
                                "tf": 650
                              },
                              "server.Anime.html#jsonObject": {
                                "ref": "server.Anime.html#jsonObject",
                                "tf": 650
                              }
                            },
                            "#": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "server.JsonObject.html#load": {
                                          "ref": "server.JsonObject.html#load",
                                          "tf": 100
                                        }
                                      },
                                      "s": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "c": {
                                              "docs": {
                                                "server.JsonObject.html#loadSync": {
                                                  "ref": "server.JsonObject.html#loadSync",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "s": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "v": {
                                    "docs": {
                                      "server.JsonObject.html#save": {
                                        "ref": "server.JsonObject.html#save",
                                        "tf": 100
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              ";": {
                                "docs": {},
                                "v": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "&": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "server.JsonObject.html#save": {
                                                  "ref": "server.JsonObject.html#save",
                                                  "tf": 50
                                                },
                                                "server.Anime.html#updateJson": {
                                                  "ref": "server.Anime.html#updateJson",
                                                  "tf": 50
                                                },
                                                "server.Episode.html#setLocalPath": {
                                                  "ref": "server.Episode.html#setLocalPath",
                                                  "tf": 33.33333333333333
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "y": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        ".": {
                                          "docs": {},
                                          "v": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "f": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "&": {
                                                              "docs": {},
                                                              "g": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {
                                                                    "server.YoutubePlayer.html#getInfo": {
                                                                      "ref": "server.YoutubePlayer.html#getInfo",
                                                                      "tf": 33.33333333333333
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "&": {
                                                        "docs": {},
                                                        "g": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "server.Episode.html#getInfo": {
                                                                "ref": "server.Episode.html#getInfo",
                                                                "tf": 25
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "&": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {
                                                    "server.image.html#.exports.getThumbail": {
                                                      "ref": "server.image.html#.exports.getThumbail",
                                                      "tf": 20
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "g": {
                "docs": {},
                "r": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "s": {
                        "docs": {
                          "server.DownloadEpisode.html#progress": {
                            "ref": "server.DownloadEpisode.html#progress",
                            "tf": 658.3333333333334
                          },
                          "server.VideoPlayer.html#_dispatchOnProgress": {
                            "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                            "tf": 12.5
                          }
                        },
                        "\"": {
                          "docs": {},
                          ":": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "w": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          ".": {
                                                            "docs": {},
                                                            "p": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "g": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "s": {
                                                                          "docs": {},
                                                                          "s": {
                                                                            "docs": {
                                                                              "server.https.html#.start": {
                                                                                "ref": "server.https.html#.start",
                                                                                "tf": 0.6944444444444444
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "j": {
                "docs": {},
                "e": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "server.global.html#.__root": {
                        "ref": "server.global.html#.__root",
                        "tf": 16.666666666666664
                      },
                      "server.global.html#.__tempFolder": {
                        "ref": "server.global.html#.__tempFolder",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "x": {
                    "docs": {
                      "server.VideoPlayer.html#prefix": {
                        "ref": "server.VideoPlayer.html#prefix",
                        "tf": 650
                      },
                      "server.VideoPlayer.html#hasPrefix": {
                        "ref": "server.VideoPlayer.html#hasPrefix",
                        "tf": 15
                      },
                      "server.VideoPlayer.html#.getPlayer": {
                        "ref": "server.VideoPlayer.html#.getPlayer",
                        "tf": 8.333333333333332
                      }
                    },
                    "(": {
                      "docs": {
                        "server.VideoPlayer.html#prefix": {
                          "ref": "server.VideoPlayer.html#prefix",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "y": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "server.DownloadEpisode.html#player": {
                        "ref": "server.DownloadEpisode.html#player",
                        "tf": 635
                      },
                      "server.VideoPlayer.html#.getVideoPlayerById": {
                        "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                        "tf": 12.5
                      },
                      "server.Episode.html#getUrlByPlayer": {
                        "ref": "server.Episode.html#getUrlByPlayer",
                        "tf": 33.33333333333333
                      },
                      "server.data.public.html#.PublicVideoPlayer": {
                        "ref": "server.data.public.html#.PublicVideoPlayer",
                        "tf": 12.5
                      }
                    },
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "o": {
                            "docs": {
                              "server.data.public.html#.PlayerInfo": {
                                "ref": "server.data.public.html#.PlayerInfo",
                                "tf": 675
                              },
                              "server.data.public.html#.EpisodeInfo": {
                                "ref": "server.data.public.html#.EpisodeInfo",
                                "tf": 10
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "server.DownloadEpisode.html#isPending": {
                    "ref": "server.DownloadEpisode.html#isPending",
                    "tf": 25
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {
                  "server.Anime.html#_path": {
                    "ref": "server.Anime.html#_path",
                    "tf": 16.666666666666664
                  },
                  "server.Anime.html#path": {
                    "ref": "server.Anime.html#path",
                    "tf": 662.5
                  },
                  "server.Episode.html#localLink": {
                    "ref": "server.Episode.html#localLink",
                    "tf": 6.25
                  },
                  "server.Episode.html#path": {
                    "ref": "server.Episode.html#path",
                    "tf": 659.0909090909091
                  },
                  "server.Episode.html#setLocalPath": {
                    "ref": "server.Episode.html#setLocalPath",
                    "tf": 33.33333333333333
                  },
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 0.3472222222222222
                  },
                  "server.global.html#.__logFile": {
                    "ref": "server.global.html#.__logFile",
                    "tf": 25
                  }
                },
                "t": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "server.DownloadEpisode.html#_setLocalPath": {
                              "ref": "server.DownloadEpisode.html#_setLocalPath",
                              "tf": 33.33333333333333
                            }
                          }
                        }
                      }
                    }
                  }
                },
                ".": {
                  "docs": {},
                  "j": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "(": {
                            "docs": {},
                            "$": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      ".": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "m": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  ".": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "h": {
                                                            "docs": {
                                                              "server.Episode.html#path": {
                                                                "ref": "server.Episode.html#path",
                                                                "tf": 4.545454545454546
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "m": {
                  "docs": {
                    "server.https.html#.start": {
                      "ref": "server.https.html#.start",
                      "tf": 5.902777777777778
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "b": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "server.VideoPlayer.html#toPublic": {
                        "ref": "server.VideoPlayer.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "server.Anime.html#.publicList": {
                        "ref": "server.Anime.html#.publicList",
                        "tf": 10
                      },
                      "server.Anime.html#toPublic": {
                        "ref": "server.Anime.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "server.Episode.html#toPublic": {
                        "ref": "server.Episode.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "server.data.public.html": {
                        "ref": "server.data.public.html",
                        "tf": 600
                      },
                      "server.data.public.html#.PublicVideoPlayer": {
                        "ref": "server.data.public.html#.PublicVideoPlayer",
                        "tf": 12.5
                      },
                      "server.data.public.html#.PublicAnime": {
                        "ref": "server.data.public.html#.PublicAnime",
                        "tf": 16.666666666666664
                      },
                      "server.data.public.html#.PublicEpisode": {
                        "ref": "server.data.public.html#.PublicEpisode",
                        "tf": 16.666666666666664
                      }
                    },
                    "v": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "y": {
                                      "docs": {
                                        "server.VideoPlayer.html#toPublic": {
                                          "ref": "server.VideoPlayer.html#toPublic",
                                          "tf": 50
                                        },
                                        "server.data.public.html#.PublicVideoPlayer": {
                                          "ref": "server.data.public.html#.PublicVideoPlayer",
                                          "tf": 675
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "l": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "server.Anime.html#.publicList": {
                                "ref": "server.Anime.html#.publicList",
                                "tf": 650
                              }
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "m": {
                            "docs": {
                              "server.Anime.html#toPublic": {
                                "ref": "server.Anime.html#toPublic",
                                "tf": 50
                              },
                              "server.data.public.html#.PublicAnime": {
                                "ref": "server.data.public.html#.PublicAnime",
                                "tf": 675
                              }
                            }
                          }
                        }
                      }
                    },
                    "e": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "server.Episode.html#toPublic": {
                                    "ref": "server.Episode.html#toPublic",
                                    "tf": 50
                                  },
                                  "server.data.public.html#.PublicEpisode": {
                                    "ref": "server.data.public.html#.PublicEpisode",
                                    "tf": 675
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    ".": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "b": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "v": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "y": {
                                                    "docs": {
                                                      "server.data.public.html#.PublicVideoPlayer": {
                                                        "ref": "server.data.public.html#.PublicVideoPlayer",
                                                        "tf": 75
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "a": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "m": {
                                          "docs": {
                                            "server.data.public.html#.PublicAnime": {
                                              "ref": "server.data.public.html#.PublicAnime",
                                              "tf": 75
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "server.data.public.html#.PublicEpisode": {
                                                  "ref": "server.data.public.html#.PublicEpisode",
                                                  "tf": 75
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "l": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "f": {
                                        "docs": {},
                                        "o": {
                                          "docs": {
                                            "server.data.public.html#.PlayerInfo": {
                                              "ref": "server.data.public.html#.PlayerInfo",
                                              "tf": 75
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "e": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "f": {
                                          "docs": {},
                                          "o": {
                                            "docs": {
                                              "server.data.public.html#.EpisodeInfo": {
                                                "ref": "server.data.public.html#.EpisodeInfo",
                                                "tf": 75
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "server.Anime.html#thumbnailLink": {
                        "ref": "server.Anime.html#thumbnailLink",
                        "tf": 16.666666666666664
                      },
                      "server.Episode.html#posterLink": {
                        "ref": "server.Episode.html#posterLink",
                        "tf": 16.666666666666664
                      }
                    },
                    "l": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "k": {
                            "docs": {
                              "server.Episode.html#posterLink": {
                                "ref": "server.Episode.html#posterLink",
                                "tf": 650
                              },
                              "server.Episode.html#hasPoster": {
                                "ref": "server.Episode.html#hasPoster",
                                "tf": 16.666666666666664
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "n": {
            "docs": {},
            "s": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {
                    "server.DownloadEpisode.html": {
                      "ref": "server.DownloadEpisode.html",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "i": {
              "docs": {},
              "s": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "server.DownloadEpisode.html": {
                        "ref": "server.DownloadEpisode.html",
                        "tf": 4.545454545454546
                      },
                      "server.DownloadEpisode.html#episode": {
                        "ref": "server.DownloadEpisode.html#episode",
                        "tf": 683.3333333333333
                      },
                      "server.DownloadEpisode.html#.getFromEpisode": {
                        "ref": "server.DownloadEpisode.html#.getFromEpisode",
                        "tf": 33.33333333333333
                      },
                      "server.Anime.html#episodes": {
                        "ref": "server.Anime.html#episodes",
                        "tf": 675
                      },
                      "server.Anime.html#getEpisodeById": {
                        "ref": "server.Anime.html#getEpisodeById",
                        "tf": 16.666666666666664
                      },
                      "server.Anime.html#updateJson": {
                        "ref": "server.Anime.html#updateJson",
                        "tf": 7.142857142857142
                      },
                      "server.Episode.html": {
                        "ref": "server.Episode.html",
                        "tf": 666.6666666666666
                      },
                      "server.Episode.html#name": {
                        "ref": "server.Episode.html#name",
                        "tf": 25
                      },
                      "server.Episode.html#episodeId": {
                        "ref": "server.Episode.html#episodeId",
                        "tf": 14.285714285714285
                      },
                      "server.Episode.html#posterLink": {
                        "ref": "server.Episode.html#posterLink",
                        "tf": 16.666666666666664
                      },
                      "server.Episode.html#toPublic": {
                        "ref": "server.Episode.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "server.Episode.html#getInfo": {
                        "ref": "server.Episode.html#getInfo",
                        "tf": 25
                      },
                      "server.Episode.html#toEpisodeConfig": {
                        "ref": "server.Episode.html#toEpisodeConfig",
                        "tf": 16.666666666666664
                      },
                      "server.https.html#.start": {
                        "ref": "server.https.html#.start",
                        "tf": 3.125
                      },
                      "server.data.config.html#.EpisodeConfig": {
                        "ref": "server.data.config.html#.EpisodeConfig",
                        "tf": 25
                      },
                      "server.data.public.html#.PublicEpisode": {
                        "ref": "server.data.public.html#.PublicEpisode",
                        "tf": 16.666666666666664
                      },
                      "server.data.public.html#.EpisodeInfo": {
                        "ref": "server.data.public.html#.EpisodeInfo",
                        "tf": 10
                      }
                    },
                    "e": {
                      "docs": {},
                      "#": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "h": {
                                                "docs": {
                                                  "server.DownloadEpisode.html#_setLocalPath": {
                                                    "ref": "server.DownloadEpisode.html#_setLocalPath",
                                                    "tf": 7.142857142857142
                                                  },
                                                  "server.Episode.html#setLocalPath": {
                                                    "ref": "server.Episode.html#setLocalPath",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "n": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "m": {
                              "docs": {
                                "server.Episode.html#name": {
                                  "ref": "server.Episode.html#name",
                                  "tf": 100
                                }
                              }
                            }
                          }
                        },
                        "e": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "server.Episode.html#episodeId": {
                                              "ref": "server.Episode.html#episodeId",
                                              "tf": 100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "p": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "k": {
                                            "docs": {
                                              "server.Episode.html#posterLink": {
                                                "ref": "server.Episode.html#posterLink",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "h": {
                                "docs": {
                                  "server.Episode.html#path": {
                                    "ref": "server.Episode.html#path",
                                    "tf": 100
                                  }
                                }
                              }
                            }
                          }
                        },
                        "l": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "k": {
                                "docs": {
                                  "server.Episode.html#links": {
                                    "ref": "server.Episode.html#links",
                                    "tf": 100
                                  }
                                }
                              }
                            }
                          },
                          "o": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "k": {
                                          "docs": {
                                            "server.Episode.html#localLink": {
                                              "ref": "server.Episode.html#localLink",
                                              "tf": 100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "a": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "m": {
                                "docs": {
                                  "server.Episode.html#anime": {
                                    "ref": "server.Episode.html#anime",
                                    "tf": 100
                                  }
                                }
                              }
                            }
                          }
                        },
                        "i": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "c": {
                                  "docs": {
                                    "server.Episode.html#isLocal": {
                                      "ref": "server.Episode.html#isLocal",
                                      "tf": 100
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "h": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "server.Episode.html#hasPoster": {
                                          "ref": "server.Episode.html#hasPoster",
                                          "tf": 100
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "b": {
                                  "docs": {},
                                  "l": {
                                    "docs": {
                                      "server.Episode.html#toPublic": {
                                        "ref": "server.Episode.html#toPublic",
                                        "tf": 100
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "e": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {
                                                        "server.Episode.html#toEpisodeConfig": {
                                                          "ref": "server.Episode.html#toEpisodeConfig",
                                                          "tf": 100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "g": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "o": {
                                      "docs": {
                                        "server.Episode.html#getInfo": {
                                          "ref": "server.Episode.html#getInfo",
                                          "tf": 100
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "u": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "y": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "y": {
                                                "docs": {
                                                  "server.Episode.html#getUrlByPlayer": {
                                                    "ref": "server.Episode.html#getUrlByPlayer",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      ".": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "k": {
                                "docs": {
                                  "server.VideoPlayer.html#autoDownload": {
                                    "ref": "server.VideoPlayer.html#autoDownload",
                                    "tf": 8.333333333333332
                                  }
                                }
                              }
                            }
                          },
                          "o": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "k": {
                                          "docs": {
                                            "server.Episode.html#localLink": {
                                              "ref": "server.Episode.html#localLink",
                                              "tf": 6.25
                                            },
                                            "server.Episode.html#setLocalPath": {
                                              "ref": "server.Episode.html#setLocalPath",
                                              "tf": 12.5
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "h": {
                                                "docs": {
                                                  "server.Episode.html#localLink": {
                                                    "ref": "server.Episode.html#localLink",
                                                    "tf": 6.25
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "i": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "server.Anime.html#getEpisodeById": {
                              "ref": "server.Anime.html#getEpisodeById",
                              "tf": 33.33333333333333
                            },
                            "server.Episode.html#episodeId": {
                              "ref": "server.Episode.html#episodeId",
                              "tf": 633.3333333333334
                            },
                            "server.https.html#.start": {
                              "ref": "server.https.html#.start",
                              "tf": 1.0416666666666665
                            }
                          }
                        },
                        "n": {
                          "docs": {},
                          "f": {
                            "docs": {},
                            "o": {
                              "docs": {
                                "server.https.html#.start": {
                                  "ref": "server.https.html#.start",
                                  "tf": 0.3472222222222222
                                },
                                "server.data.public.html#.EpisodeInfo": {
                                  "ref": "server.data.public.html#.EpisodeInfo",
                                  "tf": 675
                                }
                              }
                            }
                          }
                        }
                      },
                      "|": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "server.Anime.html#getEpisodeById": {
                                  "ref": "server.Anime.html#getEpisodeById",
                                  "tf": 33.33333333333333
                                }
                              }
                            }
                          }
                        }
                      },
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "g": {
                                  "docs": {
                                    "server.Anime.html#updateJson": {
                                      "ref": "server.Anime.html#updateJson",
                                      "tf": 7.142857142857142
                                    },
                                    "server.Episode.html#toEpisodeConfig": {
                                      "ref": "server.Episode.html#toEpisodeConfig",
                                      "tf": 66.66666666666666
                                    },
                                    "server.data.config.html#.EpisodeConfig": {
                                      "ref": "server.data.config.html#.EpisodeConfig",
                                      "tf": 675
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "'": {
                        "docs": {
                          "server.Episode.html#links": {
                            "ref": "server.Episode.html#links",
                            "tf": 16.666666666666664
                          },
                          "server.Episode.html#localLink": {
                            "ref": "server.Episode.html#localLink",
                            "tf": 6.25
                          },
                          "server.https.html#.start": {
                            "ref": "server.https.html#.start",
                            "tf": 0.6944444444444444
                          }
                        }
                      },
                      "/": {
                        "docs": {},
                        ":": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "/": {
                                          "docs": {},
                                          ":": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {
                                                                "server.https.html#.start": {
                                                                  "ref": "server.https.html#.start",
                                                                  "tf": 0.3472222222222222
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "s": {
                        "docs": {},
                        "'": {
                          "docs": {
                            "server.https.html#.start": {
                              "ref": "server.https.html#.start",
                              "tf": 0.3472222222222222
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "o": {
                "docs": {},
                "d": {
                  "docs": {
                    "server.DownloadEpisode.html#player": {
                      "ref": "server.DownloadEpisode.html#player",
                      "tf": 10
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "server.DownloadEpisode.html": {
                      "ref": "server.DownloadEpisode.html",
                      "tf": 4.545454545454546
                    },
                    "server.DownloadEpisode.html#_setEvents": {
                      "ref": "server.DownloadEpisode.html#_setEvents",
                      "tf": 16.666666666666664
                    },
                    "server.VideoPlayer.html#_dispatchOnComplete": {
                      "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                      "tf": 12.5
                    },
                    "server.VideoPlayer.html#_dispatchOnProgress": {
                      "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                      "tf": 12.5
                    },
                    "server.VideoPlayer.html#_dispatchOnError": {
                      "ref": "server.VideoPlayer.html#_dispatchOnError",
                      "tf": 12.5
                    }
                  },
                  "e": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "server.VideoPlayer.html#download": {
                                "ref": "server.VideoPlayer.html#download",
                                "tf": 20
                              },
                              "server.YoutubePlayer.html#download": {
                                "ref": "server.YoutubePlayer.html#download",
                                "tf": 20
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {
                "server.VideoPlayer.html#_dispatchOnError": {
                  "ref": "server.VideoPlayer.html#_dispatchOnError",
                  "tf": 25
                }
              },
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "server.DownloadEpisode.html#isError": {
                      "ref": "server.DownloadEpisode.html#isError",
                      "tf": 50
                    },
                    "server.DownloadEpisode.html#error": {
                      "ref": "server.DownloadEpisode.html#error",
                      "tf": 683.3333333333334
                    },
                    "server.VideoPlayer.html#_dispatchOnError": {
                      "ref": "server.VideoPlayer.html#_dispatchOnError",
                      "tf": 12.5
                    },
                    "server.https.html#.start": {
                      "ref": "server.https.html#.start",
                      "tf": 1.0416666666666665
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {},
                "t": {
                  "docs": {
                    "server.DownloadEpisode.html#_setEvents": {
                      "ref": "server.DownloadEpisode.html#_setEvents",
                      "tf": 49.99999999999999
                    },
                    "server.VideoPlayer.html#_dispatchOnComplete": {
                      "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                      "tf": 37.5
                    },
                    "server.VideoPlayer.html#_dispatchOnProgress": {
                      "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                      "tf": 37.5
                    },
                    "server.VideoPlayer.html#_dispatchOnError": {
                      "ref": "server.VideoPlayer.html#_dispatchOnError",
                      "tf": 37.5
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {
                  "server.VideoPlayer.html#isNatif": {
                    "ref": "server.VideoPlayer.html#isNatif",
                    "tf": 10
                  }
                }
              }
            }
          },
          "x": {
            "docs": {},
            "p": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "g": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "l": {
                                              "docs": {
                                                "server.image.html#.exports.getThumbail": {
                                                  "ref": "server.image.html#.exports.getThumbail",
                                                  "tf": 595
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "a": {
            "docs": {},
            "x": {
              "docs": {
                "server.DownloadEpisode.html": {
                  "ref": "server.DownloadEpisode.html",
                  "tf": 4.545454545454546
                }
              }
            },
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "server.VideoPlayer.html#prefix": {
                      "ref": "server.VideoPlayer.html#prefix",
                      "tf": 16.666666666666664
                    },
                    "server.VideoPlayer.html#hasPrefix": {
                      "ref": "server.VideoPlayer.html#hasPrefix",
                      "tf": 5
                    },
                    "server.VideoPlayer.html#.getPlayer": {
                      "ref": "server.VideoPlayer.html#.getPlayer",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {
                "server.Anime.html#.publicList": {
                  "ref": "server.Anime.html#.publicList",
                  "tf": 10
                },
                "server.data.public.html#.EpisodeInfo": {
                  "ref": "server.data.public.html#.EpisodeInfo",
                  "tf": 10
                }
              }
            }
          },
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "server.DownloadEpisode.html#.list": {
                        "ref": "server.DownloadEpisode.html#.list",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#.toDownload": {
                        "ref": "server.DownloadEpisode.html#.toDownload",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#.currentDownload": {
                        "ref": "server.DownloadEpisode.html#.currentDownload",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#episode": {
                        "ref": "server.DownloadEpisode.html#episode",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#id": {
                        "ref": "server.DownloadEpisode.html#id",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#player": {
                        "ref": "server.DownloadEpisode.html#player",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#isReady": {
                        "ref": "server.DownloadEpisode.html#isReady",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#isPending": {
                        "ref": "server.DownloadEpisode.html#isPending",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#isDownloading": {
                        "ref": "server.DownloadEpisode.html#isDownloading",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#isError": {
                        "ref": "server.DownloadEpisode.html#isError",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#error": {
                        "ref": "server.DownloadEpisode.html#error",
                        "tf": 110
                      },
                      "server.DownloadEpisode.html#progress": {
                        "ref": "server.DownloadEpisode.html#progress",
                        "tf": 110
                      },
                      "server.VideoPlayer.html#.list": {
                        "ref": "server.VideoPlayer.html#.list",
                        "tf": 110
                      },
                      "server.VideoPlayer.html#name": {
                        "ref": "server.VideoPlayer.html#name",
                        "tf": 110
                      },
                      "server.VideoPlayer.html#isNatif": {
                        "ref": "server.VideoPlayer.html#isNatif",
                        "tf": 110
                      },
                      "server.VideoPlayer.html#prefix": {
                        "ref": "server.VideoPlayer.html#prefix",
                        "tf": 110
                      },
                      "server.VideoPlayer.html#downloadable": {
                        "ref": "server.VideoPlayer.html#downloadable",
                        "tf": 110
                      },
                      "server.VideoPlayer.html#autoDownload": {
                        "ref": "server.VideoPlayer.html#autoDownload",
                        "tf": 110
                      },
                      "server.VideoPlayer.html#id": {
                        "ref": "server.VideoPlayer.html#id",
                        "tf": 110
                      },
                      "server.YoutubePlayer.html#.instance": {
                        "ref": "server.YoutubePlayer.html#.instance",
                        "tf": 110
                      },
                      "server.Anime.html#.list": {
                        "ref": "server.Anime.html#.list",
                        "tf": 110
                      },
                      "server.Anime.html#.publicList": {
                        "ref": "server.Anime.html#.publicList",
                        "tf": 110
                      },
                      "server.Anime.html#jsonObject": {
                        "ref": "server.Anime.html#jsonObject",
                        "tf": 110
                      },
                      "server.Anime.html#name": {
                        "ref": "server.Anime.html#name",
                        "tf": 110
                      },
                      "server.Anime.html#thumbnailLink": {
                        "ref": "server.Anime.html#thumbnailLink",
                        "tf": 110
                      },
                      "server.Anime.html#_path": {
                        "ref": "server.Anime.html#_path",
                        "tf": 110
                      },
                      "server.Anime.html#episodes": {
                        "ref": "server.Anime.html#episodes",
                        "tf": 110
                      },
                      "server.Anime.html#id": {
                        "ref": "server.Anime.html#id",
                        "tf": 110
                      },
                      "server.Anime.html#path": {
                        "ref": "server.Anime.html#path",
                        "tf": 110
                      },
                      "server.Episode.html#name": {
                        "ref": "server.Episode.html#name",
                        "tf": 110
                      },
                      "server.Episode.html#episodeId": {
                        "ref": "server.Episode.html#episodeId",
                        "tf": 110
                      },
                      "server.Episode.html#posterLink": {
                        "ref": "server.Episode.html#posterLink",
                        "tf": 110
                      },
                      "server.Episode.html#links": {
                        "ref": "server.Episode.html#links",
                        "tf": 110
                      },
                      "server.Episode.html#localLink": {
                        "ref": "server.Episode.html#localLink",
                        "tf": 110
                      },
                      "server.Episode.html#anime": {
                        "ref": "server.Episode.html#anime",
                        "tf": 110
                      },
                      "server.Episode.html#isLocal": {
                        "ref": "server.Episode.html#isLocal",
                        "tf": 110
                      },
                      "server.Episode.html#hasPoster": {
                        "ref": "server.Episode.html#hasPoster",
                        "tf": 110
                      },
                      "server.Episode.html#path": {
                        "ref": "server.Episode.html#path",
                        "tf": 110
                      },
                      "server.global.html#.__root": {
                        "ref": "server.global.html#.__root",
                        "tf": 110
                      },
                      "server.global.html#.__logFile": {
                        "ref": "server.global.html#.__logFile",
                        "tf": 110
                      },
                      "server.global.html#.__tempFolder": {
                        "ref": "server.global.html#.__tempFolder",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "server.global.html#.overrideLine": {
                        "ref": "server.global.html#.overrideLine",
                        "tf": 25
                      },
                      "server.global.html#.writeLog": {
                        "ref": "server.global.html#.writeLog",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "n": {
            "docs": {
              "server.DownloadEpisode.html": {
                "ref": "server.DownloadEpisode.html",
                "tf": 4.545454545454546
              }
            },
            "g": {
              "docs": {},
              "o": {
                "docs": {
                  "server.DownloadEpisode.html#isDownloading": {
                    "ref": "server.DownloadEpisode.html#isDownloading",
                    "tf": 25
                  }
                }
              }
            }
          },
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "server.Anime.html#jsonObject": {
                        "ref": "server.Anime.html#jsonObject",
                        "tf": 6.25
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "server.Episode.html#episodeId": {
                      "ref": "server.Episode.html#episodeId",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "server.global.html#.overrideLine": {
                          "ref": "server.global.html#.overrideLine",
                          "tf": 12.5
                        }
                      },
                      "e": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "n": {
                              "docs": {
                                "server.global.html#.overrideLine": {
                                  "ref": "server.global.html#.overrideLine",
                                  "tf": 625
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "server.image.html#.exports.getThumbail": {
                        "ref": "server.image.html#.exports.getThumbail",
                        "tf": 20
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "h": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "'": {
                    "docs": {
                      "server.DownloadEpisode.html": {
                        "ref": "server.DownloadEpisode.html",
                        "tf": 4.545454545454546
                      }
                    }
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "m": {
                "docs": {},
                "b": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "server.https.html#.start": {
                              "ref": "server.https.html#.start",
                              "tf": 0.3472222222222222
                            }
                          },
                          "l": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "k": {
                                  "docs": {
                                    "server.Anime.html#thumbnailLink": {
                                      "ref": "server.Anime.html#thumbnailLink",
                                      "tf": 650
                                    },
                                    "server.https.html#.start": {
                                      "ref": "server.https.html#.start",
                                      "tf": 0.3472222222222222
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "a": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "server.image.html#.ThumbailOption": {
                                  "ref": "server.image.html#.ThumbailOption",
                                  "tf": 700
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "s": {
                "docs": {},
                ".": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "server.Episode.html#path": {
                                        "ref": "server.Episode.html#path",
                                        "tf": 4.545454545454546
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "o": {
                "docs": {},
                "w": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "server.DownloadEpisode.html#.toDownload": {
                                "ref": "server.DownloadEpisode.html#.toDownload",
                                "tf": 633.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "u": {
                "docs": {},
                "b": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "server.VideoPlayer.html#toPublic": {
                        "ref": "server.VideoPlayer.html#toPublic",
                        "tf": 650
                      },
                      "server.Anime.html#toPublic": {
                        "ref": "server.Anime.html#toPublic",
                        "tf": 650
                      },
                      "server.Episode.html#toPublic": {
                        "ref": "server.Episode.html#toPublic",
                        "tf": 650
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "i": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "g": {
                                  "docs": {
                                    "server.Anime.html#toAnimeConfig": {
                                      "ref": "server.Anime.html#toAnimeConfig",
                                      "tf": 650
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "p": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "f": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "g": {
                                      "docs": {
                                        "server.Episode.html#toEpisodeConfig": {
                                          "ref": "server.Episode.html#toEpisodeConfig",
                                          "tf": 650
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "i": {
                "docs": {},
                "l": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "server.global.html#.toFileName": {
                              "ref": "server.global.html#.toFileName",
                              "tf": 625
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "u": {
              "docs": {},
              "e": {
                "docs": {
                  "server.VideoPlayer.html#isNatif": {
                    "ref": "server.VideoPlayer.html#isNatif",
                    "tf": 10
                  },
                  "server.VideoPlayer.html#hasPrefix": {
                    "ref": "server.VideoPlayer.html#hasPrefix",
                    "tf": 5
                  },
                  "server.Episode.html#isLocal": {
                    "ref": "server.Episode.html#isLocal",
                    "tf": 16.666666666666664
                  },
                  "server.Episode.html#hasPoster": {
                    "ref": "server.Episode.html#hasPoster",
                    "tf": 16.666666666666664
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "server.VideoPlayer.html#downloadable": {
                    "ref": "server.VideoPlayer.html#downloadable",
                    "tf": 16.666666666666664
                  },
                  "server.VideoPlayer.html#autoDownload": {
                    "ref": "server.VideoPlayer.html#autoDownload",
                    "tf": 8.333333333333332
                  }
                }
              }
            },
            "x": {
              "docs": {},
              "t": {
                "docs": {
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 1.3888888888888888
                  },
                  "server.image.html#.exports.getThumbail": {
                    "ref": "server.image.html#.exports.getThumbail",
                    "tf": 20
                  }
                },
                "c": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "server.https.html#.start": {
                              "ref": "server.https.html#.start",
                              "tf": 0.3472222222222222
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "s": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "z": {
                      "docs": {
                        "server.https.html#.start": {
                          "ref": "server.https.html#.start",
                          "tf": 0.3472222222222222
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "p": {
                "docs": {
                  "server.global.html#.__tempFolder": {
                    "ref": "server.global.html#.__tempFolder",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {},
                "d": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "f": {
                      "docs": {
                        "server.image.html#.ThumbailOption": {
                          "ref": "server.image.html#.ThumbailOption",
                          "tf": 110
                        },
                        "server.data.config.html#.VideoPlayerConfig": {
                          "ref": "server.data.config.html#.VideoPlayerConfig",
                          "tf": 110
                        },
                        "server.data.config.html#.AnimeConfig": {
                          "ref": "server.data.config.html#.AnimeConfig",
                          "tf": 110
                        },
                        "server.data.config.html#.Config": {
                          "ref": "server.data.config.html#.Config",
                          "tf": 110
                        },
                        "server.data.config.html#.EpisodeConfig": {
                          "ref": "server.data.config.html#.EpisodeConfig",
                          "tf": 110
                        },
                        "server.data.public.html#.PublicVideoPlayer": {
                          "ref": "server.data.public.html#.PublicVideoPlayer",
                          "tf": 110
                        },
                        "server.data.public.html#.PlayerInfo": {
                          "ref": "server.data.public.html#.PlayerInfo",
                          "tf": 110
                        },
                        "server.data.public.html#.PublicAnime": {
                          "ref": "server.data.public.html#.PublicAnime",
                          "tf": 110
                        },
                        "server.data.public.html#.PublicEpisode": {
                          "ref": "server.data.public.html#.PublicEpisode",
                          "tf": 110
                        },
                        "server.data.public.html#.EpisodeInfo": {
                          "ref": "server.data.public.html#.EpisodeInfo",
                          "tf": 110
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "s": {
            "docs": {
              "server.DownloadEpisode.html": {
                "ref": "server.DownloadEpisode.html",
                "tf": 4.545454545454546
              },
              "server.DownloadEpisode.html#player": {
                "ref": "server.DownloadEpisode.html#player",
                "tf": 10
              },
              "server.VideoPlayer.html": {
                "ref": "server.VideoPlayer.html",
                "tf": 12.5
              },
              "server.VideoPlayer.html#autoDownload": {
                "ref": "server.VideoPlayer.html#autoDownload",
                "tf": 8.333333333333332
              },
              "server.VideoPlayer.html#download": {
                "ref": "server.VideoPlayer.html#download",
                "tf": 8.333333333333332
              },
              "server.YoutubePlayer.html": {
                "ref": "server.YoutubePlayer.html",
                "tf": 7.142857142857142
              },
              "server.Anime.html#jsonObject": {
                "ref": "server.Anime.html#jsonObject",
                "tf": 6.25
              },
              "server.Episode.html#path": {
                "ref": "server.Episode.html#path",
                "tf": 9.090909090909092
              },
              "server.https.html#.start": {
                "ref": "server.https.html#.start",
                "tf": 0.6944444444444444
              }
            }
          },
          "n": {
            "docs": {},
            "i": {
              "docs": {},
              "q": {
                "docs": {},
                "u": {
                  "docs": {
                    "server.DownloadEpisode.html#id": {
                      "ref": "server.DownloadEpisode.html#id",
                      "tf": 12.5
                    },
                    "server.VideoPlayer.html#id": {
                      "ref": "server.VideoPlayer.html#id",
                      "tf": 16.666666666666664
                    },
                    "server.YoutubePlayer.html#.instance": {
                      "ref": "server.YoutubePlayer.html#.instance",
                      "tf": 16.666666666666664
                    },
                    "server.Anime.html#id": {
                      "ref": "server.Anime.html#id",
                      "tf": 16.666666666666664
                    },
                    "server.Episode.html#episodeId": {
                      "ref": "server.Episode.html#episodeId",
                      "tf": 7.142857142857142
                    },
                    "server.html#.createLogFile": {
                      "ref": "server.html#.createLogFile",
                      "tf": 6.25
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "l": {
              "docs": {
                "server.DownloadEpisode.html#download": {
                  "ref": "server.DownloadEpisode.html#download",
                  "tf": 33.33333333333333
                },
                "server.VideoPlayer.html#prefix": {
                  "ref": "server.VideoPlayer.html#prefix",
                  "tf": 16.666666666666664
                },
                "server.VideoPlayer.html#autoDownload": {
                  "ref": "server.VideoPlayer.html#autoDownload",
                  "tf": 16.666666666666664
                },
                "server.VideoPlayer.html#hasPrefix": {
                  "ref": "server.VideoPlayer.html#hasPrefix",
                  "tf": 43.33333333333333
                },
                "server.VideoPlayer.html#.getPlayer": {
                  "ref": "server.VideoPlayer.html#.getPlayer",
                  "tf": 33.33333333333333
                },
                "server.YoutubePlayer.html#getInfo": {
                  "ref": "server.YoutubePlayer.html#getInfo",
                  "tf": 33.33333333333333
                },
                "server.Episode.html#getUrlByPlayer": {
                  "ref": "server.Episode.html#getUrlByPlayer",
                  "tf": 12.5
                },
                "server.https.html#.start": {
                  "ref": "server.https.html#.start",
                  "tf": 0.3472222222222222
                },
                "server.data.public.html#.PlayerInfo": {
                  "ref": "server.data.public.html#.PlayerInfo",
                  "tf": 25
                },
                "server.data.public.html#.EpisodeInfo": {
                  "ref": "server.data.public.html#.EpisodeInfo",
                  "tf": 10
                }
              }
            },
            "i": {
              "docs": {
                "server.Anime.html#thumbnailLink": {
                  "ref": "server.Anime.html#thumbnailLink",
                  "tf": 16.666666666666664
                },
                "server.Episode.html#posterLink": {
                  "ref": "server.Episode.html#posterLink",
                  "tf": 16.666666666666664
                }
              }
            }
          },
          "p": {
            "docs": {},
            "d": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "server.Anime.html": {
                      "ref": "server.Anime.html",
                      "tf": 8.333333333333332
                    },
                    "server.Anime.html#updateJson": {
                      "ref": "server.Anime.html#updateJson",
                      "tf": 7.142857142857142
                    },
                    "server.Episode.html#setLocalPath": {
                      "ref": "server.Episode.html#setLocalPath",
                      "tf": 12.5
                    }
                  },
                  "e": {
                    "docs": {},
                    "j": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {
                              "server.Anime.html#updateJson": {
                                "ref": "server.Anime.html#updateJson",
                                "tf": 650
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "i": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "o": {
                  "docs": {
                    "server.DownloadEpisode.html#player": {
                      "ref": "server.DownloadEpisode.html#player",
                      "tf": 10
                    },
                    "server.VideoPlayer.html": {
                      "ref": "server.VideoPlayer.html",
                      "tf": 12.5
                    },
                    "server.VideoPlayer.html#download": {
                      "ref": "server.VideoPlayer.html#download",
                      "tf": 8.333333333333332
                    },
                    "server.VideoPlayer.html#.getVideoPlayerById": {
                      "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                      "tf": 12.5
                    },
                    "server.YoutubePlayer.html": {
                      "ref": "server.YoutubePlayer.html",
                      "tf": 14.285714285714285
                    },
                    "server.YoutubePlayer.html#download": {
                      "ref": "server.YoutubePlayer.html#download",
                      "tf": 12.5
                    },
                    "server.YoutubePlayer.html#getInfo": {
                      "ref": "server.YoutubePlayer.html#getInfo",
                      "tf": 12.5
                    },
                    "server.data.public.html#.PublicVideoPlayer": {
                      "ref": "server.data.public.html#.PublicVideoPlayer",
                      "tf": 12.5
                    }
                  },
                  "p": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "y": {
                          "docs": {
                            "server.DownloadEpisode.html#player": {
                              "ref": "server.DownloadEpisode.html#player",
                              "tf": 25
                            },
                            "server.VideoPlayer.html": {
                              "ref": "server.VideoPlayer.html",
                              "tf": 650
                            },
                            "server.VideoPlayer.html#.list": {
                              "ref": "server.VideoPlayer.html#.list",
                              "tf": 25
                            },
                            "server.VideoPlayer.html#name": {
                              "ref": "server.VideoPlayer.html#name",
                              "tf": 25
                            },
                            "server.VideoPlayer.html#isNatif": {
                              "ref": "server.VideoPlayer.html#isNatif",
                              "tf": 10
                            },
                            "server.VideoPlayer.html#id": {
                              "ref": "server.VideoPlayer.html#id",
                              "tf": 16.666666666666664
                            },
                            "server.VideoPlayer.html#toPublic": {
                              "ref": "server.VideoPlayer.html#toPublic",
                              "tf": 7.142857142857142
                            },
                            "server.VideoPlayer.html#.getPlayer": {
                              "ref": "server.VideoPlayer.html#.getPlayer",
                              "tf": 33.33333333333333
                            },
                            "server.VideoPlayer.html#.getVideoPlayerById": {
                              "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                              "tf": 25
                            },
                            "server.Episode.html#getUrlByPlayer": {
                              "ref": "server.Episode.html#getUrlByPlayer",
                              "tf": 12.5
                            },
                            "server.data.config.html#.VideoPlayerConfig": {
                              "ref": "server.data.config.html#.VideoPlayerConfig",
                              "tf": 25
                            }
                          },
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              ".": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "w": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {
                                                  "server.DownloadEpisode.html": {
                                                    "ref": "server.DownloadEpisode.html",
                                                    "tf": 4.545454545454546
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "l": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "server.VideoPlayer.html#.list": {
                                            "ref": "server.VideoPlayer.html#.list",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "g": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "y": {
                                              "docs": {
                                                "server.VideoPlayer.html#.getPlayer": {
                                                  "ref": "server.VideoPlayer.html#.getPlayer",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "v": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "y": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "b": {
                                                              "docs": {},
                                                              "y": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "d": {
                                                                    "docs": {
                                                                      "server.VideoPlayer.html#.getVideoPlayerById": {
                                                                        "ref": "server.VideoPlayer.html#.getVideoPlayerById",
                                                                        "tf": 100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "#": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "m": {
                                      "docs": {
                                        "server.VideoPlayer.html#name": {
                                          "ref": "server.VideoPlayer.html#name",
                                          "tf": 100
                                        }
                                      }
                                    }
                                  }
                                },
                                "i": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "f": {
                                              "docs": {
                                                "server.VideoPlayer.html#isNatif": {
                                                  "ref": "server.VideoPlayer.html#isNatif",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "d": {
                                    "docs": {
                                      "server.VideoPlayer.html#id": {
                                        "ref": "server.VideoPlayer.html#id",
                                        "tf": 100
                                      }
                                    }
                                  }
                                },
                                "p": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "f": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "x": {
                                            "docs": {
                                              "server.VideoPlayer.html#prefix": {
                                                "ref": "server.VideoPlayer.html#prefix",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "d": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "w": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {
                                                  "server.VideoPlayer.html#downloadable": {
                                                    "ref": "server.VideoPlayer.html#downloadable",
                                                    "tf": 100
                                                  },
                                                  "server.VideoPlayer.html#download": {
                                                    "ref": "server.VideoPlayer.html#download",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "a": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "w": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {
                                                          "server.VideoPlayer.html#autoDownload": {
                                                            "ref": "server.VideoPlayer.html#autoDownload",
                                                            "tf": 100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "t": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "b": {
                                          "docs": {},
                                          "l": {
                                            "docs": {
                                              "server.VideoPlayer.html#toPublic": {
                                                "ref": "server.VideoPlayer.html#toPublic",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "_": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "m": {
                                                            "docs": {},
                                                            "p": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {
                                                                      "server.VideoPlayer.html#_dispatchOnComplete": {
                                                                        "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                                                                        "tf": 100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "p": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {},
                                                                    "s": {
                                                                      "docs": {
                                                                        "server.VideoPlayer.html#_dispatchOnProgress": {
                                                                          "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                                                                          "tf": 100
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {
                                                                  "server.VideoPlayer.html#_dispatchOnError": {
                                                                    "ref": "server.VideoPlayer.html#_dispatchOnError",
                                                                    "tf": 100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "h": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "f": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "x": {
                                                  "docs": {
                                                    "server.VideoPlayer.html#hasPrefix": {
                                                      "ref": "server.VideoPlayer.html#hasPrefix",
                                                      "tf": 100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "i": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "server.https.html#.start": {
                                      "ref": "server.https.html#.start",
                                      "tf": 0.3472222222222222
                                    }
                                  }
                                }
                              },
                              "c": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "f": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "g": {
                                          "docs": {
                                            "server.data.config.html#.VideoPlayerConfig": {
                                              "ref": "server.data.config.html#.VideoPlayerConfig",
                                              "tf": 675
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "b": {
                  "docs": {},
                  "j": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "server.global.html#.nameof": {
                              "ref": "server.global.html#.nameof",
                              "tf": 33.33333333333333
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "a": {
          "docs": {},
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ";": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "w": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "&": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {
                                                                  "server.DownloadEpisode.html#.list": {
                                                                    "ref": "server.DownloadEpisode.html#.list",
                                                                    "tf": 25
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "t": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "w": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {},
                                                        "&": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {
                                                                "server.DownloadEpisode.html#.toDownload": {
                                                                  "ref": "server.DownloadEpisode.html#.toDownload",
                                                                  "tf": 33.33333333333333
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "v": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "y": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "&": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {
                                                          "server.VideoPlayer.html#.list": {
                                                            "ref": "server.VideoPlayer.html#.list",
                                                            "tf": 25
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "s": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "&": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "server.VideoPlayer.html#prefix": {
                                                  "ref": "server.VideoPlayer.html#prefix",
                                                  "tf": 50
                                                },
                                                "server.Episode.html#links": {
                                                  "ref": "server.Episode.html#links",
                                                  "tf": 50
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "a": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "&": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "server.Anime.html#.list": {
                                                "ref": "server.Anime.html#.list",
                                                "tf": 25
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "e": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "&": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "server.Anime.html#episodes": {
                                                    "ref": "server.Anime.html#episodes",
                                                    "tf": 50
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "a": {
              "docs": {},
              "i": {
                "docs": {},
                "l": {
                  "docs": {
                    "server.VideoPlayer.html#isNatif": {
                      "ref": "server.VideoPlayer.html#isNatif",
                      "tf": 10
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "t": {
              "docs": {},
              "o": {
                "docs": {},
                "d": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "w": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "server.VideoPlayer.html#autoDownload": {
                                    "ref": "server.VideoPlayer.html#autoDownload",
                                    "tf": 650
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "y": {
              "docs": {},
              "n": {
                "docs": {},
                "c": {
                  "docs": {
                    "server.VideoPlayer.html#download": {
                      "ref": "server.VideoPlayer.html#download",
                      "tf": 8.333333333333332
                    },
                    "server.YoutubePlayer.html#download": {
                      "ref": "server.YoutubePlayer.html#download",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "server.https.html#.start": {
                      "ref": "server.https.html#.start",
                      "tf": 0.3472222222222222
                    }
                  },
                  "/": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {
                            "server.https.html#.start": {
                              "ref": "server.https.html#.start",
                              "tf": 0.3472222222222222
                            }
                          }
                        }
                      }
                    },
                    "t": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "/": {
                                        "docs": {},
                                        ":": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "x": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  ".": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "g": {
                                                          "docs": {
                                                            "server.https.html#.start": {
                                                              "ref": "server.https.html#.start",
                                                              "tf": 0.3472222222222222
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "i": {
              "docs": {},
              "m": {
                "docs": {
                  "server.Anime.html": {
                    "ref": "server.Anime.html",
                    "tf": 666.6666666666666
                  },
                  "server.Anime.html#.list": {
                    "ref": "server.Anime.html#.list",
                    "tf": 25
                  },
                  "server.Anime.html#.publicList": {
                    "ref": "server.Anime.html#.publicList",
                    "tf": 10
                  },
                  "server.Anime.html#jsonObject": {
                    "ref": "server.Anime.html#jsonObject",
                    "tf": 12.5
                  },
                  "server.Anime.html#name": {
                    "ref": "server.Anime.html#name",
                    "tf": 25
                  },
                  "server.Anime.html#thumbnailLink": {
                    "ref": "server.Anime.html#thumbnailLink",
                    "tf": 16.666666666666664
                  },
                  "server.Anime.html#id": {
                    "ref": "server.Anime.html#id",
                    "tf": 16.666666666666664
                  },
                  "server.Anime.html#path": {
                    "ref": "server.Anime.html#path",
                    "tf": 12.5
                  },
                  "server.Anime.html#toPublic": {
                    "ref": "server.Anime.html#toPublic",
                    "tf": 7.142857142857142
                  },
                  "server.Anime.html#toAnimeConfig": {
                    "ref": "server.Anime.html#toAnimeConfig",
                    "tf": 16.666666666666664
                  },
                  "server.Episode.html#anime": {
                    "ref": "server.Episode.html#anime",
                    "tf": 691.6666666666666
                  },
                  "server.Episode.html#setLocalPath": {
                    "ref": "server.Episode.html#setLocalPath",
                    "tf": 12.5
                  },
                  "server.https.html#.start": {
                    "ref": "server.https.html#.start",
                    "tf": 2.7777777777777777
                  },
                  "server.data.config.html#.AnimeConfig": {
                    "ref": "server.data.config.html#.AnimeConfig",
                    "tf": 25
                  },
                  "server.data.public.html#.PublicAnime": {
                    "ref": "server.data.public.html#.PublicAnime",
                    "tf": 16.666666666666664
                  }
                },
                "e": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "server.Anime.html#.list": {
                                "ref": "server.Anime.html#.list",
                                "tf": 100
                              }
                            }
                          }
                        }
                      }
                    },
                    "p": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "server.Anime.html#.publicList": {
                                            "ref": "server.Anime.html#.publicList",
                                            "tf": 100
                                          },
                                          "server.https.html#.start": {
                                            "ref": "server.https.html#.start",
                                            "tf": 0.3472222222222222
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "#": {
                    "docs": {},
                    "j": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "b": {
                                "docs": {},
                                "j": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "server.Anime.html#jsonObject": {
                                            "ref": "server.Anime.html#jsonObject",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "n": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "server.Anime.html#name": {
                              "ref": "server.Anime.html#name",
                              "tf": 100
                            }
                          }
                        }
                      }
                    },
                    "t": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "k": {
                                              "docs": {
                                                "server.Anime.html#thumbnailLink": {
                                                  "ref": "server.Anime.html#thumbnailLink",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "o": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "l": {
                                "docs": {
                                  "server.Anime.html#toPublic": {
                                    "ref": "server.Anime.html#toPublic",
                                    "tf": 100
                                  }
                                }
                              }
                            }
                          }
                        },
                        "a": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "f": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "g": {
                                              "docs": {
                                                "server.Anime.html#toAnimeConfig": {
                                                  "ref": "server.Anime.html#toAnimeConfig",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "_": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "h": {
                              "docs": {
                                "server.Anime.html#_path": {
                                  "ref": "server.Anime.html#_path",
                                  "tf": 100
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "e": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "server.Anime.html#episodes": {
                                    "ref": "server.Anime.html#episodes",
                                    "tf": 100
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "i": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "server.Anime.html#id": {
                            "ref": "server.Anime.html#id",
                            "tf": 100
                          }
                        }
                      }
                    },
                    "p": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "h": {
                            "docs": {
                              "server.Anime.html#path": {
                                "ref": "server.Anime.html#path",
                                "tf": 100
                              }
                            }
                          }
                        }
                      }
                    },
                    "g": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "b": {
                                          "docs": {},
                                          "y": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "d": {
                                                "docs": {
                                                  "server.Anime.html#getEpisodeById": {
                                                    "ref": "server.Anime.html#getEpisodeById",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "u": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "j": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "n": {
                                        "docs": {
                                          "server.Anime.html#updateJson": {
                                            "ref": "server.Anime.html#updateJson",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "'": {
                    "docs": {
                      "server.Anime.html#_path": {
                        "ref": "server.Anime.html#_path",
                        "tf": 16.666666666666664
                      },
                      "server.Anime.html#getEpisodeById": {
                        "ref": "server.Anime.html#getEpisodeById",
                        "tf": 16.666666666666664
                      }
                    }
                  },
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "g": {
                              "docs": {
                                "server.Anime.html#updateJson": {
                                  "ref": "server.Anime.html#updateJson",
                                  "tf": 7.142857142857142
                                },
                                "server.Anime.html#toAnimeConfig": {
                                  "ref": "server.Anime.html#toAnimeConfig",
                                  "tf": 66.66666666666666
                                },
                                "server.data.config.html#.AnimeConfig": {
                                  "ref": "server.data.config.html#.AnimeConfig",
                                  "tf": 675
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "server.https.html#.start": {
                          "ref": "server.https.html#.start",
                          "tf": 1.0416666666666665
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "d": {
              "docs": {
                "server.https.html#.start": {
                  "ref": "server.https.html#.start",
                  "tf": 0.6944444444444444
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {
                  "server.DownloadEpisode.html#episode": {
                    "ref": "server.DownloadEpisode.html#episode",
                    "tf": 16.666666666666664
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "server.VideoPlayer.html#isNatif": {
                      "ref": "server.VideoPlayer.html#isNatif",
                      "tf": 10
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {
                    "server.global.html#.writeLog": {
                      "ref": "server.global.html#.writeLog",
                      "tf": 16.666666666666664
                    }
                  },
                  "l": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "g": {
                        "docs": {
                          "server.global.html#.writeLog": {
                            "ref": "server.global.html#.writeLog",
                            "tf": 625
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "d": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "server.https.html#.start": {
                      "ref": "server.https.html#.start",
                      "tf": 0.6944444444444444
                    }
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "server.DownloadEpisode.html#isReady": {
                          "ref": "server.DownloadEpisode.html#isReady",
                          "tf": 25
                        },
                        "server.DownloadEpisode.html#isPending": {
                          "ref": "server.DownloadEpisode.html#isPending",
                          "tf": 33.33333333333333
                        },
                        "server.DownloadEpisode.html#isDownloading": {
                          "ref": "server.DownloadEpisode.html#isDownloading",
                          "tf": 33.33333333333333
                        },
                        "server.DownloadEpisode.html#isError": {
                          "ref": "server.DownloadEpisode.html#isError",
                          "tf": 33.33333333333333
                        },
                        "server.VideoPlayer.html#isNatif": {
                          "ref": "server.VideoPlayer.html#isNatif",
                          "tf": 33.33333333333333
                        },
                        "server.VideoPlayer.html#downloadable": {
                          "ref": "server.VideoPlayer.html#downloadable",
                          "tf": 50
                        },
                        "server.VideoPlayer.html#autoDownload": {
                          "ref": "server.VideoPlayer.html#autoDownload",
                          "tf": 50
                        },
                        "server.VideoPlayer.html#hasPrefix": {
                          "ref": "server.VideoPlayer.html#hasPrefix",
                          "tf": 33.33333333333333
                        },
                        "server.Episode.html#isLocal": {
                          "ref": "server.Episode.html#isLocal",
                          "tf": 50
                        },
                        "server.Episode.html#hasPoster": {
                          "ref": "server.Episode.html#hasPoster",
                          "tf": 50
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "w": {
                "docs": {},
                "e": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "server.Episode.html#episodeId": {
                          "ref": "server.Episode.html#episodeId",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "c": {
              "docs": {},
              "k": {
                "docs": {},
                "g": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "server.https.html#.start": {
                                "ref": "server.https.html#.start",
                                "tf": 0.3472222222222222
                              }
                            },
                            "c": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "r": {
                                      "docs": {
                                        "server.https.html#.start": {
                                          "ref": "server.https.html#.start",
                                          "tf": 0.3472222222222222
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "_": {
          "docs": {},
          "s": {
            "docs": {},
            "e": {
              "docs": {},
              "t": {
                "docs": {},
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "h": {
                                  "docs": {
                                    "server.DownloadEpisode.html#_setLocalPath": {
                                      "ref": "server.DownloadEpisode.html#_setLocalPath",
                                      "tf": 633.3333333333334
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "server.DownloadEpisode.html#_setEvents": {
                        "ref": "server.DownloadEpisode.html#_setEvents",
                        "tf": 633.3333333333334
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "i": {
              "docs": {},
              "s": {
                "docs": {},
                "p": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "h": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "server.VideoPlayer.html#_dispatchOnComplete": {
                                                "ref": "server.VideoPlayer.html#_dispatchOnComplete",
                                                "tf": 625
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "p": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "server.VideoPlayer.html#_dispatchOnProgress": {
                                                  "ref": "server.VideoPlayer.html#_dispatchOnProgress",
                                                  "tf": 625
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {
                                          "server.VideoPlayer.html#_dispatchOnError": {
                                            "ref": "server.VideoPlayer.html#_dispatchOnError",
                                            "tf": 625
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "server.Anime.html#_path": {
                      "ref": "server.Anime.html#_path",
                      "tf": 625
                    }
                  }
                }
              }
            }
          },
          "_": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "o": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "server.global.html#.__root": {
                        "ref": "server.global.html#.__root",
                        "tf": 633.3333333333334
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "o": {
                "docs": {},
                "g": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "l": {
                        "docs": {
                          "server.global.html#.__logFile": {
                            "ref": "server.global.html#.__logFile",
                            "tf": 633.3333333333334
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "m": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "server.global.html#.__tempFolder": {
                                "ref": "server.global.html#.__tempFolder",
                                "tf": 633.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "y": {
          "docs": {},
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "t": {
                "docs": {},
                "u": {
                  "docs": {},
                  "b": {
                    "docs": {
                      "server.YoutubePlayer.html": {
                        "ref": "server.YoutubePlayer.html",
                        "tf": 7.142857142857142
                      },
                      "server.YoutubePlayer.html#download": {
                        "ref": "server.YoutubePlayer.html#download",
                        "tf": 12.5
                      },
                      "server.YoutubePlayer.html#getInfo": {
                        "ref": "server.YoutubePlayer.html#getInfo",
                        "tf": 12.5
                      }
                    },
                    "e": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "y": {
                              "docs": {
                                "server.YoutubePlayer.html": {
                                  "ref": "server.YoutubePlayer.html",
                                  "tf": 650
                                }
                              },
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  ".": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "server.YoutubePlayer.html#.instance": {
                                                "ref": "server.YoutubePlayer.html#.instance",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "#": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "w": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "server.YoutubePlayer.html#download": {
                                                        "ref": "server.YoutubePlayer.html#download",
                                                        "tf": 100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "g": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "f": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {
                                                    "server.YoutubePlayer.html#getInfo": {
                                                      "ref": "server.YoutubePlayer.html#getInfo",
                                                      "tf": 100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 884
    },
    "corpusTokens": [
      "__logfil",
      "__root",
      "__tempfold",
      "_dispatchoncomplet",
      "_dispatchonerror",
      "_dispatchonprogress",
      "_path",
      "_setev",
      "_setlocalpath",
      "add",
      "anim",
      "anime#_path",
      "anime#episod",
      "anime#getepisodebyid",
      "anime#id",
      "anime#jsonobject",
      "anime#nam",
      "anime#path",
      "anime#thumbnaillink",
      "anime#toanimeconfig",
      "anime#topubl",
      "anime#updatejson",
      "anime'",
      "anime.list",
      "anime.publiclist",
      "animeconfig",
      "animeid",
      "array.&lt;anime&gt",
      "array.&lt;downloadepisode&gt",
      "array.&lt;episode&gt",
      "array.&lt;string&gt",
      "array.&lt;todownloaditem&gt",
      "array.&lt;videoplayer&gt",
      "asset",
      "asset/ico",
      "asset/thumbnail/:text.png",
      "async",
      "autodownload",
      "avail",
      "background",
      "backgroundcolor",
      "between",
      "boolean",
      "call",
      "class",
      "client",
      "color",
      "compar",
      "complet",
      "config",
      "config.animeconfig",
      "config.config",
      "config.episodeconfig",
      "config.videoplayerconfig",
      "consolegroup",
      "correspond",
      "corrispond",
      "creat",
      "createlogfil",
      "css",
      "current",
      "currentdownload",
      "data",
      "data.config",
      "data.config.animeconfig",
      "data.config.config",
      "data.config.episodeconfig",
      "data.config.videoplayerconfig",
      "data.publ",
      "data.public.episodeinfo",
      "data.public.playerinfo",
      "data.public.publicanim",
      "data.public.publicepisod",
      "data.public.publicvideoplay",
      "default",
      "defin",
      "destroy",
      "document",
      "done",
      "download",
      "downloadepisod",
      "downloadepisode#_setev",
      "downloadepisode#_setlocalpath",
      "downloadepisode#destroy",
      "downloadepisode#download",
      "downloadepisode#episod",
      "downloadepisode#error",
      "downloadepisode#id",
      "downloadepisode#isdownload",
      "downloadepisode#iserror",
      "downloadepisode#ispend",
      "downloadepisode#isreadi",
      "downloadepisode#play",
      "downloadepisode#progress",
      "downloadepisode.currentdownload",
      "downloadepisode.getfromepisod",
      "downloadepisode.list",
      "downloadepisode.todownload",
      "downloadurl",
      "edit",
      "emitt",
      "ensur",
      "episod",
      "episode#anim",
      "episode#episodeid",
      "episode#getinfo",
      "episode#geturlbyplay",
      "episode#haspost",
      "episode#isloc",
      "episode#link",
      "episode#locallink",
      "episode#nam",
      "episode#path",
      "episode#posterlink",
      "episode#setlocalpath",
      "episode#toepisodeconfig",
      "episode#topubl",
      "episode'",
      "episode.link",
      "episode.locallink",
      "episode.setlocalpath",
      "episode/:animeid/:episodeid",
      "episodeconfig",
      "episodeid",
      "episodeinfo",
      "episodes'",
      "episode|nul",
      "epsod",
      "err",
      "error",
      "event",
      "eventemitt",
      "exports.getthumbail",
      "fetch",
      "file",
      "filenam",
      "fire",
      "first",
      "folder",
      "font",
      "format",
      "func",
      "function",
      "gener",
      "get",
      "get/episode/download",
      "get/episode/info",
      "get/list",
      "get/list/download",
      "getepisodebyid",
      "getfromepisod",
      "getinfo",
      "getplay",
      "getthumbail",
      "geturlbyplay",
      "getvideoplayerbyid",
      "give",
      "given",
      "global",
      "global.__logfil",
      "global.__root",
      "global.__tempfold",
      "global.guidgener",
      "global.nameof",
      "global.overridelin",
      "global.tofilenam",
      "global.writelog",
      "guidgener",
      "handl",
      "haspost",
      "hasprefix",
      "height",
      "helper",
      "html",
      "http",
      "https.start",
      "ico",
      "id",
      "id\":anim",
      "imag",
      "image.exports.getthumbail",
      "image.thumbailopt",
      "index",
      "index.html",
      "index.json",
      "info",
      "inform",
      "instanc",
      "isdownload",
      "iserror",
      "isloc",
      "isnatif",
      "ispend",
      "isreadi",
      "it'",
      "itself",
      "js",
      "json",
      "jsonobject",
      "jsonobject#load",
      "jsonobject#loadsync",
      "jsonobject#sav",
      "last",
      "launch",
      "line",
      "link",
      "list",
      "list:class",
      "list:namespac",
      "load",
      "loadsync",
      "loadyoutubeinfo",
      "local",
      "localfilewithoutextens",
      "locallink",
      "log",
      "logfil",
      "lt;async&gt",
      "lt;privat",
      "lt;private&gt",
      "lt;protect",
      "lt;protected&gt",
      "lt;readonly&gt",
      "lt;static",
      "lt;static&gt",
      "map",
      "match",
      "max",
      "member",
      "messag",
      "name",
      "nameof",
      "namespac",
      "new",
      "new/anim",
      "new/episod",
      "newlin",
      "node.j",
      "number",
      "object",
      "on",
      "ongo",
      "option",
      "order",
      "overrid",
      "overridelin",
      "param",
      "path",
      "path.join($this.anime.path",
      "pathtofil",
      "pend",
      "player",
      "playerinfo",
      "poster",
      "posterlink",
      "prefix",
      "prefix(",
      "progress",
      "progress\":downloadepisode.progress",
      "projet",
      "promise.&lt;episodeinfo&gt",
      "promise.&lt;string&gt",
      "promise.&lt;void&gt",
      "promise.&lt;ytdl.videoinfo&gt",
      "public",
      "public.episodeinfo",
      "public.playerinfo",
      "public.publicanim",
      "public.publicepisod",
      "public.publicvideoplay",
      "publicanim",
      "publicepisod",
      "publiclist",
      "publicvideoplay",
      "readi",
      "readm",
      "readonly&gt",
      "recdownloaddata",
      "refer",
      "remov",
      "replac",
      "return",
      "save",
      "see",
      "send",
      "server",
      "server.anim",
      "server.anime#_path",
      "server.anime#episod",
      "server.anime#getepisodebyid",
      "server.anime#id",
      "server.anime#jsonobject",
      "server.anime#nam",
      "server.anime#path",
      "server.anime#thumbnaillink",
      "server.anime#toanimeconfig",
      "server.anime#topubl",
      "server.anime#updatejson",
      "server.anime.list",
      "server.anime.publiclist",
      "server.createlogfil",
      "server.data",
      "server.data.config",
      "server.data.config.animeconfig",
      "server.data.config.config",
      "server.data.config.episodeconfig",
      "server.data.config.videoplayerconfig",
      "server.data.publ",
      "server.data.public.episodeinfo",
      "server.data.public.playerinfo",
      "server.data.public.publicanim",
      "server.data.public.publicepisod",
      "server.data.public.publicvideoplay",
      "server.downloadepisod",
      "server.downloadepisode#_setev",
      "server.downloadepisode#_setlocalpath",
      "server.downloadepisode#destroy",
      "server.downloadepisode#download",
      "server.downloadepisode#episod",
      "server.downloadepisode#error",
      "server.downloadepisode#id",
      "server.downloadepisode#isdownload",
      "server.downloadepisode#iserror",
      "server.downloadepisode#ispend",
      "server.downloadepisode#isreadi",
      "server.downloadepisode#play",
      "server.downloadepisode#progress",
      "server.downloadepisode.currentdownload",
      "server.downloadepisode.getfromepisod",
      "server.downloadepisode.list",
      "server.downloadepisode.todownload",
      "server.episod",
      "server.episode#anim",
      "server.episode#episodeid",
      "server.episode#getinfo",
      "server.episode#geturlbyplay",
      "server.episode#haspost",
      "server.episode#isloc",
      "server.episode#link",
      "server.episode#locallink",
      "server.episode#nam",
      "server.episode#path",
      "server.episode#posterlink",
      "server.episode#setlocalpath",
      "server.episode#toepisodeconfig",
      "server.episode#topubl",
      "server.glob",
      "server.global.__logfil",
      "server.global.__root",
      "server.global.__tempfold",
      "server.global.guidgener",
      "server.global.nameof",
      "server.global.overridelin",
      "server.global.tofilenam",
      "server.global.writelog",
      "server.http",
      "server.https.start",
      "server.imag",
      "server.image.exports.getthumbail",
      "server.image.thumbailopt",
      "server.jsonobject",
      "server.jsonobject#load",
      "server.jsonobject#loadsync",
      "server.jsonobject#sav",
      "server.videoplay",
      "server.videoplayer#_dispatchoncomplet",
      "server.videoplayer#_dispatchonerror",
      "server.videoplayer#_dispatchonprogress",
      "server.videoplayer#autodownload",
      "server.videoplayer#download",
      "server.videoplayer#hasprefix",
      "server.videoplayer#id",
      "server.videoplayer#isnatif",
      "server.videoplayer#nam",
      "server.videoplayer#prefix",
      "server.videoplayer#topubl",
      "server.videoplayer.getplay",
      "server.videoplayer.getvideoplayerbyid",
      "server.videoplayer.list",
      "server.youtubeplay",
      "server.youtubeplayer#download",
      "server.youtubeplayer#getinfo",
      "server.youtubeplayer.inst",
      "server~anim",
      "server~downloadepisod",
      "server~episod",
      "server~jsonobject",
      "server~videoplay",
      "server~youtubeplay",
      "set",
      "setlocalpath",
      "show",
      "size",
      "start",
      "static&gt",
      "store",
      "stream",
      "streamanim",
      "string",
      "tell",
      "temp",
      "text",
      "textcolor",
      "textsiz",
      "there'",
      "this.episodeid",
      "thumbailopt",
      "thumbnail",
      "thumbnaillink",
      "toanimeconfig",
      "todownload",
      "toepisodeconfig",
      "tofilenam",
      "topubl",
      "true",
      "typedef",
      "uniqu",
      "updat",
      "updatejson",
      "uri",
      "url",
      "us",
      "varobject",
      "video",
      "videoplay",
      "videoplayer#_dispatchoncomplet",
      "videoplayer#_dispatchonerror",
      "videoplayer#_dispatchonprogress",
      "videoplayer#autodownload",
      "videoplayer#download",
      "videoplayer#hasprefix",
      "videoplayer#id",
      "videoplayer#isnatif",
      "videoplayer#nam",
      "videoplayer#prefix",
      "videoplayer#topubl",
      "videoplayer.download",
      "videoplayer.getplay",
      "videoplayer.getvideoplayerbyid",
      "videoplayer.list",
      "videoplayerconfig",
      "videoplayerid",
      "want",
      "width",
      "write",
      "writelog",
      "wront",
      "youtub",
      "youtubeplay",
      "youtubeplayer#download",
      "youtubeplayer#getinfo",
      "youtubeplayer.inst"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "Streamanime helper",
      "longname": "index",
      "name": "Streamanime helper",
      "tags": "index",
      "summary": "Documentation",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "list_namespace.html": {
      "id": "list_namespace.html",
      "kind": "list",
      "title": "Namespaces",
      "longname": "list:namespace",
      "name": "Namespaces",
      "tags": "list:namespace",
      "summary": "All documented namespaces.",
      "description": "",
      "body": ""
    },
    "server.JsonObject.html": {
      "id": "server.JsonObject.html",
      "kind": "class",
      "title": "server~JsonObject",
      "longname": "server.JsonObject",
      "name": "JsonObject",
      "tags": "server.JsonObject JsonObject",
      "summary": "",
      "description": "Load and save a json file",
      "body": ""
    },
    "server.JsonObject.html#loadSync": {
      "id": "server.JsonObject.html#loadSync",
      "kind": "function",
      "title": "loadSync( [ func ] )",
      "longname": "server.JsonObject#loadSync",
      "name": "loadSync",
      "tags": "server.JsonObject#loadSync JsonObject#loadSync loadSync",
      "summary": "",
      "description": ""
    },
    "server.JsonObject.html#load": {
      "id": "server.JsonObject.html#load",
      "kind": "function",
      "title": "load()",
      "longname": "server.JsonObject#load",
      "name": "load",
      "tags": "server.JsonObject#load JsonObject#load load",
      "summary": "",
      "description": ""
    },
    "server.JsonObject.html#save": {
      "id": "server.JsonObject.html#save",
      "kind": "function",
      "title": "save() → {Promise.&lt;void&gt;}",
      "longname": "server.JsonObject#save",
      "name": "save",
      "tags": "server.JsonObject#save JsonObject#save save",
      "summary": "",
      "description": ""
    },
    "server.DownloadEpisode.html": {
      "id": "server.DownloadEpisode.html",
      "kind": "class",
      "title": "server~DownloadEpisode",
      "longname": "server.DownloadEpisode",
      "name": "DownloadEpisode",
      "tags": "server.DownloadEpisode DownloadEpisode",
      "summary": "",
      "description": "A class used to handle the events of VideoPlayer.download. Ensure that there's only one download max by episode",
      "body": ""
    },
    "server.DownloadEpisode.html#.list": {
      "id": "server.DownloadEpisode.html#.list",
      "kind": "member",
      "title": "&lt;static, readonly&gt; list :Array.&lt;DownloadEpisode&gt;",
      "longname": "server.DownloadEpisode.list",
      "name": "list",
      "tags": "server.DownloadEpisode.list DownloadEpisode.list list",
      "summary": "",
      "description": ""
    },
    "server.DownloadEpisode.html#.toDownload": {
      "id": "server.DownloadEpisode.html#.toDownload",
      "kind": "member",
      "title": "&lt;static&gt; toDownload :Array.&lt;ToDownloadItem&gt;",
      "longname": "server.DownloadEpisode.toDownload",
      "name": "toDownload",
      "tags": "server.DownloadEpisode.toDownload DownloadEpisode.toDownload toDownload",
      "summary": "",
      "description": ""
    },
    "server.DownloadEpisode.html#.currentDownload": {
      "id": "server.DownloadEpisode.html#.currentDownload",
      "kind": "member",
      "title": "&lt;protected, static&gt; currentDownload :DownloadEpisode",
      "longname": "server.DownloadEpisode.currentDownload",
      "name": "currentDownload",
      "tags": "server.DownloadEpisode.currentDownload DownloadEpisode.currentDownload currentDownload",
      "summary": "",
      "description": ""
    },
    "server.DownloadEpisode.html#episode": {
      "id": "server.DownloadEpisode.html#episode",
      "kind": "member",
      "title": "&lt;readonly&gt; episode :Episode",
      "longname": "server.DownloadEpisode#episode",
      "name": "episode",
      "tags": "server.DownloadEpisode#episode DownloadEpisode#episode episode",
      "summary": "",
      "description": "The episode we want to download"
    },
    "server.DownloadEpisode.html#id": {
      "id": "server.DownloadEpisode.html#id",
      "kind": "member",
      "title": "&lt;readonly&gt; id :number",
      "longname": "server.DownloadEpisode#id",
      "name": "id",
      "tags": "server.DownloadEpisode#id DownloadEpisode#id id",
      "summary": "",
      "description": "The unique id of the DownloadEpisode instance"
    },
    "server.DownloadEpisode.html#player": {
      "id": "server.DownloadEpisode.html#player",
      "kind": "member",
      "title": "&lt;private, readonly&gt; player :VideoPlayer",
      "longname": "server.DownloadEpisode#player",
      "name": "player",
      "tags": "server.DownloadEpisode#player DownloadEpisode#player player",
      "summary": "",
      "description": "The player used to download the video (epsode)"
    },
    "server.DownloadEpisode.html#isReady": {
      "id": "server.DownloadEpisode.html#isReady",
      "kind": "member",
      "title": "&lt;private, readonly&gt; isReady :boolean",
      "longname": "server.DownloadEpisode#isReady",
      "name": "isReady",
      "tags": "server.DownloadEpisode#isReady DownloadEpisode#isReady isReady",
      "summary": "",
      "description": "If the download is done and the json saved"
    },
    "server.DownloadEpisode.html#isPending": {
      "id": "server.DownloadEpisode.html#isPending",
      "kind": "member",
      "title": "&lt;readonly&gt; isPending :boolean",
      "longname": "server.DownloadEpisode#isPending",
      "name": "isPending",
      "tags": "server.DownloadEpisode#isPending DownloadEpisode#isPending isPending",
      "summary": "",
      "description": "If the download is pending"
    },
    "server.DownloadEpisode.html#isDownloading": {
      "id": "server.DownloadEpisode.html#isDownloading",
      "kind": "member",
      "title": "&lt;readonly&gt; isDownloading :boolean",
      "longname": "server.DownloadEpisode#isDownloading",
      "name": "isDownloading",
      "tags": "server.DownloadEpisode#isDownloading DownloadEpisode#isDownloading isDownloading",
      "summary": "",
      "description": "If the download is ongoing"
    },
    "server.DownloadEpisode.html#isError": {
      "id": "server.DownloadEpisode.html#isError",
      "kind": "member",
      "title": "&lt;readonly&gt; isError :boolean",
      "longname": "server.DownloadEpisode#isError",
      "name": "isError",
      "tags": "server.DownloadEpisode#isError DownloadEpisode#isError isError",
      "summary": "",
      "description": "If there is an error"
    },
    "server.DownloadEpisode.html#error": {
      "id": "server.DownloadEpisode.html#error",
      "kind": "member",
      "title": "&lt;readonly&gt; error :string",
      "longname": "server.DownloadEpisode#error",
      "name": "error",
      "tags": "server.DownloadEpisode#error DownloadEpisode#error error",
      "summary": "",
      "description": "The error"
    },
    "server.DownloadEpisode.html#progress": {
      "id": "server.DownloadEpisode.html#progress",
      "kind": "member",
      "title": "&lt;readonly&gt; progress :number",
      "longname": "server.DownloadEpisode#progress",
      "name": "progress",
      "tags": "server.DownloadEpisode#progress DownloadEpisode#progress progress",
      "summary": "",
      "description": "The progress of the download"
    },
    "server.DownloadEpisode.html#_setLocalPath": {
      "id": "server.DownloadEpisode.html#_setLocalPath",
      "kind": "function",
      "title": "&lt;private&gt; _setLocalPath( pathToFile )",
      "longname": "server.DownloadEpisode#_setLocalPath",
      "name": "_setLocalPath",
      "tags": "server.DownloadEpisode#_setLocalPath DownloadEpisode#_setLocalPath _setLocalPath",
      "summary": "",
      "description": "Call Episode#setLocalPath and set itself ready when it's done"
    },
    "server.DownloadEpisode.html#download": {
      "id": "server.DownloadEpisode.html#download",
      "kind": "function",
      "title": "download( url, format )",
      "longname": "server.DownloadEpisode#download",
      "name": "download",
      "tags": "server.DownloadEpisode#download DownloadEpisode#download download",
      "summary": "",
      "description": "Launch the download"
    },
    "server.DownloadEpisode.html#_setEvents": {
      "id": "server.DownloadEpisode.html#_setEvents",
      "kind": "function",
      "title": "&lt;private&gt; _setEvents( emitter )",
      "longname": "server.DownloadEpisode#_setEvents",
      "name": "_setEvents",
      "tags": "server.DownloadEpisode#_setEvents DownloadEpisode#_setEvents _setEvents",
      "summary": "",
      "description": "Set the events of the emitter"
    },
    "server.DownloadEpisode.html#destroy": {
      "id": "server.DownloadEpisode.html#destroy",
      "kind": "function",
      "title": "destroy()",
      "longname": "server.DownloadEpisode#destroy",
      "name": "destroy",
      "tags": "server.DownloadEpisode#destroy DownloadEpisode#destroy destroy",
      "summary": "",
      "description": "Destroy the instance (Removes it from DownloadEpisode.list.)"
    },
    "server.DownloadEpisode.html#.getFromEpisode": {
      "id": "server.DownloadEpisode.html#.getFromEpisode",
      "kind": "function",
      "title": "&lt;static&gt; getFromEpisode( episode )",
      "longname": "server.DownloadEpisode.getFromEpisode",
      "name": "getFromEpisode",
      "tags": "server.DownloadEpisode.getFromEpisode DownloadEpisode.getFromEpisode getFromEpisode",
      "summary": "",
      "description": ""
    },
    "server.VideoPlayer.html": {
      "id": "server.VideoPlayer.html",
      "kind": "class",
      "title": "server~VideoPlayer",
      "longname": "server.VideoPlayer",
      "name": "VideoPlayer",
      "tags": "server.VideoPlayer VideoPlayer",
      "summary": "",
      "description": "A class used to download a video.",
      "body": ""
    },
    "server.VideoPlayer.html#.list": {
      "id": "server.VideoPlayer.html#.list",
      "kind": "member",
      "title": "&lt;static, readonly&gt; list :Array.&lt;VideoPlayer&gt;",
      "longname": "server.VideoPlayer.list",
      "name": "list",
      "tags": "server.VideoPlayer.list VideoPlayer.list list",
      "summary": "",
      "description": "The list of VideoPlayer"
    },
    "server.VideoPlayer.html#name": {
      "id": "server.VideoPlayer.html#name",
      "kind": "member",
      "title": "&lt;readonly&gt; name :string",
      "longname": "server.VideoPlayer#name",
      "name": "name",
      "tags": "server.VideoPlayer#name VideoPlayer#name name",
      "summary": "",
      "description": "The name of the videoPlayer"
    },
    "server.VideoPlayer.html#isNatif": {
      "id": "server.VideoPlayer.html#isNatif",
      "kind": "member",
      "title": "&lt;readonly&gt; isNatif :boolean",
      "longname": "server.VideoPlayer#isNatif",
      "name": "isNatif",
      "tags": "server.VideoPlayer#isNatif VideoPlayer#isNatif isNatif",
      "summary": "",
      "description": "If true, the VideoPlayer wront be available for edit"
    },
    "server.VideoPlayer.html#prefix": {
      "id": "server.VideoPlayer.html#prefix",
      "kind": "member",
      "title": "prefix :Array.&lt;string&gt;",
      "longname": "server.VideoPlayer#prefix",
      "name": "prefix",
      "tags": "server.VideoPlayer#prefix VideoPlayer#prefix prefix",
      "summary": "",
      "description": "The prefix(s) for matching the url"
    },
    "server.VideoPlayer.html#downloadable": {
      "id": "server.VideoPlayer.html#downloadable",
      "kind": "member",
      "title": "downloadable :boolean",
      "longname": "server.VideoPlayer#downloadable",
      "name": "downloadable",
      "tags": "server.VideoPlayer#downloadable VideoPlayer#downloadable downloadable",
      "summary": "",
      "description": "Tell if the server can download"
    },
    "server.VideoPlayer.html#autoDownload": {
      "id": "server.VideoPlayer.html#autoDownload",
      "kind": "member",
      "title": "autoDownload :boolean",
      "longname": "server.VideoPlayer#autoDownload",
      "name": "autoDownload",
      "tags": "server.VideoPlayer#autoDownload VideoPlayer#autoDownload autoDownload",
      "summary": "",
      "description": "Tell if the url used for downloading is an url in Episode.links"
    },
    "server.VideoPlayer.html#id": {
      "id": "server.VideoPlayer.html#id",
      "kind": "member",
      "title": "&lt;readonly&gt; id",
      "longname": "server.VideoPlayer#id",
      "name": "id",
      "tags": "server.VideoPlayer#id VideoPlayer#id id",
      "summary": "",
      "description": "The unique id of the videoPlayer"
    },
    "server.VideoPlayer.html#toPublic": {
      "id": "server.VideoPlayer.html#toPublic",
      "kind": "function",
      "title": "toPublic() → {PublicVideoPlayer}",
      "longname": "server.VideoPlayer#toPublic",
      "name": "toPublic",
      "tags": "server.VideoPlayer#toPublic VideoPlayer#toPublic toPublic",
      "summary": "",
      "description": "Return the public information of the VideoPlayer (= the informations to give to the client)"
    },
    "server.VideoPlayer.html#_dispatchOnComplete": {
      "id": "server.VideoPlayer.html#_dispatchOnComplete",
      "kind": "function",
      "title": "&lt;protected&gt; _dispatchOnComplete( emitter, recDownloadData )",
      "longname": "server.VideoPlayer#_dispatchOnComplete",
      "name": "_dispatchOnComplete",
      "tags": "server.VideoPlayer#_dispatchOnComplete VideoPlayer#_dispatchOnComplete _dispatchOnComplete",
      "summary": "",
      "description": "Fire the event \"complete\" on the emitter"
    },
    "server.VideoPlayer.html#_dispatchOnProgress": {
      "id": "server.VideoPlayer.html#_dispatchOnProgress",
      "kind": "function",
      "title": "&lt;protected&gt; _dispatchOnProgress( emitter, recDownloadData )",
      "longname": "server.VideoPlayer#_dispatchOnProgress",
      "name": "_dispatchOnProgress",
      "tags": "server.VideoPlayer#_dispatchOnProgress VideoPlayer#_dispatchOnProgress _dispatchOnProgress",
      "summary": "",
      "description": "Fire the event \"progress\" on the emitter"
    },
    "server.VideoPlayer.html#_dispatchOnError": {
      "id": "server.VideoPlayer.html#_dispatchOnError",
      "kind": "function",
      "title": "&lt;protected&gt; _dispatchOnError( emitter, err )",
      "longname": "server.VideoPlayer#_dispatchOnError",
      "name": "_dispatchOnError",
      "tags": "server.VideoPlayer#_dispatchOnError VideoPlayer#_dispatchOnError _dispatchOnError",
      "summary": "",
      "description": "Fire the event \"error\" on the emitter"
    },
    "server.VideoPlayer.html#download": {
      "id": "server.VideoPlayer.html#download",
      "kind": "function",
      "title": "download( downloadUrl, format, fileName ) → {EventEmitter}",
      "longname": "server.VideoPlayer#download",
      "name": "download",
      "tags": "server.VideoPlayer#download VideoPlayer#download download",
      "summary": "",
      "description": "Download the video using the given link (async)"
    },
    "server.VideoPlayer.html#hasPrefix": {
      "id": "server.VideoPlayer.html#hasPrefix",
      "kind": "function",
      "title": "hasPrefix( url ) → {boolean}",
      "longname": "server.VideoPlayer#hasPrefix",
      "name": "hasPrefix",
      "tags": "server.VideoPlayer#hasPrefix VideoPlayer#hasPrefix hasPrefix",
      "summary": "",
      "description": "Compare the url with the prefix and return true if the url match a prefix in the prefix list"
    },
    "server.VideoPlayer.html#.getPlayer": {
      "id": "server.VideoPlayer.html#.getPlayer",
      "kind": "function",
      "title": "&lt;static&gt; getPlayer( url ) → {VideoPlayer}",
      "longname": "server.VideoPlayer.getPlayer",
      "name": "getPlayer",
      "tags": "server.VideoPlayer.getPlayer VideoPlayer.getPlayer getPlayer",
      "summary": "",
      "description": "Return the first Videoplayer with its prefix matching the url"
    },
    "server.VideoPlayer.html#.getVideoPlayerById": {
      "id": "server.VideoPlayer.html#.getVideoPlayerById",
      "kind": "function",
      "title": "&lt;static&gt; getVideoPlayerById( id ) → {VideoPlayer}",
      "longname": "server.VideoPlayer.getVideoPlayerById",
      "name": "getVideoPlayerById",
      "tags": "server.VideoPlayer.getVideoPlayerById VideoPlayer.getVideoPlayerById getVideoPlayerById",
      "summary": "",
      "description": "Return the video player corrisponding"
    },
    "server.YoutubePlayer.html": {
      "id": "server.YoutubePlayer.html",
      "kind": "class",
      "title": "server~YoutubePlayer",
      "longname": "server.YoutubePlayer",
      "name": "YoutubePlayer",
      "tags": "server.YoutubePlayer YoutubePlayer",
      "summary": "",
      "description": "A class used to download a youtube video. It also get the video info.",
      "body": ""
    },
    "server.YoutubePlayer.html#.instance": {
      "id": "server.YoutubePlayer.html#.instance",
      "kind": "member",
      "title": "&lt;static, readonly&gt; instance",
      "longname": "server.YoutubePlayer.instance",
      "name": "instance",
      "tags": "server.YoutubePlayer.instance YoutubePlayer.instance instance",
      "summary": "",
      "description": "Unique instance of the class"
    },
    "server.YoutubePlayer.html#download": {
      "id": "server.YoutubePlayer.html#download",
      "kind": "function",
      "title": "download( downloadUrl, format, localFileWithoutExtension ) → {EventEmitter}",
      "longname": "server.YoutubePlayer#download",
      "name": "download",
      "tags": "server.YoutubePlayer#download YoutubePlayer#download download",
      "summary": "",
      "description": "Download the youtube video (async)"
    },
    "server.YoutubePlayer.html#getInfo": {
      "id": "server.YoutubePlayer.html#getInfo",
      "kind": "function",
      "title": "getInfo( url ) → {Promise.&lt;ytdl.videoInfo&gt;}",
      "longname": "server.YoutubePlayer#getInfo",
      "name": "getInfo",
      "tags": "server.YoutubePlayer#getInfo YoutubePlayer#getInfo getInfo",
      "summary": "",
      "description": "Fetch the informations of the youtube video"
    },
    "server.Anime.html": {
      "id": "server.Anime.html",
      "kind": "class",
      "title": "server~Anime",
      "longname": "server.Anime",
      "name": "Anime",
      "tags": "server.Anime Anime",
      "summary": "",
      "description": "Store the datas of an anime. Can update the index.json of the anime.",
      "body": ""
    },
    "server.Anime.html#.list": {
      "id": "server.Anime.html#.list",
      "kind": "member",
      "title": "&lt;static, readonly&gt; list :Array.&lt;Anime&gt;",
      "longname": "server.Anime.list",
      "name": "list",
      "tags": "server.Anime.list Anime.list list",
      "summary": "",
      "description": "The list of Animes"
    },
    "server.Anime.html#.publicList": {
      "id": "server.Anime.html#.publicList",
      "kind": "member",
      "title": "&lt;static&gt; publicList",
      "longname": "server.Anime.publicList",
      "name": "publicList",
      "tags": "server.Anime.publicList Anime.publicList publicList",
      "summary": "",
      "description": "The list of Animes mapped with their public informations"
    },
    "server.Anime.html#jsonObject": {
      "id": "server.Anime.html#jsonObject",
      "kind": "member",
      "title": "&lt;private, readonly&gt; jsonObject :JsonObject",
      "longname": "server.Anime#jsonObject",
      "name": "jsonObject",
      "tags": "server.Anime#jsonObject Anime#jsonObject jsonObject",
      "summary": "",
      "description": "The json object of the anime. Used to store the datas in the index.json of the anime."
    },
    "server.Anime.html#name": {
      "id": "server.Anime.html#name",
      "kind": "member",
      "title": "name :string",
      "longname": "server.Anime#name",
      "name": "name",
      "tags": "server.Anime#name Anime#name name",
      "summary": "",
      "description": "The name of the anime"
    },
    "server.Anime.html#thumbnailLink": {
      "id": "server.Anime.html#thumbnailLink",
      "kind": "member",
      "title": "thumbnailLink :string",
      "longname": "server.Anime#thumbnailLink",
      "name": "thumbnailLink",
      "tags": "server.Anime#thumbnailLink Anime#thumbnailLink thumbnailLink",
      "summary": "",
      "description": "The uri of the anime poster"
    },
    "server.Anime.html#_path": {
      "id": "server.Anime.html#_path",
      "kind": "member",
      "title": "&lt;private, readonly&gt; _path :string",
      "longname": "server.Anime#_path",
      "name": "_path",
      "tags": "server.Anime#_path Anime#_path _path",
      "summary": "",
      "description": "The path to the anime's folder"
    },
    "server.Anime.html#episodes": {
      "id": "server.Anime.html#episodes",
      "kind": "member",
      "title": "episodes :Array.&lt;Episode&gt;",
      "longname": "server.Anime#episodes",
      "name": "episodes",
      "tags": "server.Anime#episodes Anime#episodes episodes",
      "summary": "",
      "description": "The list of episodes"
    },
    "server.Anime.html#id": {
      "id": "server.Anime.html#id",
      "kind": "member",
      "title": "&lt;readonly&gt; id :number",
      "longname": "server.Anime#id",
      "name": "id",
      "tags": "server.Anime#id Anime#id id",
      "summary": "",
      "description": "The unique id of the anime"
    },
    "server.Anime.html#path": {
      "id": "server.Anime.html#path",
      "kind": "member",
      "title": "&lt;readonly&gt; path",
      "longname": "server.Anime#path",
      "name": "path",
      "tags": "server.Anime#path Anime#path path",
      "summary": "",
      "description": "Return the path to the anime folder"
    },
    "server.Anime.html#toPublic": {
      "id": "server.Anime.html#toPublic",
      "kind": "function",
      "title": "toPublic() → {PublicAnime}",
      "longname": "server.Anime#toPublic",
      "name": "toPublic",
      "tags": "server.Anime#toPublic Anime#toPublic toPublic",
      "summary": "",
      "description": "Return the public information of the anime (= the informations to give to the client)"
    },
    "server.Anime.html#getEpisodeById": {
      "id": "server.Anime.html#getEpisodeById",
      "kind": "function",
      "title": "getEpisodeById( episodeId ) → {Episode|null}",
      "longname": "server.Anime#getEpisodeById",
      "name": "getEpisodeById",
      "tags": "server.Anime#getEpisodeById Anime#getEpisodeById getEpisodeById",
      "summary": "",
      "description": "Get an anime's Episode by its id"
    },
    "server.Anime.html#updateJson": {
      "id": "server.Anime.html#updateJson",
      "kind": "function",
      "title": "updateJson() → {Promise.&lt;void&gt;}",
      "longname": "server.Anime#updateJson",
      "name": "updateJson",
      "tags": "server.Anime#updateJson Anime#updateJson updateJson",
      "summary": "",
      "description": "Update the json by generating the AnimeConfig and getting the EpisodeConfig of all its episode"
    },
    "server.Anime.html#toAnimeConfig": {
      "id": "server.Anime.html#toAnimeConfig",
      "kind": "function",
      "title": "toAnimeConfig() → {AnimeConfig}",
      "longname": "server.Anime#toAnimeConfig",
      "name": "toAnimeConfig",
      "tags": "server.Anime#toAnimeConfig Anime#toAnimeConfig toAnimeConfig",
      "summary": "",
      "description": "Return the AnimeConfig of the Anime"
    },
    "server.Episode.html": {
      "id": "server.Episode.html",
      "kind": "class",
      "title": "server~Episode",
      "longname": "server.Episode",
      "name": "Episode",
      "tags": "server.Episode Episode",
      "summary": "",
      "description": "Store the datas of an episode",
      "body": ""
    },
    "server.Episode.html#name": {
      "id": "server.Episode.html#name",
      "kind": "member",
      "title": "name :string",
      "longname": "server.Episode#name",
      "name": "name",
      "tags": "server.Episode#name Episode#name name",
      "summary": "",
      "description": "The name of the episode"
    },
    "server.Episode.html#episodeId": {
      "id": "server.Episode.html#episodeId",
      "kind": "member",
      "title": "&lt;readonly&gt; episodeId :number",
      "longname": "server.Episode#episodeId",
      "name": "episodeId",
      "tags": "server.Episode#episodeId Episode#episodeId episodeId",
      "summary": "",
      "description": "The unique id of the episode (define the order between episodes)"
    },
    "server.Episode.html#posterLink": {
      "id": "server.Episode.html#posterLink",
      "kind": "member",
      "title": "posterLink :string",
      "longname": "server.Episode#posterLink",
      "name": "posterLink",
      "tags": "server.Episode#posterLink Episode#posterLink posterLink",
      "summary": "",
      "description": "The uri of the episode poster"
    },
    "server.Episode.html#links": {
      "id": "server.Episode.html#links",
      "kind": "member",
      "title": "links :Array.&lt;string&gt;",
      "longname": "server.Episode#links",
      "name": "links",
      "tags": "server.Episode#links Episode#links links",
      "summary": "",
      "description": "The episode's stream links"
    },
    "server.Episode.html#localLink": {
      "id": "server.Episode.html#localLink",
      "kind": "member",
      "title": "&lt;readonly&gt; localLink :string",
      "longname": "server.Episode#localLink",
      "name": "localLink",
      "tags": "server.Episode#localLink Episode#localLink localLink",
      "summary": "",
      "description": "The local path to episode's file. To set Episode.localLink, see : Episode.setLocalPath"
    },
    "server.Episode.html#anime": {
      "id": "server.Episode.html#anime",
      "kind": "member",
      "title": "&lt;readonly&gt; anime :Anime",
      "longname": "server.Episode#anime",
      "name": "anime",
      "tags": "server.Episode#anime Episode#anime anime",
      "summary": "",
      "description": "Reference to the Anime"
    },
    "server.Episode.html#isLocal": {
      "id": "server.Episode.html#isLocal",
      "kind": "member",
      "title": "isLocal :boolean",
      "longname": "server.Episode#isLocal",
      "name": "isLocal",
      "tags": "server.Episode#isLocal Episode#isLocal isLocal",
      "summary": "",
      "description": "True when $localLink is set"
    },
    "server.Episode.html#hasPoster": {
      "id": "server.Episode.html#hasPoster",
      "kind": "member",
      "title": "hasPoster :boolean",
      "longname": "server.Episode#hasPoster",
      "name": "hasPoster",
      "tags": "server.Episode#hasPoster Episode#hasPoster hasPoster",
      "summary": "",
      "description": "True when $posterLink is set"
    },
    "server.Episode.html#path": {
      "id": "server.Episode.html#path",
      "kind": "member",
      "title": "path :string",
      "longname": "server.Episode#path",
      "name": "path",
      "tags": "server.Episode#path Episode#path path",
      "summary": "",
      "description": "path.join($this.anime.path with : If there is no local file, use the default local path $this.episodeId)` Else use the $local path"
    },
    "server.Episode.html#toPublic": {
      "id": "server.Episode.html#toPublic",
      "kind": "function",
      "title": "toPublic() → {PublicEpisode}",
      "longname": "server.Episode#toPublic",
      "name": "toPublic",
      "tags": "server.Episode#toPublic Episode#toPublic toPublic",
      "summary": "",
      "description": "Return the public information of the episode (= the informations to give to the client)"
    },
    "server.Episode.html#getInfo": {
      "id": "server.Episode.html#getInfo",
      "kind": "function",
      "title": "&lt;async&gt; getInfo( loadYoutubeInfo ) → {Promise.&lt;EpisodeInfo&gt;}",
      "longname": "server.Episode#getInfo",
      "name": "getInfo",
      "tags": "server.Episode#getInfo Episode#getInfo getInfo",
      "summary": "",
      "description": "Get the info of an episode"
    },
    "server.Episode.html#getUrlByPlayer": {
      "id": "server.Episode.html#getUrlByPlayer",
      "kind": "function",
      "title": "getUrlByPlayer( player ) → {string}",
      "longname": "server.Episode#getUrlByPlayer",
      "name": "getUrlByPlayer",
      "tags": "server.Episode#getUrlByPlayer Episode#getUrlByPlayer getUrlByPlayer",
      "summary": "",
      "description": "Get the first url corresponding to the Videoplayer"
    },
    "server.Episode.html#setLocalPath": {
      "id": "server.Episode.html#setLocalPath",
      "kind": "function",
      "title": "setLocalPath( path ) → {Promise.&lt;void&gt;}",
      "longname": "server.Episode#setLocalPath",
      "name": "setLocalPath",
      "tags": "server.Episode#setLocalPath Episode#setLocalPath setLocalPath",
      "summary": "",
      "description": "Set Episode.localLink and update the anime"
    },
    "server.Episode.html#toEpisodeConfig": {
      "id": "server.Episode.html#toEpisodeConfig",
      "kind": "function",
      "title": "toEpisodeConfig() → {EpisodeConfig}",
      "longname": "server.Episode#toEpisodeConfig",
      "name": "toEpisodeConfig",
      "tags": "server.Episode#toEpisodeConfig Episode#toEpisodeConfig toEpisodeConfig",
      "summary": "",
      "description": "Return the EpisodeConfig of the Episode"
    },
    "server.html": {
      "id": "server.html",
      "kind": "namespace",
      "title": "server",
      "longname": "server",
      "name": "server",
      "tags": "server",
      "summary": "",
      "description": "",
      "body": ""
    },
    "server.html#.createLogFile": {
      "id": "server.html#.createLogFile",
      "kind": "function",
      "title": "&lt;static&gt; createLogFile()",
      "longname": "server.createLogFile",
      "name": "createLogFile",
      "tags": "server.createLogFile createLogFile",
      "summary": "",
      "description": "Create a new log file (with an unique name) in the log folder"
    },
    "server.https.html": {
      "id": "server.https.html",
      "kind": "namespace",
      "title": "server.https",
      "longname": "server.https",
      "name": "https",
      "tags": "server.https https",
      "summary": "",
      "description": "",
      "body": ""
    },
    "server.https.html#.start": {
      "id": "server.https.html#.start",
      "kind": "function",
      "title": "&lt;protected, static&gt; start( config )",
      "longname": "server.https.start",
      "name": "start",
      "tags": "server.https.start https.start start",
      "summary": "",
      "description": "Start the server Server links : [USE] * - Used to do consoleGroup [GET] /new/anime? - Add a new anime Param : name - The name of the anime Param : thumbnailLink - The path to the thumbnail Send : {\"id\":Anime Id} [GET] /new/episode? - Add a new episode to an anime Send : {\"id\":Anime Id} [GET] /get/list - Get the anime list Send : Anime.publicList [GET] /get/episode/info? - Get the info of an episode Param : animeId - The id of the anime Param : episodeId - The id of the episode in the anime Send : EpisodeInfo [GET] /get/episode/download? - Download an episode Param : animeId Param : episodeId Param : videoPlayerId Param : format Param : url Send : {\"progress\":DownloadEpisode.progress} [GET] /get/list/download - Get download list Send: { \"current\": { \"progress\":DownloadEpisode.progress \"episode\": Episode's name }, \"list\": [ Episodes's name ], \"error\": [ { \"episode\": Episode's name \"error\": Error } ] } [GET] / - Index.html [GET] /js/* - Folder js [GET] /html/* - Folder html [GET] /css/* - Folder css [GET] /fonts/* - Folder fonts [GET] /asset/ico/* - Folder assets ico [GET] /episode/:animeId/:episodeId - Get a local episode in folder episode Param : animeId - The id of the anime Param : episodeId - The id of the episode in the anime [GET] /asset/thumbnail/:text.png - Generate an image or return a generated image Param : text - The text to show on the image Param : width - The image width Param : height - The image height Param : textSize - The text size Param : backgroundColor - The background color Param : textColor - The text color"
    },
    "server.global.html": {
      "id": "server.global.html",
      "kind": "namespace",
      "title": "server.global",
      "longname": "server.global",
      "name": "global",
      "tags": "server.global global",
      "summary": "",
      "description": "",
      "body": ""
    },
    "server.global.html#.__root": {
      "id": "server.global.html#.__root",
      "kind": "member",
      "title": "&lt;static&gt; __root :string",
      "longname": "server.global.__root",
      "name": "__root",
      "tags": "server.global.__root global.__root __root",
      "summary": "",
      "description": "The folder of the node.js projet"
    },
    "server.global.html#.__logFile": {
      "id": "server.global.html#.__logFile",
      "kind": "member",
      "title": "&lt;static&gt; __logFile :string",
      "longname": "server.global.__logFile",
      "name": "__logFile",
      "tags": "server.global.__logFile global.__logFile __logFile",
      "summary": "",
      "description": "The path to the logfile"
    },
    "server.global.html#.__tempFolder": {
      "id": "server.global.html#.__tempFolder",
      "kind": "member",
      "title": "&lt;static&gt; __tempFolder :string",
      "longname": "server.global.__tempFolder",
      "name": "__tempFolder",
      "tags": "server.global.__tempFolder global.__tempFolder __tempFolder",
      "summary": "",
      "description": "The temp folder of the node.js projet"
    },
    "server.global.html#.GUIDGenerator": {
      "id": "server.global.html#.GUIDGenerator",
      "kind": "function",
      "title": "&lt;static&gt; GUIDGenerator() → {string}",
      "longname": "server.global.GUIDGenerator",
      "name": "GUIDGenerator",
      "tags": "server.global.GUIDGenerator global.GUIDGenerator GUIDGenerator",
      "summary": "",
      "description": ""
    },
    "server.global.html#.nameof": {
      "id": "server.global.html#.nameof",
      "kind": "function",
      "title": "&lt;static&gt; nameof( varObject )",
      "longname": "server.global.nameof",
      "name": "nameof",
      "tags": "server.global.nameof global.nameof nameof",
      "summary": "",
      "description": ""
    },
    "server.global.html#.overrideLine": {
      "id": "server.global.html#.overrideLine",
      "kind": "function",
      "title": "&lt;static&gt; overrideLine( message, newLine )",
      "longname": "server.global.overrideLine",
      "name": "overrideLine",
      "tags": "server.global.overrideLine global.overrideLine overrideLine",
      "summary": "",
      "description": "Override last line in the logfile"
    },
    "server.global.html#.writeLog": {
      "id": "server.global.html#.writeLog",
      "kind": "function",
      "title": "&lt;static&gt; writeLog( message, newLine )",
      "longname": "server.global.writeLog",
      "name": "writeLog",
      "tags": "server.global.writeLog global.writeLog writeLog",
      "summary": "",
      "description": "Write a line in the logfile"
    },
    "server.global.html#.toFileName": {
      "id": "server.global.html#.toFileName",
      "kind": "function",
      "title": "&lt;static&gt; toFileName( fileName, replacer )",
      "longname": "server.global.toFileName",
      "name": "toFileName",
      "tags": "server.global.toFileName global.toFileName toFileName",
      "summary": "",
      "description": ""
    },
    "server.image.html": {
      "id": "server.image.html",
      "kind": "namespace",
      "title": "server.image",
      "longname": "server.image",
      "name": "image",
      "tags": "server.image image",
      "summary": "",
      "description": "",
      "body": ""
    },
    "server.image.html#.exports.getThumbail": {
      "id": "server.image.html#.exports.getThumbail",
      "kind": "function",
      "title": "&lt;static&gt; exports.getThumbail( text [, option ] ) → {Promise.&lt;string&gt;}",
      "longname": "server.image.exports.getThumbail",
      "name": "exports.getThumbail",
      "tags": "server.image.exports.getThumbail image.exports.getThumbail exports.getThumbail getThumbail",
      "summary": "",
      "description": ""
    },
    "server.image.html#.ThumbailOption": {
      "id": "server.image.html#.ThumbailOption",
      "kind": "typedef",
      "title": "ThumbailOption",
      "longname": "server.image.ThumbailOption",
      "name": "ThumbailOption",
      "tags": "server.image.ThumbailOption image.ThumbailOption ThumbailOption",
      "summary": "",
      "description": ""
    },
    "server.data.html": {
      "id": "server.data.html",
      "kind": "namespace",
      "title": "server.data",
      "longname": "server.data",
      "name": "data",
      "tags": "server.data data",
      "summary": "",
      "description": "",
      "body": ""
    },
    "server.data.config.html": {
      "id": "server.data.config.html",
      "kind": "namespace",
      "title": "server.data.config",
      "longname": "server.data.config",
      "name": "config",
      "tags": "server.data.config data.config config",
      "summary": "",
      "description": "",
      "body": ""
    },
    "server.data.config.html#.VideoPlayerConfig": {
      "id": "server.data.config.html#.VideoPlayerConfig",
      "kind": "typedef",
      "title": "VideoPlayerConfig",
      "longname": "server.data.config.VideoPlayerConfig",
      "name": "VideoPlayerConfig",
      "tags": "server.data.config.VideoPlayerConfig data.config.VideoPlayerConfig config.VideoPlayerConfig VideoPlayerConfig",
      "summary": "",
      "description": "The config of a videoplayer"
    },
    "server.data.config.html#.AnimeConfig": {
      "id": "server.data.config.html#.AnimeConfig",
      "kind": "typedef",
      "title": "AnimeConfig",
      "longname": "server.data.config.AnimeConfig",
      "name": "AnimeConfig",
      "tags": "server.data.config.AnimeConfig data.config.AnimeConfig config.AnimeConfig AnimeConfig",
      "summary": "",
      "description": "The config of and anime"
    },
    "server.data.config.html#.Config": {
      "id": "server.data.config.html#.Config",
      "kind": "typedef",
      "title": "Config",
      "longname": "server.data.config.Config",
      "name": "Config",
      "tags": "server.data.config.Config data.config.Config config.Config Config",
      "summary": "",
      "description": ""
    },
    "server.data.config.html#.EpisodeConfig": {
      "id": "server.data.config.html#.EpisodeConfig",
      "kind": "typedef",
      "title": "EpisodeConfig",
      "longname": "server.data.config.EpisodeConfig",
      "name": "EpisodeConfig",
      "tags": "server.data.config.EpisodeConfig data.config.EpisodeConfig config.EpisodeConfig EpisodeConfig",
      "summary": "",
      "description": "The config of an episode"
    },
    "server.data.public.html": {
      "id": "server.data.public.html",
      "kind": "namespace",
      "title": "server.data.public",
      "longname": "server.data.public",
      "name": "public",
      "tags": "server.data.public data.public public",
      "summary": "",
      "description": "",
      "body": ""
    },
    "server.data.public.html#.PublicVideoPlayer": {
      "id": "server.data.public.html#.PublicVideoPlayer",
      "kind": "typedef",
      "title": "PublicVideoPlayer",
      "longname": "server.data.public.PublicVideoPlayer",
      "name": "PublicVideoPlayer",
      "tags": "server.data.public.PublicVideoPlayer data.public.PublicVideoPlayer public.PublicVideoPlayer PublicVideoPlayer",
      "summary": "",
      "description": "The public informations of a video player"
    },
    "server.data.public.html#.PlayerInfo": {
      "id": "server.data.public.html#.PlayerInfo",
      "kind": "typedef",
      "title": "PlayerInfo",
      "longname": "server.data.public.PlayerInfo",
      "name": "PlayerInfo",
      "tags": "server.data.public.PlayerInfo data.public.PlayerInfo public.PlayerInfo PlayerInfo",
      "summary": "",
      "description": "The info of an URL"
    },
    "server.data.public.html#.PublicAnime": {
      "id": "server.data.public.html#.PublicAnime",
      "kind": "typedef",
      "title": "PublicAnime",
      "longname": "server.data.public.PublicAnime",
      "name": "PublicAnime",
      "tags": "server.data.public.PublicAnime data.public.PublicAnime public.PublicAnime PublicAnime",
      "summary": "",
      "description": "The public informations of an anime"
    },
    "server.data.public.html#.PublicEpisode": {
      "id": "server.data.public.html#.PublicEpisode",
      "kind": "typedef",
      "title": "PublicEpisode",
      "longname": "server.data.public.PublicEpisode",
      "name": "PublicEpisode",
      "tags": "server.data.public.PublicEpisode data.public.PublicEpisode public.PublicEpisode PublicEpisode",
      "summary": "",
      "description": "The public informations of an episode"
    },
    "server.data.public.html#.EpisodeInfo": {
      "id": "server.data.public.html#.EpisodeInfo",
      "kind": "typedef",
      "title": "EpisodeInfo",
      "longname": "server.data.public.EpisodeInfo",
      "name": "EpisodeInfo",
      "tags": "server.data.public.EpisodeInfo data.public.EpisodeInfo public.EpisodeInfo EpisodeInfo",
      "summary": "",
      "description": "The information of an episode (urls are mapped with PlayerInfo)"
    }
  }
};