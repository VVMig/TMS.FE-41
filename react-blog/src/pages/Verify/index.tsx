import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { authService } from "../../services/auth";
import { Routes } from "../../constants/Routes";

const Verify = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const params = useParams();

  const activeUser = async () => {
    try {
      await authService.verifyEmail({
        uid: params.uid || "",
        token: params.token || "",
      });

      setIsSuccess(true);
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    activeUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <h1>
      {isSuccess ? (
        <div>
          <span>Verification has been passed</span>
          <Link to={Routes.Home}>Home</Link>
        </div>
      ) : (
        <span>Something went wrong</span>
      )}
    </h1>
  );
};

export default Verify;
