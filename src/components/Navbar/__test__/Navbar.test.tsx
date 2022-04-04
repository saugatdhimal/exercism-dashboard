import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, cleanup, screen} from '@testing-library/react';
import Navbar from '..';

const MockNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

afterEach(cleanup);

describe('<Navbar />', () => {
  it('should render exercism logo', () => {
    render(<MockNavbar />);
    const exercismLogo = screen.getByAltText(/excercism-logo/i);
    expect(exercismLogo).toBeInTheDocument();
    expect(exercismLogo).toHaveAttribute('src', 'exercism-logo.svg');
  });

  it('should render NavLinkItem with title Dashboard', () => {
    render(<MockNavbar />);
    const navLinkItem = screen.getByText(/dashboard/i);
    const navLinkItemIcon = screen.getByAltText(/dashboard/i);
    expect(navLinkItem).toBeInTheDocument();
    expect(navLinkItemIcon).toBeInTheDocument();
    expect(navLinkItemIcon).toHaveAttribute('src', 'dashboard-logo.png');
  });

  it('should render NavLinkItem with title Tracks', () => {
    render(<MockNavbar />);
    const navLinkItem = screen.getByText(/tracks/i);
    const navLinkItemIcon = screen.getByAltText(/tracks/i);
    expect(navLinkItem).toBeInTheDocument();
    expect(navLinkItemIcon).toBeInTheDocument();
    expect(navLinkItemIcon).toHaveAttribute('src', 'tracks-icon.svg');
  });

  it('should render NavLinkItem with title Mentoring', () => {
    render(<MockNavbar />);
    const navLinkItem = screen.getByText(/mentoring/i);
    const navLinkItemIcon = screen.getByAltText(/mentoring/i);
    expect(navLinkItem).toBeInTheDocument();
    expect(navLinkItemIcon).toBeInTheDocument();
    expect(navLinkItemIcon).toHaveAttribute('src', 'mentoring-icon.svg');
  });

  it('should render NavLinkItem with title Contribute', () => {
    render(<MockNavbar />);
    const navLinkItem = screen.getByText(/contribute/i);
    const navLinkItemIcon = screen.getByAltText(/contribute/i);
    expect(navLinkItem).toBeInTheDocument();
    expect(navLinkItemIcon).toBeInTheDocument();
    expect(navLinkItemIcon).toHaveAttribute('src', 'contribute-icon.svg');
  });

  it('should render five NavIconItems with correct img src', () => {
    render(<MockNavbar />);
    const navIconItems = screen.getAllByAltText(/navbar-icon/i);
    expect(navIconItems).toHaveLength(5);
    expect(navIconItems[0]).toHaveAttribute('src', 'smile.png');
    expect(navIconItems[1]).toHaveAttribute('src', 'hexagon-icon.svg');
    expect(navIconItems[2]).toHaveAttribute('src', 'bell.png');
    expect(navIconItems[3]).toHaveAttribute('src', 'badge.svg');
    expect(navIconItems[4]).toHaveAttribute('src', 'erik.svg');
  });

  it('should render dotsVerticalIcon', () => {
    render(<MockNavbar />);
    const navIconItems = screen.getAllByAltText(/oval/i);
    expect(navIconItems).toHaveLength(3);
  });
});
