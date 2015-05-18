﻿//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Versions LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon {

	/**
	 *	Get Versions data.
	 *	This function is Asynchronous.
	 */
	export function getVersionsAsync(): Promise<string[]> {
        const targetURL = 'https://' + dataDragonDomain + '/api/versions.json';
        return getJSONFromHttpRequestAsync(targetURL);
	}
}