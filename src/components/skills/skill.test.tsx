import { screen, render, logRoles } from "@testing-library/react";
import { Skills } from "./skill";

describe('Skills', () => {
    const skills = ['JavaScript', 'React', 'TypeScript'];

    test('render correctly', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    test('render a list of skills', () => {
        render(<Skills skills={skills} />);
        const listElements = screen.getAllByRole('listitem');
        expect(listElements).toHaveLength(skills.length);
    })

    test('render login button', () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole('button', { name: 'Login' });
        expect(loginButton).toBeInTheDocument();
    })

    test('start learning button not render', () => {
        render(<Skills skills={skills} />);
        const startLearningButton = screen.queryByRole('button', { name: 'Start learning' });
        expect(startLearningButton).not.toBeInTheDocument();
    })

    test('start learning button is eventually displayed', async () => {
        const view = render(<Skills skills={skills} />);
        logRoles(view.container);
        const startLearningButton = await screen.findByRole('button', { name: 'Start learning' }, { timeout: 2000 });
        expect(startLearningButton).toBeInTheDocument();
    })
})