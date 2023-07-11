import { useEffect, useState } from "react";
import { DefaultTextField } from "../../components";
import { authService } from "../../services/auth";
import * as Yup from "yup";
import { LOCAL_STORAGE_KEYS } from "../../constants/LocalStorageKeys";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { setUser } from "../../store/reducers/user";
import "../common/Auth/styles.scss";
import { Auth } from "../common";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

type FormikValues = typeof initialValues;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useSelector((store: any) => store.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (values: FormikValues) => {
    try {
      setIsLoading(true);

      const { data: accessRefreshTokens } =
        await authService.getAccessRefreshTokens(values);

      localStorage.setItem(
        LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
        accessRefreshTokens.access
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.REFRESH_TOKEN,
        accessRefreshTokens.refresh
      );

      const { data: user } = await authService.getCurrentUser();

      dispatch(setUser(user));
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      return navigate(Routes.Home);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Auth
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={LoginSchema}
      submitButtonText="Login"
      title="Login"
      isLoading={isLoading}
    >
      <DefaultTextField label="Email" variant="outlined" name="email" />
      <DefaultTextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />
    </Auth>
  );
};

export default Login;
