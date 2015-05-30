//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying HttpRequests LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
    export function getJSONFromHttpRequestAsync(targetURL: string, reviver?: (key: any, value: any) => any): Promise<any>
    {   
        return getTextFromHttpRequestAsync(targetURL).then((responseText) =>
        {
            return JSON.parse(responseText, reviver);
        });
        
    }

    export function getTextFromHttpRequestAsync(targetURL: string):Promise<string>
    {
        return httpRequestAsync(targetURL).then((xhr) =>
        {
            return xhr.responseText;
        });
    }

    function httpRequestAsync(targetURL: string): Promise<XMLHttpRequest>
    {
        
        
        return new Promise((resolve, reject) =>
        {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', targetURL, true);
            
            xhr.onload = (ev) =>
            {


                if(xhr.status == 200)
                {

                    resolve(xhr);
                }
            };



            xhr.onloadend = (ev) =>
            {
                if(xhr.status != 200 && xhr.status != 204 && xhr.status != 304)
                {
                    reject(ev);
                }
            };

            xhr.onerror = (e) =>
            {
                reject(e);
            };

            


            
        });
        

    }
}
