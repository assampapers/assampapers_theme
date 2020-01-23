import BallonEditor from "@ckeditor/ckeditor5-build-balloon-block";

let editor;
BallonEditor.create(document.querySelector("#editor"), {
  toolbar: ["heading", "|", "bold", "italic", "link"]
})
  .then(newEditor => {
    editor = newEditor;

    console.log("Editor is up");
  })
  .catch(err => console.log(err));

const publishdBtn = document.querySelector("#publishdBtn");

publishdBtn.addEventListener("click", () => {
  // Do your thing with data
  const data = editor.data.get();
  console.log(data);
});
