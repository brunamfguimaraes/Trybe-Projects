

function findAuthorBornIn1947(value) {
  return value.author.birthYear === 1947;
}

const testAuthorBornIn1947 = books.find(findAuthorBornIn1947)

const authorBornIn1947 = testAuthorBornIn1947.author.name;

assert.strictEqual(authorBornIn1947, 'Stephen King');