//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying IndividualChampion LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
    export type InvdividualChampionDataContainer = ChampionDataContainerT<IndividualChampion>;

    export interface IndividualChampion
    {
        /**
         * Ally tips.
         */
        allytips: string[];

        /**
         * Enemy tips.
         */
        enemytips: string[];


        /**
         * Champion's lore.
         */
        lore: string;

        /**
         * Champion's passive.
         */
        passive: Passive;

        /**
         * contains champion recommended data.
         */
        recommended: Recommended[];

        /**
         * Champion Skins data.
         */
        skins: Skin[];

        /**
         * Champion's Spells.
         */
        spells: ChampionSpell[];

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
        
    }


    export interface Passive
    {
        /**
         * description of passive.
         */
        description: string;

        /**
         * Image data.
         */
        image: Image;

        /**
         * name of passive.
         */
        name: string;
        
    }

    /**
     * Champion spell data.
     */
    export interface ChampionSpell
    {

        /**
         * spell cooldown.
         */
        cooldown: number[];

        /**
         * spell cooldown burn.
         */
        cooldownBurn: string;

        /**
         * spell's cost.
         */
        cost: number[];

        /**
         * Spell's cost burn.
         */
        costBurn: string;

        /**
         * Cost type.
         */
        costType: string;

        /**
         * Spell's description.
         */
        description: string;

        /**
         * Spell's effects.
         */
        effect: number[][];

        /**
         * Spell's effects burn.
         */
        effectBurn: string;

        /**
         * Spell's Image data.
         */
        image: Image;

        /**
         * Spell's level tip.
         */
        leveltip: LevelTip;

        /**
         * Spell's max rank.
         */
        maxrank: number;

        /**
         * Spell name.
         */
        name: string;

        /** 
         * Spell's id.
         */
        id: string;

        /**
         * If spell is self, range will be string.
         */
        range: number[]|string;

        /**
         * Spell's range burn.
         */
        rangeBurn: string;

        /**
         * Spell's resource.
         */
        resource: string;


        /**
         * Spell's tooltip.
         */
        tooltip: string;

        /**
         * 
         */
        vars: SpellVars[];
    }


    

    /**
     * champion level tip data.
     */
    export interface LevelTip
    {

        effect: string[];

        label: string[];
    }


    /**
     * champion skin data.
     */
    export interface Skin
    {
        /**
         * skin's id.
         */
        id: number;

        /**
         * skin's name.
         */
        name: string;

        /**
         * skin's number.
         */
        num: number;
    }

    /**
     * contains champion recommended data.
     */
    export interface Recommended
    {
        /**
         * 
         */
        blocks: Block[];

        /**
         *
         */
        champion: string;

        /**
         *
         */
        map: string;

        /**
         *
         */
        mode: string;

        /**
         *
         */
        priority: boolean;

        /**
         *
         */
        title: string;

        /**
         *
         */
        type: string;


    }


    /**
     * contains champion recommended block data.
     */
    export interface Block
    {
        /**
         *
         */
        items: BlockItem[];


        /**
         *
         */
        recMath: boolean;

        /**
         *
         */
        type: string;
    }

    /**
     * contains champion recommended block item data.
     */
    export interface BlockItem
    {
        /**
         * 
         */
        count: number;

        /**
         *
         */
        id: number;

        
    }
}
