
//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Realm LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

/// <reference path="references.ts" />

asyncTest('getRealmAsync test',() => {

	dataDragon.getRealmAsync(dataDragon.defaultRegion).then((data) => {
		
        
        notUndefined(data.cdn);
        notUndefined(data.css);
		
        notUndefined(data.dd);
		
        notUndefined(data.l);
        notUndefined(data.lg);
		
        notUndefined(data.n);
        notUndefined(data.profileiconmax);
        notUndefined(data.store);
        notUndefined(data.v);
		
		
        start();
	});

	
});

