//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Realm LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
   	/**
	 *	This object contains realm data.
	 */
    export interface Realm
    {
		 
		/**
			The base CDN url.
		*/
		cdn: string;

		/**
			Latest changed version of Dragon Magic's css file.
		*/
		css: string;

		/**
			Latest changed version of Dragon Magic.
		*/
		dd: string;

		/**
			Legacy script mode for IE6 or older.
		*/
		lg: string;

		/**
			Default language for this realm.
		*/
		l: string;


		/**
			Latest changed version for each data type listed.
		*/
		n: HashObject<string>;

		/**
			Special behavior number identifying the largest profileicon id that can be used under 500. Any profileicon that is requested between this number and 500 should be mapped to 0.
		*/
		profileiconmax: number;

		/**
			Additional api data drawn from other sources that may be related to data dragon functionality.
		*/
		store: string;

		/**
			Current version of this file for this realm.
		*/
		v: string;
    }
}
