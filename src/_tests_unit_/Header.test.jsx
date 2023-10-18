import { describe, expect, it, render } from "vitest";
import TestRenderer from "react-test-renderer"; 
import Header from "../components/Navbar/Header";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Import the Provider
import store from "../store.js"; // Import your Redux store

describe("Header.jsx", () => {
    

    it("Login and logout", () => {
        const tree = TestRenderer.create(
        /* Making the redux store available for all the components */
          <Provider store={store}>   
            <MemoryRouter>
              <Header />
            </MemoryRouter>
          </Provider>
        ).toJSON();

        //login
        const linkcontainer = tree.children[0].children[0].children[2].children[1];
        expect(linkcontainer.children[0].type).toBe("a");
        expect(linkcontainer.children[0].props.href).toBe("/login");

        expect(linkcontainer.children[1].type).toBe("a");
        expect(linkcontainer.children[1].props.href).toBe("/register");
        console.log(linkcontainer)

        
})
    it("renders Header navbar navigation components", () => {
        const tree = TestRenderer.create(
        /* Making the redux store available for all the components */
          <Provider store={store}>   
            <MemoryRouter>
              <Header />
            </MemoryRouter>
          </Provider>
        ).toJSON();
        //navbar navigation links
        const navbarlinks = tree.children[0].children[0].children[2].children[0].children[0];


        console.log(tree.children[0].children[0].children[2].children[0].children[0])
        expect(navbarlinks.children[0].type).toBe("a");
        expect(navbarlinks.children[0].props.href).toBe("/");

        expect(navbarlinks.children[1].type).toBe("a");
        expect(navbarlinks.children[1].props.href).toBe("/Services");

        expect(navbarlinks.children[2].type).toBe("a");
        expect(navbarlinks.children[2].props.href).toBe("/Bookings");
        
        expect(navbarlinks.children[3].type).toBe("a");
        expect(navbarlinks.children[3].props.href).toBe("/Terms");
        
        expect(navbarlinks.children[4].type).toBe("a");
        expect(navbarlinks.children[4].props.href).toBe("/ContactUs");
       

        console.log(navbarlinks)
        expect(tree).toMatchSnapshot(); // This can be used for snapshot testing

    })
});

describe("Header.jsx", () => {
  it("renders Header component", () => {
    const tree = TestRenderer.create(
    /* Making the redux store available for all the components */
      <Provider store={store}>   
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    ).toJSON();
   /* 
    //header
    console.log(tree)
    //container fluid div
    console.log(tree.children[0].children[0])
  */
    

    //nav
    
    expect(tree.children[0].type).toBe("nav");
    expect(tree.children[0].props.className).toBe("nav-style navbar navbar-expand-lg navbar-light");

    
    //routing to homepage
    
    expect(tree.children[0].children[0].children[0].type).toBe("a");
    expect(tree.children[0].children[0].children[0].props.href).toBe("/");


    //navbar toggle
    
    expect(tree.children[0].children[0].children[1].type).toBe("button");
    expect(tree.children[0].children[0].children[1].props["aria-controls"]).toBe("basic-navbar-nav");
    expect(tree.children[0].children[0].children[1].props.type).toBe("button");
    expect(tree.children[0].children[0].children[1].props["aria-label"]).toBe("Toggle navigation");
    
    
    //navbar collapse
    expect(tree.children[0].children[0].children[1].props.className).toBe("navbar-toggler collapsed");

    expect(tree.type).toBe("header");
    expect(tree.children[0].type).toBe("nav");
    


    
    
  });
});

