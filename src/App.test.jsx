// src/App.test.jsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
//import "@testing-library/jest-dom";
import App from "./App";
import Heading from "./Header";

//Test 1 — App renders without crashing
describe("App Component", () => {
    it("renders without crashing", () => {
        render(<App />);
        expect(screen.getByRole("banner")).toBeInTheDocument();
    });
});

//Test 2 — Heading receives and displays title prop
describe("Heading Component", () => {
    it("renders the title prop correctly", () => {
        render(<Heading title="A BLOG ON FRONT-END WEB-DEVELOPMENT" />);
        expect(
            screen.getByText("A BLOG ON FRONT-END WEB-DEVELOPMENT")
        ).toBeInTheDocument();
    });
});
