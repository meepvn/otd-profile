<script lang="ts">
	import logo from '$lib/icons/logo.svg';
	import user from '$lib/icons/user.svg';
</script>

<div class="flex min-h-dvh flex-col bg-[#111111]">
	<header class="flex h-14 items-center justify-end px-5">
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
