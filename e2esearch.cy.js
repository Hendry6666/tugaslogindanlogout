describe('Searchbox test', function(){
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
        cy.get('a').contains('Zero - Free Access to Online Banking').click()
        cy.url().should('include', '/online-banking.html')
    });

    it('Should type into searcbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
        cy.get('a').contains('Zero - Online Statements').click()
        // cy.url().should('include','/login.html')

        cy.get('h3').should('have.text','Log in to ZeroBank')

        cy.fixture('user').then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

            cy.get('#searchTerm').type('online {enter}')
            cy.get('a').contains('Zero - Online Statements').click()

        })
        

        // cy.get('#user_login').type('slow.tying@gmail.com',{delay:200}).should('have.value','slow,tying@gmail.com')

    });


    // it('Should show search result page', () => {
    //     cy.get('h2').should('contain.text','Search Results:')
    // });
})