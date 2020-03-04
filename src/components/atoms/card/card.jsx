import React from "react";

export default function Card(props) {
  const {
    id,
    name,
    description,
    html_url,
    forks_count,
    watchers_count,
    stargazers_count,
    owner
  } = props.data;

  console.log("CARD - Component");

  var desc = "";
  if (description) {
    description.length > 70
      ? (desc = description.substring(0, 70))
      : (desc = description);
  }
  if (
    id &&
    name &&
    desc &&
    html_url &&
    forks_count &&
    watchers_count &&
    stargazers_count &&
    owner
  ) {
    return (
      <div key={id} className="col-md-4 mb-4">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div className="card shadow-sm h-100">
          <div className="card" style={{ width: "100%" }}>
            <div style={{ width: "100%", height: 225 }}>
              <img
                src={owner ? owner.avatar_url : ""}
                className="card-img-top"
                alt="..."
                style={{ height: "80%", width: "80%", margin: "10%" }}
              />
            </div>
            <div className="card-body">
              <div style={{ height: 150 }}>
                <h5 className="card-title">
                  {name} from {owner ? owner.login : ""}
                </h5>
                <p className="card-text">{desc}</p>
              </div>

              <div className="container" style={{ height: "50%" }}>
                <div
                  className="row"
                  style={{
                    margin: "auto",
                    marginBottom: "10px"
                  }}
                >
                  <div
                    className="col-sm"
                    style={{
                      margin: "auto",
                      marginBottom: "5px",
                      marginTop: "5px"
                    }}
                  >
                    <a href={html_url} target="_blank">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "2px solid #0367E5",
                          borderRadius: 10,
                          backgroundColor: "#0367E5",
                          color: "#FFFFFF",
                          height: "100%"
                        }}
                      >
                        View
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-sm"
                    style={{
                      margin: "auto",
                      marginBottom: "5px",
                      marginTop: "5px"
                    }}
                  >
                    <a>
                      <div
                        style={{
                          border: "2px solid #0367E5",
                          borderRadius: 10,
                          backgroundColor: "#0367E5",
                          opacity: "0.6",
                          color: "#FFFFFF"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          <i className="fa fa-eye"></i> Watch
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          {" "}
                          {watchers_count}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="row" style={{ margin: "auto" }}>
                  <div
                    className="col-sm"
                    style={{
                      margin: "auto",
                      marginBottom: "5px",
                      marginTop: "5px"
                    }}
                  >
                    <a>
                      <div
                        style={{
                          border: "2px solid #0367E5",
                          backgroundColor: "#0367E5",
                          opacity: "0.6",
                          borderRadius: 10,
                          color: "#FFFFFF"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          <i
                            className="fa fa-star"
                            style={{ marginRight: "1px" }}
                          ></i>{" "}
                          Star
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          {" "}
                          {stargazers_count}
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-sm"
                    style={{
                      margin: "auto",
                      marginBottom: "5px",
                      marginTop: "5px"
                    }}
                  >
                    <a>
                      <div
                        style={{
                          border: "2px solid #0367E5",
                          backgroundColor: "#0367E5",
                          borderRadius: 10,
                          opacity: "0.6",
                          color: "#FFFFFF"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          <i
                            className="fas fa-code-branch"
                            style={{ marginRight: "1px" }}
                          ></i>{" "}
                          Forks
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          {" "}
                          {forks_count}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
