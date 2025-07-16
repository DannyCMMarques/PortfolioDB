import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import bolinhaCheia from './../../assets/bolinha-cheia.png'
import bolinhaVazia from './../../assets/bolinha-vazia.png'
import Habilidade from '.'

describe('<Habilidade />', () => {
    it('exibe o título corretamente', () => {
        render(<Habilidade titulo="React" nivel={3} />)
        expect(screen.getByText('React')).toBeInTheDocument()
    })

    it('renderiza 5 bolinhas no total', () => {
        render(<Habilidade titulo="TypeScript" nivel={2} />)
        const bolinhas = screen.getAllByRole('img')
        expect(bolinhas).toHaveLength(5)
    })

    it('renderiza bolinha cheia para níveis preenchidos e vazia para os demais', () => {
        const nivel = 4
        render(<Habilidade titulo="JavaScript" nivel={nivel} />)

        const bolinhas = screen.getAllByRole('img')

        bolinhas.forEach((img, index) => {
            const expectedSrc = index < nivel ? bolinhaCheia : bolinhaVazia
            expect(img).toHaveAttribute('src', expectedSrc)
        })
    })
})
