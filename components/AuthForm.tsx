export default function AuthForm() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="flex flex-col space-y-5 shadow-lg p-5 rounded-xl">
        <div>
          <div>
            <input
              className="border-gray-300 border-[1px] p-2 w-[50vh] rounded-xl mb-2"
              placeholder="Email"
              type="email"
              id="email"
            />
          </div>
          <div>
            <input
              className="border-gray-300 border-[1px] p-2 w-[50vh] rounded-xl mb-2"
              placeholder="Password"
              type="password"
              id="passwword"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-5">
          <button type="submit">Sign In</button>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
