import { render, screen, within } from '@testing-library/react'
import { projetos } from '../../utils/content/projetos'
import { describe, it, expect } from 'vitest'
import Projetos from '.'

describe('<Projetos />', () => {
    it('renderiza os títulos principais corretamente', () => {
        render(<Projetos />)

        expect(screen.getByText('Meus')).toBeInTheDocument()
        expect(screen.getByText('Projetos')).toBeInTheDocument()
    })

    it('renderiza todos os cards de projeto corretamente', () => {
        render(<Projetos />)

        projetos.forEach((projeto) => {
            const titulo = screen.getByText(projeto.titulo)
            const card = titulo.closest('div')
            expect(card).toBeTruthy()
            const utils = within(card as HTMLElement)
            expect(utils.getByText(projeto.tecnologias.join(', '))).toBeInTheDocument()
            expect(
                utils.getByText((content) =>
                    content.replace(/\s+/g, ' ').trim().includes(
                        projeto.descricao.replace(/\s+/g, ' ').trim()
                    )
                )
            ).toBeInTheDocument()
            const links = utils.getAllByRole('link', { name: projeto.botao.label })
            expect(links[0]).toHaveAttribute('href', projeto.botao.url)
        })
    })
})
