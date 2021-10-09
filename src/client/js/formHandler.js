import { isAVaidURL } from "./checkURL";

function handleSubmit(e) {
  e.preventDefault();
  console.log("submitted");
  console.log("submitted33");

  // check what text was put into the form field
  let input = document.getElementById("article-url");
  const inputText = input.value;

  console.log("input was", inputText);

  const FETCH = async (url = "", data = {}) => {
    console.log("checking your data", JSON.stringify(data), data);
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      const receivedDat3 = await response;

      const receivedData = await response.json();
      console.log("receivedData is: ", receivedData, receivedDat3);
      return receivedData;
    } catch (error) {
      console.log("an error occured", error);
    }
  };

  // console.log('?????????????????????' , inputText ,typeof isAVaidURL(inputText) ,Client.isAVaidURL(inputText))

  if (Client.isAVaidURL(inputText)) {
    console.log("input was a valid string ");
    FETCH("http://localhost:8081/api", { url: inputText }).then((res) => {
      document.getElementById(
        "agreement"
      ).innerHTML = `agreement: ${res["agreement"]}`;
      document.getElementById(
        "subjectivity"
      ).innerHTML = `subjectivity: ${res["subjectivity"]}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `confidence: ${res["confidence"]}`;
      document.getElementById("irony").innerHTML = `irony: ${res["irony"]}`;
      console.log(res["score_tag"])

      document.getElementById("score_tag").innerHTML = "score: "+ polarity(res["score_tag"]);
    });
  } else {
    alert("please enter a valid url");
  }
}

const polarity = (P) => {
  let score;
  switch (P) {
    case "P+":
      score = "strong positive";
      break;
    case "P":
      score = "positive";
      break;
    case "NEW":
      score = "neutral";
      break;
    case "N":
      score = "negative";
      break;
    case "N+":
      score = "strong negative";
      break;
    case "NONE":
      score = "no sentiment";
  }
  return score;
};

export { handleSubmit };
// export { polarityChecker };
