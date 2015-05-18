var dataDragon;
(function (dataDragon) {
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    (function (APIDataType) {
        APIDataType[APIDataType["profileicon"] = 0] = "profileicon";
        APIDataType[APIDataType["champion"] = 1] = "champion";
        APIDataType[APIDataType["item"] = 2] = "item";
        APIDataType[APIDataType["rune"] = 3] = "rune";
        APIDataType[APIDataType["mastery"] = 4] = "mastery";
        APIDataType[APIDataType["summoner"] = 5] = "summoner";
    })(dataDragon.APIDataType || (dataDragon.APIDataType = {}));
    var APIDataType = dataDragon.APIDataType;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    function getJSONFromHttpRequestAsync(targetURL, reviver) {
        return getTextFromHttpRequestAsync(targetURL).then(function (responseText) {
            return JSON.parse(responseText, reviver);
        });
    }
    dataDragon.getJSONFromHttpRequestAsync = getJSONFromHttpRequestAsync;
    function getTextFromHttpRequestAsync(targetURL) {
        return httpRequestAsync(targetURL).then(function (xhr) {
            return xhr.responseText;
        });
    }
    dataDragon.getTextFromHttpRequestAsync = getTextFromHttpRequestAsync;
    function httpRequestAsync(targetURL) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', targetURL, true);
            xhr.onload = function (ev) {
                if (xhr.status == 200) {
                    resolve(xhr);
                }
            };
            xhr.onerror = function (e) {
                reject(e);
            };
            xhr.send();
        });
    }
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    ;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    (function (LanguageCode) {
        LanguageCode[LanguageCode["bg_BG"] = 0] = "bg_BG";
        LanguageCode[LanguageCode["cs_CZ"] = 1] = "cs_CZ";
        LanguageCode[LanguageCode["de_DE"] = 2] = "de_DE";
        LanguageCode[LanguageCode["el_GR"] = 3] = "el_GR";
        LanguageCode[LanguageCode["en_AU"] = 4] = "en_AU";
        LanguageCode[LanguageCode["en_GB"] = 5] = "en_GB";
        LanguageCode[LanguageCode["en_PH"] = 6] = "en_PH";
        LanguageCode[LanguageCode["en_PL"] = 7] = "en_PL";
        LanguageCode[LanguageCode["en_SG"] = 8] = "en_SG";
        LanguageCode[LanguageCode["en_US"] = 9] = "en_US";
        LanguageCode[LanguageCode["es_AR"] = 10] = "es_AR";
        LanguageCode[LanguageCode["es_ES"] = 11] = "es_ES";
        LanguageCode[LanguageCode["es_MX"] = 12] = "es_MX";
        LanguageCode[LanguageCode["fr_FR"] = 13] = "fr_FR";
        LanguageCode[LanguageCode["hu_HU"] = 14] = "hu_HU";
        LanguageCode[LanguageCode["id_ID"] = 15] = "id_ID";
        LanguageCode[LanguageCode["it_IT"] = 16] = "it_IT";
        LanguageCode[LanguageCode["ja_JP"] = 17] = "ja_JP";
        LanguageCode[LanguageCode["ko_KR"] = 18] = "ko_KR";
        LanguageCode[LanguageCode["nl_NL"] = 19] = "nl_NL";
        LanguageCode[LanguageCode["ms_MY"] = 20] = "ms_MY";
        LanguageCode[LanguageCode["pl_PL"] = 21] = "pl_PL";
        LanguageCode[LanguageCode["pt_PT"] = 22] = "pt_PT";
        LanguageCode[LanguageCode["ro_RO"] = 23] = "ro_RO";
        LanguageCode[LanguageCode["ru_RU"] = 24] = "ru_RU";
        LanguageCode[LanguageCode["th_TH"] = 25] = "th_TH";
        LanguageCode[LanguageCode["tr_TR"] = 26] = "tr_TR";
        LanguageCode[LanguageCode["vn_VN"] = 27] = "vn_VN";
        LanguageCode[LanguageCode["zh_CN"] = 28] = "zh_CN";
        LanguageCode[LanguageCode["zh_MY"] = 29] = "zh_MY";
        LanguageCode[LanguageCode["zh_TW"] = 30] = "zh_TW";
    })(dataDragon.LanguageCode || (dataDragon.LanguageCode = {}));
    var LanguageCode = dataDragon.LanguageCode;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    (function (ScoreBoardIcon) {
        ScoreBoardIcon[ScoreBoardIcon["champion"] = 0] = "champion";
        ScoreBoardIcon[ScoreBoardIcon["gold"] = 1] = "gold";
        ScoreBoardIcon[ScoreBoardIcon["items"] = 2] = "items";
        ScoreBoardIcon[ScoreBoardIcon["minion"] = 3] = "minion";
        ScoreBoardIcon[ScoreBoardIcon["score"] = 4] = "score";
        ScoreBoardIcon[ScoreBoardIcon["spells"] = 5] = "spells";
    })(dataDragon.ScoreBoardIcon || (dataDragon.ScoreBoardIcon = {}));
    var ScoreBoardIcon = dataDragon.ScoreBoardIcon;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    (function (MapId) {
        MapId[MapId["map1"] = 1] = "map1";
        MapId[MapId["map10"] = 10] = "map10";
        MapId[MapId["map11"] = 11] = "map11";
        MapId[MapId["map12"] = 12] = "map12";
    })(dataDragon.MapId || (dataDragon.MapId = {}));
    var MapId = dataDragon.MapId;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    (function (Region) {
        Region[Region["br"] = 0] = "br";
        Region[Region["eune"] = 1] = "eune";
        Region[Region["euw"] = 2] = "euw";
        Region[Region["kr"] = 3] = "kr";
        Region[Region["lan"] = 4] = "lan";
        Region[Region["las"] = 5] = "las";
        Region[Region["na"] = 6] = "na";
        Region[Region["oce"] = 7] = "oce";
        Region[Region["ru"] = 8] = "ru";
        Region[Region["tr"] = 9] = "tr";
    })(dataDragon.Region || (dataDragon.Region = {}));
    var Region = dataDragon.Region;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    dataDragon.dataDragonDomain = 'ddragon.leagueoflegends.com';
    dataDragon.defaultRegion = 6 /* na */;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    function getRealmAsync(region) {
        if (region === void 0) { region = dataDragon.defaultRegion; }
        const targetURL = 'https://' + dataDragon.dataDragonDomain + '/realms/' + dataDragon.Region[region] + '.json';
        return dataDragon.getJSONFromHttpRequestAsync(targetURL);
    }
    dataDragon.getRealmAsync = getRealmAsync;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    function getVersionsAsync() {
        const targetURL = 'https://' + dataDragon.dataDragonDomain + '/api/versions.json';
        return dataDragon.getJSONFromHttpRequestAsync(targetURL);
    }
    dataDragon.getVersionsAsync = getVersionsAsync;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    function getLanguagesAsync() {
        const url = 'https://' + dataDragon.dataDragonDomain + '/cdn/languages.json';
        return dataDragon.getJSONFromHttpRequestAsync(url);
    }
    dataDragon.getLanguagesAsync = getLanguagesAsync;
    function getLanguageCodesAsync() {
        return getLanguagesAsync().then(function (languages) {
            var codes = new Array(languages.length);
            languages.forEach(function (language, index, array) {
                codes[index] = dataDragon.LanguageCode[language];
            });
            return codes;
        });
    }
    dataDragon.getLanguageCodesAsync = getLanguageCodesAsync;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    function createProfileIconImageURL(version, id) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/profileicon/' + id + '.png';
    }
    dataDragon.createProfileIconImageURL = createProfileIconImageURL;
    function createChampionSplashImageURL(championName, skinNumber) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/img/champion/splash/' + championName + '_' + skinNumber + '.jpg';
    }
    dataDragon.createChampionSplashImageURL = createChampionSplashImageURL;
    function createChampionLoadingScreenArtImageURL(championName, skinNumber) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/img/champion/loading/' + championName + '_' + skinNumber + '.jpg';
    }
    dataDragon.createChampionLoadingScreenArtImageURL = createChampionLoadingScreenArtImageURL;
    function createChampionSquareImageURL(version, championName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/champion/' + championName + '.png';
    }
    dataDragon.createChampionSquareImageURL = createChampionSquareImageURL;
    function createChampionPassiveAbilityImageURL(version, fullImageName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/passive/' + fullImageName;
    }
    dataDragon.createChampionPassiveAbilityImageURL = createChampionPassiveAbilityImageURL;
    function createChampionAbilityImageURL(version, fullImageName) {
        return createSpellImageURL(version, fullImageName);
    }
    dataDragon.createChampionAbilityImageURL = createChampionAbilityImageURL;
    function createSpellImageURL(version, fullImageName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/spell/' + fullImageName;
    }
    function createSummonerSpellImageURL(version, spellName) {
        return createSpellImageURL(version, 'Summoner' + spellName + '.png');
    }
    dataDragon.createSummonerSpellImageURL = createSummonerSpellImageURL;
    function createItemImageURL(version, id) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/item/' + id + '.png';
    }
    dataDragon.createItemImageURL = createItemImageURL;
    function createMasteryImageURL(version, id) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/mastery/' + id + '.png';
    }
    dataDragon.createMasteryImageURL = createMasteryImageURL;
    function createRuneImageURL(version, fullImageName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/rune/' + fullImageName;
    }
    dataDragon.createRuneImageURL = createRuneImageURL;
    function createSpriteImageURL(version, spriteImageName) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/sprite/' + spriteImageName;
    }
    dataDragon.createSpriteImageURL = createSpriteImageURL;
    function createMinimapImageURL(version, id) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/map/map' + id + '.png';
    }
    dataDragon.createMinimapImageURL = createMinimapImageURL;
    function createScoreBoardIconImageURL(version, icon) {
        return 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/img/ui/' + dataDragon.ScoreBoardIcon[icon] + '.png';
    }
    dataDragon.createScoreBoardIconImageURL = createScoreBoardIconImageURL;
})(dataDragon || (dataDragon = {}));
var dataDragon;
(function (dataDragon) {
    function getProfileIconDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/profileicon.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getProfileIconDataAsync = getProfileIconDataAsync;
    function getChampionDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/champion.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getChampionDataAsync = getChampionDataAsync;
    function getIndividualChampionDataAsync(version, id, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/champion/' + id + '.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getIndividualChampionDataAsync = getIndividualChampionDataAsync;
    function getItemDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/item.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getItemDataAsync = getItemDataAsync;
    function getRuneDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/rune.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getRuneDataAsync = getRuneDataAsync;
    function getMasteryDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/mastery.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getMasteryDataAsync = getMasteryDataAsync;
    function getSummonerSpellDataAsync(version, language) {
        const targetURL = 'http://' + dataDragon.dataDragonDomain + '/cdn/' + version + '/data/' + dataDragon.LanguageCode[language] + '/summoner.json';
        return getAPIDataAsync(targetURL);
    }
    dataDragon.getSummonerSpellDataAsync = getSummonerSpellDataAsync;
    function getAPIDataAsync(targetURL) {
        return dataDragon.getJSONFromHttpRequestAsync(targetURL).then(function (value) {
            value.type = dataDragon.APIDataType[value.type];
            return value;
        });
    }
})(dataDragon || (dataDragon = {}));
asyncTest('getProfileIconDataAsync test', function () {
    dataDragon.getProfileIconDataAsync(CURRENT_LOL_VERSION, 9 /* en_US */).then(function (value) {
        start();
        notStrictEqual(value, undefined);
        notStrictEqual(value.data, undefined);
        notStrictEqual(value.data, undefined);
        equal(value.type, 0 /* profileicon */);
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
asyncTest('getChampionDataAsync test', function () {
    dataDragon.getChampionDataAsync(CURRENT_LOL_VERSION, 9 /* en_US */).then(function (value) {
        start();
        notStrictEqual(value, undefined);
        notStrictEqual(value.data, undefined);
        notStrictEqual(value.format, undefined);
        notStrictEqual(value.version, undefined);
        equal(value.type, 1 /* champion */);
        for (var prop in value.data) {
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
asyncTest('getIndividualChampionDataAsync test', function () {
    dataDragon.getIndividualChampionDataAsync(CURRENT_LOL_VERSION, 'Aatrox', 9 /* en_US */).then(function (value) {
        start();
        notStrictEqual(value, undefined);
        notStrictEqual(value.data, undefined);
        notStrictEqual(value.format, undefined);
        notStrictEqual(value.version, undefined);
        equal(value.type, 1 /* champion */);
        for (var prop in value.data) {
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
            val.recommended.forEach(function (recommendedValue) {
                notStrictEqual(recommendedValue.blocks, undefined);
                recommendedValue.blocks.forEach(function (block) {
                    notStrictEqual(block.items, undefined);
                    block.items.forEach(function (blockItem) {
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
            val.skins.forEach(function (skin) {
                notStrictEqual(skin.id, undefined);
                notStrictEqual(skin.name, undefined);
                notStrictEqual(skin.num, undefined);
            });
            notStrictEqual(val.spells, undefined);
            val.spells.forEach(function (spell) {
                notStrictEqual(spell.cooldown, undefined);
                notStrictEqual(spell.cooldown.length, 0);
                notStrictEqual(spell.cooldownBurn, undefined);
                notStrictEqual(spell.cost, undefined);
                notStrictEqual(spell.costBurn, undefined);
                notStrictEqual(spell.costType, undefined);
                notStrictEqual(spell.description, undefined);
                notStrictEqual(spell.effect, undefined);
                spell.effect.forEach(function (effect) {
                    if (effect != null) {
                        notStrictEqual(effect, undefined);
                        notStrictEqual(effect.length, undefined);
                        effect.forEach(function (effectValue) {
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
                if (typeof spell.range == typeof (new Array())) {
                    spell.range.forEach(function (value) {
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
asyncTest('getItemDataAsync test', function () {
    dataDragon.getItemDataAsync(CURRENT_LOL_VERSION, 9 /* en_US */).then(function (value) {
        start();
        notUndefined(value);
        notUndefined(value.basic);
        notUndefined(value.data);
        notUndefined(value.groups);
        notUndefined(value.tree);
        notUndefined(value.type);
        notUndefined(value.version);
        value.tree.forEach(function (treeValue) {
            notUndefined(treeValue.header);
            notUndefined(treeValue.tags);
        });
        value.groups.forEach(function (groupsValue) {
            notUndefined(groupsValue.id);
            notUndefined(groupsValue.MaxGroupOwnable);
        });
        var basic = value.basic;
        basicTest(basic);
        for (var dataProp in value.data) {
            var data = value.data[dataProp];
            notUndefined(data.colloq);
            notUndefined(data.description);
            for (var effectProp in data.effect) {
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
            if (data.into !== undefined) {
                data.into.forEach(function (intoValue) {
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
            tags.forEach(function (tagsValue) {
                notUndefined(tagsValue);
            });
        }
    });
});
asyncTest('getRuneDataAsync test', function () {
    dataDragon.getRuneDataAsync(CURRENT_LOL_VERSION, 9 /* en_US */).then(function (value) {
        start();
        notUndefined(value);
        notUndefined(value.basic);
        notUndefined(value.data);
        notUndefined(value.type);
        notUndefined(value.version);
        basicTest(value.basic);
        for (var dataProp in value.data) {
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
            tags.forEach(function (tagsValue) {
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
asyncTest('getMasteryDataAsync test', function () {
    dataDragon.getMasteryDataAsync(CURRENT_LOL_VERSION, 9 /* en_US */).then(function (value) {
        start();
        notUndefined(value.data);
        notUndefined(value.tree);
        notUndefined(value.type);
        notUndefined(value.version);
        var tree = value.tree;
        tree.forEach(function (treeValue) {
            notUndefined(treeValue.masteryId);
            notUndefined(treeValue.prereq);
        });
        for (var dataProp in value.data) {
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
asyncTest('getSummonerSpellDataAsync test', function () {
    dataDragon.getSummonerSpellDataAsync(CURRENT_LOL_VERSION, 9 /* en_US */).then(function (value) {
        start();
        notUndefined(value.data);
        notUndefined(value.type);
        notUndefined(value.version);
        for (var dataProp in value.data) {
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
function basicTest(basic) {
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
    for (var prop in basic.maps) {
        notUndefined(basic.maps[prop]);
    }
    var stats = basic.stats;
    statsTest(stats);
    basic.tags.forEach(function (tagsValue) {
        notUndefined(tagsValue);
    });
    notUndefined(basic.gold.base);
    notUndefined(basic.gold.purchasable);
    notUndefined(basic.gold.sell);
    notUndefined(basic.gold.total);
    basic.into.forEach(function (intoValue) {
        notUndefined(intoValue);
    });
    notUndefined(basic.rune.isrune);
    notUndefined(basic.rune.tier);
    notUndefined(basic.rune.type);
}
function statsTest(stats) {
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
var CURRENT_LOL_VERSION = '5.9.1';
function notUndefined(value, message) {
    notStrictEqual(value, undefined, message);
}
test('createProfileIconImageURL test', function () {
    equal(dataDragon.createProfileIconImageURL('5.2.1', 588), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/profileicon/588.png');
});
test('createChampionSplashImageURL test', function () {
    equal(dataDragon.createChampionSplashImageURL('Aatrox', 0), 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg');
});
test('createChampionLoadingScreenArtImageURL test', function () {
    equal(dataDragon.createChampionLoadingScreenArtImageURL('Aatrox', 0), 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg');
});
test('createChampionSquareImageURL test', function () {
    equal(dataDragon.createChampionSquareImageURL('5.2.1', 'Aatrox'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/Aatrox.png');
});
test('createChampionPassiveAbilityImageURL test', function () {
    equal(dataDragon.createChampionPassiveAbilityImageURL('5.2.1', 'Cryophoenix_Rebirth.png'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/passive/Cryophoenix_Rebirth.png');
});
test('createChampionAbilityImageURL test', function () {
    equal(dataDragon.createChampionAbilityImageURL('5.2.1', 'FlashFrost.png'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/spell/FlashFrost.png');
});
test('createSummonerSpellImageURL test', function () {
    equal(dataDragon.createSummonerSpellImageURL('5.2.1', 'Flash'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/spell/SummonerFlash.png');
});
test('createItemImageURL test', function () {
    equal(dataDragon.createItemImageURL('5.2.1', 1001), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/1001.png');
});
test('createMasteryImageURL test', function () {
    equal(dataDragon.createMasteryImageURL('5.2.1', 4111), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/mastery/4111.png');
});
test('createRuneImageURL test', function () {
    equal(dataDragon.createRuneImageURL('5.2.1', '8001.png'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/rune/8001.png');
});
test('createSpriteImageURL test', function () {
    equal(dataDragon.createSpriteImageURL('5.2.1', 'spell0.png'), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/sprite/spell0.png');
});
test('createMinimapImageURL test', function () {
    equal(dataDragon.createMinimapImageURL('5.2.1', 11 /* map11 */), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/map/map11.png');
});
test('createScoreBoardIconImageURL test', function () {
    equal(dataDragon.createScoreBoardIconImageURL('5.2.1', 0 /* champion */), 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/ui/champion.png');
});
asyncTest('getLanguageCodesAsync test', function () {
    dataDragon.getLanguageCodesAsync().then(function (languages) {
        start();
        notEqual(languages.length, 0);
    });
});
asyncTest('getRealmAsync test', function () {
    dataDragon.getRealmAsync(dataDragon.defaultRegion).then(function (data) {
        start();
        notStrictEqual(data.cdn, undefined);
        notStrictEqual(data.css, undefined);
        ok(isNaN(data.css));
        notStrictEqual(data.dd, undefined);
        ok(isNaN(data.dd));
        notStrictEqual(data.l, undefined);
        notStrictEqual(data.lg, undefined);
        ok(isNaN(data.lg));
        notStrictEqual(data.n, undefined);
        notStrictEqual(data.profileiconmax, undefined);
        notStrictEqual(data.store, undefined);
        notStrictEqual(data.v, undefined);
        ok(isNaN(data.v));
    });
});
asyncTest('getVersionsAsync test', function () {
    dataDragon.getVersionsAsync().then(function (versions) {
        start();
        notEqual(versions.length, 0);
        versions.forEach(function (version, index, array) {
            ok(isNaN(version));
        });
    });
});
//# sourceMappingURL=dataDragonTest.js.map