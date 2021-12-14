import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


const testEpisode = {
    id:1,
    name: "",
    image: "image",
    season: 1,
    number: 1,
    summary: "This episode is about",
    runtime: 1
}

const testImgEpisode = {
    
    id:2,
    name: "",
    image: null,
    season: 1,
    number: 2,
    summary: "This episode is about",
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode}/>);
    const summary = screen.queryByText(/This episode is about/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent("This episode is about");

      

});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testImgEpisode}/>);
    const img = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')
    expect(img).toBeInTheDocument();
    
});

