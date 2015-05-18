//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Languages LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
var dataDragon;
(function (dataDragon) {
    /**
     * Get the Languages data.
     * This function is Asynchronous.
     */
    function getLanguagesAsync() {
        const url = 'https://' + dataDragon.dataDragonDomain + '/cdn/languages.json';
        return $.getJSON(url);
    }
    dataDragon.getLanguagesAsync = getLanguagesAsync;
    /**
     * Get the Language Codes.
     * This function is Asynchronous.
     */
    function getLanguageCodesAsync() {
        return getLanguagesAsync().then(function (languages) {
            let languageCodes;
            languages.forEach(function (language) {
                languageCodes.push(LanguageCode[language]);
            });
            return languageCodes;
        });
    }
    dataDragon.getLanguageCodesAsync = getLanguageCodesAsync;
    /**
    *	Data Dragon provides data codes in language.
    */
    (function (LanguageCode) {
        /**
        *	Bulgarian (Bulgaria)
        */
        LanguageCode[LanguageCode["bg_BG"] = 0] = "bg_BG";
        /**
        *	Czech (Czech Republic)
        */
        LanguageCode[LanguageCode["cs_CZ"] = 1] = "cs_CZ";
        /**
        *	German (Germany)
        */
        LanguageCode[LanguageCode["de_DE"] = 2] = "de_DE";
        /**
        *	Greek (Greece)
        */
        LanguageCode[LanguageCode["el_GR"] = 3] = "el_GR";
        /**
        *	English (Australia)
        */
        LanguageCode[LanguageCode["en_AU"] = 4] = "en_AU";
        /**
         * English (United Kingdom)
         */
        LanguageCode[LanguageCode["en_GB"] = 5] = "en_GB";
        /**
         * English (Republic of the Philippines)
         */
        LanguageCode[LanguageCode["en_PH"] = 6] = "en_PH";
        /**
         * English (Poland)
         */
        LanguageCode[LanguageCode["en_PL"] = 7] = "en_PL";
        /**
         * English (Singapore)
         */
        LanguageCode[LanguageCode["en_SG"] = 8] = "en_SG";
        /**
         * English (United States)
         */
        LanguageCode[LanguageCode["en_US"] = 9] = "en_US";
        /**
         * Spanish (Argentina)
         */
        LanguageCode[LanguageCode["es_AR"] = 10] = "es_AR";
        /**
         * Spanish (Spain)
         */
        LanguageCode[LanguageCode["es_ES"] = 11] = "es_ES";
        /**
         * Spanish (Mexico)
         */
        LanguageCode[LanguageCode["es_MX"] = 12] = "es_MX";
        /**
         * French (France)
         */
        LanguageCode[LanguageCode["fr_FR"] = 13] = "fr_FR";
        /**
         * Hungarian (Hungary)
         */
        LanguageCode[LanguageCode["hu_HU"] = 14] = "hu_HU";
        /**
         * Indonesian (Indonesia)
         */
        LanguageCode[LanguageCode["id_ID"] = 15] = "id_ID";
        /**
         * Italian (Italy)
         */
        LanguageCode[LanguageCode["it_IT"] = 16] = "it_IT";
        /**
         * Japanese (Japan)
         */
        LanguageCode[LanguageCode["ja_JP"] = 17] = "ja_JP";
        /**
         * Korean (Korea)
         */
        LanguageCode[LanguageCode["ko_KR"] = 18] = "ko_KR";
        /**
         * Dutch (Netherlands)
         */
        LanguageCode[LanguageCode["nl_NL"] = 19] = "nl_NL";
        /**
         *  Malay (Malaysia)
         */
        LanguageCode[LanguageCode["ms_MY"] = 20] = "ms_MY";
        /**
         * Polish (Poland)
         */
        LanguageCode[LanguageCode["pl_PL"] = 21] = "pl_PL";
        /**
         * Portuguese (Brazil)
         */
        LanguageCode[LanguageCode["pt_PT"] = 22] = "pt_PT";
        /**
         * Romanian (Romania)
         */
        LanguageCode[LanguageCode["ro_RO"] = 23] = "ro_RO";
        /**
         * Russian (Russia)
         */
        LanguageCode[LanguageCode["ru_RU"] = 24] = "ru_RU";
        /**
         * Thai (Thailand)
         */
        LanguageCode[LanguageCode["th_TH"] = 25] = "th_TH";
        /**
         * Turkish (Turkey)
         */
        LanguageCode[LanguageCode["tr_TR"] = 26] = "tr_TR";
        /**
         * Vietnamese (Viet Nam)
         */
        LanguageCode[LanguageCode["vn_VN"] = 27] = "vn_VN";
        /**
         * Chinese (China)
         */
        LanguageCode[LanguageCode["zh_CN"] = 28] = "zh_CN";
        /**
         * Chinese (Malaysia)
         */
        LanguageCode[LanguageCode["zh_MY"] = 29] = "zh_MY";
        /**
         * Chinese (Taiwan)
         */
        LanguageCode[LanguageCode["zh_TW"] = 30] = "zh_TW";
    })(dataDragon.LanguageCode || (dataDragon.LanguageCode = {}));
    var LanguageCode = dataDragon.LanguageCode;
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=languages.js.map