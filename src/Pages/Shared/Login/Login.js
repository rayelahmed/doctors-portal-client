import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import Loading from "../Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(eUser || gUser);

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [singingError, setSingingError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
    if (gError || eError) {
      setSingingError(gError?.message || eError?.message);
    }
  }, [token, from, navigate, gError, eError]);

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        setIsLoggedIn(true);
        navigate("/appointment"); // Navigate to the appointment page
      })
      .catch((error) => {
        setSingingError(error.message);
      });
  };

  if (isLoggedIn) {
    return null; // or any other component you want to render after login
  }

  return (
    <div className="flex h-screen items-center justify-center">
      {eLoading || gLoading ? (
        <Loading />
      ) : (
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="text-center text-2xl font-bold ">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-96 max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-96 max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide Valid Email", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
                <label className="label">
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-96 max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-96 max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Your password must be 6 charecter or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
                <label className="label">
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {singingError}
              <input
                className="btn w-96 max-w-xs"
                type="submit"
                value="login"
              />
            </form>
            <p>
              New to Doctors Portal{" "}
              <Link to="/signup" className="text-primary">
                Create New Account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn w-96 max-w-xs"
            >
              Continue With Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Login;
