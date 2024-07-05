/// <reference types="cypress" />

// Cas de test relatif à la connexion
const time = 2000;

// describe('Connexion test', () => {
//     const username = "admin";
//     const password = 'K4dk272001@';
//     const badPwd = '12345';
//     const badUser = 'test';

//     beforeEach(() => {
//         cy.visit('/');
//     });

//     it('Valider le formulaire sans le remplir', () => {
//         cy.get('button[type=submit]').click();
//         cy.get('p.alert').should('have.text', 'Mots de passe ou Username incorrecte');
        
//     });

//     it('Connexion avec mot de passe incorrect ou vide', () => {
//         // Empty passwordm
//         cy.get('input[name=username]').clear().type(username);
//         cy.get('input[name=password]').clear();
//         cy.get('button[type=submit]').click();
//         cy.get('p.alert').should('have.text', 'Mots de passe ou Username incorrecte');


//         // Incorrect password
//         cy.get('input[name=username]').clear().type(username);
//         cy.get('input[name=password]').clear().type(badPwd);
//         cy.get('button[type=submit]').click();
//         cy.get('p.alert').should('have.text', 'Mots de passe ou Username incorrecte');

//     });

//     it('Connexion avec mauvais user', () => {
//         cy.get('input[name=username]').clear().type(badUser);
//         cy.get('input[name=password]').clear().type(password);
//         cy.get('button[type=submit]').click();
//         cy.get('p.alert').should('have.text', 'Mots de passe ou Username incorrecte');

//     });

//     it('Connexion avec de bon crédentiale', () => {
//         cy.get('input[name=username]').clear().type(username);
//         cy.get('input[name=password]').clear().type(password);
//         cy.get('button[type=submit]').click();
//         cy.url().should('include', '/');
//     });
// });

// describe('Cas de test sur la Deconnexion', () => {
//     const username = "admin";
//     const password = 'K4dk272001@';

//     beforeEach(() => {
//         cy.session('sessionid', () => {
//             cy.visit('http://127.0.0.1:8000/');
//             cy.get('input[name=username]').clear().type(username);
//             cy.get('input[name=password]').clear().type(password);
//             cy.get('button[type=submit]').click();
//             cy.url().should('include', '/index');
//         });
//     });

//     it('Menu déroulant', () => {
//         cy.visit('http://127.0.0.1:8000/');
//         cy.get('input[name=username]').clear().type(username);
//         cy.get('input[name=password]').clear().type(password);
//         cy.get('button[type=submit]').click();
//         cy.url().should('include', '/index');
//         cy.get('.pe-3 > .nav-link').click();
//         cy.contains('Deconnexion').click();
//         cy.url().should('include', '/deconnexion');
//     });
// });

describe('Cas de test création d\'utilisateur', () => {
    it('Redirection vers le formulaire de création', ()=>{
        cy.visit('/')
        cy.get('.col-md-12.text-center')
        cy.contains(' Enregistrez-vous👌!').click()
        cy.url().should('include','registre')
        cy.contains('ENREGISTREMENT')
    })
    // it('Remplir les champs du formulaire', () =>{
    //     // déclaration de variable
    //     const name ='Konan';
    //     const prenoms = 'Junias';
    //     const username ='junias';
    //     const email = 'junias.koan@test.test';
    //     const pwd ='j@r3d1995'
    //     cy.visit('/registre')
    //     // renseigner les inputs

    //     cy.get('input[name=username]').type(username)
    //     cy.get('input[name=last_name]').type(name)
    //     cy.get('input[name=first_name]').type(prenoms)
    //     cy.get('input[name=email]').type(email)
    //     cy.get('input[name=password1]').type(pwd)
    //     cy.get('input[name=password2]').type(pwd)
    //     cy.wait(3000)
    //     // Valider la création du compte

    //     cy.get('button[type=submit]').click()

    //     // Vérifier que l'utilisateur a bien effectu une redirection
    //     cy.location().should((loc)=>{
    //         expect(loc.href).to.eq('http://127.0.0.1:8000/')
    //     })


    // } )

    it('Test de connexion avec l\'utilisateur créée', () => {
        const name ='Konan';
        const prenoms = 'jared';
        const username ='jared';
        // const email = 'jared.koan@test.test';
        const pwd ='j@r3d1995'
        cy.visit('/')
        // Remplir les champs de connexion
        cy.get('input[name=username]').type(username);
        cy.get('input[name=password]').type(pwd).wait(3000);
        cy.get('button[type=submit]').click();

        // Vérifier si le formulaire de renseignement apparait
        cy.url().should('include', 'home')
        // cy.contains('.card-body.pt-3')
        // verifier si les informations de l'utilisateur affiche dans le formulaire et sur la page 
        cy.contains(name)
        cy.contains(prenoms)
    })
})
