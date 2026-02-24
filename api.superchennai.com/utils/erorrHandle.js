
const path = require("path");
const fs = require("fs");

const handleExcelDownloadWithErrorHandle = (app) => {
  app.get("/exports/:filename", (req, res) => {
    const filePath = path.join(__dirname, "../public/exports", req.params.filename);

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(404).send(`
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>File Not Found</title>
              <style>
                body {
                  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                  background-color: #fff0fa;
                  color: #333;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  height: 100vh;
                  margin: 0;
                  text-align: center;
                  padding: 20px;
                }
                .logo {
                  width: 100px;
                  height: auto;
                  margin-bottom: 25px;
                }
                h2 {
                  color: #a44294;
                }
                p {
                  font-size: 18px;
                  margin: 8px 0;
                }
                a {
                  display: inline-block;
                  margin-top: 20px;
                  padding: 10px 20px;
                  background-color: #a44294;
                  color: white;
                  text-decoration: none;
                  border-radius: 6px;
                  font-weight: 500;
                }
                a:hover {
                  background-color: #862d78;
                }
              </style>
            </head>
            <body>
              <h2>⚠️ Excel File Expired</h2>
              <p>This download link has expired or the file was auto-deleted for security reasons.</p>
              <p>Please check your email for the latest attachment.</p>
              <a href="https://superchennai.com">⬅ Back to Home</a>
            </body>
          </html>
        `);
      }

      res.sendFile(filePath);
    });
  });
};

module.exports = handleExcelDownloadWithErrorHandle;
