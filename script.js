/* English lives in index.html; these dictionaries only override it. */
const I18N = {
  ru: {
    "nav.rooms": "Залы", "nav.words": "О себе", "nav.lineage": "Родство", "nav.walk": "Написать",
    "hero.kicker": "Настя — пишет, смотрит, влюбляется",
    "hero.sub": "— в искусство вообще, честно.",
    "hero.hint": "↙ поводи курсором — кисть заправлена её красками",
    "hero.photoAlt": "Настя в зале музея, в платье с цветочным узором",
    "hero.label.name": "Настя",
    "hero.label.title": "Портрет художницы в роли зрительницы",
    "hero.label.medium": "Шёлк в цветочек, длинные волосы, вопрос в голове",
    "hero.label.loan": "Бессрочно предоставлено самой художницей",
    "hero.cue": "Залы I–III ↓",

    "rooms.kicker": "Коллекция · 3 работы",
    "rooms.title": "Читать вблизи",
    "rooms.how": "На каждой картине есть пронумерованные точки. Нажми на одну — холст приблизится и покажет, что там происходит. «Показать структуру» рисует скелет композиции, а пробы пигмента взяты прямо с краски.",

    "ui.structure": "Показать структуру", "ui.reset": "Отойти назад",
    "ui.pigments": "Пробы пигмента — наведи, чтобы увидеть где",
    "ui.fieldnote": "Фон этого зала — цветовое поле в духе Ротко, смешанное из пигментов самой картины.",

    "r1.kicker": "Зал I · Зимний пейзаж", "r1.title": "Дорога домой",
    "r1.alt": "Заснеженная тропинка в сумерках вьётся между елями к маленькой бревенчатой избе",
    "r1.caption": "Холст, масло · 2026",
    "r1.lede": "Зимняя дорога в тот час, когда снег перестаёт быть белым. Вся картина держится на двух температурах — розовом низком солнце и синеве всего, куда оно не достаёт, — и на одной маленькой тёплой вещи: доме.",
    "r1.structure": "S-образная тропа · вертикаль ствола · линия снежного поля · трети",
    "r1.n1.t": "Тропа", "r1.n1.b": "Дорога не белая — она сиреневая, розовая и бледно-голубая. Снег — зеркало неба, и написать его «белым» было бы неправдой. S-образная линия начинается у нижнего края, там, где стоишь ты, и втягивает взгляд к дому.",
    "r1.n2.t": "Дом", "r1.n2.b": "Самый маленький предмет и самое тёплое тёмное пятно на холсте. Сидит низко, на левой линии третей, наполовину в снегу. Именно его крошечный размер делает ели огромными.",
    "r1.n3.t": "Ствол", "r1.n3.b": "Одна жёсткая вертикаль режет картину сверху донизу прямо перед нами. Художники называют это репуссуаром: близкий предмет отталкивает всё остальное назад и открывает глубину.",
    "r1.n4.t": "Небо", "r1.n4.b": "Розовое, тающее в серое, прописано «по-сырому», без видимых мазков, — самая спокойная поверхность картины. Солнце низко и спрятано за деревьями: поздние сумерки или очень раннее утро.",
    "r1.n5.t": "Снег на ветках", "r1.n5.b": "Светлая краска протянута по тёмной почти сухой кистью. Щетина разбивает мазок, и этот рваный край читается как снег, налипший на иголки. Свет ложится только сверху.",
    "r1.n6.t": "Сухая трава", "r1.n6.b": "Быстрые мазки вверх охрой и серым — единственная тёплая фактура на переднем плане. Их ритм повторяет высокие стволы, только мельче.",
    "r1.p1": "Розовый снег", "r1.p2": "Синяя тень", "r1.p3": "Тропа", "r1.p4": "Ель в инее", "r1.p5": "Ночная хвоя", "r1.p6": "Бревенчатая стена",

    "r2.kicker": "Зал II · Морской пейзаж", "r2.title": "Скала держит",
    "r2.alt": "Золотая скала поднимается из дробно-синего моря под розовым небом, с её бока клонится маленькое дерево",
    "r2.caption": "Холст, масло · 2026",
    "r2.lede": "Скала, освещённая сбоку, стоит в море, которое отказывается быть одного цвета. Картина — спор жёлтого с фиолетовым, и прибой — место, где этот спор громче всего.",
    "r2.structure": "треугольник скалы · высокий горизонт · камни ведут взгляд по диагонали",
    "r2.n1.t": "Скала", "r2.n1.b": "Она построена, а не нарисована. Камень сложен из коротких квадратных плоских мазков, уложенных рядом, как кирпичи, — каждый ловит свет как маленькая грань. Так строил свои горы Сезанн.",
    "r2.n2.t": "Жёлтое против фиолетового", "r2.n2.b": "Освещённая сторона — жёлтая и охристая, а теневая не коричневая, а фиолетовая — дополнительный цвет к жёлтому. Это импрессионистское правило теней, и поэтому скала словно светится.",
    "r2.n3.t": "Маленькое дерево", "r2.n3.b": "Крошечное дерево клонится наружу, листва набита точками красного, охры и зелёного. Оно задаёт масштаб — и историю: живое держится за твёрдое.",
    "r2.n4.t": "Прибой", "r2.n4.b": "Густые белые броски краски о самое тёмное основание скалы. Контакт — это драма: самые яркие белила картины стоят вплотную к самым глубоким теням, ровно там, где вода бьёт в камень.",
    "r2.n5.t": "Море", "r2.n5.b": "Никогда не просто «синее». Горизонтальные штрихи кобальта, церулеума, сирени и мяты лежат рядом и смешиваются в глазу, а не на палитре. Раздельный мазок — по-моневски.",
    "r2.n6.t": "Небо", "r2.n6.b": "Розовый и персиковый, втёртые в разных направлениях. Ни одного нарисованного облака — сюжет здесь сам свет.",
    "r2.n7.t": "Камни на переднем плане", "r2.n7.b": "Глуше, коричневее, менее контрастные. Они заземляют нижний край и ступенями по диагонали ведут взгляд к скале.",
    "r2.p1": "Камень на солнце", "r2.p2": "Жжёный оранжевый", "r2.p3": "Фиолетовая тень", "r2.p4": "Открытое море", "r2.p5": "Дальние горы", "r2.p6": "Розовое небо", "r2.p7": "Пена",

    "r3.kicker": "Зал III · Портрет (своего рода)", "r3.title": "Не смешно",
    "r3.alt": "Серо-белый кот в радужном клоунском парике, с красным носом и голубыми полосами под глазами",
    "r3.caption": "Холст, масло · 2026",
    "r3.lede": "Кот в клоунском парике, совершенно не впечатлённый. Смешно примерно одну секунду — потом голубые полосы начинают читаться как слёзы. Абсурд нарочно, так, как она любит современное искусство: шутка, после которой смотришь второй раз.",
    "r3.structure": "большой овал парика · ось носа · линия глаз · красное перекликается с красным",
    "r3.n1.t": "Парик", "r3.n1.b": "Красный, жёлтый, зелёный и капля синего, положенные густо, круглыми закрученными мазками, — фактура буквально и есть кудри. Самое громкое место холста, и оно занимает всю верхнюю треть.",
    "r3.n2.t": "Грим или слёзы?", "r3.n2.b": "Голубые вертикальные полосы под глазами. И то и другое. Это старая идея грустного клоуна — Пьеро Ватто, бродячие акробаты Пикассо, — только на коте.",
    "r3.n3.t": "Нос и рот", "r3.n3.b": "Один красный круг и одна опущенная линия. Красный повторяет парик и привязывает к нему лицо, а опущенный рот несёт всё настроение.",
    "r3.n4.t": "Глаза", "r3.n4.b": "Чёрные миндалины с одним белым бликом, смотрят вбок, а не на нас. Кот где-то в другом месте, и наш смех его не касается.",
    "r3.n5.t": "Белая морда", "r3.n5.b": "Белый здесь не плоский: мазки идут по направлению шерсти, а под бликами спрятаны серые и холодные голубые, поэтому морда остаётся объёмной.",
    "r3.n6.t": "Жабо", "r3.n6.b": "Тяжёлые серые мазки на груди читаются как клоунский воротник — жабо Пьеро, сделанное из меха.",
    "r3.n7.t": "Фон", "r3.n7.b": "Ровный хаки почти без фактуры — тихое поле, на котором парик может кричать. Кот сдвинут влево, и рядом с ним остаётся пустой воздух.",
    "r3.p1": "Красный нос", "r3.p2": "Красный парик", "r3.p3": "Жёлтый парик", "r3.p4": "Зелёный парик", "r3.p5": "Голубая слеза", "r3.p6": "Белая морда", "r3.p7": "Фон хаки",

    "words.kicker": "Своими словами",
    "words.p1": "<em>Я влюблена!!!</em> В искусство вообще, честно. Я большая поклонница классики, но ценю практически любую эпоху. Мне нравится видеть, как люди выражали себя в разные времена и как искусство отражает то, как они видели и понимали мир вокруг.",
    "words.p2": "Особенно меня трогают импрессионизм и постимпрессионизм — <mark data-artist=\"morisot\">Берта Моризо</mark>, <mark data-artist=\"redon\">Одилон Редон</mark> и <mark data-artist=\"monet\">Моне</mark>. Ещё я люблю модерн и современное искусство, особенно <mark data-artist=\"rothko\">Ротко</mark> и <mark data-artist=\"klein\">Ива Кляйна</mark>. В современном искусстве меня завораживает, как что-то на первый взгляд абсурдное или необычное заставляет задавать вопросы и видеть вещи совсем с другой стороны.",
    "words.p3": "А ещё мне очень интересен перформанс. Например, <mark data-artist=\"abramovic\">путь Марины Абрамович и Улая по Великой Китайской стене</mark> кажется мне невероятно значимым. Я люблю, когда искусство выходит за пределы картин и скульптур и становится переживанием, идеей — или способом выразить то, что словами не совсем передать.",

    "lin.kicker": "Родство", "lin.title": "Кто в зале вместе с ней",
    "lin.hint": "наведи на имя — стена примет его цвет",
    "lin.morisot": "Писала воздух больше, чем предметы. Её розовые и жемчужные белые живут в небе зала I.",
    "lin.monet": "Раздельный мазок и цветные тени — каждый штрих моря в зале II.",
    "lin.redon": "Цвет как состояние сна, странные существа с мягкими глазами. Привет, кот-клоун.",
    "lin.rothko": "Цвет, внутри которого стоишь. Мягкие поля за каждым залом этой страницы.",
    "lin.klein": "Один синий, запатентованный: International Klein Blue. Этим синим страница начинается.",
    "lin.abramovic": "«Влюблённые»: путь по Великой стене навстречу друг другу. Так заканчивается эта страница.",

    "walk.kicker": "«Влюблённые» · Прогулка по Великой стене · 1988",
    "walk.text": "В 1988 году Марина Абрамович и Улай вышли с противоположных концов Великой Китайской стены и девяносто дней шли, чтобы встретиться посередине — и попрощаться. Эта страница заканчивается наоборот: встретимся посередине и поздороваемся.",
    "walk.hello": "Привет.",
    "walk.commission": "для заказов, выставок или просто поговорить о Ротко",
    "foot.rights": "все работы принадлежат автору",
  },

  fr: {
    "nav.rooms": "Salles", "nav.words": "Ses mots", "nav.lineage": "Filiation", "nav.walk": "Écrire",
    "hero.kicker": "Nastya — peint, regarde, tombe amoureuse",
    "hero.sub": "— de l’art en général, honnêtement.",
    "hero.hint": "↙ bouge le curseur — le pinceau est chargé de ses couleurs",
    "hero.photoAlt": "Nastya dans une salle de musée, en robe à fleurs",
    "hero.label.name": "Nastya",
    "hero.label.title": "Portrait de l’artiste en visiteuse de musée",
    "hero.label.medium": "Soie fleurie, cheveux longs, une question en tête",
    "hero.label.loan": "Prêt permanent de l’artiste elle-même",
    "hero.cue": "Salles I–III ↓",

    "rooms.kicker": "La collection · 3 œuvres",
    "rooms.title": "Lire de près",
    "rooms.how": "Chaque tableau porte des points numérotés. Touches-en un : la toile se rapproche pour montrer ce qui s’y passe. « Montrer la structure » dessine l’ossature de la composition ; les échantillons de pigment sont prélevés dans la peinture elle-même.",

    "ui.structure": "Montrer la structure", "ui.reset": "Reculer",
    "ui.pigments": "Échantillons de pigment — survole pour voir où",
    "ui.fieldnote": "Le fond de cette salle est un champ coloré à la manière de Rothko, mélangé avec les pigments du tableau lui-même.",

    "r1.kicker": "Salle I · Paysage d’hiver", "r1.title": "Le chemin du retour",
    "r1.alt": "Un chemin enneigé au crépuscule serpente entre les sapins vers une petite cabane en rondins",
    "r1.caption": "Huile sur toile · 2026",
    "r1.lede": "Une route d’hiver à l’heure où la neige cesse d’être blanche. Tout le tableau tient sur deux températures — le rose d’un soleil bas et le bleu de tout ce qu’il n’atteint pas — et sur une seule petite chose chaude : une maison.",
    "r1.structure": "courbe en S du chemin · verticale du tronc · ligne du champ de neige · tiers",
    "r1.n1.t": "Le chemin", "r1.n1.b": "La route n’est pas blanche : elle est lilas, rose et bleu pâle. La neige est un miroir du ciel ; la peindre « blanche » serait un mensonge. La courbe en S part du bord inférieur, là où tu te tiens, et t’attire vers la maison.",
    "r1.n2.t": "La maison", "r1.n2.b": "Le plus petit objet et le sombre le plus chaud de la toile, posé bas sur la ligne du tiers gauche, à moitié enfoui. C’est sa petite taille qui rend les sapins immenses.",
    "r1.n3.t": "Le tronc", "r1.n3.b": "Une verticale franche qui coupe le tableau de haut en bas, juste devant nous. Les peintres appellent cela un repoussoir : un objet proche qui repousse tout le reste et ouvre la profondeur.",
    "r1.n4.t": "Le ciel", "r1.n4.b": "Du rose qui fond dans le gris, fondu dans le frais, sans touche visible — la surface la plus calme du tableau. Le soleil est bas, caché derrière les arbres : fin de crépuscule, ou tout petit matin.",
    "r1.n5.t": "La neige sur les branches", "r1.n5.b": "De la peinture claire traînée sur le sombre avec un pinceau presque sec. Les poils brisent la touche, et ce bord cassé se lit comme de la neige accrochée aux aiguilles. La lumière ne tombe que sur le dessus.",
    "r1.n6.t": "Les herbes sèches", "r1.n6.b": "Des touches rapides vers le haut, en ocre et en gris — la seule texture chaude du premier plan. Leur rythme répète les grands troncs, en plus petit.",
    "r1.p1": "Neige rose", "r1.p2": "Ombre bleue", "r1.p3": "Le chemin", "r1.p4": "Sapin givré", "r1.p5": "Aiguilles de nuit", "r1.p6": "Mur de rondins",

    "r2.kicker": "Salle II · Marine", "r2.title": "Le rocher tient",
    "r2.alt": "Un rocher doré surgit d’une mer aux bleus brisés sous un ciel rose, un petit arbre penché sur son flanc",
    "r2.caption": "Huile sur toile · 2026",
    "r2.lede": "Un rocher éclairé de côté, debout dans une mer qui refuse d’être d’une seule couleur. Le tableau est une dispute entre le jaune et le violet, et le ressac est l’endroit où elle est la plus bruyante.",
    "r2.structure": "le triangle du rocher · un horizon haut · des pierres qui mènent en diagonale",
    "r2.n1.t": "Le rocher", "r2.n1.b": "Construit, pas dessiné. La pierre est faite de touches courtes, carrées et plates, posées côte à côte comme des briques, chacune un petit plan qui attrape la lumière. Cézanne bâtissait ses montagnes de la même façon.",
    "r2.n2.t": "Jaune contre violet", "r2.n2.b": "La face au soleil est jaune et ocre ; le côté à l’ombre n’est pas brun mais violet — la complémentaire du jaune. C’est la règle impressionniste des ombres, et c’est pour cela que le rocher semble rayonner.",
    "r2.n3.t": "Le petit arbre", "r2.n3.b": "Un arbre minuscule qui penche, son feuillage piqué de rouge, d’ocre et de vert. Il donne l’échelle — et l’histoire : quelque chose de vivant qui s’accroche à quelque chose de dur.",
    "r2.n4.t": "Le ressac", "r2.n4.b": "D’épaisses touches blanches jetées contre la base la plus sombre du rocher. Le contact, c’est le drame : les blancs les plus vifs touchent les noirs les plus profonds, là où l’eau frappe la pierre.",
    "r2.n5.t": "La mer", "r2.n5.b": "Jamais simplement « bleue ». Des tirets horizontaux de cobalt, de céruléum, de lilas et de menthe se juxtaposent et se mélangent dans l’œil plutôt que sur la palette. La couleur divisée, à la manière de Monet.",
    "r2.n6.t": "Le ciel", "r2.n6.b": "Rose et pêche frottés en directions croisées. Pas un seul nuage dessiné : le sujet, c’est la lumière elle-même.",
    "r2.n7.t": "Les pierres du premier plan", "r2.n7.b": "Plus ternes, plus brunes, moins contrastées. Elles ancrent le bord inférieur et montent en diagonale vers le rocher, guidant le regard.",
    "r2.p1": "Pierre au soleil", "r2.p2": "Orange brûlé", "r2.p3": "Ombre violette", "r2.p4": "Pleine mer", "r2.p5": "Montagnes lointaines", "r2.p6": "Ciel rose", "r2.p7": "Écume",

    "r3.kicker": "Salle III · Portrait (en quelque sorte)", "r3.title": "Pas drôle",
    "r3.alt": "Un chat gris et blanc coiffé d’une perruque de clown arc-en-ciel, nez rouge et rayures bleues sous les yeux",
    "r3.caption": "Huile sur toile · 2026",
    "r3.lede": "Un chat en perruque de clown, profondément pas impressionné. C’est drôle pendant une seconde — puis les rayures bleues se lisent comme des larmes. Absurde exprès, comme elle aime l’art contemporain : une blague qui fait regarder deux fois.",
    "r3.structure": "le grand ovale de la perruque · l’axe du nez · la ligne des yeux · le rouge répond au rouge",
    "r3.n1.t": "La perruque", "r3.n1.b": "Rouge, jaune, vert et une pointe de bleu, posés en pleine pâte, par touches rondes et tournantes — la texture est littéralement la boucle. C’est l’endroit le plus bruyant de la toile, et il occupe tout le tiers supérieur.",
    "r3.n2.t": "Maquillage ou larmes ?", "r3.n2.b": "Des rayures bleues verticales sous les yeux. Les deux. C’est la vieille idée du clown triste — le Pierrot de Watteau, les saltimbanques de Picasso — peinte sur un chat.",
    "r3.n3.t": "Le nez et la bouche", "r3.n3.b": "Un cercle rouge et une ligne tombante. Le rouge répète la perruque et y rattache le visage ; la bouche qui tombe porte toute l’humeur.",
    "r3.n4.t": "Les yeux", "r3.n4.b": "Des amandes noires avec un seul reflet blanc chacune, qui regardent de côté, pas vers nous. Le chat est ailleurs, intouché par nos rires.",
    "r3.n5.t": "Le visage blanc", "r3.n5.b": "Pas un blanc plat : les touches suivent le sens du pelage, avec des gris et des bleus froids glissés sous les lumières, pour que le visage reste rond.",
    "r3.n6.t": "La fraise", "r3.n6.b": "De lourdes touches grises sur le poitrail se lisent comme une collerette de clown — une fraise de Pierrot faite de fourrure.",
    "r3.n7.t": "Le fond", "r3.n7.b": "Un kaki uni, presque sans texture : un champ tranquille qui laisse crier la perruque. Le chat est poussé à gauche, laissant de l’air vide à côté de lui.",
    "r3.p1": "Rouge du nez", "r3.p2": "Rouge perruque", "r3.p3": "Jaune perruque", "r3.p4": "Vert perruque", "r3.p5": "Bleu larme", "r3.p6": "Blanc du visage", "r3.p7": "Fond kaki",

    "words.kicker": "Avec ses propres mots",
    "words.p1": "<em>Je suis amoureuse !!!</em> De l’art en général, honnêtement. J’adore aussi l’art classique, mais j’apprécie à peu près toutes les époques. J’aime voir comment les gens se sont exprimés à travers les siècles, et comment l’art reflète la manière dont ils voyaient et comprenaient le monde autour d’eux.",
    "words.p2": "Je suis particulièrement attirée par l’impressionnisme et le post-impressionnisme, surtout par <mark data-artist=\"morisot\">Berthe Morisot</mark>, <mark data-artist=\"redon\">Odilon Redon</mark> et <mark data-artist=\"monet\">Monet</mark>. J’aime aussi l’art moderne et contemporain, en particulier <mark data-artist=\"rothko\">Rothko</mark> et <mark data-artist=\"klein\">Yves Klein</mark>. Ce qui me fascine dans l’art contemporain, c’est qu’une chose en apparence absurde ou insolite puisse nous faire douter et voir les choses sous un angle complètement différent.",
    "words.p3": "La performance m’intéresse aussi beaucoup. Par exemple, <mark data-artist=\"abramovic\">la marche de Marina Abramović et Ulay sur la Grande Muraille de Chine</mark> me semble incroyablement forte. J’aime que l’art puisse dépasser la peinture et la sculpture pour devenir une expérience, une idée — ou même une façon d’exprimer ce que les mots ne savent pas tout à fait dire.",

    "lin.kicker": "Filiation", "lin.title": "Qui est dans la salle avec elle",
    "lin.hint": "survole un nom — le mur prend sa couleur",
    "lin.morisot": "Elle peignait l’air plus que les objets. Ses roses et ses blancs nacrés vivent dans le ciel de la salle I.",
    "lin.monet": "La couleur divisée et les ombres colorées — chaque tiret de la mer en salle II.",
    "lin.redon": "La couleur comme état de rêve, d’étranges créatures aux yeux doux. Bonjour, chat clown.",
    "lin.rothko": "Une couleur dans laquelle on se tient. Les champs doux derrière chaque salle de cette page.",
    "lin.klein": "Un seul bleu, breveté : l’International Klein Blue. Le bleu qui ouvre cette page.",
    "lin.abramovic": "Les Amants : marcher sur la Grande Muraille l’un vers l’autre. C’est ainsi que finit cette page.",

    "walk.kicker": "Les Amants · La marche sur la Grande Muraille · 1988",
    "walk.text": "En 1988, Marina Abramović et Ulay sont partis des deux extrémités de la Grande Muraille de Chine et ont marché quatre-vingt-dix jours pour se retrouver au milieu — et se dire adieu. Cette page finit à l’envers : retrouvons-nous au milieu pour nous dire bonjour.",
    "walk.hello": "Bonjour.",
    "walk.commission": "pour une commande, une exposition, ou juste parler de Rothko",
    "foot.rights": "toutes les œuvres appartiennent à l’artiste",
  },
};

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ───────── language ───────── */
const original = new Map();
function setLang(lang) {
  const dict = I18N[lang] || {};
  document.querySelectorAll("[data-i18n],[data-i18n-html],[data-i18n-alt]").forEach(el => {
    if (!original.has(el)) original.set(el, { text: el.textContent, html: el.innerHTML, alt: el.getAttribute("alt") });
    const o = original.get(el);
    if (el.dataset.i18n) el.textContent = dict[el.dataset.i18n] ?? o.text;
    if (el.dataset.i18nHtml) el.innerHTML = dict[el.dataset.i18nHtml] ?? o.html;
    if (el.dataset.i18nAlt) el.setAttribute("alt", dict[el.dataset.i18nAlt] ?? o.alt);
  });
  const h1 = document.querySelector(".hero h1");
  const lines = { en: ["I’m in", "love!!!"], ru: ["Я", "влюблена!!!"], fr: ["Je suis", "amoureuse!!!"] }[lang] || ["I’m in", "love!!!"];
  h1.querySelectorAll("span").forEach((s, i) => (s.textContent = lines[i]));
  h1.style.fontSize = { ru: "clamp(34px, 8vw, 150px)", fr: "clamp(32px, 7.2vw, 134px)" }[lang] || "";
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch {}
  bindArtistMarks();
}
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* ───────── hero brush ───────── */
(function brush() {
  const canvas = document.querySelector(".brush");
  const ctx = canvas.getContext("2d");
  const colours = ["#ddb561", "#ad2225", "#ecc6c0", "#84a0ce", "#2a694e", "#daa934", "#e5dfc9", "#af5a31"];
  let w, h, dpr, last = null, hue = 0, dist = 0;

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  // a brush = a fixed set of bristles, each with its own load of paint,
  // so the edge breaks up like real paint instead of looking like a marker
  function loadBrush() {
    return Array.from({ length: 16 }, (_, i) => ({
      off: i / 15 - 0.5 + (Math.random() - 0.5) * 0.08,
      alpha: 0.2 + Math.random() * 0.7,
      width: 0.5 + Math.random() * 0.9,
    }));
  }
  let bristles = loadBrush();

  function drawBristles(points, colour, size, set) {
    ctx.lineCap = "butt"; ctx.lineJoin = "round"; ctx.strokeStyle = colour;
    set.forEach(b => {
      ctx.globalAlpha = b.alpha;
      ctx.lineWidth = (size / set.length) * b.width * 2.4;
      ctx.beginPath();
      points.forEach(([x, y, nx, ny], i) => {
        const px = x + nx * b.off * size, py = y + ny * b.off * size;
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      });
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
  }
  function normal(x0, y0, x1, y1) {
    const a = Math.atan2(y1 - y0, x1 - x0) + Math.PI / 2;
    return [Math.cos(a), Math.sin(a)];
  }

  // a few strokes already on the canvas, so phones see paint too
  function seed() {
    const marks = [[.07, .8, .33, .71, 0], [.55, .1, .8, .19, 3], [.6, .93, .92, .86, 1], [.03, .2, .17, .13, 2]];
    marks.forEach(([a, b, c, d, k]) => {
      const pts = [];
      for (let s = 0; s <= 30; s++) {
        const t = s / 30;
        const x = w * (a + (c - a) * t), y = h * (b + (d - b) * t) + Math.sin(t * 5) * 7;
        const [nx, ny] = normal(w * a, h * b, w * c, h * d);
        pts.push([x, y, nx, ny]);
      }
      drawBristles(pts, colours[k], 30, loadBrush());
    });
  }

  function fade() {
    // paint slowly sinks back into the blue
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,0.012)";
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "source-over";
    requestAnimationFrame(fade);
  }

  canvas.parentElement.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const r = canvas.getBoundingClientRect();
    const p = { x: e.clientX - r.left, y: e.clientY - r.top };
    if (last) {
      const d = Math.hypot(p.x - last.x, p.y - last.y);
      dist += d;
      if (dist > 260) { hue = (hue + 1) % colours.length; dist = 0; bristles = loadBrush(); }
      if (d < 1) return;
      const size = Math.max(10, 34 - d * 0.35);
      const [nx, ny] = normal(last.x, last.y, p.x, p.y);
      drawBristles([[last.x, last.y, nx, ny], [p.x, p.y, nx, ny]], colours[hue], size, bristles);
    }
    last = p;
  });
  canvas.parentElement.addEventListener("pointerleave", () => { last = null; bristles = loadBrush(); });

  addEventListener("resize", resize);
  resize();
  if (!reduceMotion) requestAnimationFrame(fade);
})();

