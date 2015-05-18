//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Languages LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)


/// <reference path="references.ts" />

asyncTest('getLanguageCodesAsync test',() => {

	dataDragon.getLanguageCodesAsync().then((languages) => {
		start();
		notEqual(languages.length,0);
	});

});


