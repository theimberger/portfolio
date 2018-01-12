import React from 'react';

const SearchResultsItem = (props) => {

  let itemName = props.item.terms.map((term, index) => {
    let stIndex = term.indexOf(props.searchTerm);
    let spacer = "";
    if (index !== 0 && index !== props.item.terms.length - 1) {
      spacer = ", ";
    }

    if (stIndex !== 0) {
      return <React.Fragment key={index}>{term + spacer}</React.Fragment>;
    }

    return (
      <React.Fragment key={index}>
        <span className="bold">{props.searchTerm}</span>
        {term.slice(stIndex + props.searchTerm.length) + spacer}
      </React.Fragment>
    );
  });


  let primary;

  if (props.item.parent) {
    primary = <span className="primary_term">
                {props.item.parent}/{itemName[0]}
              </span>;
  } else {
    primary = <span className="primary_term">
                {itemName[0]}
              </span>;
  }

  let aliases = null;
  if (itemName.length > 1) {
    aliases = <span className="aliases">
                ({itemName.slice(1)})
              </span>;
  }

  return (
    <li className="search_result_item"
      onClick={(e) => props.itemSelected}>
      {primary}
      {aliases}
    </li>
  );
};

export default SearchResultsItem;
