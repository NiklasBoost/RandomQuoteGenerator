
type QuoteObject = {
  quote: string;
  author: string;
}

type HeaderProps = {
  editButton: boolean;
  toggleEdit: () => void;
  saveChanges: (editedQuote: string, editedAuthor: string) => void;
  allQuotesObjects: QuoteObject[];
};

export function Header({ editButton, toggleEdit, saveChanges }: HeaderProps) {
  return (
    <div className="header">
      <Searchbar />
      <Edit editButton={editButton} toggleEdit={toggleEdit} saveChanges={saveChanges} />
    </div>
  );
}

function Searchbar() {
  return (
    <>
      <div className="placeholder-header"></div>
      <div className="searchbar-container">
        <input className="searchbar" placeholder="search your quote - press enter for search!" />
      </div>
    </>
  );
}

function Edit({ editButton, toggleEdit, saveChanges }) {
  return (
    <div className="edit-container">
      <button className="edit-button-js edit-button">
        edit
      </button>
    </div>
  );
}