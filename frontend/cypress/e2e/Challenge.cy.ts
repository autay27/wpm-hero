describe('Challenge', () => {
    it('should allow text entry into the CodeMirror editor', () => {
        // Visit the page containing the component
        cy.visit('/write');

        // Find the CodeMirror editor's content area
        cy.get('.cm-content').click().type('Hello, CodeMirror!');

        // Assert that the content has been updated
        cy.get('.cm-content').should('contain.text', 'Hello, CodeMirror!');
    });
    it('should have the correct wordcount after typing', async () => {
        /*fc.assert(

            fc.property(fc.sjfhgs,
                (inputText) => {

            }),
            {
                verbose: 1,
                numRuns: 2
            },
        );*/
    });
});
