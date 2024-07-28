import React from "react";
import "./AddBook.css";
import Navbar from "../Navbar/Navbar";

const AddBook = () => {
  return (
    <>
      <Navbar />
      <div className="addBookForm">
        <input
          className={"addBookFormItem"}
          label={"Book Name"}
          type="text"
          placeholder="book name"
        />
        <input
          className={"addBookFormItem"}
          label={"Book ID"}
          type="text"
          placeholder="book Id"
        />
        <input
          className={"addBookFormItem"}
          type={"Book Author"}
          placeholder="book Author"
        />
        <button className={"addBookFormItem"} onClick={() => {}}>
          Add Book
        </button>
      </div>
    </>
  );
};

export default AddBook;
