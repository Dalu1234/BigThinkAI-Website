import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from '../Navigation'

describe('Navigation', () => {
  beforeEach(() => {
    // ensure requestAnimationFrame runs synchronously for tests
    // @ts-ignore
    global.requestAnimationFrame = cb => cb()
  })

  test('renders nav with role and aria-label', () => {
    render(<Navigation />)
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeInTheDocument()
  })

  test('toggle opens and closes menu', () => {
    render(<Navigation />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  test('Escape closes the menu when open', () => {
    render(<Navigation />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  test('scroll updates scale attributes', () => {
    render(<Navigation />)
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    // minor scale
    // @ts-ignore
    window.scrollY = 140
    window.dispatchEvent(new Event('scroll'))
    expect(nav.getAttribute('data-scale')).toBe('0.96')

    // deep scale
    // @ts-ignore
    window.scrollY = 600
    window.dispatchEvent(new Event('scroll'))
    expect(nav.getAttribute('data-scale')).toBe('0.94')
  })
})
