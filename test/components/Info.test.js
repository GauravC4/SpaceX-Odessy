import { render } from '@testing-library/react';
import Info from '../../components/Util/Info/Info';

test('should render correct content', () => {
    const { getByText } = render(<Info label="LABEL" value="VALUE"/>);
    getByText(/LABEL/);
    getByText(/VALUE/);
});