// index-i18n.js
//
// Created in "ISPmanager"
// Last edit: 07.01.2019 in "ISPmanager"
// by KagamineP
//
// Comment for last edit: n/a
$(function () {
    
    "use strict";
    
    var dictionary, set_lang;
    var userLang = navigator.language || navigator.userLanguage;
    
    console.log("Localization file for index.html, version 1.0 by KagamineP. Activated successfuly!");
    alert("Localization file for index.html.\n Version 1.0 by Kagaminep\n This is beta version.\n Powered by JavaScript.");
    
    
    
    dictionary = {
        "english": {
            "_title": "Main page | KagamineP",
            "_header": "KagamineP official site: Main page",
            "_li-index": "Index",
            "_li-ufaneyuki": "Ufane Yukiteru",
            "_li-about": "About me",
            "_li-contact": "Contact",
            "_li-archive": "Archive",
            "_li-news": "News",
            "_li-kstudio": "KagamiStudio",
            "_li-kproject": "KagamiProject",
            "_article-header": "Main page",
            "_article-one": "I am creator",
            "_footer": "Copyright © 2016-2019 KagamineP. All rights reserved; UTAU © 2008 - 2019 Ameya/Ayame"
        },
        
        "russian": {
            "_title": "Главная | KagamineP",
            "_header": "Официальный сайт KagamineP: Главная страница",
            "_li-index": "Главная",
            "_li-ufaneyuki": "Уфане Юкитеру",
            "_li-about": "Обо мне",
            "_li-contact": "Обратная связь",
            "_li-archive": "Архив",
            "_li-news": "Новости",
            "_li-kstudio": "KagamiStudio",
            "_li-kproject": "KagamiProject",
            "_article-header": "Главная страница",
            "_article-one": "Я создатель",
            "_footer": "Copyright © 2016-2019 KagamineP. Все права защищены; Программное обеспечение UTAU принадлежит Ameya/Ayame."
        },
        
        "spanish": {
            "_title": "",
            "_header": "",
            "_li-index": "",
            "_li-ufaneyuki": "",
            "_li-about": "",
            "_li-contact": "",
            "_li-archive": "",
            "_li-news": "",
            "_li-kstudio": "",
            "_li-kproject": "",
            "_article-header": "",
            "_article-one": "",
            "_footer": ""
        },
        
        "japanese": {
            "_title": "",
            "_header": "",
            "_li-index": "",
            "_li-ufaneyuki": "",
            "_li-about": "",
            "_li-contact": "",
            "_li-archive": "",
            "_li-news": "",
            "_li-kstudio": "",
            "_li-kproject": "",
            "_article-header": "",
            "_article-one": "",
            "_footer": ""
        },
        
        "simplifiedchinese": {
            "_title": "",
            "_header": "",
            "_li-index": "",
            "_li-ufaneyuki": "",
            "_li-about": "",
            "_li-contact": "",
            "_li-archive": "",
            "_li-news": "",
            "_li-kstudio": "",
            "_li-kproject": "",
            "_article-header": "",
            "_article-one": "",
            "_footer": ""
        },
        
        "traditionalchinese": {
            "_title": "",
            "_header": "",
            "_li-index": "",
            "_li-ufaneyuki": "",
            "_li-about": "",
            "_li-contact": "",
            "_li-archive": "",
            "_li-news": "",
            "_li-kstudio": "",
            "_li-kproject": "",
            "_article-header": "",
            "_article-one": "",
            "_footer": ""
        },
        
        "ukrainian": {
            "_title": "",
            "_header": "",
            "_li-index": "",
            "_li-ufaneyuki": "",
            "_li-about": "",
            "_li-contact": "",
            "_li-archive": "",
            "_li-news": "",
            "_li-kstudio": "",
            "_li-kproject": "",
            "_article-header": "",
            "_article-one": "",
            "_footer": ""
        },
        
        "korean": {
            "_title": "",
            "_header": "",
            "_li-index": "",
            "_li-ufaneyuki": "",
            "_li-about": "",
            "_li-contact": "",
            "_li-archive": "",
            "_li-news": "",
            "_li-kstudio": "",
            "_li-kproject": "",
            "_article-header": "",
            "_article-one": "",
            "_footer": ""
        },
        
        "bashkirian": {
            "_title": "",
            "_header": "",
            "_li-index": "",
            "_li-ufaneyuki": "",
            "_li-about": "",
            "_li-contact": "",
            "_li-archive": "",
            "_li-news": "",
            "_li-kstudio": "",
            "_li-kproject": "",
            "_article-header": "",
            "_article-one": "",
            "_footer": ""
        },
        
        "tatarian": {
            "_title": "",
            "_header": "",
            "_li-index": "",
            "_li-ufaneyuki": "",
            "_li-about": "",
            "_li-contact": "",
            "_li-archive": "",
            "_li-news": "",
            "_li-kstudio": "",
            "_li-kproject": "",
            "_article-header": "",
            "_article-one": "",
            "_footer": ""
        }
    };
    
    set_lang = function (dictionary) {
            $("[data-translate]").text(function () {
                    var key = $(this).data("translate");

                    if (dictionary.hasOwnProperty(key)) {
                        return dictionary[key];
                    }
                }

            );
        };

        $("#lc").on("change", function () {
                var language = $(this).val().toLowerCase();

                if (dictionary.hasOwnProperty(language)) {
                    set_lang(dictionary[language]);
                    localStorage.setItem("lang", language);
                }
            }

        );

        $("#en").on("click", function () {
                localStorage.setItem("lang", "english");
                set_lang(dictionary.english);
            }

        );

        $("#ru").on("click", function () {
                localStorage.setItem("lang", "russian");
                set_lang(dictionary.russian);
            }

        );

        $("#ko").on("click", function () {
                localStorage.setItem("lang", "korean");
                set_lang(dictionary.korean);
            }

        );

        $("#ua").on("click", function () {
                localStorage.setItem("lang", "ukrainian");
                set_lang(dictionary.ukrainian);
            }

        );

        $("#ba").on("click", function () {
                localStorage.setItem("lang", "bashkirian");
                set_lang(dictionary.bashkirian);
            }

        );

        $("#ta").on("click", function () {
                localStorage.setItem("lang", "tatarian");
                set_lang(dictionary.tatarian);
            }

        );

        $("ja").on("click", function () {
                localStorage.setItem("lang", "japanese");
                set_lang(dictionary.japanese);
            }

        );

        // Set initial language to English
        if (localStorage.lang === undefined) {
            var lgeo = window.navigator.userLanguage || window.navigator.language;
            var lgeosub = lgeo.substring(0, 2);

            if (lgeosub == "ru") {
                localStorage.setItem("lang", "russian");
                set_lang(dictionary.russian);
            } else if (lgeosub == "ko") {
                localStorage.setItem("lang", "korean");
                set_lang(dictionary.korean);
            } else if (lgeosub == "zh") {
                localStorage.setItem("lang", "simplifiedchinese");
                set_lang(dictionary.simplifiedchinese);
            } else {
                var getLanguage = localStorage.getItem('lang') || 'english';
                set_lang(dictionary[getLanguage]);
            }

        } else {
            var getLanguage = localStorage.getItem('lang') || 'english';
            set_lang(dictionary[getLanguage]);
        }
    }

);