import { render, screen } from '@testing-library/react'
import { expect } from 'vitest';
import TermsAndConditions from '../../src/components/TermsAndConditions';




describe('TaC', () => {

    it('should render Hello with the name when name is provided', () => {
        render(<TermsAndConditions/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Terms & Conditions/i);


        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/submit/i);
        expect(button).toBeDisabled();
    })

})