import { render, screen } from "@testing-library/react"
import { Greet } from "."

describe.skip('Greet', () => {
    test('render correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    })

    // test('render correctly with name', () => {
    //     render(<Greet name='Quang Anh' />);
    //     const textElement = screen.getByText('Hello Quang Anh');
    //     expect(textElement).toBeInTheDocument();
    // })
})
