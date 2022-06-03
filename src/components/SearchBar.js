import React from "react";

export default function SearchBar(props) {
  return (
    <form
      className="text-center mb-3"
      onSubmit={props.onSubmit}
      style={{ fontFamily: "Lexend Deca" }}
    >
      <input
        type="search"
        className="yeet p-2 border-none rounded-l-md shadow-sm"
        placeholder="Search by country.."
        ref={props.refvar}
      />
      <button
        className="p-2 border-none text-white rounded-r-md shadow-sm"
        type="submit"
        style={{ backgroundColor: "#8f94fb" }}
      >
        Search
      </button>
    </form>
  );
}
