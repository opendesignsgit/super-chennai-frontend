import { useEffect, useState } from "react";
import axios from "axios";

export default function ManifestoView() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://api.superchennai.com/api/manifesto/manifesto"
      );

      if (res.data?.success) {
        const verified = res.data.data.filter(d => d.is_mobile_verified === true);
        setData(verified);
      }
    } catch (error) {
      console.error("Error fetching manifesto data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 600000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Keep the same banner */}
      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        <div className="relative z-0">
          <img
            className="eventsCalenderIamge hidden sm:block w-full"
            src="https://www.superchennai.com/images/manifesto-innerpage-banner.png"
            alt=" Carnatic Vocalist"
          />

          {/* <img
            className="block sm:hidden w-full"
            src="/images/inner-page-araattai-image.jpeg"
            alt="Aruna sairam"
          /> */}
        </div>

        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText"></div>
        </div>
      </section>

      <div style={{ padding: 20 }}>
        <h2 style={{ marginBottom: 20 }}>Manifesto Submissions</h2>

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
                <th style={cellStyle}>Company</th>
                <th style={cellStyle}>Designation</th>
                {/* <th style={cellStyle}>Manifesto</th> */}
              </tr>
            </thead>

            <tbody>
              {data.map((d, i) => (
                <tr key={d.id}>
                  <td style={cellStyle}>{i + 1}</td>
                  <td style={cellStyle}>{d.name}</td>
                  <td style={cellStyle}>{d.email}</td>
                  <td style={cellStyle}>{d.phone}</td>
                  <td style={cellStyle}>{d.company_name}</td>
                  <td style={cellStyle}>{d.designation}</td>
                  {/* <td style={cellStyle}>{d.manifesto}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: 10, color: "green" }}>
          ● Live updating every 10 Min
        </p>
      </div>
    </>
  );
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};