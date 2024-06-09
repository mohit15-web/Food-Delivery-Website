import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ClipLoader } from "react-spinners"; // Import a loader component

const AskAi = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSendData() {
    setLoading(true); // Set loading to true when the request starts
    try {
      const API_KEY = "AIzaSyAYhghPB47muOGdbJ-p26A7AUxRSxQ94cw"; // Replace with your API key
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(input);
      const response = result.response;
      const generatedText = response.text();
      setText(generatedText);
    } catch (error) {
      console.error("Error while generating content:", error);
    } finally {
      setLoading(false); // Set loading to false when the request finishes
    }
  }

  return (
    <div className="xl:px-52 px-6 py-40 bg-gray-100 dark:bg-gray-800">
      <div className="top-40 w-full flex flex-col items-center">
        <div>
        <input
          type="text"
          placeholder="Ask for recipes, restaurants, etc."
          className="px-4 py-2 border border-gray-300 shadow-sm focus:outline-none text-xl xl:w-[500px] w-[250px] lg:w-[400px] rounded-3xl"
          style={{ borderRadius: "12px" }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          className="text-xl ml-4 mt-4 bg-orange-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-700"
          onClick={handleSendData}
          disabled={loading}
        >
          <FaArrowCircleUp />
        </button>
        </div>
        <div className="border mt-10 p-10 w-full max-w-3xl bg-white dark:bg-gray-700 rounded-lg shadow-lg">
          {loading ? (
            <div className="flex justify-center items-center">
              <ClipLoader size={50} color={"#123abc"} loading={loading} />
            </div>
          ) : (
            <p className="text-lg leading-6 dark:text-white">{text}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AskAi;
