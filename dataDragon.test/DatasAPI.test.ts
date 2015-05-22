//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying DatasAPI LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

asyncTest('getProfileIconDataAsync test', () =>  {

    dataDragon.getProfileIconDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US).then((value) => {
        start();
        
		notStrictEqual(value, undefined);
		notStrictEqual(value.data, undefined);
        notStrictEqual(value.data, undefined);
		
        equal(value.type, dataDragon.APIDataType.profileicon);
        notStrictEqual(value.version, undefined);
		for (var prop in value.data) {
			var val = value.data[prop];
			
			
			notStrictEqual(val.id, undefined);
			
			notStrictEqual(val.image.full, undefined);
			notStrictEqual(val.image.group, undefined);
			notStrictEqual(val.image.sprite, undefined);
			notStrictEqual(val.image.h, undefined);
			notStrictEqual(val.image.w, undefined);
			notStrictEqual(val.image.x, undefined);
			notStrictEqual(val.image.y, undefined);
		}
		

	});

});

asyncTest('getChampionDataAsync test',() =>
{
    dataDragon.getChampionDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        start();

        notStrictEqual(value, undefined);
        notStrictEqual(value.data, undefined);
        notStrictEqual(value.format, undefined);
        notStrictEqual(value.version, undefined);
        equal(value.type, dataDragon.APIDataType.champion);

        for (var prop in value.data)
        {
            var val = value.data[prop];
            notStrictEqual(val.blurb, undefined);
            notStrictEqual(val.id, undefined);
            notStrictEqual(val.image, undefined);
            notStrictEqual(val.info, undefined);
            notStrictEqual(val.key, undefined);
            notStrictEqual(val.name, undefined);
            notStrictEqual(val.partype, undefined);
            notStrictEqual(val.stats, undefined);
            notStrictEqual(val.tags, undefined);
            notStrictEqual(val.title, undefined);
            notStrictEqual(val.version, undefined);

            notStrictEqual(val.image.full, undefined);
            notStrictEqual(val.image.group, undefined);
            notStrictEqual(val.image.h, undefined);
            notStrictEqual(val.image.sprite, undefined);
            notStrictEqual(val.image.w, undefined);
            notStrictEqual(val.image.x, undefined);
            notStrictEqual(val.image.y, undefined);
            
            notStrictEqual(val.info.attack, undefined);
            notStrictEqual(val.info.defense, undefined);
            notStrictEqual(val.info.difficulty, undefined);
            notStrictEqual(val.info.magic, undefined);

            notStrictEqual(val.stats.armor, undefined);
            notStrictEqual(val.stats.armorperlevel, undefined);
            notStrictEqual(val.stats.attackdamage, undefined);
            notStrictEqual(val.stats.attackdamageperlevel, undefined);
            notStrictEqual(val.stats.attackrange, undefined);
            notStrictEqual(val.stats.attackspeedoffset, undefined);
            notStrictEqual(val.stats.attackspeedperlevel, undefined);
            notStrictEqual(val.stats.crit, undefined);
            notStrictEqual(val.stats.critperlevel, undefined);
            notStrictEqual(val.stats.hp, undefined);
            notStrictEqual(val.stats.hpperlevel, undefined);
            notStrictEqual(val.stats.hpperlevel, undefined);
            notStrictEqual(val.stats.hpregen, undefined);
            notStrictEqual(val.stats.hpregenperlevel, undefined);
            notStrictEqual(val.stats.movespeed, undefined);
            notStrictEqual(val.stats.mp, undefined);
            notStrictEqual(val.stats.mpperlevel, undefined);
            notStrictEqual(val.stats.mpregen, undefined);
            notStrictEqual(val.stats.mpregenperlevel, undefined);
            notStrictEqual(val.stats.spellblock, undefined);
            notStrictEqual(val.stats.spellblockperlevel, undefined);
        }
    });
});

