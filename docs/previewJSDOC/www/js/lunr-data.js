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
        "JsonObject.html": [
          "class",
          "file",
          "json",
          "jsonobject",
          "load",
          "save"
        ],
        "JsonObject.html#loadSync": [
          "func",
          "function",
          "jsonobject#loadsync",
          "loadsync"
        ],
        "JsonObject.html#load": [
          "function",
          "jsonobject#load",
          "load"
        ],
        "JsonObject.html#save": [
          "function",
          "jsonobject#sav",
          "promise.&lt;void&gt",
          "save"
        ],
        "DownloadEpisode.html": [
          "class",
          "download",
          "downloadepisod",
          "ensur",
          "episod",
          "event",
          "handl",
          "max",
          "on",
          "there'",
          "us",
          "videoplayer.download"
        ],
        "DownloadEpisode.html#.list": [
          "array.&lt;downloadepisode&gt",
          "downloadepisode.list",
          "list",
          "lt;static&gt",
          "member"
        ],
        "DownloadEpisode.html#episode": [
          "download",
          "downloadepisode#episod",
          "episod",
          "lt;readonly&gt",
          "member",
          "want"
        ],
        "DownloadEpisode.html#id": [
          "downloadepisod",
          "downloadepisode#id",
          "id",
          "instanc",
          "lt;readonly&gt",
          "member",
          "number",
          "uniqu"
        ],
        "DownloadEpisode.html#player": [
          "download",
          "downloadepisode#play",
          "epsod",
          "lt;privat",
          "member",
          "object",
          "player",
          "readonly&gt",
          "us",
          "video"
        ],
        "DownloadEpisode.html#isReady": [
          "boolean",
          "done",
          "download",
          "downloadepisode#isreadi",
          "isreadi",
          "json",
          "lt;privat",
          "member",
          "readonly&gt",
          "save"
        ],
        "DownloadEpisode.html#isDownloading": [
          "boolean",
          "download",
          "downloadepisode#isdownload",
          "isdownload",
          "lt;readonly&gt",
          "member",
          "ongo"
        ],
        "DownloadEpisode.html#progress": [
          "download",
          "downloadepisode#progress",
          "lt;readonly&gt",
          "member",
          "number",
          "progress"
        ],
        "DownloadEpisode.html#_setLocalPath": [
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
          "set"
        ],
        "DownloadEpisode.html#download": [
          "download",
          "downloadepisode#download",
          "format",
          "function",
          "launch",
          "url"
        ],
        "DownloadEpisode.html#_setEvents": [
          "_setev",
          "downloadepisode#_setev",
          "emitt",
          "event",
          "function",
          "lt;private&gt",
          "set"
        ],
        "DownloadEpisode.html#.getFromEpisode": [
          "downloadepisode.getfromepisod",
          "episod",
          "function",
          "getfromepisod",
          "lt;static&gt"
        ],
        "VideoPlayer.html": [
          "class",
          "download",
          "us",
          "video",
          "videoplay"
        ],
        "VideoPlayer.html#.list": [
          "array.&lt;videoplayer&gt",
          "list",
          "lt;static",
          "member",
          "readonly&gt",
          "videoplay",
          "videoplayer.list"
        ],
        "VideoPlayer.html#name": [
          "lt;readonly&gt",
          "member",
          "name",
          "string",
          "videoplay",
          "videoplayer#nam"
        ],
        "VideoPlayer.html#isNatif": [
          "avail",
          "boolean",
          "edit",
          "isnatif",
          "lt;readonly&gt",
          "member",
          "true",
          "videoplay",
          "videoplayer#isnatif",
          "wront"
        ],
        "VideoPlayer.html#prefix": [
          "array.&lt;string&gt",
          "match",
          "member",
          "prefix",
          "prefix(",
          "url",
          "videoplayer#prefix"
        ],
        "VideoPlayer.html#downloadable": [
          "boolean",
          "download",
          "member",
          "server",
          "tell",
          "videoplayer#download"
        ],
        "VideoPlayer.html#autoDownload": [
          "autodownload",
          "boolean",
          "download",
          "episode.link",
          "member",
          "tell",
          "url",
          "us",
          "videoplayer#autodownload"
        ],
        "VideoPlayer.html#id": [
          "id",
          "lt;readonly&gt",
          "member",
          "uniqu",
          "videoplay",
          "videoplayer#id"
        ],
        "VideoPlayer.html#toPublic": [
          "client",
          "function",
          "give",
          "inform",
          "public",
          "publicvideoplay",
          "return",
          "topubl",
          "videoplay",
          "videoplayer#topubl"
        ],
        "VideoPlayer.html#_dispatchOnComplete": [
          "_dispatchoncomplet",
          "complet",
          "emitt",
          "event",
          "fire",
          "function",
          "lt;protected&gt",
          "recdownloaddata",
          "videoplayer#_dispatchoncomplet"
        ],
        "VideoPlayer.html#_dispatchOnProgress": [
          "_dispatchonprogress",
          "emitt",
          "event",
          "fire",
          "function",
          "lt;protected&gt",
          "progress",
          "recdownloaddata",
          "videoplayer#_dispatchonprogress"
        ],
        "VideoPlayer.html#_dispatchOnError": [
          "_dispatchonerror",
          "emitt",
          "err",
          "error",
          "event",
          "fire",
          "function",
          "lt;protected&gt",
          "videoplayer#_dispatchonerror"
        ],
        "VideoPlayer.html#download": [
          "async",
          "download",
          "downloadurl",
          "eventemitt",
          "filenam",
          "format",
          "function",
          "given",
          "link",
          "us",
          "video",
          "videoplayer#download"
        ],
        "VideoPlayer.html#hasPrefix": [
          "boolean",
          "compar",
          "function",
          "hasprefix",
          "list",
          "match",
          "prefix",
          "return",
          "true",
          "url",
          "videoplayer#hasprefix"
        ],
        "VideoPlayer.html#.getPlayer": [
          "first",
          "function",
          "getplay",
          "lt;static&gt",
          "match",
          "prefix",
          "return",
          "url",
          "videoplay",
          "videoplayer.getplay"
        ],
        "VideoPlayer.html#.getVideoPlayerById": [
          "corrispond",
          "function",
          "getvideoplayerbyid",
          "id",
          "lt;static&gt",
          "player",
          "return",
          "video",
          "videoplay",
          "videoplayer.getvideoplayerbyid"
        ],
        "YoutubePlayer.html": [
          "class",
          "download",
          "info",
          "us",
          "video",
          "youtub",
          "youtubeplay"
        ],
        "YoutubePlayer.html#name": [
          "lt;readonly&gt",
          "member",
          "name",
          "string",
          "videoplay",
          "youtubeplayer#nam"
        ],
        "YoutubePlayer.html#isNatif": [
          "avail",
          "boolean",
          "edit",
          "isnatif",
          "lt;readonly&gt",
          "member",
          "true",
          "videoplay",
          "wront",
          "youtubeplayer#isnatif"
        ],
        "YoutubePlayer.html#prefix": [
          "array.&lt;string&gt",
          "match",
          "member",
          "prefix",
          "prefix(",
          "url",
          "youtubeplayer#prefix"
        ],
        "YoutubePlayer.html#downloadable": [
          "boolean",
          "download",
          "member",
          "server",
          "tell",
          "youtubeplayer#download"
        ],
        "YoutubePlayer.html#autoDownload": [
          "autodownload",
          "boolean",
          "download",
          "episode.link",
          "member",
          "tell",
          "url",
          "us",
          "youtubeplayer#autodownload"
        ],
        "YoutubePlayer.html#id": [
          "id",
          "lt;readonly&gt",
          "member",
          "uniqu",
          "videoplay",
          "youtubeplayer#id"
        ],
        "YoutubePlayer.html#.instance": [
          "class",
          "instanc",
          "lt;static",
          "member",
          "readonly&gt",
          "uniqu",
          "youtubeplayer.inst"
        ],
        "YoutubePlayer.html#toPublic": [
          "client",
          "function",
          "give",
          "inform",
          "public",
          "publicvideoplay",
          "return",
          "topubl",
          "videoplay",
          "youtubeplayer#topubl"
        ],
        "YoutubePlayer.html#_dispatchOnComplete": [
          "_dispatchoncomplet",
          "complet",
          "emitt",
          "event",
          "fire",
          "function",
          "lt;protected&gt",
          "recdownloaddata",
          "youtubeplayer#_dispatchoncomplet"
        ],
        "YoutubePlayer.html#_dispatchOnProgress": [
          "_dispatchonprogress",
          "emitt",
          "event",
          "fire",
          "function",
          "lt;protected&gt",
          "progress",
          "recdownloaddata",
          "youtubeplayer#_dispatchonprogress"
        ],
        "YoutubePlayer.html#_dispatchOnError": [
          "_dispatchonerror",
          "emitt",
          "err",
          "error",
          "event",
          "fire",
          "function",
          "lt;protected&gt",
          "youtubeplayer#_dispatchonerror"
        ],
        "YoutubePlayer.html#hasPrefix": [
          "boolean",
          "compar",
          "function",
          "hasprefix",
          "list",
          "match",
          "prefix",
          "return",
          "true",
          "url",
          "youtubeplayer#hasprefix"
        ],
        "YoutubePlayer.html#download": [
          "async",
          "download",
          "downloadurl",
          "eventemitt",
          "format",
          "function",
          "localfilewithoutextens",
          "video",
          "youtub",
          "youtubeplayer#download"
        ],
        "YoutubePlayer.html#getInfo": [
          "fetch",
          "function",
          "getinfo",
          "inform",
          "promise.&lt;ytdl.videoinfo&gt",
          "url",
          "video",
          "youtub",
          "youtubeplayer#getinfo"
        ],
        "Anime.html": [
          "anim",
          "class",
          "data",
          "index.json",
          "store",
          "updat"
        ],
        "Anime.html#.list": [
          "anim",
          "anime.list",
          "array.&lt;anime&gt",
          "list",
          "lt;static",
          "member",
          "readonly&gt"
        ],
        "Anime.html#.publicList": [
          "anim",
          "anime.publiclist",
          "inform",
          "list",
          "lt;static&gt",
          "map",
          "member",
          "public",
          "publiclist"
        ],
        "Anime.html#jsonObject": [
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
          "store",
          "us"
        ],
        "Anime.html#name": [
          "anim",
          "anime#nam",
          "member",
          "name",
          "string"
        ],
        "Anime.html#thumbnailLink": [
          "anim",
          "anime#thumbnaillink",
          "member",
          "poster",
          "string",
          "thumbnaillink",
          "uri"
        ],
        "Anime.html#_path": [
          "_path",
          "anime#_path",
          "anime'",
          "folder",
          "lt;privat",
          "member",
          "path",
          "readonly&gt",
          "string"
        ],
        "Anime.html#episodes": [
          "anime#episod",
          "array.&lt;episode&gt",
          "episod",
          "list",
          "member"
        ],
        "Anime.html#id": [
          "anim",
          "anime#id",
          "id",
          "lt;readonly&gt",
          "member",
          "number",
          "uniqu"
        ],
        "Anime.html#path": [
          "anim",
          "anime#path",
          "folder",
          "lt;readonly&gt",
          "member",
          "path",
          "return"
        ],
        "Anime.html#toPublic": [
          "anim",
          "anime#topubl",
          "client",
          "function",
          "give",
          "inform",
          "public",
          "publicanim",
          "return",
          "topubl"
        ],
        "Anime.html#getEpisodeById": [
          "anime#getepisodebyid",
          "anime'",
          "episod",
          "episodeid",
          "episode|nul",
          "function",
          "getepisodebyid",
          "id"
        ],
        "Anime.html#updateJson": [
          "anime#updatejson",
          "animeconfig",
          "episod",
          "episodeconfig",
          "function",
          "gener",
          "get",
          "json",
          "promise.&lt;void&gt",
          "updat",
          "updatejson"
        ],
        "Anime.html#toAnimeConfig": [
          "anim",
          "anime#toanimeconfig",
          "animeconfig",
          "function",
          "return",
          "toanimeconfig"
        ],
        "Episode.html": [
          "class",
          "data",
          "episod",
          "store"
        ],
        "Episode.html#name": [
          "episod",
          "episode#nam",
          "member",
          "name",
          "string"
        ],
        "Episode.html#episodeId": [
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
          "uniqu"
        ],
        "Episode.html#posterLink": [
          "episod",
          "episode#posterlink",
          "member",
          "poster",
          "posterlink",
          "string",
          "uri"
        ],
        "Episode.html#links": [
          "array.&lt;string&gt",
          "episode#link",
          "episode'",
          "link",
          "member",
          "stream"
        ],
        "Episode.html#localLink": [
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
          "set",
          "string"
        ],
        "Episode.html#anime": [
          "anim",
          "episode#anim",
          "lt;readonly&gt",
          "member",
          "refer"
        ],
        "Episode.html#isLocal": [
          "boolean",
          "episode#isloc",
          "isloc",
          "locallink",
          "member",
          "set",
          "true"
        ],
        "Episode.html#hasPoster": [
          "boolean",
          "episode#haspost",
          "haspost",
          "member",
          "posterlink",
          "set",
          "true"
        ],
        "Episode.html#path": [
          "default",
          "episode#path",
          "file",
          "local",
          "member",
          "path",
          "path.join($this.anime.path",
          "return",
          "string",
          "this.episodeid"
        ],
        "Episode.html#toPublic": [
          "client",
          "episod",
          "episode#topubl",
          "function",
          "give",
          "inform",
          "public",
          "publicepisod",
          "return",
          "topubl"
        ],
        "Episode.html#getInfo": [
          "episod",
          "episode#getinfo",
          "function",
          "getinfo",
          "info",
          "loadyoutubeinfo",
          "lt;async&gt",
          "promise.&lt;episodeinfo&gt"
        ],
        "Episode.html#getUrlByPlayer": [
          "correspond",
          "episode#geturlbyplay",
          "first",
          "function",
          "geturlbyplay",
          "player",
          "string",
          "url",
          "videoplay"
        ],
        "Episode.html#setLocalPath": [
          "anim",
          "episode#setlocalpath",
          "episode.locallink",
          "function",
          "path",
          "promise.&lt;void&gt",
          "set",
          "setlocalpath",
          "updat"
        ],
        "Episode.html#toEpisodeConfig": [
          "episod",
          "episode#toepisodeconfig",
          "episodeconfig",
          "function",
          "return",
          "toepisodeconfig"
        ]
      },
      "length": 79
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
                          "DownloadEpisode.html": {
                            "ref": "DownloadEpisode.html",
                            "tf": 4.545454545454546
                          },
                          "DownloadEpisode.html#episode": {
                            "ref": "DownloadEpisode.html#episode",
                            "tf": 16.666666666666664
                          },
                          "DownloadEpisode.html#player": {
                            "ref": "DownloadEpisode.html#player",
                            "tf": 10
                          },
                          "DownloadEpisode.html#isReady": {
                            "ref": "DownloadEpisode.html#isReady",
                            "tf": 12.5
                          },
                          "DownloadEpisode.html#isDownloading": {
                            "ref": "DownloadEpisode.html#isDownloading",
                            "tf": 25
                          },
                          "DownloadEpisode.html#progress": {
                            "ref": "DownloadEpisode.html#progress",
                            "tf": 25
                          },
                          "DownloadEpisode.html#download": {
                            "ref": "DownloadEpisode.html#download",
                            "tf": 708.3333333333334
                          },
                          "VideoPlayer.html": {
                            "ref": "VideoPlayer.html",
                            "tf": 12.5
                          },
                          "VideoPlayer.html#downloadable": {
                            "ref": "VideoPlayer.html#downloadable",
                            "tf": 716.6666666666666
                          },
                          "VideoPlayer.html#autoDownload": {
                            "ref": "VideoPlayer.html#autoDownload",
                            "tf": 8.333333333333332
                          },
                          "VideoPlayer.html#download": {
                            "ref": "VideoPlayer.html#download",
                            "tf": 678.3333333333334
                          },
                          "YoutubePlayer.html": {
                            "ref": "YoutubePlayer.html",
                            "tf": 7.142857142857142
                          },
                          "YoutubePlayer.html#downloadable": {
                            "ref": "YoutubePlayer.html#downloadable",
                            "tf": 716.6666666666666
                          },
                          "YoutubePlayer.html#autoDownload": {
                            "ref": "YoutubePlayer.html#autoDownload",
                            "tf": 8.333333333333332
                          },
                          "YoutubePlayer.html#download": {
                            "ref": "YoutubePlayer.html#download",
                            "tf": 682.5
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
                                      "DownloadEpisode.html": {
                                        "ref": "DownloadEpisode.html",
                                        "tf": 1900
                                      },
                                      "DownloadEpisode.html#id": {
                                        "ref": "DownloadEpisode.html#id",
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
                                                  "DownloadEpisode.html#.list": {
                                                    "ref": "DownloadEpisode.html#.list",
                                                    "tf": 1150
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
                                                                    "DownloadEpisode.html#.getFromEpisode": {
                                                                      "ref": "DownloadEpisode.html#.getFromEpisode",
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
                                                      "DownloadEpisode.html#episode": {
                                                        "ref": "DownloadEpisode.html#episode",
                                                        "tf": 1150
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
                                              "DownloadEpisode.html#id": {
                                                "ref": "DownloadEpisode.html#id",
                                                "tf": 1150
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
                                                        "DownloadEpisode.html#isReady": {
                                                          "ref": "DownloadEpisode.html#isReady",
                                                          "tf": 1150
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
                                                              "DownloadEpisode.html#isDownloading": {
                                                                "ref": "DownloadEpisode.html#isDownloading",
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
                                        },
                                        "p": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "y": {
                                                "docs": {
                                                  "DownloadEpisode.html#player": {
                                                    "ref": "DownloadEpisode.html#player",
                                                    "tf": 1150
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
                                                          "DownloadEpisode.html#progress": {
                                                            "ref": "DownloadEpisode.html#progress",
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
                                                                    "DownloadEpisode.html#_setLocalPath": {
                                                                      "ref": "DownloadEpisode.html#_setLocalPath",
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
                                                },
                                                "e": {
                                                  "docs": {},
                                                  "v": {
                                                    "docs": {
                                                      "DownloadEpisode.html#_setEvents": {
                                                        "ref": "DownloadEpisode.html#_setEvents",
                                                        "tf": 1150
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
                                                          "DownloadEpisode.html#download": {
                                                            "ref": "DownloadEpisode.html#download",
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
                                "VideoPlayer.html#download": {
                                  "ref": "VideoPlayer.html#download",
                                  "tf": 20
                                },
                                "YoutubePlayer.html#download": {
                                  "ref": "YoutubePlayer.html#download",
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
                  "DownloadEpisode.html#isReady": {
                    "ref": "DownloadEpisode.html#isReady",
                    "tf": 12.5
                  },
                  "DownloadEpisode.html#_setLocalPath": {
                    "ref": "DownloadEpisode.html#_setLocalPath",
                    "tf": 7.142857142857142
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
                  "Anime.html": {
                    "ref": "Anime.html",
                    "tf": 8.333333333333332
                  },
                  "Anime.html#jsonObject": {
                    "ref": "Anime.html#jsonObject",
                    "tf": 6.25
                  },
                  "Episode.html": {
                    "ref": "Episode.html",
                    "tf": 16.666666666666664
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
                "n": {
                  "docs": {
                    "Episode.html#episodeId": {
                      "ref": "Episode.html#episodeId",
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
                        "Episode.html#path": {
                          "ref": "Episode.html#path",
                          "tf": 4.545454545454546
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
                    "DownloadEpisode.html": {
                      "ref": "DownloadEpisode.html",
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
                            "VideoPlayer.html#hasPrefix": {
                              "ref": "VideoPlayer.html#hasPrefix",
                              "tf": 683.3333333333334
                            },
                            "YoutubePlayer.html#hasPrefix": {
                              "ref": "YoutubePlayer.html#hasPrefix",
                              "tf": 683.3333333333334
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
                        "Episode.html#hasPoster": {
                          "ref": "Episode.html#hasPoster",
                          "tf": 700
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
                              "Anime.html": {
                                "ref": "Anime.html",
                                "tf": 8.333333333333332
                              },
                              "Anime.html#jsonObject": {
                                "ref": "Anime.html#jsonObject",
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
                        "DownloadEpisode.html#id": {
                          "ref": "DownloadEpisode.html#id",
                          "tf": 12.5
                        },
                        "YoutubePlayer.html#.instance": {
                          "ref": "YoutubePlayer.html#.instance",
                          "tf": 700
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
                  "YoutubePlayer.html": {
                    "ref": "YoutubePlayer.html",
                    "tf": 7.142857142857142
                  },
                  "Episode.html#getInfo": {
                    "ref": "Episode.html#getInfo",
                    "tf": 25
                  }
                },
                "r": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "VideoPlayer.html#toPublic": {
                        "ref": "VideoPlayer.html#toPublic",
                        "tf": 14.285714285714285
                      },
                      "YoutubePlayer.html#toPublic": {
                        "ref": "YoutubePlayer.html#toPublic",
                        "tf": 14.285714285714285
                      },
                      "YoutubePlayer.html#getInfo": {
                        "ref": "YoutubePlayer.html#getInfo",
                        "tf": 12.5
                      },
                      "Anime.html#.publicList": {
                        "ref": "Anime.html#.publicList",
                        "tf": 10
                      },
                      "Anime.html#toPublic": {
                        "ref": "Anime.html#toPublic",
                        "tf": 14.285714285714285
                      },
                      "Episode.html#toPublic": {
                        "ref": "Episode.html#toPublic",
                        "tf": 14.285714285714285
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "DownloadEpisode.html#id": {
                "ref": "DownloadEpisode.html#id",
                "tf": 695.8333333333334
              },
              "VideoPlayer.html#id": {
                "ref": "VideoPlayer.html#id",
                "tf": 716.6666666666666
              },
              "VideoPlayer.html#.getVideoPlayerById": {
                "ref": "VideoPlayer.html#.getVideoPlayerById",
                "tf": 25
              },
              "YoutubePlayer.html#id": {
                "ref": "YoutubePlayer.html#id",
                "tf": 716.6666666666666
              },
              "Anime.html#id": {
                "ref": "Anime.html#id",
                "tf": 700
              },
              "Anime.html#getEpisodeById": {
                "ref": "Anime.html#getEpisodeById",
                "tf": 16.666666666666664
              },
              "Episode.html#episodeId": {
                "ref": "Episode.html#episodeId",
                "tf": 7.142857142857142
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
                        "DownloadEpisode.html#isReady": {
                          "ref": "DownloadEpisode.html#isReady",
                          "tf": 675
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
                              "DownloadEpisode.html#isDownloading": {
                                "ref": "DownloadEpisode.html#isDownloading",
                                "tf": 683.3333333333334
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
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "f": {
                      "docs": {
                        "VideoPlayer.html#isNatif": {
                          "ref": "VideoPlayer.html#isNatif",
                          "tf": 683.3333333333334
                        },
                        "YoutubePlayer.html#isNatif": {
                          "ref": "YoutubePlayer.html#isNatif",
                          "tf": 683.3333333333334
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
                    "Episode.html#isLocal": {
                      "ref": "Episode.html#isLocal",
                      "tf": 700
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
                "DownloadEpisode.html#_setLocalPath": {
                  "ref": "DownloadEpisode.html#_setLocalPath",
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
                      "DownloadEpisode.html#_setLocalPath": {
                        "ref": "DownloadEpisode.html#_setLocalPath",
                        "tf": 7.142857142857142
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
                                "DownloadEpisode.html#player": {
                                  "ref": "DownloadEpisode.html#player",
                                  "tf": 25
                                },
                                "DownloadEpisode.html#isReady": {
                                  "ref": "DownloadEpisode.html#isReady",
                                  "tf": 25
                                },
                                "VideoPlayer.html#.list": {
                                  "ref": "VideoPlayer.html#.list",
                                  "tf": 25
                                },
                                "YoutubePlayer.html#.instance": {
                                  "ref": "YoutubePlayer.html#.instance",
                                  "tf": 33.33333333333333
                                },
                                "Anime.html#.list": {
                                  "ref": "Anime.html#.list",
                                  "tf": 25
                                },
                                "Anime.html#jsonObject": {
                                  "ref": "Anime.html#jsonObject",
                                  "tf": 25
                                },
                                "Anime.html#_path": {
                                  "ref": "Anime.html#_path",
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
                    "DownloadEpisode.html#_setLocalPath": {
                      "ref": "DownloadEpisode.html#_setLocalPath",
                      "tf": 7.142857142857142
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
                      "VideoPlayer.html#toPublic": {
                        "ref": "VideoPlayer.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "VideoPlayer.html#hasPrefix": {
                        "ref": "VideoPlayer.html#hasPrefix",
                        "tf": 5
                      },
                      "VideoPlayer.html#.getPlayer": {
                        "ref": "VideoPlayer.html#.getPlayer",
                        "tf": 8.333333333333332
                      },
                      "VideoPlayer.html#.getVideoPlayerById": {
                        "ref": "VideoPlayer.html#.getVideoPlayerById",
                        "tf": 12.5
                      },
                      "YoutubePlayer.html#toPublic": {
                        "ref": "YoutubePlayer.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "YoutubePlayer.html#hasPrefix": {
                        "ref": "YoutubePlayer.html#hasPrefix",
                        "tf": 5
                      },
                      "Anime.html#path": {
                        "ref": "Anime.html#path",
                        "tf": 12.5
                      },
                      "Anime.html#toPublic": {
                        "ref": "Anime.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "Anime.html#toAnimeConfig": {
                        "ref": "Anime.html#toAnimeConfig",
                        "tf": 16.666666666666664
                      },
                      "Episode.html#path": {
                        "ref": "Episode.html#path",
                        "tf": 9.090909090909092
                      },
                      "Episode.html#toPublic": {
                        "ref": "Episode.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "Episode.html#toEpisodeConfig": {
                        "ref": "Episode.html#toEpisodeConfig",
                        "tf": 16.666666666666664
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
                                        "VideoPlayer.html#_dispatchOnComplete": {
                                          "ref": "VideoPlayer.html#_dispatchOnComplete",
                                          "tf": 25
                                        },
                                        "VideoPlayer.html#_dispatchOnProgress": {
                                          "ref": "VideoPlayer.html#_dispatchOnProgress",
                                          "tf": 25
                                        },
                                        "YoutubePlayer.html#_dispatchOnComplete": {
                                          "ref": "YoutubePlayer.html#_dispatchOnComplete",
                                          "tf": 25
                                        },
                                        "YoutubePlayer.html#_dispatchOnProgress": {
                                          "ref": "YoutubePlayer.html#_dispatchOnProgress",
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
                    "Episode.html#anime": {
                      "ref": "Episode.html#anime",
                      "tf": 25
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
                      "Episode.html#links": {
                        "ref": "Episode.html#links",
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
                      "VideoPlayer.html#name": {
                        "ref": "VideoPlayer.html#name",
                        "tf": 33.33333333333333
                      },
                      "YoutubePlayer.html#name": {
                        "ref": "YoutubePlayer.html#name",
                        "tf": 33.33333333333333
                      },
                      "Anime.html#name": {
                        "ref": "Anime.html#name",
                        "tf": 50
                      },
                      "Anime.html#thumbnailLink": {
                        "ref": "Anime.html#thumbnailLink",
                        "tf": 50
                      },
                      "Anime.html#_path": {
                        "ref": "Anime.html#_path",
                        "tf": 25
                      },
                      "Episode.html#name": {
                        "ref": "Episode.html#name",
                        "tf": 50
                      },
                      "Episode.html#posterLink": {
                        "ref": "Episode.html#posterLink",
                        "tf": 50
                      },
                      "Episode.html#localLink": {
                        "ref": "Episode.html#localLink",
                        "tf": 33.33333333333333
                      },
                      "Episode.html#path": {
                        "ref": "Episode.html#path",
                        "tf": 50
                      },
                      "Episode.html#getUrlByPlayer": {
                        "ref": "Episode.html#getUrlByPlayer",
                        "tf": 33.33333333333333
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
                "e": {
                  "docs": {
                    "Anime.html": {
                      "ref": "Anime.html",
                      "tf": 8.333333333333332
                    },
                    "Anime.html#jsonObject": {
                      "ref": "Anime.html#jsonObject",
                      "tf": 6.25
                    },
                    "Episode.html": {
                      "ref": "Episode.html",
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
                  "JsonObject.html": {
                    "ref": "JsonObject.html",
                    "tf": 12.5
                  },
                  "JsonObject.html#save": {
                    "ref": "JsonObject.html#save",
                    "tf": 700
                  },
                  "DownloadEpisode.html#isReady": {
                    "ref": "DownloadEpisode.html#isReady",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "DownloadEpisode.html#_setLocalPath": {
                  "ref": "DownloadEpisode.html#_setLocalPath",
                  "tf": 7.142857142857142
                },
                "DownloadEpisode.html#_setEvents": {
                  "ref": "DownloadEpisode.html#_setEvents",
                  "tf": 16.666666666666664
                },
                "Episode.html#localLink": {
                  "ref": "Episode.html#localLink",
                  "tf": 6.25
                },
                "Episode.html#isLocal": {
                  "ref": "Episode.html#isLocal",
                  "tf": 16.666666666666664
                },
                "Episode.html#hasPoster": {
                  "ref": "Episode.html#hasPoster",
                  "tf": 16.666666666666664
                },
                "Episode.html#setLocalPath": {
                  "ref": "Episode.html#setLocalPath",
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
                                  "Episode.html#setLocalPath": {
                                    "ref": "Episode.html#setLocalPath",
                                    "tf": 683.3333333333334
                                  }
                                }
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
              "v": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "VideoPlayer.html#downloadable": {
                        "ref": "VideoPlayer.html#downloadable",
                        "tf": 16.666666666666664
                      },
                      "YoutubePlayer.html#downloadable": {
                        "ref": "YoutubePlayer.html#downloadable",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {
                "Episode.html#localLink": {
                  "ref": "Episode.html#localLink",
                  "tf": 6.25
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
                "Anime.html#updateJson": {
                  "ref": "Anime.html#updateJson",
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
                                    "DownloadEpisode.html#.getFromEpisode": {
                                      "ref": "DownloadEpisode.html#.getFromEpisode",
                                      "tf": 683.3333333333334
                                    }
                                  }
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
                        "VideoPlayer.html#.getPlayer": {
                          "ref": "VideoPlayer.html#.getPlayer",
                          "tf": 675
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
                                              "VideoPlayer.html#.getVideoPlayerById": {
                                                "ref": "VideoPlayer.html#.getVideoPlayerById",
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
              },
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "o": {
                      "docs": {
                        "YoutubePlayer.html#getInfo": {
                          "ref": "YoutubePlayer.html#getInfo",
                          "tf": 683.3333333333334
                        },
                        "Episode.html#getInfo": {
                          "ref": "Episode.html#getInfo",
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
                                      "Anime.html#getEpisodeById": {
                                        "ref": "Anime.html#getEpisodeById",
                                        "tf": 683.3333333333334
                                      }
                                    }
                                  }
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
                                  "Episode.html#getUrlByPlayer": {
                                    "ref": "Episode.html#getUrlByPlayer",
                                    "tf": 683.3333333333334
                                  }
                                }
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
                    "Anime.html#updateJson": {
                      "ref": "Anime.html#updateJson",
                      "tf": 7.142857142857142
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
                  "VideoPlayer.html#toPublic": {
                    "ref": "VideoPlayer.html#toPublic",
                    "tf": 7.142857142857142
                  },
                  "YoutubePlayer.html#toPublic": {
                    "ref": "YoutubePlayer.html#toPublic",
                    "tf": 7.142857142857142
                  },
                  "Anime.html#toPublic": {
                    "ref": "Anime.html#toPublic",
                    "tf": 7.142857142857142
                  },
                  "Episode.html#toPublic": {
                    "ref": "Episode.html#toPublic",
                    "tf": 7.142857142857142
                  }
                },
                "n": {
                  "docs": {
                    "VideoPlayer.html#download": {
                      "ref": "VideoPlayer.html#download",
                      "tf": 8.333333333333332
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
                    "JsonObject.html": {
                      "ref": "JsonObject.html",
                      "tf": 110
                    },
                    "DownloadEpisode.html": {
                      "ref": "DownloadEpisode.html",
                      "tf": 114.54545454545455
                    },
                    "VideoPlayer.html": {
                      "ref": "VideoPlayer.html",
                      "tf": 122.5
                    },
                    "YoutubePlayer.html": {
                      "ref": "YoutubePlayer.html",
                      "tf": 117.14285714285714
                    },
                    "YoutubePlayer.html#.instance": {
                      "ref": "YoutubePlayer.html#.instance",
                      "tf": 16.666666666666664
                    },
                    "Anime.html": {
                      "ref": "Anime.html",
                      "tf": 110
                    },
                    "Episode.html": {
                      "ref": "Episode.html",
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
                      "VideoPlayer.html#toPublic": {
                        "ref": "VideoPlayer.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "YoutubePlayer.html#toPublic": {
                        "ref": "YoutubePlayer.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "Anime.html#toPublic": {
                        "ref": "Anime.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "Episode.html#toPublic": {
                        "ref": "Episode.html#toPublic",
                        "tf": 7.142857142857142
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
                  "DownloadEpisode.html#_setLocalPath": {
                    "ref": "DownloadEpisode.html#_setLocalPath",
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
                        "VideoPlayer.html#_dispatchOnComplete": {
                          "ref": "VideoPlayer.html#_dispatchOnComplete",
                          "tf": 12.5
                        },
                        "YoutubePlayer.html#_dispatchOnComplete": {
                          "ref": "YoutubePlayer.html#_dispatchOnComplete",
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
                      "VideoPlayer.html#hasPrefix": {
                        "ref": "VideoPlayer.html#hasPrefix",
                        "tf": 5
                      },
                      "YoutubePlayer.html#hasPrefix": {
                        "ref": "YoutubePlayer.html#hasPrefix",
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
                              "VideoPlayer.html#.getVideoPlayerById": {
                                "ref": "VideoPlayer.html#.getVideoPlayerById",
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
                              "Episode.html#getUrlByPlayer": {
                                "ref": "Episode.html#getUrlByPlayer",
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
                  "DownloadEpisode.html#.list": {
                    "ref": "DownloadEpisode.html#.list",
                    "tf": 683.3333333333334
                  },
                  "VideoPlayer.html#.list": {
                    "ref": "VideoPlayer.html#.list",
                    "tf": 700
                  },
                  "VideoPlayer.html#hasPrefix": {
                    "ref": "VideoPlayer.html#hasPrefix",
                    "tf": 5
                  },
                  "YoutubePlayer.html#hasPrefix": {
                    "ref": "YoutubePlayer.html#hasPrefix",
                    "tf": 5
                  },
                  "Anime.html#.list": {
                    "ref": "Anime.html#.list",
                    "tf": 700
                  },
                  "Anime.html#.publicList": {
                    "ref": "Anime.html#.publicList",
                    "tf": 10
                  },
                  "Anime.html#episodes": {
                    "ref": "Anime.html#episodes",
                    "tf": 25
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
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "k": {
                "docs": {
                  "VideoPlayer.html#download": {
                    "ref": "VideoPlayer.html#download",
                    "tf": 8.333333333333332
                  },
                  "Episode.html#links": {
                    "ref": "Episode.html#links",
                    "tf": 716.6666666666666
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
                  "JsonObject.html": {
                    "ref": "JsonObject.html",
                    "tf": 12.5
                  },
                  "JsonObject.html#load": {
                    "ref": "JsonObject.html#load",
                    "tf": 750
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
                          "JsonObject.html#loadSync": {
                            "ref": "JsonObject.html#loadSync",
                            "tf": 700
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
                                        "Episode.html#getInfo": {
                                          "ref": "Episode.html#getInfo",
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
                    "Episode.html#localLink": {
                      "ref": "Episode.html#localLink",
                      "tf": 6.25
                    },
                    "Episode.html#path": {
                      "ref": "Episode.html#path",
                      "tf": 13.636363636363635
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
                                                      "YoutubePlayer.html#download": {
                                                        "ref": "YoutubePlayer.html#download",
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
                            "Episode.html#localLink": {
                              "ref": "Episode.html#localLink",
                              "tf": 683.3333333333334
                            },
                            "Episode.html#isLocal": {
                              "ref": "Episode.html#isLocal",
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
                            "VideoPlayer.html#.list": {
                              "ref": "VideoPlayer.html#.list",
                              "tf": 25
                            },
                            "YoutubePlayer.html#.instance": {
                              "ref": "YoutubePlayer.html#.instance",
                              "tf": 33.33333333333333
                            },
                            "Anime.html#.list": {
                              "ref": "Anime.html#.list",
                              "tf": 25
                            }
                          },
                          "&": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "DownloadEpisode.html#.list": {
                                    "ref": "DownloadEpisode.html#.list",
                                    "tf": 33.33333333333333
                                  },
                                  "DownloadEpisode.html#.getFromEpisode": {
                                    "ref": "DownloadEpisode.html#.getFromEpisode",
                                    "tf": 33.33333333333333
                                  },
                                  "VideoPlayer.html#.getPlayer": {
                                    "ref": "VideoPlayer.html#.getPlayer",
                                    "tf": 25
                                  },
                                  "VideoPlayer.html#.getVideoPlayerById": {
                                    "ref": "VideoPlayer.html#.getVideoPlayerById",
                                    "tf": 25
                                  },
                                  "Anime.html#.publicList": {
                                    "ref": "Anime.html#.publicList",
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
                                      "DownloadEpisode.html#episode": {
                                        "ref": "DownloadEpisode.html#episode",
                                        "tf": 33.33333333333333
                                      },
                                      "DownloadEpisode.html#id": {
                                        "ref": "DownloadEpisode.html#id",
                                        "tf": 33.33333333333333
                                      },
                                      "DownloadEpisode.html#isDownloading": {
                                        "ref": "DownloadEpisode.html#isDownloading",
                                        "tf": 33.33333333333333
                                      },
                                      "DownloadEpisode.html#progress": {
                                        "ref": "DownloadEpisode.html#progress",
                                        "tf": 33.33333333333333
                                      },
                                      "VideoPlayer.html#name": {
                                        "ref": "VideoPlayer.html#name",
                                        "tf": 33.33333333333333
                                      },
                                      "VideoPlayer.html#isNatif": {
                                        "ref": "VideoPlayer.html#isNatif",
                                        "tf": 33.33333333333333
                                      },
                                      "VideoPlayer.html#id": {
                                        "ref": "VideoPlayer.html#id",
                                        "tf": 50
                                      },
                                      "YoutubePlayer.html#name": {
                                        "ref": "YoutubePlayer.html#name",
                                        "tf": 33.33333333333333
                                      },
                                      "YoutubePlayer.html#isNatif": {
                                        "ref": "YoutubePlayer.html#isNatif",
                                        "tf": 33.33333333333333
                                      },
                                      "YoutubePlayer.html#id": {
                                        "ref": "YoutubePlayer.html#id",
                                        "tf": 50
                                      },
                                      "Anime.html#id": {
                                        "ref": "Anime.html#id",
                                        "tf": 33.33333333333333
                                      },
                                      "Anime.html#path": {
                                        "ref": "Anime.html#path",
                                        "tf": 50
                                      },
                                      "Episode.html#episodeId": {
                                        "ref": "Episode.html#episodeId",
                                        "tf": 33.33333333333333
                                      },
                                      "Episode.html#localLink": {
                                        "ref": "Episode.html#localLink",
                                        "tf": 33.33333333333333
                                      },
                                      "Episode.html#anime": {
                                        "ref": "Episode.html#anime",
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
              "p": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "v": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "DownloadEpisode.html#player": {
                              "ref": "DownloadEpisode.html#player",
                              "tf": 25
                            },
                            "DownloadEpisode.html#isReady": {
                              "ref": "DownloadEpisode.html#isReady",
                              "tf": 25
                            },
                            "Anime.html#jsonObject": {
                              "ref": "Anime.html#jsonObject",
                              "tf": 25
                            },
                            "Anime.html#_path": {
                              "ref": "Anime.html#_path",
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
                                    "DownloadEpisode.html#_setLocalPath": {
                                      "ref": "DownloadEpisode.html#_setLocalPath",
                                      "tf": 33.33333333333333
                                    },
                                    "DownloadEpisode.html#_setEvents": {
                                      "ref": "DownloadEpisode.html#_setEvents",
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
                  },
                  "o": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {},
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
                                        "VideoPlayer.html#_dispatchOnComplete": {
                                          "ref": "VideoPlayer.html#_dispatchOnComplete",
                                          "tf": 25
                                        },
                                        "VideoPlayer.html#_dispatchOnProgress": {
                                          "ref": "VideoPlayer.html#_dispatchOnProgress",
                                          "tf": 25
                                        },
                                        "VideoPlayer.html#_dispatchOnError": {
                                          "ref": "VideoPlayer.html#_dispatchOnError",
                                          "tf": 25
                                        },
                                        "YoutubePlayer.html#_dispatchOnComplete": {
                                          "ref": "YoutubePlayer.html#_dispatchOnComplete",
                                          "tf": 25
                                        },
                                        "YoutubePlayer.html#_dispatchOnProgress": {
                                          "ref": "YoutubePlayer.html#_dispatchOnProgress",
                                          "tf": 25
                                        },
                                        "YoutubePlayer.html#_dispatchOnError": {
                                          "ref": "YoutubePlayer.html#_dispatchOnError",
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
                                "Episode.html#getInfo": {
                                  "ref": "Episode.html#getInfo",
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
                      "DownloadEpisode.html#download": {
                        "ref": "DownloadEpisode.html#download",
                        "tf": 25
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
                  "JsonObject.html": {
                    "ref": "JsonObject.html",
                    "tf": 12.5
                  },
                  "Episode.html#localLink": {
                    "ref": "Episode.html#localLink",
                    "tf": 6.25
                  },
                  "Episode.html#path": {
                    "ref": "Episode.html#path",
                    "tf": 4.545454545454546
                  }
                },
                "n": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "VideoPlayer.html#download": {
                          "ref": "VideoPlayer.html#download",
                          "tf": 20
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
                  "VideoPlayer.html#_dispatchOnComplete": {
                    "ref": "VideoPlayer.html#_dispatchOnComplete",
                    "tf": 12.5
                  },
                  "VideoPlayer.html#_dispatchOnProgress": {
                    "ref": "VideoPlayer.html#_dispatchOnProgress",
                    "tf": 12.5
                  },
                  "VideoPlayer.html#_dispatchOnError": {
                    "ref": "VideoPlayer.html#_dispatchOnError",
                    "tf": 12.5
                  },
                  "YoutubePlayer.html#_dispatchOnComplete": {
                    "ref": "YoutubePlayer.html#_dispatchOnComplete",
                    "tf": 12.5
                  },
                  "YoutubePlayer.html#_dispatchOnProgress": {
                    "ref": "YoutubePlayer.html#_dispatchOnProgress",
                    "tf": 12.5
                  },
                  "YoutubePlayer.html#_dispatchOnError": {
                    "ref": "YoutubePlayer.html#_dispatchOnError",
                    "tf": 12.5
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "VideoPlayer.html#.getPlayer": {
                      "ref": "VideoPlayer.html#.getPlayer",
                      "tf": 8.333333333333332
                    },
                    "Episode.html#getUrlByPlayer": {
                      "ref": "Episode.html#getUrlByPlayer",
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
                  "JsonObject.html#loadSync": {
                    "ref": "JsonObject.html#loadSync",
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
                          "JsonObject.html#loadSync": {
                            "ref": "JsonObject.html#loadSync",
                            "tf": 110
                          },
                          "JsonObject.html#load": {
                            "ref": "JsonObject.html#load",
                            "tf": 110
                          },
                          "JsonObject.html#save": {
                            "ref": "JsonObject.html#save",
                            "tf": 110
                          },
                          "DownloadEpisode.html#_setLocalPath": {
                            "ref": "DownloadEpisode.html#_setLocalPath",
                            "tf": 110
                          },
                          "DownloadEpisode.html#download": {
                            "ref": "DownloadEpisode.html#download",
                            "tf": 110
                          },
                          "DownloadEpisode.html#_setEvents": {
                            "ref": "DownloadEpisode.html#_setEvents",
                            "tf": 110
                          },
                          "DownloadEpisode.html#.getFromEpisode": {
                            "ref": "DownloadEpisode.html#.getFromEpisode",
                            "tf": 110
                          },
                          "VideoPlayer.html#toPublic": {
                            "ref": "VideoPlayer.html#toPublic",
                            "tf": 110
                          },
                          "VideoPlayer.html#_dispatchOnComplete": {
                            "ref": "VideoPlayer.html#_dispatchOnComplete",
                            "tf": 110
                          },
                          "VideoPlayer.html#_dispatchOnProgress": {
                            "ref": "VideoPlayer.html#_dispatchOnProgress",
                            "tf": 110
                          },
                          "VideoPlayer.html#_dispatchOnError": {
                            "ref": "VideoPlayer.html#_dispatchOnError",
                            "tf": 110
                          },
                          "VideoPlayer.html#download": {
                            "ref": "VideoPlayer.html#download",
                            "tf": 110
                          },
                          "VideoPlayer.html#hasPrefix": {
                            "ref": "VideoPlayer.html#hasPrefix",
                            "tf": 110
                          },
                          "VideoPlayer.html#.getPlayer": {
                            "ref": "VideoPlayer.html#.getPlayer",
                            "tf": 110
                          },
                          "VideoPlayer.html#.getVideoPlayerById": {
                            "ref": "VideoPlayer.html#.getVideoPlayerById",
                            "tf": 110
                          },
                          "YoutubePlayer.html#toPublic": {
                            "ref": "YoutubePlayer.html#toPublic",
                            "tf": 110
                          },
                          "YoutubePlayer.html#_dispatchOnComplete": {
                            "ref": "YoutubePlayer.html#_dispatchOnComplete",
                            "tf": 110
                          },
                          "YoutubePlayer.html#_dispatchOnProgress": {
                            "ref": "YoutubePlayer.html#_dispatchOnProgress",
                            "tf": 110
                          },
                          "YoutubePlayer.html#_dispatchOnError": {
                            "ref": "YoutubePlayer.html#_dispatchOnError",
                            "tf": 110
                          },
                          "YoutubePlayer.html#hasPrefix": {
                            "ref": "YoutubePlayer.html#hasPrefix",
                            "tf": 110
                          },
                          "YoutubePlayer.html#download": {
                            "ref": "YoutubePlayer.html#download",
                            "tf": 110
                          },
                          "YoutubePlayer.html#getInfo": {
                            "ref": "YoutubePlayer.html#getInfo",
                            "tf": 110
                          },
                          "Anime.html#toPublic": {
                            "ref": "Anime.html#toPublic",
                            "tf": 110
                          },
                          "Anime.html#getEpisodeById": {
                            "ref": "Anime.html#getEpisodeById",
                            "tf": 110
                          },
                          "Anime.html#updateJson": {
                            "ref": "Anime.html#updateJson",
                            "tf": 110
                          },
                          "Anime.html#toAnimeConfig": {
                            "ref": "Anime.html#toAnimeConfig",
                            "tf": 110
                          },
                          "Episode.html#toPublic": {
                            "ref": "Episode.html#toPublic",
                            "tf": 110
                          },
                          "Episode.html#getInfo": {
                            "ref": "Episode.html#getInfo",
                            "tf": 110
                          },
                          "Episode.html#getUrlByPlayer": {
                            "ref": "Episode.html#getUrlByPlayer",
                            "tf": 110
                          },
                          "Episode.html#setLocalPath": {
                            "ref": "Episode.html#setLocalPath",
                            "tf": 110
                          },
                          "Episode.html#toEpisodeConfig": {
                            "ref": "Episode.html#toEpisodeConfig",
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
                      "DownloadEpisode.html#download": {
                        "ref": "DownloadEpisode.html#download",
                        "tf": 33.33333333333333
                      },
                      "VideoPlayer.html#download": {
                        "ref": "VideoPlayer.html#download",
                        "tf": 20
                      },
                      "YoutubePlayer.html#download": {
                        "ref": "YoutubePlayer.html#download",
                        "tf": 20
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
                      "Anime.html#_path": {
                        "ref": "Anime.html#_path",
                        "tf": 16.666666666666664
                      },
                      "Anime.html#path": {
                        "ref": "Anime.html#path",
                        "tf": 12.5
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
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "YoutubePlayer.html#getInfo": {
                      "ref": "YoutubePlayer.html#getInfo",
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
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {
                  "JsonObject.html": {
                    "ref": "JsonObject.html",
                    "tf": 12.5
                  },
                  "DownloadEpisode.html#isReady": {
                    "ref": "DownloadEpisode.html#isReady",
                    "tf": 12.5
                  },
                  "Anime.html#jsonObject": {
                    "ref": "Anime.html#jsonObject",
                    "tf": 6.25
                  },
                  "Anime.html#updateJson": {
                    "ref": "Anime.html#updateJson",
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
                              "JsonObject.html": {
                                "ref": "JsonObject.html",
                                "tf": 1900
                              },
                              "Anime.html#jsonObject": {
                                "ref": "Anime.html#jsonObject",
                                "tf": 700
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
                                        "JsonObject.html#load": {
                                          "ref": "JsonObject.html#load",
                                          "tf": 1150
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
                                                "JsonObject.html#loadSync": {
                                                  "ref": "JsonObject.html#loadSync",
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
                              },
                              "s": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "v": {
                                    "docs": {
                                      "JsonObject.html#save": {
                                        "ref": "JsonObject.html#save",
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
                                                "JsonObject.html#save": {
                                                  "ref": "JsonObject.html#save",
                                                  "tf": 50
                                                },
                                                "Anime.html#updateJson": {
                                                  "ref": "Anime.html#updateJson",
                                                  "tf": 50
                                                },
                                                "Episode.html#setLocalPath": {
                                                  "ref": "Episode.html#setLocalPath",
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
                                                                    "YoutubePlayer.html#getInfo": {
                                                                      "ref": "YoutubePlayer.html#getInfo",
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
                                                              "Episode.html#getInfo": {
                                                                "ref": "Episode.html#getInfo",
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
                          "DownloadEpisode.html#progress": {
                            "ref": "DownloadEpisode.html#progress",
                            "tf": 708.3333333333334
                          },
                          "VideoPlayer.html#_dispatchOnProgress": {
                            "ref": "VideoPlayer.html#_dispatchOnProgress",
                            "tf": 12.5
                          },
                          "YoutubePlayer.html#_dispatchOnProgress": {
                            "ref": "YoutubePlayer.html#_dispatchOnProgress",
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
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "x": {
                    "docs": {
                      "VideoPlayer.html#prefix": {
                        "ref": "VideoPlayer.html#prefix",
                        "tf": 700
                      },
                      "VideoPlayer.html#hasPrefix": {
                        "ref": "VideoPlayer.html#hasPrefix",
                        "tf": 15
                      },
                      "VideoPlayer.html#.getPlayer": {
                        "ref": "VideoPlayer.html#.getPlayer",
                        "tf": 8.333333333333332
                      },
                      "YoutubePlayer.html#prefix": {
                        "ref": "YoutubePlayer.html#prefix",
                        "tf": 700
                      },
                      "YoutubePlayer.html#hasPrefix": {
                        "ref": "YoutubePlayer.html#hasPrefix",
                        "tf": 15
                      }
                    },
                    "(": {
                      "docs": {
                        "VideoPlayer.html#prefix": {
                          "ref": "VideoPlayer.html#prefix",
                          "tf": 16.666666666666664
                        },
                        "YoutubePlayer.html#prefix": {
                          "ref": "YoutubePlayer.html#prefix",
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
                      "DownloadEpisode.html#player": {
                        "ref": "DownloadEpisode.html#player",
                        "tf": 685
                      },
                      "VideoPlayer.html#.getVideoPlayerById": {
                        "ref": "VideoPlayer.html#.getVideoPlayerById",
                        "tf": 12.5
                      },
                      "Episode.html#getUrlByPlayer": {
                        "ref": "Episode.html#getUrlByPlayer",
                        "tf": 33.33333333333333
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
                  "Anime.html#_path": {
                    "ref": "Anime.html#_path",
                    "tf": 16.666666666666664
                  },
                  "Anime.html#path": {
                    "ref": "Anime.html#path",
                    "tf": 712.5
                  },
                  "Episode.html#localLink": {
                    "ref": "Episode.html#localLink",
                    "tf": 6.25
                  },
                  "Episode.html#path": {
                    "ref": "Episode.html#path",
                    "tf": 709.0909090909091
                  },
                  "Episode.html#setLocalPath": {
                    "ref": "Episode.html#setLocalPath",
                    "tf": 33.33333333333333
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
                            "DownloadEpisode.html#_setLocalPath": {
                              "ref": "DownloadEpisode.html#_setLocalPath",
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
                                                              "Episode.html#path": {
                                                                "ref": "Episode.html#path",
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
                      "VideoPlayer.html#toPublic": {
                        "ref": "VideoPlayer.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "YoutubePlayer.html#toPublic": {
                        "ref": "YoutubePlayer.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "Anime.html#.publicList": {
                        "ref": "Anime.html#.publicList",
                        "tf": 10
                      },
                      "Anime.html#toPublic": {
                        "ref": "Anime.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "Episode.html#toPublic": {
                        "ref": "Episode.html#toPublic",
                        "tf": 7.142857142857142
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
                                        "VideoPlayer.html#toPublic": {
                                          "ref": "VideoPlayer.html#toPublic",
                                          "tf": 50
                                        },
                                        "YoutubePlayer.html#toPublic": {
                                          "ref": "YoutubePlayer.html#toPublic",
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
                    "l": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Anime.html#.publicList": {
                                "ref": "Anime.html#.publicList",
                                "tf": 700
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
                              "Anime.html#toPublic": {
                                "ref": "Anime.html#toPublic",
                                "tf": 50
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
                                  "Episode.html#toPublic": {
                                    "ref": "Episode.html#toPublic",
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
                      "Anime.html#thumbnailLink": {
                        "ref": "Anime.html#thumbnailLink",
                        "tf": 16.666666666666664
                      },
                      "Episode.html#posterLink": {
                        "ref": "Episode.html#posterLink",
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
                              "Episode.html#posterLink": {
                                "ref": "Episode.html#posterLink",
                                "tf": 700
                              },
                              "Episode.html#hasPoster": {
                                "ref": "Episode.html#hasPoster",
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
                    "DownloadEpisode.html": {
                      "ref": "DownloadEpisode.html",
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
                      "DownloadEpisode.html": {
                        "ref": "DownloadEpisode.html",
                        "tf": 4.545454545454546
                      },
                      "DownloadEpisode.html#episode": {
                        "ref": "DownloadEpisode.html#episode",
                        "tf": 733.3333333333333
                      },
                      "DownloadEpisode.html#.getFromEpisode": {
                        "ref": "DownloadEpisode.html#.getFromEpisode",
                        "tf": 33.33333333333333
                      },
                      "Anime.html#episodes": {
                        "ref": "Anime.html#episodes",
                        "tf": 725
                      },
                      "Anime.html#getEpisodeById": {
                        "ref": "Anime.html#getEpisodeById",
                        "tf": 16.666666666666664
                      },
                      "Anime.html#updateJson": {
                        "ref": "Anime.html#updateJson",
                        "tf": 7.142857142857142
                      },
                      "Episode.html": {
                        "ref": "Episode.html",
                        "tf": 1916.6666666666667
                      },
                      "Episode.html#name": {
                        "ref": "Episode.html#name",
                        "tf": 25
                      },
                      "Episode.html#episodeId": {
                        "ref": "Episode.html#episodeId",
                        "tf": 14.285714285714285
                      },
                      "Episode.html#posterLink": {
                        "ref": "Episode.html#posterLink",
                        "tf": 16.666666666666664
                      },
                      "Episode.html#toPublic": {
                        "ref": "Episode.html#toPublic",
                        "tf": 7.142857142857142
                      },
                      "Episode.html#getInfo": {
                        "ref": "Episode.html#getInfo",
                        "tf": 25
                      },
                      "Episode.html#toEpisodeConfig": {
                        "ref": "Episode.html#toEpisodeConfig",
                        "tf": 16.666666666666664
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
                                                  "DownloadEpisode.html#_setLocalPath": {
                                                    "ref": "DownloadEpisode.html#_setLocalPath",
                                                    "tf": 7.142857142857142
                                                  },
                                                  "Episode.html#setLocalPath": {
                                                    "ref": "Episode.html#setLocalPath",
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
                        "n": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "m": {
                              "docs": {
                                "Episode.html#name": {
                                  "ref": "Episode.html#name",
                                  "tf": 1150
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
                                            "Episode.html#episodeId": {
                                              "ref": "Episode.html#episodeId",
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
                                              "Episode.html#posterLink": {
                                                "ref": "Episode.html#posterLink",
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
                          },
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "h": {
                                "docs": {
                                  "Episode.html#path": {
                                    "ref": "Episode.html#path",
                                    "tf": 1150
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
                                  "Episode.html#links": {
                                    "ref": "Episode.html#links",
                                    "tf": 1150
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
                                            "Episode.html#localLink": {
                                              "ref": "Episode.html#localLink",
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
                        },
                        "a": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "m": {
                                "docs": {
                                  "Episode.html#anime": {
                                    "ref": "Episode.html#anime",
                                    "tf": 1150
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
                                    "Episode.html#isLocal": {
                                      "ref": "Episode.html#isLocal",
                                      "tf": 1150
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
                                        "Episode.html#hasPoster": {
                                          "ref": "Episode.html#hasPoster",
                                          "tf": 1150
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
                                      "Episode.html#toPublic": {
                                        "ref": "Episode.html#toPublic",
                                        "tf": 1150
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
                                                        "Episode.html#toEpisodeConfig": {
                                                          "ref": "Episode.html#toEpisodeConfig",
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
                                        "Episode.html#getInfo": {
                                          "ref": "Episode.html#getInfo",
                                          "tf": 1150
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
                                                  "Episode.html#getUrlByPlayer": {
                                                    "ref": "Episode.html#getUrlByPlayer",
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
                                  "VideoPlayer.html#autoDownload": {
                                    "ref": "VideoPlayer.html#autoDownload",
                                    "tf": 8.333333333333332
                                  },
                                  "YoutubePlayer.html#autoDownload": {
                                    "ref": "YoutubePlayer.html#autoDownload",
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
                                            "Episode.html#localLink": {
                                              "ref": "Episode.html#localLink",
                                              "tf": 6.25
                                            },
                                            "Episode.html#setLocalPath": {
                                              "ref": "Episode.html#setLocalPath",
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
                                                  "Episode.html#localLink": {
                                                    "ref": "Episode.html#localLink",
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
                            "Anime.html#getEpisodeById": {
                              "ref": "Anime.html#getEpisodeById",
                              "tf": 33.33333333333333
                            },
                            "Episode.html#episodeId": {
                              "ref": "Episode.html#episodeId",
                              "tf": 683.3333333333334
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
                                "Anime.html#getEpisodeById": {
                                  "ref": "Anime.html#getEpisodeById",
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
                                    "Anime.html#updateJson": {
                                      "ref": "Anime.html#updateJson",
                                      "tf": 7.142857142857142
                                    },
                                    "Episode.html#toEpisodeConfig": {
                                      "ref": "Episode.html#toEpisodeConfig",
                                      "tf": 66.66666666666666
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
                          "Episode.html#links": {
                            "ref": "Episode.html#links",
                            "tf": 16.666666666666664
                          },
                          "Episode.html#localLink": {
                            "ref": "Episode.html#localLink",
                            "tf": 6.25
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
                    "DownloadEpisode.html#player": {
                      "ref": "DownloadEpisode.html#player",
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
                    "DownloadEpisode.html": {
                      "ref": "DownloadEpisode.html",
                      "tf": 4.545454545454546
                    },
                    "DownloadEpisode.html#_setEvents": {
                      "ref": "DownloadEpisode.html#_setEvents",
                      "tf": 16.666666666666664
                    },
                    "VideoPlayer.html#_dispatchOnComplete": {
                      "ref": "VideoPlayer.html#_dispatchOnComplete",
                      "tf": 12.5
                    },
                    "VideoPlayer.html#_dispatchOnProgress": {
                      "ref": "VideoPlayer.html#_dispatchOnProgress",
                      "tf": 12.5
                    },
                    "VideoPlayer.html#_dispatchOnError": {
                      "ref": "VideoPlayer.html#_dispatchOnError",
                      "tf": 12.5
                    },
                    "YoutubePlayer.html#_dispatchOnComplete": {
                      "ref": "YoutubePlayer.html#_dispatchOnComplete",
                      "tf": 12.5
                    },
                    "YoutubePlayer.html#_dispatchOnProgress": {
                      "ref": "YoutubePlayer.html#_dispatchOnProgress",
                      "tf": 12.5
                    },
                    "YoutubePlayer.html#_dispatchOnError": {
                      "ref": "YoutubePlayer.html#_dispatchOnError",
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
                              "VideoPlayer.html#download": {
                                "ref": "VideoPlayer.html#download",
                                "tf": 20
                              },
                              "YoutubePlayer.html#download": {
                                "ref": "YoutubePlayer.html#download",
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
          "m": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {},
                "t": {
                  "docs": {
                    "DownloadEpisode.html#_setEvents": {
                      "ref": "DownloadEpisode.html#_setEvents",
                      "tf": 49.99999999999999
                    },
                    "VideoPlayer.html#_dispatchOnComplete": {
                      "ref": "VideoPlayer.html#_dispatchOnComplete",
                      "tf": 37.5
                    },
                    "VideoPlayer.html#_dispatchOnProgress": {
                      "ref": "VideoPlayer.html#_dispatchOnProgress",
                      "tf": 37.5
                    },
                    "VideoPlayer.html#_dispatchOnError": {
                      "ref": "VideoPlayer.html#_dispatchOnError",
                      "tf": 37.5
                    },
                    "YoutubePlayer.html#_dispatchOnComplete": {
                      "ref": "YoutubePlayer.html#_dispatchOnComplete",
                      "tf": 37.5
                    },
                    "YoutubePlayer.html#_dispatchOnProgress": {
                      "ref": "YoutubePlayer.html#_dispatchOnProgress",
                      "tf": 37.5
                    },
                    "YoutubePlayer.html#_dispatchOnError": {
                      "ref": "YoutubePlayer.html#_dispatchOnError",
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
                  "VideoPlayer.html#isNatif": {
                    "ref": "VideoPlayer.html#isNatif",
                    "tf": 10
                  },
                  "YoutubePlayer.html#isNatif": {
                    "ref": "YoutubePlayer.html#isNatif",
                    "tf": 10
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {
                "VideoPlayer.html#_dispatchOnError": {
                  "ref": "VideoPlayer.html#_dispatchOnError",
                  "tf": 25
                },
                "YoutubePlayer.html#_dispatchOnError": {
                  "ref": "YoutubePlayer.html#_dispatchOnError",
                  "tf": 25
                }
              },
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "VideoPlayer.html#_dispatchOnError": {
                      "ref": "VideoPlayer.html#_dispatchOnError",
                      "tf": 12.5
                    },
                    "YoutubePlayer.html#_dispatchOnError": {
                      "ref": "YoutubePlayer.html#_dispatchOnError",
                      "tf": 12.5
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
                "DownloadEpisode.html": {
                  "ref": "DownloadEpisode.html",
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
                    "VideoPlayer.html#prefix": {
                      "ref": "VideoPlayer.html#prefix",
                      "tf": 16.666666666666664
                    },
                    "VideoPlayer.html#hasPrefix": {
                      "ref": "VideoPlayer.html#hasPrefix",
                      "tf": 5
                    },
                    "VideoPlayer.html#.getPlayer": {
                      "ref": "VideoPlayer.html#.getPlayer",
                      "tf": 8.333333333333332
                    },
                    "YoutubePlayer.html#prefix": {
                      "ref": "YoutubePlayer.html#prefix",
                      "tf": 16.666666666666664
                    },
                    "YoutubePlayer.html#hasPrefix": {
                      "ref": "YoutubePlayer.html#hasPrefix",
                      "tf": 5
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {
                "Anime.html#.publicList": {
                  "ref": "Anime.html#.publicList",
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
                      "DownloadEpisode.html#.list": {
                        "ref": "DownloadEpisode.html#.list",
                        "tf": 110
                      },
                      "DownloadEpisode.html#episode": {
                        "ref": "DownloadEpisode.html#episode",
                        "tf": 110
                      },
                      "DownloadEpisode.html#id": {
                        "ref": "DownloadEpisode.html#id",
                        "tf": 110
                      },
                      "DownloadEpisode.html#player": {
                        "ref": "DownloadEpisode.html#player",
                        "tf": 110
                      },
                      "DownloadEpisode.html#isReady": {
                        "ref": "DownloadEpisode.html#isReady",
                        "tf": 110
                      },
                      "DownloadEpisode.html#isDownloading": {
                        "ref": "DownloadEpisode.html#isDownloading",
                        "tf": 110
                      },
                      "DownloadEpisode.html#progress": {
                        "ref": "DownloadEpisode.html#progress",
                        "tf": 110
                      },
                      "VideoPlayer.html#.list": {
                        "ref": "VideoPlayer.html#.list",
                        "tf": 110
                      },
                      "VideoPlayer.html#name": {
                        "ref": "VideoPlayer.html#name",
                        "tf": 110
                      },
                      "VideoPlayer.html#isNatif": {
                        "ref": "VideoPlayer.html#isNatif",
                        "tf": 110
                      },
                      "VideoPlayer.html#prefix": {
                        "ref": "VideoPlayer.html#prefix",
                        "tf": 110
                      },
                      "VideoPlayer.html#downloadable": {
                        "ref": "VideoPlayer.html#downloadable",
                        "tf": 110
                      },
                      "VideoPlayer.html#autoDownload": {
                        "ref": "VideoPlayer.html#autoDownload",
                        "tf": 110
                      },
                      "VideoPlayer.html#id": {
                        "ref": "VideoPlayer.html#id",
                        "tf": 110
                      },
                      "YoutubePlayer.html#name": {
                        "ref": "YoutubePlayer.html#name",
                        "tf": 110
                      },
                      "YoutubePlayer.html#isNatif": {
                        "ref": "YoutubePlayer.html#isNatif",
                        "tf": 110
                      },
                      "YoutubePlayer.html#prefix": {
                        "ref": "YoutubePlayer.html#prefix",
                        "tf": 110
                      },
                      "YoutubePlayer.html#downloadable": {
                        "ref": "YoutubePlayer.html#downloadable",
                        "tf": 110
                      },
                      "YoutubePlayer.html#autoDownload": {
                        "ref": "YoutubePlayer.html#autoDownload",
                        "tf": 110
                      },
                      "YoutubePlayer.html#id": {
                        "ref": "YoutubePlayer.html#id",
                        "tf": 110
                      },
                      "YoutubePlayer.html#.instance": {
                        "ref": "YoutubePlayer.html#.instance",
                        "tf": 110
                      },
                      "Anime.html#.list": {
                        "ref": "Anime.html#.list",
                        "tf": 110
                      },
                      "Anime.html#.publicList": {
                        "ref": "Anime.html#.publicList",
                        "tf": 110
                      },
                      "Anime.html#jsonObject": {
                        "ref": "Anime.html#jsonObject",
                        "tf": 110
                      },
                      "Anime.html#name": {
                        "ref": "Anime.html#name",
                        "tf": 110
                      },
                      "Anime.html#thumbnailLink": {
                        "ref": "Anime.html#thumbnailLink",
                        "tf": 110
                      },
                      "Anime.html#_path": {
                        "ref": "Anime.html#_path",
                        "tf": 110
                      },
                      "Anime.html#episodes": {
                        "ref": "Anime.html#episodes",
                        "tf": 110
                      },
                      "Anime.html#id": {
                        "ref": "Anime.html#id",
                        "tf": 110
                      },
                      "Anime.html#path": {
                        "ref": "Anime.html#path",
                        "tf": 110
                      },
                      "Episode.html#name": {
                        "ref": "Episode.html#name",
                        "tf": 110
                      },
                      "Episode.html#episodeId": {
                        "ref": "Episode.html#episodeId",
                        "tf": 110
                      },
                      "Episode.html#posterLink": {
                        "ref": "Episode.html#posterLink",
                        "tf": 110
                      },
                      "Episode.html#links": {
                        "ref": "Episode.html#links",
                        "tf": 110
                      },
                      "Episode.html#localLink": {
                        "ref": "Episode.html#localLink",
                        "tf": 110
                      },
                      "Episode.html#anime": {
                        "ref": "Episode.html#anime",
                        "tf": 110
                      },
                      "Episode.html#isLocal": {
                        "ref": "Episode.html#isLocal",
                        "tf": 110
                      },
                      "Episode.html#hasPoster": {
                        "ref": "Episode.html#hasPoster",
                        "tf": 110
                      },
                      "Episode.html#path": {
                        "ref": "Episode.html#path",
                        "tf": 110
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
              "DownloadEpisode.html": {
                "ref": "DownloadEpisode.html",
                "tf": 4.545454545454546
              }
            },
            "g": {
              "docs": {},
              "o": {
                "docs": {
                  "DownloadEpisode.html#isDownloading": {
                    "ref": "DownloadEpisode.html#isDownloading",
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
                      "DownloadEpisode.html#player": {
                        "ref": "DownloadEpisode.html#player",
                        "tf": 25
                      },
                      "Anime.html#jsonObject": {
                        "ref": "Anime.html#jsonObject",
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
                    "Episode.html#episodeId": {
                      "ref": "Episode.html#episodeId",
                      "tf": 7.142857142857142
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
                      "DownloadEpisode.html": {
                        "ref": "DownloadEpisode.html",
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
                          "docs": {},
                          "l": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "k": {
                                  "docs": {
                                    "Anime.html#thumbnailLink": {
                                      "ref": "Anime.html#thumbnailLink",
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
                                      "Episode.html#path": {
                                        "ref": "Episode.html#path",
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
          "r": {
            "docs": {},
            "u": {
              "docs": {},
              "e": {
                "docs": {
                  "VideoPlayer.html#isNatif": {
                    "ref": "VideoPlayer.html#isNatif",
                    "tf": 10
                  },
                  "VideoPlayer.html#hasPrefix": {
                    "ref": "VideoPlayer.html#hasPrefix",
                    "tf": 5
                  },
                  "YoutubePlayer.html#isNatif": {
                    "ref": "YoutubePlayer.html#isNatif",
                    "tf": 10
                  },
                  "YoutubePlayer.html#hasPrefix": {
                    "ref": "YoutubePlayer.html#hasPrefix",
                    "tf": 5
                  },
                  "Episode.html#isLocal": {
                    "ref": "Episode.html#isLocal",
                    "tf": 16.666666666666664
                  },
                  "Episode.html#hasPoster": {
                    "ref": "Episode.html#hasPoster",
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
                  "VideoPlayer.html#downloadable": {
                    "ref": "VideoPlayer.html#downloadable",
                    "tf": 16.666666666666664
                  },
                  "VideoPlayer.html#autoDownload": {
                    "ref": "VideoPlayer.html#autoDownload",
                    "tf": 8.333333333333332
                  },
                  "YoutubePlayer.html#downloadable": {
                    "ref": "YoutubePlayer.html#downloadable",
                    "tf": 16.666666666666664
                  },
                  "YoutubePlayer.html#autoDownload": {
                    "ref": "YoutubePlayer.html#autoDownload",
                    "tf": 8.333333333333332
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
                      "VideoPlayer.html#toPublic": {
                        "ref": "VideoPlayer.html#toPublic",
                        "tf": 700
                      },
                      "YoutubePlayer.html#toPublic": {
                        "ref": "YoutubePlayer.html#toPublic",
                        "tf": 700
                      },
                      "Anime.html#toPublic": {
                        "ref": "Anime.html#toPublic",
                        "tf": 700
                      },
                      "Episode.html#toPublic": {
                        "ref": "Episode.html#toPublic",
                        "tf": 700
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
                                    "Anime.html#toAnimeConfig": {
                                      "ref": "Anime.html#toAnimeConfig",
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
                                        "Episode.html#toEpisodeConfig": {
                                          "ref": "Episode.html#toEpisodeConfig",
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
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "s": {
            "docs": {
              "DownloadEpisode.html": {
                "ref": "DownloadEpisode.html",
                "tf": 4.545454545454546
              },
              "DownloadEpisode.html#player": {
                "ref": "DownloadEpisode.html#player",
                "tf": 10
              },
              "VideoPlayer.html": {
                "ref": "VideoPlayer.html",
                "tf": 12.5
              },
              "VideoPlayer.html#autoDownload": {
                "ref": "VideoPlayer.html#autoDownload",
                "tf": 8.333333333333332
              },
              "VideoPlayer.html#download": {
                "ref": "VideoPlayer.html#download",
                "tf": 8.333333333333332
              },
              "YoutubePlayer.html": {
                "ref": "YoutubePlayer.html",
                "tf": 7.142857142857142
              },
              "YoutubePlayer.html#autoDownload": {
                "ref": "YoutubePlayer.html#autoDownload",
                "tf": 8.333333333333332
              },
              "Anime.html#jsonObject": {
                "ref": "Anime.html#jsonObject",
                "tf": 6.25
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
                    "DownloadEpisode.html#id": {
                      "ref": "DownloadEpisode.html#id",
                      "tf": 12.5
                    },
                    "VideoPlayer.html#id": {
                      "ref": "VideoPlayer.html#id",
                      "tf": 16.666666666666664
                    },
                    "YoutubePlayer.html#id": {
                      "ref": "YoutubePlayer.html#id",
                      "tf": 16.666666666666664
                    },
                    "YoutubePlayer.html#.instance": {
                      "ref": "YoutubePlayer.html#.instance",
                      "tf": 16.666666666666664
                    },
                    "Anime.html#id": {
                      "ref": "Anime.html#id",
                      "tf": 16.666666666666664
                    },
                    "Episode.html#episodeId": {
                      "ref": "Episode.html#episodeId",
                      "tf": 7.142857142857142
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
                "DownloadEpisode.html#download": {
                  "ref": "DownloadEpisode.html#download",
                  "tf": 33.33333333333333
                },
                "VideoPlayer.html#prefix": {
                  "ref": "VideoPlayer.html#prefix",
                  "tf": 16.666666666666664
                },
                "VideoPlayer.html#autoDownload": {
                  "ref": "VideoPlayer.html#autoDownload",
                  "tf": 16.666666666666664
                },
                "VideoPlayer.html#hasPrefix": {
                  "ref": "VideoPlayer.html#hasPrefix",
                  "tf": 43.33333333333333
                },
                "VideoPlayer.html#.getPlayer": {
                  "ref": "VideoPlayer.html#.getPlayer",
                  "tf": 33.33333333333333
                },
                "YoutubePlayer.html#prefix": {
                  "ref": "YoutubePlayer.html#prefix",
                  "tf": 16.666666666666664
                },
                "YoutubePlayer.html#autoDownload": {
                  "ref": "YoutubePlayer.html#autoDownload",
                  "tf": 16.666666666666664
                },
                "YoutubePlayer.html#hasPrefix": {
                  "ref": "YoutubePlayer.html#hasPrefix",
                  "tf": 43.33333333333333
                },
                "YoutubePlayer.html#getInfo": {
                  "ref": "YoutubePlayer.html#getInfo",
                  "tf": 33.33333333333333
                },
                "Episode.html#getUrlByPlayer": {
                  "ref": "Episode.html#getUrlByPlayer",
                  "tf": 12.5
                }
              }
            },
            "i": {
              "docs": {
                "Anime.html#thumbnailLink": {
                  "ref": "Anime.html#thumbnailLink",
                  "tf": 16.666666666666664
                },
                "Episode.html#posterLink": {
                  "ref": "Episode.html#posterLink",
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
                    "Anime.html": {
                      "ref": "Anime.html",
                      "tf": 8.333333333333332
                    },
                    "Anime.html#updateJson": {
                      "ref": "Anime.html#updateJson",
                      "tf": 7.142857142857142
                    },
                    "Episode.html#setLocalPath": {
                      "ref": "Episode.html#setLocalPath",
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
                              "Anime.html#updateJson": {
                                "ref": "Anime.html#updateJson",
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
                    "DownloadEpisode.html#player": {
                      "ref": "DownloadEpisode.html#player",
                      "tf": 10
                    },
                    "VideoPlayer.html": {
                      "ref": "VideoPlayer.html",
                      "tf": 12.5
                    },
                    "VideoPlayer.html#download": {
                      "ref": "VideoPlayer.html#download",
                      "tf": 8.333333333333332
                    },
                    "VideoPlayer.html#.getVideoPlayerById": {
                      "ref": "VideoPlayer.html#.getVideoPlayerById",
                      "tf": 12.5
                    },
                    "YoutubePlayer.html": {
                      "ref": "YoutubePlayer.html",
                      "tf": 14.285714285714285
                    },
                    "YoutubePlayer.html#download": {
                      "ref": "YoutubePlayer.html#download",
                      "tf": 12.5
                    },
                    "YoutubePlayer.html#getInfo": {
                      "ref": "YoutubePlayer.html#getInfo",
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
                            "VideoPlayer.html": {
                              "ref": "VideoPlayer.html",
                              "tf": 1900
                            },
                            "VideoPlayer.html#.list": {
                              "ref": "VideoPlayer.html#.list",
                              "tf": 25
                            },
                            "VideoPlayer.html#name": {
                              "ref": "VideoPlayer.html#name",
                              "tf": 25
                            },
                            "VideoPlayer.html#isNatif": {
                              "ref": "VideoPlayer.html#isNatif",
                              "tf": 10
                            },
                            "VideoPlayer.html#id": {
                              "ref": "VideoPlayer.html#id",
                              "tf": 16.666666666666664
                            },
                            "VideoPlayer.html#toPublic": {
                              "ref": "VideoPlayer.html#toPublic",
                              "tf": 7.142857142857142
                            },
                            "VideoPlayer.html#.getPlayer": {
                              "ref": "VideoPlayer.html#.getPlayer",
                              "tf": 33.33333333333333
                            },
                            "VideoPlayer.html#.getVideoPlayerById": {
                              "ref": "VideoPlayer.html#.getVideoPlayerById",
                              "tf": 25
                            },
                            "YoutubePlayer.html#name": {
                              "ref": "YoutubePlayer.html#name",
                              "tf": 25
                            },
                            "YoutubePlayer.html#isNatif": {
                              "ref": "YoutubePlayer.html#isNatif",
                              "tf": 10
                            },
                            "YoutubePlayer.html#id": {
                              "ref": "YoutubePlayer.html#id",
                              "tf": 16.666666666666664
                            },
                            "YoutubePlayer.html#toPublic": {
                              "ref": "YoutubePlayer.html#toPublic",
                              "tf": 7.142857142857142
                            },
                            "Episode.html#getUrlByPlayer": {
                              "ref": "Episode.html#getUrlByPlayer",
                              "tf": 12.5
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
                                                  "DownloadEpisode.html": {
                                                    "ref": "DownloadEpisode.html",
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
                                          "VideoPlayer.html#.list": {
                                            "ref": "VideoPlayer.html#.list",
                                            "tf": 1150
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
                                                "VideoPlayer.html#.getPlayer": {
                                                  "ref": "VideoPlayer.html#.getPlayer",
                                                  "tf": 1150
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
                                                                      "VideoPlayer.html#.getVideoPlayerById": {
                                                                        "ref": "VideoPlayer.html#.getVideoPlayerById",
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
                                        "VideoPlayer.html#name": {
                                          "ref": "VideoPlayer.html#name",
                                          "tf": 1150
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
                                                "VideoPlayer.html#isNatif": {
                                                  "ref": "VideoPlayer.html#isNatif",
                                                  "tf": 1150
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
                                      "VideoPlayer.html#id": {
                                        "ref": "VideoPlayer.html#id",
                                        "tf": 1150
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
                                              "VideoPlayer.html#prefix": {
                                                "ref": "VideoPlayer.html#prefix",
                                                "tf": 1150
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
                                                  "VideoPlayer.html#downloadable": {
                                                    "ref": "VideoPlayer.html#downloadable",
                                                    "tf": 1150
                                                  },
                                                  "VideoPlayer.html#download": {
                                                    "ref": "VideoPlayer.html#download",
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
                                                          "VideoPlayer.html#autoDownload": {
                                                            "ref": "VideoPlayer.html#autoDownload",
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
                                              "VideoPlayer.html#toPublic": {
                                                "ref": "VideoPlayer.html#toPublic",
                                                "tf": 1150
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
                                                                      "VideoPlayer.html#_dispatchOnComplete": {
                                                                        "ref": "VideoPlayer.html#_dispatchOnComplete",
                                                                        "tf": 1150
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
                                                                        "VideoPlayer.html#_dispatchOnProgress": {
                                                                          "ref": "VideoPlayer.html#_dispatchOnProgress",
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
                                                                  "VideoPlayer.html#_dispatchOnError": {
                                                                    "ref": "VideoPlayer.html#_dispatchOnError",
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
                                                    "VideoPlayer.html#hasPrefix": {
                                                      "ref": "VideoPlayer.html#hasPrefix",
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
                                                                  "DownloadEpisode.html#.list": {
                                                                    "ref": "DownloadEpisode.html#.list",
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
                                                          "VideoPlayer.html#.list": {
                                                            "ref": "VideoPlayer.html#.list",
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
                                                "VideoPlayer.html#prefix": {
                                                  "ref": "VideoPlayer.html#prefix",
                                                  "tf": 50
                                                },
                                                "YoutubePlayer.html#prefix": {
                                                  "ref": "YoutubePlayer.html#prefix",
                                                  "tf": 50
                                                },
                                                "Episode.html#links": {
                                                  "ref": "Episode.html#links",
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
                                              "Anime.html#.list": {
                                                "ref": "Anime.html#.list",
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
                                                  "Anime.html#episodes": {
                                                    "ref": "Anime.html#episodes",
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
                    "VideoPlayer.html#isNatif": {
                      "ref": "VideoPlayer.html#isNatif",
                      "tf": 10
                    },
                    "YoutubePlayer.html#isNatif": {
                      "ref": "YoutubePlayer.html#isNatif",
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
                                  "VideoPlayer.html#autoDownload": {
                                    "ref": "VideoPlayer.html#autoDownload",
                                    "tf": 700
                                  },
                                  "YoutubePlayer.html#autoDownload": {
                                    "ref": "YoutubePlayer.html#autoDownload",
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
            "y": {
              "docs": {},
              "n": {
                "docs": {},
                "c": {
                  "docs": {
                    "VideoPlayer.html#download": {
                      "ref": "VideoPlayer.html#download",
                      "tf": 8.333333333333332
                    },
                    "YoutubePlayer.html#download": {
                      "ref": "YoutubePlayer.html#download",
                      "tf": 12.5
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
                  "Anime.html": {
                    "ref": "Anime.html",
                    "tf": 1916.6666666666667
                  },
                  "Anime.html#.list": {
                    "ref": "Anime.html#.list",
                    "tf": 25
                  },
                  "Anime.html#.publicList": {
                    "ref": "Anime.html#.publicList",
                    "tf": 10
                  },
                  "Anime.html#jsonObject": {
                    "ref": "Anime.html#jsonObject",
                    "tf": 12.5
                  },
                  "Anime.html#name": {
                    "ref": "Anime.html#name",
                    "tf": 25
                  },
                  "Anime.html#thumbnailLink": {
                    "ref": "Anime.html#thumbnailLink",
                    "tf": 16.666666666666664
                  },
                  "Anime.html#id": {
                    "ref": "Anime.html#id",
                    "tf": 16.666666666666664
                  },
                  "Anime.html#path": {
                    "ref": "Anime.html#path",
                    "tf": 12.5
                  },
                  "Anime.html#toPublic": {
                    "ref": "Anime.html#toPublic",
                    "tf": 7.142857142857142
                  },
                  "Anime.html#toAnimeConfig": {
                    "ref": "Anime.html#toAnimeConfig",
                    "tf": 16.666666666666664
                  },
                  "Episode.html#anime": {
                    "ref": "Episode.html#anime",
                    "tf": 741.6666666666666
                  },
                  "Episode.html#setLocalPath": {
                    "ref": "Episode.html#setLocalPath",
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
                              "Anime.html#.list": {
                                "ref": "Anime.html#.list",
                                "tf": 1150
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
                                          "Anime.html#.publicList": {
                                            "ref": "Anime.html#.publicList",
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
                                          "Anime.html#jsonObject": {
                                            "ref": "Anime.html#jsonObject",
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
                    },
                    "n": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "Anime.html#name": {
                              "ref": "Anime.html#name",
                              "tf": 1150
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
                                                "Anime.html#thumbnailLink": {
                                                  "ref": "Anime.html#thumbnailLink",
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
                                  "Anime.html#toPublic": {
                                    "ref": "Anime.html#toPublic",
                                    "tf": 1150
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
                                                "Anime.html#toAnimeConfig": {
                                                  "ref": "Anime.html#toAnimeConfig",
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
                                "Anime.html#_path": {
                                  "ref": "Anime.html#_path",
                                  "tf": 1150
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
                                  "Anime.html#episodes": {
                                    "ref": "Anime.html#episodes",
                                    "tf": 1150
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
                          "Anime.html#id": {
                            "ref": "Anime.html#id",
                            "tf": 1150
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
                              "Anime.html#path": {
                                "ref": "Anime.html#path",
                                "tf": 1150
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
                                                  "Anime.html#getEpisodeById": {
                                                    "ref": "Anime.html#getEpisodeById",
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
                                          "Anime.html#updateJson": {
                                            "ref": "Anime.html#updateJson",
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
                  },
                  "'": {
                    "docs": {
                      "Anime.html#_path": {
                        "ref": "Anime.html#_path",
                        "tf": 16.666666666666664
                      },
                      "Anime.html#getEpisodeById": {
                        "ref": "Anime.html#getEpisodeById",
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
                                "Anime.html#updateJson": {
                                  "ref": "Anime.html#updateJson",
                                  "tf": 7.142857142857142
                                },
                                "Anime.html#toAnimeConfig": {
                                  "ref": "Anime.html#toAnimeConfig",
                                  "tf": 66.66666666666666
                                }
                              }
                            }
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
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {
                  "DownloadEpisode.html#episode": {
                    "ref": "DownloadEpisode.html#episode",
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
                    "VideoPlayer.html#isNatif": {
                      "ref": "VideoPlayer.html#isNatif",
                      "tf": 10
                    },
                    "YoutubePlayer.html#isNatif": {
                      "ref": "YoutubePlayer.html#isNatif",
                      "tf": 10
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
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
                      "DownloadEpisode.html#id": {
                        "ref": "DownloadEpisode.html#id",
                        "tf": 33.33333333333333
                      },
                      "DownloadEpisode.html#progress": {
                        "ref": "DownloadEpisode.html#progress",
                        "tf": 33.33333333333333
                      },
                      "Anime.html#id": {
                        "ref": "Anime.html#id",
                        "tf": 33.33333333333333
                      },
                      "Episode.html#episodeId": {
                        "ref": "Episode.html#episodeId",
                        "tf": 33.33333333333333
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "VideoPlayer.html#name": {
                    "ref": "VideoPlayer.html#name",
                    "tf": 708.3333333333334
                  },
                  "YoutubePlayer.html#name": {
                    "ref": "YoutubePlayer.html#name",
                    "tf": 708.3333333333334
                  },
                  "Anime.html#name": {
                    "ref": "Anime.html#name",
                    "tf": 725
                  },
                  "Episode.html#name": {
                    "ref": "Episode.html#name",
                    "tf": 725
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
                        "DownloadEpisode.html#isReady": {
                          "ref": "DownloadEpisode.html#isReady",
                          "tf": 25
                        },
                        "DownloadEpisode.html#isDownloading": {
                          "ref": "DownloadEpisode.html#isDownloading",
                          "tf": 33.33333333333333
                        },
                        "VideoPlayer.html#isNatif": {
                          "ref": "VideoPlayer.html#isNatif",
                          "tf": 33.33333333333333
                        },
                        "VideoPlayer.html#downloadable": {
                          "ref": "VideoPlayer.html#downloadable",
                          "tf": 50
                        },
                        "VideoPlayer.html#autoDownload": {
                          "ref": "VideoPlayer.html#autoDownload",
                          "tf": 50
                        },
                        "VideoPlayer.html#hasPrefix": {
                          "ref": "VideoPlayer.html#hasPrefix",
                          "tf": 33.33333333333333
                        },
                        "YoutubePlayer.html#isNatif": {
                          "ref": "YoutubePlayer.html#isNatif",
                          "tf": 33.33333333333333
                        },
                        "YoutubePlayer.html#downloadable": {
                          "ref": "YoutubePlayer.html#downloadable",
                          "tf": 50
                        },
                        "YoutubePlayer.html#autoDownload": {
                          "ref": "YoutubePlayer.html#autoDownload",
                          "tf": 50
                        },
                        "YoutubePlayer.html#hasPrefix": {
                          "ref": "YoutubePlayer.html#hasPrefix",
                          "tf": 33.33333333333333
                        },
                        "Episode.html#isLocal": {
                          "ref": "Episode.html#isLocal",
                          "tf": 50
                        },
                        "Episode.html#hasPoster": {
                          "ref": "Episode.html#hasPoster",
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
                        "Episode.html#episodeId": {
                          "ref": "Episode.html#episodeId",
                          "tf": 7.142857142857142
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
                                    "DownloadEpisode.html#_setLocalPath": {
                                      "ref": "DownloadEpisode.html#_setLocalPath",
                                      "tf": 683.3333333333334
                                    }
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
                      "DownloadEpisode.html#_setEvents": {
                        "ref": "DownloadEpisode.html#_setEvents",
                        "tf": 683.3333333333334
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
                                              "VideoPlayer.html#_dispatchOnComplete": {
                                                "ref": "VideoPlayer.html#_dispatchOnComplete",
                                                "tf": 675
                                              },
                                              "YoutubePlayer.html#_dispatchOnComplete": {
                                                "ref": "YoutubePlayer.html#_dispatchOnComplete",
                                                "tf": 675
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
                                                "VideoPlayer.html#_dispatchOnProgress": {
                                                  "ref": "VideoPlayer.html#_dispatchOnProgress",
                                                  "tf": 675
                                                },
                                                "YoutubePlayer.html#_dispatchOnProgress": {
                                                  "ref": "YoutubePlayer.html#_dispatchOnProgress",
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
                                          "VideoPlayer.html#_dispatchOnError": {
                                            "ref": "VideoPlayer.html#_dispatchOnError",
                                            "tf": 675
                                          },
                                          "YoutubePlayer.html#_dispatchOnError": {
                                            "ref": "YoutubePlayer.html#_dispatchOnError",
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
          },
          "p": {
            "docs": {},
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "Anime.html#_path": {
                      "ref": "Anime.html#_path",
                      "tf": 675
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
                      "YoutubePlayer.html": {
                        "ref": "YoutubePlayer.html",
                        "tf": 7.142857142857142
                      },
                      "YoutubePlayer.html#download": {
                        "ref": "YoutubePlayer.html#download",
                        "tf": 12.5
                      },
                      "YoutubePlayer.html#getInfo": {
                        "ref": "YoutubePlayer.html#getInfo",
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
                                "YoutubePlayer.html": {
                                  "ref": "YoutubePlayer.html",
                                  "tf": 1900
                                }
                              },
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "#": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "m": {
                                          "docs": {
                                            "YoutubePlayer.html#name": {
                                              "ref": "YoutubePlayer.html#name",
                                              "tf": 1150
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
                                                    "YoutubePlayer.html#isNatif": {
                                                      "ref": "YoutubePlayer.html#isNatif",
                                                      "tf": 1150
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
                                          "YoutubePlayer.html#id": {
                                            "ref": "YoutubePlayer.html#id",
                                            "tf": 1150
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
                                                  "YoutubePlayer.html#prefix": {
                                                    "ref": "YoutubePlayer.html#prefix",
                                                    "tf": 1150
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
                                                      "YoutubePlayer.html#downloadable": {
                                                        "ref": "YoutubePlayer.html#downloadable",
                                                        "tf": 1150
                                                      },
                                                      "YoutubePlayer.html#download": {
                                                        "ref": "YoutubePlayer.html#download",
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
                                                              "YoutubePlayer.html#autoDownload": {
                                                                "ref": "YoutubePlayer.html#autoDownload",
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
                                                  "YoutubePlayer.html#toPublic": {
                                                    "ref": "YoutubePlayer.html#toPublic",
                                                    "tf": 1150
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
                                                                          "YoutubePlayer.html#_dispatchOnComplete": {
                                                                            "ref": "YoutubePlayer.html#_dispatchOnComplete",
                                                                            "tf": 1150
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
                                                                            "YoutubePlayer.html#_dispatchOnProgress": {
                                                                              "ref": "YoutubePlayer.html#_dispatchOnProgress",
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
                                                                      "YoutubePlayer.html#_dispatchOnError": {
                                                                        "ref": "YoutubePlayer.html#_dispatchOnError",
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
                                                        "YoutubePlayer.html#hasPrefix": {
                                                          "ref": "YoutubePlayer.html#hasPrefix",
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
                                                    "YoutubePlayer.html#getInfo": {
                                                      "ref": "YoutubePlayer.html#getInfo",
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
                                  },
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
                                              "YoutubePlayer.html#.instance": {
                                                "ref": "YoutubePlayer.html#.instance",
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
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 609
    },
    "corpusTokens": [
      "_dispatchoncomplet",
      "_dispatchonerror",
      "_dispatchonprogress",
      "_path",
      "_setev",
      "_setlocalpath",
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
      "array.&lt;anime&gt",
      "array.&lt;downloadepisode&gt",
      "array.&lt;episode&gt",
      "array.&lt;string&gt",
      "array.&lt;videoplayer&gt",
      "async",
      "autodownload",
      "avail",
      "between",
      "boolean",
      "call",
      "class",
      "client",
      "compar",
      "complet",
      "correspond",
      "corrispond",
      "data",
      "default",
      "defin",
      "document",
      "done",
      "download",
      "downloadepisod",
      "downloadepisode#_setev",
      "downloadepisode#_setlocalpath",
      "downloadepisode#download",
      "downloadepisode#episod",
      "downloadepisode#id",
      "downloadepisode#isdownload",
      "downloadepisode#isreadi",
      "downloadepisode#play",
      "downloadepisode#progress",
      "downloadepisode.getfromepisod",
      "downloadepisode.list",
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
      "episodeconfig",
      "episodeid",
      "episode|nul",
      "epsod",
      "err",
      "error",
      "event",
      "eventemitt",
      "fetch",
      "file",
      "filenam",
      "fire",
      "first",
      "folder",
      "format",
      "func",
      "function",
      "gener",
      "get",
      "getepisodebyid",
      "getfromepisod",
      "getinfo",
      "getplay",
      "geturlbyplay",
      "getvideoplayerbyid",
      "give",
      "given",
      "global",
      "handl",
      "haspost",
      "hasprefix",
      "helper",
      "id",
      "index",
      "index.json",
      "info",
      "inform",
      "instanc",
      "isdownload",
      "isloc",
      "isnatif",
      "isreadi",
      "it'",
      "itself",
      "json",
      "jsonobject",
      "jsonobject#load",
      "jsonobject#loadsync",
      "jsonobject#sav",
      "launch",
      "link",
      "list",
      "list:class",
      "load",
      "loadsync",
      "loadyoutubeinfo",
      "local",
      "localfilewithoutextens",
      "locallink",
      "lt;async&gt",
      "lt;privat",
      "lt;private&gt",
      "lt;protected&gt",
      "lt;readonly&gt",
      "lt;static",
      "lt;static&gt",
      "map",
      "match",
      "max",
      "member",
      "name",
      "number",
      "object",
      "on",
      "ongo",
      "order",
      "path",
      "path.join($this.anime.path",
      "pathtofil",
      "player",
      "poster",
      "posterlink",
      "prefix",
      "prefix(",
      "progress",
      "promise.&lt;episodeinfo&gt",
      "promise.&lt;void&gt",
      "promise.&lt;ytdl.videoinfo&gt",
      "public",
      "publicanim",
      "publicepisod",
      "publiclist",
      "publicvideoplay",
      "readi",
      "readm",
      "readonly&gt",
      "recdownloaddata",
      "refer",
      "return",
      "save",
      "see",
      "server",
      "set",
      "setlocalpath",
      "store",
      "stream",
      "streamanim",
      "string",
      "tell",
      "there'",
      "this.episodeid",
      "thumbnaillink",
      "toanimeconfig",
      "toepisodeconfig",
      "topubl",
      "true",
      "uniqu",
      "updat",
      "updatejson",
      "uri",
      "url",
      "us",
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
      "want",
      "wront",
      "youtub",
      "youtubeplay",
      "youtubeplayer#_dispatchoncomplet",
      "youtubeplayer#_dispatchonerror",
      "youtubeplayer#_dispatchonprogress",
      "youtubeplayer#autodownload",
      "youtubeplayer#download",
      "youtubeplayer#getinfo",
      "youtubeplayer#hasprefix",
      "youtubeplayer#id",
      "youtubeplayer#isnatif",
      "youtubeplayer#nam",
      "youtubeplayer#prefix",
      "youtubeplayer#topubl",
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
    "JsonObject.html": {
      "id": "JsonObject.html",
      "kind": "class",
      "title": "JsonObject",
      "longname": "JsonObject",
      "name": "JsonObject",
      "tags": "JsonObject",
      "summary": "",
      "description": "Load and save a json file",
      "body": ""
    },
    "JsonObject.html#loadSync": {
      "id": "JsonObject.html#loadSync",
      "kind": "function",
      "title": "loadSync( [ func ] )",
      "longname": "JsonObject#loadSync",
      "name": "loadSync",
      "tags": "JsonObject#loadSync loadSync",
      "summary": "",
      "description": ""
    },
    "JsonObject.html#load": {
      "id": "JsonObject.html#load",
      "kind": "function",
      "title": "load()",
      "longname": "JsonObject#load",
      "name": "load",
      "tags": "JsonObject#load load",
      "summary": "",
      "description": ""
    },
    "JsonObject.html#save": {
      "id": "JsonObject.html#save",
      "kind": "function",
      "title": "save() → {Promise.&lt;void&gt;}",
      "longname": "JsonObject#save",
      "name": "save",
      "tags": "JsonObject#save save",
      "summary": "",
      "description": ""
    },
    "DownloadEpisode.html": {
      "id": "DownloadEpisode.html",
      "kind": "class",
      "title": "DownloadEpisode",
      "longname": "DownloadEpisode",
      "name": "DownloadEpisode",
      "tags": "DownloadEpisode",
      "summary": "",
      "description": "A class used to handle the events of VideoPlayer.download. Ensure that there's only one download max by episode",
      "body": ""
    },
    "DownloadEpisode.html#.list": {
      "id": "DownloadEpisode.html#.list",
      "kind": "member",
      "title": "&lt;static&gt; list :Array.&lt;DownloadEpisode&gt;",
      "longname": "DownloadEpisode.list",
      "name": "list",
      "tags": "DownloadEpisode.list list",
      "summary": "",
      "description": ""
    },
    "DownloadEpisode.html#episode": {
      "id": "DownloadEpisode.html#episode",
      "kind": "member",
      "title": "&lt;readonly&gt; episode :Episode",
      "longname": "DownloadEpisode#episode",
      "name": "episode",
      "tags": "DownloadEpisode#episode episode",
      "summary": "",
      "description": "The episode we want to download"
    },
    "DownloadEpisode.html#id": {
      "id": "DownloadEpisode.html#id",
      "kind": "member",
      "title": "&lt;readonly&gt; id :number",
      "longname": "DownloadEpisode#id",
      "name": "id",
      "tags": "DownloadEpisode#id id",
      "summary": "",
      "description": "The unique id of the DownloadEpisode instance"
    },
    "DownloadEpisode.html#player": {
      "id": "DownloadEpisode.html#player",
      "kind": "member",
      "title": "&lt;private, readonly&gt; player :Object",
      "longname": "DownloadEpisode#player",
      "name": "player",
      "tags": "DownloadEpisode#player player",
      "summary": "",
      "description": "The player used to download the video (epsode)"
    },
    "DownloadEpisode.html#isReady": {
      "id": "DownloadEpisode.html#isReady",
      "kind": "member",
      "title": "&lt;private, readonly&gt; isReady :boolean",
      "longname": "DownloadEpisode#isReady",
      "name": "isReady",
      "tags": "DownloadEpisode#isReady isReady",
      "summary": "",
      "description": "If the download is done and the json saved"
    },
    "DownloadEpisode.html#isDownloading": {
      "id": "DownloadEpisode.html#isDownloading",
      "kind": "member",
      "title": "&lt;readonly&gt; isDownloading :boolean",
      "longname": "DownloadEpisode#isDownloading",
      "name": "isDownloading",
      "tags": "DownloadEpisode#isDownloading isDownloading",
      "summary": "",
      "description": "If the download is ongoing"
    },
    "DownloadEpisode.html#progress": {
      "id": "DownloadEpisode.html#progress",
      "kind": "member",
      "title": "&lt;readonly&gt; progress :number",
      "longname": "DownloadEpisode#progress",
      "name": "progress",
      "tags": "DownloadEpisode#progress progress",
      "summary": "",
      "description": "The progress of the download"
    },
    "DownloadEpisode.html#_setLocalPath": {
      "id": "DownloadEpisode.html#_setLocalPath",
      "kind": "function",
      "title": "&lt;private&gt; _setLocalPath( pathToFile )",
      "longname": "DownloadEpisode#_setLocalPath",
      "name": "_setLocalPath",
      "tags": "DownloadEpisode#_setLocalPath _setLocalPath",
      "summary": "",
      "description": "Call Episode#setLocalPath and set itself ready when it's done"
    },
    "DownloadEpisode.html#download": {
      "id": "DownloadEpisode.html#download",
      "kind": "function",
      "title": "download( url, format )",
      "longname": "DownloadEpisode#download",
      "name": "download",
      "tags": "DownloadEpisode#download download",
      "summary": "",
      "description": "Launch the download"
    },
    "DownloadEpisode.html#_setEvents": {
      "id": "DownloadEpisode.html#_setEvents",
      "kind": "function",
      "title": "&lt;private&gt; _setEvents( emitter )",
      "longname": "DownloadEpisode#_setEvents",
      "name": "_setEvents",
      "tags": "DownloadEpisode#_setEvents _setEvents",
      "summary": "",
      "description": "Set the events of the emitter"
    },
    "DownloadEpisode.html#.getFromEpisode": {
      "id": "DownloadEpisode.html#.getFromEpisode",
      "kind": "function",
      "title": "&lt;static&gt; getFromEpisode( episode )",
      "longname": "DownloadEpisode.getFromEpisode",
      "name": "getFromEpisode",
      "tags": "DownloadEpisode.getFromEpisode getFromEpisode",
      "summary": "",
      "description": ""
    },
    "VideoPlayer.html": {
      "id": "VideoPlayer.html",
      "kind": "class",
      "title": "VideoPlayer",
      "longname": "VideoPlayer",
      "name": "VideoPlayer",
      "tags": "VideoPlayer",
      "summary": "",
      "description": "A class used to download a video.",
      "body": ""
    },
    "VideoPlayer.html#.list": {
      "id": "VideoPlayer.html#.list",
      "kind": "member",
      "title": "&lt;static, readonly&gt; list :Array.&lt;VideoPlayer&gt;",
      "longname": "VideoPlayer.list",
      "name": "list",
      "tags": "VideoPlayer.list list",
      "summary": "",
      "description": "The list of VideoPlayer"
    },
    "VideoPlayer.html#name": {
      "id": "VideoPlayer.html#name",
      "kind": "member",
      "title": "&lt;readonly&gt; name :string",
      "longname": "VideoPlayer#name",
      "name": "name",
      "tags": "VideoPlayer#name name",
      "summary": "",
      "description": "The name of the videoPlayer"
    },
    "VideoPlayer.html#isNatif": {
      "id": "VideoPlayer.html#isNatif",
      "kind": "member",
      "title": "&lt;readonly&gt; isNatif :boolean",
      "longname": "VideoPlayer#isNatif",
      "name": "isNatif",
      "tags": "VideoPlayer#isNatif isNatif",
      "summary": "",
      "description": "If true, the VideoPlayer wront be available for edit"
    },
    "VideoPlayer.html#prefix": {
      "id": "VideoPlayer.html#prefix",
      "kind": "member",
      "title": "prefix :Array.&lt;string&gt;",
      "longname": "VideoPlayer#prefix",
      "name": "prefix",
      "tags": "VideoPlayer#prefix prefix",
      "summary": "",
      "description": "The prefix(s) for matching the url"
    },
    "VideoPlayer.html#downloadable": {
      "id": "VideoPlayer.html#downloadable",
      "kind": "member",
      "title": "downloadable :boolean",
      "longname": "VideoPlayer#downloadable",
      "name": "downloadable",
      "tags": "VideoPlayer#downloadable downloadable",
      "summary": "",
      "description": "Tell if the server can download"
    },
    "VideoPlayer.html#autoDownload": {
      "id": "VideoPlayer.html#autoDownload",
      "kind": "member",
      "title": "autoDownload :boolean",
      "longname": "VideoPlayer#autoDownload",
      "name": "autoDownload",
      "tags": "VideoPlayer#autoDownload autoDownload",
      "summary": "",
      "description": "Tell if the url used for downloading is an url in Episode.links"
    },
    "VideoPlayer.html#id": {
      "id": "VideoPlayer.html#id",
      "kind": "member",
      "title": "&lt;readonly&gt; id",
      "longname": "VideoPlayer#id",
      "name": "id",
      "tags": "VideoPlayer#id id",
      "summary": "",
      "description": "The unique id of the videoPlayer"
    },
    "VideoPlayer.html#toPublic": {
      "id": "VideoPlayer.html#toPublic",
      "kind": "function",
      "title": "toPublic() → {PublicVideoPlayer}",
      "longname": "VideoPlayer#toPublic",
      "name": "toPublic",
      "tags": "VideoPlayer#toPublic toPublic",
      "summary": "",
      "description": "Return the public information of the VideoPlayer (= the informations to give to the client)"
    },
    "VideoPlayer.html#_dispatchOnComplete": {
      "id": "VideoPlayer.html#_dispatchOnComplete",
      "kind": "function",
      "title": "&lt;protected&gt; _dispatchOnComplete( emitter, recDownloadData )",
      "longname": "VideoPlayer#_dispatchOnComplete",
      "name": "_dispatchOnComplete",
      "tags": "VideoPlayer#_dispatchOnComplete _dispatchOnComplete",
      "summary": "",
      "description": "Fire the event \"complete\" on the emitter"
    },
    "VideoPlayer.html#_dispatchOnProgress": {
      "id": "VideoPlayer.html#_dispatchOnProgress",
      "kind": "function",
      "title": "&lt;protected&gt; _dispatchOnProgress( emitter, recDownloadData )",
      "longname": "VideoPlayer#_dispatchOnProgress",
      "name": "_dispatchOnProgress",
      "tags": "VideoPlayer#_dispatchOnProgress _dispatchOnProgress",
      "summary": "",
      "description": "Fire the event \"progress\" on the emitter"
    },
    "VideoPlayer.html#_dispatchOnError": {
      "id": "VideoPlayer.html#_dispatchOnError",
      "kind": "function",
      "title": "&lt;protected&gt; _dispatchOnError( emitter, err )",
      "longname": "VideoPlayer#_dispatchOnError",
      "name": "_dispatchOnError",
      "tags": "VideoPlayer#_dispatchOnError _dispatchOnError",
      "summary": "",
      "description": "Fire the event \"error\" on the emitter"
    },
    "VideoPlayer.html#download": {
      "id": "VideoPlayer.html#download",
      "kind": "function",
      "title": "download( downloadUrl, format, fileName ) → {EventEmitter}",
      "longname": "VideoPlayer#download",
      "name": "download",
      "tags": "VideoPlayer#download download",
      "summary": "",
      "description": "Download the video using the given link (async)"
    },
    "VideoPlayer.html#hasPrefix": {
      "id": "VideoPlayer.html#hasPrefix",
      "kind": "function",
      "title": "hasPrefix( url ) → {boolean}",
      "longname": "VideoPlayer#hasPrefix",
      "name": "hasPrefix",
      "tags": "VideoPlayer#hasPrefix hasPrefix",
      "summary": "",
      "description": "Compare the url with the prefix and return true if the url match a prefix in the prefix list"
    },
    "VideoPlayer.html#.getPlayer": {
      "id": "VideoPlayer.html#.getPlayer",
      "kind": "function",
      "title": "&lt;static&gt; getPlayer( url ) → {VideoPlayer}",
      "longname": "VideoPlayer.getPlayer",
      "name": "getPlayer",
      "tags": "VideoPlayer.getPlayer getPlayer",
      "summary": "",
      "description": "Return the first Videoplayer with its prefix matching the url"
    },
    "VideoPlayer.html#.getVideoPlayerById": {
      "id": "VideoPlayer.html#.getVideoPlayerById",
      "kind": "function",
      "title": "&lt;static&gt; getVideoPlayerById( id ) → {VideoPlayer}",
      "longname": "VideoPlayer.getVideoPlayerById",
      "name": "getVideoPlayerById",
      "tags": "VideoPlayer.getVideoPlayerById getVideoPlayerById",
      "summary": "",
      "description": "Return the video player corrisponding"
    },
    "YoutubePlayer.html": {
      "id": "YoutubePlayer.html",
      "kind": "class",
      "title": "YoutubePlayer",
      "longname": "YoutubePlayer",
      "name": "YoutubePlayer",
      "tags": "YoutubePlayer",
      "summary": "",
      "description": "A class used to download a youtube video. It also get the video info.",
      "body": ""
    },
    "YoutubePlayer.html#name": {
      "id": "YoutubePlayer.html#name",
      "kind": "member",
      "title": "&lt;readonly&gt; name :string",
      "longname": "YoutubePlayer#name",
      "name": "name",
      "tags": "YoutubePlayer#name name",
      "summary": "",
      "description": "The name of the videoPlayer"
    },
    "YoutubePlayer.html#isNatif": {
      "id": "YoutubePlayer.html#isNatif",
      "kind": "member",
      "title": "&lt;readonly&gt; isNatif :boolean",
      "longname": "YoutubePlayer#isNatif",
      "name": "isNatif",
      "tags": "YoutubePlayer#isNatif isNatif",
      "summary": "",
      "description": "If true, the VideoPlayer wront be available for edit"
    },
    "YoutubePlayer.html#prefix": {
      "id": "YoutubePlayer.html#prefix",
      "kind": "member",
      "title": "prefix :Array.&lt;string&gt;",
      "longname": "YoutubePlayer#prefix",
      "name": "prefix",
      "tags": "YoutubePlayer#prefix prefix",
      "summary": "",
      "description": "The prefix(s) for matching the url"
    },
    "YoutubePlayer.html#downloadable": {
      "id": "YoutubePlayer.html#downloadable",
      "kind": "member",
      "title": "downloadable :boolean",
      "longname": "YoutubePlayer#downloadable",
      "name": "downloadable",
      "tags": "YoutubePlayer#downloadable downloadable",
      "summary": "",
      "description": "Tell if the server can download"
    },
    "YoutubePlayer.html#autoDownload": {
      "id": "YoutubePlayer.html#autoDownload",
      "kind": "member",
      "title": "autoDownload :boolean",
      "longname": "YoutubePlayer#autoDownload",
      "name": "autoDownload",
      "tags": "YoutubePlayer#autoDownload autoDownload",
      "summary": "",
      "description": "Tell if the url used for downloading is an url in Episode.links"
    },
    "YoutubePlayer.html#id": {
      "id": "YoutubePlayer.html#id",
      "kind": "member",
      "title": "&lt;readonly&gt; id",
      "longname": "YoutubePlayer#id",
      "name": "id",
      "tags": "YoutubePlayer#id id",
      "summary": "",
      "description": "The unique id of the videoPlayer"
    },
    "YoutubePlayer.html#.instance": {
      "id": "YoutubePlayer.html#.instance",
      "kind": "member",
      "title": "&lt;static, readonly&gt; instance",
      "longname": "YoutubePlayer.instance",
      "name": "instance",
      "tags": "YoutubePlayer.instance instance",
      "summary": "",
      "description": "Unique instance of the class"
    },
    "YoutubePlayer.html#toPublic": {
      "id": "YoutubePlayer.html#toPublic",
      "kind": "function",
      "title": "toPublic() → {PublicVideoPlayer}",
      "longname": "YoutubePlayer#toPublic",
      "name": "toPublic",
      "tags": "YoutubePlayer#toPublic toPublic",
      "summary": "",
      "description": "Return the public information of the VideoPlayer (= the informations to give to the client)"
    },
    "YoutubePlayer.html#_dispatchOnComplete": {
      "id": "YoutubePlayer.html#_dispatchOnComplete",
      "kind": "function",
      "title": "&lt;protected&gt; _dispatchOnComplete( emitter, recDownloadData )",
      "longname": "YoutubePlayer#_dispatchOnComplete",
      "name": "_dispatchOnComplete",
      "tags": "YoutubePlayer#_dispatchOnComplete _dispatchOnComplete",
      "summary": "",
      "description": "Fire the event \"complete\" on the emitter"
    },
    "YoutubePlayer.html#_dispatchOnProgress": {
      "id": "YoutubePlayer.html#_dispatchOnProgress",
      "kind": "function",
      "title": "&lt;protected&gt; _dispatchOnProgress( emitter, recDownloadData )",
      "longname": "YoutubePlayer#_dispatchOnProgress",
      "name": "_dispatchOnProgress",
      "tags": "YoutubePlayer#_dispatchOnProgress _dispatchOnProgress",
      "summary": "",
      "description": "Fire the event \"progress\" on the emitter"
    },
    "YoutubePlayer.html#_dispatchOnError": {
      "id": "YoutubePlayer.html#_dispatchOnError",
      "kind": "function",
      "title": "&lt;protected&gt; _dispatchOnError( emitter, err )",
      "longname": "YoutubePlayer#_dispatchOnError",
      "name": "_dispatchOnError",
      "tags": "YoutubePlayer#_dispatchOnError _dispatchOnError",
      "summary": "",
      "description": "Fire the event \"error\" on the emitter"
    },
    "YoutubePlayer.html#hasPrefix": {
      "id": "YoutubePlayer.html#hasPrefix",
      "kind": "function",
      "title": "hasPrefix( url ) → {boolean}",
      "longname": "YoutubePlayer#hasPrefix",
      "name": "hasPrefix",
      "tags": "YoutubePlayer#hasPrefix hasPrefix",
      "summary": "",
      "description": "Compare the url with the prefix and return true if the url match a prefix in the prefix list"
    },
    "YoutubePlayer.html#download": {
      "id": "YoutubePlayer.html#download",
      "kind": "function",
      "title": "download( downloadUrl, format, localFileWithoutExtension ) → {EventEmitter}",
      "longname": "YoutubePlayer#download",
      "name": "download",
      "tags": "YoutubePlayer#download download",
      "summary": "",
      "description": "Download the youtube video (async)"
    },
    "YoutubePlayer.html#getInfo": {
      "id": "YoutubePlayer.html#getInfo",
      "kind": "function",
      "title": "getInfo( url ) → {Promise.&lt;ytdl.videoInfo&gt;}",
      "longname": "YoutubePlayer#getInfo",
      "name": "getInfo",
      "tags": "YoutubePlayer#getInfo getInfo",
      "summary": "",
      "description": "Fetch the informations of the youtube video"
    },
    "Anime.html": {
      "id": "Anime.html",
      "kind": "class",
      "title": "Anime",
      "longname": "Anime",
      "name": "Anime",
      "tags": "Anime",
      "summary": "",
      "description": "Store the datas of an anime. Can update the index.json of the anime.",
      "body": ""
    },
    "Anime.html#.list": {
      "id": "Anime.html#.list",
      "kind": "member",
      "title": "&lt;static, readonly&gt; list :Array.&lt;Anime&gt;",
      "longname": "Anime.list",
      "name": "list",
      "tags": "Anime.list list",
      "summary": "",
      "description": "The list of Animes"
    },
    "Anime.html#.publicList": {
      "id": "Anime.html#.publicList",
      "kind": "member",
      "title": "&lt;static&gt; publicList",
      "longname": "Anime.publicList",
      "name": "publicList",
      "tags": "Anime.publicList publicList",
      "summary": "",
      "description": "The list of Animes mapped with their public informations"
    },
    "Anime.html#jsonObject": {
      "id": "Anime.html#jsonObject",
      "kind": "member",
      "title": "&lt;private, readonly&gt; jsonObject :JsonObject",
      "longname": "Anime#jsonObject",
      "name": "jsonObject",
      "tags": "Anime#jsonObject jsonObject",
      "summary": "",
      "description": "The json object of the anime. Used to store the datas in the index.json of the anime."
    },
    "Anime.html#name": {
      "id": "Anime.html#name",
      "kind": "member",
      "title": "name :string",
      "longname": "Anime#name",
      "name": "name",
      "tags": "Anime#name name",
      "summary": "",
      "description": "The name of the anime"
    },
    "Anime.html#thumbnailLink": {
      "id": "Anime.html#thumbnailLink",
      "kind": "member",
      "title": "thumbnailLink :string",
      "longname": "Anime#thumbnailLink",
      "name": "thumbnailLink",
      "tags": "Anime#thumbnailLink thumbnailLink",
      "summary": "",
      "description": "The uri of the anime poster"
    },
    "Anime.html#_path": {
      "id": "Anime.html#_path",
      "kind": "member",
      "title": "&lt;private, readonly&gt; _path :string",
      "longname": "Anime#_path",
      "name": "_path",
      "tags": "Anime#_path _path",
      "summary": "",
      "description": "The path to the anime's folder"
    },
    "Anime.html#episodes": {
      "id": "Anime.html#episodes",
      "kind": "member",
      "title": "episodes :Array.&lt;Episode&gt;",
      "longname": "Anime#episodes",
      "name": "episodes",
      "tags": "Anime#episodes episodes",
      "summary": "",
      "description": "The list of episodes"
    },
    "Anime.html#id": {
      "id": "Anime.html#id",
      "kind": "member",
      "title": "&lt;readonly&gt; id :number",
      "longname": "Anime#id",
      "name": "id",
      "tags": "Anime#id id",
      "summary": "",
      "description": "The unique id of the anime"
    },
    "Anime.html#path": {
      "id": "Anime.html#path",
      "kind": "member",
      "title": "&lt;readonly&gt; path",
      "longname": "Anime#path",
      "name": "path",
      "tags": "Anime#path path",
      "summary": "",
      "description": "Return the path to the anime folder"
    },
    "Anime.html#toPublic": {
      "id": "Anime.html#toPublic",
      "kind": "function",
      "title": "toPublic() → {PublicAnime}",
      "longname": "Anime#toPublic",
      "name": "toPublic",
      "tags": "Anime#toPublic toPublic",
      "summary": "",
      "description": "Return the public information of the anime (= the informations to give to the client)"
    },
    "Anime.html#getEpisodeById": {
      "id": "Anime.html#getEpisodeById",
      "kind": "function",
      "title": "getEpisodeById( episodeId ) → {Episode|null}",
      "longname": "Anime#getEpisodeById",
      "name": "getEpisodeById",
      "tags": "Anime#getEpisodeById getEpisodeById",
      "summary": "",
      "description": "Get an anime's Episode by its id"
    },
    "Anime.html#updateJson": {
      "id": "Anime.html#updateJson",
      "kind": "function",
      "title": "updateJson() → {Promise.&lt;void&gt;}",
      "longname": "Anime#updateJson",
      "name": "updateJson",
      "tags": "Anime#updateJson updateJson",
      "summary": "",
      "description": "Update the json by generating the AnimeConfig and getting the EpisodeConfig of all its episode"
    },
    "Anime.html#toAnimeConfig": {
      "id": "Anime.html#toAnimeConfig",
      "kind": "function",
      "title": "toAnimeConfig() → {AnimeConfig}",
      "longname": "Anime#toAnimeConfig",
      "name": "toAnimeConfig",
      "tags": "Anime#toAnimeConfig toAnimeConfig",
      "summary": "",
      "description": "Return the AnimeConfig of the Anime"
    },
    "Episode.html": {
      "id": "Episode.html",
      "kind": "class",
      "title": "Episode",
      "longname": "Episode",
      "name": "Episode",
      "tags": "Episode",
      "summary": "",
      "description": "Store the datas of an episode",
      "body": ""
    },
    "Episode.html#name": {
      "id": "Episode.html#name",
      "kind": "member",
      "title": "name :string",
      "longname": "Episode#name",
      "name": "name",
      "tags": "Episode#name name",
      "summary": "",
      "description": "The name of the episode"
    },
    "Episode.html#episodeId": {
      "id": "Episode.html#episodeId",
      "kind": "member",
      "title": "&lt;readonly&gt; episodeId :number",
      "longname": "Episode#episodeId",
      "name": "episodeId",
      "tags": "Episode#episodeId episodeId",
      "summary": "",
      "description": "The unique id of the episode (define the order between episodes)"
    },
    "Episode.html#posterLink": {
      "id": "Episode.html#posterLink",
      "kind": "member",
      "title": "posterLink :string",
      "longname": "Episode#posterLink",
      "name": "posterLink",
      "tags": "Episode#posterLink posterLink",
      "summary": "",
      "description": "The uri of the episode poster"
    },
    "Episode.html#links": {
      "id": "Episode.html#links",
      "kind": "member",
      "title": "links :Array.&lt;string&gt;",
      "longname": "Episode#links",
      "name": "links",
      "tags": "Episode#links links",
      "summary": "",
      "description": "The episode's stream links"
    },
    "Episode.html#localLink": {
      "id": "Episode.html#localLink",
      "kind": "member",
      "title": "&lt;readonly&gt; localLink :string",
      "longname": "Episode#localLink",
      "name": "localLink",
      "tags": "Episode#localLink localLink",
      "summary": "",
      "description": "The local path to episode's file. To set Episode.localLink, see : Episode.setLocalPath"
    },
    "Episode.html#anime": {
      "id": "Episode.html#anime",
      "kind": "member",
      "title": "&lt;readonly&gt; anime :Anime",
      "longname": "Episode#anime",
      "name": "anime",
      "tags": "Episode#anime anime",
      "summary": "",
      "description": "Reference to the Anime"
    },
    "Episode.html#isLocal": {
      "id": "Episode.html#isLocal",
      "kind": "member",
      "title": "isLocal :boolean",
      "longname": "Episode#isLocal",
      "name": "isLocal",
      "tags": "Episode#isLocal isLocal",
      "summary": "",
      "description": "True when $localLink is set"
    },
    "Episode.html#hasPoster": {
      "id": "Episode.html#hasPoster",
      "kind": "member",
      "title": "hasPoster :boolean",
      "longname": "Episode#hasPoster",
      "name": "hasPoster",
      "tags": "Episode#hasPoster hasPoster",
      "summary": "",
      "description": "True when $posterLink is set"
    },
    "Episode.html#path": {
      "id": "Episode.html#path",
      "kind": "member",
      "title": "path :string",
      "longname": "Episode#path",
      "name": "path",
      "tags": "Episode#path path",
      "summary": "",
      "description": "If there is no local file, return the default local path `path.join($this.anime.path, $this.episodeId)` Else return the $local path"
    },
    "Episode.html#toPublic": {
      "id": "Episode.html#toPublic",
      "kind": "function",
      "title": "toPublic() → {PublicEpisode}",
      "longname": "Episode#toPublic",
      "name": "toPublic",
      "tags": "Episode#toPublic toPublic",
      "summary": "",
      "description": "Return the public information of the episode (= the informations to give to the client)"
    },
    "Episode.html#getInfo": {
      "id": "Episode.html#getInfo",
      "kind": "function",
      "title": "&lt;async&gt; getInfo( loadYoutubeInfo ) → {Promise.&lt;EpisodeInfo&gt;}",
      "longname": "Episode#getInfo",
      "name": "getInfo",
      "tags": "Episode#getInfo getInfo",
      "summary": "",
      "description": "Get the info of an episode"
    },
    "Episode.html#getUrlByPlayer": {
      "id": "Episode.html#getUrlByPlayer",
      "kind": "function",
      "title": "getUrlByPlayer( player ) → {string}",
      "longname": "Episode#getUrlByPlayer",
      "name": "getUrlByPlayer",
      "tags": "Episode#getUrlByPlayer getUrlByPlayer",
      "summary": "",
      "description": "Get the first url corresponding to the Videoplayer"
    },
    "Episode.html#setLocalPath": {
      "id": "Episode.html#setLocalPath",
      "kind": "function",
      "title": "setLocalPath( path ) → {Promise.&lt;void&gt;}",
      "longname": "Episode#setLocalPath",
      "name": "setLocalPath",
      "tags": "Episode#setLocalPath setLocalPath",
      "summary": "",
      "description": "Set Episode.localLink and update the anime"
    },
    "Episode.html#toEpisodeConfig": {
      "id": "Episode.html#toEpisodeConfig",
      "kind": "function",
      "title": "toEpisodeConfig() → {EpisodeConfig}",
      "longname": "Episode#toEpisodeConfig",
      "name": "toEpisodeConfig",
      "tags": "Episode#toEpisodeConfig toEpisodeConfig",
      "summary": "",
      "description": "Return the EpisodeConfig of the Episode"
    }
  }
};