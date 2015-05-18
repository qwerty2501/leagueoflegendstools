
//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Realm LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

/// <reference path="references.ts" />

asyncTest('getRealmAsync test',() => {

	dataDragon.getRealmAsync(dataDragon.defaultRegion).then((data) => {
		start();
		notStrictEqual(data.cdn, undefined);
		notStrictEqual(data.css, undefined);
		ok(isNaN(<any>data.css));
		notStrictEqual(data.dd, undefined);
		ok(isNaN(<any>data.dd));
		notStrictEqual(data.l, undefined);
		notStrictEqual(data.lg, undefined);
		ok(isNaN(<any>data.lg));
		notStrictEqual(data.n, undefined);
		notStrictEqual(data.profileiconmax, undefined);
		notStrictEqual(data.store, undefined);
		notStrictEqual(data.v, undefined);
		ok(isNaN(<any>data.v));
		
	});

	
});