asyncTest('getIndividualChampionDataAsync test',() =>
{
    dataDragon.getIndividualChampionDataAsync(CURRENT_LOL_VERSION, 'Aatrox', dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        start();

        notStrictEqual(value, undefined);
        notStrictEqual(value.data, undefined);
        notStrictEqual(value.format, undefined);
        notStrictEqual(value.version, undefined);
        equal(value.type, dataDragon.APIDataType.champion);

        for (var prop in value.data)
        {
            var val = value.data[prop];
            notStrictEqual(val.blurb, undefined);
            notStrictEqual(val.id, undefined);
            notStrictEqual(val.image, undefined);
            notStrictEqual(val.info, undefined);
            notStrictEqual(val.key, undefined);
            notStrictEqual(val.name, undefined);
            notStrictEqual(val.partype, undefined);
            notStrictEqual(val.stats, undefined);
            notStrictEqual(val.tags, undefined);
            notStrictEqual(val.title, undefined);

            notStrictEqual(val.image.full, undefined);
            notStrictEqual(val.image.group, undefined);
            notStrictEqual(val.image.h, undefined);
            notStrictEqual(val.image.sprite, undefined);
            notStrictEqual(val.image.w, undefined);
            notStrictEqual(val.image.x, undefined);
            notStrictEqual(val.image.y, undefined);

            notStrictEqual(val.info.attack, undefined);
            notStrictEqual(val.info.defense, undefined);
            notStrictEqual(val.info.difficulty, undefined);
            notStrictEqual(val.info.magic, undefined);

            notStrictEqual(val.stats.armor, undefined);
            notStrictEqual(val.stats.armorperlevel, undefined);
            notStrictEqual(val.stats.attackdamage, undefined);
            notStrictEqual(val.stats.attackdamageperlevel, undefined);
            notStrictEqual(val.stats.attackrange, undefined);
            notStrictEqual(val.stats.attackspeedoffset, undefined);
            notStrictEqual(val.stats.attackspeedperlevel, undefined);
            notStrictEqual(val.stats.crit, undefined);
            notStrictEqual(val.stats.critperlevel, undefined);
            notStrictEqual(val.stats.hp, undefined);
            notStrictEqual(val.stats.hpperlevel, undefined);
            notStrictEqual(val.stats.hpperlevel, undefined);
            notStrictEqual(val.stats.hpregen, undefined);
            notStrictEqual(val.stats.hpregenperlevel, undefined);
            notStrictEqual(val.stats.movespeed, undefined);
            notStrictEqual(val.stats.mp, undefined);
            notStrictEqual(val.stats.mpperlevel, undefined);
            notStrictEqual(val.stats.mpregen, undefined);
            notStrictEqual(val.stats.mpregenperlevel, undefined);
            notStrictEqual(val.stats.spellblock, undefined);
            notStrictEqual(val.stats.spellblockperlevel, undefined);


            notStrictEqual(val.allytips, undefined);

            notStrictEqual(val.enemytips, undefined);

            notStrictEqual(val.lore, undefined);

            notStrictEqual(val.passive, undefined);

            notStrictEqual(val.passive.description, undefined);
            notStrictEqual(val.passive.image, undefined);
            notStrictEqual(val.passive.name, undefined);
            
            notStrictEqual(val.recommended, undefined);
            
            val.recommended.forEach((recommendedValue) =>
            {
                notStrictEqual(recommendedValue.blocks, undefined);
                recommendedValue.blocks.forEach((block) =>
                {
                    
                    notStrictEqual(block.items, undefined);

                    block.items.forEach((blockItem) =>
                    {
                        
                        notStrictEqual(blockItem.id, undefined);
                        notStrictEqual(blockItem.count, undefined);
                        
                    });

                    
                    
                    notStrictEqual(block.type, undefined);
                    
                });
                
                notStrictEqual(recommendedValue.champion, undefined);
                notStrictEqual(recommendedValue.map, undefined);
                notStrictEqual(recommendedValue.mode, undefined);
                notStrictEqual(recommendedValue.priority, undefined);
                notStrictEqual(recommendedValue.title, undefined);
                notStrictEqual(recommendedValue.type, undefined);
                
            });
            
            notStrictEqual(val.skins, undefined);

            val.skins.forEach((skin) =>
            {
                notStrictEqual(skin.id, undefined);
                notStrictEqual(skin.name, undefined);
                notStrictEqual(skin.num, undefined);
            });

            
            notStrictEqual(val.spells, undefined);

            val.spells.forEach((spell) =>
            {
                notStrictEqual(spell.cooldown, undefined);
                notStrictEqual(spell.cooldown.length, 0);
                notStrictEqual(spell.cooldownBurn, undefined);
                notStrictEqual(spell.cost, undefined);
                notStrictEqual(spell.costBurn, undefined);
                notStrictEqual(spell.costType, undefined);
                notStrictEqual(spell.description, undefined);
                notStrictEqual(spell.effect, undefined);
                
                spell.effect.forEach((effect) =>
                {
                    

                    if (effect != null)
                    {
                        notStrictEqual(effect, undefined);

                        notStrictEqual(effect.length, undefined);

                        effect.forEach((effectValue) =>
                        {
                            notStrictEqual(effectValue, undefined);
                        });

                    }
                    

                    
                });

                notStrictEqual(spell.effectBurn, undefined);
                notStrictEqual(spell.image, undefined);
                notStrictEqual(spell.id, undefined);
                notStrictEqual(spell.leveltip, undefined);
                notStrictEqual(spell.leveltip.effect, undefined);
                notStrictEqual(spell.leveltip.effect.length, 0);
                notStrictEqual(spell.leveltip.label, undefined);
                notStrictEqual(spell.leveltip.label.length, 0);
                notStrictEqual(spell.maxrank, undefined);
                notStrictEqual(spell.name, undefined);
                notStrictEqual(spell.range, undefined);
                notStrictEqual(spell.range.length, undefined);



                if (typeof spell.range == typeof (new Array<number>()))
                {
                    (<number[]>spell.range).forEach((value) =>
                    {
                        notStrictEqual(value, undefined);
                    });
                }

                notStrictEqual(spell.rangeBurn, undefined);
                notStrictEqual(spell.tooltip, undefined);
                notStrictEqual(spell.vars, undefined);
            });

           
        }

    });
});

