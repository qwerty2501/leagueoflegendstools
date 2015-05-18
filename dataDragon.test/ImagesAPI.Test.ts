//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Images LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)


/// <reference path="references.ts" />

test('createProfileIconImageURL test',() => {

	equal(dataDragon.createProfileIconImageURL('5.2.1', 588), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/profileicon/588.png');

}); 


test('createChampionSplashImageURL test',() => {

	equal(dataDragon.createChampionSplashImageURL('Aatrox', 0), 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg');
});


test('createChampionLoadingScreenArtImageURL test',() => {
	equal(dataDragon.createChampionLoadingScreenArtImageURL('Aatrox', 0), 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg');
});

test('createChampionSquareImageURL test',() => {
	equal(dataDragon.createChampionSquareImageURL('5.2.1', 'Aatrox'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/Aatrox.png');
});

test('createChampionPassiveAbilityImageURL test',() => {
	equal(dataDragon.createChampionPassiveAbilityImageURL('5.2.1', 'Cryophoenix_Rebirth.png'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/passive/Cryophoenix_Rebirth.png');
});

test('createChampionAbilityImageURL test',() => {
	equal(dataDragon.createChampionAbilityImageURL('5.2.1', 'FlashFrost.png'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/spell/FlashFrost.png');
});

test('createSummonerSpellImageURL test',() => {
	equal(dataDragon.createSummonerSpellImageURL('5.2.1', 'Flash'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/spell/SummonerFlash.png');
});

test('createItemImageURL test',() => {
	equal(dataDragon.createItemImageURL('5.2.1', 1001), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/1001.png');
});


test('createMasteryImageURL test',() => {
	equal(dataDragon.createMasteryImageURL('5.2.1', 4111), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/mastery/4111.png');
});

test('createRuneImageURL test',() => {
	equal(dataDragon.createRuneImageURL('5.2.1', '8001.png'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/rune/8001.png');
});

test('createSpriteImageURL test',() => {
	equal(dataDragon.createSpriteImageURL('5.2.1', 'spell0.png'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/sprite/spell0.png');
});

test('createMinimapImageURL test',() => {
	equal(dataDragon.createMinimapImageURL('5.2.1', dataDragon.MapId.map11), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/map/map11.png');
});

test('createScoreBoardIconImageURL test',() => {
	equal(dataDragon.createScoreBoardIconImageURL('5.2.1', dataDragon.ScoreBoardIcon.champion), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/ui/champion.png');
});