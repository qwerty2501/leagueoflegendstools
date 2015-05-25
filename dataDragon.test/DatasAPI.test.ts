//          Copyright qwerty2501 2015 - .
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying DatasAPI LICENSE_1_0.txt or copy at
//          http://www.boost.org/LICENSE_1_0.txt)

///<reference path="references.ts"/>

asyncTest('getProfileIconDataAsync test', () =>  {

    dataDragon.getProfileIconDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US).then((value) => {
        
        
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
		
        start();
	});

});

asyncTest('getChampionDataAsync test',() =>
{
    dataDragon.getChampionDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        

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

        start();
    });
});

asyncTest('getIndividualChampionDataAsync test',() =>
{
    dataDragon.getIndividualChampionDataAsync(CURRENT_LOL_VERSION, 'Aatrox', dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        

        notUndefined(value);
        notUndefined(value.data);
        notUndefined(value.format);
        notUndefined(value.version);
        equal(value.type, dataDragon.APIDataType.champion);

        for (var prop in value.data)
        {
            var val = value.data[prop];
            notUndefined(val.blurb);
            notUndefined(val.id);
            notUndefined(val.image);
            notUndefined(val.info);
            notUndefined(val.key);
            notUndefined(val.name);
            notUndefined(val.partype);
            notUndefined(val.stats);
            notUndefined(val.tags);
            notUndefined(val.title);

            notUndefined(val.image.full);
            notUndefined(val.image.group);
            notUndefined(val.image.h);
            notUndefined(val.image.sprite);
            notUndefined(val.image.w);
            notUndefined(val.image.x);
            notUndefined(val.image.y);

            notUndefined(val.info.attack);
            notUndefined(val.info.defense);
            notUndefined(val.info.difficulty);
            notUndefined(val.info.magic);

            notUndefined(val.stats.armor);
            notUndefined(val.stats.armorperlevel);
            notUndefined(val.stats.attackdamage);
            notUndefined(val.stats.attackdamageperlevel);
            notUndefined(val.stats.attackrange);
            notUndefined(val.stats.attackspeedoffset);
            notUndefined(val.stats.attackspeedperlevel);
            notUndefined(val.stats.crit);
            notUndefined(val.stats.critperlevel);
            notUndefined(val.stats.hp);
            notUndefined(val.stats.hpperlevel);
            notUndefined(val.stats.hpperlevel);
            notUndefined(val.stats.hpregen);
            notUndefined(val.stats.hpregenperlevel);
            notUndefined(val.stats.movespeed);
            notUndefined(val.stats.mp);
            notUndefined(val.stats.mpperlevel);
            notUndefined(val.stats.mpregen);
            notUndefined(val.stats.mpregenperlevel);
            notUndefined(val.stats.spellblock);
            notUndefined(val.stats.spellblockperlevel);


            notUndefined(val.allytips);

            notUndefined(val.enemytips);

            notUndefined(val.lore);

            notUndefined(val.passive);

            notUndefined(val.passive.description);
            notUndefined(val.passive.image);
            notUndefined(val.passive.name);
            
            notUndefined(val.recommended);
            
            val.recommended.forEach((recommendedValue) =>
            {
                notUndefined(recommendedValue.blocks);
                recommendedValue.blocks.forEach((block) =>
                {
                    
                    notUndefined(block.items);

                    block.items.forEach((blockItem) =>
                    {
                        
                        notUndefined(blockItem.id);
                        notUndefined(blockItem.count);
                        
                    });

                    
                    
                    notUndefined(block.type);
                    
                });
                
                notUndefined(recommendedValue.champion);
                notUndefined(recommendedValue.map);
                notUndefined(recommendedValue.mode);
                notUndefined(recommendedValue.priority);
                notUndefined(recommendedValue.title);
                notUndefined(recommendedValue.type);
                
            });
            
            notUndefined(val.skins);

            val.skins.forEach((skin) =>
            {
                notUndefined(skin.id);
                notUndefined(skin.name);
                notUndefined(skin.num);
            });

            
            notUndefined(val.spells);

            val.spells.forEach((spell) =>
            {
                notUndefined(spell.cooldown);
                notStrictEqual(spell.cooldown.length, 0);
                notUndefined(spell.cooldownBurn);
                notUndefined(spell.cost);
                notUndefined(spell.costBurn);
                notUndefined(spell.costType);
                notUndefined(spell.description);
                notUndefined(spell.effect);
                
                spell.effect.forEach((effect) =>
                {
                    

                    if (effect != null)
                    {
                        notUndefined(effect);

                        notUndefined(effect.length);

                        effect.forEach((effectValue) =>
                        {
                            notUndefined(effectValue);
                        });

                    }
                    

                    
                });

                notUndefined(spell.effectBurn);
                notUndefined(spell.image);
                notUndefined(spell.id);
                notUndefined(spell.leveltip);
                notUndefined(spell.leveltip.effect);
                notStrictEqual(spell.leveltip.effect.length, 0);
                notUndefined(spell.leveltip.label);
                notStrictEqual(spell.leveltip.label.length, 0);
                notUndefined(spell.maxrank);
                notUndefined(spell.name);
                notUndefined(spell.range);
                notUndefined(spell.range.length);



                if (typeof spell.range == typeof (new Array<number>()))
                {
                    (<number[]>spell.range).forEach((value) =>
                    {
                        notUndefined(value);
                    });
                }

                notUndefined(spell.rangeBurn);
                notUndefined(spell.tooltip);
                notUndefined(spell.vars);
            });

           
        }
        start();
    });
});

asyncTest('getItemDataAsync test',() =>
{
    dataDragon.getItemDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        

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

        start();
        

    });
});


asyncTest('getRuneDataAsync test',() =>
{
    dataDragon.getRuneDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        

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
        start();
    });

});


asyncTest('getMasteryDataAsync test',() =>
{

    dataDragon.getMasteryDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        
        
        notUndefined(value.data);
        notUndefined(value.tree);
        notUndefined(value.type);
        notUndefined(value.version);
        

        
        
        var tree = value.tree;
        
        tree.Defense.forEach((treeValueArray) =>
        {
            
            treeValueArray.forEach((treeValue) =>
            {
                if(treeValue != null)
                {
                    
                    notUndefined(treeValue.masteryId);
                    notUndefined(treeValue.prereq);
                    

                }
            });
                
            
            
        });

        
        tree.Offense.forEach((treeValueArray) =>
        {
            
            treeValueArray.forEach((treeValue) =>
            {
                if(treeValue != null)
                {
                    notUndefined(treeValue.masteryId);
                    notUndefined(treeValue.prereq);
                }
            });
                
            
        });

        tree.Utility.forEach((treeValueArray) =>
        {
            
            treeValueArray.forEach((treeValue) =>
            {
                if(treeValue != null)
                {
                    notUndefined(treeValue.masteryId);
                    notUndefined(treeValue.prereq);
                }
            });
                
            
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
        
        start();
    });

});


asyncTest('getSummonerSpellDataAsync test',() =>
{
    dataDragon.getSummonerSpellDataAsync(CURRENT_LOL_VERSION, dataDragon.LanguageCode.en_US)
        .then((value) =>
    {
        

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

        start();
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
