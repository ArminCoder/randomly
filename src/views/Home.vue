<template>
  <div class="h-screen flex overflow-hidden bg-white">
    <navigation @log-out="logout" />
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div class="lg:hidden">
        <div
          class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5"
        >
          <div>
            <img
              class="h-8 w-auto"
              :src="require(`../assets/img/logo.png`)"
              alt="Logo"
            />
          </div>
          <div>
            <button
              type="button"
              class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 relative z-0 flex overflow-hidden">
        <main
          class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last"
          tabindex="0"
        >
          <div
            v-if="showInfluencers"
            class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8"
          >
            <div class="flex m-2 w-full justify-between">
              <button
                :disabled="isPreviousDisabled"
                @click="loadPrevious"
                class="py-1 px-3 rounded-lg border bg-purple-400 border-purple-300 text-white"
                :class="{ disabledButton: isPreviousDisabled }"
              >
                Previous
              </button>
              <span
                >Please select at least <strong>3</strong> influencers to
                follow</span
              >
              <span>{{ 3 - user.numberOfFollowings }} more to go </span>
              <button
                :disabled="isNextDisabled"
                @click="loadNext"
                :class="{ disabledButton: isNextDisabled }"
                class="py-1 px-3 rounded-lg border bg-purple-400 border-purple-300 text-white"
              >
                Next
              </button>
            </div>
            <div class="bg-gray-200 p-3 rounded-lg">
              <ul
                class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                <li
                  v-for="(influencer, index) in filteredInfluencers"
                  :key="index"
                  class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                >
                  <div class="flex-1 flex flex-col p-8">
                    <img
                      v-if="influencer.profileImage"
                      class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                      :src="influencer.profileImage"
                      alt=""
                    />
                    <img
                      alt=""
                      class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                      v-else
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png"
                    />
                    <h3 class="mt-6 text-gray-900 text-sm font-medium">
                      {{ influencer.firstName + " " + influencer.lastName }}
                    </h3>
                    <dl class="mt-1 flex-grow flex flex-col justify-between">
                      <dt class="sr-only">Title</dt>
                      <dd class="text-gray-500 text-sm">
                        {{ influencer.jobTitle }}
                      </dd>
                      <dt class="sr-only">Role</dt>
                      <dd class="mt-3">
                        <span
                          v-if="
                            !influencer.isFollowing &&
                              !influencersToFollow.includes(influencer.id)
                          "
                          @click="markForFollow(influencer.id)"
                          class="px-3 py-2 cursor-pointer text-purple-800 text-xs font-medium bg-gray-100 hover:bg-gray-300 rounded-full border"
                          >Follow</span
                        >
                        <button
                          v-else
                          class="px-3 py-2 cursor-pointer text-white text-xs font-medium bg-purple-500 hover:bg-purple-300 rounded-full"
                        >
                          Following
                        </button>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
              <div
                v-if="!isNextDisabled"
                class="flex w-full justify-center items-center"
              >
                <button
                  :disabled="isNextDisabled"
                  @click="loadNext"
                  :class="{ disabledButton: isNextDisabled }"
                  class="py-1 px-3 rounded-lg border bg-purple-400 border-purple-300 text-white mt-6 mb-2 mx-auto flex overflow-hidden"
                >
                  <div v-if="loading" class="spinner" style="font-size:16px">
                    <div class="head"></div>
                  </div>
                  <span v-else>
                    Load More
                  </span>
                </button>
                <button
                  @click="location.reload()"
                  class="py-1 px-3 rounded-lg border bg-blue-400 border-blue-300 text-white mt-6 mb-2 mx-auto flex overflow-hidden"
                  v-if="influencersToFollow.length >= 3"
                >
                  To News Feed
                </button>
              </div>
            </div>
          </div>
          <div v-else class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div class="bg-gray-200 p-3 rounded-lg">
              <div
                v-for="post in posts"
                :key="post.id"
                class="flex flex-col max-w-3xl bg-white p-4 border-b-2 mx-auto"
              >
                <!-- {{ posts[index] }} -->
                <div class="flex mb-4 relative">
                  <img
                    class="w-16 h-16 flex-shrink-0 bg-black rounded-full"
                    :src="post.user.profileImage"
                    alt=""
                  />
                  <div class="flex justify-between flex-col w-full">
                    <div>
                      <span class="text-gray-600 ml-3">
                        {{ post.user.firstName + " " + post.user.lastName }}
                      </span>
                      <span class="text-gray-400 text-sm ml-1">
                        @{{ post.user.username }}
                      </span>
                    </div>
                    <div class="pl-3">
                      {{ post.text }}
                    </div>
                  </div>
                  <div
                    class="text-gray-600 time text-sm absolute right-0 top-0 pt-2 px-4"
                  >
                    {{ moment(post.createdOn, "DD/MM/YYYY HH:mm").fromNow() }}
                  </div>
                </div>
                <div class="flex flex-col pl-16">
                  <img
                    v-if="post.image"
                    :src="post.image"
                    class="rounded-lg"
                    alt=""
                  />
                  <div
                    @click="likePost(post.id)"
                    class="flex items-center cursor-pointer"
                  >
                    <img
                      class="h-5 mt-2 w-auto"
                      :src="require(`../assets/img/like.png`)"
                      alt="Like"
                    />
                    <span
                      class="font-bold pt-2 ml-2 text-gray-700"
                      :class="{ 'text-blue-500': post.isLikedByUser }"
                    >
                      {{ post.likesCount }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside
          class="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200"
        >
          <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div class="h-full  border-gray-200 border-dashed rounded-lg"></div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import {
  logoutService,
  getInfluencers,
  followInfluencer,
  getPosts,
  likePost
} from "@/services/apiService";
import Navigation from "../components/Navigation";
import toastMixin from "../mixins/toastMixin";

export default {
  name: "Dashboard",
  components: {
    Navigation
  },

  mixins: [toastMixin],

  data() {
    return {
      hasSelectedInfluencers: false,
      user: {},
      influencers: [],
      previous: "",
      next: "",
      influencersToFollow: [],
      loading: false,
      posts: [],
      showInfluencers: true
    };
  },

  created() {
    this.mapData();
  },

  computed: {
    // because some influencers have the same id
    filteredInfluencers() {
      return this.influencers.filter(
        (v, i, a) => a.findIndex(t => t.id === v.id) === i
      );
    },

    isPreviousDisabled() {
      return this.previous.length < 1;
    },

    isNextDisabled() {
      return this.next.length < 1;
    }
  },

  methods: {
    mapData() {
      this.user = JSON.parse(localStorage.getItem("user"));

      if (!this.user.isInfluencer && this.user.numberOfFollowings.length < 3) {
        this.getInfluencers();
        this.showInfluencers = true;
      } else {
        this.getPosts();
        this.showInfluencers = false;
      }
    },

    markForFollow(id) {
      this.influencersToFollow.push(id);

      this.followInfluencer(id);
    },

    async followInfluencer(id) {
      const response = await followInfluencer(id);

      if (response.error) return this.$displayServerResponse(response);

      this.$displayServerResponse(response);

      // Response would usually be handled by the server, but it doesnt exist so creating a custom one.
      const message = { success: "You are now following this influencer!" };

      this.$displayServerResponse(message);
    },

    async likePost(id) {
      const response = await likePost(id);

      if (response.error) return this.$displayServerResponse(response);

      // Response would usually be handled by the server, but it doesnt exist so creating a custom one.
      const message = { success: "Success!" };

      this.$displayServerResponse(message);

      this.getPosts();
    },

    async getPosts() {
      const response = await getPosts();

      if (response.error) {
        return this.$displayServerResponse(response);
      }

      this.$displayServerResponse(response);

      this.posts = response.results;
    },

    async getInfluencers(page) {
      if (!page) {
        page = "?page=1";
      }

      const data = {
        user: this.user.id
      };

      this.loading = true;

      const response = await getInfluencers(page);

      if (response.error) {
        this.$nextTick(() => {
          this.loading = false;
        }, 1000);
        return this.$displayServerResponse(response);
      }

      this.$displayServerResponse(response);

      this.influencers = response.results;

      if (response.previous && response.previous.includes("page")) {
        this.previous = response.previous.slice(response.previous.length - 7);
      } else {
        this.previous = "";
      }

      if (response.next && response.next.includes("page")) {
        this.next = response.next.slice(response.next.length - 7);
      } else {
        this.next = "";
      }
      this.$nextTick(() => {
        this.loading = false;
      }, 1000);
    },

    loadNext() {
      this.getInfluencers(this.next);
    },

    loadPrevious() {
      this.getInfluencers(this.previous);
    },

    async logout() {
      const response = await logoutService();

      if (response.error) return this.$displayServerResponse(response);

      this.$displayServerResponse(response);

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setTimeout(() => {
        this.$router.push({ name: "login" });
      }, 1000);
    }
  }
};
</script>

<style scoped>
.disabledButton {
  color: rgb(112, 111, 111) !important;
  background: #ccc;
  cursor: not-allowed;
}

.spinner {
  width: 30px;
  height: 30px;
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

.time {
  white-space: nowrap;
}
</style>
