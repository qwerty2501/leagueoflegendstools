//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying SummonerSpell LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
    /**
     * Summoner's spell data container.
     */
    export interface SummonerSplellDataContainer extends APIDataContainer<SummonerSpell>
    {

    }

    /**
     * Summoner's spell data.
     */
    export interface SummonerSpell
    {
        /**
         *
         */
        cooldown: number[];


        /**
         *
         */
        cooldownBurn: string;

        /**
         *
         */
        costType: string;

        /**
         *
         */
        description: string;

        /**
         *
         */
        effect: number[][];

        /**
         *
         */
        effectBurn: string[];

        /**
         *
         */
        id: string;

        /**
         *
         */
        image: Image;

        /**
         *
         */
        key: string;

        /**
         *
         */
        maxrank: number;

        /**
         *
         */
        modes: string[];

        /**
         *
         */
        name: string;

        /**
         *
         */
        range: number[];

        /**
         *
         */
        rangeBurn: string;

        /**
         *
         */
        resource: string;

        /**
         *
         */
        summonerLevel: number;

        /**
         *
         */
        tooltip: string;

        /**
         *
         */
        vars: SummonerSpellVars;

    }

    /**
     * Summoner's spell vars.
     */
    export interface SummonerSpellVars
    {
        /**
         *
         */
        coeff: number[];

        /**
         *
         */
        key: string;

        /**
         *
         */
        link: string;
    }

}
