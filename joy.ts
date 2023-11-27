import axios from "axios";

let fetch = async (
  uri: string,
  config: {
    method: string;
    headers: {
      Accept: string;
      "Content-Type": string;
    };
    body: any;
  }
) => {
  try {
    // let res: any = await axios.post(uri, config.body, {
    //   headers: config.headers,
    //   timeout: 3000000,
    // });

    let res: any = await axios({
      url: uri,
      // headers: config.headers,
      method: config.method,
      data: { ...config.body },
    });
    console.log(res.data, "res ooo");
    return res.data;
  } catch (error) {
    console.log(error, "error ooo");
    return error;
  }
};
let jd: string = "Maintain old and new codebases";
const gptCall = async (uri: string, payload: any) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = `https://tublian-gpt-copilot-lb-c0023dfc8626728f.elb.us-east-1.amazonaws.com/gpt/${uri}`;
  // const url = `http://localhost:8000/gpt/${uri}`;

  console.log(url);

  var response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: payload,
  });
  // console.log(response, "response");
  return response.data;
};

const fetchJdSummary = async () => {
  const response = await gptCall("developer/playground/jd/summary", {
    jd: jd,
  });
  return response;
};

const fetchJdTopics = async () => {
  const response = await gptCall("developer/playground/jd/topics", {
    jd: jd,
  });
  return response;
};

const fetchMockInterviewQuestions = async () => {
  const response = await gptCall("developer/playground/jd/questions", {
    jd: jd,
  });
  return response;
};

const recommendProjects = async () => {
  const response = await gptCall("project/search", {
    query: jd,
  });
  return response;
};

const fetchCoverLetter = async () => {
  const response = await gptCall("developer/playground/coverletter", {
    jd: jd,
    name: "Nilanjan Raychaudhuri",
    shortBio: "Helping emerging developers to standout",
    story: `
            One key skill developers must have
            passion to learn new things

            Love programming because
            it gives me superpower to build things

            Worst bug I have fixed
            race condition

            Worst bug I have introduced
            spawned too many threads and took the production server down

            First Programming Language
            C

            I am most proud of
            building Tublian
            `,
    projects: `
            "nraychaudhuri, this is my profile repo" and "tublian-haskell-katas, testing out new Tublian exercises"
            `,
    passion: `
            "Scala, JavaScript, Java and Ruby"
            `,
  });

  // console.log(response);
  return response;
};

// fetchCoverLetter();
fetchJdSummary();
