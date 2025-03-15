
import fs from 'fs';

var file_path = 'C://Users//bharathan//Desktop//test.txt';

fs.readFile(file_path, "utf-8", function (err, data) {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
