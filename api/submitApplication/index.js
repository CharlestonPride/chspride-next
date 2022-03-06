module.exports = async function (context, req) {
  if (!!req.body.id) {
    context.res = { status: 400 };
    return;
  }
  req.body.envId = context.bindings.req.params.partitionKey;

  context.bindings.outputDocument = req.body;
};
