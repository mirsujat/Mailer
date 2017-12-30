Survey.updateOne(
  {
    id: surveyId,
    recipients: {
      $elemMatch: { email: email, responded: false }
    }
  },
  {
    $inc: { [choice]: 1 },
    $set: { 'recipients.$.responded': true }
  }
);

app.delete('/api/surveys/:id', requireLogin, async (req, res) => {
  const surveys = await Surveys.findByIdAndRemove({ _id: req.params.id });
  res.send(surveys);
});

