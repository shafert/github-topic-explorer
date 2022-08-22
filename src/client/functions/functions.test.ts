import axios from "axios";
import { getTasks } from "./functions";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getTasks", () => {
  it("should fetch tasks successfully", async () => {
    const data = {
      data: {
        topic: {
          name: "react",
          stargazerCount: 76447,
          relatedTopics: [
            {
              name: "angular",
              stargazerCount: 45022,
            },
            {
              name: "react-native",
              stargazerCount: 25767,
            },
            {
              name: "vue",
              stargazerCount: 50159,
            },
          ],
        },
      },
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getTasks("react")).resolves.toEqual(data);
  });

  it("should fetch tasks erroneously", async () => {
    const errorMessage = "Network Error";

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(getTasks("react")).rejects.toThrow(errorMessage);
  });
});
