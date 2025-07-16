import { render, screen } from '@testing-library/react'
import { habilidades } from '../../utils/content/habilidades'
import { describe, it, expect } from 'vitest'
import Sobre from '.'

describe('<Sobre />', () => {
    it('renderiza os títulos principais corretamente', () => {
        render(<Sobre />)

        expect(screen.getByText('Olá, meu nome é')).toBeInTheDocument()
        expect(screen.getByText('Danielly Marques')).toBeInTheDocument()
        expect(screen.getByText('Sobre mim')).toBeInTheDocument()
        expect(screen.getByText('Habilidades')).toBeInTheDocument()
    })
    it('renderiza a imagem de perfil com alt correto', () => {
        render(<Sobre />)
        const imagem = screen.getByAltText('Foto')
        expect(imagem).toBeInTheDocument()
        expect(imagem.getAttribute('src')).toMatch(/perfil\.jfif$/)
    })

    it('renderiza todas as categorias e habilidades com suas bolinhas', () => {
        render(<Sobre />)
        Object.entries(habilidades).forEach(([categoria, lista]) => {
            expect(screen.getByText(categoria)).toBeInTheDocument()
            lista.forEach((habilidade) => {
                expect(screen.getByText(habilidade.titulo)).toBeInTheDocument()
            })
        })

        const totalHabilidades = Object.values(habilidades)
            .flat()
            .length
            
        const totalBolinhasEsperadas = totalHabilidades * 5
        const imagens = screen.getAllByRole('img')

        expect(imagens.length).toBeGreaterThanOrEqual(totalBolinhasEsperadas + 1)
    })
})
