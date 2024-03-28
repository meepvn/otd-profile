import { writeFile, readdir } from 'fs/promises';

(async () => {
	const files = (await readdir('./src/lib/icons'))
		.filter((name) => name.endsWith('.svg'))
		.flatMap((name) => name.split('.').slice(0, 1));
	const fileContent = `const iconNames = ${JSON.stringify(files)} as const\n\nexport type IconName = typeof iconNames[number]`;
	await writeFile('./src/lib/icons/icon.d.ts', fileContent);
	console.log('Completed!!!!');
})();
