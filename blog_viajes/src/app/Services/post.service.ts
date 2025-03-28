import { Injectable } from '@angular/core';
import { Post } from '../Interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
    {
      id: 1,
      titulo: 'La playa que susurraba recuerdos',
      texto: 'El sol de la tarde pintaba la arena de oro suave mientras mis pies descalzos se hundían en la orilla. Había llegado a una playa escondida tras caminar por un sendero selvático durante horas, guiado solo por el rumor distante del mar. El aire olía a sal y flores silvestres, y en la lejanía no se veía a nadie más. Era mi rincón secreto, un refugio natural donde las olas me hablaban con cada vaivén. No tenía prisa. Dejé mi mochila a un lado y me tumbé sobre la arena tibia, cerrando los ojos para escuchar. El sonido rítmico del océano me recordó a los latidos de un corazón sereno. Cada ola que rompía en la costa parecía llevarse consigo las preocupaciones que había arrastrado hasta allí. Sentí una paz profunda, esa clase de tranquilidad que solo se encuentra en lugares donde el mundo parece detenerse. Recordé por qué emprendí este viaje: necesitaba escapar, encontrarme a mí mismo lejos del ruido cotidiano. En esa soledad elegida, bajo el cielo infinito, empecé a sentir una conexión especial con la naturaleza. Las gaviotas sobrevolaban como si vigilaran mis pensamientos, y en ese momento inesperado, una lágrima de gratitud rodó por mi mejilla. Era feliz, pero sobre todo, me sentía libre. Caminé por la orilla coleccionando conchas blancas y trozos de coral, pequeños tesoros que el mar dejaba a mis pies. Cada paso que daba dibujaba huellas efímeras que la espuma borraba, recordándome lo fugaz que es cada instante y lo valioso que se vuelve al vivirlo plenamente. Me senté en una roca cubierta de musgo a contemplar el horizonte, donde el cielo naranja del atardecer se fundía con el agua turquesa. Pensé en las personas que amo y deseé que en ese preciso segundo pudieran sentir lo que yo sentía.',
      imagen: 'https://cdn.pixabay.com/photo/2022/07/22/13/23/coast-7338147_1280.jpg',
      categoria: 'Playa',
      fecha_aventura: '2023-02-10'
    },
    {
      id: 2,
      titulo: 'Noches de fogata en la costa',
      texto: 'Llegué a aquel pequeño pueblo costero por casualidad, con la mochila al hombro y el corazón abierto a lo que viniera. La playa principal era de arena blanca y palmeras inclinadas por el viento, pero lo que más me llamó la atención fueron los botes de colores brillantes alineados en la orilla. Eran los barcos de los pescadores locales, que a esa hora del atardecer recogían sus redes repletas de peces plateados. Me acerqué con curiosidad y, antes de darme cuenta, ya estaba ayudando a empujar una barca tierra adentro entre risas y saludos amables.\n\nEsa noche, los pescadores me invitaron a una fogata en la playa para celebrar la buena jornada. Bajo un cielo cargado de estrellas, encendieron un fuego que crepitaba alegremente mientras asaban el pescado fresco que habían capturado. El aroma delicioso se mezclaba con el aire salino. Me senté en la rueda de gente, casi sin creer la suerte de estar allí, y me pasaron un coco lleno de agua dulce de caña que calentaba el alma.\n\nAl principio era un extraño, pero pronto me sentí parte de aquella pequeña familia improvisada. Don Felipe, el más viejo del grupo, comenzó a tocar una guitarra desgastada y todos cantamos canciones tradicionales que yo no conocía pero intenté seguir tarareando. A mi lado, María, la hija de uno de los pescadores, me tradujo las letras y me contó historias del mar, de cómo su abuelo le enseñó a navegar guiándose por las estrellas. Su voz tenía la cadencia de las olas y sus ojos brillaban reflejando el fuego.\n\nEn algún momento de la noche, me di cuenta de que tenía la cara dolorida de tanto reír. Hablamos de todo: de mis viajes, de sus vidas sencillas, de sueños y anhelos. La brisa nocturna nos envolvía y el sonido distante del océano acompañaba cada anécdota. Sentí una calidez inmensa, una conexión humana sincera que no entiende de fronteras ni idiomas.',
      imagen: 'https://cdn.pixabay.com/photo/2023/01/02/15/40/nusa-penida-7692354_1280.jpg',
      categoria: 'Playa',
      fecha_aventura: '2023-08-17'
    },
    {
      id: 3,
      titulo: 'Amanecer en las Torres del Paine',
      texto: 'El viento frío de la madrugada cortaba mi rostro mientras avanzaba paso a paso por el sendero pedregoso. Estaba en el corazón de la Patagonia chilena, llevando mi cuerpo al límite para alcanzar el Mirador Base de las Torres del Paine antes de que despuntara el alba. A cada paso que daba en la oscuridad, podía oír mi respiración agitada y el latido acelerado de mi corazón, pero también sentía una fuerza interior impulsándome. Llevaba meses soñando con este momento y, aunque las piernas me pesaban después de horas de ascenso, la idea de ver amanecer sobre las famosas torres me daba alas.\n\nRecordé la jornada del día anterior: ríos de agua helada que crucé saltando de roca en roca, vientos repentinos que casi me arrebatan el sombrero, y la soledad imponente de los valles interminables. Hubo instantes en que dudé de mis fuerzas, en que la montaña me puso a prueba con su dureza. Sin embargo, la determinación puede más que el cansancio. En la penumbra, distinguí las siluetas de otros dos viajeros unos metros delante, igualmente empeñados en llegar. Nos dedicamos sonrisas cómplices sin mediar palabra; en esas alturas, todos compartimos el mismo anhelo silencioso.\n\nAl llegar al lago al pie de las Torres, el cielo comenzó a clarear. Nos acomodamos sobre unas piedras grandes, abrazando nuestras chaquetas para protegernos del gélido aire andino. De pronto, sucedió la magia: el primer rayo de sol tocó la punta de las tres moles de granito. Como si fuese un hechizo, las Torres del Paine se encendieron de un rojo anaranjado espectacular. Mi boca se abrió en un gesto de asombro y no pude contener las lágrimas. Todo el esfuerzo, el frío, el dolor de los músculos, todo desapareció en ese instante. Solo existía la belleza pura delante de mis ojos y una felicidad que me llenó el pecho hasta casi explotar.\n\nNo estábamos solos en realidad: cóndores planeaban en círculos sobre nosotros, saludando al nuevo día, y escuché a alguien sollozar de emoción unos metros atrás. Yo también lloré, lloré de alegría y humildad ante la grandeza de la naturaleza. Pensé en lo pequeños que somos y, a la vez, en la enorme capacidad que tenemos de maravillarnos.',
      imagen: 'https://cdn.pixabay.com/photo/2019/06/24/15/14/patagonia-4296259_1280.jpg',
      categoria: 'Montaña',
      fecha_aventura: '2023-11-05'
    },
    {
      id: 4,
      titulo: 'Mil estrellas sobre el Himalaya',
      texto: 'El sol se había escondido tras las cumbres del Himalaya, y el campamento se llenó de una penumbra azulada. Planté mi tienda de campaña en un pequeño claro, rodeado de la inmensidad de las montañas nevadas. Estábamos a más de 4.000 metros de altura, en un punto remoto del circuito del Annapurna en Nepal. El aire era fino y helado; con cada bocanada sentía la pureza y la dureza de estar tan alto. A lo lejos se veía la silueta majestuosa del Annapurna iluminada por los últimos resplandores anaranjados del atardecer. Mientras encendía mi linterna frontal para organizar el equipo, pude escuchar el silencio absoluto del valle, roto solo por alguna lejana avalancha resonando como un trueno apagado.\n\nDespués de una cena sencilla alrededor del fuego – sopa caliente y té de jengibre preparado por nuestro guía sherpa –, la noche cayó por completo. Al salir de la tienda, levanté la vista y me quedé sin aliento: encima de mí se extendía un manto infinito de estrellas como nunca antes lo había visto. La Vía Láctea cortaba el cielo negro de lado a lado, y era tan brillante que parecía una nube luminosa. Reconocí constelaciones a duras penas, porque allí había mil estrellas más de las que alcanzaba a contar. Me senté en una roca, abrazando mis rodillas contra el pecho para conservar el calor, y dejé que esa visión me envolviera. Era imposible no sentirse diminuto ante semejante espectáculo, y sin embargo, esa pequeñez venía acompañada de una extraña sensación de armonía con todo lo que me rodeaba.\n\nCerca de mí, mi compañero de expedición también contemplaba el cielo en silencio. Le pregunté en voz baja qué sentía en ese momento, y simplemente sonrió antes de responder: “Libertad”. Aquella palabra resonó en mi mente mientras volvíamos a guardar silencio. Libertad. Eso era precisamente lo que yo sentía: libertad de espíritu, libertad de pensamiento. Como si allá arriba, entre esas cimas sagradas y estrellas antiguas, todas las preocupaciones mundanas carecieran de importancia. Pensé en mi hogar, en lo lejos que estaba, pero en vez de añoranza sentí gratitud. Gratitud por poder estar viviendo ese momento único, por estar vivo y presente, allí donde el mundo se muestra en su forma más pura.',
      imagen: 'https://cdn.pixabay.com/photo/2020/07/10/18/06/tent-5391599_1280.jpg',
      categoria: 'Montaña',
      fecha_aventura: '2022-10-01'
    },
    {
      id: 5,
      titulo: 'Bajo las luces de París',
      texto: 'Era mi última noche en París y decidí despedirme de la ciudad de la manera más especial que se me ocurrió: subiendo al Arco del Triunfo al atardecer. Tras pagar la entrada, comencé a ascender los interminables escalones de caracol que conducen a la azotea del monumento. Mis piernas protestaban un poco, cansadas después de días de recorrer calles y museos, pero la emoción podía más que el cansancio. Finalmente, alcancé la cima y salí al aire libre, justo cuando el cielo comenzaba a teñirse de tonos malva y dorado sobre la ciudad.\n\nLa vista era sencillamente mágica. Desde lo alto del Arco del Triunfo, París se extendía en todas direcciones como un tapiz vivo. Las avenidas partían en estrella debajo de mí, llenas de diminutas luces de coches que serpenteaban pacientes. A lo lejos, la Torre Eiffel brillaba, primero con la luz cálida del ocaso y luego encendiéndose poco a poco hasta empezar a titilar con sus famosas luces. El río Sena reflejaba el color del cielo y los primeros faroles de la ciudad, ondulando sus destellos. Sentí un nudo en la garganta: era demasiada belleza junta, y por un instante contuve la respiración, completamente maravillado.\n\nApoyé las manos en la barandilla de piedra, cerrando los ojos un segundo para absorber ese instante con todos mis sentidos. Escuché las risas de otros visitantes a mi alrededor, gente de distintos rincones del mundo que, como yo, compartían la alegría de contemplar París desde las alturas. Un señor mayor, de acento italiano, me dijo en inglés: "Magnífico, ¿verdad?". Asentí sonriendo y le respondí en italiano con las pocas palabras que sabía: "Assolutamente bellissimo". Ambos reímos suavemente; no necesitábamos más idioma que el asombro compartido en nuestros rostros. Éramos desconocidos, pero en ese balcón sobre la ciudad todos nos sentíamos conectados por la misma emoción.\n\nMientras las luces de París se encendían una a una, pensé en todo lo que había vivido esos días.',
      imagen: 'https://cdn.pixabay.com/photo/2022/05/22/11/00/arc-de-triomphe-7213188_1280.jpg',
      categoria: 'Ciudad',
      fecha_aventura: '2022-04-20'
    },
    {
      id: 6,
      titulo: 'Nostalgia en La Habana Vieja',
      texto: 'El sonido de un motor antiguo y una melodía de son cubano fueron lo primero que me acompañó aquella mañana en La Habana. Subí a un coche clásico de los años 50, de esos Chevrolet color pastel que recorren el Malecón, y sentí que viajaba en el tiempo. El chófer, el señor Rogelio, llevaba orgulloso su gorra y me iba señalando con el dedo las fortalezas y edificios emblemáticos mientras bordeábamos el mar. La brisa cálida olía a sal y a historia. El Malecón estaba vivo: parejas de enamorados sentadas en el muro, pescadores lanzando sus hilos al agua, risas de niños chapoteando en las olas que salpicaban sobre las rocas. Todo bajo un cielo de un azul intenso que parecía bendecir la ciudad.\n\nAl adentrarme a pie en las calles de La Habana Vieja, me recibió un estallido de colores y música. Las fachadas descascaradas lucían tonalidades de amarillo, verde y azul cielo; algunas ventanas tenían las persianas medio caídas, pero aun así dejaban escapar las risas y conversaciones de familias enteras. En cada cuadra había al menos un balcón con ropa tendida ondeando al viento, como banderas cotidianas de la vida cubana. Un grupo de músicos callejeros tocaba "Guantanamera" en una esquina, y sin pensarlo mis pasos empezaron a llevar el ritmo. Me sumé a un pequeño corrillo de gente que aplaudía la canción, todos extraños entre sí pero unidos por la alegría contagiosa de la música.\n\nCaminé hasta la Plaza Vieja y me senté en un banco a descansar. A mi lado, una señora mayor, de piel oscura y ojos vivaces, tejía un sombrero de palma. Nos pusimos a conversar con naturalidad. Me contó que se llamaba Dolores, aunque todos la apodaban Lolita, y que había vivido toda su vida en La Habana. En su voz había orgullo y a la vez cierta tristeza mientras me narraba cómo habían cambiado las cosas, cómo recordaba la ciudad de su niñez con tranvías y cines elegantes, y cómo a pesar de las dificultades actuales, los habaneros mantenían la cabeza alta y el corazón alegre.',
      imagen: 'https://cdn.pixabay.com/photo/2021/01/29/05/22/havana-5959733_1280.jpg',
      categoria: 'Ciudad',
      fecha_aventura: '2023-05-25'
    },
    {
      id: 7,
      titulo: 'Colores de Holi en la India',
      texto: 'Me encontraba en la ciudad de Vrindavan, en la India, famosa por celebrar uno de los Holi más intensos del país. El aire de la mañana ya olía a polvo dulce y a especias, y podía sentir la anticipación vibrando en cada callejón. Vestido con ropa vieja y sencilla – unos pantalones ligeros y una camisa blanca que no volvería a ser blanca –, caminaba con una mezcla de nervios y emoción hacia la plaza principal. Nunca antes había celebrado Holi, la fiesta de los colores, y mi corazón latía con fuerza ante lo desconocido. ¿Cómo sería ser parte de ese torbellino de pigmentos y alegría?\n\nApenas doblé la esquina, un chillido alegre me tomó por sorpresa: un grupo de niños con las manos teñidas de rosa y verde corrió hacia mí. Antes de poder reaccionar, ya estaba bañado en una nube de polvo fucsia que dejó mi cabello y rostro completamente teñidos. "¡Happy Holi!" me gritaron riendo, y su risa era tan contagiosa que exploté en carcajadas junto a ellos. Casi sin darme cuenta, estaba siendo arrastrado al centro de la celebración. A mi alrededor todo era un caos maravilloso: gente de todas las edades lanzando polvos de colores al aire, cubos de agua tintada volando desde las terrazas, música bhangra retumbando desde altavoces improvisados y palmas que marcaban el ritmo.\n\nAl principio distinguía los colores: aquí un rojo vibrante estampado en mi camiseta, allá un amarillo luminoso cubriendo el rostro de una anciana que bailaba sin parar. Pero pronto todos nos convertimos en un mismo arcoíris andante. Un desconocido me estampó la palma de su mano impregnada de azul en la mejilla y luego me abrazó como si fuera su amigo de toda la vida. "Holi hai!" repetían todos, recordándome que ese día no hay extranjeros ni locales, ni ricos ni pobres: solo personas celebrando la vida y la unión. Me uní a un corro de baile, tomados de las manos saltando bajo una lluvia de polvo multicolor. Tenía la boca llena de risa y, seguramente, de un poco de polvo dulce también, pero no importaba. En mis ojos seguramente brillaba la misma luz que veía en los demás.\n\nEn medio de la euforia, hubo un instante en que me detuve, respiré hondo y miré a mi alrededor casi en cámara lenta. Vi caras irreconocibles bañadas de color, vi sonrisas sinceras y miradas brillantes. Algunos tenían lágrimas de felicidad surcando surcos limpios en sus mejillas teñidas. Sentí un calor en el pecho que nada tenía que ver con el clima primaveral: era la dicha absoluta de sentirme parte de algo tan puro y universal como la alegría. Pensé en lo simbólico de Holi: la victoria del bien sobre el mal, el inicio de la primavera, el perdón y los nuevos comienzos.',
      imagen: 'https://cdn.pixabay.com/photo/2020/01/11/18/12/holi-4758337_1280.jpg',
      categoria: 'Festival',
      fecha_aventura: '2024-03-10'
    },
    {
      id: 8,
      titulo: 'Carnaval en Río: un mar de música y alegría',
      texto: 'La noche carioca vibraba con un latido propio mientras me adentraba en el Sambódromo de Río de Janeiro. Era Carnaval, la fiesta más grande del mundo, y sentía que cada célula de mi cuerpo estaba electrizada de anticipación. Había pasado el día en un bloco callejero, bailando bajo el sol entre multitudes disfrazadas, pero nada podía compararse con la energía que me golpeó al entrar al Sambódromo. Las gradas estaban repletas de gente de todas partes del planeta, un mosaico de colores, lentejuelas y sonrisas pintadas. La samba ya resonaba en la distancia: las baterías (esas imponentes bandas de percusión) afinaban tambores y surdos, marcando un ritmo ancestral que imitaba el pulso del corazón.\n\nCuando las luces se atenuaron un instante, un silencio expectante recorrió al público. De pronto, un estallido de fuegos artificiales iluminó el cielo tropical y la primera escola de samba hizo su entrada triunfal. Apareció un enorme carro alegórico, adornado con plumas verdes y doradas, con bailarines moviéndose sincronizados como una ola humana. Los ritmistas empezaron a tocar con una fuerza indescriptible: el estruendo de los tambores, los repiques veloces, los cuicas gimiendo su canto peculiar. El público se levantó de un salto. Yo no pude contenerme y también me puse de pie, con el corazón martillando al compás. Frente a mis ojos desfilaban cientos de bailarines con trajes exuberantes, cada uno más brillante que el anterior. Era un mar de música y alegría desbordada.\n\nA mi lado, una familia brasileña cantaba a pleno pulmón la letra del samba-enredo de la escuela. Aunque yo no entendía todas las palabras en portugués, pronto me encontré tarareando el estribillo y levantando los brazos al cielo junto a ellos. La madre, con lágrimas de emoción, me abrazó sin conocerme cuando pasó la Porta-Bandeira (la bailarina que lleva la bandera de la escuela) girando con gracia majestuosa. En ese abrazo sentí la calidez de un pueblo que celebra la vida con todo su ser. Noté que también yo tenía los ojos húmedos. La mezcla de la música ensordecedora, las coreografías increíbles y la pasión colectiva me había puesto la piel de gallina.',
      imagen: 'https://cdn.pixabay.com/photo/2019/08/08/18/32/samba-4393614_1280.jpg',
      categoria: 'Festival',
      fecha_aventura: '2024-02-20'
    },
    {
      id: 9,
      titulo: 'El pueblo bajo la roca: vida y lecciones en Setenil',
      texto: 'Desde el momento en que llegué a Setenil de las Bodegas, supe que aquel lugar sería especial. Este pequeño pueblo blanco de la sierra andaluza parece salido de un cuento: casas encaladas incrustadas literalmente bajo enormes rocas que forman techos naturales sobre las calles. Al pasar con mi mochila por la calle Cuevas del Sol por primera vez, tuve que contener el aliento; sobre mi cabeza, una inmensa piedra cobijaba terrazas y ventanas llenas de macetas floridas. Era mediodía y el aire olía a pan recién horneado y azahar. El rumor del río Trejo, corriendo tímido bajo los puentes, le daba una banda sonora serena al escenario.\n\nMe alojé en una casita rural regentada por una pareja de ancianos encantadores, Paco y María, quienes me recibieron como si fuera su propio nieto de visita. Mi habitación tenía vigas de madera y una ventana diminuta por la que se colaba la luz dorada de la tarde y el eco de las golondrinas. La primera noche, María insistió en que me quedara a cenar con ellos. Preparó un plato de migas y chorizo al fuego de leña, acompañado de un vino tinto elaborado en la comarca. Nos sentamos a la mesa de su cocina, bajo la roca que asomaba por el techo, y entre risas y anécdotas me contaron la historia del pueblo: de cómo sus antepasados aprovecharon las oquedades naturales para construir sus viviendas, de las épocas de cosecha de aceitunas y de las fiestas patronales donde todo Setenil baila sevillanas en la plaza.\n\nLos días transcurrían lentos y llenos de pequeñas delicias. Por las mañanas despertaba con el canto del gallo de un corral vecino y el repicar lejano de las campanas de la iglesia. Salía a caminar sin rumbo fijo, descubriendo rincones: una capilla diminuta escondida tras una peña, un mirador desde donde se divisaban los tejados rojos contrastando con la piedra beige de las montañas, y calles tan estrechas que podía tocar las paredes a ambos lados con solo extender los brazos. En mis paseos, los vecinos me saludaban con un "¡Buenos días, hijo!" y una sonrisa sincera. En la panadería, la panadera me regaló un bollo de aceite cuando supo que venía de tan lejos.',
      imagen: 'https://cdn.pixabay.com/photo/2018/10/21/13/10/spain-3762877_1280.jpg',
      categoria: 'Rural',
      fecha_aventura: '2023-09-14'
    },
    {
      id: 10,
      titulo: 'Cosechas en el Valle Sagrado: lecciones de un pueblo andino',
      texto: 'El autobús destartalado me dejó en una curva polvorienta de la carretera, a las afueras de un pequeño pueblo andino en el Valle Sagrado de los Incas, Perú. La tarde caía dorada sobre los campos de maíz y quinoa que se extendían escalonados en terrazas antiguas por las laderas de las montañas. Con la mochila a cuestas, caminé los últimos metros hasta la casa de la familia que me acogería las próximas semanas. No tenía timbre; bastó con que un perro ladrara para que doña Clara apareciera en la puerta de adobe, secándose las manos en el delantal. Su sonrisa franca y arrugada fue el mejor recibimiento. "¡Mijito, bienvenido!", exclamó mientras me envolvía en un abrazo cálido, como si en vez de un extraño llegara un hijo pródigo.\n\nLa casa era humilde: paredes de barro, techo de tejas rojas y un patio central donde cacareaban unas gallinas y se secaban mazorcas al sol. Pronto conocí al resto de la familia: don Celestino, de hablar pausado y sombrero de ala ancha, y sus dos nietos, Inti y Rosa, de 8 y 6 años, tímidos al principio pero traviesos después de pocos minutos. Esa misma noche compartimos una cena alrededor del fogón: sopa de chuño (patata deshidratada) y estofado de cordero con hierbas aromáticas de su huerto. Mientras comíamos a la luz tenue de una lámpara de kerosén, me sentí transportado a otro tiempo. Afuera, el silencio de la montaña solo era interrumpido por el murmullo del río Urubamba en el valle y algún lejano canto en quechua que llegaba desde otra casa, resonando en la quietud nocturna.\n\nAl día siguiente, antes del amanecer, ya estaba en pie para ayudar en la chacra (campo de cultivo). El frío de la mañana serrana me caló los huesos, pero el entusiasmo podía más. Acompañé a don Celestino e Inti a arar un pequeño terreno donde sembraríamos papas. Usaban un arado tradicional de madera, guiado por dos bueyes pacientes. Ver a aquel hombre de 70 años manejar con destreza la yunta y el arado me dejó impresionado; sus manos curtidas parecían formar parte de la herramienta, con una fuerza tranquila que solo da la experiencia de toda una vida labrando la tierra.',
      imagen: 'https://cdn.pixabay.com/photo/2020/05/10/23/29/peasant-5155891_1280.jpg',
      categoria: 'Rural',
      fecha_aventura: '2024-01-30'
    }
  ];

  getAllPost(): Post[] {
    return this.posts
  }

  getById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id)
  }

  addPost(post: Post) {
    return this.posts.push(post)
  }

  constructor() { }
}