/* ───────── rooms: close reading ───────── */
document.querySelectorAll(".room").forEach(room => {
  const zoomer = room.querySelector(".zoomer");
  const canvas = room.querySelector(".canvas");
  const spots = [...room.querySelectorAll(".spot")];
  const notes = [...room.querySelectorAll(".notes li")];
  const probe = room.querySelector(".probe");

  function activate(n, zoom) {
    spots.forEach(s => s.classList.toggle("on", s.dataset.n === n));
    notes.forEach(li => {
      const on = li.dataset.n === n;
      li.classList.toggle("on", on);
      li.querySelector("button").setAttribute("aria-expanded", on);
    });
    const spot = spots.find(s => s.dataset.n === n);
    if (zoom && spot) {
      zoomer.style.setProperty("--x", spot.style.getPropertyValue("--x"));
      zoomer.style.setProperty("--y", spot.style.getPropertyValue("--y"));
      zoomer.style.setProperty("--z", 2.3);
      canvas.classList.add("zoomed");
    }
  }
  function stepBack() {
    zoomer.style.setProperty("--z", 1);
    canvas.classList.remove("zoomed");
  }

  spots.forEach(s => {
    s.setAttribute("aria-label", `Detail ${s.dataset.n}`);
    s.addEventListener("click", () => {
      const already = s.classList.contains("on") && canvas.classList.contains("zoomed");
      already ? stepBack() : activate(s.dataset.n, true);
    });
  });
  notes.forEach(li => li.querySelector("button").addEventListener("click", () => {
    activate(li.dataset.n, true);
    if (innerWidth <= 900) canvas.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  }));

  room.querySelector('[data-act="reset"]').addEventListener("click", stepBack);
  const structBtn = room.querySelector('[data-act="structure"]');
  structBtn.addEventListener("click", () => {
    const on = room.classList.toggle("show-structure");
    structBtn.setAttribute("aria-pressed", on);
    if (on) stepBack();
  });

  room.querySelectorAll(".pigments li").forEach(p => {
    const show = () => {
      probe.style.setProperty("--px", p.dataset.x);
      probe.style.setProperty("--py", p.dataset.y);
      probe.style.setProperty("--pc", p.style.getPropertyValue("--c"));
      probe.classList.add("on");
    };
    p.addEventListener("mouseenter", show);
    p.addEventListener("click", show);
    p.addEventListener("mouseleave", () => probe.classList.remove("on"));
  });

  activate("1", false);
});

