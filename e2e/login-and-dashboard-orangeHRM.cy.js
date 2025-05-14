    describe('Login Page OrangeHRM', () => {
        beforeEach(() => {
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            cy.wait(1000) 
        })

        it('should show username input field', () => {
            cy.get('input[name="username"]', { timeout: 5000 }).should('be.visible')
        })

        it('should show password input field', () => {
            cy.get('input[name="password"]', { timeout: 5000 }).should('be.visible')
        })

        it('should show login button', () => {
            cy.get('button[type="submit"]').should('be.visible')
        })

        it('should display the OrangeHRM logo', () => {
            cy.get('.orangehrm-login-branding > img').should('be.visible')
        })

        it('should show Forgot Password link', () => {
        cy.get('.orangehrm-login-forgot-header')
            .should('be.visible')
            .and('contain.text', 'Forgot your password?')
        })

        it('should show footer copyright', () => {
        cy.get('.orangehrm-copyright')
            .should('be.visible')
            .and('contain.text', 'OrangeHRM, Inc.')
        })


        it('should login successfully with valid credentials', () => {
            cy.get('input[name="username"]').type('Admin')
            cy.get('input[name="password"]').type('admin123')
            cy.get('button[type="submit"]').click()

            cy.url({ timeout: 10000 }).should('include', '/dashboard')
        })
    })

    describe('Dashboard Page OrangeHRM', () => {

        beforeEach(() => {
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            cy.get('input[name="username"]').type('Admin')
            cy.get('input[name="password"]').type('admin123')
            cy.get('button[type="submit"]').click()
            cy.url({ timeout: 10000 }).should('include', '/dashboard')
        })

        it('Should display the header (navbar)', () => {
            cy.get('header.oxd-topbar').should('be.visible');
        });

        it('Should display the admin dropdown (profile)', () => {
            cy.xpath('//p[@class="oxd-userdropdown-name"]').should('be.visible');
        });

        it('Should display the logout button', () => {
            cy.xpath('//p[@class="oxd-userdropdown-name"]').click()
            cy.xpath('//a[text()="Logout"]').should('be.visible')
        });

        it('Should display the dashboard title', () => {
            cy.xpath('//h6[text()="Dashboard"]').should('be.visible');
        });

        it('Should display the sidebar menu', () => {
            cy.get('nav[role="navigation"]').should('be.visible');
            // or
            cy.get('aside').should('be.visible');
        });

        it('Should display the Quick Launch panel', () => {
            cy.xpath('//p[text()="Quick Launch"]').should('be.visible');
        });

        it('Should display the Time at Work section', () => {
            cy.xpath('//p[text()="Time at Work"]').should('be.visible');
        });

    });

