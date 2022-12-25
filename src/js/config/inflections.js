const irregularPluralForms = {};

export default (word) => irregularPluralForms[word] || `${word}s`;