/* ───────── lineage: the wall takes the colour ───────── */
const lineage = document.querySelector(".lineage");
const names = [...document.querySelectorAll(".names li")];
function paintWall(artist) {
  const li = names.find(n => n.dataset.artist === artist);
  names.forEach(n => n.classList.toggle("on", n === li));
  lineage.style.setProperty("--wall", li ? li.style.getPropertyValue("--wall") : "");
  lineage.style.setProperty("--wink", li ? li.style.getPropertyValue("--wink") : "");
  if (!li) { lineage.style.removeProperty("--wall"); lineage.style.removeProperty("--wink"); }
}
names.forEach(li => {
  li.addEventListener("mouseenter", () => paintWall(li.dataset.artist));
  li.addEventListener("click", () => paintWall(li.classList.contains("on") ? null : li.dataset.artist));
});
document.querySelector(".names").addEventListener("mouseleave", () => paintWall(null));

// names inside her text jump to the matching line of the lineage
function bindArtistMarks() {
  document.querySelectorAll(".words mark[data-artist]").forEach(m => {
    m.style.cursor = "pointer";
    m.onclick = () => {
      paintWall(m.dataset.artist);
      lineage.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    };
  });
}

/* ───────── the walk ───────── */
(function walk() {
  const section = document.querySelector(".walk");
  const path = section.querySelector(".wall-line");
  const a = section.querySelector(".w-a"), b = section.querySelector(".w-b");
  const hello = section.querySelector(".hello");
  const len = path.getTotalLength();

  function place(g, at) {
    const p = path.getPointAtLength(at);
    g.setAttribute("transform", `translate(${p.x} ${p.y})`);
  }
  function update() {
    const r = section.getBoundingClientRect();
    const travel = r.height - innerHeight;
    const t = Math.min(1, Math.max(0, -r.top / (travel * 0.85)));
    place(a, (len / 2) * t);
    place(b, len - (len / 2) * t);
    hello.classList.toggle("on", t > 0.97);
  }
  addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();
})();

/* ───────── reveals ───────── */
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll(".rooms-intro, .room-head, .label, .words-cols > p, .names li, .lineage-head").forEach(el => {
  el.classList.add("reveal"); io.observe(el);
});

/* ───────── start ───────── */
let startLang = "en";
try { startLang = localStorage.getItem("lang") || ""; } catch {}
if (!startLang) {
  const nav = (navigator.language || "en").slice(0, 2);
  startLang = I18N[nav] ? nav : "en";
}
setLang(startLang);
