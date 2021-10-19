import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";
import axios from "axios";

function App() {
  // Define Category
  const [category, saveCategory] = useState("sports");

  const [news, saveNews] = useState([]);

  useEffect(() => {
    const axiosApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=02c776ea37d44e759d9e880141cb37de`;

      const result = await axios.get(url);
      console.log(result.data.articles);
      saveNews(result.data.articles);
    };
    axiosApi();
  }, [category]);

  return (
    <div>
      <Header title="News App"></Header>
      <br />
      <br />
      <div className="container">
        <Form saveCategory={saveCategory}></Form>
        <NewsList news={news}></NewsList>
      </div>
    </div>
  );
}

export default App;
