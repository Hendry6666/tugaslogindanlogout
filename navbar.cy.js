describe('Navbar',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should dsplay online bangking content', () => {
        cy.get('#onlineBankingMenu').should('have.text','Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
    });

    it('Should display Account activity content', () => {
        cy.get('#account_activity_link').click()

        //ini adalah tugas E2E Navbar-Links
        cy.fixture('user').then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

        })
        // http://zero.webappsecurity.com/bank/account-activity.html

        cy.url().should('include','/bank/account-activity.html')
    });
})