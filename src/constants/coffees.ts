import Expresso from '@assets/Expresso.png'
import Americano from '@assets/Americano.png'
import ExpressoCremoso from '@assets/Expresso Cremoso.png'
import ExpressoGelado from '@assets/Café Gelado.png'
import CafeComLeite from '@assets/Café com Leite.png'
import Latte from '@assets/Latte.png'
import Capuccino from '@assets/Capuccino.png'
import Macchiato from '@assets/Macchiato.png'
import Mochaccino from '@assets/Mochaccino.png'
import ChocolateQuente from '@assets/Chocolate Quente.png'
import Cubano from '@assets/Cubano.png'
import Havaiano from '@assets/Havaiano.png'
import Arabe from '@assets/Árabe.png'
import Irlandes from '@assets/Irlandês.png'

export interface ICoffee {
  id: number
  name: string
  type: Array<string>
  description: string
  price: number
  image: string
}

export const coffees: ICoffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    type: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    image: Expresso,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    type: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    image: Americano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    type: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    image: ExpressoCremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    type: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    image: ExpressoGelado,
  },
  {
    id: 5,
    name: 'Café com Leite',
    type: ['Tradicional', 'Com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    image: CafeComLeite,
  },
  {
    id: 6,
    name: 'Latte',
    type: ['Tradicional', 'Com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    image: Latte,
  },
  {
    id: 7,
    name: 'Latte',
    type: ['Tradicional', 'Com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    image: Capuccino,
  },
  {
    id: 8,
    name: 'Macchiato',
    type: ['Tradicional', 'Com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    image: Macchiato,
  },
  {
    id: 9,
    name: 'Mochaccino',
    type: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    image: Mochaccino,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    type: ['Especial', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    image: ChocolateQuente,
  },
  {
    id: 11,
    name: 'Cubano',
    type: ['Especial', 'Alcoólico', 'Gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    image: Cubano,
  },
  {
    id: 12,
    name: 'Havaiano',
    type: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    image: Havaiano,
  },
  {
    id: 13,
    name: 'Árabe',
    type: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    image: Arabe,
  },
  {
    id: 14,
    name: 'Irlandês',
    type: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    image: Irlandes,
  },
]
