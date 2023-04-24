//app.js

import chalk from "chalk";
import yargs from "yargs";
import { addNote, removeNote, listNotes, readNote } from "./notes.js";

// Creating add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
}).argv;

// Creating remove command
yargs.command({
  command: "remove",
  describe: "remove a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    removeNote(argv.title);
  },
}).argv;

// Creating list command
yargs.command({
  command: "list",
  describe: "listing all the notes",
  handler: function () {
    listNotes();
  },
}).argv;

// Creating read command
yargs.command({
  command: "read",
  describe: "read the note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    readNote(argv.title);
  },
}).argv;

yargs.parse();
