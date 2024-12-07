describe('Test saucedemo', {testIsolation: false}, () => {

  beforeEach('Visit the website', () => {

    cy.visit('https://www.saucedemo.com')
 }
) 
  it('Purchase with user 1', () => {

    //Login with the user 'standard_user'
    cy.LoginUser("LoginStandard")

    //Add the products to the cart
    cy.AddProducts()

    //Perform the checkout
    cy.PurchaseUser1("PurchaseUser")

    //Validate that the checkout has been completed
    cy.CheckoutValidation()

    //Perform the logout
    cy.Logout()
    cy.wait(1000)
  }
  )
  it('Purchase with user 2', () => {

        //Login with the user 'standard_user'
        cy.LoginUser("LoginProblem_user")

        //Add the products to the cart
        cy.AddProducts()
    
        //Perform the checkout
        cy.PurchaseUser1("PurchaseUser")
    
        //Validate that the checkout has been completed
        cy.CheckoutValidation()
    
        //Perform the logout
        cy.Logout()
  }
  )
})