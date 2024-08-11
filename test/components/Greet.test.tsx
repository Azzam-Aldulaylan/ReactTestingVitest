import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'

describe('Greet', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet/>);
        screen.debug();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    })
})