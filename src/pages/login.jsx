import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 3000));
    console.log(data);
    reset();
  };

  return (
    <main className="flex hero  items-center flex-col gap-3 justify-center">
      <form className="forms container mx-auto md:w-[900px] p-4 flex flex-col items-center gap-4 bg-slate-300 rounded">
        <input
          {...register("email", {
            required: "email is required",
          })}
          type="email"
          placeholder="fill out your email here"
          className=" w-full p-3 rounded-md bg-white focus:outline-none focus:ring-1 ring-cyan-200"
        />
        {errors?.email && (
          <p className="text-red-600 self-start">{`${errors.email.message}`}</p>
        )}
        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          })}
          type="password"
          placeholder="password"
          className=" w-full p-3 rounded-md bg-white focus:outline-none focus:ring-1 ring-cyan-200"
        />
        {errors?.password && (
          <p className="text-red-600 self-start">{`${errors.password.message}`}</p>
        )}
        <input
          {...register("confirmPassword", {
            required: "confirm password is required",
            validate: (value) => value === getValues("password"),
          })}
          type="password"
          className=" w-full p-3 rounded-md bg-white focus:outline-none focus:ring-1 ring-cyan-200"
          placeholder="Confirm Password"
        />
        {errors?.confirmPassword && (
          <p className="text-red-600 self-start">{`${errors.confirmPassword.message}`}</p>
        )}
        {getValues("password") !== getValues("confirmPassword") && (
          <p className="text-red-600 self-start">
            confirmPassword must match to password
          </p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="text-white w-full p-3 rounded-md bg-blue-700 disabled:bg-gray-600 focus:outline-none focus:ring-1 ring-cyan-200"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default Login;
