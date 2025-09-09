<template>
  <div class="min-h-screen bg-gray-900 text-gray-200 font-sans">
    <!-- Header -->
    <header class="flex flex-col items-center pt-12 mt-10">
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="Profile"
        class="w-28 h-28 rounded-full border-4 border-gray-700"
      />
      <h1 class="text-3xl font-bold mt-4">Rizki Testing</h1>
      <p class="text-gray-400 mt-1">
        This portfolio template is powered by Vue 3
      </p>
      <div class="flex gap-3 mt-4">
        <a
          href="#"
          class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm text-white"
          >Resume</a
        >
        <a href="#" class="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">🌐</a>
        <a href="#" class="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">🐦</a>
        <a href="#" class="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">💼</a>
      </div>
    </header>

    <!-- About Me -->
    <section class="max-w-3xl mx-auto mt-12 px-6">
      <h2 class="text-xl font-semibold mb-4">About Me</h2>
      <p class="text-gray-300 leading-relaxed">
        I love working with modern web technologies and headless architecture. I
        am currently building with TypeScript, Vue 3, TailwindCSS, and Node.js.
      </p>
      <p class="text-gray-300 mt-4 leading-relaxed">
        My passion for coding comes from the innovation of frameworks and
        architectures. I believe the web is undergoing a major breakthrough, and
        I want to contribute to it.
      </p>
      <a href="#" class="inline-block mt-4 text-blue-400 hover:text-blue-300"
        >Learn more →</a
      >
    </section>

    <!-- Toolbox -->
    <section class="max-w-3xl mx-auto mt-12 px-6">
      <h2 class="text-xl font-semibold mb-4">🧰 Toolbox</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="flex items-center gap-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
        >
          <span class="text-lg">{{ skill.icon }}</span>
          <span class="text-sm">{{ skill.name }}</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-16 text-center text-gray-500 text-sm pb-6">
      © 2025 My Portfolio
    </footer>
  </div>
</template>

<script lang="ts" setup>
interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "🌀" },
  { name: "Node.js", icon: "🟢" },
  { name: "Vue.js", icon: "🖖" },
  { name: "Tailwind CSS", icon: "💨" },
];
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 40px;
}
</style>