asyncTest('getItemDataAsync test',() =>
{
    dataDragon.getItemDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        start();

        notUndefined(value);
        notUndefined(value.basic);
        notUndefined(value.data);
        notUndefined(value.groups);
        notUndefined(value.tree);
        notUndefined(value.type);
        notUndefined(value.version);
        
        value.tree.forEach((treeValue) =>
        {
            notUndefined(treeValue.header);
            notUndefined(treeValue.tags);
        });

        value.groups.forEach((groupsValue) =>
        {
            notUndefined(groupsValue.id);
            notUndefined(groupsValue.MaxGroupOwnable);
        });

        var basic = value.basic;

        basicTest(basic);

        for (var dataProp in value.data)
        {

            var data = value.data[dataProp];


            notUndefined(data.colloq);

            notUndefined(data.description);

            
            
            for (var effectProp in data.effect)
            {
                var effect = data.effect[effectProp];

                notUndefined(effect);
            }

            notUndefined(data.gold);

            var gold = data.gold;

            notUndefined(gold.base);
            notUndefined(gold.purchasable);
            notUndefined(gold.sell);
            notUndefined(gold.total);

            var image = data.image;

            notUndefined(image);

            notUndefined(image.full);
            notUndefined(image.group);
            notUndefined(image.h);
            notUndefined(image.sprite);
            notUndefined(image.w);
            notUndefined(image.x);
            notUndefined(image.y);

            if (data.into !== undefined)
            {
                data.into.forEach((intoValue) =>
                {
                    notUndefined(intoValue);
                });
            }
            
            
            notUndefined(data.name);
            notUndefined(data.plaintext);
            notUndefined(data.stats);
            
            var stats = data.stats;

            

            notUndefined(stats);

            var tags = data.tags;

            notUndefined(tags);


            tags.forEach((tagsValue) =>
            {
                notUndefined(tagsValue);
            });


        }


        

    });
});


