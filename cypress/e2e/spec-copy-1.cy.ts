describe("My First Test", () => {
  it('Visit localhost:3000 then find "hello"', () => {
    expect(true).to.equal(true);
    cy.visit("http://localhost:3000");

    cy.contains("a");
  });
});
