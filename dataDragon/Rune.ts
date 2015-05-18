//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Rune LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
    /**
     * Rune data container.
     */
    export interface RuneDataContainer extends APIDataContainer<Rune>
    {
        /**
         *
         */
        basic: BasicData;


    }

    /**
     * Rune data.
     */
    export interface Rune
    {
        /**
         *
         */
        colloq: string;

        /**
         *
         */
        description: string;

        /**
         *
         */
        image: Image;

        /**
         *
         */
        name: string;

        /**
         *
         */
        plaintext: string;

        /**
         *
         */
        rune: MetaData;

        /**
         *
         */
        stats: BasicDataStats;

        /**
         *
         */
        tags: string[];
    }
}
