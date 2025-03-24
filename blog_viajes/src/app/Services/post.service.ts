import { Injectable } from '@angular/core';
import { Post } from '../Interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  private posts: Post[] = [
    {
      id: 1,
      titulo: 'Una noche mágica bajo las estrellas',
      texto: 'Nos fuimos a la montaña sin planear nada y acabamos viendo una lluvia de estrellas increíble. Dormimos en saco, nos reímos mucho y olvidamos el móvil por unas horas.',
      imagen: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      categoria: 'Montaña',
      fecha_aventura: '2024-08-12'
    },
    {
      id: 2,
      titulo: 'Festival de música y barro',
      texto: 'Llegamos al festival y empezó a llover sin parar, pero eso no nos detuvo. Bailamos descalzos, hicimos nuevos amigos y terminamos cantando bajo la lluvia.',
      imagen: 'https://images.unsplash.com/photo-1508975553360-5f419b0e9fb0',
      categoria: 'Festival',
      fecha_aventura: '2023-06-23'
    },
    {
      id: 3,
      titulo: 'Un día perdido en la ciudad',
      texto: 'Nos propusimos perdernos por Madrid sin usar mapas. Descubrimos callejones, cafeterías escondidas y hasta una librería antigua. Fue una aventura urbana inolvidable.',
      imagen: 'https://images.unsplash.com/photo-1544473244-fb43f46a1b6f',
      categoria: 'Ciudad',
      fecha_aventura: '2023-11-05'
    },
    {
      id: 4,
      titulo: 'La ruta rural del queso',
      texto: 'Fuimos a un pequeño pueblo donde hacen el mejor queso de la región. Caminamos entre vacas, probamos productos locales y terminamos viendo el atardecer en el campo.',
      imagen: 'https://images.unsplash.com/photo-1567521466315-4e4c4a4a84d2',
      categoria: 'Rural',
      fecha_aventura: '2024-05-01'
    },
    {
      id: 5,
      titulo: 'Amanecer en la playa',
      texto: 'Acampamos cerca del mar y nos despertamos con el sonido de las olas. El cielo se tiñó de colores increíbles al amanecer, y desayunamos en la arena.',
      imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      categoria: 'Playa',
      fecha_aventura: '2024-07-18'
    }
  ];

  constructor() { }
}
