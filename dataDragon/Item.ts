//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Item LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
    export interface ItemDataContainer extends APIDataContainer<Item>
    {
        /**
         *
         */
        basic: BasicData;

        /**
         *
         */
        groups: Group[];

        /**
         *
         */
        tree: ItemTree[];
    }



    
    /**
     * Item data.
     */
    export interface Item
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
        effect: HashObject<string>;

        /**
         *
         */
        gold: Gold;

        /**
         *
         */
        image: Image;

        /**
         *
         */
        into: string[];

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
        stats: BasicDataStats;

        /**
         * This member can be undefined.
         */
        requiredChampion: string;

        /**
         *
         */
        tags: string[];
    }


    /**
     * group data.
     */
    export interface Group
    {
        /**
         *
         */
        MaxGroupOwnable: string;

        /**
         *
         */
        id: string;
    }

    /**
     * Item tree data.
     */
    export interface ItemTree
    {

        /**
         *
         */
        header: string;


        /**
         *
         */
        tags: string[];
    }
}
