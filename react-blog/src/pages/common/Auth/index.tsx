import { Button, CircularProgress } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import "./styles.scss";

interface IProps {
  children: React.ReactNode;
  initialValues: any;
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>;
  validationSchema: any;
  isLoading: boolean;
  submitButtonText: string;
  title: string;
}

export const Auth = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  isLoading,
  title,
  submitButtonText,
}: IProps) => {
  return (
    <div className="auth-container">
      <h2>{title}</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form
          style={{
            marginTop: 12,
            display: "grid",
            maxWidth: 400,
            width: "100%",
            rowGap: 12,
          }}
        >
          {children}
          <Button
            variant="contained"
            type="submit"
            endIcon={
              isLoading ? <CircularProgress color="secondary" /> : undefined
            }
          >
            {submitButtonText}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
