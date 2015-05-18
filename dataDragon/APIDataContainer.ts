//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying APIDataContainer LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{

    export interface BasicAPIDataContainer
    {
        /**
		 * A map of API data.
		 */
        data: HashObject<any>;

        /**
         * API data type.
         */
        type: APIDataType;

        /**
         * API version.
         */
        version: string;
    }

	/**
	 * The container of API data.
	 */
    export interface APIDataContainer<T> extends BasicAPIDataContainer
    {
		/**
		 * A map of API data.
		 */
        data: HashObject<T>;

    }

    
}
