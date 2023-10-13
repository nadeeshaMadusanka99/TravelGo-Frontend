import {describe, expect, it} from "vitest";
import Testrenderer from "react-test-renderer"; 
import {Header} from "../components/Navbar/Header";

describe("Header.jsx", () => {
    it("renders correctly", () => {
        const num=4
        expect(num).toBe(5)
    })
    it("header child", () => {
        const navBar=Testrenderer.create(<Header/>).toJSON();
    })

})