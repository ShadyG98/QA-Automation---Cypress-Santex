//Login with all users
Cypress.Commands.add('LoginUser', (type) => {
    cy.fixture('data').then((data)=> {
        const formData = data[type]
    cy.get('#user-name').clear().type(formData.Username)
    cy.get('#password').clear().type(formData.Password)
    cy.get('#login-button').click()
     })
  })

//Add the products to the cart -> //que pasaria si el usuario ya dejo un elemento en carrito
Cypress.Commands.add('AddProducts', () => {
    cy.wait(1000)
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.get('#add-to-cart-sauce-labs-onesie').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    //cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)').click()
    cy.scrollTo('top');
    cy.get('[data-test="shopping-cart-link"]').click()
     })

//Command for the checkout of user 1
Cypress.Commands.add('PurchaseUser1', (type) => {
    cy.fixture('data').then((data)=> {
        const formData = data[type]
    cy.get('#checkout').click()
    cy.get('#first-name').clear().type(formData.FirstName)
    cy.get('#last-name').clear().type(formData.LastName)
    cy.get('#postal-code').clear().type(formData.postalCode)
    cy.get('#continue').click()
     })
  })

 //Validate that the checkout has been completed
    Cypress.Commands.add('CheckoutValidation', () => {
    cy.contains('Payment Information:').should('exist');
    cy.get('[data-test="payment-info-value"]').should('exist');
    cy.contains('Shipping Information:').should('exist');
    cy.get('[data-test="shipping-info-value"]').should('exist');
    cy.contains('Price Total').should('exist');
    cy.get('[data-test="subtotal-label"]').should('exist');
    cy.get('[data-test="tax-label"]').should('exist');
    cy.get('[data-test="total-label"]').should('exist');
    cy.get('#finish').click()
     })

//Perform the logout
    Cypress.Commands.add('Logout', () => {
    cy.fixture('data').then((data)=> {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
     })
  })