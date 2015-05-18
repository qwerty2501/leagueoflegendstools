//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Versons LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

/// <reference path="references.ts" />

asyncTest('getVersionsAsync test',() => {

	dataDragon.getVersionsAsync().then((versions)=>{

		start();
		notEqual( versions.length,0);

		versions.forEach((version, index, array) => {

			ok(isNaN(<any>version));

		});
		

	});

});