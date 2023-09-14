import { readdir } from "fs";

const traversal = () => {
  readdir("./", { withFileTypes: true }, (err, files) => {
    if (err) {
      return console.error(err);
    }
    files.forEach((file) => {
      console.log(file.name);
      if (file.isDirectory()) {
        readdir(`./${file.name}`, (err, files2) => {
          files2.forEach((f) => console.log(f));
        });
      }
    });
  });
};

// Recursive version of traversal
const recursive_trav = (pth: string) => {
  readdir(`${pth}`, { withFileTypes: true }, (err, files) => {
    if (err) {
      return console.error(err);
    }
    files.forEach((file) => {
      console.log(`${pth}/${file.name}`);
      if (file.isDirectory()) {
        recursive_trav(`${pth}/${file.name}`);
      }
    });
  });
};

recursive_trav(".");
