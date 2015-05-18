//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Images LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
	/**
	 * Create a profile icon URL.
	 */
    export function createProfileIconImageURL(version: string, id: number): string {
		
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/profileicon/' + id + '.png';
	}

	/**
	 * Create champion's splash  URL.
	 */
	export function createChampionSplashImageURL(championName: string, skinNumber: number): string {
		return 'http://' + dataDragonDomain + '/cdn/img/champion/splash/' + championName + '_' + skinNumber + '.jpg';
	}

	/**
	 * Create champion's screen art URL.
	 */
	export function createChampionLoadingScreenArtImageURL(championName: string, skinNumber: number): string {
		return 'http://' + dataDragonDomain + '/cdn/img/champion/loading/' + championName + '_' + skinNumber + '.jpg';
	}

	/**
	 * Create champion's square image URL.
	 */
	export function createChampionSquareImageURL(version: string, championName: string): string {
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/champion/' + championName + '.png';
	}

	/**
	 * Create passive ability's image URL.
	 */
	export function createChampionPassiveAbilityImageURL(version: string, fullImageName: string): string {
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/passive/' + fullImageName;
	}


	/**
	 * Create ability's image URL.
	 */
	export function createChampionAbilityImageURL(version: string, fullImageName: string): string {
		return createSpellImageURL(version, fullImageName);
	}


	function createSpellImageURL(version: string, fullImageName: string): string {
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/spell/' + fullImageName;
	}

	/**
	 * Create summoner spell's image URL.
	 */
	export function createSummonerSpellImageURL(version: string, spellName: string): string {
		return createSpellImageURL(version, 'Summoner' + spellName + '.png');
	}

	/**
	 * Create item's image URL.
	 */
	export function createItemImageURL(version: string, id:number): string {
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/item/' + id + '.png';
	}

	/**
	 * Create Mastery's image URL.
	 */
	export function createMasteryImageURL(version: string, id: number): string {
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/mastery/' + id + '.png';
	}

	/**
	 * Create Rune's image URL.
	 */
	export function createRuneImageURL(version: string, fullImageName:string): string {
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/rune/' + fullImageName;
	}

	/**
	 * Create Splite's Image URL.
	 */
	export function createSpriteImageURL(version: string, spriteImageName: string): string {
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/sprite/' + spriteImageName;
	}
	
	/**
	 * Create Minimap's Image URL.
	 */
	export function createMinimapImageURL(version: string, id: MapId): string {
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/map/map' + id + '.png';
	}

	/**
	 * Create scoreboard icon's Image URL.
	 */
	export function createScoreBoardIconImageURL(version: string, icon: ScoreBoardIcon): string {
		return 'http://' + dataDragonDomain + '/cdn/' + version + '/img/ui/' + ScoreBoardIcon[icon] + '.png';
	}

}
