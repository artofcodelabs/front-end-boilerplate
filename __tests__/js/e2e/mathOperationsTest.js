import { Selector } from "testcafe";

fixture`Math Operations`.page`http://localhost:3000/`;

test("changing number and displaying both calcs", async (t) => {
  await t
    .typeText("input#number", "5", { replace: true })
    .expect(Selector("p").withText("5 squared is 25").exists)
    .ok()
    .expect(Selector("p").withText("5 cubed is 125").exists)
    .ok();
});