asyncTest('getRuneDataAsync test',() =>
{
    dataDragon.getRuneDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        start();

        notUndefined(value);
        notUndefined(value.basic);
        notUndefined(value.data);
        notUndefined(value.type);
        notUndefined(value.version);

        basicTest(value.basic);


        for(var dataProp in value.data)
        {

            var data = value.data[dataProp];


            notUndefined(data.colloq);

            notUndefined(data.description);

            var image = data.image;

            notUndefined(image);

            notUndefined(image.full);
            notUndefined(image.group);
            notUndefined(image.h);
            notUndefined(image.sprite);
            notUndefined(image.w);
            notUndefined(image.x);
            notUndefined(image.y);

            notUndefined(data.name);
            notUndefined(data.plaintext);
            notUndefined(data.stats);

            var stats = data.stats;



            notUndefined(stats);

            var tags = data.tags;

            notUndefined(tags);


            tags.forEach((tagsValue) =>
            {
                notUndefined(tagsValue);
            });

            var rune = data.rune;

            notUndefined(rune);
            notUndefined(rune.isrune);
            notUndefined(rune.tier);
            notUndefined(rune.type);


        }

    });

});

asyncTest('getMasteryDataAsync test',() =>
{

    dataDragon.getMasteryDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        start();

        notUndefined(value.data);
        notUndefined(value.tree);
        notUndefined(value.type);
        notUndefined(value.version);

        var tree = value.tree;

        
        tree.forEach((treeValue) =>
        {
            notUndefined(treeValue.masteryId);
            notUndefined(treeValue.prereq);
        });
        
  

        
        for(var dataProp in value.data)
        {
            var data = value.data[dataProp];

            notUndefined(data.description);
            notUndefined(data.id);
            notUndefined(data.image);
            notUndefined(data.name);
            notUndefined(data.prereq);
            notUndefined(data.ranks);
        }
    });

});


asyncTest('getSummonerSpellDataAsync test',() =>
{
    dataDragon.getSummonerSpellDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        start();

        notUndefined(value.data);
        notUndefined(value.type);
        notUndefined(value.version);


        for(var dataProp in value.data)
        {
            var data = value.data[dataProp];

            notUndefined(data.cooldown);
            notUndefined(data.cooldownBurn);
            notUndefined(data.costType);
            notUndefined(data.description);
            notUndefined(data.effect);
            notUndefined(data.effectBurn);
            notUndefined(data.id);
            notUndefined(data.image);
            notUndefined(data.key);
            notUndefined(data.maxrank);
            notUndefined(data.modes);
            notUndefined(data.name);
            notUndefined(data.range);
            notUndefined(data.rangeBurn);
            notUndefined(data.resource);
            notUndefined(data.summonerLevel);
            notUndefined(data.tooltip);
            notUndefined(data.vars);
        }
    });
});

function basicTest(basic: dataDragon.BasicData)
{
    notUndefined(basic.colloq);
    notUndefined(basic.consumed);
    notUndefined(basic.consumeOnFull);
    notUndefined(basic.depth);
    notUndefined(basic.description);
    notUndefined(basic.from);
    notUndefined(basic.gold);
    notUndefined(basic.group);
    notUndefined(basic.hideFromAll);
    notUndefined(basic.inStore);
    notUndefined(basic.into);
    notUndefined(basic.maps);
    notUndefined(basic.name);
    notUndefined(basic.plaintext);
    notUndefined(basic.requiredChampion);
    notUndefined(basic.rune);
    notUndefined(basic.specialRecipe);
    notUndefined(basic.stacks);
    notUndefined(basic.stats);
    notUndefined(basic.tags);

    for(var prop in basic.maps)
    {
        notUndefined(basic.maps[prop]);
    }


    var stats = basic.stats;

    statsTest(stats);

    basic.tags.forEach((tagsValue) =>
    {
        notUndefined(tagsValue);
    });

    notUndefined(basic.gold.base);
    notUndefined(basic.gold.purchasable);
    notUndefined(basic.gold.sell);
    notUndefined(basic.gold.total);


    basic.into.forEach((intoValue) =>
    {
        notUndefined(intoValue);
    });


    notUndefined(basic.rune.isrune);
    notUndefined(basic.rune.tier);
    notUndefined(basic.rune.type);
}


