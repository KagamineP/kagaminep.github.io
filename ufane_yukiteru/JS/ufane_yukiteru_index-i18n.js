/* ufaneyuki_index-i10n.js

	Re-created in Sublime Text
	Last edit: 29.01.2019 in "Sublime Text"
	by KagamineP (KagamiSoftware)
        Upload to GitHub: KagamineP (https://github.com/KagamineP/)

	///////////////////////////////////////////
	///////////// CHANGELOG ///////////////////
	///////////////////////////////////////////

	///////////////////////////////////////////////////////////////
	////////////////////// 20.11.2018 /////////////////////////////
	///////////////////////////////////////////////////////////////
	// Replace script form uCoz to reg.ru                        //
	// Transfer and adjustment of the script from uCoz to reg.ru //
	///////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////////
	////////////////////// 28.01.2019 /////////////////////////////
	///////////////////////////////////////////////////////////////
	// Some code optimization                                    //
	// Idioma español fijo                                       //
        // Deutsche Sprache hinzugefügt                              //
        // Menambahkan bahasa Indonesia                              //
        // Aggiunta lingua italiana                                  //
        ///////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////

         ///////////////////////////////////////////////////////////////
	////////////////////// 29.01.2019 /////////////////////////////
	///////////////////////////////////////////////////////////////
	// Recreation code                                           //
	// Another code optimization                                 //
        // Clone to GitHub                                           //
	///////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////
*/
$(function () {

	"use strict";

	var dictionary, set_lang;
	var userLang = navigator.language || navigator.userLanguage;

	dictionary = {
            
            "english": {
                "_title": "Ufane Yukiteru | KagamineP",
                "_character": "Character",
                "_index": "Main page",
                "_voicebank": "Voicebank",
                "_header": "Yukiteru Ufane",
                "_header-overview": "* - Overview",
                "_paragraph-overview": "Voice library Ufane Yukiteru was based on the source produced for the singing synthesis tool UTAU  → UTAU Official site http://utau-synth.com/",
                "_header-disclaimer": "Disclaimer",
                "_paragraph-disclaimer": "We don't assume any responsibility for damages caused by using Ufane Yukiteru library.",
                "_feedback": "Feedback"
            },

            "russian": {
                "_title": "Юкитеру Уфане | KagamineP",
                "_character": "Персонаж",
                "_index": "Главная страница",
                "_voicebank": "Голосовой пакет",
                "_header": "Юкитеру Уфане",
                "_header-overview": "* - Обзор",
                "_paragraph-overview": "Голосовая библиотека Ufane Yukiteru была основана на источнике, подготовленном для инструмента синтеза пения «UTAU»  → официальный сайт «UTAU» http://utau-synth.com",
                "_header-disclaimer": "Отказ от ответственности",
                "_paragraph-disclaimer": "Мы не несем ответственности за ущерб, вызванный использованием библиотеки Ufane Yukiteru",
                "_feedback": "Обратная связь"
            },

            "spanish": {
                "_title": "Ufane Yukiteru",
                "_character": "Personaje",
                "_index": "Pagina principal",
                "_voicebank": "Voicebank",
                "_header": "Yukiteru Ufane",
                "_header-overview": "* - Visión de conjunto",
                "_paragraph-overview": "La biblioteca de voz Ufane Yukiteru se basó en la fuente producida para la herramienta de síntesis de canto UTAU  → Sitio oficial de UTAU http://utau-synth.com/",
                "_header-disclaimer": "Renuncia",
                "_paragraph-disclaimer": "No asumimos ninguna responsabilidad por los daños causados por el uso de la biblioteca Ufane Yukiteru.",
                "_feedback": "Realimentación"
            },

            "japanese": {
                "_title": "ウフェネユキテル|KagamineP",
                "_character": "キャラクター",
                "_index": "メインページ",
                "_voicebank": "ボイスバンク",
                "_header": "ウフェネユキテル",
                "_header-overview": "* - 概要",
                "_paragraph-overview": "音声ライブラリーUfane Yukiteruは、歌唱合成ツールUTAU用に作成されたソースに基づいていました。 UTAU公式サイトhttp://utau-synth.com/",
                "_header-disclaimer": "免責事項",
                "_paragraph-disclaimer": "Ufane Yukiteruライブラリを使用したことによる損害については、一切責任を負いません。",
                "_feedback": "フィードバック"
            },

            "simplifiedchinese": {
                "_character": "字符",
                "_index": "主页",
                "_voicebank": "语音库",
                "_header": "Ufane Yukiteru",
                "_header-overview": "* - 概述",
                "_paragraph-overview": "语音库Ufane Yukiteru基于为歌唱合成工具UTAU制作的源。 UTAU官方网站http://utau-synth.com/",
                "_header-disclaimer": "放弃",
                "_paragraph-disclaimer": "对于使用Ufane Yukiteru图书馆造成的损害，我们不承担任何责任。",
                "_feedback": "反馈"
            },

            "traditionalchinese": {
                "_character": "字符",
                "_index": "主頁",
                "_voicebank": "語音庫",
                "_header": "Ufane Yukiteru",
                "_header-overview": "* - 概述",
                "_paragraph-overview": "語音庫Ufane Yukiteru基於為歌唱合成工具UTAU製作的源。 UTAU官方網站http://utau-synth.com/",
                "_header-disclaimer": "放棄",
                "_paragraph-disclaimer": "對於使用Ufane Yukiteru圖書館造成的損失，我們不承擔任何責任。",
                "_feedback": "反饋"
            },

            "ukrainian": {
                "_title": "Уфане Юкітеру | KagamineP",
                "_character": "Персонаж",
                "_index": "Головна сторінка",
                "_voicebank": "Голосовий банк",
                "_header": "Уфане Юкітеру",
                "_header-overview": "* - Огляд",
                "_paragraph-overview": "Голосова бібліотека Уфане Юкітеру була заснована на джерелі, створеному для інструменту синтезу співу UTAU  → Офіційний сайт УТАУ http://utau-synth.com/",
                "_header-disclaimer": "Відмова від відповідальності",
                "_paragraph-disclaimer": "Ми не беремо на себе жодної відповідальності за збитки, спричинені використанням бібліотеки Уфане Юкітеру.",
                "_feedback": "Зворотній зв'язок"
            },

            "korean": {
                "_title": "우파네유키테루 | KagamineP",
                "_character": "캐릭터",
                "_index": "메인 페이지",
                "_voicebank": "음성 사서함",
                "_header": "우 파네 유키 테루",
                "_header-overview": "* - 개요",
                "_paragraph-overview": "음성 라이브러리 Ufane Yukiteru는 노래 합성 도구 UTAU를 위해 제작 된 소스를 기반으로했습니다. UTAU 공식 사이트 http://utau-synth.com/",
                "_header-disclaimer": "부인 성명",
                "_paragraph-disclaimer": "우리는 Ufane Yukiteru 라이브러리 사용으로 인한 손해에 대해 어떠한 책임도지지 않습니다.",
                "_feedback": "피드백"
            },

            "bashkort": {
                "_title": "Уфане Юкитеру | KagamineP",
                "_character": "Персонаж",
                "_index": "Төп биттәр",
                "_header": "Юкитеру Уфане",
                "_voicebank": "Банк тауышлы",
                "_header-overview": "* - Күҙәтеү",
                "_paragraph-overview": "Китапхана сығанаҡтарға Юкитеру Уфане нигеҙләнеп тауышлы булды, йырларға «UTAU» синтез өсөн ҡорал әҙерләгән → Официальный сайт «UTAU» http://utau-synth.com/",
                "_header-disclaimer": "Яуаплылыҡтан баш тартыу",
                "_paragraph-disclaimer": "Зыян өсөн беҙ яуаплы түгел, китапхана Юкитеру Уфане ҡулланырға саҡыра",
                "_feedback": "Кире бәйләнеш"
            },

            "tatar": {
                "_title": "Уфане Юкитеру | KagamineP",
                "_character": "Персонаж",
                "_index": "Баш бит",
                "_header": "Юкитеру Уфане",
                "_voicebank": "Голосовой банк",
                "_header-overview": "* - Күзәтү",
                "_paragraph-overview": "Китапханә чыганакларга Юкитеру Уфане нигезләнеп тавышлы булды, җырларга «UTAU» синтез өчен корал әзерләгән → Официальный сайт «UTAU» http://utau-synth.com/",
                "_header-disclaimer": "Җаваплылыктан баш тарту",
                "_paragraph-disclaimer": "Без салабыз өчен җаваплылык зыян вызванный кулланып китапханә Юкитеру Уфане",
                "_feedback": "Кире элемтә"
            },

            "deutsch": {
                "_title": "Ufane Yukiteru | KagamineP",
                "_character": "Zeichen",
                "_index": "Hauptseite",
                "_header": "Ufane Yukiteru",
                "_voicebank": "Voicebank",
                "_header-overview": "* - Überblick",
                "_paragraph-overview": "Die Sprachbibliothek Ufane Yukiteru basierte auf der Quelle, die für das singende Synthesewerkzeug UTAU → UTAU Offizielle Website http://utau-synth.com/ erstellt wurde.",
                "_header-disclaimer": "Haftungsausschluss",
                "_paragraph-disclaimer": "Wir übernehmen keine Haftung für Schäden, die durch die Verwendung der Bibliothek von Ufane Yukiteru entstehen.",
                "_feedback": "Feedback"
            },

            "indonesian": {
                "_title": "Ufane Yukiteru | KagamineP",
                "_character": "Karakter",
                "_index": "Halaman Utama",
                "_header": "Ufane Yukiteru",
                "_voicebank": "Voicebank",
                "_header-overview": "* - Ikhtisar",
                "_paragraph-overview": "Perpustakaan suara Ufane Yukiteru didasarkan pada sumber yang dihasilkan untuk alat sintesis bernyanyi UTAU → Situs resmi UTAU http://utau-synth.com/",
                "_header-disclaimer": "Penolakan",
                "_paragraph-disclaimer": "Kami tidak bertanggung jawab atas kerusakan yang disebabkan oleh penggunaan perpustakaan Ufane Yukiteru.",
                "_feedback": "Umpan balik"
            },

            "italian": {
                "_title": "Ufane Yukiteru | KagamineP",
                "_character": "Personaggio",
                "_index": "Pagina principale",
                "_header": "Ufane Yukiteru",
                "_voicebank": "Voicebank",
                "_header-overview": "* - Panoramica",
                "_paragraph-overview": "La libreria vocale Ufane Yukiteru era basata sulla fonte prodotta per lo strumento di sintesi vocale UTAU → UTAU Sito ufficiale http://utau-synth.com/",
                "_header-disclaimer": "Disconoscimento",
                "_paragraph-disclaimer": "Non ci assumiamo alcuna responsabilità per danni causati dall'uso della libreria Ufane Yukiteru.",
                "_feedback": "Risposta"
            }
        };

        set_lang = function (dictionary) {
        	$("[data-translate").text(function () {
        		var key = $(this).data("translate");
        		if (dictionary.hasOwnProperty(key)) {
        			return dictionary[key];
        		}
        	});
        };

        $("#en").on("click", function () {
        	localStorage.setItem("lang", "english");
        	set_lang(dictionary.english);
        });

        $("#ru").on("click", function () {
        	localStorage.setItem("lang", "russian");
        	set_lang(dictionary.russian);
        });

        $("#kr").on("click", function () {
        	localStorage.setItem("lang", "korean");
        	set_lang(dictionary.korean);
        });

        $("#ua").on("click", function () {
        	localStorage.setItem("lang", "ukrainian");
        	set_lang(dictionary.ukrainian);
        });

        $("#ba").on("click", function () {
        	localStorage.setItem("lang", "bashkort");
        	set_lang(dictionary.bashkort);
        });

        $("#ta").on("click", function () {
        	localStorage.setItem("lang", "tatar");
        	set_lang(dictionary.tatar);
        });

        $("ja").on("click", function () {
        	localStorage.setItem("lang", "japanese");
        	set_lang(dictionary.japanese);
        });

        $("de").on("click", function () {
        	localStorage.setItem("lang", "deutsch");
        	set_lang(dictionary.deutsch);
        });

        $("id").on("click", function () {
        	localStorage.setItem("lang", "indonesian");
        	set_lang(dictionary.indonesian);
        });

        $("it").on("click", function () {
        	localStorage.setItem("lang", "italian");
        	set_lang(dictionary.italian);
        });

        if (localStorage.lang === undefined) {
        	var lgeo = window.navigator.userLanguage || window.navigator.language;
        	var lgeosub = lgeo.substring(0, 2);

        	if (lgeosub == "ru") {
        		localStorage.setItem("lang", "russian");
        		set_lang(dictionary.russian);
        	} else if (lgeosub == "kr") {
        		localStorage.setItem("lang", "korean");
        		set_lang(dictionary.korean);
        	} else if (lgeosub == "zh") {
        		localStorage.setItem("lang", "simplifiedchinese");
        		set_lang(dictionary.simplifiedchinese);
        	} else if (lgeosub == "de") {
        		localStorage.setItem("lang", "deutsch");
        		set_lang(dictionary.deutsch);
        	} else {
        		var getLanguage = localStorage.getItem('lang') || 'english';
        		set_lang(dictionary[getLanguage]);
        	}
        } else {
        	var getLanguage = localStorage.getItem('lang') || 'english';
        	set_lang(dictionary[getLanguage]);
        }
});
