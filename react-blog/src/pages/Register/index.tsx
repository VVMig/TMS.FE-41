import { DefaultTextField } from "../../components";
import * as Yup from "yup";
import { authService } from "../../services/auth";
import { useState } from "react";
import "../common/Auth/styles.scss";
import { Auth } from "../common";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(4, "Too shoort name").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too short password. At least 8 characters")
    .required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
};

type FormikValues = typeof initialValues;

const Register = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: FormikValues) => {
    try {
      setIsLoading(true);

      const { data: user } = await authService.register(values);

      setUser(user);
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    return <h1>Dear {user.username}, pls verify your email</h1>;
  }

  return (
    <Auth
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={RegisterSchema}
      submitButtonText="Register"
      title="Register"
      isLoading={isLoading}
    >
      <DefaultTextField label="Email" variant="outlined" name="email" />
      <DefaultTextField
        label="Username"
        variant="outlined"
        placeholder="Username"
        name="username"
      />
      <DefaultTextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />
    </Auth>
  );
};

export default Register;
