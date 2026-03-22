(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/ssr/app_0taw3jk._.js",
"[project]/app/components/FootnoteRef.tsx [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FootnoteRef",
    ()=>FootnoteRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
;
const FootnoteRef = ({ id })=>{
    const handleClick = (e)=>{
        e.preventDefault();
        const noteEl = document.getElementById(`note-${id}`);
        if (noteEl) {
            noteEl.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            noteEl.classList.remove('highlighted');
            // Force reflow
            void noteEl.offsetWidth;
            noteEl.classList.add('highlighted');
            setTimeout(()=>noteEl.classList.remove('highlighted'), 2500);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `#note-${id}`,
        id: `ref-${id}`,
        className: "footnote-ref",
        onClick: handleClick,
        title: `Voir la note ${id}`,
        "aria-label": `Note de bas de page ${id}`,
        children: id
    }, void 0, false, {
        fileName: "[project]/app/components/FootnoteRef.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/hooks/useIntersectionObserver.ts [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActiveSection",
    ()=>useActiveSection,
    "useIntersectionObserver",
    ()=>useIntersectionObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
;
function useIntersectionObserver(threshold = 0.1) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(el);
            }
        }, {
            threshold,
            rootMargin: '0px 0px -50px 0px'
        });
        observer.observe(el);
        return ()=>observer.unobserve(el);
    }, [
        threshold
    ]);
    return {
        ref,
        isVisible
    };
}
function useActiveSection(sectionIds) {
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const visibleEntries = entries.filter((e)=>e.isIntersecting);
            if (visibleEntries.length > 0) {
                setActiveId(visibleEntries[0].target.id);
            }
        }, {
            rootMargin: '-100px 0px -60% 0px',
            threshold: 0
        });
        sectionIds.forEach((id)=>{
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return ()=>observer.disconnect();
    }, [
        sectionIds
    ]);
    return activeId;
}
}),
"[project]/app/components/RevealSection.tsx [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RevealSection",
    ()=>RevealSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useIntersectionObserver$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useIntersectionObserver.ts [app-edge-ssr] (ecmascript)");
