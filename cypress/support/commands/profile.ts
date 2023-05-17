import { User } from '../../../src/entities/User';

export const updateProfile = (first: string, last: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type(first);
    cy.getByTestId('ProfileCard.Lastname').clear().type(last);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: 'asdasd' },
        body: {
            id: '3',
            first: 'TEST',
            lastname: 'TEST',
            age: 20,
            currency: 'RUB',
            country: 'Belarus',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://sun1-87.userapi.com/impg/tRxej3Q1HTz4NAgsFDR2nlFni-I4PYgQqhiV3w/VI2RqkRijKE.'
                + 'jpg?size=960x960&quality=95&sign=79f905338520287eb55a728d93e1c100&type=album',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(first: string, last: string): Chainable<User>;
            resetProfile(profileId: string): ReturnType<typeof cy.get>;
        }
    }
}
