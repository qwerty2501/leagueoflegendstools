//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Region LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
///<reference path="references.ts"/>
var dataDragon;
(function (dataDragon) {
    /**
        Region corresponding to data to retrieve.
    */
    (function (Region) {
        Region[Region["br"] = 0] = "br";
        Region[Region["eune"] = 1] = "eune";
        Region[Region["euw"] = 2] = "euw";
        Region[Region["kr"] = 3] = "kr";
        Region[Region["lan"] = 4] = "lan";
        Region[Region["las"] = 5] = "las";
        Region[Region["na"] = 6] = "na";
        Region[Region["oce"] = 7] = "oce";
        Region[Region["ru"] = 8] = "ru";
        Region[Region["tr"] = 9] = "tr";
    })(dataDragon.Region || (dataDragon.Region = {}));
    var Region = dataDragon.Region;
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=region.js.map