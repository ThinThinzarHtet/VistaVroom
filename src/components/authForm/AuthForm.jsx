import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Checkbox,
  Typography,
} from "@material-tailwind/react";

import { RxCross1 } from "react-icons/rx";
import PrimaryButton from "../PrimaryButton";

const AuthForm = ({
  isLoginFormOpen,
  isSignUpFormOpen,
  toggleIsLoginForm,
  toggleIsSignUpForm,
  isDrawerOpen,
}) => {
  const formOpenState = isLoginFormOpen
    ? toggleIsLoginForm
    : toggleIsSignUpForm;

  return (
    <Dialog
      open={isLoginFormOpen ? isLoginFormOpen : isSignUpFormOpen}
      handler={formOpenState}
      size="sm"
    >
      <DialogHeader className="flex justify-end pb-0">
        <span
          onClick={() => {
            formOpenState();
            if (isDrawerOpen) {
              document.body.classList.add("overflow-hidden");
            }
          }}
          className="cursor-pointer"
        >
          <RxCross1 />
        </span>
      </DialogHeader>
      <DialogBody className="px-10">
        <p className="uppercase text-dark-gray font-bold text-center text-2xl mb-5">
          {isLoginFormOpen ? "Login" : "Sign up"}
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="uppercase text-dark-gray font-bold"
            >
              Email address
            </label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="w-full placeholder-subtitle-gray border rounded-[4px] focus:ring-primary-green focus:border-primary-green text-dark-gray"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="uppercase text-dark-gray font-bold"
            >
              Password
            </label>
            <input
              id="password"
              type="text"
              placeholder="Password"
              className="w-full placeholder-subtitle-gray border rounded-[4px] focus:ring-primary-green focus:border-primary-green text-dark-gray"
            />
          </div>
        </div>
        {isLoginFormOpen ? (
          <div className="flex justify-between items-center">
            <Checkbox
              color="light-green"
              label="Remember Me"
              className="focus:ring-0"
            />
            <span className="text-sm hover:cursor-pointer hover:underline hover:text-primary-green">
              Forgot password?
            </span>
          </div>
        ) : (
          <Checkbox
            color="light-green"
            className="focus:ring-0"
            label={
              <Typography color="blue-gray" className="flex font-medium">
                I agree with the
                <Typography
                  as="a"
                  href="#"
                  color="blue"
                  className="font-medium transition-colors hover:text-blue-700"
                >
                  &nbsp;terms and conditions
                </Typography>
                .
              </Typography>
            }
          />
        )}
      </DialogBody>
      <DialogFooter className="flex flex-col items-center px-10">
        <PrimaryButton
          className="w-full"
          small={false}
          authForm={true}
          onClick={() => {
            if (isDrawerOpen) {
              document.body.classList.add("overflow-hidden");
            }
            isLoginFormOpen ? toggleIsLoginForm() : toggleIsSignUpForm();
          }}
        >
          {isLoginFormOpen ? "Log In" : "Sign Up"}
        </PrimaryButton>
        <Typography
          variant="small"
          className="mt-4 flex justify-center items-center"
        >
          {isLoginFormOpen
            ? "Don't have an account?"
            : "Already have an account?"}
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
            onClick={() => {
              console.log("click");
              if (isLoginFormOpen || isSignUpFormOpen) {
                toggleIsSignUpForm();
                toggleIsLoginForm();
              }
            }}
          >
            {isLoginFormOpen ? "Sign up" : "Login"}
          </Typography>
        </Typography>
      </DialogFooter>
    </Dialog>
  );
};

export default AuthForm;
