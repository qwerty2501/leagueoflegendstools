//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying HttpRequests LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)
///<reference path="references.ts"/>
var dataDragon;
(function (dataDragon) {
    function getJSONFromHttpRequestAsync(targetURL, reviver) {
        //return <any> $.getJSON(targetURL);
        return getTextFromHttpRequestAsync(targetURL).then(function (responseText) {
            return JSON.parse(responseText, reviver);
        });
    }
    dataDragon.getJSONFromHttpRequestAsync = getJSONFromHttpRequestAsync;
    function getTextFromHttpRequestAsync(targetURL) {
        return httpRequestAsync(targetURL).then(function (xhr) {
            return xhr.responseText;
        });
    }
    dataDragon.getTextFromHttpRequestAsync = getTextFromHttpRequestAsync;
    function httpRequestAsync(targetURL) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', targetURL, true);
            xhr.onload = function (ev) {
                if (xhr.status == 200) {
                    resolve(xhr);
                }
            };
            xhr.onerror = function (e) {
                reject(e);
            };
            xhr.send();
        });
    }
})(dataDragon || (dataDragon = {}));
//# sourceMappingURL=httpRequests.js.map