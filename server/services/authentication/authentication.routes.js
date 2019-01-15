/**
 * @file Authentication service
 */

module.exports = ({ app, actions, hooks, models, bookshelf }) => {
  const { before } = hooks;

  const { signIn, signUp } = actions({ app, models, bookshelf });

  router
    .get("/sign-in", ctx => nextApp.render(ctx.req, ctx.res, "/sign-in"))
    .post("/sign-in", before.signIn, (ctx, next) => signIn(ctx, next))
    .get("/sign-up", ctx => nextApp.render(ctx.req, ctx.res, "/sign-up"))
    .post("/sign-up", before.signUp, (ctx, next) => signUp(ctx, next));
};
