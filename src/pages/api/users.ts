import { NextApiRequest, NextApiResponse } from "next";

export default (request, response) => {
  const users = [
    { id: 1, name: "Diego" },
    { id: 1, name: "Diego" },
    { id: 1, name: "Diego" },
  ];

  return response.json(users);
};
