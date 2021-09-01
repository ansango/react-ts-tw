import { useAuth } from "../../auth/AuthProvider";
import { useForm } from "../../hooks/useForm";

const Login = () => {
  const { login } = useAuth();
  const [formValues, handleInputChange] = useForm({
    email: "",
  });

  const { email } = formValues;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email.trim().length === 0) {
      return;
    }
    login({ email });
  };
    return (
      <div className="max-w-lg m-auto">
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Type your email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </label>
          <button>Login</button>
        </form>
      </div>
    );
};

export default Login;
