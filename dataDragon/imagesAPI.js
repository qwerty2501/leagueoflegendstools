//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Images LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
///<reference path="references.ts"/>
var dataDragon;
(function (dataDragon) {
    /**
     * Create a profile icon URL.
     */
    function createProfileIconImageURL(version, id) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/profileicon/' + id + '.png';
    }
    dataDragon.createProfileIconImageURL = createProfileIconImageURL;
    /**
     * Create champion's splash  URL.
     */
    function createChampionSplashImageURL(championName, skinNumber) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/img/champion/splash/' + championName + '_' + skinNumber + '.jpg';
    }
    dataDragon.createChampionSplashImageURL = createChampionSplashImageURL;
    /**
     * Create champion's screen art URL.
     */
    function createChampionLoadingScreenArtImageURL(championName, skinNumber) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/img/champion/loading/' + championName + '_' + skinNumber + '.jpg';
    }
    dataDragon.createChampionLoadingScreenArtImageURL = createChampionLoadingScreenArtImageURL;
    /**
     * Create champion's square image URL.
     */
    function createChampionSquareImageURL(version, championName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/champion/' + championName + '.png';
    }
    dataDragon.createChampionSquareImageURL = createChampionSquareImageURL;
    /**
     * Create passive ability's image URL.
     */
    function createChampionPassiveAbilityImageURL(version, fullImageName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/passive/' + fullImageName;
    }
    dataDragon.createChampionPassiveAbilityImageURL = createChampionPassiveAbilityImageURL;
    /**
     * Create ability's image URL.
     */
    function createChampionAbilityImageURL(version, fullImageName) {
        return createSpellImageURL(version, fullImageName);
    }
    dataDragon.createChampionAbilityImageURL = createChampionAbilityImageURL;
    function createSpellImageURL(version, fullImageName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/spell/' + fullImageName;
    }
    /**
     * Create summoner spell's image URL.
     */
    function createSummonerSpellImageURL(version, spellName) {
        return createSpellImageURL(version, 'Summoner' + spellName + '.png');
    }
    dataDragon.createSummonerSpellImageURL = createSummonerSpellImageURL;
    /**
     * Create item's image URL.
     */
    function createItemImageURL(version, id) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/item/' + id + '.png';
    }
    dataDragon.createItemImageURL = createItemImageURL;
    /**
     * Create Mastery's image URL.
     */
    function createMasteryImageURL(version, id) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/mastery/' + id + '.png';
    }
    dataDragon.createMasteryImageURL = createMasteryImageURL;
    /**
     * Create Rune's image URL.
     */
    function createRuneImageURL(version, fullImageName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/rune/' + fullImageName;
    }
    dataDragon.createRuneImageURL = createRuneImageURL;
    /**
     * Create Splite's Image URL.
     */
    function createSpriteImageURL(version, spriteImageName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/sprite/' + spriteImageName;
    }
    dataDragon.createSpriteImageURL = createSpriteImageURL;
    /**
     * Create Minimap's Image URL.
     */
    function createMinimapImageURL(version, id) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/map/map' + id + '.png';
    }
    dataDragon.createMinimapImageURL = createMinimapImageURL;
    /**
     * Create scoreboard icon's Image URL.
     */
    function createScoreBoardIconImageURL(version, icon) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/ui/' + dataDragon.ScoreBoardIcon[icon] + '.png';
    }
    dataDragon.createScoreBoardIconImageURL = createScoreBoardIconImageURL;
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=imagesAPI.js.map