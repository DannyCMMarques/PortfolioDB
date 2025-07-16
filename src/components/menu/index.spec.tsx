import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Menu from '.'
import menuContentItens from '../../utils/content/menuContentItens'

describe('<Menu />', () => {
    it('renderiza o logo corretamente', () => {
        render(<Menu />)
        const logo = screen.getByAltText('Logo')
        expect(logo).toBeInTheDocument()
        expect(logo.getAttribute('src')).toMatch(/logo_menu\.png$/)
    })

    it('renderiza todos os itens do menu', () => {
        render(<Menu />)
        menuContentItens.forEach((item) => {
            const link = screen.getByText(item.label)
            expect(link).toBeInTheDocument()
            expect(link.closest('a')).toHaveAttribute('href', item.link)
        })
    })

    it('renderiza os ícones do GitHub e LinkedIn com links corretos', () => {
        render(<Menu />)

        const githubIcon = screen.getByAltText('GitHub')
        expect(githubIcon).toBeInTheDocument()
        expect(githubIcon.closest('a')).toHaveAttribute(
            'href',
            'https://github.com/DannyCMMarques'
        )

        const linkedinIcon = screen.getByAltText('LinkedIn')
        expect(linkedinIcon).toBeInTheDocument()
        expect(linkedinIcon.closest('a')).toHaveAttribute(
            'href',
            'https://br.linkedin.com/in/danny-marques'
        )
    })
})
