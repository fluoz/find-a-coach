<template>
  <form>
    <h1 class="font-bold text-xl py-3">Login</h1>
    <div class="flex flex-col">
      <label for="name" class="font-semibold py-2">Email</label>
      <input
        class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline"
        id="name"
        type="email"
      />
    </div>

    <div class="flex flex-col">
      <label for="rate" class="font-semibold py-2">Password</label>
      <input
        class="border focus:outline-blue-900 focus:bg-violet-100 focus:outline"
        id="rate"
        type="password"
      />
    </div>
    <div class="py-3 px-1"></div>
    <!-- <p class="text-red-500 mb-2">Please fill in all the input.</p> -->
    <button
      type="submit"
      class="py-2 px-4 inline-block text-white bg-violet-900 hover:bg-purple-800 font-medium rounded-md"
    >
      Login
    </button>
  </form>
</template>
