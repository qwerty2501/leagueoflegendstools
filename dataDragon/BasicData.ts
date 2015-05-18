//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying Gold LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

module dataDragon
{
    /**
     * Item's baisc data.
     */
    export interface BasicData
    {
        /**
         *
         */
        colloq: string;

        /**
         *
         */
        consumeOnFull: boolean;

        /**
         *
         */
        consumed: boolean;

        /**
         *
         */
        depth: number;

        /**
         *
         */
        description: string;

        /**
         *
         */
        from: string[];

        /**
         *
         */
        gold: Gold;

        /**
         *
         */
        group: string;

        /**
         *
         */
        hideFromAll: boolean;

        /**
         *
         */
        inStore: boolean;

        /**
         *
         */
        into: string[];

        /**
         *
         */
        maps: HashObject<boolean>;

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
        requiredChampion: string;

        /**
         *
         */
        rune: MetaData;

        /**
         *
         */
        specialRecipe: number;

        /**
         *
         */
        stacks: number;

        /**
         *
         */
        stats: BasicDataStats;

        /**
         *
         */
        tags: string[];


    }

    export interface BasicDataStats
    {
        /**
         *
         */
        FlatArmorMod: number;

        /**
         *
         */
        FlatAttackSpeedMod: number;

        /**
         *
         */
        FlatBlockMod: number;

        /**
         *
         */
        FlatCritChanceMod: number;

        /**
         *
         */
        FlatCritDamageMod: number;

        /**
         *
         */
        FlatEXPBonus: number;

        /**
         *
         */
        FlatEnergyPoolMod: number;

        /**
         *
         */
        FlatEnergyRegenMod: number;

        /**
         *
         */
        FlatHPPoolMod: number;

        /**
         *
         */
        FlatHPRegenMod: number;

        /**
         *
         */
        FlatMPPoolMod: number;

        /**
         *
         */
        FlatMPRegenMod: number;

        /**
         *
         */
        FlatMagicDamageMod: number;

        /**
         *
         */
        FlatMovementSpeedMod: number;

        /**
         *
         */
        FlatPhysicalDamageMod: number;

        /**
         *
         */
        FlatSpellBlockMod: number;

        /**
         *
         */
        PercentArmorMod: number;

        /**
         *
         */
        PercentAttackSpeedMod: number;

        /**
         *
         */
        PercentBlockMod: number;

        /**
         *
         */
        PercentCritChanceMod: number;

        /**
         *
         */
        PercentCritDamageMod: number;

        /**
         *
         */
        PercentDodgeMod: number;

        /**
         *
         */
        PercentEXPBonus: number;

        /**
         *
         */
        PercentHPPoolMod: number;

        /**
         *
         */
        PercentHPRegenMod: number;

        /**
         *
         */
        PercentLifeStealMod: number;

        /**
         *
         */
        PercentMPPoolMod: number;

        /**
         *
         */
        PercentMPRegenMod: number;

        /**
         *
         */
        PercentMagicDamageMod: number;

        /**
         *
         */
        PercentMovementSpeedMod: number;

        /**
         *
         */
        PercentPhysicalDamageMod: number;

        /**
         *
         */
        PercentSpellBlockMod: number;

        /**
         *
         */
        PercentSpellVampMod: number;

        /**
         *
         */
        rFlatArmorModPerLevel: number;

        /**
         *
         */
        rFlatArmorPenetrationMod: number;

        /**
         *
         */
        rFlatArmorPenetrationModPerLevel: number;

        /**
         *
         */
        rFlatCritChanceModPerLevel: number;

        /**
         *
         */
        rFlatCritDamageModPerLevel: number;

        /**
         *
         */
        rFlatDodgeMod: number;

        /**
         *
         */
        rFlatDodgeModPerLevel: number;

        /**
         *
         */
        rFlatEnergyModPerLevel: number;

        /**
         *
         */
        rFlatEnergyRegenModPerLevel: number;

        /**
         *
         */
        rFlatGoldPer10Mod: number;

        /**
         *
         */
        rFlatHPModPerLevel: number;

        /**
         *
         */
        rFlatHPRegenModPerLevel: number;

        /**
         *
         */
        rFlatMPModPerLevel: number;

        /**
         *
         */
        rFlatMPRegenModPerLevel: number;

        /**
         *
         */
        rFlatMagicDamageModPerLevel: number;

        /**
         *
         */
        rFlatMagicPenetrationMod: number;

        /**
         *
         */
        rFlatMagicPenetrationModPerLevel: number;

        /**
         *
         */
        rFlatMovementSpeedModPerLevel: number;

        /**
         *
         */
        rFlatPhysicalDamageModPerLevel: number;

        /**
         *
         */
        rFlatSpellBlockModPerLevel: number;

        /**
         *
         */
        rFlatTimeDeadMod: number;

        /**
         *
         */
        rFlatTimeDeadModPerLevel: number;

        /**
         *
         */
        rPercentArmorPenetrationMod: number;

        /**
         *
         */
        rPercentArmorPenetrationModPerLevel: number;

        /**
         *
         */
        rPercentAttackSpeedModPerLevel: number;

        /**
         *
         */
        rPercentCooldownMod: number;

        /**
         *
         */
        rPercentCooldownModPerLevel: number;

        /**
         *
         */
        rPercentMagicPenetrationMod: number;

        /**
         *
         */
        rPercentMagicPenetrationModPerLevel: number;

        /**
         *
         */
        rPercentMovementSpeedModPerLevel: number;

        /**
         *
         */
        rPercentTimeDeadMod: number;

        /**
         *
         */
        rPercentTimeDeadModPerLevel: number;

    }

    /**
     * Item gold data.
     */
    export interface Gold
    {
        /**
         *
         */
        base: number;

        /**
         *
         */
        purchasable: boolean;

        /**
         *
         */
        sell: number;

        /**
         *
         */
        total: number;

    }

    /**
     * meta data.
     */
    export interface MetaData
    {
        /**
         *
         */
        isrune: boolean;

        /**
         *
         */
        tier: string;

        /**
         *
         */
        type: string;
    }
}
