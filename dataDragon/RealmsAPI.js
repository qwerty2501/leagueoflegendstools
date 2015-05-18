//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying realm LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
///<reference path="references.ts"/>
var dataDragon;
(function (dataDragon) {
    /**
     *	Get the realm data from DataDragon API.
     *	This function is Asynchronous.
     */
    function getRealmAsync(region) {
        if (region === void 0) { region = dataDragon.defaultRegion; }
        const targetURL = 'https://' + dataDragon.dataDragonDomain + '/realms/' + dataDragon.Region[region] + '.json';
        return dataDragon.getJSONFromHttpRequestAsync(targetURL);
    }
    dataDragon.getRealmAsync = getRealmAsync;
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=RealmsAPI.js.map