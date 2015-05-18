//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Languages LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
///<reference path="references.ts"/>
var dataDragon;
(function (dataDragon) {
    /**
     * Get the Languages data.
     * This function is Asynchronous.
     */
    function getLanguagesAsync() {
        const url = 'https://' + dataDragon.dataDragonDomain + '/cdn/languages.json';
        return dataDragon.getJSONFromHttpRequestAsync(url);
    }
    dataDragon.getLanguagesAsync = getLanguagesAsync;
    /**
     * Get the Language Codes.
     * This function is Asynchronous.
     */
    function getLanguageCodesAsync() {
        return getLanguagesAsync().then(function (languages) {
            var codes = new Array(languages.length);
            languages.forEach(function (language, index, array) {
                codes[index] = dataDragon.LanguageCode[language];
            });
            return codes;
        });
    }
    dataDragon.getLanguageCodesAsync = getLanguageCodesAsync;
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=languagesAPI.js.map