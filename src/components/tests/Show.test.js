import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const show = {
    
    name: "test show",
    summary: "test summary",
    seasons: [
      { id: 0, name: "Season 1", episodes: [] },
      { id: 1, name: "Season 2", episodes: [] },
      { id: 2, name: "Season 3", episodes: [] },
      { id: 3, name: "Season 4", episodes: []}
    ],
  };

test('renders without errors', ()=>{
    render(<Show show={show} selectedSeason={'none'}/>)
    
});

test('renders Loading component when prop show is null', () => {});
    render(<Show show={null} />);
    const loading = screen.queryByTestId(/loading-container/i);
        expect(loading).toBeInTheDocument();


test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={show} selectedSeason={"none"} />);
    const options = screen.queryAllByTestId(/season-option/i);
    expect(options).toHaveLength(4);
});

test('handleSelect is called when an season is selected', () => {
    
    const handleSelect = jest.fn();
    render(<Show show={show} selectedSeason={"none"} handleSelect={handleSelect}/>);

    const selectSeasons = screen.queryByLabelText(/Select A Season/i);
    userEvent.selectOptions(selectSeasons,['1']);

    expect(handleSelect).toBeCalled();
  
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {

    const { rerender } = render(<Show show={show} selectedSeason={"none"} />);

    let component = screen.queryByTestId(/episodes-container/i);

    expect(component).not.toBeInTheDocument();

    rerender(<Show show={show} selectedSeason={2} />)

    component = screen.queryByTestId(/episodes-container/i);

    expect(component).toBeInTheDocument();
    });