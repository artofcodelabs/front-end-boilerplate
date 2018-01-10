import Article from "models/Article";

test('vulgarityLevel', () => {
  const article = new Article({title: 'fuck this!'});
  article.isValid();
  expect(article.errors.base[0]).toEqual('Article contains strong language.');
});