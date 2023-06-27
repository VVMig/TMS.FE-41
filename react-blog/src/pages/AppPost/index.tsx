import { Form, Formik } from "formik";
import { DefaultTextField } from "../../components";
import "./styles.scss";
import { Button, CircularProgress } from "@mui/material";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { postsService } from "../../services";
import { toast } from "react-toastify";

const PostSchema = Yup.object().shape({
  title: Yup.string().min(2).required("Required"),
  lessonNumber: Yup.number().min(1).required("Required"),
  description: Yup.string().min(2),
  text: Yup.string().min(2).required("Required"),
});

const AddPost = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [file, setFile] = useState<Blob | null>(null);
  const [previewFile, setPreviewFile] = useState<string | ArrayBuffer | null>(
    null
  );

  const onSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      formData.append("file", file as Blob);

      const { data } = await postsService.addPost({
        title: values.title,
        description: values.description,
        lesson_num: values.lessonNumber,
        text: values.text,
        image: formData.get("file"),
      });

      toast.success(`${data.name} post has been created`);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    e.preventDefault();

    const data = await Promise.all(
      Array.from(e.target.files as FileList).map(
        (file) =>
          new Promise((res) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file as Blob);

            fileReader.onload = () => {
              res(fileReader.result);
            };
          })
      )
    );

    setFile(e.target.files?.[0] as Blob);

    setPreviewFile(data[0] as string);
  };

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          lessonNumber: 0,
          description: "",
          text: "",
        }}
        validationSchema={PostSchema}
        onSubmit={onSubmit}
      >
        <Form className="add_post_form">
          <DefaultTextField label="Title" name="title" />
          <div className="add_post_form__row">
            <DefaultTextField
              label="Lesson number"
              type="number"
              name="lessonNumber"
            />
            <Button
              variant="contained"
              onClick={() => {
                inputRef?.current?.click();
              }}
            >
              Upload image
            </Button>
          </div>
          {previewFile && <img src={previewFile as string} alt="" />}
          <DefaultTextField label="Description" name="description" multiline />
          <DefaultTextField label="Text" name="text" multiline />
          <Button
            variant="contained"
            type="submit"
            endIcon={
              isLoading ? <CircularProgress color="secondary" /> : undefined
            }
          >
            Add
          </Button>
        </Form>
      </Formik>
      <input
        ref={inputRef}
        type="file"
        style={{
          display: "none",
        }}
        onChange={onChangeFile}
      />
    </>
  );
};

export default AddPost;
