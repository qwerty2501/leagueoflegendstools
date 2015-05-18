//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Versions LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
var dataDragon;
(function (dataDragon) {
    /**
        Get Versions data.
        This function is Asynchronous.
    */
    function getVersionsAsync() {
        const url = 'https://' + dataDragon.dataDragonDomain + '/api/versions.json';
        return $.getJSON(url);
    }
    dataDragon.getVersionsAsync = getVersionsAsync;
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=Versions.js.map