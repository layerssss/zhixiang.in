/// <reference path="/ISPReferences/inc/misc.inc.js" />
/*<!--*/
return {
getClassNav: function (page) {
    if (typeof ($subPage) == 'undefined') {
        return $cur.substring(0, page.length) == page ? 'active' : '';
    }
    if ($subPage && !page) {
        return '';
    }
    if ($subPage.substring(0, page.length) == page) {
        return 'active';
    }
    return '';
}, 
getClassLang:function (lang,curLang,langs) {
        return (lang == curLang ? 'active': '')+(langs?(!langs[curLang]?' langnan':''):'');
},
getHrefLang:function (lang) {
        if (typeof ($subPage) == 'undefined') {
            var HomePages={};
            HomePages["zh"] = "NiHao";
            HomePages["en"] = "Hello";
            HomePages["eo"] = "Saluton";
            return '/'+HomePages[lang];
        }
        return $subPage+'.'+lang;
}
};
//-->