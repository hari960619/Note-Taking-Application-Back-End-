//notes.js

import fs from "fs";
import chalk from "chalk";

export const addNote = (title, body) => {
  let notes = loadNotes();

  let duplicateNote = notes.filter((note) => note.title === title);

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold.inverse("New note added"));
  } else {
    console.log("Title already Exists");
    console.log(chalk.red.bold.inverse("No new note added"));
  }
};

export const removeNote = (title) => {
  let notes = loadNotes();
  let titleExist = notes.find((note) => {
    return note.title.toLowerCase() === title.toLowerCase();
  });

  if (titleExist) {
    saveNotes(
      notes.filter((note) => note.title.toLowerCase() != title.toLowerCase())
    );
    console.log(chalk.green.inverse("Node Removed"));
  } else {
    console.log("No Matching Title");
    console.log(chalk.red.inverse("NO Node Removed"));
  }
};

export const listNotes = () => {
  console.log("Here is your List:");
  loadNotes().forEach((note) => console.log(note.title));
};

export const readNote = (title) => {
  if (
    loadNotes().find((note) => note.title.toLowerCase() === title.toLowerCase())
  ) {
    console.log(`Here is content of ${title}:`);
    console.log(
      loadNotes().find(
        (note) => note.title.toLowerCase() === title.toLowerCase()
      ).body
    );
  } else {
    console.log("No such Note found");
  }
};

const loadNotes = () => {
  try {
    let bufferedData = fs.readFileSync("notes.json");
    let JSONData = bufferedData.toString();
    return JSON.parse(JSONData);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  let jsonNotes = JSON.stringify(notes);
  fs.writeFileSync("notes.json", jsonNotes);
};
