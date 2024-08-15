import {wordCount} from "../../src/lib/EditorUtils";
import * as fc from 'fast-check'

class inputTextCommand{
    private textToAdd: string;
    constructor(textToAdd: string){
        this.textToAdd = textToAdd
    }

    check = () => true

    run(m: { text: string; }) {
        cy.get('.cm-content').as('cm')
        cy.get('@cm').click('bottomRight')

        cy.get('@cm').type(this.textToAdd, {parseSpecialCharSequences: false, force: true}) //affect the real world
            .then( _ => {
                m.text = m.text.concat(this.textToAdd) //affect the model
            })
        cy.get('#final').then( e => {
            cy.log(`real wordcount ${Number(e.text())}`).then(_ => {
                cy.log(`model ${m.text} has wordcount ${wordCount(m.text)}`)
            })
        })
        cy.get('#final').should((e) => {
            const realFinal = Number(e.text());
            expect(wordCount(m.text)).to.eq(realFinal)
        });

    }
}

describe('Challenge', () => {
    it('should allow text entry into the CodeMirror editor', () => {
        // Visit the page containing the component
        cy.visit('/write');

        // Find the CodeMirror editor's content area
        cy.get('.cm-content').click('bottomRight').type('Hello, CodeMirror!');

        // Assert that the content has been updated
        cy.get('.cm-content').should('contain.text', 'Hello, CodeMirror!');
    });
    it('should have the correct current wordcount after typing', async () => {
        cy.visit('/write');

        let runs = 0
        const commands = [ fc.stringOf(fc.constantFrom('a', ' '), { minLength: 1 }).map(s => new inputTextCommand(s)) ]
        fc.assert(

            fc.property(fc.commands(commands, {size: '+1', maxCommands: 10 }),
                cmds => {
                fc.modelRun(() => ({model: { text: "" }, real: null }), cmds)
            }).afterEach(() => {
                runs++
                cy.log(`Finished run ${runs}`)
                cy.clearLocalStorage()
                cy.reload()
            }),
            {
                verbose: 1,
                numRuns: 2
            },
        );
    });
});
