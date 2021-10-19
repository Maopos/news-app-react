import React from "react";
import useSelect from "../hooks/useSelect";

const Form = ({saveCategory}) => {

  const CATEGORIES = [

    {value: 'general', label: 'General' },
    {value: 'business', label: 'Business' },
    {value: 'entertainment', label: 'Entertainment' },
    {value: 'health', label: 'Health' },
    {value: 'science', label: 'Science' },
    {value: 'sports', label: 'Sports' },
    {value: 'technology', label: 'Technology' },
  ]
  

  // useSelect hook
  const [category, SelectNews] = useSelect('sports', CATEGORIES);

  // Submit, send Category to App.js
  const showNews = e => {
    e.preventDefault();
    saveCategory(category);
  }

  return (
    <div className="row">
      <div className="col-12">
        <form onSubmit={showNews}>
          <h3>Category:</h3>
          <br/>
          <SelectNews></SelectNews>
          <br/>
          <div className="input-group mb-3">
            <button
              className="btn btn-primary w-100"
              type="submit"
              id="button-addon2" 
            >
              Show
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
