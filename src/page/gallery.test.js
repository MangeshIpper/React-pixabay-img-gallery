import React from 'react';
import { render, cleanup, getAllByTestId } from "@testing-library/react";
import "Jest-dom/extend-expect";
import Gallery from "./Gallery";
import {axios} from "axios";

// jest.mock("axios");

afterEach(cleanup);

describe("ImagesFetch", () => {
    it("When response is false then images should not displayed", async () => {
        const { getByTestId }  = render(<Gallery />)

        expect(getByTestId("notAvailable")).toHaveTextContent("Images are not available!");
    });
    // it("When response is true then images should displayed");
});