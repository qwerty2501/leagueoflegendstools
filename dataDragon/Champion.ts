//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Champion LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
    /**
     *  container of champion data.
     */
    export type ChampionDataContainer = ChampionDataContainerT<Champion>;
    
    export interface ChampionDataContainerT<T> extends APIDataContainer<T>
    {
        format: string;
    }

    /**
     * champion data.
     */
    export interface Champion
    {

        /**
         * blurb.
         */
        blurb: string;

        /**
         * Champion ID.
         */
        id: string;

        /**
         * Champion image data.
         */
        image: Image;

        /**
         * Champion infomation.
         */
        info: ChampionInfomation;

        /**
         * key.
         */
        key: string;

        /**
         * Champion name.
         */
        name: string;

        /**
         *
         */
        partype: string;

        /**
         * Champion stats.
         */
        stats: ChampionStats;

        /**
         * Tags of Champion's role.
         */
        tags: string[];

        /**
         * Champion's title.
         */
        title: string;

        /**
         * version of this data.
         */
        version: string;



    }

    /**
     * contains champion information.
     */
    export interface ChampionInfomation
    {
        attack: number;

        defense: number;

        difficulty: number;

        magic: number;
    }

    /**
     * Champion Stats.
     */
    export interface ChampionStats
    {
        /**
         * armor at level 1.
         */
        armor: number;

        /**
         * Aromor value to rise to every level.
         */
        armorperlevel: number;

        /**
         * Attack damage at level 1.
         */
        attackdamage: number;

        /**
         * Attack damage value to rise to every level.
         */
        attackdamageperlevel: number;

        /**
         * Range of auto attack.
         */
        attackrange: number;

        /**
         * Attack speed of offset.
         */
        attackspeedoffset: number;

        /**
         * Attack Speed value to rise to every level.
         */
        attackspeedperlevel: number;

        /**
         * Critical hit percent.
         */
        crit: number;

        /**
         * Critical hit percent to rise to evely level.
         */
        critperlevel: number;

        /**
         * Health.
         */
        hp: number;
        
        /**
         * Health to rise to evely level.
         */
        hpperlevel: number;

        /**
         * Regeneration of health at level 1.
         */
        hpregen: number;

        /**
         * Regeneration of health.
         */
        hpregenperlevel: number;

        /**
         * Movement speed.
         */
        movespeed: number;

        /**
         * Mana at level 1.
         */
        mp: number;

        /**
         * Mana to rise to evely level.
         */
        mpperlevel: number;

        /**
         * regeneration of mana.
         */
        mpregen: number;

        /**
         * regeneration of mana to rise to evely level.
         */
        mpregenperlevel: number;

        /**
         * Magic regeist.
         */
        spellblock: number;

        /**
         * Magic regist to rise to evely level.
         */
        spellblockperlevel: number;
    }



    
}
