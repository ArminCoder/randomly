<template>
  <div>
    <div class="min-h-screen bg-white flex">
      <div class="hidden lg:block lg:w-1/3 relative w-0 flex-1">
        <div
          class="absolute top-0 p-8 text-white text-3xl mt-4 font-bold text-left w-full z-10"
        >
          <span>A simple social network.</span>
          <br />
          <span>Random as well.</span>
        </div>
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="require('../assets/img/login.jpg')"
          alt=""
        />
        />
      </div>
      <div
        class="w-full lg:w-2/3 flex flex-col justify-center py-3 sm:py-12 px-2 sm:px-6 lg:flex-none  lg:px-20 xl:px-24 bg-gray-300"
      >
        <div class="mx-auto w-full max-w-lg">
          <div>
            <img
              class="hidden sm:block  h-16 w-auto mx-auto rounded"
              :src="require('../assets/img/logo.png')"
              alt="Workflow"
            />
            <h2
              class="mt-3 sm:mt-6 text-3xl font-extrabold text-gray-900 text-center"
            >
              Randomly
            </h2>
          </div>

          <div
            class="mt-3 sm:mt-8 border-t-4 border-purple-400 py-3 rounded px-4 bg-gray-200"
          >
            <div>
              <div>
                <p class="text-lg font-medium text-gray-700 text-center">
                  Create an account
                </p>
              </div>
            </div>

            <div class="mt-6">
              <form action="#" method="POST" class="space-y-6">
                <div class="flex">
                  <div class="mr-1">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <div class="mt-1">
                      <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div class="ml-1">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <div class="mt-1">
                      <input
                        name="lastName"
                        type="text"
                        required
                        placeholder="Last Name"
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div class="mt-1">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div class="mt-1">
                    <input
                      name="username"
                      type="text"
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div class="mt-1">
                    <input
                      name="password"
                      placeholder="Password"
                      type="password"
                      autocomplete="off"
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <div class="mt-1">
                    <input
                      name="dateOfBirth"
                      placeholder="Date of Birth"
                      type="date"
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Get Started
                  </button>
                </div>
              </form>
              <div
                class="mt-4 border-t-2 border-gray-300 pt-3 text-center text-gray-700"
              >
                <span>Already have an account?</span>
                <a class="ml-1" href="/login">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
