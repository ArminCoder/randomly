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
      </div>
      <div
        class="w-full lg:w-2/3 flex flex-col justify-center py-3 sm:py-12 px-2 sm:px-6 lg:flex-none  lg:px-20 xl:px-24 bg-gray-300"
      >
        <div class="mx-auto w-full max-w-lg">
          <landing />

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
              <form action="#" method="POST" @submit.prevent class="space-y-6">
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
                        v-model="user.firstName"
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
                        v-model="user.lastName"
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
                      v-model="user.email"
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
                      v-model="user.username"
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
                      v-model="user.password"
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
                      v-model="user.dateOfBirth"
                      placeholder="Date of Birth"
                      type="date"
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </form>
              <div class="mt-4">
                <button
                  :disabled="disabled"
                  :class="{ disabled: disabled }"
                  @click="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Get Started
                </button>
              </div>
              <div
                class="mt-4 border-t-2 border-gray-300 pt-3 text-center text-gray-700"
              >
                <span>Already have an account?</span>
                <a
                  class="ml-1 text-purple-600 hover:text-purple-400 font-bold"
                  href="/login"
                  >Sign In</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal :open="isOpen">
      <div class="mt-8 text-gray-100 text-xl truncate">
        Creating your account...
      </div>
      <div class="spinner" style="font-size:16px">
        <div class="head"></div>
      </div>
    </modal>
  </div>
</template>

<script>
import { registerService } from "@/services/apiService";
import moment from "moment";
import toastMixin from "../mixins/toastMixin";
import Landing from "../components/Landing";
import Modal from "../components/Modal";

export default {
  name: "SignUp",
  data() {
    return {
      user: {},
      isOpen: false
    };
  },

  components: {
    Landing,
    Modal
  },

  mixins: [toastMixin],

  computed: {
    disabled() {
      return (
        !this.user.firstName ||
        !this.user.lastName ||
        !this.user.email ||
        !this.user.password ||
        !this.user.username ||
        !this.user.dateOfBirth
      );
    }
  },

  methods: {
    async submit() {
      let data = this.user;

      if (data.dateOfBirth) {
        data.dateOfBirth = moment(String(data.dateOfBirth)).format(
          "DD/MM/YYYY"
        );
      }

      this.isOpen = true;

      const response = await registerService(data);

      if (response.error) {
        this.closeModal();
        return this.$displayServerResponse(response);
      }

      this.$displayServerResponse(response);
      this.closeModal();

      setTimeout(() => {
        this.$router.push({ name: "login" });
      }, 1000);
    },

    closeModal() {
      setTimeout(() => {
        this.isOpen = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.spinner {
  width: 10em;
  height: 10em;
  border-top: 1em solid #d5fff7;
  border-right: 1em solid transparent;
  animation: spinner 0.4s linear infinite;
  border-radius: 50%;
  margin: auto;
}

.head {
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin-left: 8.5em;
  margin-top: 0.5em;
  background-color: #d5fff7;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
