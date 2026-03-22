import React from 'react';
import { ArrowUp, BookOpen, GraduationCap, MapPin } from 'lucide-react';
import { FootnoteRef } from './components/FootnoteRef';
import { RevealSection } from './components/RevealSection';
import { TableOfContents } from './components/TableOfContents';
import { TTSControls } from './components/TTSControls';
import { useReadingProgress } from './hooks/useReadingProgress';
import { useTTS } from './hooks/useTTS';
import { footnotes, bibliography, keywords } from './articleData';

/* ── Paragraph wrapper for TTS ── */
const P: React.FC<{ children: React.ReactNode; className?: string; currentParagraph: string | null; id?: string }> = ({
  children,
  className = '',
  currentParagraph,
  id,
}) => {
  const isCurrent = id ? currentParagraph === id : false;
  return (
    <p
      id={id}
      data-tts
      className={`text-ink-800 leading-[1.9] text-[1.05rem] md:text-[1.1rem] mb-5 transition-all duration-500 ${
        isCurrent ? 'tts-reading' : ''
      } ${className}`}
      lang="fr"
    >
      {children}
    </p>
  );
};

function App() {
  const progress = useReadingProgress();
  const tts = useTTS();
  const cp = tts.currentParagraph;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToRef = (id: number) => {
    const refEl = document.getElementById(`ref-${id}`);
    if (refEl) {
      refEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-amazigh-50" lang="fr">
      {/* Reading Progress */}
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-earth-950 via-earth-900 to-amazigh-950 text-white">
        {/* Decorative Tifinagh pattern */}
        <div className="absolute inset-0 opacity-[0.04] select-none pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-10 text-[12rem] font-bold leading-none">ⵣ</div>
          <div className="absolute top-20 right-20 text-[8rem] font-bold leading-none">ⴰ</div>
          <div className="absolute bottom-10 left-1/3 text-[10rem] font-bold leading-none">ⵎ</div>
          <div className="absolute bottom-20 right-10 text-[6rem] font-bold leading-none">ⵏ</div>
          <div className="absolute top-1/2 left-1/2 text-[14rem] font-bold leading-none -translate-x-1/2 -translate-y-1/2">ⵉ</div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="animate-fade-in-up">
            {/* Journal / Type marker */}
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={18} className="text-amazigh-400" />
              <span className="text-amazigh-300 text-sm font-medium tracking-wide uppercase">Article de recherche</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight mb-6 font-serif" lang="fr">
              Identité et ethnicité amazighes à l'ère des réseaux numériques
              <span className="block text-xl sm:text-2xl md:text-3xl mt-3 text-amazigh-300 font-normal">
                constructions discursives, médiations et perceptions chez les jeunes au Maroc
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-wrap items-center gap-4 mt-8 text-earth-200">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-amazigh-400" />
                <span className="font-semibold text-white">Brahim Boulouayz</span>
              </div>
              <span className="text-earth-500 hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5 text-sm">
                <MapPin size={14} className="text-earth-400" />
                <span>Université Ibn Zohr (Agadir)</span>
              </div>
              <span className="text-earth-500 hidden sm:inline">/</span>
              <div className="flex items-center gap-1.5 text-sm">
                <MapPin size={14} className="text-earth-400" />
                <span>Université de Poitiers (MIGRINTER, UMR 7301)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amazigh-50 to-transparent" />
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar - Table of Contents */}
          <TableOfContents />

          {/* Article Body */}
          <article className="flex-1 max-w-3xl" id="article-content" lang="fr">
            
            {/* Abstract Card */}
            <RevealSection className="mb-10">
              <div className="bg-white rounded-2xl shadow-sm border border-earth-200 p-6 md:p-8">
                <h2 className="text-lg font-bold text-earth-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-amazigh-100 rounded-lg flex items-center justify-center">
                    <BookOpen size={16} className="text-amazigh-700" />
                  </span>
                  Résumé
                </h2>
                <P currentParagraph={cp} className="text-ink-700 text-base leading-relaxed !mb-0">
                  Cet article interroge les dynamiques de construction identitaire amazighe telles qu'elles se déploient dans les espaces numériques au Maroc. En croisant une analyse de contenu des récits identitaires publiés sur des plateformes numériques dédiées et une enquête par questionnaire menée auprès de jeunes dans trois régions marocaines (Souss Massa Drâa, Béni Mellal Khénifra, Tanger Tétouan Al Hoceïma), cette recherche met en évidence les discordances entre les discours officiels, les productions médiatiques militantes et la perception vécue de l'identité chez les jeunes amazighophones. L'article propose un cadre théorique pluridisciplinaire articulant les sciences de l'information et de la communication, la sociologie des identités et les études postcoloniales pour saisir les reconfigurations de l'ethnicité amazighe à l'ère du numérique. Les résultats montrent que les réseaux socionumériques constituent des espaces de reformulation identitaire où coexistent des logiques de patrimonialisation, de politisation et de réinvention culturelle, tout en révélant des tensions significatives entre les catégorisations institutionnelles et les appropriations subjectives de l'amazighité par les jeunes générations.
                </P>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-earth-100">
                  {keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-amazigh-50 text-amazigh-800 text-xs font-medium rounded-full border border-amazigh-200"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* TTS Controls */}
            <RevealSection className="mb-10">
              <TTSControls
                isPlaying={tts.isPlaying}
                isPaused={tts.isPaused}
                voicesLoaded={tts.voicesLoaded}
                frenchVoice={tts.frenchVoice}
                onPlay={tts.play}
                onPause={tts.pause}
                onStop={tts.stop}
              />
            </RevealSection>

            {/* ══════════════ INTRODUCTION ══════════════ */}
            <RevealSection id="introduction" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200" data-tts>
                Introduction
              </h2>
              <P currentParagraph={cp}>
                La question amazighe constitue, depuis plusieurs décennies, l'un des enjeux politiques et culturels les plus structurants du Maghreb contemporain. Au Maroc, la reconnaissance constitutionnelle de l'amazigh comme langue officielle en 2011 a marqué un tournant institutionnel majeur, sans pour autant clore les débats relatifs à la place de cette composante identitaire dans le récit national<FootnoteRef id={1} />. Parallèlement à cette évolution juridique et politique, l'essor des technologies numériques a profondément reconfiguré les modalités d'expression, de négociation et de revendication identitaires. Les plateformes socionumériques offrent désormais aux acteurs du mouvement amazigh des espaces inédits de production et de diffusion de discours identitaires, contribuant ainsi à redéfinir les contours de ce que signifie « être amazigh » dans le Maroc du XXIᵉ siècle.
              </P>
              <P currentParagraph={cp}>
                Le présent article s'inscrit dans le champ des sciences de l'information et de la communication (SIC), tout en mobilisant des apports conceptuels issus de la sociologie des identités, des sciences du langage et des sciences politiques. Cette approche pluridisciplinaire répond à la complexité même de l'objet étudié : l'identité amazighe, entendue ici non comme une donnée primordiale et figée, mais comme un processus socialement construit, historiquement situé et communicationnellement médiatisé<FootnoteRef id={2} />. Notre démarche s'appuie sur l'hypothèse selon laquelle il existerait une discordance significative entre les discours produits dans les espaces publics et médiatiques et la perception effective de l'identité chez les jeunes amazighs. Cette hypothèse invite à interroger non seulement les contenus des productions discursives numériques, mais également les dispositifs sociotechniques qui les portent, ainsi que les usages et les appropriations dont ils font l'objet.
              </P>
              <P currentParagraph={cp}>
                L'article est organisé en quatre parties. La première propose un cadre théorique articulant les notions d'identité, d'ethnicité et de médiation numérique. La deuxième partie contextualise la question amazighe dans le paysage sociopolitique marocain. La troisième présente la méthodologie adoptée, combinant approches quantitative et qualitative. La quatrième partie expose les résultats de l'analyse et les met en discussion au regard de la littérature existante.
              </P>
            </RevealSection>

            {/* ══════════════ SECTION 1 ══════════════ */}
            <RevealSection id="section-1" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200" data-tts>
                1. Cadre théorique : identité, ethnicité et médiations numériques
              </h2>
            </RevealSection>

            <RevealSection id="section-1-1" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                1.1. L'identité comme construction sociale et communicationnelle
              </h3>
              <P currentParagraph={cp}>
                La notion d'identité a fait l'objet de théorisations abondantes dans les sciences humaines et sociales. Loin de la concevoir comme une essence stable et prédéterminée, les approches constructivistes, qui constituent le socle théorique de cette recherche, appréhendent l'identité comme un processus dynamique, relationnel et contextuellement situé<FootnoteRef id={3} />. Selon Claude Dubar, l'identité se construit à travers une double transaction : une transaction biographique, par laquelle l'individu articule son passé et son avenir dans un récit de soi cohérent, et une transaction relationnelle, par laquelle il négocie la reconnaissance de son identité revendiquée avec les identités attribuées par autrui<FootnoteRef id={4} />. Cette perspective implique que l'identité n'est jamais acquise de manière définitive : elle se fait et se défait au gré des interactions sociales, des contextes institutionnels et des rapports de pouvoir.
              </P>
              <P currentParagraph={cp}>
                Dans le champ des SIC, l'identité est indissociable des dispositifs communicationnels qui la médiatisent. Comme le souligne Yves Jeanneret, tout processus identitaire suppose des « êtres culturels » qui circulent dans l'espace social et qui sont transformés par les dispositifs médiatiques qui les prennent en charge<FootnoteRef id={5} />. Les médias, qu'ils soient traditionnels ou numériques, ne se contentent pas de refléter des identités préexistantes : ils participent activement à leur élaboration, à leur mise en forme et à leur diffusion. Cette fonction performative des médias est particulièrement pertinente dans le cas de l'identité amazighe, dont la visibilité publique a été historiquement conditionnée par les politiques médiatiques de l'État marocain.
              </P>
              <P currentParagraph={cp}>
                Stuart Hall, dont les travaux ont profondément renouvelé la réflexion sur les identités culturelles, propose de concevoir l'identification comme un processus articulatoire, jamais achevé, qui se déploie à travers des pratiques discursives<FootnoteRef id={6} />. Pour Hall, les identités culturelles sont des « points de suture » entre, d'une part, les discours et les pratiques qui interpellent les individus en tant que sujets sociaux et, d'autre part, les processus par lesquels ces individus investissent subjectivement les positions qui leur sont proposées. Cette conception dialogique et processuelle de l'identité s'avère particulièrement féconde pour analyser les dynamiques identitaires amazighes, qui se situent précisément à l'intersection de discours institutionnels, de productions militantes et d'appropriations individuelles.
              </P>
            </RevealSection>

            <RevealSection id="section-1-2" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                1.2. Ethnicité, frontières symboliques et processus d'identification
              </h3>
              <P currentParagraph={cp}>
                Le concept d'ethnicité, tel qu'il est mobilisé dans cette recherche, s'inscrit dans la filiation des travaux fondateurs de Fredrik Barth<FootnoteRef id={7} />. Rompant avec les approches essentialistes qui définissaient les groupes ethniques par un ensemble de traits culturels objectifs (langue, religion, coutumes), Barth a montré que l'ethnicité réside avant tout dans les processus de tracé et de maintien des frontières entre groupes. Ce ne sont pas les différences culturelles « objectives » qui fondent l'ethnicité, mais la pertinence que les acteurs sociaux leur accordent dans leurs interactions. L'ethnicité apparaît ainsi comme une forme d'organisation sociale de la différence culturelle, plutôt que comme l'expression directe de cette différence.
              </P>
              <P currentParagraph={cp}>
                Cette perspective interactionniste a été prolongée et enrichie par les travaux d'Andreas Wimmer, qui propose d'analyser les « frontières ethniques » (ethnic boundaries) comme des constructions négociées, contestées et reconfigurées par les acteurs en fonction de leurs ressources et de leurs intérêts<FootnoteRef id={8} />. Wimmer distingue plusieurs stratégies de modification des frontières ethniques, parmi lesquelles l'expansion (qui consiste à élargir les contours du groupe), la contraction (qui vise à restreindre l'appartenance à un sous-groupe), le repositionnement (qui implique un changement d'affiliation) et le brouillage (qui tend à atténuer la saillance de la frontière). Ces stratégies sont particulièrement observables dans le cas amazigh, où les débats portent précisément sur les critères de définition de l'amazighité (la langue, le territoire, la filiation, la culture) et sur l'extension géographique de la communauté revendiquée.
              </P>
              <P currentParagraph={cp}>
                Le lien entre identité et ethnicité est illustré par de nombreux exemples historiques, depuis les processus de formation ethnique des Goths dans l'Antiquité tardive, étudiés par Patrick Geary<FootnoteRef id={9} />, jusqu'aux reconfigurations identitaires berbères à l'époque contemporaine. Ces exemples montrent que l'ethnicité est toujours le produit d'un travail de construction symbolique et discursif, qui mobilise des ressources historiques, linguistiques et culturelles pour produire un sentiment d'appartenance partagé. Dans le cas amazigh, ce travail de construction fait intervenir des référents multiples : une langue (ou plutôt un ensemble de variantes linguistiques), un alphabet (le tifinagh), un territoire historique (Tamazgha, s'étendant de l'Atlantique à l'Égypte et du Sahara à la Méditerranée), des symboles partagés (le drapeau amazigh, le nouvel an amazigh Yennayer) et un récit historique mettant en avant l'antériorité de la présence amazighe en Afrique du Nord<FootnoteRef id={10} />.
              </P>
            </RevealSection>

            <RevealSection id="section-1-3" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                1.3. Médias numériques et reconfigurations identitaires
              </h3>
              <P currentParagraph={cp}>
                L'avènement des technologies numériques a profondément transformé les conditions de production, de circulation et de réception des discours identitaires. Manuel Castells a théorisé cette transformation en termes de passage d'une « société en réseau » caractérisée par de nouvelles formes d'organisation sociale fondées sur les flux d'information et les réseaux de communication<FootnoteRef id={11} />. Dans ce contexte, les mouvements sociaux et identitaires disposent de ressources communicationnelles inédites pour contourner les gatekeepers médiatiques traditionnels, produire leurs propres récits et constituer des communautés de sens au-delà des frontières géographiques.
              </P>
              <P currentParagraph={cp}>
                Les travaux de Fabien Granjon sur les usages militants d'Internet montrent que les dispositifs numériques ne sont pas de simples outils techniques neutres, mais des arènes où se jouent des rapports de pouvoir et des conflits de définition<FootnoteRef id={12} />. Dans le cas des mouvements identitaires, les plateformes numériques offrent la possibilité de « contre-publics subalternes » (subaltern counterpublics), pour reprendre le concept de Nancy Fraser<FootnoteRef id={13} />, c'est-à-dire des espaces discursifs parallèles où les membres de groupes sociaux subordonnés élaborent et diffusent des contre-discours qui s'opposent aux interprétations dominantes de leur identité et de leurs intérêts.
              </P>
              <P currentParagraph={cp}>
                La notion de « médiation identitaire numérique » s'avère ici opératoire pour saisir le rôle des dispositifs socionumériques dans les processus d'identification amazighe. Cette notion, qui emprunte à la fois aux SIC et à la sociologie des usages, permet de penser conjointement les dimensions technique (les affordances des plateformes), sémiotique (les formes d'expression et de mise en scène de soi), sociale (les logiques de sociabilité et de communauté) et politique (les enjeux de visibilité et de reconnaissance) des pratiques numériques identitaires<FootnoteRef id={14} />.
              </P>
              <P currentParagraph={cp}>
                Dominique Cardon a montré comment les plateformes numériques reconfigurent les régimes de visibilité en offrant à des acteurs auparavant marginalisés la possibilité d'accéder à l'espace public et de participer aux débats qui les concernent<FootnoteRef id={15} />. Cette démocratisation relative de la prise de parole a des implications directes pour les mouvements identitaires amazighs, dont l'accès aux médias traditionnels (presse, radio, télévision) a longtemps été limité par les politiques étatiques de communication.
              </P>
            </RevealSection>

            {/* ══════════════ SECTION 2 ══════════════ */}
            <RevealSection id="section-2" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200" data-tts>
                2. Contexte sociopolitique : la question amazighe au Maroc
              </h2>
            </RevealSection>

            <RevealSection id="section-2-1" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                2.1. Historicité du mouvement amazigh
              </h3>
              <P currentParagraph={cp}>
                Le mouvement culturel amazigh au Maroc s'inscrit dans une trajectoire historique longue, dont les origines remontent à la période coloniale. Le « Dahir berbère » de 1930, promulgué par le Protectorat français, qui visait à soustraire les populations berbères à la juridiction du droit musulman, a paradoxalement constitué un moment fondateur du nationalisme marocain en suscitant une mobilisation unitaire contre la politique coloniale de division<FootnoteRef id={16} />. Cet épisode a durablement marqué le rapport entre amazighité et arabité dans l'imaginaire politique marocain, en associant la revendication berbère à un projet colonial de fragmentation de l'unité nationale.
              </P>
              <P currentParagraph={cp}>
                Après l'indépendance en 1956, la politique d'arabisation menée par l'État marocain a contribué à marginaliser les langues et cultures amazighes dans les sphères publiques, éducatives et médiatiques<FootnoteRef id={17} />. C'est dans ce contexte que se sont structurées, à partir des années 1960 et 1970, les premières associations culturelles amazighes, parmi lesquelles l'Association Marocaine de Recherche et d'Échange Culturel (AMREC), fondée en 1967. Ces associations ont d'abord investi le terrain culturel et linguistique avant d'articuler progressivement leurs revendications à un registre plus explicitement politique.
              </P>
              <P currentParagraph={cp}>
                Le tournant des années 1990 et 2000 a été marqué par une institutionnalisation progressive de la question amazighe. La création de l'Institut Royal de la Culture Amazighe (IRCAM) en 2001, suivie de l'introduction de l'enseignement de l'amazigh dans le système éducatif, puis de la constitutionnalisation de l'amazigh comme langue officielle en 2011, témoignent d'une évolution significative de la position de l'État<FootnoteRef id={18} />. Néanmoins, ces avancées institutionnelles ont été accompagnées de tensions persistantes entre les acteurs du mouvement amazigh, qui dénoncent l'écart entre les proclamations officielles et leur mise en œuvre effective, et les institutions étatiques, qui entendent encadrer et canaliser les revendications identitaires.
              </P>
            </RevealSection>

            <RevealSection id="section-2-2" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                2.2. La dimension transnationale de l'amazighité
              </h3>
              <P currentParagraph={cp}>
                L'une des caractéristiques saillantes du mouvement amazigh contemporain réside dans sa dimension transnationale. Les revendications identitaires amazighes ne se limitent pas au cadre national marocain : elles s'inscrivent dans un espace géographique et symbolique plus large, celui de Tamazgha, qui englobe l'ensemble de l'Afrique du Nord, du Sahara et du Sahel, depuis les îles Canaries jusqu'à l'oasis de Siwa en Égypte, et de la Méditerranée jusqu'au Burkina Faso, où vivent les Touaregs<FootnoteRef id={19} />. Cette revendication d'un espace identitaire transnational constitue un défi pour les États-nations maghrébins, dont les récits fondateurs sont principalement articulés autour de l'arabité et de l'islam.
              </P>
              <P currentParagraph={cp}>
                Les travaux de Cédric Audebert sur les dynamiques migratoires et les reconfigurations identitaires en contexte transnational offrent un cadre analytique pertinent pour saisir cette dimension<FootnoteRef id={20} />. Les diasporas amazighes en Europe, notamment en France, en Belgique et aux Pays-Bas, jouent un rôle significatif dans la production et la diffusion de discours identitaires, contribuant à la constitution d'un espace communicationnel amazigh déterritorialisé. Les réseaux numériques facilitent cette circulation transnationale des idées, des symboles et des revendications, en permettant aux acteurs situés dans différents contextes nationaux de se connecter, de partager des ressources et de coordonner leurs actions.
              </P>
            </RevealSection>

            <RevealSection id="section-2-3" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                2.3. Médias et représentation de l'amazighité
              </h3>
              <P currentParagraph={cp}>
                La représentation médiatique de l'amazighité au Maroc a connu des transformations notables au cours des dernières décennies. Longtemps cantonnée à des émissions folklorisantes dans les médias publics, la présence amazighe dans le paysage médiatique s'est diversifiée avec la création de la chaîne de télévision Tamazight TV en 2010 et le développement d'une presse écrite en amazigh<FootnoteRef id={21} />. Toutefois, les études sur les médias amazighs soulignent les limites de cette visibilité accrue : les contenus médiatiques tendent souvent à reproduire une vision réductrice et patrimoniale de l'amazighité, centrée sur le folklore et la tradition, au détriment des dimensions politiques et contemporaines de l'identité amazighe<FootnoteRef id={22} />.
              </P>
              <P currentParagraph={cp}>
                C'est dans ce contexte de représentation médiatique jugée insuffisante ou biaisée que les espaces numériques ont pris une importance considérable pour les acteurs du mouvement amazigh. Sites web associatifs, blogs, pages Facebook, chaînes YouTube, comptes Twitter et Instagram constituent autant de dispositifs mobilisés pour produire et diffuser des récits identitaires alternatifs. Ces productions numériques se caractérisent par leur diversité, tant sur le plan des contenus (articles d'analyse, productions artistiques, témoignages personnels, mobilisations politiques) que sur celui des registres discursifs (savant, militant, populaire, humoristique)<FootnoteRef id={23} />.
              </P>
            </RevealSection>

            {/* ══════════════ SECTION 3 ══════════════ */}
            <RevealSection id="section-3" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200" data-tts>
                3. Méthodologie : une approche mixte et plurisituée
              </h2>
            </RevealSection>

            <RevealSection id="section-3-1" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                3.1. Positionnement épistémologique
              </h3>
              <P currentParagraph={cp}>
                Cette recherche adopte un positionnement épistémologique compréhensif, qui vise à saisir les significations que les acteurs attribuent à leurs pratiques et à leurs discours identitaires. Ce positionnement s'inscrit dans la tradition herméneutique des sciences sociales, telle qu'elle a été reformulée par Paul Ricœur dans le cadre de sa théorie du récit<FootnoteRef id={24} />. L'identité narrative, concept central chez Ricœur, désigne la capacité des individus et des groupes à se constituer comme sujets à travers les récits qu'ils produisent sur eux-mêmes. Cette notion est particulièrement pertinente pour analyser les productions discursives amazighes en ligne, qui relèvent précisément d'un travail de mise en récit de l'identité.
              </P>
              <P currentParagraph={cp}>
                Le rattachement disciplinaire de cette recherche aux sciences de l'information et de la communication implique une attention particulière aux dispositifs communicationnels, aux processus de médiation et aux logiques de circulation des discours. Comme le rappellent Stéphane Olivesi et Bernard Miège, les SIC se caractérisent par leur capacité à articuler les dimensions technique, sémiotique, sociale et politique des phénomènes communicationnels<FootnoteRef id={25} />. Cette articulation est au cœur de notre démarche, qui entend saisir les discours identitaires amazighs non comme des énoncés décontextualisés, mais comme des productions inscrites dans des dispositifs sociotechniques spécifiques et traversées par des enjeux de pouvoir.
              </P>
            </RevealSection>

            <RevealSection id="section-3-2" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                3.2. Terrain et échantillonnage
              </h3>
              <P currentParagraph={cp}>
                La recherche s'appuie sur un terrain plurisitué, couvrant trois régions marocaines caractérisées par une forte présence amazighophone et par des dynamiques identitaires contrastées : la région Souss Massa Drâa, berceau historique du mouvement amazigh tachelhit ; la région Béni Mellal Khénifra, zone tamazight du Moyen Atlas ; et la région Tanger Tétouan Al Hoceïma, marquée par le dynamisme du mouvement rifain et par les événements du Hirak de 2016 et 2017<FootnoteRef id={26} />. Ce choix de trois terrains distincts répond à un souci de diversification des contextes sociolinguistiques et politiques, permettant de saisir les variations régionales dans les processus d'identification amazighe.
              </P>
              <P currentParagraph={cp}>
                L'enquête quantitative a été administrée auprès d'un échantillon de 450 jeunes âgés de 18 à 35 ans (150 par région), sélectionnés selon un échantillonnage par quotas prenant en compte les variables de sexe, de niveau d'éducation, de milieu de résidence (urbain ou rural) et de pratique linguistique. Le questionnaire, composé de 65 items, a exploré plusieurs dimensions : les pratiques numériques et médiatiques, les usages des réseaux socionumériques en lien avec l'identité amazighe, la perception de l'identité amazighe et ses marqueurs, l'évaluation des politiques publiques en matière de reconnaissance de l'amazighité, et les formes d'engagement militant en ligne et hors ligne<FootnoteRef id={27} />.
              </P>
            </RevealSection>

            <RevealSection id="section-3-3" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                3.3. Analyse de contenu des productions numériques
              </h3>
              <P currentParagraph={cp}>
                Le volet qualitatif de la recherche repose sur une analyse de contenu approfondie des productions discursives identitaires diffusées sur des plateformes numériques dédiées à la question amazighe. Le corpus a été constitué selon une démarche raisonnée, en sélectionnant des sites et des pages qui représentent la diversité des positionnements au sein du mouvement amazigh : sites associatifs (Amazigh World, Tawiza, Souss.com), pages Facebook à forte audience (des collectifs militants, des pages culturelles et des groupes communautaires), chaînes YouTube consacrées à la promotion de la culture amazighe et comptes Twitter d'intellectuels et d'activistes amazighs<FootnoteRef id={28} />.
              </P>
              <P currentParagraph={cp}>
                La période d'observation s'étend de janvier 2016 à décembre 2018, ce qui permet de couvrir des événements significatifs tels que les débats autour de la loi organique relative à l'officialisation de l'amazigh, le mouvement du Hirak du Rif et les commémorations du nouvel an amazigh. L'analyse a porté sur un corpus de 520 publications (articles, posts, vidéos, images commentées), examinées à l'aide d'une grille d'analyse thématique et énonciative inspirée des travaux de Laurence Bardin<FootnoteRef id={29} /> et de Patrick Charaudeau<FootnoteRef id={30} />. Cette grille permettait de repérer les thèmes récurrents, les stratégies argumentatives, les figures rhétoriques, les modes d'adresse et les formes de mise en scène de l'identité amazighe.
              </P>
            </RevealSection>

            <RevealSection id="section-3-4" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                3.4. Entretiens semi-directifs complémentaires
              </h3>
              <P currentParagraph={cp}>
                En complément des données quantitatives et de l'analyse de contenu, quinze entretiens semi-directifs ont été conduits avec des acteurs clés du mouvement amazigh : responsables associatifs, administrateurs de sites web et de pages Facebook, journalistes, universitaires et artistes engagés dans la promotion de l'amazighité. Ces entretiens, d'une durée moyenne de 75 minutes, ont été intégralement transcrits et analysés à l'aide du logiciel NVivo, selon une démarche d'analyse thématique<FootnoteRef id={31} />. Ils ont permis de contextualiser les données quantitatives et de saisir les logiques d'action, les motivations et les représentations des producteurs de discours identitaires numériques.
              </P>
            </RevealSection>

            {/* ══════════════ SECTION 4 ══════════════ */}
            <RevealSection id="section-4" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200" data-tts>
                4. Résultats et discussion
              </h2>
            </RevealSection>

            <RevealSection id="section-4-1" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                4.1. Les réseaux numériques comme espaces de reformulation identitaire
              </h3>
              <P currentParagraph={cp}>
                L'analyse du corpus numérique révèle que les plateformes socionumériques constituent des espaces privilégiés de reformulation de l'identité amazighe. Trois logiques discursives dominantes ont été identifiées dans les productions analysées.
              </P>
              <P currentParagraph={cp}>
                La première est une logique de patrimonialisation, qui consiste à valoriser les éléments du patrimoine culturel amazigh (langue, littérature orale, musique, arts décoratifs, savoir-faire artisanaux, traditions culinaires) en les inscrivant dans un récit de continuité historique. Cette logique s'appuie sur une rhétorique de l'authenticité et de l'ancienneté, qui vise à légitimer l'identité amazighe en la rattachant à un passé prestigieux. On retrouve ici ce que Paul Silverstein a décrit comme un processus de « réinvention de la tradition » amazighe, par lequel des pratiques culturelles sont sélectionnées, recontextualisées et dotées d'une signification identitaire nouvelle<FootnoteRef id={32} />.
              </P>
              <P currentParagraph={cp}>
                La deuxième logique est celle de la politisation, qui articule la question identitaire à des revendications de droits linguistiques, culturels, territoriaux et politiques. Les productions relevant de cette logique mobilisent un vocabulaire des droits humains et de la justice sociale, positionnant les Amazighs comme un peuple autochtone dont les droits fondamentaux ont été historiquement bafoués par les politiques d'arabisation et de centralisation étatique. Cette logique est particulièrement prégnante dans les publications liées au Hirak du Rif, où la revendication identitaire s'articule à des demandes de développement économique et de justice sociale<FootnoteRef id={33} />.
              </P>
              <P currentParagraph={cp}>
                La troisième logique est celle de la réinvention culturelle, qui se manifeste par la production de contenus créatifs (musique, poésie, arts visuels, humour) mêlant des éléments de la tradition amazighe à des formes d'expression contemporaines et globalisées. Cette logique est particulièrement présente chez les jeunes créateurs numériques, qui utilisent les codes esthétiques des cultures populaires mondialisées (rap, street art, culture geek) pour exprimer leur amazighité d'une manière qui rompt avec les représentations folklorisantes traditionnelles<FootnoteRef id={34} />.
              </P>
            </RevealSection>

            <RevealSection id="section-4-2" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                4.2. Perception identitaire chez les jeunes : entre pluralité et tension
              </h3>
              <P currentParagraph={cp}>
                Les résultats de l'enquête par questionnaire mettent en évidence une perception plurielle et nuancée de l'identité amazighe chez les jeunes interrogés. À la question portant sur les composantes de leur identité, 78,2 % des répondants déclarent se sentir « amazighs et marocains » simultanément, 12,4 % se définissent principalement comme « amazighs » et 9,4 % se définissent principalement comme « marocains ». Ces résultats confirment la prévalence d'identités composites et non exclusives, en accord avec les théories de l'identification plurielle développées par Amin Maalouf<FootnoteRef id={35} /> et, dans un cadre plus analytique, par Rogers Brubaker<FootnoteRef id={36} />.
              </P>

              {/* Data visualization card */}
              <div className="my-8 bg-white rounded-xl border border-earth-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-earth-600 uppercase tracking-wide mb-5">Auto-identification des jeunes interrogés</h4>
                <div className="space-y-4">
                  {[
                    { label: 'Amazighs et Marocains', value: 78.2, color: 'bg-amazigh-500' },
                    { label: 'Principalement Amazighs', value: 12.4, color: 'bg-amazigh-400' },
                    { label: 'Principalement Marocains', value: 9.4, color: 'bg-earth-400' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-ink-700 font-medium">{item.label}</span>
                        <span className="text-ink-500 font-bold">{item.value} %</span>
                      </div>
                      <div className="h-3 bg-earth-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <P currentParagraph={cp}>
                Cependant, cette pluralité identitaire coexiste avec des tensions significatives. Interrogés sur la place de l'amazighité dans les médias et les institutions publiques, 64,7 % des répondants estiment que l'identité amazighe est « insuffisamment reconnue » par l'État, 22,3 % considèrent qu'elle est « partiellement reconnue » et seulement 13 % jugent la reconnaissance « satisfaisante ». Ces résultats varient significativement selon les régions : le sentiment de non-reconnaissance est plus prononcé dans la région de Tanger Tétouan Al Hoceïma (72,4 %) que dans la région de Souss Massa Drâa (58,1 %), ce qui peut s'expliquer par le contexte sociopolitique particulier du Rif et les répercussions du Hirak.
              </P>
              <P currentParagraph={cp}>
                Les résultats révèlent également des différences générationnelles dans la conception de l'amazighité. Les jeunes les plus connectés aux réseaux numériques (ceux qui déclarent consulter quotidiennement des contenus amazighs en ligne) tendent à adopter une vision plus politisée et plus transnationale de leur identité, se reconnaissant davantage dans la notion de Tamazgha que dans les appartenances régionales (Souss, Rif, Moyen Atlas). Ce constat suggère que les espaces numériques contribuent à la production d'une conscience identitaire amazighe qui transcende les particularismes locaux, en accord avec les analyses de Castells sur le rôle des réseaux dans la construction d'identités-projets<FootnoteRef id={37} />.
              </P>
            </RevealSection>

            <RevealSection id="section-4-3" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                4.3. Discordances entre discours publics et vécu identitaire
              </h3>
              <P currentParagraph={cp}>
                L'un des résultats les plus significatifs de cette recherche concerne la mise en évidence de discordances entre trois niveaux de discours sur l'identité amazighe : le discours officiel de l'État, le discours militant des organisations amazighes et la perception vécue des jeunes.
              </P>
              <P currentParagraph={cp}>
                Le discours officiel, tel qu'il se déploie dans les textes juridiques, les déclarations gouvernementales et les médias publics, tend à inscrire l'amazighité dans un récit national consensuel qui la présente comme une composante parmi d'autres de l'identité marocaine, aux côtés de l'arabité, de l'islam, de l'africanité et des apports andalous, hébraïques et méditerranéens<FootnoteRef id={38} />. Ce discours de la « diversité dans l'unité » vise à désamorcer le potentiel contestataire de la revendication amazighe en l'intégrant à un récit patrimonial harmonieux. Toutefois, cette intégration discursive s'accompagne de résistances à la mise en œuvre effective des droits linguistiques et culturels amazighs, comme en témoignent les retards dans l'adoption de la loi organique relative à l'officialisation de l'amazigh et les insuffisances de l'enseignement en amazigh dans le système éducatif.
              </P>
              <P currentParagraph={cp}>
                Le discours militant, de son côté, tend à construire l'amazighité comme une identité fondamentale et originelle, menacée par les politiques d'arabisation et de marginalisation. Ce discours mobilise des registres variés, allant de la revendication juridique et institutionnelle à l'affirmation essentialiste d'une identité irréductible, en passant par des formes de contestation radicale qui remettent en question les fondements mêmes de l'État-nation marocain. Sur les plateformes numériques, ce discours militant prend des formes parfois clivantes, recourant à des oppositions binaires (Amazighs vs. Arabes, autochtones vs. envahisseurs, victimes vs. oppresseurs) qui simplifient la complexité des processus identitaires.
              </P>
              <P currentParagraph={cp}>
                Face à ces deux types de discours, les jeunes interrogés expriment souvent un sentiment de décalage. Nombreux sont ceux qui ne se reconnaissent pleinement ni dans le récit patrimonial de l'État, jugé superficiel et instrumentalisant, ni dans le discours militant le plus radical, perçu comme excessivement politisé et parfois ethniciste. Une majorité de répondants (56,8 %) déclarent que « ni les médias officiels ni les militants ne représentent fidèlement ce que l'amazighité signifie pour eux ». Ce résultat, qui confirme notre hypothèse de départ, invite à penser l'identité amazighe non pas comme un contenu fixe que les médias refléteraient plus ou moins fidèlement, mais comme un processus de négociation permanente entre des cadres discursifs concurrents et des expériences vécues irréductibles à ces cadres.
              </P>
            </RevealSection>

            <RevealSection id="section-4-4" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                4.4. Les formes d'engagement identitaire en ligne : entre activisme et ordinaire
              </h3>
              <P currentParagraph={cp}>
                L'enquête a également permis de distinguer différentes formes d'engagement identitaire en ligne, que l'on peut situer sur un continuum allant de l'activisme le plus explicite aux pratiques les plus ordinaires.
              </P>
              <P currentParagraph={cp}>
                À une extrémité du continuum, on trouve les « entrepreneurs identitaires numériques », c'est-à-dire les acteurs qui consacrent une part significative de leur activité en ligne à la production et à la diffusion de contenus explicitement liés à la question amazighe. Ces acteurs, qui représentent une minorité de notre échantillon (environ 8 %), sont généralement affiliés à des organisations militantes et utilisent les plateformes numériques comme des outils de mobilisation politique et de sensibilisation culturelle.
              </P>
              <P currentParagraph={cp}>
                À l'autre extrémité, on trouve les pratiques « ordinaires » d'affirmation identitaire, qui se manifestent par des gestes discrets mais significatifs : écrire en tifinagh ou en amazigh sur les réseaux sociaux, partager des contenus culturels amazighs (musique, proverbes, photographies de paysages), célébrer publiquement le nouvel an amazigh Yennayer ou encore utiliser le drapeau amazigh comme photo de profil. Ces pratiques, qui concernent une majorité de répondants amazighophones (67,3 %), relèvent de ce que Michael Billig a qualifié de « nationalisme banal »<FootnoteRef id={39} />, transposé ici à l'échelle d'une identification ethnique : elles contribuent à naturaliser et à routiniser l'appartenance amazighe dans les interactions quotidiennes en ligne.
              </P>
              <P currentParagraph={cp}>
                Entre ces deux pôles, on observe une gamme de pratiques intermédiaires : participation ponctuelle à des campagnes en ligne, commentaires sur des publications relatives à l'actualité amazighe, adhésion à des groupes Facebook communautaires, consultation régulière de sites d'information amazighs. Ces pratiques témoignent de ce que nous proposons d'appeler une « identité connectée », c'est-à-dire une forme d'identification qui se nourrit des ressources numériques disponibles sans nécessairement s'inscrire dans un projet militant structuré<FootnoteRef id={40} />.
              </P>
            </RevealSection>

            <RevealSection id="section-4-5" className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-earth-800 mb-4" data-tts>
                4.5. Langue, identité et numérique : enjeux de la digitalisation de l'amazigh
              </h3>
              <P currentParagraph={cp}>
                Un enjeu transversal émerge avec force de l'analyse : celui de la place de la langue amazighe dans les pratiques numériques. Les résultats montrent que, si les contenus relatifs à l'identité amazighe sont abondants sur les plateformes numériques, ils sont majoritairement produits en français (41,2 % du corpus analysé) ou en arabe dialectal marocain (33,6 %), la part des contenus en amazigh (toutes variantes confondues) ne représentant que 25,2 % du total. Ce constat soulève des questions fondamentales sur le rapport entre langue et identité : peut-on revendiquer et promouvoir une identité linguistique dans une langue autre que celle qui en constitue le marqueur premier ?
              </P>

              {/* Language data visualization */}
              <div className="my-8 bg-white rounded-xl border border-earth-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-earth-600 uppercase tracking-wide mb-5">Langues des productions numériques identitaires amazighes</h4>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex gap-3 flex-wrap justify-center">
                    {[
                      { label: 'Français', value: 41.2, color: 'bg-blue-500' },
                      { label: 'Arabe dialectal', value: 33.6, color: 'bg-emerald-500' },
                      { label: 'Amazigh', value: 25.2, color: 'bg-amazigh-500' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-earth-50 rounded-lg px-4 py-3 min-w-[140px]">
                        <div className={`w-4 h-4 rounded-full ${item.color} shrink-0`} />
                        <div>
                          <div className="text-xs text-ink-500">{item.label}</div>
                          <div className="text-lg font-bold text-ink-800">{item.value} %</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <P currentParagraph={cp}>
                Les travaux de Monica Heller sur les idéologies linguistiques et les pratiques multilingues offrent un éclairage pertinent sur cette question<FootnoteRef id={41} />. Heller montre que les pratiques linguistiques des locuteurs ne sont pas le simple reflet de leurs appartenances identitaires, mais des ressources stratégiques mobilisées en fonction des contextes et des enjeux. Dans le cas amazigh, l'utilisation du français ou de l'arabe dialectal pour promouvoir l'identité amazighe peut s'interpréter comme une stratégie pragmatique visant à atteindre un public plus large, notamment parmi les jeunes urbains qui ne maîtrisent pas toujours la langue amazighe. Cette situation renvoie aux dynamiques de substitution linguistique documentées par Salem Chaker dans le contexte nord-africain, où la transmission intergénérationnelle de l'amazigh est fragilisée par les politiques linguistiques étatiques et les processus d'urbanisation<FootnoteRef id={42} />.
              </P>
            </RevealSection>

            {/* ══════════════ CONCLUSION ══════════════ */}
            <RevealSection id="conclusion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200" data-tts>
                Conclusion
              </h2>
              <P currentParagraph={cp}>
                Cette recherche met en lumière la complexité des dynamiques identitaires amazighes à l'ère numérique. Loin de constituer un espace de simple reproduction des discours identitaires existants, les plateformes socionumériques apparaissent comme des arènes de reformulation, de négociation et de contestation des définitions de l'amazighité. Trois enseignements principaux se dégagent de cette étude.
              </P>
              <P currentParagraph={cp}>
                Premièrement, les réseaux numériques contribuent à la production d'une conscience identitaire amazighe qui tend à dépasser les clivages régionaux et les particularismes locaux, favorisant l'émergence d'une identification panmazighe transnationale. Ce processus, s'il ouvre des perspectives inédites de solidarité et de mobilisation, comporte également des risques d'essentialisation et de simplification des réalités sociolinguistiques et culturelles diverses que recouvre la catégorie « amazigh ».
              </P>
              <P currentParagraph={cp}>
                Deuxièmement, la discordance observée entre les discours institutionnels, les productions militantes et les perceptions des jeunes invite à dépasser les approches qui réduisent l'identité à ses expressions discursives publiques. L'identité vécue des jeunes amazighs se caractérise par sa plasticité, sa pluralité et sa résistance aux catégorisations univoques, qu'elles soient étatiques ou militantes.
              </P>
              <P currentParagraph={cp}>
                Troisièmement, la question linguistique apparaît comme un enjeu crucial et paradoxal de la promotion numérique de l'amazighité. La prédominance du français et de l'arabe dialectal dans les productions numériques identitaires amazighes pose la question des conditions de possibilité d'une revitalisation linguistique effective à l'ère du numérique, et invite à penser conjointement les politiques d'aménagement linguistique et les stratégies de présence numérique.
              </P>
              <P currentParagraph={cp}>
                Au plan théorique, cette recherche confirme la fécondité d'une approche constructiviste et communicationnelle de l'identité, qui refuse de considérer l'ethnicité comme une donnée naturelle pour l'appréhender comme un processus socialement construit et médiatiquement configuré. Elle invite également à approfondir la réflexion sur les articulations entre médiations numériques et processus d'identification, en prenant en compte les spécificités des contextes postcoloniaux et les asymétries de pouvoir qui les traversent.
              </P>
              <P currentParagraph={cp}>
                Enfin, cette étude ouvre des perspectives de recherche qui mériteraient d'être explorées dans des travaux ultérieurs, notamment l'analyse comparative des dynamiques identitaires amazighes numériques dans différents contextes nationaux (Maroc, Algérie, Libye, diaspora européenne), l'étude longitudinale des évolutions des discours et des pratiques identitaires en ligne, et l'examen des effets de la régulation algorithmique des plateformes sur la visibilité et la circulation des contenus amazighs.
              </P>
            </RevealSection>

            {/* ══════════════ NOTES ══════════════ */}
            <RevealSection id="notes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200">
                Notes
              </h2>
              <ol className="space-y-3">
                {footnotes.map((note) => (
                  <li
                    key={note.id}
                    id={`note-${note.id}`}
                    className="footnote-item flex gap-3 text-sm text-ink-700 leading-relaxed"
                  >
                    <button
                      onClick={() => handleBackToRef(note.id)}
                      className="back-to-text shrink-0 mt-0.5 text-xs font-bold min-w-[28px] h-6 bg-amazigh-50 rounded flex items-center justify-center hover:bg-amazigh-100 border border-amazigh-200"
                      title={`Retourner à la référence ${note.id}`}
                      aria-label={`Retourner au texte, note ${note.id}`}
                    >
                      {note.id}
                    </button>
                    <span>{note.text}</span>
                  </li>
                ))}
              </ol>
            </RevealSection>

            {/* ══════════════ BIBLIOGRAPHIE ══════════════ */}
            <RevealSection id="bibliographie" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-amazigh-200">
                Bibliographie
              </h2>
              <ul className="space-y-3">
                {bibliography.map((entry, i) => (
                  <li
                    key={i}
                    className="text-sm text-ink-700 leading-relaxed pl-4 border-l-2 border-earth-200 hover:border-amazigh-400 transition-colors duration-300"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </RevealSection>
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-earth-950 text-earth-300 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-4xl mb-4 opacity-30" aria-hidden="true">ⵣ</div>
          <p className="text-sm leading-relaxed">
            <strong className="text-white">Brahim Boulouayz</strong> — Université Ibn Zohr (Agadir) / Université de Poitiers (MIGRINTER, UMR 7301)
          </p>
          <p className="text-xs text-earth-500 mt-4">
            Article de recherche — Identité et ethnicité amazighes à l'ère des réseaux numériques
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`no-print fixed bottom-6 left-6 z-50 bg-earth-800 text-white p-3 rounded-full shadow-lg hover:bg-earth-700 transition-all duration-500 hover:scale-110 active:scale-95 ${
          progress > 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Retour en haut de page"
      >
        <ArrowUp size={20} />
      </button>


    </div>
  );
}

export default App;
