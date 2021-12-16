import React, { useState, useEffect } from "react";
import { Header } from "./Partials/Header";
import axios from "axios";
import "rsuite/dist/rsuite.min.css";
import { Data } from "./Action";
export const Dashboard = () => {
  let [holidays, setHolidays] = useState([]);
  const getData = async () => {
    await axios
      .get("https://www.gov.uk/bank-holidays.json")
      .then((resp) => {
        const dataCollect = resp.data;
        const keys = Object.keys(resp.data);

        keys.forEach((item) => {
          dataCollect[item]["events"].forEach((elem) => {
            holidays.push(JSON.stringify(elem));
            setHolidays(holidays);
            console.log(elem);
          });
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="main-heading">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <h1>Holidays</h1>
            </div>
            <div className="col-lg-9 col-md-9">
              <form>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Preset</label>
                    <select className="form-control">
                      <option value="">-Select-</option>
                      <option value="">Today</option>
                      <option value="">Yesterday</option>
                      <option value="">Last Week</option>
                    </select>
                  </div>
                  <div className="pt-4">
                    <p>
                      <b>Or</b>
                    </p>
                  </div>
                  <div className="col-sm-3">
                    <label>From</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-sm-3">
                    <label>To</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-sm-2 pt-3">
                    <a href="#">Filter Data</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="customer-page">
          <table
            id="example"
            className="dataTables_main table table-striped table-responsive"
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {console.log(holidays)}
              {holidays != null &&
                holidays.map((item) => {
                  return (
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.date}</td>
                      <td>{item.notes}</td>

                      <td>
                        <h6>
                          <button
                            data-toggle="modal"
                            data-target="#deleteModal"
                          >
                            <img src="images/delete-icon-gray.png" />
                          </button>
                          <button data-toggle="modal" data-target="#editModal">
                            <img src="images/edit-icon.png" />
                          </button>
                        </h6>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
