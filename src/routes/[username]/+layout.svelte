<script lang="ts">
	import logo from '$lib/icons/logo.svg';
	import user from '$lib/icons/user.svg';
</script>

<div class="flex min-h-dvh flex-col bg-gradient-to-b from-gray-700 via-gray-700 to-gray-900">
	<header class="flex justify-end px-4">
		<img src={user} alt="user" />
	</header>
	<main class="flex-1">
		<slot />
	</main>
	<footer class="flex items-center gap-3 px-4 text-blue-200">
		<span>Powered by</span>
		<img src={logo} alt="logo" />
		<span>
			<sup>TM</sup> 2023
		</span>
	</footer>
</div>
