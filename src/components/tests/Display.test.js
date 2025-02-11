import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

const show = {
    name: "test show",
    summary: "test summary",
    seasons: [
      { id: 0, name: "Season 1", episodes: [] },
      { id: 1, name: "Season 2", episodes: [] },
      { id: 2, name: "Season 3", episodes: [] },
      { id: 3, name: "Season 4", episodes: [] }
    ],
  };

test('renders without errors with no props', ()=>{
    render(<Display />);


});

test('renders Show component when the button is clicked ', ()=>{
   //mockFetchShow.mockResolvedValueOnce(show);
  //render(<Display show={show} />);
   // const button = screen.getByRole("button");
   // userEvent.click(button);

    //const component = await screen.findByTestId("show-container");

  // expect(component).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', ()=>{
  //  mockFetchShow.mockResolvedValueOnce(show);
   // render(<Display />);

   //const button = screen.getByRole("button");
   //userEvent.click(button);

//    await waitFor(() => {
  //  const options = screen.queryAllByTestId("season-option");
  //  expect(options).toHaveLength(4);
  //  });
   });

test('renders show season options matching your data when the button is clicked', ()=>{
   // mockFetchShow.mockResolvedValueOnce(show);
   
   // const displayFunc = jest.fn()

    //render(<Display displayFunc={displayFunc} />);
    //const button = screen.getByRole("button");
    //userEvent.click(button);

   // await waitFor(() => {
    //expect(displayFunc).toHaveBeenCalled();
    //});
    });