// import { fireEvent, screen } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { SidebarRedesigned } from './SidebarRedesigned';

describe('SidebarRedesigned', () => {
    test('Test render', () => {
        componentRender(<SidebarRedesigned />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    // test('Sidebar toggle', () => {
    //     componentRender(<SidebarRedesigned />);
    //     const toggleBtn = screen.getByTestId('sidebar-toggle');
    //     expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    //     fireEvent.click(toggleBtn);
    //     expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    // });
});
