//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying ScoreBoardIcon LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
///<reference path="references.ts"/>
var dataDragon;
(function (dataDragon) {
    /**
     * This enum is used scoreboard icon API.
     */
    (function (ScoreBoardIcon) {
        ScoreBoardIcon[ScoreBoardIcon["champion"] = 0] = "champion";
        ScoreBoardIcon[ScoreBoardIcon["gold"] = 1] = "gold";
        ScoreBoardIcon[ScoreBoardIcon["items"] = 2] = "items";
        ScoreBoardIcon[ScoreBoardIcon["minion"] = 3] = "minion";
        ScoreBoardIcon[ScoreBoardIcon["score"] = 4] = "score";
        ScoreBoardIcon[ScoreBoardIcon["spells"] = 5] = "spells";
    })(dataDragon.ScoreBoardIcon || (dataDragon.ScoreBoardIcon = {}));
    var ScoreBoardIcon = dataDragon.ScoreBoardIcon;
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=scoreboardicon.js.map