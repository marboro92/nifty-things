describe('Got To Profile', () => {
  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })
    describe('When you visit home', () => {
      it('Should visit home page', () => {
        cy.visit('/')
      })
      describe('Profile Button', () => {
        it('Should navigate to profile', () => {
          cy.contains('a', 'Profile').click()
          cy.url().should('include', '/profile')
        })
      })
    })
  })
})
