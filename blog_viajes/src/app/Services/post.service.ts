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
      categoria: 'playa',
      fecha_aventura: '10-02-2023'
    },
    {
      id: 2,
      titulo: 'Mil estrellas sobre el Himalaya',
      texto: 'El sol se había escondido tras las cumbres del Himalaya, y el campamento se llenó de una penumbra azulada. Planté mi tienda de campaña en un pequeño claro, rodeado de la inmensidad de las montañas nevadas. Estábamos a más de 4.000 metros de altura, en un punto remoto del circuito del Annapurna en Nepal. El aire era fino y helado; con cada bocanada sentía la pureza y la dureza de estar tan alto. A lo lejos se veía la silueta majestuosa del Annapurna iluminada por los últimos resplandores anaranjados del atardecer. Mientras encendía mi linterna frontal para organizar el equipo, pude escuchar el silencio absoluto del valle, roto solo por alguna lejana avalancha resonando como un trueno apagado.\n\nDespués de una cena sencilla alrededor del fuego – sopa caliente y té de jengibre preparado por nuestro guía sherpa –, la noche cayó por completo. Al salir de la tienda, levanté la vista y me quedé sin aliento: encima de mí se extendía un manto infinito de estrellas como nunca antes lo había visto. La Vía Láctea cortaba el cielo negro de lado a lado, y era tan brillante que parecía una nube luminosa. Reconocí constelaciones a duras penas, porque allí había mil estrellas más de las que alcanzaba a contar. Me senté en una roca, abrazando mis rodillas contra el pecho para conservar el calor, y dejé que esa visión me envolviera. Era imposible no sentirse diminuto ante semejante espectáculo, y sin embargo, esa pequeñez venía acompañada de una extraña sensación de armonía con todo lo que me rodeaba.\n\nCerca de mí, mi compañero de expedición también contemplaba el cielo en silencio. Le pregunté en voz baja qué sentía en ese momento, y simplemente sonrió antes de responder: “Libertad”. Aquella palabra resonó en mi mente mientras volvíamos a guardar silencio. Libertad. Eso era precisamente lo que yo sentía: libertad de espíritu, libertad de pensamiento. Como si allá arriba, entre esas cimas sagradas y estrellas antiguas, todas las preocupaciones mundanas carecieran de importancia. Pensé en mi hogar, en lo lejos que estaba, pero en vez de añoranza sentí gratitud. Gratitud por poder estar viviendo ese momento único, por estar vivo y presente, allí donde el mundo se muestra en su forma más pura.',
      imagen: 'https://cdn.pixabay.com/photo/2020/07/10/18/06/tent-5391599_1280.jpg',
      categoria: 'montaña',
      fecha_aventura: '17-06-2023'
    },
    {
      id: 3,
      titulo: 'Bajo las luces de París',
      texto: 'Era mi última noche en París y decidí despedirme de la ciudad de la manera más especial que se me ocurrió: subiendo al Arco del Triunfo al atardecer. Tras pagar la entrada, comencé a ascender los interminables escalones de caracol que conducen a la azotea del monumento. Mis piernas protestaban un poco, cansadas después de días de recorrer calles y museos, pero la emoción podía más que el cansancio. Finalmente, alcancé la cima y salí al aire libre, justo cuando el cielo comenzaba a teñirse de tonos malva y dorado sobre la ciudad.\n\nLa vista era sencillamente mágica. Desde lo alto del Arco del Triunfo, París se extendía en todas direcciones como un tapiz vivo. Las avenidas partían en estrella debajo de mí, llenas de diminutas luces de coches que serpenteaban pacientes. A lo lejos, la Torre Eiffel brillaba, primero con la luz cálida del ocaso y luego encendiéndose poco a poco hasta empezar a titilar con sus famosas luces. El río Sena reflejaba el color del cielo y los primeros faroles de la ciudad, ondulando sus destellos. Sentí un nudo en la garganta: era demasiada belleza junta, y por un instante contuve la respiración, completamente maravillado.\n\nApoyé las manos en la barandilla de piedra, cerrando los ojos un segundo para absorber ese instante con todos mis sentidos. Escuché las risas de otros visitantes a mi alrededor, gente de distintos rincones del mundo que, como yo, compartían la alegría de contemplar París desde las alturas. Un señor mayor, de acento italiano, me dijo en inglés: "Magnífico, ¿verdad?". Asentí sonriendo y le respondí en italiano con las pocas palabras que sabía: "Assolutamente bellissimo". Ambos reímos suavemente; no necesitábamos más idioma que el asombro compartido en nuestros rostros. Éramos desconocidos, pero en ese balcón sobre la ciudad todos nos sentíamos conectados por la misma emoción.\n\nMientras las luces de París se encendían una a una, pensé en todo lo que había vivido esos días.',
      imagen: 'https://cdn.pixabay.com/photo/2022/05/22/11/00/arc-de-triomphe-7213188_1280.jpg',
      categoria: 'ciudad',
      fecha_aventura: '14-03-2024'
    },
    {
      id: 4,
      titulo: 'Nostalgia en La Habana Vieja',
      texto: 'El sonido de un motor antiguo y una melodía de son cubano fueron lo primero que me acompañó aquella mañana en La Habana. Subí a un coche clásico de los años 50, de esos Chevrolet color pastel que recorren el Malecón, y sentí que viajaba en el tiempo. El chófer, el señor Rogelio, llevaba orgulloso su gorra y me iba señalando con el dedo las fortalezas y edificios emblemáticos mientras bordeábamos el mar. La brisa cálida olía a sal y a historia. El Malecón estaba vivo: parejas de enamorados sentadas en el muro, pescadores lanzando sus hilos al agua, risas de niños chapoteando en las olas que salpicaban sobre las rocas. Todo bajo un cielo de un azul intenso que parecía bendecir la ciudad.\n\nAl adentrarme a pie en las calles de La Habana Vieja, me recibió un estallido de colores y música. Las fachadas descascaradas lucían tonalidades de amarillo, verde y azul cielo; algunas ventanas tenían las persianas medio caídas, pero aun así dejaban escapar las risas y conversaciones de familias enteras. En cada cuadra había al menos un balcón con ropa tendida ondeando al viento, como banderas cotidianas de la vida cubana. Un grupo de músicos callejeros tocaba "Guantanamera" en una esquina, y sin pensarlo mis pasos empezaron a llevar el ritmo. Me sumé a un pequeño corrillo de gente que aplaudía la canción, todos extraños entre sí pero unidos por la alegría contagiosa de la música.\n\nCaminé hasta la Plaza Vieja y me senté en un banco a descansar. A mi lado, una señora mayor, de piel oscura y ojos vivaces, tejía un sombrero de palma. Nos pusimos a conversar con naturalidad. Me contó que se llamaba Dolores, aunque todos la apodaban Lolita, y que había vivido toda su vida en La Habana. En su voz había orgullo y a la vez cierta tristeza mientras me narraba cómo habían cambiado las cosas, cómo recordaba la ciudad de su niñez con tranvías y cines elegantes, y cómo a pesar de las dificultades actuales, los habaneros mantenían la cabeza alta y el corazón alegre.',
      imagen: 'https://cdn.pixabay.com/photo/2021/01/29/05/22/havana-5959733_1280.jpg',
      categoria: 'ciudad',
      fecha_aventura: '31-09-2022'
    },
    {
      id: 5,
      titulo: 'Colores de Holi en la India',
      texto: 'Me encontraba en la ciudad de Vrindavan, en la India, famosa por celebrar uno de los Holi más intensos del país. El aire de la mañana ya olía a polvo dulce y a especias, y podía sentir la anticipación vibrando en cada callejón. Vestido con ropa vieja y sencilla – unos pantalones ligeros y una camisa blanca que no volvería a ser blanca –, caminaba con una mezcla de nervios y emoción hacia la plaza principal. Nunca antes había celebrado Holi, la fiesta de los colores, y mi corazón latía con fuerza ante lo desconocido. ¿Cómo sería ser parte de ese torbellino de pigmentos y alegría?\n\nApenas doblé la esquina, un chillido alegre me tomó por sorpresa: un grupo de niños con las manos teñidas de rosa y verde corrió hacia mí. Antes de poder reaccionar, ya estaba bañado en una nube de polvo fucsia que dejó mi cabello y rostro completamente teñidos. "¡Happy Holi!" me gritaron riendo, y su risa era tan contagiosa que exploté en carcajadas junto a ellos. Casi sin darme cuenta, estaba siendo arrastrado al centro de la celebración. A mi alrededor todo era un caos maravilloso: gente de todas las edades lanzando polvos de colores al aire, cubos de agua tintada volando desde las terrazas, música bhangra retumbando desde altavoces improvisados y palmas que marcaban el ritmo.\n\nAl principio distinguía los colores: aquí un rojo vibrante estampado en mi camiseta, allá un amarillo luminoso cubriendo el rostro de una anciana que bailaba sin parar. Pero pronto todos nos convertimos en un mismo arcoíris andante. Un desconocido me estampó la palma de su mano impregnada de azul en la mejilla y luego me abrazó como si fuera su amigo de toda la vida. "Holi hai!" repetían todos, recordándome que ese día no hay extranjeros ni locales, ni ricos ni pobres: solo personas celebrando la vida y la unión. Me uní a un corro de baile, tomados de las manos saltando bajo una lluvia de polvo multicolor. Tenía la boca llena de risa y, seguramente, de un poco de polvo dulce también, pero no importaba. En mis ojos seguramente brillaba la misma luz que veía en los demás.\n\nEn medio de la euforia, hubo un instante en que me detuve, respiré hondo y miré a mi alrededor casi en cámara lenta. Vi caras irreconocibles bañadas de color, vi sonrisas sinceras y miradas brillantes. Algunos tenían lágrimas de felicidad surcando surcos limpios en sus mejillas teñidas. Sentí un calor en el pecho que nada tenía que ver con el clima primaveral: era la dicha absoluta de sentirme parte de algo tan puro y universal como la alegría. Pensé en lo simbólico de Holi: la victoria del bien sobre el mal, el inicio de la primavera, el perdón y los nuevos comienzos.',
      imagen: 'https://cdn.pixabay.com/photo/2020/01/11/18/12/holi-4758337_1280.jpg',
      categoria: 'festival',
      fecha_aventura: '10-05-2023'
    },
    {
      id: 6,
      titulo: 'El pueblo bajo la roca: vida y lecciones en Setenil',
      texto: 'Desde el momento en que llegué a Setenil de las Bodegas, supe que aquel lugar sería especial. Este pequeño pueblo blanco de la sierra andaluza parece salido de un cuento: casas encaladas incrustadas literalmente bajo enormes rocas que forman techos naturales sobre las calles. Al pasar con mi mochila por la calle Cuevas del Sol por primera vez, tuve que contener el aliento; sobre mi cabeza, una inmensa piedra cobijaba terrazas y ventanas llenas de macetas floridas. Era mediodía y el aire olía a pan recién horneado y azahar. El rumor del río Trejo, corriendo tímido bajo los puentes, le daba una banda sonora serena al escenario.\n\nMe alojé en una casita rural regentada por una pareja de ancianos encantadores, Paco y María, quienes me recibieron como si fuera su propio nieto de visita. Mi habitación tenía vigas de madera y una ventana diminuta por la que se colaba la luz dorada de la tarde y el eco de las golondrinas. La primera noche, María insistió en que me quedara a cenar con ellos. Preparó un plato de migas y chorizo al fuego de leña, acompañado de un vino tinto elaborado en la comarca. Nos sentamos a la mesa de su cocina, bajo la roca que asomaba por el techo, y entre risas y anécdotas me contaron la historia del pueblo: de cómo sus antepasados aprovecharon las oquedades naturales para construir sus viviendas, de las épocas de cosecha de aceitunas y de las fiestas patronales donde todo Setenil baila sevillanas en la plaza.\n\nLos días transcurrían lentos y llenos de pequeñas delicias. Por las mañanas despertaba con el canto del gallo de un corral vecino y el repicar lejano de las campanas de la iglesia. Salía a caminar sin rumbo fijo, descubriendo rincones: una capilla diminuta escondida tras una peña, un mirador desde donde se divisaban los tejados rojos contrastando con la piedra beige de las montañas, y calles tan estrechas que podía tocar las paredes a ambos lados con solo extender los brazos. En mis paseos, los vecinos me saludaban con un "¡Buenos días, hijo!" y una sonrisa sincera. En la panadería, la panadera me regaló un bollo de aceite cuando supo que venía de tan lejos.',
      imagen: 'https://cdn.pixabay.com/photo/2018/10/21/13/10/spain-3762877_1280.jpg',
      categoria: 'rural',
      fecha_aventura: '03-12-2024'
    },
    {
      id: 7,
      titulo: 'Cosechas en el Valle Sagrado: lecciones de un pueblo andino',
      texto: 'El autobús destartalado me dejó en una curva polvorienta de la carretera, a las afueras de un pequeño pueblo andino en el Valle Sagrado de los Incas, Perú. La tarde caía dorada sobre los campos de maíz y quinoa que se extendían escalonados en terrazas antiguas por las laderas de las montañas. Con la mochila a cuestas, caminé los últimos metros hasta la casa de la familia que me acogería las próximas semanas. No tenía timbre; bastó con que un perro ladrara para que doña Clara apareciera en la puerta de adobe, secándose las manos en el delantal. Su sonrisa franca y arrugada fue el mejor recibimiento. "¡Mijito, bienvenido!", exclamó mientras me envolvía en un abrazo cálido, como si en vez de un extraño llegara un hijo pródigo.\n\nLa casa era humilde: paredes de barro, techo de tejas rojas y un patio central donde cacareaban unas gallinas y se secaban mazorcas al sol. Pronto conocí al resto de la familia: don Celestino, de hablar pausado y sombrero de ala ancha, y sus dos nietos, Inti y Rosa, de 8 y 6 años, tímidos al principio pero traviesos después de pocos minutos. Esa misma noche compartimos una cena alrededor del fogón: sopa de chuño (patata deshidratada) y estofado de cordero con hierbas aromáticas de su huerto. Mientras comíamos a la luz tenue de una lámpara de kerosén, me sentí transportado a otro tiempo. Afuera, el silencio de la montaña solo era interrumpido por el murmullo del río Urubamba en el valle y algún lejano canto en quechua que llegaba desde otra casa, resonando en la quietud nocturna.\n\nAl día siguiente, antes del amanecer, ya estaba en pie para ayudar en la chacra (campo de cultivo). El frío de la mañana serrana me caló los huesos, pero el entusiasmo podía más. Acompañé a don Celestino e Inti a arar un pequeño terreno donde sembraríamos papas. Usaban un arado tradicional de madera, guiado por dos bueyes pacientes. Ver a aquel hombre de 70 años manejar con destreza la yunta y el arado me dejó impresionado; sus manos curtidas parecían formar parte de la herramienta, con una fuerza tranquila que solo da la experiencia de toda una vida labrando la tierra.',
      imagen: 'https://cdn.pixabay.com/photo/2020/05/10/23/29/peasant-5155891_1280.jpg',
      categoria: 'rural',
      fecha_aventura: '24-10-2024'
    }
  ];


  constructor() {
    const posts = localStorage.getItem('posts')
    this.posts = posts ? JSON.parse(posts) : this.posts
  }

  getAll(): Post[] {
    return this.posts
  }

  getById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id)
  }

  insert(post: Post) {
    const newId = this.posts.length > 0 ? this.posts[this.posts.length - 1].id : 0
    post.id = newId + 1
    this.posts.push(post)
    localStorage.setItem('posts', JSON.stringify(this.posts))
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id)
    localStorage.setItem('posts', JSON.stringify(this.posts))
  }

  updatePost(postUpdating: Post) {
    const index = this.posts.findIndex(post => post.id === postUpdating.id)
    if (index !== -1) {
      this.posts[index] = postUpdating
      localStorage.setItem('posts', JSON.stringify(this.posts))
    }
  }



}
