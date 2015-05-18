//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying realm LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
	/**
	 *	Get the realm data from DataDragon API.
	 *	This function is Asynchronous.
	 */
	export function getRealmAsync(region:Region = defaultRegion):Promise<Realm> {
        const targetURL = 'https://' + dataDragonDomain + '/realms/' + Region[region] + '.json';
        return getJSONFromHttpRequestAsync(targetURL);

	}


}
