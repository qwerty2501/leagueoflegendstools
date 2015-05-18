//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Languages LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
	/**
	 * Get the Languages data.
	 * This function is Asynchronous.
	 */
	export function getLanguagesAsync():Promise<string[]> {

		const url = 'https://' + dataDragonDomain + '/cdn/languages.json';
        return getJSONFromHttpRequestAsync(url);
	}

	/**
	 * Get the Language Codes.
	 * This function is Asynchronous.
	 */
    export function getLanguageCodesAsync(): Promise<LanguageCode[]> {
		return getLanguagesAsync().then((languages) => {
			var codes = new Array<LanguageCode>(languages.length);

			
			
			languages.forEach((language,index,array) => {
				codes[index] = LanguageCode[language];
			});

			return codes;
		});
	}


}
