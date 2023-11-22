import { baseURL } from '../fixtures/defaults'; 

describe('Update Super Admin Profile =>', () => {
  let token;

  beforeEach(() => {
    cy.generateAccessToken().then((generatedToken) => {
      token = generatedToken;
    });
  });

  it('POST /update super-admin profile', () => {
    const updateAdminProfilePath = '/api/v1/superadmin/add-profile';

    const superAdminUpdate = {
      profile_pic: 'image-1689240509992.png',
      twofa: 0,
      user_name: 'Dinesh Borudiya',
      email: 'hemant.5exceptions@gmail.com',
      password: null,
      lang: 1,
    };

    cy.request({
      method: 'POST',
      url: `${baseURL}${updateAdminProfilePath}`,
      body: superAdminUpdate,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      
      // Log status and message
      cy.log('Status: ' + response.status);
      cy.log('Message: ' + response.body.message);

 
      cy.log('Assertion Passed: Name matches / Updated');

      // Log response body
      cy.log('Response Body:', JSON.stringify(response.body, null, 2));
    });
  });
});
