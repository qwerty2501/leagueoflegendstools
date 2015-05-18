//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying DatasAPI LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
///<reference path="references.ts"/>
var dataDragon;
(function (dataDragon) {
    /**
     * Get profile icon data.
     * This function is Asynchronous.
     */
    function getProfileIconDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/profileicon.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getProfileIconDataAsync = getProfileIconDataAsync;
    /**
     * Get Champion data.
     * This function is Asynchronous.
     */
    function getChampionDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/champion.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getChampionDataAsync = getChampionDataAsync;
    /**
     * Get Individual champion data.
     * This function is Asynchronous.
     */
    function getIndividualChampionDataAsync(version, id, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/champion/' + id + '.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getIndividualChampionDataAsync = getIndividualChampionDataAsync;
    /**
     * Get Item data.
     * This function is Asynchronous.
     */
    function getItemDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/item.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getItemDataAsync = getItemDataAsync;
    /**
     * Get Rune data.
     * This function is Asynchronous.
     */
    function getRuneDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/rune.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getRuneDataAsync = getRuneDataAsync;
    /**
     * Get Matery data.
     * This function is Asynchronous.
     */
    function getMasteryDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/mastery.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getMasteryDataAsync = getMasteryDataAsync;
    /**
     * Get Summoner spell data.
     * This function is Asynchronous.
     */
    function getSummonerSpellDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/summoner.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getSummonerSpellDataAsync = getSummonerSpellDataAsync;
    function getAPIDataAsync(targetURL) {
        return dataDragon.getJSONFromHttpRequestAsync(targetURL).then(function (value) {
            value.type = dataDragon.APIDataType[value.type];
            return value;
        });
    }
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=datasAPI.js.map