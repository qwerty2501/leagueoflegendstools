//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying General LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

var CURRENT_LOL_VERSION = '5.9.1';

function notUndefined(value: any,message?:string)
{
    notStrictEqual(value, undefined, message);
}