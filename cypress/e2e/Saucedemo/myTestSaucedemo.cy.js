describe('Test saucedemo', { testIsolation: false }, () => {

  beforeEach('Visit the website', () => {
    cy.visit('https://www.saucedemo.com');
  });

  const purchaseTest = (loginType, purchaseType) => {
    // Login with the user
    cy.LoginUser(loginType);

    // Add the products to the cart
    cy.AddProducts();

    // Perform the checkout
    cy.PurchaseUser1(purchaseType);

    // Validate that the checkout has been completed
    cy.CheckoutValidation();

    // Perform the logout
    cy.Logout();
    cy.wait(1000); // Ensure logout completes
  };

  it('Purchase with user 1', () => {
    purchaseTest("LoginStandard", "PurchaseUser");
  });

  it('Purchase with user 2', () => {
    purchaseTest("LoginProblem_user", "PurchaseUser");
  });
});