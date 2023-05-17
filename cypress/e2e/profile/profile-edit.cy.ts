let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'TEST');
    });
    it('И редактирует его', () => {
        cy.updateProfile('newFirstname', 'newLastname');
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'newFirstname');
        cy.getByTestId('ProfileCard.Lastname').should('have.value', 'newLastname');
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });
});
