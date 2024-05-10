"use client";
import { useEffect, useState } from "react";
import { BlogComponent } from "./blog-component";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    CurrentAffairs: false,
    Education: false,
    Music: false,
    Philosophy: false,
    PoliticalScience: false,
    Science: false,
    History: false,
    Law: false,
    Games: false,
    Books: false,
    FoodandDrink: false,
    DataSource: false,
    WebTech: false,
    Economics: false,
    Medicine: false,
  });
  const [page, pageSize] = useState(100);
  const [responseTime, setResponseTime] = useState("0ms");

  const handleChange = (event: any) => {
    const { id, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: checked,
    }));
  };

  const getBlogs = async () => {
    const response: any = await fetch(`/api/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page, filters, search }),
    }).then((res) => res.json());

    if (response.status) {
      setBlogs(response.data.blogs);
      setCount(response.data.total);
      setResponseTime(response.responseTime);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [filters, search]);

  return (
    <div className="mb-8">
      <div className="container mx-auto px-4 lg:px-0 lg:w-[60%]">
        <input
          className="input-search w-full mb-[1.5rem]"
          type="text"
          placeholder="Search blog by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="customCheckboxGroup flex flex-wrap mb-[1.5rem]">
          <div className="customCheckbox">
            <input
              defaultChecked={filters.CurrentAffairs}
              onChange={(event: any) => handleChange(event)}
              id="CurrentAffairs"
              type="checkbox"
            />
            <label htmlFor="CurrentAffairs">Current Affairs</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.Education}
              onChange={(event: any) => handleChange(event)}
              id="Education"
              type="checkbox"
            />
            <label htmlFor="Education">Education</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.Music}
              onChange={(event: any) => handleChange(event)}
              id="Music"
              type="checkbox"
            />
            <label htmlFor="Music">Music</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.Philosophy}
              onChange={(event: any) => handleChange(event)}
              id="Philosophy"
              type="checkbox"
            />
            <label htmlFor="Philosophy">Philosophy</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.PoliticalScience}
              onChange={(event: any) => handleChange(event)}
              id="PoliticalScience"
              type="checkbox"
            />
            <label htmlFor="PoliticalScience">Political Science</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.Science}
              onChange={(event: any) => handleChange(event)}
              id="Science"
              type="checkbox"
            />
            <label htmlFor="Science">Science</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.History}
              onChange={(event: any) => handleChange(event)}
              id="History"
              type="checkbox"
            />
            <label htmlFor="History">History</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.Law}
              onChange={(event: any) => handleChange(event)}
              id="Law"
              type="checkbox"
            />
            <label htmlFor="Law">Law</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.Games}
              onChange={(event: any) => handleChange(event)}
              id="Games"
              type="checkbox"
            />
            <label htmlFor="Games">Games</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.Books}
              onChange={(event: any) => handleChange(event)}
              id="Books"
              type="checkbox"
            />
            <label htmlFor="Books">Books</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.FoodandDrink}
              onChange={(event: any) => handleChange(event)}
              id="FoodandDrink"
              type="checkbox"
            />
            <label htmlFor="FoodandDrink">Food and Drink</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.DataSource}
              onChange={(event: any) => handleChange(event)}
              id="DataSource"
              type="checkbox"
            />
            <label htmlFor="DataSource">Data Source</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.WebTech}
              onChange={(event: any) => handleChange(event)}
              id="WebTech"
              type="checkbox"
            />
            <label htmlFor="WebTech">Web Tech</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.Economics}
              onChange={(event: any) => handleChange(event)}
              id="Economics"
              type="checkbox"
            />
            <label htmlFor="Economics">Economics</label>
          </div>
          <div className="customCheckbox">
            <input
              defaultChecked={filters.Medicine}
              onChange={(event: any) => handleChange(event)}
              id="Medicine"
              type="checkbox"
            />
            <label htmlFor="Medicine">Medicine</label>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[5rem]">
          <div className="flex items-center">
            <div className="me-3">
              <span>Total: </span>
              <span>{count}</span>
            </div>
            <div>
              <span>Fetched: </span>
              <span>{blogs?.length}</span>
            </div>
          </div>
          <div>
            <span>Response Time: </span>
            <span>{responseTime}</span>
          </div>
        </div>
        <div className="blog-list">
          {blogs?.map((item: any, index: number) => {
            return <BlogComponent data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