function statsTest(stats: dataDragon.BasicDataStats)
{
    notUndefined(stats.FlatArmorMod);
    notUndefined(stats.FlatAttackSpeedMod);
    notUndefined(stats.FlatBlockMod);
    notUndefined(stats.FlatCritChanceMod);
    notUndefined(stats.FlatCritDamageMod);
    notUndefined(stats.FlatEnergyPoolMod);
    notUndefined(stats.FlatEnergyRegenMod);
    notUndefined(stats.FlatEXPBonus);
    notUndefined(stats.FlatHPPoolMod);
    notUndefined(stats.FlatHPRegenMod);
    notUndefined(stats.FlatMagicDamageMod);
    notUndefined(stats.FlatMovementSpeedMod);
    notUndefined(stats.FlatMPPoolMod);
    notUndefined(stats.FlatMPRegenMod);
    notUndefined(stats.FlatPhysicalDamageMod);
    notUndefined(stats.FlatSpellBlockMod);
    notUndefined(stats.PercentArmorMod);
    notUndefined(stats.PercentAttackSpeedMod);
    notUndefined(stats.PercentBlockMod);
    notUndefined(stats.PercentCritChanceMod);
    notUndefined(stats.PercentDodgeMod);
    notUndefined(stats.PercentEXPBonus);
    notUndefined(stats.PercentHPPoolMod);
    notUndefined(stats.PercentHPRegenMod);
    notUndefined(stats.PercentLifeStealMod);
    notUndefined(stats.PercentMagicDamageMod);
    notUndefined(stats.PercentMovementSpeedMod);
    notUndefined(stats.PercentMPPoolMod);
    notUndefined(stats.PercentMPRegenMod);
    notUndefined(stats.PercentPhysicalDamageMod);
    notUndefined(stats.PercentSpellBlockMod);
    notUndefined(stats.PercentSpellVampMod);
    notUndefined(stats.rFlatArmorModPerLevel);
    notUndefined(stats.rFlatArmorPenetrationMod);
    notUndefined(stats.rFlatArmorPenetrationModPerLevel);
    notUndefined(stats.rFlatCritChanceModPerLevel);
    notUndefined(stats.rFlatCritDamageModPerLevel);
    notUndefined(stats.rFlatDodgeMod);
    notUndefined(stats.rFlatDodgeModPerLevel);
    notUndefined(stats.rFlatEnergyModPerLevel);
    notUndefined(stats.rFlatEnergyRegenModPerLevel);
    notUndefined(stats.rFlatGoldPer10Mod);
    notUndefined(stats.rFlatHPModPerLevel);
    notUndefined(stats.rFlatHPRegenModPerLevel);
    notUndefined(stats.rFlatMagicDamageModPerLevel);
    notUndefined(stats.rFlatMagicPenetrationMod);
    notUndefined(stats.rFlatMagicPenetrationModPerLevel);
    notUndefined(stats.rFlatMovementSpeedModPerLevel);
    notUndefined(stats.rFlatMPModPerLevel);
    notUndefined(stats.rFlatMPRegenModPerLevel);
    notUndefined(stats.rFlatPhysicalDamageModPerLevel);
    notUndefined(stats.rFlatSpellBlockModPerLevel);
    notUndefined(stats.rFlatTimeDeadMod);
    notUndefined(stats.rFlatTimeDeadModPerLevel);
    notUndefined(stats.rPercentArmorPenetrationMod);
    notUndefined(stats.rPercentArmorPenetrationModPerLevel);
    notUndefined(stats.rPercentAttackSpeedModPerLevel);
    notUndefined(stats.rPercentCooldownMod);
    notUndefined(stats.rPercentCooldownModPerLevel);
    notUndefined(stats.rPercentMagicPenetrationMod);
    notUndefined(stats.rPercentMagicPenetrationModPerLevel);
    notUndefined(stats.rPercentMovementSpeedModPerLevel);
    notUndefined(stats.rPercentTimeDeadMod);
    notUndefined(stats.rPercentTimeDeadModPerLevel);

}