;
;
const RevealSection = ({ children, className = '', delay = 0, id })=>{
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useIntersectionObserver$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useIntersectionObserver"])(0.05);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        id: id,
        className: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`,
        style: {
            transitionDelay: `${delay}ms`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/RevealSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/data/articleData.ts [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bibliography",
    ()=>bibliography,
    "footnotes",
    ()=>footnotes,
    "keywords",
    ()=>keywords,
    "tableOfContents",
    ()=>tableOfContents
]);
const footnotes = [
    {
        id: 1,
        text: "La Constitution marocaine de 2011, dans son article 5, dispose que « l'amazighe constitue une langue officielle de l'État, en tant que patrimoine commun à tous les Marocains sans exception ». La loi organique n° 26-16 relative aux étapes de la mise en œuvre du caractère officiel de l'amazighe n'a été adoptée qu'en 2019."
    },
    {
        id: 2,
        text: "Cette conception s'inscrit dans la tradition constructiviste en sciences sociales, telle qu'elle a été formalisée notamment par Peter Berger et Thomas Luckmann dans La construction sociale de la réalité (1966)."
    },
    {
        id: 3,
        text: "Voir notamment les travaux de Jean-Claude Kaufmann, L'invention de soi : une théorie de l'identité, Paris, Armand Colin, 2004."
    },
    {
        id: 4,
        text: "Claude Dubar, La crise des identités : l'interprétation d'une mutation, Paris, PUF, 2000, p. 109 et suivantes."
    },
    {
        id: 5,
        text: "Yves Jeanneret, Penser la trivialité. Volume 1 : La vie triviale des êtres culturels, Paris, Hermès Lavoisier, 2008."
    },
    {
        id: 6,
        text: "Stuart Hall, « Who Needs Identity? », in Stuart Hall et Paul du Gay (dir.), Questions of Cultural Identity, Londres, Sage, 1996, p. 1 à 17."
    },
    {
        id: 7,
        text: "Fredrik Barth (dir.), Ethnic Groups and Boundaries: The Social Organization of Culture Difference, Bergen, Universitetsforlaget, 1969."
    },
    {
        id: 8,
        text: "Andreas Wimmer, Ethnic Boundary Making: Institutions, Power, Networks, Oxford, Oxford University Press, 2013."
    },
    {
        id: 9,
        text: "Patrick Geary, The Myth of Nations: The Medieval Origins of Europe, Princeton, Princeton University Press, 2002."
    },
    {
        id: 10,
        text: "Sur les symboles identitaires amazighs, voir Bruce Maddy-Weitzman, The Berber Identity Movement and the Challenge to North African States, Austin, University of Texas Press, 2011."
    },
    {
        id: 11,
        text: "Manuel Castells, La société en réseau, traduit de l'anglais par Philippe Delamare, Paris, Fayard, 1998."
    },
    {
        id: 12,
        text: "Fabien Granjon, L'Internet militant : mouvement social et usages des réseaux télématiques, Rennes, Apogée, 2001."
    },
    {
        id: 13,
        text: "Nancy Fraser, « Rethinking the Public Sphere: A Contribution to the Critique of Actually Existing Democracy », Social Text, n° 25/26, 1990, p. 56 à 80."
    },
    {
        id: 14,
        text: "Sur la notion de médiation identitaire numérique, voir Fathallah Daghmi, Farid Toumi et Abderrahmane Amsidder (dir.), Les médias font-ils les révolutions ? Regards critiques sur les soulèvements arabes, Paris, L'Harmattan, 2013."
    },
    {
        id: 15,
        text: "Dominique Cardon, La démocratie Internet : promesses et limites, Paris, Seuil, 2010."
    },
    {
        id: 16,
        text: "Sur le Dahir berbère et ses conséquences, voir Daniel Rivet, Le Maroc de Lyautey à Mohammed V : le double visage du Protectorat, Paris, Denoël, 1999."
    },
    {
        id: 17,
        text: "Ahmed Boukous, Revitalisation de la langue amazighe : défis, enjeux et stratégies, Paris, IRCAM/L'Harmattan, 2012."
    },
    {
        id: 18,
        text: "Voir Mohamed Chtatou, « The Institutionalization of the Amazigh Language and Identity in Morocco », The Journal of North African Studies, vol. 22, n° 4, 2017, p. 588 à 610."
    },
    {
        id: 19,
        text: "Sur l'espace de Tamazgha et sa dimension transnationale, voir Paul Silverstein, Algeria in France: Transpolitics, Race, and Nation, Bloomington, Indiana University Press, 2004."
    },
    {
        id: 20,
        text: "Cédric Audebert et Mohamed Kamel Doraï (dir.), Migration in a Globalised World: New Research Issues and Prospects, Amsterdam, Amsterdam University Press, 2010."
    },
    {
        id: 21,
        text: "Nadia Benzakour, « Les médias amazighs au Maroc : entre reconnaissance officielle et réalités du terrain », Revue des médias, n° 15, 2014, p. 45 à 62."
    },
    {
        id: 22,
        text: "Farid Toumi et Fathallah Daghmi, « Représentations médiatiques de l'amazighité : entre folklorisation et revendication politique », Revue française des sciences de l'information et de la communication, n° 12, 2018."
    },
    {
        id: 23,
        text: "Sur la diversité des productions numériques amazighes, voir Miriam Mezzine, « Amazigh Digital Activism: Identity, Language and Community Building Online », Middle East Journal of Culture and Communication, vol. 10, n° 2, 2017, p. 187 à 205."
    },
    {
        id: 24,
        text: "Paul Ricœur, Soi-même comme un autre, Paris, Seuil, 1990."
    },
    {
        id: 25,
        text: "Bernard Miège, L'information-communication, objet de connaissance, Bruxelles, De Boeck, 2004 ; Stéphane Olivesi (dir.), Sciences de l'information et de la communication : objets, savoirs, discipline, Grenoble, PUG, 2006."
    },
    {
        id: 26,
        text: "Le choix de ces trois régions a été guidé par la volonté de couvrir les trois principales variantes dialectales de l'amazigh au Maroc : le tachelhit (sud-ouest), le tamazight (centre) et le tarifit (nord)."
    },
    {
        id: 27,
        text: "Le questionnaire a fait l'objet d'un prétest auprès de 30 individus en décembre 2016, qui a conduit à la reformulation de plusieurs items et à l'ajout de questions relatives aux pratiques musicales et artistiques amazighes en ligne."
    },
    {
        id: 28,
        text: "La sélection des plateformes a été effectuée sur la base de critères de visibilité (nombre de followers ou d'abonnés), de régularité de publication et de représentativité des différentes tendances du mouvement amazigh (culturalistes, politiques, autonomistes, panmazighes)."
    },
    {
        id: 29,
        text: "Laurence Bardin, L'analyse de contenu, Paris, PUF, 2013 (1ʳᵉ édition 1977)."
    },
    {
        id: 30,
        text: "Patrick Charaudeau, Le discours politique : les masques du pouvoir, Paris, Vuibert, 2005."
    },
    {
        id: 31,
        text: "Virginia Braun et Victoria Clarke, « Using Thematic Analysis in Psychology », Qualitative Research in Psychology, vol. 3, n° 2, 2006, p. 77 à 101."
    },
    {
        id: 32,
        text: "Paul Silverstein, « The Kabyle Myth: Colonization and the Production of Ethnicity », in Brian Keith Axel (dir.), From the Margins: Historical Anthropology and Its Futures, Durham, Duke University Press, 2002, p. 122 à 155."
    },
    {
        id: 33,
        text: "Sur le Hirak du Rif et ses dimensions identitaires, voir Abadie, Dumont et alii, « Le Hirak du Rif : un mouvement social entre revendications socioéconomiques et identitaires », L'Année du Maghreb, n° 19, 2018, p. 157 à 175."
    },
    {
        id: 34,
        text: "Cette logique de réinvention culturelle rejoint les analyses de Arjun Appadurai sur les « médiascapes » et les « ethnoscapes » dans le contexte de la globalisation culturelle. Voir Arjun Appadurai, Modernity at Large: Cultural Dimensions of Globalization, Minneapolis, University of Minnesota Press, 1996."
    },
    {
        id: 35,
        text: "Amin Maalouf, Les identités meurtrières, Paris, Grasset, 1998."
    },
    {
        id: 36,
        text: "Rogers Brubaker, « Ethnicity without Groups », Archives européennes de sociologie, vol. 43, n° 2, 2002, p. 163 à 189."
    },
    {
        id: 37,
        text: "Manuel Castells, Le pouvoir de l'identité, traduit de l'anglais par Paul Chemla, Paris, Fayard, 1999."
    },
    {
        id: 38,
        text: "Cette formulation reprend les termes du préambule de la Constitution marocaine de 2011, qui définit l'identité nationale comme « une et indivisible » tout en reconnaissant la pluralité de ses « affluents »."
    },
    {
        id: 39,
        text: "Michael Billig, Banal Nationalism, Londres, Sage, 1995."
    },
    {
        id: 40,
        text: "Cette notion d'« identité connectée » est inspirée des travaux de Fanny Georges sur la présentation de soi en ligne. Voir Fanny Georges, « Représentation de soi et identité numérique : une approche sémiotique et quantitative de l'emprise culturelle du web 2.0 », Réseaux, n° 154, 2009, p. 165 à 193."
    },
    {
        id: 41,
        text: "Monica Heller, Linguistic Minorities and Modernity: A Sociolinguistic Ethnography, Londres, Continuum, 2006."
    },
    {
        id: 42,
        text: "Salem Chaker, Berbères aujourd'hui : langue, culture, identité, Paris, L'Harmattan, 1998."
    }
];
const bibliography = [
    "APPADURAI Arjun, Modernity at Large: Cultural Dimensions of Globalization, Minneapolis, University of Minnesota Press, 1996.",
    "AUDEBERT Cédric et DORAÏ Mohamed Kamel (dir.), Migration in a Globalised World: New Research Issues and Prospects, Amsterdam, Amsterdam University Press, 2010.",
    "BARDIN Laurence, L'analyse de contenu, Paris, PUF, 2013.",
    "BARTH Fredrik (dir.), Ethnic Groups and Boundaries: The Social Organization of Culture Difference, Bergen, Universitetsforlaget, 1969.",
    "BILLIG Michael, Banal Nationalism, Londres, Sage, 1995.",
    "BOUKOUS Ahmed, Revitalisation de la langue amazighe : défis, enjeux et stratégies, Paris, IRCAM/L'Harmattan, 2012.",
    "BRAUN Virginia et CLARKE Victoria, « Using Thematic Analysis in Psychology », Qualitative Research in Psychology, vol. 3, n° 2, 2006, p. 77 à 101.",
    "BRUBAKER Rogers, « Ethnicity without Groups », Archives européennes de sociologie, vol. 43, n° 2, 2002, p. 163 à 189.",
    "CARDON Dominique, La démocratie Internet : promesses et limites, Paris, Seuil, 2010.",
    "CASTELLS Manuel, La société en réseau, traduit de l'anglais par Philippe Delamare, Paris, Fayard, 1998.",
    "CASTELLS Manuel, Le pouvoir de l'identité, traduit de l'anglais par Paul Chemla, Paris, Fayard, 1999.",
    "CHAKER Salem, Berbères aujourd'hui : langue, culture, identité, Paris, L'Harmattan, 1998.",
    "CHARAUDEAU Patrick, Le discours politique : les masques du pouvoir, Paris, Vuibert, 2005.",
    "DAGHMI Fathallah, TOUMI Farid et AMSIDDER Abderrahmane (dir.), Les médias font-ils les révolutions ? Regards critiques sur les soulèvements arabes, Paris, L'Harmattan, 2013.",
    "DUBAR Claude, La crise des identités : l'interprétation d'une mutation, Paris, PUF, 2000.",
    "FRASER Nancy, « Rethinking the Public Sphere: A Contribution to the Critique of Actually Existing Democracy », Social Text, n° 25/26, 1990, p. 56 à 80.",
    "GEARY Patrick, The Myth of Nations: The Medieval Origins of Europe, Princeton, Princeton University Press, 2002.",
    "GEORGES Fanny, « Représentation de soi et identité numérique : une approche sémiotique et quantitative de l'emprise culturelle du web 2.0 », Réseaux, n° 154, 2009, p. 165 à 193.",
    "GRANJON Fabien, L'Internet militant : mouvement social et usages des réseaux télématiques, Rennes, Apogée, 2001.",
    "HALL Stuart, « Who Needs Identity? », in HALL Stuart et DU GAY Paul (dir.), Questions of Cultural Identity, Londres, Sage, 1996, p. 1 à 17.",
    "HELLER Monica, Linguistic Minorities and Modernity: A Sociolinguistic Ethnography, Londres, Continuum, 2006.",
    "JEANNERET Yves, Penser la trivialité. Volume 1 : La vie triviale des êtres culturels, Paris, Hermès Lavoisier, 2008.",
    "KAUFMANN Jean-Claude, L'invention de soi : une théorie de l'identité, Paris, Armand Colin, 2004.",
    "MAALOUF Amin, Les identités meurtrières, Paris, Grasset, 1998.",
    "MADDY-WEITZMAN Bruce, The Berber Identity Movement and the Challenge to North African States, Austin, University of Texas Press, 2011.",
    "MIÈGE Bernard, L'information-communication, objet de connaissance, Bruxelles, De Boeck, 2004.",
    "OLIVESI Stéphane (dir.), Sciences de l'information et de la communication : objets, savoirs, discipline, Grenoble, PUG, 2006.",
    "RICŒUR Paul, Soi-même comme un autre, Paris, Seuil, 1990.",
    "RIVET Daniel, Le Maroc de Lyautey à Mohammed V : le double visage du Protectorat, Paris, Denoël, 1999.",
    "SILVERSTEIN Paul, Algeria in France: Transpolitics, Race, and Nation, Bloomington, Indiana University Press, 2004.",
    "WIMMER Andreas, Ethnic Boundary Making: Institutions, Power, Networks, Oxford, Oxford University Press, 2013."
];
const keywords = [
    "Identité amazighe",
    "Ethnicité",
    "Réseaux numériques",
    "Discours identitaire",
    "Jeunesse marocaine",
    "Sciences de l'information et de la communication"
];
const tableOfContents = [
    {
        id: "introduction",
        label: "Introduction",
        level: 0
    },
    {
        id: "section-1",
        label: "1. Cadre théorique",
        level: 0
    },
    {
        id: "section-1-1",
        label: "1.1. L'identité comme construction sociale",
        level: 1
    },
    {
        id: "section-1-2",
        label: "1.2. Ethnicité et frontières symboliques",
        level: 1
    },
    {
        id: "section-1-3",
        label: "1.3. Médias numériques et reconfigurations",
        level: 1
    },
    {
        id: "section-2",
        label: "2. Contexte sociopolitique",
        level: 0
    },
    {
        id: "section-2-1",
        label: "2.1. Historicité du mouvement amazigh",
        level: 1
    },
    {
        id: "section-2-2",
        label: "2.2. La dimension transnationale",
        level: 1
    },
    {
        id: "section-2-3",
        label: "2.3. Médias et représentation",
        level: 1
    },
    {
        id: "section-3",
        label: "3. Méthodologie",
        level: 0
    },
    {
        id: "section-3-1",
        label: "3.1. Positionnement épistémologique",
        level: 1
    },
    {
        id: "section-3-2",
        label: "3.2. Terrain et échantillonnage",
        level: 1
    },
    {
        id: "section-3-3",
        label: "3.3. Analyse de contenu",
        level: 1
    },
    {
        id: "section-3-4",
        label: "3.4. Entretiens semi-directifs",
        level: 1
    },
    {
        id: "section-4",
        label: "4. Résultats et discussion",
        level: 0
    },
    {
        id: "section-4-1",
        label: "4.1. Espaces de reformulation identitaire",
        level: 1
    },
    {
        id: "section-4-2",
        label: "4.2. Perception identitaire chez les jeunes",
        level: 1
    },
    {
        id: "section-4-3",
        label: "4.3. Discordances discours / vécu",
        level: 1
    },
    {
        id: "section-4-4",
        label: "4.4. Engagement identitaire en ligne",
        level: 1
    },
    {
        id: "section-4-5",
        label: "4.5. Langue, identité et numérique",
        level: 1
    },
    {
        id: "conclusion",
        label: "Conclusion",
        level: 0
    },
    {
        id: "notes",
        label: "Notes",
        level: 0
    },
    {
        id: "bibliographie",
        label: "Bibliographie",
        level: 0
    }
];
}),
"[project]/app/components/TableOfContents.tsx [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableOfContents",
    ()=>TableOfContents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-edge-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-edge-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-edge-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$articleData$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/articleData.ts [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useIntersectionObserver$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useIntersectionObserver.ts [app-edge-ssr] (ecmascript)");
;
;
;
;
;
const TableOfContents = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$articleData$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["tableOfContents"].map((t)=>t.id), []);
    const activeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useIntersectionObserver$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useActiveSection"])(sectionIds);
    const handleClick = (id)=>{
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsOpen(false);
    };
    const TocContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 lg:p-0 overflow-y-auto h-full lg:h-auto bg-surface dark:bg-ink-950 border border-default rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-sm font-bold uppercase tracking-wider text-earth-600 dark:text-earth-400 mb-4 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/app/components/TableOfContents.tsx",
                            lineNumber: 23,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Sommaire"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TableOfContents.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$articleData$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["tableOfContents"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleClick(item.id),
                                className: `w-full text-left text-sm py-1.5 px-3 rounded-md transition-all duration-300 flex items-center gap-1.5 ${item.level === 1 ? 'pl-7' : ''} ${activeId === item.id ? 'bg-amber-200/30 dark:bg-amber-400/25 text-ink-900 dark:text-ink-100 font-semibold' : 'text-ink-600 dark:text-ink-300 hover:text-amber-200 dark:hover:text-amber-100 hover:bg-gray-100 dark:hover:bg-ink-800'}`,
                                children: [
                                    activeId === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 12,
                                        className: "text-amazigh-600 dark:text-amazigh-400 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TableOfContents.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-snug",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TableOfContents.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TableOfContents.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, item.id, false, {
                            fileName: "[project]/app/components/TableOfContents.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/components/TableOfContents.tsx",
                    lineNumber: 26,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/TableOfContents.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "no-print fixed bottom-6 right-6 z-50 lg:hidden bg-amazigh-600 text-white p-3.5 rounded-full shadow-lg hover:bg-amazigh-700 transition-all duration-300",
                "aria-label": "Table des matières",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/app/components/TableOfContents.tsx",
                    lineNumber: 57,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/app/components/TableOfContents.tsx",
                    lineNumber: 57,
                    columnNumber: 37
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/TableOfContents.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `no-print fixed z-50 top-0 right-0 h-full w-80 bg-white/95 dark:bg-ink-900/95 shadow-2xl transform transition-transform duration-500 ease-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
                "aria-label": "Table des matières",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TocContent, {}, void 0, false, {
                    fileName: "[project]/app/components/TableOfContents.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/TableOfContents.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 z-40 lg:hidden",
                onClick: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/components/TableOfContents.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden lg:block lg:w-72 xl:w-80 shrink-0 bg-white/0 dark:bg-ink-950/0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Table des matières",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TocContent, {}, void 0, false, {
                            fileName: "[project]/app/components/TableOfContents.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/TableOfContents.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/TableOfContents.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/TableOfContents.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
"[project]/app/components/TTSControls.tsx [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TTSControls",
    ()=>TTSControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
;
;
const TTSControls = ({ isPlaying, isPaused, voicesLoaded, frenchVoice, onPlay, onPause, onStop })=>{
    // Check if we're on the client side
    if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('speechSynthesis' in window)) return null;
    //TURBOPACK unreachable
    ;
};
}),
"[project]/app/hooks/useReadingProgress.ts [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReadingProgress",
    ()=>useReadingProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
