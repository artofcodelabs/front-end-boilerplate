import { Selector } from "testcafe";

fixture`Page 1`.page`http://localhost:3000/page1/articles`;

test("loading articles", async (t) => {
  await t
    .click(Selector("a").withText("Load Articles"))
    .expect(Selector("article").count)
    .eql(3);
});
