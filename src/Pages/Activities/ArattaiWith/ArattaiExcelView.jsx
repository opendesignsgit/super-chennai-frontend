import { useEffect, useState } from "react";
import axios from "axios";
import { formatDateTime } from "../QuizGame/utils/dateTime";

export default function ArattaiExcelView() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      "https://api.superchennai.com/api/arattai/arattai"
    );

    if (res.data?.success) {
      const verified = res.data.data.filter(
        (d) => d.is_mobile_verified === true
      );
      setData(verified);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 10000); // live refresh 10 sec
    return () => clearInterval(interval);
  }, []);

  return (


    <>
        <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        <div className="relative z-0">
          <img
            className="eventsCalenderIamge hidden sm:block w-full"
            src="/images/aruna-inne-main-image.jpeg"
            alt=" Carnatic Vocalist"
          />

          <img
            className="block sm:hidden w-full"
            src="/images/inner-page-araattai-image.jpeg"
            alt="Aruna sairam"
          />
        </div>

        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText"></div>
        </div>
      </section>
       <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 20 }}>
         Arattai With Aruna
      </h2>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            fontSize: 14
          }}
        >
          <thead style={{ background: "#f3f4f6", position: "sticky", top: 0 }}>
            <tr>
              <th style={cellStyle}>S.No</th>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Email</th>
              <th style={cellStyle}>Phone</th>
              <th style={cellStyle}>Age</th>
              <th style={cellStyle}>Gender</th>
              <th style={cellStyle}>Date</th>
              <th style={cellStyle}>Time</th>
            </tr>
          </thead>

          <tbody>
            {data.map((d, i) => {
              const { date, time } = formatDateTime(d.created_at);

              return (
                <tr key={d.id}>
                  <td style={cellStyle}>{i + 1}</td>
                  <td style={cellStyle}>{d.name}</td>
                  <td style={cellStyle}>{d.email}</td>
                  <td style={cellStyle}>{d.phone}</td>
                  <td style={cellStyle}>{d.age}</td>
                  <td style={cellStyle}>{d.gender}</td>
                  <td style={cellStyle}>{date}</td>
                  <td style={cellStyle}>{time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: 10, color: "green" }}>
        ● Live updating every 10 seconds
      </p>
    </div>
    </>
 
  );
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};