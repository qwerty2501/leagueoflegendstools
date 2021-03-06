﻿//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Mastery LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
    /**
     * Mastery tree data.
     */
    export interface MasteryDataContainer extends APIDataContainer<Mastery>
    {

        /**
         *
         */
        tree: MasteryTree;
    }


    /**
     * Mastery data.
     */
    export interface Mastery
    {
        /**
         *
         */
        description: string[];

        /**
         *
         */
        id: number;

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
        prereq: string;

        /**
         *
         */
        ranks: number;
    }

    /**
     * Mastery tree data.
     */
    export interface MasteryTreeItem
    {

        /**
         *
         */
        masteryId: string;

        /**
         *
         */
        prereq: string;
    }

    /**
     * Mastery tree data.
     */
    export interface MasteryTree
    {
        /**
         *
         */
        Defense: MasteryTreeItem[][];

        /**
         *
         */
        Offense: MasteryTreeItem[][];

        /**
         *
         */
        Utility: MasteryTreeItem[][];
    }


    
}
