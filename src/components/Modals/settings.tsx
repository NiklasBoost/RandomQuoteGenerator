import { settingsProps } from "../../types/settingsTypes";

export function SettingsModal({
  automaticStatus,
  setAutomaticStatus,
}: settingsProps) {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Settings
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Automatisches Weiterklicken
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("Ausgeschaltet");
                      }}
                    >
                      Ausgeschaltet
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("1 min");
                      }}
                    >
                      1 min
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("2 min");
                      }}
                    >
                      2 min
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("5 min");
                      }}
                    >
                      5 min
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("10 min");
                      }}
                    >
                      10 min
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("20 min");
                      }}
                    >
                      20 min
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("40 min");
                      }}
                    >
                      40 min
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("1 h");
                      }}
                    >
                      1 h
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("2 h");
                      }}
                    >
                      2 h
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("4 h");
                      }}
                    >
                      4 h
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("8 h");
                      }}
                    >
                      8 h
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        setAutomaticStatus("1 d");
                      }}
                    >
                      1 d
                    </a>
                  </li>
                </ul>
              </div>
              <div>Aktueller Status: {automaticStatus}</div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
