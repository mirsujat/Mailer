const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      body {
      	Margin: 0!important;
      	padding: 15px;
      	background-color: #FFF;
        text-align: center;
      }

      h3{
        font-size: 18px;
        font-family: verdana;
        color: teal;
      }
      p{
        font-size: 12px;
      }
    </style>
      <body>
        <div style="text-align: center;">
          <h3>We Value your opinion!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
