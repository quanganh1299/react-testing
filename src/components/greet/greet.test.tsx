import { render, screen } from "@testing-library/react"
import { Greet } from "."

test('Greet render correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})

test('Greet render correctly', () => {
    render(<Greet name='Quang Anh' />);
    const textElement = screen.getByText('Hello Quang Anh');
    expect(textElement).toBeInTheDocument();
})