export function Header() {
  return (
    <div className="header">
      <PlaceholerHeader />
      <Searchbar />
      <Edit />
    </div>
  )
}

function PlaceholerHeader() {
  return <div className="placeholder-header"></div>;
}

function Searchbar() {
  return (
    <div className="searchbar-container">
      <input className="searchbar" placeholder="search your quote - press enter for search!" />
    </div>
  );
}

function Edit() {
  return (
    <div className="edit-container">
      <button className="edit-button-js edit-button">
        edit
      </button>
    </div>
  )
}