;
function useReadingProgress() {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
            setProgress(Math.min(100, scrollPercent));
        };
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return progress;
}
}),
"[project]/app/hooks/useTTS.ts [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTTS",
    ()=>useTTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
;
function useTTS() {
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentParagraph, setCurrentParagraph] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [voicesLoaded, setVoicesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [frenchVoice, setFrenchVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const utteranceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const paragraphsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const currentIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadVoices = ()=>{
            const voices = speechSynthesis.getVoices();
            const french = voices.find((v)=>v.lang.startsWith('fr') && v.localService) || voices.find((v)=>v.lang.startsWith('fr')) || null;
            setFrenchVoice(french);
            setVoicesLoaded(voices.length > 0);
        };
        loadVoices();
        speechSynthesis.onvoiceschanged = loadVoices;
        return ()=>{
            speechSynthesis.onvoiceschanged = null;
        };
    }, []);
    const speakParagraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        if (index >= paragraphsRef.current.length) {
            setIsPlaying(false);
            setIsPaused(false);
            setCurrentParagraph(null);
            return;
        }
        const text = paragraphsRef.current[index];
        currentIndexRef.current = index;
        setCurrentParagraph(`tts-p-${index}`);
        // Scroll to current paragraph
        const el = document.getElementById(`tts-p-${index}`);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.95;
        utterance.pitch = 1;
        if (frenchVoice) utterance.voice = frenchVoice;
        utterance.onend = ()=>{
            speakParagraph(index + 1);
        };
        utterance.onerror = ()=>{
            setIsPlaying(false);
            setIsPaused(false);
            setCurrentParagraph(null);
        };
        utteranceRef.current = utterance;
        speechSynthesis.speak(utterance);
    }, [
        frenchVoice
    ]);
    const collectParagraphs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const articleEl = document.getElementById('article-content');
        if (!articleEl) return [];
        const elements = articleEl.querySelectorAll('[data-tts]');
        const texts = [];
        elements.forEach((el, i)=>{
            el.id = `tts-p-${i}`;
            const text = el.textContent?.trim();
            if (text && text.length > 5) {
                texts.push(text);
            }
        });
        return texts;
    }, []);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isPaused) {
            speechSynthesis.resume();
            setIsPaused(false);
            setIsPlaying(true);
            return;
        }
        speechSynthesis.cancel();
        paragraphsRef.current = collectParagraphs();
        if (paragraphsRef.current.length === 0) return;
        setIsPlaying(true);
        setIsPaused(false);
        speakParagraph(0);
    }, [
        isPaused,
        collectParagraphs,
        speakParagraph
    ]);
    const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        speechSynthesis.pause();
        setIsPaused(true);
        setIsPlaying(false);
    }, []);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentParagraph(null);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            speechSynthesis.cancel();
        };
    }, []);
    return {
        isPlaying,
        isPaused,
        currentParagraph,
        voicesLoaded,
        frenchVoice,
        play,
        pause,
        stop
    };
}
}),
"[project]/app/page.tsx [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-edge-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-edge-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-edge-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-edge-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-edge-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-edge-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/FootnoteRef.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/RevealSection.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TableOfContents$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TableOfContents.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TTSControls$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TTSControls.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReadingProgress$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useReadingProgress.ts [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useTTS$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useTTS.ts [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contexts/ThemeContext.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$articleData$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/articleData.ts [app-edge-ssr] (ecmascript)");
'use client';
'use client';
;
;
;
;
;
;
;
;
;
;
const runtime = 'edge';
/* ── Paragraph wrapper for TTS ── */ const P = ({ children, className = '', currentParagraph, id })=>{
    const isCurrent = id ? currentParagraph === id : false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        id: id,
        "data-tts": true,
        className: `text-ink-800 dark:text-ink-200 leading-[1.9] text-[1.05rem] md:text-[1.1rem] mb-5 text-justify transition-all duration-500 ${isCurrent ? 'tts-reading' : ''} ${className}`,
        lang: "fr",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function Home() {
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useReadingProgress$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useReadingProgress"])();
    const tts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useTTS$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useTTS"])();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const cp = tts.currentParagraph;
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleBackToRef = (id)=>{
        const refEl = document.getElementById(`ref-${id}`);
        if (refEl) {
            refEl.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-surface text-default dark:bg-ink-950 dark:text-default",
        lang: "fr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'none'
                },
                children: "Identité et ethnicité amazighes à l'ère des réseaux numériques — B. Boulouayz Article scientifique sur l'évolution de l'identité amazighe dans le monde numérique, par B. Boulouayz. Explorant les constructions discursives, médiations et perceptions chez les jeunes au Maroc. Amazigh identity, Berber ethnicity, digital networks, cultural transformation."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reading-progress",
                style: {
                    width: `${progress}%`
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative overflow-hidden bg-gradient-to-br from-earth-950 via-earth-900 to-amazigh-950 dark:from-ink-950 dark:via-ink-900 dark:to-ink-900 text-white dark:text-amber-100",
                style: {
                    boxShadow: '0 5px 25px rgba(0,0,0,0.55)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.04] select-none pointer-events-none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-10 left-10 text-[12rem] font-bold leading-none",
                                children: "ⵣ"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-20 right-20 text-[8rem] font-bold leading-none",
                                children: "ⴰ"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-10 left-1/3 text-[10rem] font-bold leading-none",
                                children: "ⵎ"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-20 right-10 text-[6rem] font-bold leading-none",
                                children: "ⵏ"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 text-[14rem] font-bold leading-none -translate-x-1/2 -translate-y-1/2",
                                children: "ⵉ"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                size: 18,
                                                className: "text-amazigh-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amazigh-300 text-sm font-medium tracking-wide uppercase",
                                                children: "Article de recherche"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight mb-6 font-serif",
                                        lang: "fr",
                                        children: [
                                            "Identité et ethnicité amazighes à l'ère des réseaux numériques",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xl sm:text-2xl md:text-3xl mt-3 text-amazigh-300 font-normal",
                                                children: "constructions discursives, médiations et perceptions chez les jeunes au Maroc"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in-up",
                                style: {
                                    animationDelay: '200ms'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-4 mt-8 text-earth-200 dark:text-earth-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                    size: 18,
                                                    className: "text-amazigh-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-white",
                                                    children: "Brahim Boulouayz"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-earth-500 hidden sm:inline",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14,
                                                    className: "text-earth-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Université Ibn Zohr (Agadir)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-earth-500 hidden sm:inline",
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14,
                                                    className: "text-earth-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Université de Poitiers (MIGRINTER, UMR 7301)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleTheme,
                className: "fixed top-4 right-4 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300",
                "aria-label": "Toggle theme",
                children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 124,
                    columnNumber: 30
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 124,
                    columnNumber: 51
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8 lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TableOfContents$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["TableOfContents"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "flex-1 max-w-3xl",
                            id: "article-content",
                            lang: "fr",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    className: "mb-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-ink-900 rounded-2xl shadow-sm dark:shadow-none border border-earth-200 dark:border-ink-700 p-6 md:p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold text-earth-800 dark:text-ink-200 mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-8 h-8 bg-amazigh-100 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                            size: 16,
                                                            className: "text-amazigh-700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Résumé"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                                currentParagraph: cp,
                                                className: "text-ink-700 dark:text-ink-100 text-base leading-relaxed !mb-0",
                                                children: "Cet article interroge les dynamiques de construction identitaire amazighe telles qu'elles se déploient dans les espaces numériques au Maroc. En croisant une analyse de contenu des récits identitaires publiés sur des plateformes numériques dédiées et une enquête par questionnaire menée auprès de jeunes dans trois régions marocaines (Souss Massa Drâa, Béni Mellal Khénifra, Tanger Tétouan Al Hoceïma), cette recherche met en évidence les discordances entre les discours officiels, les productions médiatiques militantes et la perception vécue de l'identité chez les jeunes amazighophones. L'article propose un cadre théorique pluridisciplinaire articulant les sciences de l'information et de la communication, la sociologie des identités et les études postcoloniales pour saisir les reconfigurations de l'ethnicité amazighe à l'ère du numérique. Les résultats montrent que les réseaux socionumériques constituent des espaces de reformulation identitaire où coexistent des logiques de patrimonialisation, de politisation et de réinvention culturelle, tout en révélant des tensions significatives entre les catégorisations institutionnelles et les appropriations subjectives de l'amazighité par les jeunes générations."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mt-5 pt-5 border-t border-earth-100",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$articleData$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["keywords"].map((kw, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block px-3 py-1 bg-amazigh-50 text-amazigh-800 text-xs font-medium rounded-full border border-amazigh-200",
                                                        children: kw
                                                    }, i, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    className: "mb-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TTSControls$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["TTSControls"], {
                                        isPlaying: tts.isPlaying,
                                        isPaused: tts.isPaused,
                                        voicesLoaded: tts.voicesLoaded,
                                        frenchVoice: tts.frenchVoice,
                                        onPlay: tts.play,
                                        onPause: tts.pause,
                                        onStop: tts.stop
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "introduction",
                                    className: "mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200",
                                            "data-tts": true,
                                            children: "Introduction"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "La question amazighe constitue, depuis plusieurs décennies, l'un des enjeux politiques et culturels les plus structurants du Maghreb contemporain. Au Maroc, la reconnaissance constitutionnelle de l'amazigh comme langue officielle en 2011 a marqué un tournant institutionnel majeur, sans pour autant clore les débats relatifs à la place de cette composante identitaire dans le récit national",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 1
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 407
                                                }, this),
                                                ". Parallèlement à cette évolution juridique et politique, l'essor des technologies numériques a profondément reconfiguré les modalités d'expression, de négociation et de revendication identitaires. Les plateformes socionumériques offrent désormais aux acteurs du mouvement amazigh des espaces inédits de production et de diffusion de discours identitaires, contribuant ainsi à redéfinir les contours de ce que signifie « être amazigh » dans le Maroc du XXIᵉ siècle."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Le présent article s'inscrit dans le champ des sciences de l'information et de la communication (SIC), tout en mobilisant des apports conceptuels issus de la sociologie des identités, des sciences du langage et des sciences politiques. Cette approche pluridisciplinaire répond à la complexité même de l'objet étudié : l'identité amazighe, entendue ici non comme une donnée primordiale et figée, mais comme un processus socialement construit, historiquement situé et communicationnellement médiatisé",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 515
                                                }, this),
                                                ". Notre démarche s'appuie sur l'hypothèse selon laquelle il existerait une discordance significative entre les discours produits dans les espaces publics et médiatiques et la perception effective de l'identité chez les jeunes amazighs. Cette hypothèse invite à interroger non seulement les contenus des productions discursives numériques, mais également les dispositifs sociotechniques qui les portent, ainsi que les usages et les appropriations dont ils font l'objet."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: "L'article est organisé en quatre parties. La première propose un cadre théorique articulant les notions d'identité, d'ethnicité et de médiation numérique. La deuxième partie contextualise la question amazighe dans le paysage sociopolitique marocain. La troisième présente la méthodologie adoptée, combinant approches quantitative et qualitative. La quatrième partie expose les résultats de l'analyse et les met en discussion au regard de la littérature existante."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-1",
                                    className: "mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200",
                                        "data-tts": true,
                                        children: "1. Cadre théorique : identité, ethnicité et médiations numériques"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-1-1",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "1.1. L'identité comme construction sociale et communicationnelle"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "La notion d'identité a fait l'objet de théorisations abondantes dans les sciences humaines et sociales. Loin de la concevoir comme une essence stable et prédéterminée, les approches constructivistes, qui constituent le socle théorique de cette recherche, appréhendent l'identité comme un processus dynamique, relationnel et contextuellement situé",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 363
                                                }, this),
                                                ". Selon Claude Dubar, l'identité se construit à travers une double transaction : une transaction biographique, par laquelle l'individu articule son passé et son avenir dans un récit de soi cohérent, et une transaction relationnelle, par laquelle il négocie la reconnaissance de son identité revendiquée avec les identités attribuées par autrui",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 4
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 728
                                                }, this),
                                                ". Cette perspective implique que l'identité n'est jamais acquise de manière définitive : elle se fait et se défait au gré des interactions sociales, des contextes institutionnels et des rapports de pouvoir."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Dans le champ des SIC, l'identité est indissociable des dispositifs communicationnels qui la médiatisent. Comme le souligne Yves Jeanneret, tout processus identitaire suppose des « êtres culturels » qui circulent dans l'espace social et qui sont transformés par les dispositifs médiatiques qui les prennent en charge",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 5
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 333
                                                }, this),
                                                ". Les médias, qu'ils soient traditionnels ou numériques, ne se contentent pas de refléter des identités préexistantes : ils participent activement à leur élaboration, à leur mise en forme et à leur diffusion. Cette fonction performative des médias est particulièrement pertinente dans le cas de l'identité amazighe, dont la visibilité publique a été historiquement conditionnée par les politiques médiatiques de l'État marocain."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Stuart Hall, dont les travaux ont profondément renouvelé la réflexion sur les identités culturelles, propose de concevoir l'identification comme un processus articulatoire, jamais achevé, qui se déploie à travers des pratiques discursives",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 6
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 255
                                                }, this),
                                                ". Pour Hall, les identités culturelles sont des « points de suture » entre, d'une part, les discours et les pratiques qui interpellent les individus en tant que sujets sociaux et, d'autre part, les processus par lesquels ces individus investissent subjectivement les positions qui leur sont proposées. Cette conception dialogique et processuelle de l'identité s'avère particulièrement féconde pour analyser les dynamiques identitaires amazighes, qui se situent précisément à l'intersection de discours institutionnels, de productions militantes et d'appropriations individuelles."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-1-2",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "1.2. Ethnicité, frontières symboliques et processus d'identification"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Le concept d'ethnicité, tel qu'il est mobilisé dans cette recherche, s'inscrit dans la filiation des travaux fondateurs de Fredrik Barth",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 7
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 153
                                                }, this),
                                                ". Rompant avec les approches essentialistes qui définissent les groupes ethniques par un ensemble de traits culturels objectifs (langue, religion, coutumes), Barth a montré que l'ethnicité réside avant tout dans les processus de tracé et de maintien des frontières entre groupes. Ce ne sont pas les différences culturelles « objectives » qui fondent l'ethnicité, mais la pertinence que les acteurs sociaux leur accordent dans leurs interactions. L'ethnicité apparaît ainsi comme une forme d'organisation sociale de la différence culturelle, plutôt que comme l'expression directe de cette différence."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Cette perspective interactionniste a été prolongée et enrichie par les travaux d'Andreas Wimmer, qui propose d'analyser les « frontières ethniques » (ethnic boundaries) comme des constructions négociées, contestées et reconfigurées par les acteurs en fonction de leurs ressources et de leurs intérêts",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 8
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 317
                                                }, this),
                                                ". Wimmer distingue plusieurs stratégies de modification des frontières ethniques, parmi lesquelles l'expansion (qui consiste à élargir les contours du groupe), la contraction (qui vise à restreindre l'appartenance à un sous-groupe), le repositionnement (qui implique un changement d'affiliation) et le brouillage (qui tend à atténuer la saillance de la frontière). Ces stratégies sont particulièrement observables dans le cas amazigh, où les débats portent précisément sur les critères de définition de l'amazighité (la langue, le territoire, la filiation, la culture) et sur l'extension géographique de la communauté revendiquée."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Le lien entre identité et ethnicité est illustré par de nombreux exemples historiques, depuis les processus de formation ethnique des Goths dans l'Antiquité tardive, étudiés par Patrick Geary",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 9
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 208
                                                }, this),
                                                ", jusqu'aux reconfigurations identitaires berbères à l'époque contemporaine. Ces exemples montrent que l'ethnicité est toujours le produit d'un travail de construction symbolique et discursif, qui mobilise des ressources historiques, linguistiques et culturelles pour produire un sentiment d'appartenance partagé. Dans le cas amazigh, ce travail de construction fait intervenir des référents multiples : une langue (ou plutôt un ensemble de variantes linguistiques), un alphabet (le tifinagh), un territoire historique (Tamazgha, s'étendant de l'Atlantique à l'Égypte et du Sahara à la Méditerranée), des symboles partagés (le drapeau amazigh, le nouvel an amazigh Yennayer) et un récit historique mettant en avant l'antériorité de la présence amazighe en Afrique du Nord",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 1001
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-1-3",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "1.3. Médias numériques et reconfigurations identitaires"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "L'avènement des technologies numériques a profondément transformé les conditions de production, de circulation et de réception des discours identitaires. Manuel Castells a théorisé cette transformation en termes de passage d'une « société en réseau » caractérisée par de nouvelles formes d'organisation sociale fondées sur les flux d'information et les réseaux de communication",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 11
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 394
                                                }, this),
                                                ". Dans ce contexte, les mouvements sociaux et identitaires disposent de ressources communicationnelles inédites pour contourner les gatekeepers médiatiques traditionnels, produire leurs propres récits et constituer des communautés de sens au-delà des frontières géographiques."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Les travaux de Fabien Granjon sur les usages militants d'Internet montrent que les dispositifs numériques ne sont pas de simples outils techniques neutres, mais des arènes où se jouent des rapports de pouvoir et des conflits de définition",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 255
                                                }, this),
                                                ". Dans le cas des mouvements identitaires, les plateformes numériques offrent la possibilité de « contre-publics subalternes » (subaltern counterpublics), pour reprendre le concept de Nancy Fraser",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 474
                                                }, this),
                                                ", c'est-à-dire des espaces discursifs parallèles où les membres de groupes sociaux subordonnés élaborent et diffusent des contre-discours qui s'opposent aux interprétations dominantes de leur identité et de leurs intérêts."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "La notion de « médiation identitaire numérique » s'avère ici opératoire pour saisir le rôle des dispositifs socionumériques dans les processus d'identification amazighe. Cette notion, qui emprunte à la fois aux SIC et à la sociologie des usages, permet de penser conjointement les dimensions technique (les affordances des plateformes), sémiotique (les formes d'expression et de mise en scène de soi), sociale (les logiques de sociabilité et de communauté) et politique (les enjeux de visibilité et de reconnaissance) des pratiques numériques identitaires",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 572
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Dominique Cardon a montré comment les plateformes numériques reconfigurent les régimes de visibilité en offrant à des acteurs auparavant marginalisés la possibilité d'accéder à l'espace public et de participer aux débats qui les concernent",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 256
                                                }, this),
                                                ". Cette démocratisation relative de la prise de parole a des implications directes pour les mouvements identitaires amazighs, dont l'accès aux médias traditionnels (presse, radio, télévision) a longtemps été limité par les politiques étatiques de communication."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-2",
                                    className: "mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200",
                                        "data-tts": true,
                                        children: "2. Contexte sociopolitique : la question amazighe au Maroc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-2-1",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "2.1. Historicité du mouvement amazigh"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Le mouvement culturel amazigh au Maroc s'inscrit dans une trajectoire historique longue, dont les origines remontent à la période coloniale. Le « Dahir berbère » de 1930, promulgué par le Protectorat français, qui visait à soustraire les populations berbères à la juridiction du droit musulman, a paradoxalement constitué un moment fondateur du nationalisme marocain en suscitant une mobilisation unitaire contre la politique coloniale de division",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 464
                                                }, this),
                                                ". Cet épisode a durablement marqué le rapport entre amazighité et arabité dans l'imaginaire politique marocain, en associant la revendication berbère à un projet colonial de fragmentation de l'unité nationale."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Après l'indépendance en 1956, la politique d'arabisation menée par l'État marocain a contribué à marginaliser les langues et cultures amazighes dans les sphères publiques, éducatives et médiatiques",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 214
                                                }, this),
                                                ". C'est dans ce contexte que se sont structurées, à partir des années 1960 et 1970, les premières associations culturelles amazighes, parmi lesquelles l'Association Marocaine de Recherche et d'Échange Culturel (AMREC), fondée en 1967. Ces associations ont d'abord investi le terrain culturel et linguistique avant d'articuler progressivement leurs revendications à un registre plus explicitement politique."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Le tournant des années 1990 et 2000 a été marqué par une institutionnalisation progressive de la question amazighe. La création de l'Institut Royal de la Culture Amazighe (IRCAM) en 2001, suivie de l'introduction de l'enseignement de l'amazigh dans le système éducatif, puis de la constitutionnalisation de l'amazigh comme langue officielle en 2011, témoignent d'une évolution significative de la position de l'État",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 432
                                                }, this),
                                                ". Néanmoins, ces avancées institutionnelles ont été accompagnées de tensions persistantes entre les acteurs du mouvement amazigh, qui dénoncent l'écart entre les proclamations officielles et leur mise en œuvre effective, et les institutions étatiques, qui entendent encadrer et canaliser les revendications identitaires."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-2-2",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "2.2. La dimension transnationale de l'amazighité"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "L'une des caractéristiques saillantes du mouvement amazigh contemporain réside dans sa dimension transnationale. Les revendications identitaires amazighes ne se limitent pas au cadre national marocain : elles s'inscrivent dans un espace géographique et symbolique plus large, celui de Tamazgha, qui englobe l'ensemble de l'Afrique du Nord, du Sahara et du Sahel, depuis les îles Canaries jusqu'à l'oasis de Siwa en Égypte, et de la Méditerranée jusqu'au Burkina Faso, où vivent les Touaregs",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 19
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 507
                                                }, this),
                                                ". Cette revendication d'un espace identitaire transnational constitue un défi pour les États-nations maghrébins, dont les récits fondateurs sont principalement articulés autour de l'arabité et de l'islam."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Les travaux de Cédric Audebert sur les dynamiques migratoires et les reconfigurations identitaires en contexte transnational offrent un cadre analytique pertinent pour saisir cette dimension",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 207
                                                }, this),
                                                ". Les diasporas amazighes en Europe, notamment en France, en Belgique et aux Pays-Bas, jouent un rôle significatif dans la production et la diffusion de discours identitaires, contribuant à la constitution d'un espace communicationnel amazigh déterritorialisé. Les réseaux numériques facilitent cette circulation transnationale des idées, des symboles et des revendications, en permettant aux acteurs situés dans différents contextes nationaux de se connecter, de partager des ressources et de coordonner leurs actions."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-2-3",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "2.3. Médias et représentation de l'amazighité"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "La représentation médiatique de l'amazighité au Maroc a connu des transformations notables au cours des dernières décennies. Longtemps cantonnée à des émissions folklorisantes dans les médias publics, la présence amazighe dans le paysage médiatique s'est diversifiée avec la création de la chaîne de télévision Tamazight TV en 2010 et le développement d'une presse écrite en amazigh",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 21
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 399
                                                }, this),
                                                ". Toutefois, les études sur les médias amazighs soulignent les limites de cette visibilité accrue : les contenus médiatiques tendent souvent à reproduire une vision réductrice et patrimoniale de l'amazighité, centrée sur le folklore et la tradition, au détriment des dimensions politiques et contemporaines de l'identité amazighe",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 22
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 751
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "C'est dans ce contexte de représentation médiatique jugée insuffisante ou biaisée que les espaces numériques ont pris une importance considérable pour les acteurs du mouvement amazigh. Sites web associatifs, blogs, pages Facebook, chaînes YouTube, comptes Twitter et Instagram constituent autant de dispositifs mobilisés pour produire et diffuser des récits identitaires alternatifs. Ces productions numériques se caractérisent par leur diversité, tant sur le plan des contenus (articles d'analyse, productions artistiques, témoignages personnels, mobilisations politiques) que sur celui des registres discursifs (savant, militant, populaire, humoristique)",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 23
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 673
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-3",
                                    className: "mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200",
                                        "data-tts": true,
                                        children: "3. Méthodologie : une approche mixte et plurisituée"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-3-1",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "3.1. Positionnement épistémologique"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Cette recherche adopte un positionnement épistémologique compréhensif, qui vise à saisir les significations que les acteurs attribuent à leurs pratiques et à leurs discours identitaires. Ce positionnement s'inscrit dans la tradition herméneutique des sciences sociales, telle qu'elle a été reformulée par Paul Ricœur dans le cadre de sa théorie du récit",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 370
                                                }, this),
                                                ". L'identité narrative, concept central chez Ricœur, désigne la capacité des individus et des groupes à se constituer comme sujets à travers les récits qu'ils produisent sur eux-mêmes. Cette notion est particulièrement pertinente pour analyser les productions discursives amazighes en ligne, qui relèvent précisément d'un travail de mise en récit de l'identité."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Le rattachement disciplinaire de cette recherche aux sciences de l'information et de la communication implique une attention particulière aux dispositifs communicationnels, aux processus de médiation et aux logiques de circulation des discours. Comme le rappellent Stéphane Olivesi et Bernard Miège, les SIC se caractérisent par leur capacité à articuler les dimensions technique, sémiotique, sociale et politique des phénomènes communicationnels",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 25
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 463
                                                }, this),
                                                ". Cette articulation est au cœur de notre démarche, qui entend saisir les discours identitaires amazighs non comme des énoncés décontextualisés, mais comme des productions inscrites dans des dispositifs sociotechniques spécifiques et traversées par des enjeux de pouvoir."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-3-2",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "3.2. Terrain et échantillonnage"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "La recherche s'appuie sur un terrain plurisitué, couvrant trois régions marocaines caractérisées par une forte présence amazighophone et par des dynamiques identitaires contrastées : la région Souss Massa Drâa, berceau historique du mouvement amazigh tachelhit ; la région Béni Mellal Khénifra, zone tamazight du Moyen Atlas ; et la région Tanger Tétouan Al Hoceïma, marquée par le dynamisme du mouvement rifain et par les événements du Hirak de 2016 et 2017",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 26
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 475
                                                }, this),
                                                ". Ce choix de trois terrains distincts répond à un souci de diversification des contextes sociolinguistiques et politiques, permettant de saisir les variations régionales dans les processus d'identification amazighe."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "L'enquête quantitative a été administrée auprès d'un échantillon de 450 jeunes âgés de 18 à 35 ans (150 par région), sélectionnés selon un échantillonnage par quotas prenant en compte les variables de sexe, de niveau d'éducation, de milieu de résidence (urbain ou rural) et de pratique linguistique. Le questionnaire, composé de 65 items, a exploré plusieurs dimensions : les pratiques numériques et médiatiques, les usages des réseaux socionumériques en lien avec l'identité amazighe, la perception de l'identité amazighe et ses marqueurs, l'évaluation des politiques publiques en matière de reconnaissance de l'amazighité, et les formes d'engagement militant en ligne et hors ligne",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 27
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 700
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-3-3",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "3.3. Analyse de contenu des productions numériques"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "Le volet qualitatif de la recherche repose sur une analyse de contenu approfondie des productions discursives identitaires diffusées sur des plateformes numériques dédiées à la question amazighe. Le corpus a été constitué selon une démarche raisonnée, en sélectionnant des sites et des pages qui représentent la diversité des positionnements au sein du mouvement amazigh : sites associatifs (Amazigh World, Tawiza, Souss.com), pages Facebook à forte audience (des collectifs militants, des pages culturelles et des groupes communautaires), chaînes YouTube consacrées à la promotion de la culture amazighe et comptes Twitter d'intellectuels et d'activistes amazighs",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 681
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "La période d'observation s'étend de janvier 2016 à décembre 2018, ce qui permet de couvrir des événements significatifs tels que les débats autour de la loi organique relative à l'officialisation de l'amazigh, le mouvement du Hirak du Rif et les commémorations du nouvel an amazigh. L'analyse a porté sur un corpus de 520 publications (articles, posts, vidéos, images commentées), examinées à l'aide d'une grille d'analyse thématique et énonciative inspirée des travaux de Laurence Bardin",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 29
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 505
                                                }, this),
                                                " et de Patrick Charaudeau",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 30
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 553
                                                }, this),
                                                ". Cette grille permettait de repérer les thèmes récurrents, les stratégies argumentatives, les figures rhétoriques, les modes d'adresse et les formes de mise en scène de l'identité amazighe."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-3-4",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "3.4. Entretiens semi-directifs complémentaires"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: [
                                                "En complément des données quantitatives et de l'analyse de contenu, quinze entretiens semi-directifs ont été conduits avec des acteurs clés du mouvement amazigh : responsables associatifs, administrateurs de sites web et de pages Facebook, journalistes, universitaires et artistes engagés dans la promotion de la culture amazighe. Ces entretiens, d'une durée moyenne de 75 minutes, ont été intégralement transcrits et analysés à l'aide du logiciel NVivo, selon une démarche d'analyse thématique",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FootnoteRef$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["FootnoteRef"], {
                                                    id: 31
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 511
                                                }, this),
                                                ". Ils ont permis de contextualiser les données quantitatives et de saisir les logiques d'action, les motivations et les représentations des producteurs de discours identitaires numériques."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-4",
                                    className: "mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200",
                                        "data-tts": true,
                                        children: "4. Résultats et discussion"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "section-4-1",
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-earth-800 mb-4",
                                            "data-tts": true,
                                            children: "4.1. Les réseaux numériques comme espaces de reformulation identitaire"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: "L'analyse du corpus numérique révèle que les plateformes socionumériques constituent des espaces privilégiés de reformulation de l'identité amazighe. Trois logiques discursives dominantes ont été identifiées dans les productions analysées."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "conclusion",
                                    className: "mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200",
                                            "data-tts": true,
                                            children: "Conclusion"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: "Cette recherche met en lumière la complexité des dynamiques identitaires amazighes à l'ère numérique. Loin de constituer un espace de simple reproduction des discours identitaires existants, les plateformes socionumériques apparaissent comme des arènes de reformulation, de négociation et de contestation des définitions de l'amazighité. Trois enseignements principaux se dégagent de cette étude."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: "Premièrement, les réseaux numériques contribuent à la production d'une conscience identitaire amazighe qui tend à dépasser les clivages régionaux et les particularismes locaux, favorisant l'émergence d'une identification panmazighe transnationale. Ce processus, s'il ouvre des perspectives inédites de solidarité et de mobilisation, comporte également des risques d'essentialisation et de simplification des réalités sociolinguistiques et culturelles diverses que recouvre la catégorie « amazigh »."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: "Deuxièmement, la discordance observée entre les discours institutionnels, les productions militantes et les perceptions des jeunes invite à dépasser les approches qui réduisent l'identité à ses expressions discursives publiques. L'identité vécue des jeunes amazighs se caractérise par sa plasticité, sa pluralité et sa résistance aux catégorisations univoques, qu'elles soient étatiques ou militantes."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: "Troisièmement, la question linguistique apparaît comme un enjeu crucial et paradoxal de la promotion numérique de l'amazighité. La prédominance du français et de l'arabe dialectal dans les productions numériques identitaires amazighes pose la question des conditions de possibilité d'une revitalisation linguistique effective à l'ère du numérique, et invite à penser conjointement les politiques d'aménagement linguistique et les stratégies de présence numérique."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: "Au plan théorique, cette recherche confirme la fécondité d'une approche constructiviste et communicationnelle de l'identité, qui refuse de considérer l'ethnicité comme une donnée naturelle pour l'appréhender comme un processus socialement construit et médiatiquement configuré. Elle invite également à approfondir la réflexion sur les articulations entre médiations numériques et processus d'identification, en prenant en compte les spécificités des contextes postcoloniaux et les asymétries de pouvoir qui les traversent."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                                            currentParagraph: cp,
                                            children: "Enfin, cette étude ouvre des perspectives de recherche qui mériteraient d'être explorées dans des travaux ultérieurs, notamment l'analyse comparative des dynamiques identitaires amazighes numériques dans différents contextes nationaux (Maroc, Algérie, Libye, diaspora européenne), l'étude longitudinale des évolutions des discours et des pratiques identitaires en ligne, et l'examen des effets de la régulation algorithmique des plateformes sur la visibilité et la circulation des contenus amazighs."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "notes",
                                    className: "mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200",
                                            children: "Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "space-y-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$articleData$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["footnotes"].map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    id: `note-${note.id}`,
                                                    className: "footnote-item flex gap-3 text-sm text-ink-700 leading-relaxed",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleBackToRef(note.id),
                                                            className: "back-to-text shrink-0 mt-0.5 text-xs font-bold min-w-[28px] h-6 bg-amazigh-50 rounded flex items-center justify-center hover:bg-amazigh-100 border border-amazigh-200",
                                                            title: `Retourner à la référence ${note.id}`,
                                                            "aria-label": `Retourner au texte, note ${note.id}`,
                                                            children: note.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: note.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, note.id, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RevealSection$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["RevealSection"], {
                                    id: "bibliographie",
                                    className: "mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200",
                                            children: "Bibliographie"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$articleData$2e$ts__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["bibliography"].map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-sm text-ink-700 leading-relaxed pl-4 border-l-2 border-earth-200 hover:border-amazigh-400 transition-colors duration-300",
                                                    children: entry
                                                }, i, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-earth-950 text-earth-300 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl mb-4 opacity-30",
                            "aria-hidden": "true",
                            children: "ⵣ"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-relaxed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-white",
                                    children: "Brahim Boulouayz"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this),
                                " — Université Ibn Zohr (Agadir) / Université de Poitiers (MIGRINTER, UMR 7301)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-earth-500 mt-4",
                            children: "Article de recherche — Identité et ethnicité amazighes à l'ère des réseaux numériques"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: scrollToTop,
                className: `no-print fixed bottom-6 left-6 z-50 bg-earth-800 text-white p-3 rounded-full shadow-lg hover:bg-earth-700 transition-all duration-500 hover:scale-110 active:scale-95 ${progress > 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`,
                "aria-label": "Retour en haut de page",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
]);

//# sourceMappingURL=app_0taw3jk._.js.map