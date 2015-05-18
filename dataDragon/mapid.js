//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying MapId LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
///<reference path="references.ts"/>
var dataDragon;
(function (dataDragon) {
    /**
     * A map image filename is related the to ID of the map
     */
    (function (MapId) {
        /**
         * Original Summoner's Rift
         */
        MapId[MapId["map1"] = 1] = "map1";
        /**
         * Current Twisted Treeline
         */
        MapId[MapId["map10"] = 10] = "map10";
        /**
         * Current Summoner's Rift
         */
        MapId[MapId["map11"] = 11] = "map11";
        /**
         * Howling Abyss
         */
        MapId[MapId["map12"] = 12] = "map12";
    })(dataDragon.MapId || (dataDragon.MapId = {}));
    var MapId = dataDragon.MapId;
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=mapid.js.map