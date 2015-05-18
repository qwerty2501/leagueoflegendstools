//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying DatasAPI LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon {

    /**
     * Get profile icon data.
     * This function is Asynchronous.
     */
    export function getProfileIconDataAsync(version: string, language: LanguageCode): Promise<ProfileIconDataContainer> 
    {   
        const targetURL = 'http://' + dataDragonDomain + '/cdn/' + version + '/data/' + LanguageCode[language] + '/profileicon.json';
        return getAPIDataAsync(targetURL);
	}

    /**
     * Get Champion data.
     * This function is Asynchronous.
     */
    export function getChampionDataAsync(version: string, language: LanguageCode): Promise<ChampionDataContainer>
    {
        const targetURL = 'http://' + dataDragonDomain + '/cdn/' + version + '/data/' + LanguageCode[language] + '/champion.json';
        return getAPIDataAsync(targetURL);
    }



    /**
     * Get Individual champion data.
     * This function is Asynchronous.
     */
    export function getIndividualChampionDataAsync(version: string, id: string, language: LanguageCode): Promise<InvdividualChampionDataContainer>
    {
        const targetURL = 'http://' + dataDragonDomain + '/cdn/' + version + '/data/' + LanguageCode[language] + '/champion/' + id + '.json';
        return getAPIDataAsync(targetURL);
    }
	
    /**
     * Get Item data.
     * This function is Asynchronous.
     */
    export function getItemDataAsync(version: string, language: LanguageCode): Promise<ItemDataContainer>
    {
        const targetURL = 'http://' + dataDragonDomain + '/cdn/' + version + '/data/' + LanguageCode[language] + '/item.json';
        return getAPIDataAsync(targetURL);
    }

    /**
     * Get Rune data.
     * This function is Asynchronous.
     */
    export function getRuneDataAsync(version: string, language: LanguageCode): Promise<RuneDataContainer>
    {
        const targetURL = 'http://' + dataDragonDomain + '/cdn/' + version + '/data/' + LanguageCode[language] + '/rune.json';
        return getAPIDataAsync(targetURL);

    }

    /**
     * Get Matery data.
     * This function is Asynchronous.
     */
    export function getMasteryDataAsync(version: string, language: LanguageCode): Promise<MasteryDataContainer>
    {
        const targetURL = 'http://' + dataDragonDomain + '/cdn/' + version + '/data/' + LanguageCode[language] + '/mastery.json';
        return getAPIDataAsync(targetURL);
    }

    /**
     * Get Summoner spell data.
     * This function is Asynchronous.
     */
    export function getSummonerSpellDataAsync(version: string, language: LanguageCode): Promise<SummonerSplellDataContainer>
    {
        const targetURL = 'http://' + dataDragonDomain + '/cdn/' + version + '/data/' + LanguageCode[language] + '/summoner.json';
        return getAPIDataAsync(targetURL);
    }


    function getAPIDataAsync(targetURL: string)
    {
        return getJSONFromHttpRequestAsync(targetURL).then((value) =>
        {
            value.type = APIDataType[value.type];

            return value;
        });
    }
}
