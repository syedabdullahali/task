import LoginImage from "../../assets/LoginCity.jpg"

const Login = () => {
  return (
    <div  className="bg-gray-100 flex items-center justify-center min-h-screen relative overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={LoginImage}
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        {/* Image overlay for a softer look, similar to the original */}
        <div className="absolute inset-0 bg-white opacity-10"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 sm:p-12 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-gray-900">
            umayajans
          </h1>
          <p className="text-yellow-500 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-6">
            # bilişim hizmetleri
          </p>
          <p className="text-gray-600 text-sm mb-8">
            Lütfen yönetim panelinize girmek için gerekli olan kullanıcı adı ve parolanızı doğru şekilde giriniz.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Kullanıcı Adı</label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Parola</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
          >
            GİRİŞ YAP
          </button>
        </form>

        <div className="text-center mt-6">
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">Parolanızı mı unuttunuz?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
