function gatherFeedback(feedbackArray) {
  let countPostive = 0;
  let countNegative = 0;
  let countNeutral = 0;
  for (let i = 0; i < feedbackArray.length; i++) {
    if (feedbackArray[i][1] < 4) {
      countNegative++;
    } else if (feedbackArray[i][1] > 3 && feedbackArray[i][1] < 7) {
      countNeutral++;
    } else if (feedbackArray[i][1] > 6 && feedbackArray[i][1] < 11) {
      countPostive++;
    }
  }
  return {
    positive: countPostive,
    negative: countNegative,
    neutral: countNeutral,
  };
}
