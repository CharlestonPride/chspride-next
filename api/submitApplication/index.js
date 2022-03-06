module.exports = async function (context, req) {
  // Prevent overwriting an existing application
  if (!!req.body.id) {
    context.res = { status: 400 };
    return;
  }
  req.body.envId = "chspride";
  req.body.status = "new";

  context.bindings.outputDocument = req.body;

  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SendGridApiKey);
  const msg = {
    to: `${process.env.SendGridApiTo}`,
    from: `${process.env.SendGridApiFrom}`,
    templateId: "d-5e9bbe2089744f8da6abb743eef0237c",
    dynamicTemplateData: {
      collection: "Applications",
      body: `${JSON.stringify(req.body)}`,
    },
  };
  sgMail.send(msg);
};
