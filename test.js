const req = require("./req");
const { TempMail } = require(".");

const mail = new TempMail("testScript");

mail.autoFetch();

mail.onReady(() => {
  console.log("Email ready! Address:", mail.address);

  const fetch = () => {
    mail.getMail().then((mails) => {
      console.log(mails);

      mail.deleteMail();
    });
  };

  fetch();
  setInterval(fetch, 10 * 1000);
});
