
export interface MenuItem {
  id: number;
  label: string;
  link: string;
}

export interface Habilidade {
  titulo: string;
  nivel: number;
}

export interface HabilidadesPorCategoria {
  [categoria: string]: Habilidade[];
}
