import React, { useState, useEffect } from "react";
import { get } from "aws-amplify/api";

export const GitHubBornOn = () => {
  const [borninfo,updateBorn] = useState([]);

  // Define a constant that is a function to call API
  const getGitHubInfoByUser = async () => {
    // an asynch lambda that goes to
    const restOperation = await get({
      apiName: "cryptoapi",
      path: "/born"
    });




    const { body } = await restOperation.response;
    const json = await body.json();
    updateBorn(json.born);

  };

  useEffect(() => {
    getGitHubInfoByUser();
  }, []);

 
  return (
    <h2>
      The GitHub user {borninfo.login} was born on {borninfo.created_at}
    </h2>
  );
};


