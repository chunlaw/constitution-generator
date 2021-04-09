This generator, although named Constitution Generator, is an effort to implement a simple templating workflow on the web.

Its user interface is a webpage.

# Workflow
Current proposed workflow as follows. Step 3 to 4 is what this project's supposed to cover.

1. Construct template (see [constructing-template](#constructing-template))
1. Export document from word processing software (we have now only tested Google Doc)
2. Parse the resultant HTML and identify fields
3. Replace fields with values
4. Export HTML for import into work processing software (e.g. straight copy-and-pasting generated webpage into Google Doc works)

## Constructing template
1. Start google doc document.
2. Insert fields where necessary. Fields is in format of `[fieldname]`.

    e.g. In the document we wrote:

    > [caretaker] gives [animal] food; [animal] gives [caretaker] warmth and care

    This generator would identify 2 fields: `[caretaker]` and `[animal]`. It would then display 2 textboxes on the side. A preview would update the sentence like this, depending on input:

    > John gives cat food; cat gives John warmth and care.

# Progress
TODOs:

- [x] Display HTML template exported from word processing software (currently Google Doc only)
- [x] Identify fields
- [x] Replace values for a given field
- [x] Expose UI for user to change values
- [ ] Find a way to template fields which are lists (<- next TODO maybe)

    e.g. [[goals]] would expand to

    1. Work hard
    2. Buy a cat
    3. Word hard
    4. Buy expensive cat food

# Launch

After clone the repository, run the following
`yarn && yarn start`

# Contribution
Original work based on <https://gitlab.com/hulloanson/constitution-generator>
